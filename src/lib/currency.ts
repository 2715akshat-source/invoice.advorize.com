/**
 * Currency and money.
 *
 * Two rules hold everything else together:
 *
 * 1. Money is stored as a plain number of major units and only ever rounded
 *    at the point it is shown or totalled — never accumulated pre-rounded,
 *    which is how invoice lines end up a paisa short of their own total.
 * 2. Every symbol here must exist in the fonts the PDF embeds. That is why
 *    AED and a few others use their code rather than a native glyph: the
 *    subset that would carry it is not worth 200KB to a visitor.
 */

export type Currency = {
  code: string;
  /** printed before the amount; may be the code itself */
  symbol: string;
  name: string;
  /** minor units — JPY has none */
  decimals: number;
  /** 12,34,567.89 rather than 1,234,567.89 */
  grouping: "indian" | "western";
  /** what "words" means for this currency, when the invoice prints them */
  words?: { unit: string; sub: string };
};

export const CURRENCIES: Currency[] = [
  {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    decimals: 2,
    grouping: "indian",
    words: { unit: "Rupees", sub: "Paise" },
  },
  {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    decimals: 2,
    grouping: "western",
    words: { unit: "Dollars", sub: "Cents" },
  },
  {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    decimals: 2,
    grouping: "western",
    words: { unit: "Euros", sub: "Cents" },
  },
  {
    code: "GBP",
    symbol: "£",
    name: "Pound Sterling",
    decimals: 2,
    grouping: "western",
    words: { unit: "Pounds", sub: "Pence" },
  },
  {
    code: "AED",
    symbol: "AED ",
    name: "UAE Dirham",
    decimals: 2,
    grouping: "western",
    words: { unit: "Dirhams", sub: "Fils" },
  },
  {
    code: "CAD",
    symbol: "CA$",
    name: "Canadian Dollar",
    decimals: 2,
    grouping: "western",
    words: { unit: "Dollars", sub: "Cents" },
  },
  {
    code: "AUD",
    symbol: "A$",
    name: "Australian Dollar",
    decimals: 2,
    grouping: "western",
    words: { unit: "Dollars", sub: "Cents" },
  },
  {
    code: "SGD",
    symbol: "S$",
    name: "Singapore Dollar",
    decimals: 2,
    grouping: "western",
    words: { unit: "Dollars", sub: "Cents" },
  },
  {
    code: "JPY",
    symbol: "¥",
    name: "Japanese Yen",
    decimals: 0,
    grouping: "western",
    words: { unit: "Yen", sub: "Sen" },
  },
];

export const currencyByCode = (code: string): Currency =>
  CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];

/** Rounds to the currency's minor unit. Money never travels un-rounded. */
export const round = (value: number, decimals: number): number => {
  const factor = 10 ** decimals;
  /* the epsilon nudges 1.005 off its float representation, which is just
     below 1.005 and would otherwise round down */
  return Math.round((value + Number.EPSILON) * factor) / factor;
};

/** 1234567.5 → "12,34,567.50" (indian) or "1,234,567.50" (western). */
export function groupDigits(value: number, currency: Currency): string {
  const negative = value < 0;
  const fixed = Math.abs(round(value, currency.decimals)).toFixed(
    currency.decimals,
  );
  const [whole, fraction] = fixed.split(".");

  let grouped: string;
  if (currency.grouping === "indian" && whole.length > 3) {
    const last = whole.slice(-3);
    const rest = whole.slice(0, -3);
    grouped = `${rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${last}`;
  } else {
    grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return `${negative ? "-" : ""}${grouped}${fraction ? `.${fraction}` : ""}`;
}

/** The full display form, symbol included: "₹12,34,567.50". */
export const formatMoney = (value: number, currency: Currency): string =>
  `${currency.symbol}${groupDigits(value, currency)}`;

/* -------------------------------------------------------------------------
 * Amount in words
 * -------------------------------------------------------------------------
 * Standard on an Indian invoice and common everywhere else, so it is offered
 * for every currency — using that currency's own scale. An INR invoice reads
 * "Twelve Lakh", a USD one reads "One Million Two Hundred Thousand".
 */

const ONES = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
  "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
  "Seventeen", "Eighteen", "Nineteen",
];
const TENS = [
  "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty",
  "Ninety",
];

/** 0–999 in words. Every scale below builds on this. */
function underThousand(n: number): string {
  if (n === 0) return "";
  if (n < 20) return ONES[n];
  if (n < 100) {
    const rest = n % 10;
    return `${TENS[Math.floor(n / 10)]}${rest ? ` ${ONES[rest]}` : ""}`;
  }
  const rest = n % 100;
  return `${ONES[Math.floor(n / 100)]} Hundred${rest ? ` ${underThousand(rest)}` : ""}`;
}

function indianWords(n: number): string {
  if (n === 0) return "Zero";
  const parts: string[] = [];
  const scales: [number, string][] = [
    [10_000_000, "Crore"],
    [100_000, "Lakh"],
    [1_000, "Thousand"],
  ];
  let rest = n;
  for (const [size, label] of scales) {
    if (rest >= size) {
      /* crore is the top scale — 150 crore stays "One Hundred Fifty Crore"
         rather than needing a scale above it */
      const count = Math.floor(rest / size);
      parts.push(`${label === "Crore" ? westernWords(count) : underThousand(count)} ${label}`);
      rest %= size;
    }
  }
  if (rest) parts.push(underThousand(rest));
  return parts.join(" ");
}

function westernWords(n: number): string {
  if (n === 0) return "Zero";
  const scales: [number, string][] = [
    [1_000_000_000, "Billion"],
    [1_000_000, "Million"],
    [1_000, "Thousand"],
  ];
  const parts: string[] = [];
  let rest = n;
  for (const [size, label] of scales) {
    if (rest >= size) {
      parts.push(`${underThousand(Math.floor(rest / size))} ${label}`);
      rest %= size;
    }
  }
  if (rest) parts.push(underThousand(rest));
  return parts.join(" ");
}

/**
 * "₹1,234.50" → "Rupees One Thousand Two Hundred Thirty Four and Fifty Paise
 * Only". Falls back to the bare number for anything beyond the scales above,
 * which no invoice this tool writes will reach.
 */
export function amountInWords(value: number, currency: Currency): string {
  const words = currency.words;
  if (!words) return "";

  const rounded = round(Math.abs(value), currency.decimals);
  const whole = Math.floor(rounded);
  const sub = Math.round((rounded - whole) * 10 ** currency.decimals);

  if (whole >= 1e15) return groupDigits(value, currency);

  const spell = currency.grouping === "indian" ? indianWords : westernWords;
  const head = `${words.unit} ${spell(whole)}`;
  const tail = sub > 0 ? ` and ${underThousand(sub)} ${words.sub}` : "";

  return `${value < 0 ? "Minus " : ""}${head}${tail} Only`;
}
