/**
 * Text for pdf-lib, with two fonts behind it.
 *
 * pdf-lib's standard fonts are WinAnsi-encoded and have no ₹, and its own
 * check throws rather than dropping the character — so an embedded Unicode
 * font is not optional here. Inter is shipped as two subsets: `latin` carries
 * $, £, € and ¥, `latin-ext` carries ₹ and ₨. Rather than pay for a font file
 * that covers both, every string is split into runs of characters the same
 * font can draw, and the runs are drawn side by side.
 *
 * Callers never see this. They ask for a width or draw a line of text, and
 * the run splitting happens underneath.
 */
import type { PDFDocument, PDFFont, PDFPage } from "pdf-lib";
import { rgb, type RGB } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

export type Weight = "regular" | "bold";

type Pair = { base: PDFFont; ext: PDFFont };

export type Run = { font: PDFFont; text: string };

const FILES: Record<Weight, { base: string; ext: string }> = {
  regular: { base: "/fonts/inter-400.woff", ext: "/fonts/inter-ext-400.woff" },
  bold: { base: "/fonts/inter-600.woff", ext: "/fonts/inter-ext-600.woff" },
};

/** Which characters a PDFFont can actually draw. */
const can = (font: PDFFont, char: string): boolean => {
  try {
    /* encodeText throws on a missing glyph, which is exactly the question */
    font.encodeText(char);
    return true;
  } catch {
    return false;
  }
};

export class Fonts {
  private constructor(
    private readonly fonts: Record<Weight, Pair>,
    /** characters neither subset could draw, collected for the UI to warn */
    readonly dropped: Set<string>,
  ) {}

  static async load(doc: PDFDocument): Promise<Fonts> {
    doc.registerFontkit(fontkit);

    const grab = async (url: string) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Could not load the PDF font (${url}).`);
      return doc.embedFont(await res.arrayBuffer(), { subset: true });
    };

    const [rb, re, bb, be] = await Promise.all([
      grab(FILES.regular.base),
      grab(FILES.regular.ext),
      grab(FILES.bold.base),
      grab(FILES.bold.ext),
    ]);

    return new Fonts(
      { regular: { base: rb, ext: re }, bold: { base: bb, ext: be } },
      new Set(),
    );
  }

  /**
   * Splits a string into the fewest runs that can each be drawn by one font.
   * Ordinary text — which is nearly all of it — comes back as a single run.
   */
  runs(text: string, weight: Weight): Run[] {
    const { base, ext } = this.fonts[weight];
    const out: Run[] = [];

    for (const char of text) {
      const font = can(base, char) ? base : can(ext, char) ? ext : null;

      if (!font) {
        /* Devanagari, Arabic, emoji — outside both subsets. Recorded so the
           builder can tell the user which characters will not print, rather
           than silently handing back a PDF with holes in it. */
        this.dropped.add(char);
        continue;
      }

      const last = out[out.length - 1];
      if (last && last.font === font) last.text += char;
      else out.push({ font, text: char });
    }

    return out;
  }

  width(text: string, size: number, weight: Weight): number {
    return this.runs(text, weight).reduce(
      (sum, run) => sum + run.font.widthOfTextAtSize(run.text, size),
      0,
    );
  }

  height(size: number, weight: Weight = "regular"): number {
    return this.fonts[weight].base.heightAtSize(size);
  }

  /** Draws one line at a baseline-independent top-left origin. */
  draw(
    page: PDFPage,
    text: string,
    opts: {
      x: number;
      y: number;
      size: number;
      weight?: Weight;
      color?: RGB;
      opacity?: number;
    },
  ): number {
    const weight = opts.weight ?? "regular";
    let x = opts.x;
    for (const run of this.runs(text, weight)) {
      page.drawText(run.text, {
        x,
        y: opts.y,
        size: opts.size,
        font: run.font,
        color: opts.color ?? rgb(0, 0, 0),
        opacity: opts.opacity,
      });
      x += run.font.widthOfTextAtSize(run.text, opts.size);
    }
    return x - opts.x;
  }

  /**
   * Greedy wrap to a pixel width, honouring newlines the user typed. A single
   * word longer than the column is broken rather than allowed to run into the
   * next one — long URLs and account numbers do this constantly.
   */
  wrap(text: string, size: number, weight: Weight, maxWidth: number): string[] {
    const lines: string[] = [];

    for (const paragraph of text.split("\n")) {
      if (!paragraph.trim()) {
        lines.push("");
        continue;
      }

      let line = "";
      for (const word of paragraph.split(/\s+/)) {
        const candidate = line ? `${line} ${word}` : word;
        if (this.width(candidate, size, weight) <= maxWidth) {
          line = candidate;
          continue;
        }

        if (line) lines.push(line);

        if (this.width(word, size, weight) <= maxWidth) {
          line = word;
          continue;
        }

        /* break the over-long word character by character */
        let chunk = "";
        for (const char of word) {
          if (this.width(chunk + char, size, weight) > maxWidth && chunk) {
            lines.push(chunk);
            chunk = char;
          } else {
            chunk += char;
          }
        }
        line = chunk;
      }

      if (line) lines.push(line);
    }

    return lines.length ? lines : [""];
  }

  /** Shortens to fit, with an ellipsis. For cells that must stay one line. */
  clip(text: string, size: number, weight: Weight, maxWidth: number): string {
    if (this.width(text, size, weight) <= maxWidth) return text;
    let out = "";
    for (const char of text) {
      if (this.width(`${out}${char}…`, size, weight) > maxWidth) break;
      out += char;
    }
    return `${out}…`;
  }
}

/** "#ff4f18" → pdf-lib rgb. Falls back to the brand accent. */
export function hexToRgb(hex: string): RGB {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  const value = match ? match[1] : "ff4f18";
  return rgb(
    parseInt(value.slice(0, 2), 16) / 255,
    parseInt(value.slice(2, 4), 16) / 255,
    parseInt(value.slice(4, 6), 16) / 255,
  );
}

/** Mixes a colour toward white — for table tints and hairlines. */
export function tint(color: RGB, amount: number): RGB {
  return rgb(
    color.red + (1 - color.red) * amount,
    color.green + (1 - color.green) * amount,
    color.blue + (1 - color.blue) * amount,
  );
}
