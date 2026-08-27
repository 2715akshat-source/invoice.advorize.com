import type { Section, Faq } from "./guide-types";

/**
 * Blog posts.
 *
 * They share the guides' block model, so a post can use a comparison table or
 * a numbered procedure rather than only prose. That is not a cosmetic choice:
 * tables and short standalone steps are the shapes that get lifted verbatim
 * into AI answers and featured snippets, and prose walls do not.
 *
 * The field that does the most work here is `answer`. Every post opens with a
 * direct, self-contained response to the question in its title — before any
 * preamble — because that paragraph is what an assistant quotes when someone
 * asks the question the post is named after. It is also the honest way to
 * write: say the answer, then explain it.
 */
export type Post = {
  slug: string;
  /** SEO title, under ~60 characters where possible */
  title: string;
  h1: string;
  description: string;
  /** ISO date — publication, and the index ordering */
  date: string;
  /** ISO date — last substantive revision */
  updated: string;
  /** reading time in minutes, written rather than counted */
  minutes: number;
  lead: string;
  /**
   * The answer-first paragraph. Rendered above the body, and the thing most
   * likely to be quoted back by a search or answer engine.
   */
  answer: string;
  sections: Section[];
  faqs: Faq[];
  keywords: string[];
  /** Slugs of related posts. */
  related: string[];
  /** The reference guide this post sits alongside, if there is one. */
  guide?: string;
};

export type { Section, Faq } from "./guide-types";
