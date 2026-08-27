import type { Metadata } from "next";
import Builder from "@/components/Builder";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import TransitionLink from "@/components/TransitionLink";
import { FadeUp, Reveal } from "@/components/Reveal";
import { PARENT_URL, PDF_URL, buildMetadata } from "@/lib/seo";
import {
  appSchema,
  faqSchema,
  graph,
  howToSchema,
  pageSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: "Free Invoice Generator — Make a GST Invoice PDF in Your Browser",
  description:
    "Create a professional invoice and download it as a PDF in under a minute. GST-ready, multi-currency, no sign-up and no watermark — and nothing you type ever leaves your browser.",
  keywords: [
    "free invoice generator",
    "gst invoice format",
    "invoice maker online",
    "create invoice pdf free",
    "invoice generator india",
    "invoice template no sign up",
  ],
});

const FEATURES = [
  "GST-ready — CGST/SGST split or IGST, chosen by place of supply",
  "Nine currencies, with Indian or Western digit grouping",
  "Line items with quantity, unit, rate and per-item tax rates",
  "Discounts by percentage or amount, plus shipping and round-off",
  "Amount in words, in lakh and crore or in millions",
  "Your logo and signature, embedded in the PDF",
  "Three templates and any accent colour",
  "Invoice, quotation, proforma, receipt and credit note",
  "Part payments, showing a balance due",
  "Saved in your browser, so a draft survives a closed tab",
];

const STEPS = [
  {
    n: "01",
    title: "Fill in the two addresses",
    body: "Yours and your client's. Add a logo if you have one — it is read from your disk and embedded in the PDF, never uploaded anywhere.",
  },
  {
    n: "02",
    title: "Add what you are charging for",
    body: "One line per item, with a quantity, a rate and a unit if it helps. Tax, discount and shipping all follow underneath, and the preview updates as you type.",
  },
  {
    n: "03",
    title: "Download the PDF",
    body: "A real A4 document with selectable text, ready to email or print. No watermark, no sign-up, and no limit on how many you make.",
  },
];

const FAQS = [
  {
    q: "Is this really free, with no account?",
    a: "Yes. There is no sign-up, no daily cap, no watermark on the PDF and no paid tier holding a feature back. We are a web development and marketing studio, and this tool is the clearest demonstration of how we build.",
  },
  {
    q: "Where does my data go?",
    a: "Nowhere. The whole generator runs in JavaScript inside this tab — your client's address, your bank details and your amounts are typed into the page and used by the page. There is no upload endpoint to send them to, which you can verify by loading this page, going offline, and building an invoice anyway.",
  },
  {
    q: "Does it produce a valid GST invoice?",
    a: "It produces the format: your GSTIN and your client's, an invoice number and date, a per-line description with rate and amount, the tax split as CGST and SGST for a sale inside your state or as IGST across state lines, and the total in both figures and words. What it cannot do is know your HSN/SAC codes or your place of supply — you enter those. It is a formatting tool, not a filing service or tax advice.",
  },
  {
    q: "Can I save an invoice and come back to it?",
    a: "The invoice you are working on is saved in this browser automatically, logo included, and is still here when you return. It is stored on your machine rather than in an account, so it does not follow you to another device — and clearing your browser data clears it. Download the PDF for anything you need to keep.",
  },
  {
    q: "Can I use it for a quotation or a receipt?",
    a: "Yes — the document type at the top switches between invoice, quotation, proforma invoice, receipt and credit note. The headings change with it: a quotation shows a valid-until date and an estimated total rather than a due date.",
  },
  {
    q: "Why does my invoice number matter?",
    a: "Under GST an invoice number must be unique and part of a consecutive series for the financial year. The tool suggests one in the form INV-YYYYMM-001 and bumps the last digits when you start the next invoice, but the series is yours to keep consistent.",
  },
  {
    q: "Can I edit the PDF after downloading it?",
    a: "Change the details here and download it again — that is faster than editing a PDF. If you need to work on the file itself, our PDF tools do merging, page ordering, compression and signing, also entirely in your browser.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph([
          pageSchema({
            path: "/",
            name: "Free Invoice Generator",
            description:
              "Create a GST-ready invoice and download it as a PDF, entirely in your browser.",
          }),
          appSchema(FEATURES),
          howToSchema({
            path: "/",
            name: "How to make an invoice",
            steps: STEPS.map((s) => `${s.title}. ${s.body}`),
          }),
          faqSchema("/", FAQS),
        ])}
      />

      {/*
       * A tool's job is to get you working, so this is a masthead rather than
       * a full-screen hero: the headline, the claim and the builder itself
       * are all within a scroll of each other.
       */}
      <section className="shell pt-32 pb-8 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <p className="mb-7 text-[11px] font-semibold tracking-[0.25em] text-accent uppercase">
              Free · no sign-up · nothing uploaded
            </p>
            <h1 className="display text-[12vw] leading-[0.95] md:text-[6.4vw]">
              {"Invoice in a minute, not an afternoon"
                .split(" ")
                .map((word, i) => (
                  <span key={`${word}-${i}`} className="inline-block pr-[0.22em]">
                    <Reveal immediate delay={0.05 + i * 0.05}>
                      {word}
                    </Reveal>
                  </span>
                ))}
            </h1>
          </div>

          <FadeUp delay={0.4}>
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              A proper invoice — GST split, amount in words, your logo, your
              signature — built as a real PDF right here in your browser. No
              account, no watermark, and none of what you type ever reaches us.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="shell pb-24">
        <Builder />
      </section>

      {/* --------------------------------------------------------- steps */}
      <section id="how" className="shell scroll-mt-24 py-20 md:py-28">
        <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <FadeUp key={step.n} delay={i * 0.1}>
              <span className="text-sm tabular-nums text-muted">{step.n}</span>
              <h2 className="display mt-4 text-2xl md:text-3xl">{step.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{step.body}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ features */}
      <section className="shell py-8">
        <FadeUp>
          <div className="rounded-[28px] border border-line p-8 md:p-14">
            <h2 className="display max-w-[16ch] text-[8vw] leading-[1] md:text-[3.2vw]">
              Everything an invoice needs
            </h2>
            <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-[9px] h-1 w-4 shrink-0 bg-accent" />
                  <span className="text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </section>

      {/* --------------------------------------------------------- links */}
      <section className="shell py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "GST invoice format",
              body: "What a compliant Indian tax invoice has to carry, field by field — and where each one goes on the page.",
              href: "/gst-invoice-format",
              external: false,
            },
            {
              title: "What to put on an invoice",
              body: "The practical version: what makes an invoice get paid quickly, and the four omissions that hold one up.",
              href: "/how-to-make-an-invoice",
              external: false,
            },
            {
              title: "Invoicing, in practice",
              body: "Getting paid faster, invoicing overseas clients, asking for advances — the part that is not the document.",
              href: "/blog",
              external: false,
            },
            {
              title: "PDF tools",
              body: "Merge, split, compress, sign and convert — the same browser-only approach, on our sister site.",
              href: PDF_URL,
              external: true,
            },
          ].map((card, i) => (
            <FadeUp key={card.href} delay={i * 0.08}>
              {card.external ? (
                <a
                  href={card.href}
                  data-cursor="hover"
                  className="block h-full rounded-3xl border border-line p-7 transition-colors hover:border-fg"
                >
                  <CardBody {...card} />
                </a>
              ) : (
                <TransitionLink
                  href={card.href}
                  data-cursor="hover"
                  className="block h-full rounded-3xl border border-line p-7 transition-colors hover:border-fg"
                >
                  <CardBody {...card} />
                </TransitionLink>
              )}
            </FadeUp>
          ))}
        </div>
      </section>

      <div id="faq" className="scroll-mt-24">
        <Faq items={FAQS} title="Questions people ask" />
      </div>

      {/* ----------------------------------------------------------- who */}
      <section className="shell pb-8">
        <FadeUp>
          <div className="rounded-[28px] border border-line p-8 md:p-16">
            <h2 className="display max-w-[18ch] text-[7vw] leading-[1] md:text-[3.4vw]">
              Built by Advorize
            </h2>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">
              We are a performance marketing and web development studio working
              out of India with clients across the US, Canada and the UAE. This
              is the same engineering we put into client work — fast, private,
              and built to be used rather than signed up for. If you want
              something like it for your own product, that is our day job.
            </p>
            <a
              href={`${PARENT_URL}/contact`}
              data-cursor="hover"
              className="mt-10 inline-flex h-12 items-center rounded-full bg-fg px-7 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              Talk to us
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}

function CardBody({ title, body }: { title: string; body: string }) {
  return (
    <>
      <h3 className="display text-xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{body}</p>
    </>
  );
}
