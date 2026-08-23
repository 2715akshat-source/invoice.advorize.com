"use client";

import { useEffect, useRef, useState } from "react";
import {
  computeTotals,
  docTypeLabel,
  formatDate,
  lineTotal,
  type Invoice,
  type Party,
} from "@/lib/invoice";
import { amountInWords, formatMoney, groupDigits } from "@/lib/currency";
import { trimNumber } from "@/lib/pdf/render";

/**
 * The live preview.
 *
 * It is a second implementation of the same layout the PDF renderer draws,
 * which is a real cost — two places to change when the design moves. The
 * alternative is worse: rendering the PDF on every keystroke and showing it
 * in an <iframe> means a full re-embed of the fonts and the logo for every
 * character typed, and a viewer that flickers and loses its scroll position
 * each time.
 *
 * What keeps the two honest is that all the arithmetic — every total, every
 * tax split, the words, the rounding — comes from `computeTotals`, which both
 * of them call. Only the drawing is duplicated, never the numbers.
 */
export default function InvoiceSheet({ invoice }: { invoice: Invoice }) {
  const totals = computeTotals(invoice);
  const currency = totals.currency;
  const accent = invoice.accent;
  const title = docTypeLabel(invoice.docType).toUpperCase();
  const perItemTax = invoice.taxMode === "per-item";
  const taxIdLabel = invoice.currencyCode === "INR" ? "GSTIN" : "Tax ID";

  const band = invoice.template === "modern";
  const minimal = invoice.template === "minimal";

  const items = invoice.items;

  return (
    <div className="sheet" style={{ ["--sheet-accent" as string]: accent }}>
      {/* ------------------------------------------------------ masthead */}
      {band ? (
        <div
          className="-mx-[15.5mm] -mt-[15.5mm] mb-[9mm] flex items-end justify-between px-[15.5mm] pt-[10mm] pb-[7mm]"
          style={{ background: accent, color: "#fff" }}
        >
          <div>
            {invoice.logo && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={invoice.logo}
                alt=""
                className="mb-[3mm] max-h-[11mm] max-w-[55mm] object-contain object-left"
              />
            )}
            <div className="text-[4mm] font-semibold">
              {invoice.from.name || "Your business"}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[8mm] leading-none font-semibold tracking-tight">
              {title}
            </div>
            {invoice.number && (
              <div className="mt-[1.5mm] text-[3.2mm] opacity-90">
                #{invoice.number}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mb-[6mm] flex items-start justify-between gap-[8mm]">
          <div>
            {invoice.logo ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={invoice.logo}
                alt=""
                className="max-h-[16mm] max-w-[62mm] object-contain object-left"
              />
            ) : (
              <div className="text-[5mm] font-semibold">
                {invoice.from.name || "Your business"}
              </div>
            )}
          </div>
          <div
            className="text-right text-[9mm] leading-none font-semibold tracking-tight"
            style={{
              color: minimal ? "#101012" : accent,
              fontSize: minimal ? "6.5mm" : undefined,
            }}
          >
            {title}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- meta strip */}
      <div className="flex flex-wrap justify-end gap-x-[9mm] gap-y-[3mm] text-right">
        {!band && invoice.number && <Meta label="Number" value={invoice.number} />}
        <Meta label="Issue date" value={formatDate(invoice.issueDate)} />
        {invoice.docType !== "receipt" && invoice.dueDate && (
          <Meta
            label={invoice.docType === "quotation" ? "Valid until" : "Due date"}
            value={formatDate(invoice.dueDate)}
          />
        )}
        {invoice.reference && (
          <Meta label="Reference" value={invoice.reference} />
        )}
      </div>

      <div
        className="mt-[4mm] mb-[6mm] h-[0.5mm]"
        style={{ background: accent }}
      />

      {/* ------------------------------------------------------- parties */}
      <div className="mb-[7mm] grid gap-[7mm] grid-cols-2 data-[three=true]:grid-cols-3"
        data-three={invoice.showShipTo}
      >
        <PartyBlock
          heading="From"
          party={invoice.from}
          accent={accent}
          taxIdLabel={taxIdLabel}
        />
        <PartyBlock
          heading={invoice.docType === "quotation" ? "Quotation for" : "Bill to"}
          party={invoice.to}
          accent={accent}
          taxIdLabel={taxIdLabel}
        />
        {invoice.showShipTo && (
          <PartyBlock
            heading="Ship to"
            party={invoice.shipTo}
            accent={accent}
            taxIdLabel={taxIdLabel}
          />
        )}
      </div>

      {/* --------------------------------------------------------- items */}
      <table>
        <thead>
          <tr
            style={
              minimal
                ? { borderTop: "0.4mm solid #101012" }
                : band
                  ? { background: accent, color: "#fff" }
                  : { background: mix(accent, 0.88) }
            }
          >
            <Th pad={!minimal} className="w-[7mm]">
              #
            </Th>
            <Th pad={!minimal}>Description</Th>
            <Th pad={!minimal} className="num w-[16mm]">
              Qty
            </Th>
            <Th pad={!minimal} className="num w-[24mm]">
              Rate
            </Th>
            {perItemTax && (
              <Th pad={!minimal} className="num w-[14mm]">
                Tax
              </Th>
            )}
            <Th pad={!minimal} className="num w-[26mm]">
              Amount
            </Th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id} className="border-b border-[#e6e6e9]">
              <td className={`muted text-[2.7mm] ${minimal ? "" : "pl-[2.5mm]"}`}>
                {i + 1}
              </td>
              <td>
                <div>{item.description || "—"}</div>
                {item.details && (
                  <div className="muted text-[2.7mm]">{item.details}</div>
                )}
              </td>
              <td className="num">
                {trimNumber(item.quantity)}
                {item.unit ? ` ${item.unit}` : ""}
              </td>
              <td className="num">
                {groupDigits(Number(item.rate) || 0, currency)}
              </td>
              {perItemTax && (
                <td className="num muted">{trimNumber(item.taxRate)}%</td>
              )}
              <td
                className={`num font-semibold ${minimal ? "" : "pr-[2.5mm]"}`}
              >
                {groupDigits(lineTotal(item, currency), currency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ------------------------------------------------------- summary */}
      <div className="mt-[6mm] flex items-start justify-between gap-[8mm]">
        <div className="flex-1">
          {invoice.showWords && (
            <>
              <div className="muted mb-[1.5mm] text-[2.4mm] font-semibold tracking-[0.14em] uppercase">
                Amount in words
              </div>
              <div className="max-w-[80mm] text-[2.9mm] font-semibold">
                {amountInWords(
                  totals.paid ? totals.balance : totals.total,
                  currency,
                )}
              </div>
            </>
          )}
        </div>

        <div className="w-[70mm] shrink-0">
          <Row label="Subtotal" value={formatMoney(totals.subtotal, currency)} />
          {totals.discount > 0 && (
            <Row
              label={
                invoice.discountMode === "percent"
                  ? `Discount (${trimNumber(invoice.discountValue)}%)`
                  : "Discount"
              }
              value={`− ${formatMoney(totals.discount, currency)}`}
            />
          )}
          {totals.taxLines.map((line, i) => (
            <Row
              key={`${line.label}-${line.rate}-${i}`}
              label={`${line.label} (${trimNumber(line.rate)}%)`}
              value={formatMoney(line.amount, currency)}
            />
          ))}
          {totals.shipping !== 0 && (
            <Row
              label="Shipping"
              value={formatMoney(totals.shipping, currency)}
            />
          )}
          {totals.rounding !== 0 && (
            <Row
              label="Round off"
              value={`${totals.rounding < 0 ? "− " : "+ "}${formatMoney(
                Math.abs(totals.rounding),
                currency,
              )}`}
            />
          )}

          <div
            className="mt-[2mm] flex items-center justify-between px-[3mm] py-[2.5mm] text-white"
            style={{ background: accent }}
          >
            <span className="text-[3mm] font-semibold">
              {invoice.docType === "quotation" ? "Estimated total" : "Total"}
            </span>
            <span className="num text-[4mm] font-semibold">
              {formatMoney(totals.total, currency)}
            </span>
          </div>

          {totals.paid !== 0 && (
            <>
              <Row
                label="Amount paid"
                value={`− ${formatMoney(totals.paid, currency)}`}
              />
              <div className="flex items-center justify-between border-t border-[#dedee1] pt-[2mm]">
                <span className="text-[3mm] font-semibold">Balance due</span>
                <span className="num text-[3.4mm] font-semibold">
                  {formatMoney(totals.balance, currency)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------- closing */}
      {(invoice.payment.trim() ||
        invoice.notes.trim() ||
        invoice.terms.trim() ||
        invoice.signature ||
        invoice.signatureName) && (
        <div className="mt-[8mm] border-t border-[#dedee1] pt-[5mm]">
          <div className="flex items-start justify-between gap-[10mm]">
            <div className="flex-1 space-y-[4mm]">
              {invoice.payment.trim() && (
                <Block heading="Payment details" body={invoice.payment} />
              )}
              {invoice.notes.trim() && (
                <Block heading="Notes" body={invoice.notes} />
              )}
              {invoice.terms.trim() && (
                <Block heading="Terms & conditions" body={invoice.terms} />
              )}
            </div>

            {(invoice.signature || invoice.signatureName) && (
              <div className="w-[45mm] shrink-0 text-center">
                <div className="flex h-[14mm] items-end justify-center">
                  {invoice.signature && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={invoice.signature}
                      alt=""
                      className="max-h-[13mm] max-w-full object-contain"
                    />
                  )}
                </div>
                <div className="mt-[1mm] border-t border-[#dedee1] pt-[1.5mm]">
                  <span className="muted text-[2.8mm]">
                    {invoice.signatureName || "Authorised signatory"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------- pieces */

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="muted text-[2.3mm] font-semibold tracking-[0.14em] uppercase">
        {label}
      </div>
      <div className="mt-[0.8mm] text-[3.1mm] font-semibold">{value}</div>
    </div>
  );
}

function Th({
  children,
  className,
  pad,
}: {
  children: React.ReactNode;
  className?: string;
  pad?: boolean;
}) {
  return (
    <th
      className={`text-left text-[2.4mm] font-semibold tracking-[0.12em] uppercase ${
        pad ? "px-[2.5mm]" : ""
      } ${className ?? ""}`}
    >
      {children}
    </th>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-[1.1mm]">
      <span className="muted text-[2.9mm]">{label}</span>
      <span className="num text-[2.9mm]">{value}</span>
    </div>
  );
}

function Block({ heading, body }: { heading: string; body: string }) {
  return (
    <div>
      <div className="muted mb-[1.2mm] text-[2.3mm] font-semibold tracking-[0.14em] uppercase">
        {heading}
      </div>
      <div className="text-[2.8mm] whitespace-pre-line">{body}</div>
    </div>
  );
}

function PartyBlock({
  heading,
  party,
  accent,
  taxIdLabel,
}: {
  heading: string;
  party: Party;
  accent: string;
  taxIdLabel: string;
}) {
  return (
    <div>
      <div
        className="mb-[1.5mm] text-[2.3mm] font-semibold tracking-[0.14em] uppercase"
        style={{ color: accent }}
      >
        {heading}
      </div>
      {party.name && (
        <div className="text-[3.4mm] font-semibold">{party.name}</div>
      )}
      {party.address && (
        <div className="muted mt-[0.8mm] text-[2.9mm] whitespace-pre-line">
          {party.address}
        </div>
      )}
      {party.taxId && (
        <div className="muted mt-[0.8mm] text-[2.9mm]">
          {taxIdLabel}: {party.taxId}
        </div>
      )}
      {party.email && <div className="muted text-[2.9mm]">{party.email}</div>}
      {party.phone && <div className="muted text-[2.9mm]">{party.phone}</div>}
    </div>
  );
}

/** Mixes a hex colour toward white, for the table header tint. */
function mix(hex: string, amount: number): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  const v = m ? m[1] : "ff4f18";
  const ch = (i: number) => {
    const c = parseInt(v.slice(i, i + 2), 16);
    return Math.round(c + (255 - c) * amount);
  };
  return `rgb(${ch(0)}, ${ch(2)}, ${ch(4)})`;
}

/**
 * Scales the sheet down to whatever width it has been given.
 *
 * The sheet is laid out at a true 210mm so the preview and the PDF agree on
 * where a line wraps; a transform then fits it to the column. Because a
 * transform does not affect layout, the wrapper is given the scaled height
 * explicitly, or the page would reserve room for the full A4 and leave a
 * gap below the preview.
 */
export function ScaledSheet({ invoice }: { invoice: Invoice }) {
  const wrap = useRef<HTMLDivElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const wrapEl = wrap.current;
    const sheetEl = sheet.current;
    if (!wrapEl || !sheetEl) return;

    /* offsetWidth/Height are layout boxes and ignore the transform, so the
       scaled element can be measured for its own natural size — but only
       because `width: max-content` makes it hug the A4 sheet. As an ordinary
       block it would report the width of the column it sits in, the ratio
       would always be 1, and the sheet would overflow at full size. */
    const measure = () => {
      const available = wrapEl.clientWidth;
      if (!available || !sheetEl.offsetWidth) return;
      const next = Math.min(available / sheetEl.offsetWidth, 1);
      setScale(next);
      setHeight(sheetEl.offsetHeight * next);
    };

    measure();

    /* the sheet grows as items are added, so it is watched as well as the
       column it has to fit into */
    const observer = new ResizeObserver(measure);
    observer.observe(wrapEl);
    observer.observe(sheetEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrap} className="w-full">
      <div style={{ height: height || undefined }}>
        <div
          ref={sheet}
          style={{
            width: "max-content",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <InvoiceSheet invoice={invoice} />
        </div>
      </div>
    </div>
  );
}
