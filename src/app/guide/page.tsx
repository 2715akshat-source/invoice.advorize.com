import type { Metadata } from "next";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Prose from "@/components/Prose";
import Magnetic from "@/components/Magnetic";
import TransitionLink from "@/components/TransitionLink";
import { FadeUp, Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  howToSchema,
  pageSchema,
} from "@/lib/schema";

const PATH = "/guide";

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: "What to Put on an Invoice — And What Gets It Paid Faster",
  description:
    "The fields every invoice needs, the four omissions that hold payment up, and how to word payment terms so an invoice does not sit in someone's inbox for a month.",
  keywords: [
    "what to put on an invoice",
    "how to make an invoice",
    "invoice payment terms",
    "invoice checklist",
  ],
});

const STEPS = [
  "Name both parties in full, with the address and tax number each of them files under.",
  "Give the invoice a unique number from a series you keep consecutive.",
  "Date it, and state the due date as a date rather than a number of days.",
  "Itemise the work so each line can be checked against something the client agreed to.",
  "Show the tax separately from the amount it is charged on.",
  "State exactly how to pay, in the same document.",
  "Send it as a PDF to the person who actually processes it.",
];

const FAQS = [
  {
    q: "Net 30, or a date?",
    a: "A date. \"Net 30\" requires the reader to find your invoice date, add thirty days, and agree with your arithmetic — three chances to defer the decision. \"Due 23 September 2026\" is a deadline someone can put in a calendar, and it is what accounts payable systems key on.",
  },
  {
    q: "Should I add a late payment fee?",
    a: "State a policy if you intend to enforce one, and keep it identical to what your contract says — an invoice cannot introduce a term the agreement does not contain. A line in the terms field is enough. The real lever on payment speed is usually not the penalty; it is whether the invoice reached the right person with everything they needed to approve it.",
  },
  {
    q: "What if the client wants a purchase order number on it?",
    a: "Put it in the reference field, and treat it as required rather than optional. In any company large enough to have a PO process, an invoice without the PO number does not get matched, does not get approved, and comes back to you a fortnight later.",
  },
  {
    q: "Do I need to send a quotation first?",
    a: "For anything above a trivial amount, yes — and it saves the argument later. Switch the document type to Quotation, send it, and once it is accepted switch back to Invoice and keep the same line items. A proforma sits between the two: it looks like an invoice and states what will be charged, but it is not a demand for payment and carries no tax credit.",
  },
  {
    q: "How should I name the file?",
    a: "So that it can be found in a folder of four hundred others. The generator names it by document type, number and client — \"Invoice - INV-202608-001 - Northline Retail.pdf\" — which sorts sensibly and tells the recipient what it is before they open it.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={graph([
          pageSchema({
            path: PATH,
            name: "What to put on an invoice",
            description:
              "The fields every invoice needs, and the omissions that delay payment.",
          }),
          howToSchema({ path: PATH, name: "How to write an invoice", steps: STEPS }),
          faqSchema(PATH, FAQS),
          breadcrumbSchema([
            { name: "Invoice Generator", path: "/" },
            { name: "What to put on an invoice", path: PATH },
          ]),
        ])}
      />

      <section className="shell pt-36 pb-12 md:pt-44">
        <p className="mb-7 text-[11px] font-semibold tracking-[0.25em] text-accent uppercase">
          Guide
        </p>
        <h1 className="display max-w-[18ch] text-[12vw] leading-[0.95] md:text-[6vw]">
          <Reveal immediate>What to put on an invoice</Reveal>
        </h1>
        <FadeUp delay={0.3}>
          <p className="mt-10 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">
            Most late payments are not a cash-flow problem at the other end.
            They are an invoice that could not be approved without asking you a
            question first.
          </p>
        </FadeUp>
      </section>

      <section className="shell pb-16">
        <Prose>
          <h2>The seven lines that matter</h2>
          <ol>
            {STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h2>The four omissions that hold an invoice up</h2>

          <h3>No purchase order or reference</h3>
          <p>
            In any organisation with a procurement process, an invoice that
            cannot be matched to an approved order does not enter the payment
            run. It sits with someone who does not have the authority to
            approve it and does not know who does. Ask for the PO number before
            you start the work, not after you have invoiced for it.
          </p>

          <h3>A due date the reader has to calculate</h3>
          <p>
            <strong>Net 30</strong> is an instruction to do arithmetic.{" "}
            <strong>Due 23 September 2026</strong> is a deadline. One of those
            gets entered into a system; the other gets deferred to whenever
            somebody gets round to working it out.
          </p>

          <h3>A single line that says &ldquo;services rendered&rdquo;</h3>
          <p>
            An invoice has to be checkable by someone who was not in the room.
            One line for ₹2,50,000 gives them nothing to verify and every
            reason to forward it to somebody more senior. Three lines that each
            correspond to something the client agreed to can be approved by the
            person who agreed to it.
          </p>

          <h3>No payment instructions</h3>
          <p>
            The account name, the account number, the IFSC or SWIFT, the UPI ID
            — on the invoice itself, not in the covering email that gets
            detached the moment the PDF is filed. Any question here costs you a
            round trip and a week.
          </p>

          <h2>Send it to a person, and to the process</h2>
          <p>
            The person who commissioned the work rarely pays for it. Send the
            invoice to them <em>and</em> to accounts payable, so the person who
            can approve it and the system that will pay it both have it on day
            one. If there is an invoicing portal, the portal is the only route
            that counts — everything else is a copy.
          </p>

          <h2>Keep a series, and keep the file</h2>
          <p>
            One consecutive number series across every invoice you raise,
            regardless of which tool raised it. Keep the PDF: it is the record,
            and unlike a draft in a browser it does not disappear when a
            machine is replaced.
          </p>
          <p>
            If you are invoicing in India, the{" "}
            <TransitionLink href="/gst-invoice-format">
              GST invoice format
            </TransitionLink>{" "}
            page covers the fields that are legally required and when the tax
            splits into CGST and SGST.
          </p>
        </Prose>
      </section>

      <section className="shell pb-8">
        <FadeUp>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] border border-line p-8 md:flex-row md:items-center md:p-14">
            <div>
              <h2 className="display max-w-[18ch] text-[7vw] leading-[1] md:text-[2.8vw]">
                Write one properly
              </h2>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
                Every field above has a place in the generator, and the due
                date prints as a date. Free, no sign-up, and nothing you type
                leaves your browser.
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
