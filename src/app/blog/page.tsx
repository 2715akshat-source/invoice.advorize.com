import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TransitionLink from "@/components/TransitionLink";
import { FadeUp, Reveal } from "@/components/Reveal";
import { posts } from "@/content/posts";
import { buildMetadata } from "@/lib/seo";
import {
  blogSchema,
  breadcrumbSchema,
  graph,
  itemListSchema,
  pageSchema,
} from "@/lib/schema";

const PATH = "/blog";

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: "Invoicing Guides — Getting Paid, GST and Running the Admin",
  description:
    "Practical writing on invoicing for Indian businesses and freelancers: getting paid faster, invoicing overseas clients, asking for advances, and choosing tools.",
  keywords: [
    "invoicing guides",
    "how to get paid freelancer india",
    "invoicing tips small business",
    "invoice blog india",
  ],
});

const longDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function BlogPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={graph([
          blogSchema(),
          pageSchema({
            path: PATH,
            name: "Invoicing guides",
            description:
              "Practical writing on invoicing for Indian businesses and freelancers.",
          }),
          itemListSchema({
            path: PATH,
            name: "Invoicing guides",
            items: posts.map((p) => ({ name: p.h1, path: `/blog/${p.slug}` })),
          }),
          breadcrumbSchema([
            { name: "Invoice Generator", path: "/" },
            { name: "Guides", path: PATH },
          ]),
        ])}
      />

      <section className="shell pt-36 pb-12 md:pt-44">
        <p className="mb-7 text-[11px] font-semibold tracking-[0.25em] text-accent uppercase">
          {posts.length} guides
        </p>
        <h1 className="display max-w-[16ch] text-[12vw] leading-[0.95] md:text-[6vw]">
          <Reveal immediate>Invoicing, in practice</Reveal>
        </h1>
        <FadeUp delay={0.3}>
          <p className="mt-10 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">
            Writing about the part of invoicing that is not the document —
            getting paid, invoicing across borders, asking for money up front,
            and knowing which tool the job actually needs.
          </p>
        </FadeUp>
      </section>

      {/* The most recent post gets the room; the rest are a list. */}
      <section className="shell pb-8">
        <FadeUp>
          <TransitionLink
            href={`/blog/${lead.slug}`}
            data-cursor="hover"
            data-cursor-text="Read"
            className="block rounded-[28px] border border-line p-8 transition-colors hover:border-fg md:p-14"
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
              Latest · {longDate(lead.date)}
            </span>
            <h2 className="display mt-5 max-w-[20ch] text-[8vw] leading-[1.02] md:text-[3.2vw]">
              {lead.h1}
            </h2>
            <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted">
              {lead.description}
            </p>
            <span className="mt-6 inline-block text-sm text-muted">
              {lead.minutes} minute read
            </span>
          </TransitionLink>
        </FadeUp>
      </section>

      <section className="shell pb-24">
        <div className="border-t border-line">
          {rest.map((post, i) => (
            <FadeUp key={post.slug} delay={Math.min(i, 4) * 0.05}>
              <TransitionLink
                href={`/blog/${post.slug}`}
                data-cursor="hover"
                data-cursor-text="Read"
                className="group grid gap-3 border-b border-line py-8 md:grid-cols-[minmax(0,150px)_minmax(0,1fr)] md:gap-10"
              >
                <span className="text-sm text-muted">
                  {longDate(post.date)}
                  <span className="block">{post.minutes} min</span>
                </span>
                <div>
                  <h2 className="display max-w-[24ch] text-2xl transition-colors group-hover:text-accent md:text-3xl">
                    {post.h1}
                  </h2>
                  <p className="mt-3 max-w-[64ch] leading-relaxed text-muted">
                    {post.description}
                  </p>
                </div>
              </TransitionLink>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
