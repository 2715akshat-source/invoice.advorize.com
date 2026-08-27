import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import GuideBody from "@/components/GuideBody";
import Magnetic from "@/components/Magnetic";
import TransitionLink from "@/components/TransitionLink";
import { FadeUp, Reveal } from "@/components/Reveal";
import { guideBySlug, guideSlugs, guides } from "@/content/guides";
import { buildMetadata } from "@/lib/seo";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  graph,
  howToSchema,
  pageSchema,
} from "@/lib/schema";

/**
 * Every written page on the site is rendered here from the registry, so the
 * metadata, the schema graph and the internal links are generated the same
 * way on all of them. Adding a guide is one object in `content/guides.ts`.
 */
export function generateStaticParams() {
  return guideSlugs.map((guide) => ({ guide }));
}

/* Nothing outside the registry resolves — an unknown slug is a 404, not a
   silently empty page. */
export const dynamicParams = false;

type Props = { params: Promise<{ guide: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { guide: slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) return {};

  return buildMetadata({
    path: `/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
  });
}

export default async function GuidePage({ params }: Props) {
  const { guide: slug } = await params;
  const guide = guideBySlug(slug);
  if (!guide) notFound();

  const path = `/${guide.slug}`;
  const related = guide.related
    .map((s) => guides.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <JsonLd
        data={graph([
          pageSchema({
            path,
            name: guide.h1,
            description: guide.description,
          }),
          articleSchema({
            path,
            headline: guide.h1,
            description: guide.description,
            updated: guide.updated,
            keywords: guide.keywords,
          }),
          ...(guide.howTo
            ? [howToSchema({ path, name: guide.howTo.name, steps: guide.howTo.steps })]
            : []),
          faqSchema(path, guide.faqs),
          breadcrumbSchema([
            { name: "Invoice Generator", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.h1, path },
          ]),
        ])}
      />

      <section className="shell pt-36 pb-12 md:pt-44">
        <p className="mb-7 text-[11px] font-semibold tracking-[0.25em] text-accent uppercase">
          {guide.eyebrow}
        </p>
        <h1 className="display max-w-[18ch] text-[12vw] leading-[0.95] md:text-[6vw]">
          <Reveal immediate>{guide.h1}</Reveal>
        </h1>
        <FadeUp delay={0.3}>
          <p className="mt-10 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">
            {guide.lead}
          </p>
          <p className="mt-8 text-sm text-muted">
            Last reviewed{" "}
            <time dateTime={guide.updated}>
              {new Date(`${guide.updated}T00:00:00`).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </FadeUp>
      </section>

      <article className="shell pb-16">
        <GuideBody sections={guide.sections} />
      </article>

      {/* -------------------------------------------------------- CTA */}
      <section className="shell pb-8">
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] border border-line p-8 md:flex-row md:items-center md:p-14">
            <div>
              <h2 className="display max-w-[18ch] text-[7vw] leading-[1] md:text-[2.8vw]">
                Lay one out now
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
                The generator puts every field above in its place and hands you
                the PDF. Free, no sign-up, and nothing you type leaves your
                browser.
              </p>
            </div>
            <Magnetic className="shrink-0">
              <TransitionLink
                href="/#builder"
                data-cursor="hover"
                className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-accent text-center text-sm font-medium text-white md:h-40 md:w-40"
              >
                Make an
                <br />
                invoice
              </TransitionLink>
            </Magnetic>
          </div>
        </FadeUp>
      </section>

      <Faq items={guide.faqs} title="Common questions" />

      {/* ---------------------------------------------------- related */}
      {related.length > 0 && (
        <section className="shell pb-24">
          <h2 className="display mb-8 text-2xl">Read next</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <TransitionLink
                key={item.slug}
                href={`/${item.slug}`}
                data-cursor="hover"
                className="block rounded-2xl border border-line p-6 transition-colors hover:border-fg"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                  {item.eyebrow}
                </span>
                <h3 className="display mt-2 text-lg">{item.h1}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </TransitionLink>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
