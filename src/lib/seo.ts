import type { Metadata } from "next";

/**
 * The generator sits on its own subdomain rather than under advorize.com, so
 * canonicals, the sitemap and the schema @ids all have to say invoice. — set
 * NEXT_PUBLIC_SITE_URL if that ever changes.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://invoice.advorize.com"
).replace(/\/$/, "");

export const PARENT_URL = "https://www.advorize.com";

/** Sister site, cross-linked both ways — same chrome, same promise. */
export const PDF_URL = "https://pdf.advorize.com";

export const BRAND = "Advorize Invoice Generator";

export const absolute = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

export function buildMetadata({
  path,
  title,
  description,
  keywords,
}: {
  path: string;
  title?: string;
  description?: string;
  keywords?: string[];
}): Metadata {
  const url = absolute(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: BRAND,
      title,
      description,
      locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
