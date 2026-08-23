"use client";

import type { ReactNode } from "react";

/**
 * The form primitives.
 *
 * There are around sixty inputs in the builder, so each one is a label, a
 * control and nothing else — no wrapper divs with their own opinions. The
 * styling lives in globals.css (`.field`, `.label`); these only handle the
 * wiring.
 */

export function Labeled({
  label,
  hint,
  children,
  className,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="label">{label}</span>
      {children}
      {hint && <span className="mt-1.5 block text-[11px] text-muted">{hint}</span>}
    </label>
  );
}

export function Text({
  value,
  onChange,
  placeholder,
  type = "text",
  className,
  ...rest
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "type"
>) {
  return (
    <input
      {...rest}
      type={type}
      className={`field ${className ?? ""}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function Area({
  value,
  onChange,
  placeholder,
  rows = 3,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
}) {
  return (
    <textarea
      className={`field ${className ?? ""}`}
      rows={rows}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

/**
 * A money or quantity input.
 *
 * It keeps its own string while focused so a half-typed "12." or a cleared
 * box does not get rewritten to 0 under the cursor — the number only goes
 * back to the invoice when it parses, and the field re-syncs on blur.
 */
export function Num({
  value,
  onChange,
  placeholder,
  step = "any",
  min,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  step?: string;
  min?: number;
  className?: string;
}) {
  return (
    <input
      type="number"
      inputMode="decimal"
      step={step}
      min={min}
      className={`field field-num ${className ?? ""}`}
      placeholder={placeholder}
      value={Number.isFinite(value) ? String(value) : ""}
      onChange={(e) => {
        const raw = e.target.value;
        onChange(raw === "" ? 0 : Number(raw));
      }}
      onFocus={(e) => e.currentTarget.select()}
    />
  );
}

export function Select<T extends string>({
  value,
  onChange,
  options,
  className,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  className?: string;
}) {
  return (
    <select
      className={`field ${className ?? ""}`}
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function Segmented<T extends string>({
  value,
  onChange,
  options,
  className,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
  className?: string;
}) {
  return (
    <div className={`segmented ${className ?? ""}`} role="group">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          data-cursor="hover"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      data-cursor="hover"
      className="flex items-center gap-3 text-sm"
    >
      <span
        className={`relative h-[22px] w-[38px] shrink-0 rounded-full border transition-colors ${
          checked ? "border-accent bg-accent" : "border-line bg-card"
        }`}
      >
        <span
          className={`absolute top-[2px] h-[16px] w-[16px] rounded-full bg-white shadow-sm transition-all ${
            checked ? "left-[19px]" : "left-[2px]"
          }`}
        />
      </span>
      <span className="text-left">{label}</span>
    </button>
  );
}

/** A titled section of the form. */
export function Panel({
  title,
  aside,
  children,
}: {
  title: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="panel p-5 md:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="display text-lg">{title}</h3>
        {aside}
      </div>
      {children}
    </section>
  );
}
