/**
 * The guide registry.
 *
 * Split across three files purely so no single one becomes unmanageable —
 * everything downstream reads `guides` from here. Order is the order they
 * appear on the hub page and in the footer, so it is editorial: the pages
 * with the broadest intent come first.
 */
import type { Guide } from "./guide-types";
import { guidesA } from "./guides-a";
import { guidesB } from "./guides-b";
import { guidesC } from "./guides-c";

export type { Guide, Section, Block, Faq } from "./guide-types";

export const guides: Guide[] = [...guidesA, ...guidesB, ...guidesC];

export const guideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);

/** Every guide slug — used for static params and the sitemap. */
export const guideSlugs = guides.map((g) => g.slug);
