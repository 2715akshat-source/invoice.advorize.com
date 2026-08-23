/** Hands bytes to the browser as a file. Nothing here touches a server. */
export function download(bytes: Uint8Array | Blob, filename: string) {
  const blob =
    bytes instanceof Blob
      ? bytes
      : new Blob([bytes as unknown as BlobPart], { type: "application/pdf" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  /* Revoking immediately can cancel the download in Safari. */
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/**
 * "Invoice INV-202608-001 — Northline Retail.pdf", minus anything a
 * filesystem would object to.
 */
export function safeFilename(parts: (string | undefined)[], ext: string) {
  const name = parts
    .filter((p): p is string => Boolean(p && p.trim()))
    .join(" - ")
    /* the characters Windows, macOS and Linux between them refuse */
    .replace(/[\\/:*?"<>|]+/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);

  return `${name || "invoice"}.${ext}`;
}
