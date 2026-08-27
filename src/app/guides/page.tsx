import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TransitionLink from "@/components/TransitionLink";
import { FadeUp, Reveal } from "@/components/Reveal";
import { guides } from "@/content/guides";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
  pageSchema,
} from "@/lib/schema";

const PATH = "/guides";

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: "Invoice Format Guides — GST, Proforma, Quotation and More",
  description:
    "Plain guides to every document an Indian business calls an invoice: GST tax invoice, bill of supply, proforma, quotation, receipt, credit note and export invoice.",
  keywords: [
    "invoice format guides",
    "gst invoice guide",
    "invoice types india",
    "billing documents india",
  ],
});

/* Grouped by what the reader is trying to do, which is a more useful sort
   than alphabetical when the titles all begin with the same three words. */
const GROUPS = [
  {
    heading: "Start here",
    slugs: ["invoice-format-india", "how-to-make-an-invoice", "invoice-number-format"],
  },
  {
    heading: "GST and compliance",
    slugs: ["gst-invoice-format", "tax-invoice-vs-bill-of-supply", "e-invoice-india"],
  },
  {
    heading: "Other documents",
    slugs: [
      "proforma-invoice-format",
      "quotation-format",
      "payment-receipt-format",
      "credit-note-and-debit-note-format",
    ],
  },
  {
    heading: "Specific situations",
    slugs: ["freelance-invoice-format", "export-invoice-format"],
  },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={graph([
          pageSchema({
            path: PATH,
            name: "Invoice format guides",
            description:
              "Guides to every document an Indian business calls an invoice.",
          }),
          itemListSchema({
            path: PATH,
            name: "Invoice format guides",
            items: guides.map((g) => ({ name: g.h1, path: `/${g.slug}` })),
          }),
          breadcrumbSchema([
            { name: "Invoice Generator", path: "/" },
            { name: "Guides", path: PATH },
          ]),
        ])}
      />

      <section className="shell pt-36 pb-12 md:pt-44">
        <p className="mb-7 text-[11px] font-semibold tracking-[0.25em] text-accent uppercase">
          {guides.length} guides
        </p>
        <h1 className="display max-w-[16ch] text-[12vw] leading-[0.95] md:text-[6vw]">
          <Reveal immediate>Invoice format guides</Reveal>
        </h1>
        <FadeUp delay={0.3}>
          <p className="mt-10 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">
            There are seven documents an Indian business routinely calls an
            invoice, and only one of them is a tax invoice. These pages explain
            what each is for, what it must contain, and when to issue which.
          </p>
        </FadeUp>
      </section>

      <section className="shell pb-24">
        {GROUPS.map((group) => (
          <div key={group.heading} className="mt-16 first:mt-0">
            <h2 className="display mb-6 border-t border-line pt-6 text-2xl">
              {group.heading}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {group.slugs
                .map((slug) => guides.find((x) => x.slug === slug))
                .filter((x): x is NonNullable<typeof x> => Boolean(x))
                .map((guide, i) => (
                  <FadeUp key={guide.slug} delay={Math.min(i, 3) * 0.06}>
                    <TransitionLink
                      href={`/${guide.slug}`}
                      data-cursor="hover"
                      className="block h-full rounded-2xl border border-line p-6 transition-colors hover:border-fg"
                    >
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                        {guide.eyebrow}
                      </span>
                      <h3 className="display mt-2 text-xl">{guide.h1}</h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {guide.description}
                      </p>
                    </TransitionLink>
                  </FadeUp>
                ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
