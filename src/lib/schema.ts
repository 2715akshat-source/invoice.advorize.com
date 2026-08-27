import { BRAND, PARENT_URL, SITE_URL, absolute } from "./seo";

/** Wraps a set of nodes in the single @graph every page emits. */
export const graph = (nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});

export const organizationSchema = () => ({
  "@type": "Organization",
  "@id": `${PARENT_URL}/#organization`,
  name: "Advorize",
  url: PARENT_URL,
  email: "sales@advorize.com",
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BRAND,
  inLanguage: "en-IN",
  publisher: { "@id": `${PARENT_URL}/#organization` },
});

/**
 * The generator is a real piece of software that runs in the browser, so
 * WebApplication is the honest type — and the free/no-signup claim is one we
 * can back up, which is what makes the offer markup safe.
 */
export const appSchema = (featureList: string[]) => ({
  "@type": "WebApplication",
  "@id": `${absolute("/")}#app`,
  name: BRAND,
  url: SITE_URL,
  description:
    "A free invoice generator that builds a GST-ready PDF invoice in your browser. No sign-up, no watermark, and nothing you type is uploaded.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any — runs in a web browser",
  browserRequirements: "Requires JavaScript",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  featureList,
  publisher: { "@id": `${PARENT_URL}/#organization` },
});

export const faqSchema = (path: string, faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  "@id": `${absolute(path)}#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const howToSchema = ({
  path,
  name,
  steps,
}: {
  path: string;
  name: string;
  steps: string[];
}) => ({
  "@type": "HowTo",
  "@id": `${absolute(path)}#howto`,
  name,
  totalTime: "PT3M",
  step: steps.map((text, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    text,
  })),
});

/**
 * The page itself. Small, but it is what connects a URL to the site, the
 * organisation and the language it is written in — the context an answer
 * engine uses to decide whether a page is a fragment or part of something.
 */
export const pageSchema = ({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) => ({
  "@type": "WebPage",
  "@id": `${absolute(path)}#webpage`,
  url: absolute(path),
  name,
  description,
  inLanguage: "en-IN",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${PARENT_URL}/#organization` },
});

/**
 * A written guide.
 *
 * `Article` rather than `TechArticle` — these are explainers for people
 * running a business, not developer documentation, and the type a search
 * engine understands most reliably is the honest one. `dateModified` is the
 * field that actually earns anything here: it is what marks a page about
 * rules that change as current rather than stale.
 */
export const articleSchema = ({
  path,
  headline,
  description,
  updated,
  keywords,
}: {
  path: string;
  headline: string;
  description: string;
  updated: string;
  keywords: string[];
}) => ({
  "@type": "Article",
  "@id": `${absolute(path)}#article`,
  headline,
  description,
  inLanguage: "en-IN",
  datePublished: updated,
  dateModified: updated,
  keywords: keywords.join(", "),
  mainEntityOfPage: { "@id": `${absolute(path)}#webpage` },
  author: { "@id": `${PARENT_URL}/#organization` },
  publisher: { "@id": `${PARENT_URL}/#organization` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
});

/** The guide index — one node listing every guide, in order. */
export const itemListSchema = ({
  path,
  name,
  items,
}: {
  path: string;
  name: string;
  items: { name: string; path: string }[];
}) => ({
  "@type": "ItemList",
  "@id": `${absolute(path)}#list`,
  name,
  numberOfItems: items.length,
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    url: absolute(item.path),
  })),
});

/**
 * A blog post.
 *
 * `speakable` marks the two elements worth reading aloud — the headline and
 * the answer-first paragraph. It is a small signal, but it points an answer
 * engine at the part of the page written to stand on its own, which is the
 * part we want quoted.
 */
export const blogPostingSchema = ({
  path,
  headline,
  description,
  published,
  updated,
  keywords,
  answer,
}: {
  path: string;
  headline: string;
  description: string;
  published: string;
  updated: string;
  keywords: string[];
  answer: string;
}) => ({
  "@type": "BlogPosting",
  "@id": `${absolute(path)}#post`,
  headline,
  description,
  /* the direct answer, so it travels with the markup rather than only
     existing in the rendered HTML */
  abstract: answer,
  url: absolute(path),
  datePublished: published,
  dateModified: updated,
  keywords: keywords.join(", "),
  inLanguage: "en-IN",
  author: { "@id": `${PARENT_URL}/#organization` },
  publisher: { "@id": `${PARENT_URL}/#organization` },
  mainEntityOfPage: { "@id": `${absolute(path)}#webpage` },
  isPartOf: { "@id": `${SITE_URL}/#blog` },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "[data-answer]"],
  },
});

/** The blog itself, so its posts have something to belong to. */
export const blogSchema = () => ({
  "@type": "Blog",
  "@id": `${SITE_URL}/#blog`,
  url: absolute("/blog"),
  name: "Advorize Invoice Generator — Guides",
  inLanguage: "en-IN",
  publisher: { "@id": `${PARENT_URL}/#organization` },
});

export const breadcrumbSchema = (trail: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: absolute(t.path),
  })),
});
