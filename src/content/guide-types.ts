/**
 * The guide content model.
 *
 * Every written page on this site is one object in the registry. The route,
 * the metadata, the sitemap entry, the footer link, the breadcrumb and all
 * four schema blocks are generated from it, so a page can never ship with
 * another page's description or go missing from the sitemap because somebody
 * forgot to add it.
 *
 * The block union is deliberately small. It covers what these pages actually
 * need — prose, lists, a field/meaning table, a comparison table and a
 * callout — and nothing else, because a content model that can express
 * anything stops being a content model and becomes HTML with extra steps.
 */

export type Block =
  /** A paragraph. `**bold**` is the only inline markup. */
  | { kind: "p"; text: string }
  /** Unordered points. */
  | { kind: "list"; items: string[] }
  /** An ordered procedure. Feeds HowTo schema when the guide names one. */
  | { kind: "steps"; items: string[] }
  /** Two-column term/meaning rows — the shape most of these pages need. */
  | { kind: "fields"; rows: [string, string][] }
  /** A real comparison table. */
  | { kind: "table"; head: string[]; rows: string[][] }
  /** A single set-apart caution or clarification. */
  | { kind: "note"; text: string };

export type Section = {
  heading: string;
  blocks: Block[];
};

export type Faq = { q: string; a: string };

export type Guide = {
  /** The URL. Top-level, like the tools on the sister site. */
  slug: string;
  /** <title>, without the site-name suffix the template adds. */
  title: string;
  /** The visible H1. Shorter and more human than the title. */
  h1: string;
  /** Meta description and the schema description. One sentence, ~155 chars. */
  description: string;
  /** Editorial date. Dates the page in schema and in the sitemap. */
  updated: string;
  /** The one-line kicker above the H1. */
  eyebrow: string;
  /** The standfirst under the H1. */
  lead: string;
  keywords: string[];
  sections: Section[];
  /**
   * Present only when the page genuinely documents a procedure. HowTo markup
   * on a page that is a reference rather than a set of steps is the kind of
   * thing that earns a manual action, so it is opt-in per guide.
   */
  howTo?: { name: string; steps: string[] };
  faqs: Faq[];
  /** Slugs of the three or four guides most worth reading next. */
  related: string[];
};
