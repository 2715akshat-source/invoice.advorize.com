/**
 * The invoice document: its shape, its defaults, and the one function that
 * turns it into money.
 *
 * Everything the tool knows lives in a single serialisable object. That is
 * what makes the rest cheap — autosave is a JSON.stringify, "duplicate" is a
 * spread, and the PDF renderer and the on-screen preview read exactly the
 * same totals rather than each doing their own arithmetic and disagreeing by
 * a rupee.
 */
import { currencyByCode, round, type Currency } from "./currency";

export type DocType =
  | "invoice"
  | "quotation"
  | "proforma"
  | "receipt"
  | "credit-note";

export const DOC_TYPES: { id: DocType; label: string; numberPrefix: string }[] =
  [
    { id: "invoice", label: "Invoice", numberPrefix: "INV" },
    { id: "quotation", label: "Quotation", numberPrefix: "QUO" },
    { id: "proforma", label: "Proforma Invoice", numberPrefix: "PI" },
    { id: "receipt", label: "Receipt", numberPrefix: "RCP" },
    { id: "credit-note", label: "Credit Note", numberPrefix: "CN" },
  ];

export const docTypeLabel = (id: DocType) =>
  DOC_TYPES.find((d) => d.id === id)?.label ?? "Invoice";

/**
 * How tax is worked out.
 *
 * `gst` is the Indian split: one rate, shown as CGST + SGST at half each for
 * a sale inside the state, or as a single IGST line across state lines. It is
 * the same money either way — the split is a presentation rule, and getting
 * it wrong is the most common fault in a hand-made Indian invoice.
 */
export type TaxMode = "none" | "single" | "per-item" | "gst";

export type TaxKind = "cgst-sgst" | "igst";

export type DiscountMode = "none" | "percent" | "flat";

export type LineItem = {
  id: string;
  description: string;
  /** optional second line, for the detail that does not fit the title */
  details: string;
  quantity: number;
  /** "hrs", "pcs", "months" — printed next to the quantity when set */
  unit: string;
  rate: number;
  /** only read when the tax mode is per-item */
  taxRate: number;
};

export type Party = {
  name: string;
  /** free-form, newline separated — addresses are not a fixed shape */
  address: string;
  email: string;
  phone: string;
  /** GSTIN, VAT number, EIN — labelled by the field beside it */
  taxId: string;
};

export type Template = "classic" | "modern" | "minimal";

export type Invoice = {
  /** bumped when the saved shape changes; see `migrate` */
  version: 1;

  docType: DocType;
  number: string;
  issueDate: string;
  dueDate: string;
  /** PO number, project code, anything the client needs to match it up */
  reference: string;

  currencyCode: string;

  from: Party;
  to: Party;
  /** printed as a third column when it differs from the billing address */
  shipTo: Party;
  showShipTo: boolean;

  /** data URL — never uploaded, stored with the draft in this browser */
  logo: string | null;

  items: LineItem[];

  taxMode: TaxMode;
  taxLabel: string;
  taxRate: number;
  taxKind: TaxKind;

  discountMode: DiscountMode;
  discountValue: number;

  shipping: number;
  /** rounds the payable to the nearest whole unit, printing the adjustment */
  roundOff: boolean;
  amountPaid: number;

  notes: string;
  terms: string;
  payment: string;

  signatureName: string;
  signature: string | null;

  showWords: boolean;
  template: Template;
  accent: string;
};

/* ------------------------------------------------------------------ ids */

/** Stable enough for a list key; nothing here needs to be unguessable. */
export const newId = () => Math.random().toString(36).slice(2, 10);

export const emptyItem = (): LineItem => ({
  id: newId(),
  description: "",
  details: "",
  quantity: 1,
  unit: "",
  rate: 0,
  taxRate: 18,
});

const emptyParty = (): Party => ({
  name: "",
  address: "",
  email: "",
  phone: "",
  taxId: "",
});

/* --------------------------------------------------------------- dates */

export const today = () => new Date().toISOString().slice(0, 10);

export const addDays = (iso: string, days: number) => {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

/** "2026-08-24" → "24 Aug 2026". Unambiguous across US and Indian readers. */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/**
 * A first number that is unique per day and reads like a real sequence, so a
 * new visitor never has to invent one before they can start.
 */
export function suggestNumber(docType: DocType): string {
  const prefix =
    DOC_TYPES.find((d) => d.id === docType)?.numberPrefix ?? "INV";
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}`;
  return `${prefix}-${stamp}-001`;
}

/**
 * Bumps the trailing number of an invoice number, keeping its padding:
 * "INV-202608-001" → "INV-202608-002". Anything without a trailing number is
 * returned untouched rather than mangled.
 */
export function nextNumber(number: string): string {
  const match = number.match(/^(.*?)(\d+)(\D*)$/);
  if (!match) return number;
  const [, head, digits, tail] = match;
  const bumped = String(Number(digits) + 1).padStart(digits.length, "0");
  return `${head}${bumped}${tail}`;
}

/* ------------------------------------------------------------ defaults */

export function blankInvoice(): Invoice {
  return {
    version: 1,
    docType: "invoice",
    number: suggestNumber("invoice"),
    issueDate: today(),
    dueDate: addDays(today(), 15),
    reference: "",
    currencyCode: "INR",
    from: emptyParty(),
    to: emptyParty(),
    shipTo: emptyParty(),
    showShipTo: false,
    logo: null,
    items: [emptyItem()],
    taxMode: "gst",
    taxLabel: "GST",
    taxRate: 18,
    taxKind: "cgst-sgst",
    discountMode: "none",
    discountValue: 0,
    shipping: 0,
    roundOff: true,
    amountPaid: 0,
    notes: "",
    terms:
      "Payment is due within 15 days of the invoice date. Please quote the invoice number with your transfer.",
    payment: "",
    signatureName: "",
    signature: null,
    showWords: true,
    template: "classic",
    accent: "#ff4f18",
  };
}

/**
 * A worked example, so the preview is never an empty rectangle and someone
 * can see the shape of a finished invoice before typing anything.
 */
export function sampleInvoice(): Invoice {
  const base = blankInvoice();
  return {
    ...base,
    from: {
      name: "Your Studio Pvt. Ltd.",
      address: "14 Camac Street\nKolkata 700017\nWest Bengal, India",
      email: "accounts@yourstudio.com",
      phone: "+91 98300 00000",
      taxId: "19AABCU9603R1ZX",
    },
    to: {
      name: "Northline Retail Pvt. Ltd.",
      address: "Unit 402, Prestige Tower\nBengaluru 560001\nKarnataka, India",
      email: "ap@northline.in",
      phone: "",
      taxId: "29AACCN1234M1Z5",
    },
    reference: "PO-4417",
    items: [
      {
        id: newId(),
        description: "Website design and build",
        details: "12 pages, CMS, staging and launch",
        quantity: 1,
        unit: "",
        rate: 185000,
        taxRate: 18,
      },
      {
        id: newId(),
        description: "Performance marketing retainer",
        details: "August 2026 — Google and Meta",
        quantity: 1,
        unit: "month",
        rate: 65000,
        taxRate: 18,
      },
      {
        id: newId(),
        description: "Additional design hours",
        details: "",
        quantity: 12,
        unit: "hrs",
        rate: 2500,
        taxRate: 18,
      },
    ],
    payment:
      "Account name: Your Studio Pvt. Ltd.\nBank: HDFC Bank, Camac Street\nAccount: 50200012345678\nIFSC: HDFC0000123\nUPI: yourstudio@hdfcbank",
    signatureName: "For Your Studio Pvt. Ltd.",
  };
}

/* ---------------------------------------------------------------- totals */

export type TaxLine = { label: string; rate: number; amount: number };

export type Totals = {
  currency: Currency;
  subtotal: number;
  discount: number;
  /** what tax is charged on: subtotal less discount */
  taxable: number;
  taxLines: TaxLine[];
  tax: number;
  shipping: number;
  /** the adjustment printed when round-off is on; may be negative */
  rounding: number;
  total: number;
  paid: number;
  balance: number;
};

export const lineTotal = (item: LineItem, currency: Currency): number =>
  round((Number(item.quantity) || 0) * (Number(item.rate) || 0), currency.decimals);

/**
 * The single source of every number on the page.
 *
 * The one subtlety is a document-level discount combined with per-item tax
 * rates: the discount has to be apportioned across the lines pro rata before
 * their different rates are applied, or a 10% discount on a mixed 5%/18%
 * invoice quietly charges tax on money nobody is paying.
 */
export function computeTotals(invoice: Invoice): Totals {
  const currency = currencyByCode(invoice.currencyCode);
  const dp = currency.decimals;

  const lines = invoice.items.map((item) => ({
    item,
    amount: lineTotal(item, currency),
  }));

  const subtotal = round(
    lines.reduce((sum, l) => sum + l.amount, 0),
    dp,
  );

  let discount = 0;
  if (invoice.discountMode === "percent") {
    discount = round((subtotal * (Number(invoice.discountValue) || 0)) / 100, dp);
  } else if (invoice.discountMode === "flat") {
    discount = round(Number(invoice.discountValue) || 0, dp);
  }
  /* a discount larger than the invoice is a typo, not a credit */
  discount = Math.min(Math.max(discount, 0), subtotal);

  const taxable = round(subtotal - discount, dp);

  /* pro-rata share of the discount, used only by the per-item path */
  const keep = subtotal > 0 ? taxable / subtotal : 1;

  const taxLines: TaxLine[] = [];

  if (invoice.taxMode === "single") {
    const rate = Number(invoice.taxRate) || 0;
    if (rate !== 0) {
      taxLines.push({
        label: invoice.taxLabel || "Tax",
        rate,
        amount: round((taxable * rate) / 100, dp),
      });
    }
  } else if (invoice.taxMode === "gst") {
    const rate = Number(invoice.taxRate) || 0;
    if (rate !== 0) {
      const total = round((taxable * rate) / 100, dp);
      if (invoice.taxKind === "igst") {
        taxLines.push({ label: "IGST", rate, amount: total });
      } else {
        /* halve the *money*, not the rate — halving the rate and rounding
           twice can leave the two halves a paisa short of the whole */
        const half = round(total / 2, dp);
        taxLines.push({ label: "CGST", rate: rate / 2, amount: half });
        taxLines.push({
          label: "SGST",
          rate: rate / 2,
          amount: round(total - half, dp),
        });
      }
    }
  } else if (invoice.taxMode === "per-item") {
    /* one line per distinct rate, which is what a GST summary expects */
    const byRate = new Map<number, number>();
    for (const { item, amount } of lines) {
      const rate = Number(item.taxRate) || 0;
      if (rate === 0) continue;
      byRate.set(rate, (byRate.get(rate) ?? 0) + amount * keep);
    }
    for (const [rate, base] of [...byRate.entries()].sort((a, b) => a[0] - b[0])) {
      const amount = round((base * rate) / 100, dp);
      if (invoice.taxKind === "igst" && invoice.taxLabel === "GST") {
        taxLines.push({ label: "IGST", rate, amount });
      } else if (invoice.taxLabel === "GST") {
        const half = round(amount / 2, dp);
        taxLines.push({ label: "CGST", rate: rate / 2, amount: half });
        taxLines.push({
          label: "SGST",
          rate: rate / 2,
          amount: round(amount - half, dp),
        });
      } else {
        taxLines.push({ label: invoice.taxLabel || "Tax", rate, amount });
      }
    }
  }

  const tax = round(
    taxLines.reduce((sum, t) => sum + t.amount, 0),
    dp,
  );
  const shipping = round(Number(invoice.shipping) || 0, dp);

  const gross = round(taxable + tax + shipping, dp);
  const rounding = invoice.roundOff ? round(Math.round(gross) - gross, dp) : 0;
  const total = round(gross + rounding, dp);

  const paid = round(Number(invoice.amountPaid) || 0, dp);

  return {
    currency,
    subtotal,
    discount,
    taxable,
    taxLines,
    tax,
    shipping,
    rounding,
    total,
    paid,
    balance: round(total - paid, dp),
  };
}

/* ------------------------------------------------------------- storage */

const KEY = "advorize:invoice:draft";

/**
 * Autosave.
 *
 * The draft — logo and signature included — is kept in this browser and
 * nowhere else. There is no account to attach it to and no endpoint to send
 * it to, which is the whole promise: an invoice carries a client's address,
 * a bank account and a tax number, and none of that should be sitting on
 * somebody else's server because you wanted a PDF.
 */
export function saveDraft(invoice: Invoice) {
  try {
    localStorage.setItem(KEY, JSON.stringify(invoice));
  } catch {
    /* private mode, or a logo that pushed the draft past the quota — the
       tool keeps working, it just will not be there next time */
  }
}

export function loadDraft(): Invoice | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return migrate(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function clearDraft() {
  try {
    localStorage.removeItem(KEY);
  } catch {}
}

/**
 * Fills in anything a saved draft predates. A stored invoice outlives the
 * code that wrote it, so every read goes through here rather than trusting
 * the parsed shape.
 */
export function migrate(raw: unknown): Invoice {
  const base = blankInvoice();
  if (!raw || typeof raw !== "object") return base;
  const saved = raw as Partial<Invoice>;

  const items = Array.isArray(saved.items) && saved.items.length
    ? saved.items.map((i) => ({ ...emptyItem(), ...i, id: i?.id ?? newId() }))
    : base.items;

  return {
    ...base,
    ...saved,
    version: 1,
    from: { ...base.from, ...saved.from },
    to: { ...base.to, ...saved.to },
    shipTo: { ...base.shipTo, ...saved.shipTo },
    items,
  };
}
