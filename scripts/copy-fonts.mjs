/*
 * The PDF is drawn with pdf-lib, whose built-in fonts are WinAnsi-encoded —
 * they have no glyph for ₹, and pdf-lib throws rather than dropping it. An
 * invoice generator built in India that cannot print a rupee sign is not
 * finished, so the PDF embeds a real Unicode font instead.
 *
 * Inter ships as TTF inside @fontsource/inter and covers ₹, €, £ and the rest
 * of what a currency picker can produce. The files are copied into public/
 * rather than committed so they always match the installed version, and they
 * are fetched at PDF time — no font bytes are in the page bundle.
 */
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public", "fonts");

/*
 * Two subsets, not one. Inter's `latin` file has $, £, € and ¥ but not ₹ —
 * the rupee sign lives in `latin-ext`. Both are embedded and the renderer
 * picks per character (see lib/pdf/font.ts), which is the only way to print
 * an Indian invoice and a dollar one from the same code.
 */
const WANTED = [
  ["inter-latin-400-normal.woff", "inter-400.woff"],
  ["inter-latin-600-normal.woff", "inter-600.woff"],
  ["inter-latin-ext-400-normal.woff", "inter-ext-400.woff"],
  ["inter-latin-ext-600-normal.woff", "inter-ext-600.woff"],
];

const src = join(root, "node_modules", "@fontsource", "inter", "files");

if (!existsSync(src)) {
  console.warn("[fonts] @fontsource/inter not installed yet — skipping.");
  process.exit(0);
}

mkdirSync(out, { recursive: true });
for (const [from, to] of WANTED) {
  const path = join(src, from);
  if (!existsSync(path)) {
    console.warn(`[fonts] missing ${from} — PDF export will fall back.`);
    continue;
  }
  copyFileSync(path, join(out, to));
}
console.log("[fonts] Inter copied into public/fonts");
