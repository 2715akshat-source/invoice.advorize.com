import type { MetadataRoute } from "next";
import { absolute } from "@/lib/seo";

/** Submit https://invoice.advorize.com/sitemap.xml in Search Console. */
const BUILT = new Date(process.env.BUILD_TIME ?? Date.now());

const PAGES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/gst-invoice-format", priority: 0.8 },
  { path: "/guide", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority }) => ({
    url: absolute(path),
    lastModified: BUILT,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority,
  }));
}
