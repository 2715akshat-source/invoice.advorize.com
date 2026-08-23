/**
 * The PDF.
 *
 * Drawn with pdf-lib in the visitor's own tab — the invoice, its logo, the
 * client's address and the bank details on it never leave the machine. That
 * is the reason this is hand-drawn rather than an HTML-to-PDF service call,
 * and it is also why it is vector: real text, selectable and searchable, at
 * about 40KB rather than a megabyte of screenshot.
 *
 * Layout is a single downward cursor (`Sheet.y`). Anything that would run off
 * the bottom asks for a new page first, and the item table repeats its header
 * when it does. Page numbers are stamped at the very end, once the total is
 * known.
 */
import { PDFDocument, rgb, type PDFPage, type RGB } from "pdf-lib";
import { Fonts, hexToRgb, tint } from "./font";
import {
  computeTotals,
  docTypeLabel,
  formatDate,
  lineTotal,
  type Invoice,
} from "../invoice";
import { amountInWords, formatMoney, groupDigits } from "../currency";

/* A4 portrait, in points. */
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 44;
const CONTENT_W = PAGE_W - MARGIN * 2;
/** Everything above this line is body; below it belongs to the footer. */
const BOTTOM = 64;

const INK = rgb(0.06, 0.06, 0.07);
const MUTED = rgb(0.45, 0.46, 0.49);
const HAIRLINE = rgb(0.87, 0.87, 0.88);
const WHITE = rgb(1, 1, 1);

type Style = {
  /** solid colour band behind the masthead */
  band: boolean;
  /** tinted fill behind the item table's header row */
  tableHeadFill: RGB | null;
  tableHeadInk: RGB;
  /** hairlines between item rows */
  rowRules: boolean;
  titleSize: number;
  titleColor: RGB;
};

function styleFor(invoice: Invoice, accent: RGB): Style {
  switch (invoice.template) {
    case "modern":
      return {
        band: true,
        tableHeadFill: accent,
        tableHeadInk: WHITE,
        rowRules: true,
        titleSize: 26,
        titleColor: WHITE,
      };
    case "minimal":
      return {
        band: false,
        tableHeadFill: null,
        tableHeadInk: MUTED,
        rowRules: true,
        titleSize: 20,
        titleColor: INK,
      };
    default:
      return {
        band: false,
        tableHeadFill: tint(accent, 0.88),
        tableHeadInk: INK,
        rowRules: true,
        titleSize: 30,
        titleColor: accent,
      };
  }
}

/** The page cursor. Every draw call moves `y` down. */
class Sheet {
  page: PDFPage;
  y = PAGE_H - MARGIN;
  readonly pages: PDFPage[] = [];

  constructor(
    private readonly doc: PDFDocument,
    private readonly onNewPage?: (sheet: Sheet) => void,
  ) {
    this.page = this.add();
  }

  private add(): PDFPage {
    const page = this.doc.addPage([PAGE_W, PAGE_H]);
    this.pages.push(page);
    this.page = page;
    this.y = PAGE_H - MARGIN;
    return page;
  }

  /** Room for `height` more points on this page? */
  fits(height: number): boolean {
    return this.y - height >= BOTTOM;
  }

  /** Guarantees `height` points of room, starting a page if it must. */
  need(height: number) {
    if (this.fits(height)) return;
    this.add();
    this.onNewPage?.(this);
  }

  break() {
    this.add();
    this.onNewPage?.(this);
  }

  rule(color: RGB = HAIRLINE, width = 0.75) {
    this.page.drawLine({
      start: { x: MARGIN, y: this.y },
      end: { x: MARGIN + CONTENT_W, y: this.y },
      thickness: width,
      color,
    });
  }
}

/* ------------------------------------------------------------------ main */

export type RenderResult = {
  bytes: Uint8Array;
  /** characters the embedded fonts could not draw, for the UI to surface */
  dropped: string[];
};

export async function renderInvoice(invoice: Invoice): Promise<RenderResult> {
  const doc = await PDFDocument.create();
  const F = await Fonts.load(doc);

  const totals = computeTotals(invoice);
  const currency = totals.currency;
  const accent = hexToRgb(invoice.accent);
  const style = styleFor(invoice, accent);

  const title = docTypeLabel(invoice.docType).toUpperCase();

  doc.setTitle(`${docTypeLabel(invoice.docType)} ${invoice.number}`.trim());
  doc.setAuthor(invoice.from.name || "Advorize Invoice Generator");
  doc.setSubject(
    invoice.to.name ? `For ${invoice.to.name}` : "Invoice",
  );
  doc.setCreator("Advorize Invoice Generator — invoice.advorize.com");
  doc.setProducer("pdf-lib");

  /* Continuation pages get a slim running head rather than the full
     masthead, so page two is recognisably the same document without
     wasting a third of it on the logo again. */
  const sheet = new Sheet(doc, (s) => {
    F.draw(s.page, `${title} ${invoice.number}`.trim(), {
      x: MARGIN,
      y: s.y - 9,
      size: 8.5,
      weight: "bold",
      color: MUTED,
    });
    const right = invoice.from.name;
    if (right) {
      const w = F.width(right, 8.5, "regular");
      F.draw(s.page, right, {
        x: MARGIN + CONTENT_W - w,
        y: s.y - 9,
        size: 8.5,
        color: MUTED,
      });
    }
    s.y -= 22;
    s.rule();
    s.y -= 20;
  });

  const signature = await embedImage(doc, invoice.signature);

  await masthead(doc, sheet, F, invoice, style, accent, title);
  parties(sheet, F, invoice, accent);
  items(sheet, F, invoice, style);
  summary(sheet, F, invoice, totals, accent);
  closing(sheet, F, invoice, signature);
  footers(sheet, F, invoice);

  return { bytes: await doc.save(), dropped: [...F.dropped] };
}

/* -------------------------------------------------------------- masthead */

async function masthead(
  doc: PDFDocument,
  s: Sheet,
  F: Fonts,
  invoice: Invoice,
  style: Style,
  accent: RGB,
  title: string,
) {
  const logo = await embedImage(doc, invoice.logo);
  const LOGO_MAX_H = 46;
  const LOGO_MAX_W = 180;

  if (style.band) {
    /* full-bleed accent band; the cursor starts below it */
    const H = 104;
    s.page.drawRectangle({
      x: 0,
      y: PAGE_H - H,
      width: PAGE_W,
      height: H,
      color: accent,
    });

    let leftY = PAGE_H - 40;
    if (logo) {
      const dims = fit(logo.width, logo.height, LOGO_MAX_W, 34);
      s.page.drawImage(logo.image, {
        x: MARGIN,
        y: PAGE_H - 34 - dims.height / 2 - 6,
        width: dims.width,
        height: dims.height,
      });
      leftY = PAGE_H - 78;
    }
    F.draw(s.page, invoice.from.name || "Your business", {
      x: MARGIN,
      y: leftY - 8,
      size: 13,
      weight: "bold",
      color: WHITE,
    });

    const tw = F.width(title, style.titleSize, "bold");
    F.draw(s.page, title, {
      x: MARGIN + CONTENT_W - tw,
      y: PAGE_H - 52,
      size: style.titleSize,
      weight: "bold",
      color: WHITE,
    });
    const num = invoice.number ? `#${invoice.number}` : "";
    if (num) {
      const nw = F.width(num, 10, "regular");
      F.draw(s.page, num, {
        x: MARGIN + CONTENT_W - nw,
        y: PAGE_H - 70,
        size: 10,
        color: WHITE,
        opacity: 0.85,
      });
    }

    s.y = PAGE_H - H - 26;
  } else {
    const top = s.y;

    if (logo) {
      const dims = fit(logo.width, logo.height, LOGO_MAX_W, LOGO_MAX_H);
      s.page.drawImage(logo.image, {
        x: MARGIN,
        y: top - dims.height,
        width: dims.width,
        height: dims.height,
      });
      s.y = top - dims.height - 12;
    } else {
      F.draw(s.page, invoice.from.name || "Your business", {
        x: MARGIN,
        y: top - 16,
        size: 16,
        weight: "bold",
        color: INK,
      });
      s.y = top - 24;
    }

    /* title block, right aligned against the top margin */
    const tw = F.width(title, style.titleSize, "bold");
    F.draw(s.page, title, {
      x: MARGIN + CONTENT_W - tw,
      y: top - style.titleSize + 4,
      size: style.titleSize,
      weight: "bold",
      color: style.titleColor,
    });
  }

  /* ------------------------------------------------- the meta strip */
  const meta: [string, string][] = [];
  /* the band template already prints the number beside the title */
  if (invoice.number && !style.band) meta.push(["Number", invoice.number]);
  meta.push(["Issue date", formatDate(invoice.issueDate)]);
  if (invoice.docType !== "receipt" && invoice.dueDate) {
    meta.push([
      invoice.docType === "quotation" ? "Valid until" : "Due date",
      formatDate(invoice.dueDate),
    ]);
  }
  if (invoice.reference) meta.push(["Reference", invoice.reference]);

  s.y = Math.min(s.y, PAGE_H - MARGIN - 58);
  s.need(46);

  /* laid out right-to-left so the block always ends flush with the margin */
  const cells = meta.map(([label, value]) => ({
    label,
    value,
    width:
      Math.max(F.width(label, 8, "bold"), F.width(value, 9.5, "regular")) + 26,
  }));
  const totalW = cells.reduce((sum, c) => sum + c.width, 0);
  let x = MARGIN + CONTENT_W - totalW + 26;

  for (const cell of cells) {
    F.draw(s.page, cell.label.toUpperCase(), {
      x,
      y: s.y - 8,
      size: 7,
      weight: "bold",
      color: MUTED,
    });
    F.draw(s.page, cell.value, {
      x,
      y: s.y - 22,
      size: 9.5,
      weight: "bold",
      color: INK,
    });
    x += cell.width;
  }

  s.y -= 34;
  s.rule(accent, 1.4);
  s.y -= 22;
}

/* --------------------------------------------------------------- parties */

function parties(s: Sheet, F: Fonts, invoice: Invoice, accent: RGB) {
  const columns: { heading: string; party: typeof invoice.from }[] = [
    { heading: "From", party: invoice.from },
    {
      heading: invoice.docType === "quotation" ? "Quotation for" : "Bill to",
      party: invoice.to,
    },
  ];
  if (invoice.showShipTo && (invoice.shipTo.name || invoice.shipTo.address)) {
    columns.push({ heading: "Ship to", party: invoice.shipTo });
  }

  const gap = 20;
  const colW = (CONTENT_W - gap * (columns.length - 1)) / columns.length;

  /* measure first — all columns start on the same page and the same line */
  const blocks = columns.map(({ heading, party }) => {
    const lines: { text: string; size: number; weight: "regular" | "bold"; color: RGB }[] = [];
    if (party.name)
      lines.push({ text: party.name, size: 11, weight: "bold", color: INK });
    for (const line of party.address
      ? F.wrap(party.address, 9, "regular", colW)
      : [])
      lines.push({ text: line, size: 9, weight: "regular", color: MUTED });
    if (party.taxId)
      lines.push({
        text: `${taxLabelFor(invoice)}: ${party.taxId}`,
        size: 9,
        weight: "regular",
        color: MUTED,
      });
    if (party.email)
      lines.push({ text: party.email, size: 9, weight: "regular", color: MUTED });
    if (party.phone)
      lines.push({ text: party.phone, size: 9, weight: "regular", color: MUTED });
    return { heading, lines };
  });

  const tallest = Math.max(...blocks.map((b) => b.lines.length));
  s.need(tallest * 13 + 30);

  const top = s.y;
  blocks.forEach((block, i) => {
    const x = MARGIN + i * (colW + gap);
    F.draw(s.page, block.heading.toUpperCase(), {
      x,
      y: top - 8,
      size: 7,
      weight: "bold",
      color: accent,
    });
    let y = top - 24;
    for (const line of block.lines) {
      F.draw(s.page, F.clip(line.text, line.size, line.weight, colW), {
        x,
        y,
        size: line.size,
        weight: line.weight,
        color: line.color,
      });
      y -= line.size === 11 ? 15 : 12.5;
    }
  });

  s.y = top - 24 - tallest * 13 - 14;
}

/** GSTIN in India, VAT elsewhere — the label follows the currency. */
const taxLabelFor = (invoice: Invoice) =>
  invoice.currencyCode === "INR" ? "GSTIN" : "Tax ID";

/* ----------------------------------------------------------- items table */

function items(s: Sheet, F: Fonts, invoice: Invoice, style: Style) {
  const currency = computeTotals(invoice).currency;
  const perItemTax = invoice.taxMode === "per-item";

  const W = {
    index: 22,
    qty: 48,
    rate: 82,
    tax: perItemTax ? 46 : 0,
    amount: 88,
  };
  const descW = CONTENT_W - (W.index + W.qty + W.rate + W.tax + W.amount) - 8;

  const X = {
    index: MARGIN,
    desc: MARGIN + W.index,
    qty: MARGIN + W.index + descW + 8,
    rate: MARGIN + W.index + descW + 8 + W.qty,
    tax: MARGIN + W.index + descW + 8 + W.qty + W.rate,
    amount: MARGIN + CONTENT_W - W.amount,
  };

  const HEAD_H = 24;

  const head = () => {
    s.need(HEAD_H + 30);
    if (style.tableHeadFill) {
      s.page.drawRectangle({
        x: MARGIN,
        y: s.y - HEAD_H,
        width: CONTENT_W,
        height: HEAD_H,
        color: style.tableHeadFill,
      });
    } else {
      s.rule(INK, 1);
    }

    const baseline = s.y - HEAD_H + 8;
    const ink = style.tableHeadInk;
    const pad = style.tableHeadFill ? 8 : 0;

    F.draw(s.page, "#", { x: X.index + pad, y: baseline, size: 7.5, weight: "bold", color: ink });
    F.draw(s.page, "DESCRIPTION", { x: X.desc + pad, y: baseline, size: 7.5, weight: "bold", color: ink });
    right(F, s.page, "QTY", X.qty, W.qty - 8, baseline, 7.5, "bold", ink);
    right(F, s.page, "RATE", X.rate, W.rate - 8, baseline, 7.5, "bold", ink);
    if (perItemTax) right(F, s.page, "TAX", X.tax, W.tax - 8, baseline, 7.5, "bold", ink);
    right(F, s.page, "AMOUNT", X.amount, W.amount - pad, baseline, 7.5, "bold", ink);

    s.y -= HEAD_H;
    if (!style.tableHeadFill) s.rule(HAIRLINE, 0.75);
    s.y -= 4;
  };

  head();

  const rows = invoice.items.filter(
    (item) => item.description.trim() || item.rate || item.quantity !== 1,
  );
  const list = rows.length ? rows : invoice.items;

  list.forEach((item, i) => {
    const title = item.description || "—";
    const titleLines = F.wrap(title, 9.5, "regular", descW - 6);
    const detailLines = item.details
      ? F.wrap(item.details, 8.5, "regular", descW - 6)
      : [];
    const rowH = Math.max(
      titleLines.length * 13 + detailLines.length * 11 + 12,
      30,
    );

    if (!s.fits(rowH + 8)) {
      s.break();
      head();
    }

    const top = s.y;
    const first = top - 12;

    F.draw(s.page, String(i + 1), {
      x: X.index,
      y: first,
      size: 8.5,
      color: MUTED,
    });

    let ty = first;
    for (const line of titleLines) {
      F.draw(s.page, line, { x: X.desc, y: ty, size: 9.5, color: INK });
      ty -= 13;
    }
    for (const line of detailLines) {
      F.draw(s.page, line, { x: X.desc, y: ty, size: 8.5, color: MUTED });
      ty -= 11;
    }

    const qty = `${trimNumber(item.quantity)}${item.unit ? ` ${item.unit}` : ""}`;
    right(F, s.page, qty, X.qty, W.qty - 8, first, 9.5, "regular", INK);
    right(F, s.page, groupDigits(Number(item.rate) || 0, currency), X.rate, W.rate - 8, first, 9.5, "regular", INK);
    if (perItemTax) {
      right(F, s.page, `${trimNumber(item.taxRate)}%`, X.tax, W.tax - 8, first, 9.5, "regular", MUTED);
    }
    right(
      F,
      s.page,
      groupDigits(lineTotal(item, currency), currency),
      X.amount,
      W.amount,
      first,
      9.5,
      "bold",
      INK,
    );

    s.y = top - rowH;
    if (style.rowRules) s.rule(HAIRLINE, 0.5);
  });

  s.y -= 10;
}

/* -------------------------------------------------------------- summary */

function summary(
  s: Sheet,
  F: Fonts,
  invoice: Invoice,
  totals: ReturnType<typeof computeTotals>,
  accent: RGB,
) {
  const currency = totals.currency;

  const rows: { label: string; value: string; strong?: boolean }[] = [
    { label: "Subtotal", value: formatMoney(totals.subtotal, currency) },
  ];

  if (totals.discount) {
    const label =
      invoice.discountMode === "percent"
        ? `Discount (${trimNumber(invoice.discountValue)}%)`
        : "Discount";
    rows.push({ label, value: `− ${formatMoney(totals.discount, currency)}` });
  }

  for (const line of totals.taxLines) {
    rows.push({
      label: `${line.label} (${trimNumber(line.rate)}%)`,
      value: formatMoney(line.amount, currency),
    });
  }

  if (totals.shipping) {
    rows.push({ label: "Shipping", value: formatMoney(totals.shipping, currency) });
  }
  if (totals.rounding) {
    rows.push({
      label: "Round off",
      value: `${totals.rounding < 0 ? "− " : "+ "}${formatMoney(Math.abs(totals.rounding), currency)}`,
    });
  }

  const boxW = 250;
  const x = MARGIN + CONTENT_W - boxW;
  const TOTAL_H = 34;
  const needed = rows.length * 16 + TOTAL_H + (totals.paid ? 34 : 0) + 16;

  /* the summary never splits — it is the number the whole page is for */
  s.need(needed);

  let y = s.y;
  for (const row of rows) {
    F.draw(s.page, row.label, { x, y: y - 10, size: 9, color: MUTED });
    right(F, s.page, row.value, x, boxW, y - 10, 9, "regular", INK);
    y -= 16;
  }

  y -= 4;
  s.page.drawRectangle({
    x,
    y: y - TOTAL_H,
    width: boxW,
    height: TOTAL_H,
    color: accent,
  });

  const totalLabel =
    invoice.docType === "quotation" ? "Estimated total" : "Total";
  F.draw(s.page, totalLabel, {
    x: x + 12,
    y: y - TOTAL_H + 13,
    size: 10,
    weight: "bold",
    color: WHITE,
  });
  right(
    F,
    s.page,
    formatMoney(totals.total, currency),
    x,
    boxW - 12,
    y - TOTAL_H + 12,
    12.5,
    "bold",
    WHITE,
  );
  y -= TOTAL_H + 4;

  if (totals.paid) {
    F.draw(s.page, "Amount paid", { x, y: y - 12, size: 9, color: MUTED });
    right(
      F,
      s.page,
      `− ${formatMoney(totals.paid, currency)}`,
      x,
      boxW,
      y - 12,
      9,
      "regular",
      INK,
    );
    y -= 18;
    F.draw(s.page, "Balance due", {
      x,
      y: y - 12,
      size: 10,
      weight: "bold",
      color: INK,
    });
    right(
      F,
      s.page,
      formatMoney(totals.balance, currency),
      x,
      boxW,
      y - 12,
      11,
      "bold",
      INK,
    );
    y -= 20;
  }

  /* Amount in words sits to the left of the summary, on the same band —
     it is the legal restatement of the figure beside it. */
  if (invoice.showWords) {
    const words = amountInWords(
      totals.paid ? totals.balance : totals.total,
      currency,
    );
    if (words) {
      const wordsW = CONTENT_W - boxW - 24;
      const lines = F.wrap(words, 8.5, "regular", wordsW);
      F.draw(s.page, "AMOUNT IN WORDS", {
        x: MARGIN,
        y: s.y - 10,
        size: 7,
        weight: "bold",
        color: MUTED,
      });
      let wy = s.y - 24;
      for (const line of lines.slice(0, 4)) {
        F.draw(s.page, line, { x: MARGIN, y: wy, size: 8.5, weight: "bold", color: INK });
        wy -= 12;
      }
    }
  }

  s.y = y - 16;
}

/* -------------------------------------------------------------- closing */

function closing(
  s: Sheet,
  F: Fonts,
  invoice: Invoice,
  signature: Embedded | null,
) {
  const blocks: { heading: string; body: string }[] = [];
  if (invoice.payment.trim())
    blocks.push({ heading: "Payment details", body: invoice.payment });
  if (invoice.notes.trim()) blocks.push({ heading: "Notes", body: invoice.notes });
  if (invoice.terms.trim())
    blocks.push({ heading: "Terms & conditions", body: invoice.terms });

  const hasSignature = Boolean(signature || invoice.signatureName);
  if (!blocks.length && !hasSignature) return;

  const sigW = hasSignature ? 170 : 0;
  const textW = CONTENT_W - sigW - (sigW ? 30 : 0);

  const measured = blocks.map((b) => ({
    ...b,
    lines: F.wrap(b.body, 8.5, "regular", textW),
  }));
  const textH = measured.reduce(
    (sum, b) => sum + 16 + b.lines.length * 11.5 + 12,
    0,
  );

  s.need(Math.max(textH, hasSignature ? 92 : 0) + 20);
  s.rule();
  s.y -= 20;

  const top = s.y;
  let y = top;

  for (const block of measured) {
    F.draw(s.page, block.heading.toUpperCase(), {
      x: MARGIN,
      y: y - 8,
      size: 7,
      weight: "bold",
      color: MUTED,
    });
    y -= 20;
    for (const line of block.lines) {
      F.draw(s.page, line, { x: MARGIN, y, size: 8.5, color: INK });
      y -= 11.5;
    }
    y -= 12;
  }

  if (hasSignature) {
    const x = MARGIN + CONTENT_W - sigW;
    let sy = top - 10;

    if (signature) {
      /* scaled into a fixed box, so a wide scan and a tall one both leave
         the ruled line in the same place */
      const dims = fit(signature.width, signature.height, sigW - 10, 44);
      s.page.drawImage(signature.image, {
        x: x + (sigW - dims.width) / 2,
        y: sy - dims.height,
        width: dims.width,
        height: dims.height,
      });
    }
    sy -= 50;

    s.page.drawLine({
      start: { x, y: sy },
      end: { x: x + sigW, y: sy },
      thickness: 0.75,
      color: HAIRLINE,
    });

    const label = invoice.signatureName || "Authorised signatory";
    const w = F.width(label, 8.5, "regular");
    F.draw(s.page, F.clip(label, 8.5, "regular", sigW), {
      x: x + Math.max(0, (sigW - w) / 2),
      y: sy - 13,
      size: 8.5,
      color: MUTED,
    });

    y = Math.min(y, sy - 24);
  }

  s.y = y;
}

/* --------------------------------------------------------------- footers */

function footers(s: Sheet, F: Fonts, invoice: Invoice) {
  const total = s.pages.length;

  s.pages.forEach((page, i) => {
    page.drawLine({
      start: { x: MARGIN, y: BOTTOM - 4 },
      end: { x: MARGIN + CONTENT_W, y: BOTTOM - 4 },
      thickness: 0.5,
      color: HAIRLINE,
    });

    const left =
      invoice.from.name ||
      docTypeLabel(invoice.docType);
    F.draw(page, left, {
      x: MARGIN,
      y: BOTTOM - 18,
      size: 7.5,
      color: MUTED,
    });

    const label = `Page ${i + 1} of ${total}`;
    const w = F.width(label, 7.5, "regular");
    F.draw(page, label, {
      x: MARGIN + CONTENT_W - w,
      y: BOTTOM - 18,
      size: 7.5,
      color: MUTED,
    });
  });
}

/* ----------------------------------------------------------- primitives */

/** Draws `text` so its right edge lands at `x + width`. */
function right(
  F: Fonts,
  page: PDFPage,
  text: string,
  x: number,
  width: number,
  y: number,
  size: number,
  weight: "regular" | "bold",
  color: RGB,
) {
  const w = F.width(text, size, weight);
  F.draw(page, text, { x: x + width - w, y, size, weight, color });
}

/** Scales (w,h) into a box, never enlarging past the box. */
function fit(w: number, h: number, maxW: number, maxH: number) {
  const scale = Math.min(maxW / w, maxH / h, 1);
  return { width: w * scale, height: h * scale };
}

type Embedded = {
  image: Awaited<ReturnType<PDFDocument["embedPng"]>>;
  width: number;
  height: number;
};

/**
 * Embeds a data-URL image. PNG and JPEG are what pdf-lib can take and what
 * the upload path already normalises everything to; anything else is skipped
 * rather than failing the export, because a logo is not worth losing an
 * invoice over.
 */
async function embedImage(
  doc: PDFDocument,
  dataUrl: string | null,
): Promise<Embedded | null> {
  if (!dataUrl) return null;
  try {
    const bytes = dataUrlToBytes(dataUrl);
    const image = dataUrl.startsWith("data:image/png")
      ? await doc.embedPng(bytes)
      : await doc.embedJpg(bytes);
    return { image, width: image.width, height: image.height };
  } catch {
    return null;
  }
}

function dataUrlToBytes(dataUrl: string): Uint8Array {
  const base64 = dataUrl.slice(dataUrl.indexOf(",") + 1);
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

/** 12 → "12", 12.5 → "12.5". Quantities should not print as "12.00". */
export function trimNumber(value: number | string): string {
  const n = Number(value) || 0;
  return String(Math.round(n * 1000) / 1000);
}
