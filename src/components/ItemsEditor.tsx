"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Num, Text } from "./Field";
import {
  emptyItem,
  lineTotal,
  type Invoice,
  type LineItem,
} from "@/lib/invoice";
import { formatMoney } from "@/lib/currency";
import type { Currency } from "@/lib/currency";

/**
 * The line-item grid.
 *
 * On a wide screen it is a real table, because entering ten lines of pricing
 * is a columnar job and a stack of cards makes it impossible to scan a column
 * of rates for the one that is wrong. Below `lg` it becomes cards, because a
 * six-column table on a phone is worse than useless.
 */
export default function ItemsEditor({
  invoice,
  currency,
  onChange,
}: {
  invoice: Invoice;
  currency: Currency;
  onChange: (items: LineItem[]) => void;
}) {
  const perItemTax = invoice.taxMode === "per-item";
  const items = invoice.items;

  const patch = (id: string, changes: Partial<LineItem>) =>
    onChange(items.map((i) => (i.id === id ? { ...i, ...changes } : i)));

  const remove = (id: string) => {
    const next = items.filter((i) => i.id !== id);
    /* never leave the table with nothing in it — an empty row is an
       invitation, an empty table is a dead end */
    onChange(next.length ? next : [emptyItem()]);
  };

  const move = (index: number, by: number) => {
    const target = index + by;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  const duplicate = (index: number) => {
    const next = [...items];
    next.splice(index + 1, 0, { ...items[index], id: emptyItem().id });
    onChange(next);
  };

  return (
    <div>
      {/* ------------------------------------------------ desktop header */}
      <div
        className="mb-2 hidden gap-3 lg:grid"
        style={{ gridTemplateColumns: columns(perItemTax) }}
      >
        <span className="label mb-0">Description</span>
        <span className="label mb-0 text-right">Qty</span>
        <span className="label mb-0">Unit</span>
        <span className="label mb-0 text-right">Rate</span>
        {perItemTax && <span className="label mb-0 text-right">Tax %</span>}
        <span className="label mb-0 text-right">Amount</span>
        <span />
      </div>

      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-line p-3 lg:rounded-none lg:border-0 lg:p-0"
            >
              <div
                className="item-row"
                style={{ ["--cols" as string]: columns(perItemTax) }}
              >
                <div className="space-y-2">
                  <Text
                    value={item.description}
                    onChange={(v) => patch(item.id, { description: v })}
                    placeholder="What are you charging for?"
                  />
                  <Text
                    value={item.details}
                    onChange={(v) => patch(item.id, { details: v })}
                    placeholder="Optional detail line"
                    className="!text-[13px] !text-muted"
                  />
                </div>

                <div className="item-nums">
                  <label>
                    <span className="label label-inline">Qty</span>
                    <Num
                      value={item.quantity}
                      onChange={(v) => patch(item.id, { quantity: v })}
                      min={0}
                    />
                  </label>

                  <label>
                    <span className="label label-inline">Unit</span>
                    <Text
                      value={item.unit}
                      onChange={(v) => patch(item.id, { unit: v })}
                      placeholder="hrs"
                    />
                  </label>

                  <label>
                    <span className="label label-inline">Rate</span>
                    <Num
                      value={item.rate}
                      onChange={(v) => patch(item.id, { rate: v })}
                      min={0}
                    />
                  </label>

                  {perItemTax && (
                    <label>
                      <span className="label label-inline">Tax %</span>
                      <Num
                        value={item.taxRate}
                        onChange={(v) => patch(item.id, { taxRate: v })}
                        min={0}
                      />
                    </label>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-line pt-3 lg:block lg:border-0 lg:pt-0">
                  <span className="label label-inline mb-0">Amount</span>
                  <span className="block py-[10px] text-right text-sm font-medium tabular-nums">
                    {formatMoney(lineTotal(item, currency), currency)}
                  </span>
                </div>

                <div className="flex items-center gap-1 lg:pt-[6px]">
                  <RowButton
                    label="Move up"
                    onClick={() => move(index, -1)}
                    disabled={index === 0}
                  >
                    <path d="M6 12l4-4 4 4" />
                  </RowButton>
                  <RowButton
                    label="Move down"
                    onClick={() => move(index, 1)}
                    disabled={index === items.length - 1}
                  >
                    <path d="M6 8l4 4 4-4" />
                  </RowButton>
                  <RowButton label="Duplicate" onClick={() => duplicate(index)}>
                    <rect x="4" y="4" width="8" height="8" rx="1.5" />
                    <path d="M8 16h6a2 2 0 0 0 2-2V8" />
                  </RowButton>
                  <RowButton label="Remove" onClick={() => remove(item.id)}>
                    <path d="M5 5l10 10M15 5L5 15" />
                  </RowButton>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => onChange([...items, { ...emptyItem(), taxRate: invoice.taxRate }])}
        data-cursor="hover"
        className="mt-4 inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium transition-colors hover:border-fg"
      >
        <span className="text-base leading-none">+</span> Add line
      </button>
    </div>
  );
}

/** Column template for the desktop grid, kept in one place. */
const columns = (perItemTax: boolean) =>
  `minmax(0,1fr) 76px 72px 110px ${perItemTax ? "76px " : ""}110px 108px`;

function RowButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      data-cursor="hover"
      className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-card hover:text-fg disabled:pointer-events-none disabled:opacity-25"
    >
      <svg
        viewBox="0 0 20 20"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </button>
  );
}
