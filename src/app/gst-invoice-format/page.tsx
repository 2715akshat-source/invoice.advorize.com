import type { Metadata } from "next";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Prose from "@/components/Prose";
import Magnetic from "@/components/Magnetic";
import TransitionLink from "@/components/TransitionLink";
import { FadeUp, Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, pageSchema } from "@/lib/schema";

const PATH = "/gst-invoice-format";

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: "GST Invoice Format — What an Indian Tax Invoice Must Contain",
  description:
    "The fields a GST tax invoice has to carry under Rule 46, when to use CGST/SGST instead of IGST, and how long you have to issue one. With a free generator that lays them all out for you.",
  keywords: [
    "gst invoice format",
    "tax invoice format india",
    "cgst sgst igst invoice",
    "gst invoice rules",
    "gst bill format",
  ],
});

const FIELDS = [
  ["Supplier details", "Your name, address and GSTIN."],
  [
    "Invoice number",
    "Unique, and consecutive within the financial year. Up to 16 characters — letters, digits, / and - only.",
  ],
  ["Date of issue", "The date the invoice is raised."],
  [
    "Recipient details",
    "Name, address, and GSTIN if they are registered. For an unregistered recipient above ₹50,000 you also need their address and the state.",
  ],
  [
    "HSN or SAC code",
    "The classification code for each good or service. How many digits depends on your turnover.",
  ],
  [
    "Description, quantity and unit",
    "What was supplied, how much of it, and in what unit of measure.",
  ],
  [
    "Taxable value",
    "The value per line after any discount, before tax is added.",
  ],
  [
    "Rate and amount of tax",
    "Split into CGST and SGST, or shown as IGST — see below.",
  ],
  ["Place of supply", "The state, which is what decides the split."],
  [
    "Reverse charge",
    "Whether tax is payable on a reverse-charge basis. State it either way.",
  ],
  ["Signature", "Of the supplier or an authorised representative."],
];

const FAQS = [
  {
    q: "CGST and SGST, or IGST?",
    a: "It depends on the place of supply, not on where you are. If the place of supply is in your own state, the rate splits in half — 18% becomes 9% CGST and 9% SGST. If it is in another state or a union territory, the whole 18% is a single IGST line. The customer pays the same amount either way; what changes is which government receives it.",
  },
  {
    q: "How long do I have to issue a tax invoice?",
    a: "For goods, on or before the removal or delivery. For services, within 30 days of supply — 45 days for banks, insurers and other financial institutions. A continuous supply is invoiced on or before the due date each statement covers.",
  },
  {
    q: "Do I need HSN or SAC codes on every line?",
    a: "The number of digits required scales with your turnover, and small taxpayers supplying B2C are given relief on it. Because it depends on your registration and your turnover, this generator gives you a description field to include the code in rather than guessing a rule for you.",
  },
  {
    q: "Is a bill of supply the same thing?",
    a: "No. A bill of supply is what you issue when no tax is charged — a composition dealer, or an exempt supply. It carries no tax lines and must say it is a bill of supply. A tax invoice is what you issue when GST is charged.",
  },
  {
    q: "Does the amount have to be written in words?",
    a: "It is not a Rule 46 requirement, but it is near-universal on Indian invoices and it removes an argument about a misread figure. The generator prints it in lakh and crore, and you can switch it off.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          pageSchema({
            path: PATH,
            name: "GST invoice format",
            description:
              "The fields a GST tax invoice must contain, and when to split the rate into CGST and SGST.",
          }),
          faqSchema(PATH, FAQS),
          breadcrumbSchema([
            { name: "Invoice Generator", path: "/" },
            { name: "GST invoice format", path: PATH },
          ]),
        ])}
      />

      <section className="shell pt-36 pb-12 md:pt-44">
        <p className="mb-7 text-[11px] font-semibold tracking-[0.25em] text-accent uppercase">
          Guide
        </p>
        <h1 className="display max-w-[16ch] text-[12vw] leading-[0.95] md:text-[6vw]">
          <Reveal immediate>GST invoice format</Reveal>
        </h1>
        <FadeUp delay={0.3}>
          <p className="mt-10 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">
            What an Indian tax invoice has to carry, why the tax splits in two
            on some invoices and not others, and how long you have to issue
            one.
          </p>
        </FadeUp>
      </section>

      <section className="shell pb-16">
        <Prose>
          <p>
            A tax invoice under GST is not a free-form document. Rule 46 of the
            CGST Rules lists the particulars it has to carry, and an invoice
            missing one of them is a problem for your customer as much as for
            you — it is the document their input tax credit rests on.
          </p>
          <p>
            The list below is what that comes to in practice. Nothing here is
            tax advice, and it does not replace your accountant; it is the
            format, so you can lay an invoice out correctly and get on with the
            work.
          </p>

          <h2>What has to be on it</h2>
        </Prose>

        <div className="mt-8 max-w-[68ch] border-t border-line">
          {FIELDS.map(([field, note]) => (
            <div
              key={field}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:gap-8"
            >
              <div className="font-medium">{field}</div>
              <p className="leading-relaxed text-muted">{note}</p>
            </div>
          ))}
        </div>

        <Prose>
          <h2>The CGST/SGST split, plainly</h2>
          <p>
            One rate, two ways of printing it. A sale where the place of supply
            is inside your own state is an <strong>intra-state</strong> supply:
            18% GST is shown as 9% CGST plus 9% SGST. A sale where the place of
            supply is another state is <strong>inter-state</strong>: the same
            18% is shown as one IGST line.
          </p>
          <p>
            The customer pays the same total either way. Getting it wrong is
            the most common fault in a hand-made invoice, which is why the
            generator asks you one question — same state or another state — and
            prints the right lines from your answer.
          </p>

          <h2>Numbering</h2>
          <p>
            Invoice numbers must be unique and consecutive for the financial
            year, at most sixteen characters, using letters, digits, slashes
            and hyphens. A series like <strong>INV-202608-001</strong> satisfies
            all of that and sorts correctly, which is the format the generator
            suggests and increments for you.
          </p>
          <p>
            What it cannot do is know your other invoices. If you raise some
            through accounting software and some here, keep one series across
            both — a gap or a duplicate is the sort of thing that surfaces at
            exactly the wrong moment.
          </p>

          <h2>Copies</h2>
          <p>
            For goods, an invoice is issued in triplicate — original for the
            recipient, duplicate for the transporter, triplicate for you. For
            services it is in duplicate. A PDF you print twice satisfies this
            as well as pre-printed stationery does; the marking is what
            matters, and you can add it in the notes field.
          </p>
        </Prose>
      </section>

      <section className="shell pb-8">
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] border border-line p-8 md:flex-row md:items-center md:p-14">
            <div>
              <h2 className="display max-w-[18ch] text-[7vw] leading-[1] md:text-[2.8vw]">
                Lay one out now
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
                The generator puts every field above in its place, splits the
                tax the way you tell it to, and hands you the PDF. Free, no
                sign-up, and nothing you type leaves your browser.
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

      <Faq items={FAQS} title="Common questions" />
    </>
  );
}
