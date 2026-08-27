import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { absolute } from "@/lib/seo";

/**
 * Generated from the guide registry, so a page cannot be published and left
 * out of the sitemap. Submit https://invoice.advorize.com/sitemap.xml in
 * Search Console as its own property — a subdomain does not inherit the main
 * site's.
 *
 * Guides carry their own editorial `updated` date, which is a better signal
 * than a file mtime: deployments normalise timestamps for reproducible
 * builds, so an mtime cannot date a page in production anyway.
 */
const BUILT = new Date(process.env.BUILD_TIME ?? Date.now());

/** The guides worth pointing a crawler at first. */
const HEADLINE = new Set([
  "gst-invoice-format",
  "invoice-format-india",
  "how-to-make-an-invoice",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absolute("/"),
      lastModified: BUILT,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: absolute("/guides"),
      lastModified: BUILT,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...guides.map((guide) => ({
      url: absolute(`/${guide.slug}`),
      lastModified: new Date(guide.updated),
      changeFrequency: "monthly" as const,
      priority: HEADLINE.has(guide.slug) ? 0.8 : 0.6,
    })),
  ];
}
