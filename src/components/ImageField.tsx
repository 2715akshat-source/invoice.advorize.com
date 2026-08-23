"use client";

import { useRef, useState } from "react";
import { readImage } from "@/lib/image";

/**
 * A logo or signature picker.
 *
 * Accepts a click or a drop, and shows what it has. The file is decoded and
 * re-encoded locally by `readImage` — the picker never sees a network, which
 * is why there is no progress bar and no failure state beyond "that file
 * could not be read".
 */
export default function ImageField({
  value,
  onChange,
  hint,
}: {
  value: string | null;
  onChange: (dataUrl: string | null) => void;
  hint?: string;
}) {
  const input = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function take(file: File | undefined) {
    if (!file) return;
    setError(null);
    try {
      const image = await readImage(file);
      onChange(image.dataUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "That image could not be read.");
    }
  }

  if (value) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-line p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={value}
          alt="Selected"
          className="h-12 w-auto max-w-[120px] object-contain"
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => input.current?.click()}
            data-cursor="hover"
            className="h-9 rounded-full border border-line px-4 text-xs transition-colors hover:border-fg"
          >
            Replace
          </button>
          <button
            type="button"
            onClick={() => onChange(null)}
            data-cursor="hover"
            className="h-9 rounded-full px-3 text-xs text-muted transition-colors hover:text-fg"
          >
            Remove
          </button>
        </div>
        <input
          ref={input}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => take(e.target.files?.[0])}
        />
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => input.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          take(e.dataTransfer.files?.[0]);
        }}
        data-over={over}
        data-cursor="hover"
        className="flex h-[72px] w-full items-center justify-center rounded-xl border border-dashed border-line text-sm text-muted transition-colors data-[over=true]:border-accent data-[over=true]:bg-accent/5"
      >
        Drop an image, or click to choose
      </button>
      {(error || hint) && (
        <span className="mt-1.5 block text-[11px] text-muted">
          {error ?? hint}
        </span>
      )}
      <input
        ref={input}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => take(e.target.files?.[0])}
      />
    </div>
  );
}
