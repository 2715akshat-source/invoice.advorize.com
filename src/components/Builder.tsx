"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Area, Labeled, Num, Panel, Segmented, Select, Text, Toggle } from "./Field";
import ItemsEditor from "./ItemsEditor";
import { ScaledSheet } from "./InvoiceSheet";
import ImageField from "./ImageField";
import {
  blankInvoice,
  clearDraft,
  emptyItem,
  computeTotals,
  docTypeLabel,
  DOC_TYPES,
  loadDraft,
  nextNumber,
  saveDraft,
  sampleInvoice,
  suggestNumber,
  today,
  addDays,
  type DiscountMode,
  type DocType,
  type Invoice,
  type Party,
  type TaxKind,
  type TaxMode,
  type Template,
} from "@/lib/invoice";
import { CURRENCIES, formatMoney } from "@/lib/currency";
import { download, safeFilename } from "@/lib/download";
import { track } from "@/lib/analytics";

/** Preset accents, and a free colour picker beside them. */
const ACCENTS = ["#ff4f18", "#0f172a", "#1d4ed8", "#0f766e", "#7c3aed", "#b91c1c"];

/** The common Indian GST slabs, offered as a shortcut. */
const GST_RATES = [0, 5, 12, 18, 28];

type Pane = "edit" | "preview";

export default function Builder() {
  const [invoice, setInvoice] = useState<Invoice>(blankInvoice);
  /* Nothing renders from the draft until the client has read it, or the
     server HTML and the first client render disagree. */
  const [hydrated, setHydrated] = useState(false);
  const [pane, setPane] = useState<Pane>("edit");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dropped, setDropped] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const totals = useMemo(() => computeTotals(invoice), [invoice]);
  const currency = totals.currency;

  /* ------------------------------------------------------------ state */

  const set = useCallback(
    <K extends keyof Invoice>(key: K, value: Invoice[K]) =>
      setInvoice((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const setParty = useCallback(
    (which: "from" | "to" | "shipTo", key: keyof Party, value: string) =>
      setInvoice((prev) => ({
        ...prev,
        [which]: { ...prev[which], [key]: value },
      })),
    [],
  );

  useEffect(() => {
    const draft = loadDraft();
    if (draft) setInvoice(draft);
    setHydrated(true);
  }, []);

  /* Autosave, debounced — every keystroke would serialise the logo too. */
  const first = useRef(true);
  useEffect(() => {
    if (!hydrated) return;
    if (first.current) {
      first.current = false;
      return;
    }
    const timer = setTimeout(() => {
      saveDraft(invoice);
      setSaved(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [invoice, hydrated]);

  /* The "Saved" note fades rather than sitting there permanently. */
  useEffect(() => {
    if (!saved) return;
    const timer = setTimeout(() => setSaved(false), 2000);
    return () => clearTimeout(timer);
  }, [saved]);

  /* ---------------------------------------------------------- actions */

  const filename = safeFilename(
    [docTypeLabel(invoice.docType), invoice.number, invoice.to.name],
    "pdf",
  );

  async function exportPdf() {
    setBusy(true);
    setError(null);
    setDropped([]);
    track("invoice_export", {
      doc_type: invoice.docType,
      currency: invoice.currencyCode,
      template: invoice.template,
      items: invoice.items.length,
      tax_mode: invoice.taxMode,
    });

    try {
      /* Loaded on demand: pdf-lib and fontkit are most of the JavaScript on
         this site, and someone who only wants to look at the preview should
         never download them. */
      const { renderInvoice } = await import("@/lib/pdf/render");
      const result = await renderInvoice(invoice);
      download(result.bytes, filename);
      setDropped(result.dropped);
      track("invoice_download", { doc_type: invoice.docType });
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "The PDF could not be built.";
      setError(message);
      track("invoice_error", { message });
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    if (!confirm("Clear this invoice and start again? This cannot be undone."))
      return;
    clearDraft();
    setInvoice(blankInvoice());
  }

  /** Same client and settings, next number, dates moved to today. */
  function startNext() {
    setInvoice((prev) => ({
      ...prev,
      number: nextNumber(prev.number),
      issueDate: today(),
      dueDate: addDays(today(), 15),
      reference: "",
      /* the tax rate is a setting, not a line — it survives; the work does not */
      items: [{ ...emptyItem(), taxRate: prev.items[0]?.taxRate ?? prev.taxRate }],
      amountPaid: 0,
    }));
  }

  const gstMode = invoice.taxMode === "gst";

  /* ------------------------------------------------------------- view */

  return (
    <div id="builder" className="scroll-mt-24">
      {/* ------------------------------------------------------ toolbar */}
      {/* Rides directly under the header, and up to the top of the window
          once the header has slid away — see --nav-offset in Nav. */}
      <div
        className="print-hide sticky z-30 mb-6 border-b border-line bg-bg/85 py-3 backdrop-blur-md transition-[top] duration-300"
        style={{ top: "var(--nav-offset, 0px)" }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Segmented<DocType>
            value={invoice.docType}
            onChange={(value) => {
              /* the number carries the document's own prefix, so a fresh,
                 untouched number follows the type it was suggested for */
              setInvoice((prev) => ({
                ...prev,
                docType: value,
                number:
                  prev.number === suggestNumber(prev.docType)
                    ? suggestNumber(value)
                    : prev.number,
              }));
            }}
            options={DOC_TYPES.map((d) => ({
              value: d.id,
              label: d.id === "proforma" ? "Proforma" : d.label,
            }))}
            className="max-w-full overflow-x-auto"
          />

          <div className="ml-auto flex items-center gap-2">
            <AnimatePresence>
              {saved && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hidden text-xs text-muted sm:block"
                >
                  Saved in this browser
                </motion.span>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => window.print()}
              data-cursor="hover"
              className="hidden h-11 items-center rounded-full border border-line px-5 text-sm transition-colors hover:border-fg sm:inline-flex"
            >
              Print
            </button>

            <button
              type="button"
              onClick={exportPdf}
              disabled={busy}
              data-cursor="hover"
              className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {busy ? "Building…" : "Download PDF"}
            </button>
          </div>
        </div>

        {/* pane switch — only ever visible where the panes do not fit side
            by side */}
        <div className="mt-3 grid grid-cols-2 gap-2 xl:hidden">
          {(["edit", "preview"] as Pane[]).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={pane === value}
              onClick={() => setPane(value)}
              data-cursor="hover"
              className={`h-10 rounded-full text-sm transition-colors ${
                pane === value
                  ? "bg-fg text-bg"
                  : "border border-line text-muted"
              }`}
            >
              {value === "edit" ? "Edit" : "Preview"}
            </button>
          ))}
        </div>
      </div>

      {(error || dropped.length > 0) && (
        <div className="print-hide mb-6 space-y-3">
          {error && (
            <p className="rounded-2xl border border-accent/40 bg-accent/10 px-5 py-4 text-sm">
              {error}
            </p>
          )}
          {dropped.length > 0 && (
            <p className="rounded-2xl border border-line px-5 py-4 text-sm text-muted">
              The PDF font could not draw {dropped.map((c) => `“${c}”`).join(", ")},
              so {dropped.length === 1 ? "it was" : "they were"} left out of the
              downloaded file. The preview above shows them because your browser
              has a wider set of fonts than the one embedded in the PDF.
            </p>
          )}
        </div>
      )}

      <div className="grid gap-8 xl:grid-cols-2 xl:items-start">
        {/* ------------------------------------------------------- form */}
        <div
          className={`print-hide space-y-5 ${pane === "edit" ? "" : "hidden xl:block"}`}
        >
          <Panel
            title="Your details"
            aside={
              <button
                type="button"
                onClick={() => setInvoice(sampleInvoice())}
                data-cursor="hover"
                className="text-sm text-muted underline-grow"
              >
                Fill with an example
              </button>
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Labeled label="Business name" className="sm:col-span-2">
                <Text
                  value={invoice.from.name}
                  onChange={(v) => setParty("from", "name", v)}
                  placeholder="Your Studio Pvt. Ltd."
                />
              </Labeled>
              <Labeled label="Address" className="sm:col-span-2">
                <Area
                  value={invoice.from.address}
                  onChange={(v) => setParty("from", "address", v)}
                  placeholder={"14 Camac Street\nKolkata 700017\nIndia"}
                />
              </Labeled>
              <Labeled label="Email">
                <Text
                  value={invoice.from.email}
                  onChange={(v) => setParty("from", "email", v)}
                  type="email"
                  placeholder="accounts@yourstudio.com"
                />
              </Labeled>
              <Labeled label="Phone">
                <Text
                  value={invoice.from.phone}
                  onChange={(v) => setParty("from", "phone", v)}
                  placeholder="+91 98300 00000"
                />
              </Labeled>
              <Labeled
                label={invoice.currencyCode === "INR" ? "GSTIN" : "Tax ID"}
                className="sm:col-span-2"
              >
                <Text
                  value={invoice.from.taxId}
                  onChange={(v) => setParty("from", "taxId", v)}
                  placeholder={
                    invoice.currencyCode === "INR" ? "19AABCU9603R1ZX" : "VAT / EIN"
                  }
                />
              </Labeled>
              <div className="sm:col-span-2">
                <span className="label">Logo</span>
                <ImageField
                  value={invoice.logo}
                  onChange={(v) => set("logo", v)}
                  hint="PNG or JPG. Kept in this browser — never uploaded."
                />
              </div>
            </div>
          </Panel>

          <Panel
            title={invoice.docType === "quotation" ? "Quotation for" : "Bill to"}
            aside={
              <Toggle
                checked={invoice.showShipTo}
                onChange={(v) => set("showShipTo", v)}
                label="Add shipping address"
              />
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Labeled label="Client name" className="sm:col-span-2">
                <Text
                  value={invoice.to.name}
                  onChange={(v) => setParty("to", "name", v)}
                  placeholder="Northline Retail Pvt. Ltd."
                />
              </Labeled>
              <Labeled label="Address" className="sm:col-span-2">
                <Area
                  value={invoice.to.address}
                  onChange={(v) => setParty("to", "address", v)}
                  placeholder={"Unit 402, Prestige Tower\nBengaluru 560001"}
                />
              </Labeled>
              <Labeled label="Email">
                <Text
                  value={invoice.to.email}
                  onChange={(v) => setParty("to", "email", v)}
                  type="email"
                />
              </Labeled>
              <Labeled label="Phone">
                <Text
                  value={invoice.to.phone}
                  onChange={(v) => setParty("to", "phone", v)}
                />
              </Labeled>
              <Labeled
                label={invoice.currencyCode === "INR" ? "Client GSTIN" : "Client tax ID"}
                className="sm:col-span-2"
              >
                <Text
                  value={invoice.to.taxId}
                  onChange={(v) => setParty("to", "taxId", v)}
                />
              </Labeled>

              {invoice.showShipTo && (
                <div className="grid gap-4 border-t border-line pt-4 sm:col-span-2 sm:grid-cols-2">
                  <Labeled label="Ship to name" className="sm:col-span-2">
                    <Text
                      value={invoice.shipTo.name}
                      onChange={(v) => setParty("shipTo", "name", v)}
                    />
                  </Labeled>
                  <Labeled label="Ship to address" className="sm:col-span-2">
                    <Area
                      value={invoice.shipTo.address}
                      onChange={(v) => setParty("shipTo", "address", v)}
                    />
                  </Labeled>
                </div>
              )}
            </div>
          </Panel>

          <Panel title={`${docTypeLabel(invoice.docType)} details`}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Labeled label="Number">
                <Text
                  value={invoice.number}
                  onChange={(v) => set("number", v)}
                  placeholder="INV-202608-001"
                />
              </Labeled>
              <Labeled label="Currency">
                <Select
                  value={invoice.currencyCode}
                  onChange={(v) => set("currencyCode", v)}
                  options={CURRENCIES.map((c) => ({
                    value: c.code,
                    label: `${c.code} — ${c.name}`,
                  }))}
                />
              </Labeled>
              <Labeled label="Issue date">
                <Text
                  type="date"
                  value={invoice.issueDate}
                  onChange={(v) => set("issueDate", v)}
                />
              </Labeled>
              <Labeled
                label={invoice.docType === "quotation" ? "Valid until" : "Due date"}
              >
                <Text
                  type="date"
                  value={invoice.dueDate}
                  onChange={(v) => set("dueDate", v)}
                />
              </Labeled>
              <Labeled
                label="Reference"
                hint="PO number, project code — whatever the client matches it against."
                className="sm:col-span-2"
              >
                <Text
                  value={invoice.reference}
                  onChange={(v) => set("reference", v)}
                  placeholder="PO-4417"
                />
              </Labeled>
            </div>
          </Panel>

          <Panel title="Items">
            <ItemsEditor
              invoice={invoice}
              currency={currency}
              onChange={(items) => set("items", items)}
            />
          </Panel>

          <Panel title="Tax, discount & totals">
            <div className="space-y-5">
              <div>
                <span className="label">How is tax charged?</span>
                <Segmented<TaxMode>
                  value={invoice.taxMode}
                  onChange={(v) => set("taxMode", v)}
                  options={[
                    { value: "gst", label: "GST (India)" },
                    { value: "single", label: "One rate" },
                    { value: "per-item", label: "Per item" },
                    { value: "none", label: "No tax" },
                  ]}
                  className="max-w-full overflow-x-auto"
                />
              </div>

              {gstMode && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <span className="label">Place of supply</span>
                    <Segmented<TaxKind>
                      value={invoice.taxKind}
                      onChange={(v) => set("taxKind", v)}
                      options={[
                        { value: "cgst-sgst", label: "Same state" },
                        { value: "igst", label: "Other state" },
                      ]}
                    />
                    <p className="mt-2 text-[11px] text-muted">
                      Within your state the rate splits into CGST and SGST;
                      across state lines it is a single IGST line. The money is
                      the same either way.
                    </p>
                  </div>
                  <div>
                    <span className="label">GST rate</span>
                    <div className="flex flex-wrap gap-2">
                      {GST_RATES.map((rate) => (
                        <button
                          key={rate}
                          type="button"
                          aria-pressed={invoice.taxRate === rate}
                          onClick={() => set("taxRate", rate)}
                          data-cursor="hover"
                          className={`h-10 rounded-full border px-4 text-sm transition-colors ${
                            invoice.taxRate === rate
                              ? "border-fg bg-fg text-bg"
                              : "border-line text-muted hover:border-fg hover:text-fg"
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {invoice.taxMode === "single" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Labeled label="Tax name">
                    <Text
                      value={invoice.taxLabel}
                      onChange={(v) => set("taxLabel", v)}
                      placeholder="VAT"
                    />
                  </Labeled>
                  <Labeled label="Rate %">
                    <Num
                      value={invoice.taxRate}
                      onChange={(v) => set("taxRate", v)}
                      min={0}
                    />
                  </Labeled>
                </div>
              )}

              {invoice.taxMode === "per-item" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Labeled
                    label="Tax name"
                    hint="Name it GST to have each rate split into CGST and SGST."
                  >
                    <Text
                      value={invoice.taxLabel}
                      onChange={(v) => set("taxLabel", v)}
                    />
                  </Labeled>
                  {invoice.taxLabel === "GST" && (
                    <div>
                      <span className="label">Place of supply</span>
                      <Segmented<TaxKind>
                        value={invoice.taxKind}
                        onChange={(v) => set("taxKind", v)}
                        options={[
                          { value: "cgst-sgst", label: "Same state" },
                          { value: "igst", label: "Other state" },
                        ]}
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                <div>
                  <span className="label">Discount</span>
                  <div className="flex gap-2">
                    <Select<DiscountMode>
                      value={invoice.discountMode}
                      onChange={(v) => set("discountMode", v)}
                      options={[
                        { value: "none", label: "None" },
                        { value: "percent", label: "%" },
                        { value: "flat", label: currency.code },
                      ]}
                      className="!w-[110px]"
                    />
                    {invoice.discountMode !== "none" && (
                      <Num
                        value={invoice.discountValue}
                        onChange={(v) => set("discountValue", v)}
                        min={0}
                      />
                    )}
                  </div>
                </div>

                <Labeled label="Shipping / other charges">
                  <Num
                    value={invoice.shipping}
                    onChange={(v) => set("shipping", v)}
                    min={0}
                  />
                </Labeled>

                <Labeled
                  label="Amount already paid"
                  hint="Set this for a part payment — the invoice then shows a balance due."
                >
                  <Num
                    value={invoice.amountPaid}
                    onChange={(v) => set("amountPaid", v)}
                    min={0}
                  />
                </Labeled>

                <div className="flex flex-col justify-end gap-3 pb-1">
                  <Toggle
                    checked={invoice.roundOff}
                    onChange={(v) => set("roundOff", v)}
                    label={`Round the total to the nearest ${currency.code === "JPY" ? "yen" : "whole unit"}`}
                  />
                  <Toggle
                    checked={invoice.showWords}
                    onChange={(v) => set("showWords", v)}
                    label="Print the amount in words"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-card p-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted">
                    {totals.paid ? "Balance due" : "Total"}
                  </span>
                  <span className="display text-2xl tabular-nums">
                    {formatMoney(
                      totals.paid ? totals.balance : totals.total,
                      currency,
                    )}
                  </span>
                </div>
              </div>
            </div>
          </Panel>

          <Panel title="Payment, notes & signature">
            <div className="grid gap-4">
              <Labeled
                label="Payment details"
                hint="Bank account, UPI ID, payment link — whatever they need to pay you."
              >
                <Area
                  rows={4}
                  value={invoice.payment}
                  onChange={(v) => set("payment", v)}
                  placeholder={
                    "Account name: Your Studio Pvt. Ltd.\nBank: HDFC Bank\nAccount: 50200012345678\nIFSC: HDFC0000123\nUPI: yourstudio@hdfcbank"
                  }
                />
              </Labeled>
              <Labeled label="Notes">
                <Area
                  value={invoice.notes}
                  onChange={(v) => set("notes", v)}
                  placeholder="Thanks for your business."
                />
              </Labeled>
              <Labeled label="Terms & conditions">
                <Area
                  value={invoice.terms}
                  onChange={(v) => set("terms", v)}
                />
              </Labeled>
              <div className="grid gap-4 sm:grid-cols-2">
                <Labeled label="Signed by">
                  <Text
                    value={invoice.signatureName}
                    onChange={(v) => set("signatureName", v)}
                    placeholder="For Your Studio Pvt. Ltd."
                  />
                </Labeled>
                <div>
                  <span className="label">Signature image</span>
                  <ImageField
                    value={invoice.signature}
                    onChange={(v) => set("signature", v)}
                    hint="A photo or scan of your signature."
                  />
                </div>
              </div>
            </div>
          </Panel>

          <Panel title="Look">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <span className="label">Template</span>
                <Segmented<Template>
                  value={invoice.template}
                  onChange={(v) => set("template", v)}
                  options={[
                    { value: "classic", label: "Classic" },
                    { value: "modern", label: "Modern" },
                    { value: "minimal", label: "Minimal" },
                  ]}
                />
              </div>
              <div>
                <span className="label">Accent colour</span>
                <div className="flex flex-wrap items-center gap-2">
                  {ACCENTS.map((color) => (
                    <button
                      key={color}
                      type="button"
                      aria-label={`Accent ${color}`}
                      aria-pressed={invoice.accent === color}
                      onClick={() => set("accent", color)}
                      data-cursor="hover"
                      className={`h-9 w-9 rounded-full border-2 transition-transform ${
                        invoice.accent === color
                          ? "scale-110 border-fg"
                          : "border-transparent"
                      }`}
                      style={{ background: color }}
                    />
                  ))}
                  <label
                    className="flex h-9 items-center gap-2 rounded-full border border-line px-3 text-xs text-muted"
                    title="Pick any colour"
                  >
                    Custom
                    <input
                      type="color"
                      value={invoice.accent}
                      onChange={(e) => set("accent", e.target.value)}
                      className="h-5 w-5 cursor-pointer border-0 bg-transparent p-0"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5">
              <button
                type="button"
                onClick={startNext}
                data-cursor="hover"
                className="h-11 rounded-full border border-line px-5 text-sm transition-colors hover:border-fg"
              >
                Start the next one
              </button>
              <button
                type="button"
                onClick={reset}
                data-cursor="hover"
                className="h-11 rounded-full border border-line px-5 text-sm text-muted transition-colors hover:border-fg hover:text-fg"
              >
                Clear everything
              </button>
            </div>
          </Panel>
        </div>

        {/* ---------------------------------------------------- preview */}
        <div
          className={`xl:sticky ${
            pane === "preview" ? "" : "hidden xl:block"
          }`}
          style={{ top: "calc(var(--nav-offset, 0px) + 88px)" }}
        >
          <div className="print-hide mb-3 flex items-center justify-between">
            <span className="label mb-0">Live preview</span>
            <span className="text-[11px] text-muted">A4 · {filename}</span>
          </div>
          <div className="print-root xl:max-h-[calc(100vh-200px)] xl:overflow-y-auto">
            {/* the sheet renders unscaled for print and scaled for screen */}
            <ScaledSheet invoice={invoice} />
          </div>
        </div>
      </div>
    </div>
  );
}
