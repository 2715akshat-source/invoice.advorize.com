import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { posts } from "@/content/posts";
import { absolute } from "@/lib/seo";

/**
 * The sitemap.
 *
 * Generated from the two content registries, so a page cannot be published
 * and then left out of it. Submit https://invoice.advorize.com/sitemap.xml in
 * Search Console as its own property — a subdomain does not inherit the main
 * site's.
 *
 * Every route the site serves is here. The only pages deliberately absent are
 * the ones that are not pages: robots.txt, the sitemap itself, and the 404.
 *
 * Two rules this file follows:
 *
 * **A date is never invented.** Guides and posts each carry their own
 * editorial `updated` date and use it. The three index pages derive theirs
 * from the newest thing they list, because that is genuinely when they last
 * changed — an index page is only as fresh as its contents. Nothing here
 * calls `new Date()` at request time, which would tell a crawler that all
 * forty-five URLs changed at the moment it asked.
 *
 * **Priority is relative.** It ranks our own pages against each other by
 * commercial intent, and nothing more. Google treats it as a weak hint at
 * best, so the gradient is here to be useful to us rather than to persuade
 * anyone.
 */

/** Baked once at build; see next.config.ts. Only a last-resort fallback. */
const BUILT = new Date(process.env.BUILD_TIME ?? Date.now());

/**
 * The reference pages targeting the highest-intent queries. These are the
 * pages the site most wants found, so they lead the file.
 */
const HEADLINE_GUIDES = new Set([
  "gst-invoice-format",
  "invoice-format-india",
  "how-to-make-an-invoice",
]);

/** The posts with the broadest search demand behind them. */
const HEADLINE_POSTS = new Set([
  "best-free-invoice-generator-india",
  "how-to-get-invoices-paid-faster",
  "invoice-format-in-excel-vs-generator",
]);

/** The most recent `updated` date across a set, for an index page. */
function newest(items: { updated: string }[]): Date {
  const dates = items
    .map((item) => new Date(item.updated))
    .filter((date) => !Number.isNaN(date.getTime()));
  if (!dates.length) return BUILT;
  return new Date(Math.max(...dates.map((d) => d.getTime())));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const guidesUpdated = newest(guides);
  const postsUpdated = newest(posts);
  /* the home page carries the tool itself, so it is as fresh as the newest
     thing on the site either way */
  const siteUpdated = new Date(
    Math.max(guidesUpdated.getTime(), postsUpdated.getTime(), BUILT.getTime()),
  );

  return [
    /* The generator. Everything else on the site exists to point at it. */
    {
      url: absolute("/"),
      lastModified: siteUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },

    /* Reference pages, highest intent first. */
    ...guides
      .filter((guide) => HEADLINE_GUIDES.has(guide.slug))
      .map((guide) => ({
        url: absolute(`/${guide.slug}`),
        lastModified: new Date(guide.updated),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      })),

    /* The two hubs. Crawlers reach every content page through these, so they
       matter more than their own ranking suggests. */
    {
      url: absolute("/guides"),
      lastModified: guidesUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absolute("/blog"),
      lastModified: postsUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...guides
      .filter((guide) => !HEADLINE_GUIDES.has(guide.slug))
      .map((guide) => ({
        url: absolute(`/${guide.slug}`),
        lastModified: new Date(guide.updated),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),

    /* Posts, newest first — `posts` is already sorted by date. */
    ...posts.map((post) => ({
      url: absolute(`/blog/${post.slug}`),
      lastModified: new Date(post.updated),
      changeFrequency: "monthly" as const,
      priority: HEADLINE_POSTS.has(post.slug) ? 0.6 : 0.5,
    })),
  ];
}
