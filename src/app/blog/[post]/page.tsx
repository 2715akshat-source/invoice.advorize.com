import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import GuideBody from "@/components/GuideBody";
import Magnetic from "@/components/Magnetic";
import TransitionLink from "@/components/TransitionLink";
import { FadeUp, Reveal } from "@/components/Reveal";
import { postBySlug, postSlugs, posts } from "@/content/posts";
import { guideBySlug } from "@/content/guides";
import { buildMetadata } from "@/lib/seo";
import {
  blogPostingSchema,
  blogSchema,
  breadcrumbSchema,
  faqSchema,
  graph,
  pageSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return postSlugs.map((post) => ({ post }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ post: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post: slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  });
}

const longDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function PostPage({ params }: Props) {
  const { post: slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const guide = post.guide ? guideBySlug(post.guide) : undefined;
  const related = post.related
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd
        data={graph([
          blogSchema(),
          pageSchema({ path, name: post.title, description: post.description }),
          blogPostingSchema({
            path,
            headline: post.h1,
            description: post.description,
            published: post.date,
            updated: post.updated,
            keywords: post.keywords,
            answer: post.answer,
          }),
          faqSchema(path, post.faqs),
          breadcrumbSchema([
            { name: "Invoice Generator", path: "/" },
            { name: "Guides", path: "/blog" },
            { name: post.h1, path },
          ]),
        ])}
      />

      <article>
        <header className="shell pt-32 pb-8 md:pt-40">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <TransitionLink href="/" data-cursor="hover" className="underline-grow">
              Invoice Generator
            </TransitionLink>
            <span aria-hidden className="px-2">
              /
            </span>
            <TransitionLink href="/blog" data-cursor="hover" className="underline-grow">
              Guides
            </TransitionLink>
          </nav>

          <h1 className="display max-w-[20ch] text-[9vw] leading-[1] md:text-[4vw]">
            {post.h1.split(" ").map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block pr-[0.22em]">
                <Reveal immediate delay={0.04 + i * 0.03}>
                  {word}
                </Reveal>
              </span>
            ))}
          </h1>

          <FadeUp delay={0.3}>
            <p className="mt-10 max-w-[60ch] text-lg leading-relaxed text-muted">
              {post.lead}
            </p>
            <p className="mt-8 text-sm text-muted">
              {post.minutes} minute read · Updated{" "}
              <time dateTime={post.updated}>{longDate(post.updated)}</time>
            </p>
          </FadeUp>
        </header>

        {/*
         * The answer, before anything else.
         *
         * It is marked with data-answer, which is what the Speakable markup
         * points at — this paragraph is written to stand entirely on its own,
         * so that an answer engine quoting it out of context still says
         * something true and complete.
         */}
        <div className="shell">
          <FadeUp>
            <div className="max-w-[68ch] rounded-[24px] border border-line bg-card p-7 md:p-9">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
                Short answer
              </p>
              <p data-answer className="text-[17px] leading-relaxed">
                {post.answer}
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="shell py-14">
          <div className="max-w-[68ch]">
            <GuideBody sections={post.sections} />
          </div>
        </div>

        {/* the reference page this post sits alongside */}
        {guide && (
          <section className="shell pb-4">
            <FadeUp>
              <div className="flex max-w-[68ch] flex-col gap-6 rounded-[28px] border border-line p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
                    The reference
                  </p>
                  <p className="display mt-3 text-2xl">{guide.h1}</p>
                  <p className="mt-2 max-w-[46ch] text-[15px] text-muted">
                    {guide.description}
                  </p>
                </div>
                <Magnetic strength={0.2}>
                  <TransitionLink
                    href={`/${guide.slug}`}
                    data-cursor="hover"
                    className="inline-flex h-12 shrink-0 items-center rounded-full bg-fg px-7 text-sm font-medium text-bg transition-colors hover:bg-accent"
                  >
                    Read it
                  </TransitionLink>
                </Magnetic>
              </div>
            </FadeUp>
          </section>
        )}

        <section className="shell py-12">
          <FadeUp>
            <div className="flex max-w-[68ch] flex-col gap-6 rounded-[28px] border border-line p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="display text-2xl">Make one now</p>
                <p className="mt-2 max-w-[46ch] text-[15px] text-muted">
                  Free, no sign-up, and nothing you type leaves your browser.
                </p>
              </div>
              <Magnetic strength={0.2}>
                <TransitionLink
                  href="/#builder"
                  data-cursor="hover"
                  className="inline-flex h-12 shrink-0 items-center rounded-full bg-accent px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Open the generator
                </TransitionLink>
              </Magnetic>
            </div>
          </FadeUp>
        </section>

        <Faq items={post.faqs} title="Questions people ask" />

        {related.length > 0 && (
          <section className="shell pb-24">
            <h2 className="display mb-8 text-2xl">Read next</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <TransitionLink
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  data-cursor="hover"
                  className="block rounded-2xl border border-line p-6 transition-colors hover:border-fg"
                >
                  <h3 className="display text-lg">{item.h1}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </TransitionLink>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
