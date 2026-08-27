import type { Post } from "./post-types";

/* Freelancers and small businesses — registration, deductions, and status. */
export const postsF: Post[] = [
  {
    slug: "gst-registration-for-freelancers-india",
    title: "Do Freelancers Need GST Registration in India?",
    h1: "Do freelancers need GST registration?",
    description:
      "What triggers registration, what changes on your invoice once you are registered, and the mistake that is genuinely expensive to make.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 6,
    lead: "The threshold is the famous part. The situations that require registration regardless of turnover are the part that catches people.",
    answer:
      "Registration is triggered by aggregate annual turnover crossing a threshold, and separately by certain situations that require registration regardless of turnover — including some inter-state supplies and supply through specified platforms. Once registered you must issue tax invoices showing your GSTIN and charge GST correctly by place of supply; until you are registered you issue ordinary invoices with no tax line and no GSTIN. Showing tax or a GSTIN you do not hold is a serious offence and hands your client a credit they cannot claim, so if you are anywhere near a threshold, confirm your position with an accountant rather than a threshold table.",
    keywords: [
      "gst registration for freelancers",
      "do freelancers need gst",
      "gst threshold freelancer india",
      "freelancer gst india",
    ],
    sections: [
      {
        heading: "The two ways registration is triggered",
        blocks: [
          {
            kind: "p",
            text: "Most explanations mention only the first, which is why the second causes problems.",
          },
          {
            kind: "fields",
            rows: [
              [
                "Turnover",
                "Aggregate annual turnover crossing a specified threshold. The threshold differs for goods and services, and is lower for special category states.",
              ],
              [
                "Situation, regardless of turnover",
                "Certain circumstances require registration whatever your turnover — some inter-state supplies, supply through specified platforms, and others.",
              ],
            ],
          },
          {
            kind: "note",
            text: "No figures on this page, deliberately. Thresholds differ between goods and services and between states, they have been revised, and “aggregate turnover” is a defined term that includes more than you might assume. A stale number here would be worse than no number — ask an accountant what applies to you.",
          },
        ],
      },
      {
        heading: "What changes on the invoice",
        blocks: [
          {
            kind: "table",
            head: ["", "Not registered", "Registered"],
            rows: [
              ["Document", "Ordinary invoice", "Tax invoice"],
              ["GSTIN shown", "No — you have none", "Yes, yours and the client's"],
              ["Tax charged", "None", "CGST + SGST, or IGST"],
              ["Place of supply", "Not applicable", "Required"],
              ["HSN / SAC", "Not applicable", "Required, digits by turnover"],
              ["Client can claim credit", "No", "Yes"],
            ],
          },
        ],
      },
      {
        heading: "The expensive mistake",
        blocks: [
          {
            kind: "p",
            text: "Charging GST, or showing a GSTIN, before you are registered. It happens innocently — a client asks for a “GST invoice”, a template has a tax row in it, someone copies a format from a friend who is registered.",
          },
          {
            kind: "p",
            text: "It is a serious offence, and it also damages the client: they claim a credit against a registration that does not exist, and it is disallowed at their end, usually at an audit long after you have finished working with them.",
          },
          {
            kind: "p",
            text: "If you are not registered, issue an ordinary invoice with no tax line and no GSTIN, and say so plainly if asked. “I am not GST registered, so no GST is charged on this invoice” is a complete and unembarrassing answer.",
          },
        ],
      },
      {
        heading: "Registering before you have to",
        blocks: [
          {
            kind: "p",
            text: "Some freelancers register voluntarily below the threshold. The arguments each way are practical rather than technical:",
          },
          {
            kind: "list",
            items: [
              "**For:** larger clients are more comfortable with registered suppliers, you can claim input credit on your own purchases, and you avoid the disruption of crossing the threshold mid-year.",
              "**Against:** returns to file on a schedule, an accountant to pay, and your effective price rises for clients who cannot claim the credit — individuals and unregistered businesses.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need GST registration as a freelancer?",
        a: "It depends on your aggregate annual turnover against the applicable threshold, and separately on whether you fall into a situation that requires registration regardless of turnover — certain inter-state supplies and supply through specified platforms among them. Because both tests depend on specifics, confirm your position with an accountant.",
      },
      {
        q: "Can I invoice a client without a GST number?",
        a: "Yes. If you are not registered you issue an ordinary invoice with no tax line and no GSTIN. What you must never do is show GST or a GSTIN you do not hold — that is a serious offence and it hands your client a credit that will be disallowed at their end.",
      },
      {
        q: "A client is asking for a GST invoice but I am not registered. What do I say?",
        a: "Tell them plainly: you are not GST registered, so no GST is charged on the invoice. It is a complete answer and a common situation. What you must not do is add a tax line to satisfy the request — the client cannot claim it and the exposure is yours.",
      },
      {
        q: "Should I register for GST voluntarily?",
        a: "It is a practical trade rather than a technical one. Registering makes you easier for larger clients to work with and lets you claim input credit on your own purchases, but it brings returns to file, an accountant to pay, and a higher effective price for clients who cannot claim the credit. Discuss it with an accountant against your actual client mix.",
      },
    ],
    related: ["can-i-invoice-without-a-company", "tds-on-professional-fees", "reverse-charge-on-invoices"],
    guide: "freelance-invoice-format",
  },

  {
    slug: "tds-on-professional-fees",
    title: "TDS on Professional Fees — Why You Receive Less Than You Invoiced",
    h1: "TDS on professional fees",
    description:
      "Why a client pays less than the invoice says, what to do about it on the document, and how to reconcile the difference rather than chase it.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "The money is not missing. It has been paid to the government on your behalf, and it is credited to you — but only if your PAN was on the invoice.",
    answer:
      "An Indian business paying professional or technical fees generally deducts tax at source and remits it against your PAN, so the amount that lands is less than the invoice. You should still invoice the gross amount and never deduct it yourself — the deduction is the payer's obligation and doing it for them makes the two sides' records irreconcilable. Put your PAN on the invoice, because a deduction made without one is made at a higher rate, and reconcile against Form 26AS and your annual information statement rather than your bank statement.",
    keywords: [
      "tds on professional fees",
      "tds on invoice india",
      "why client deducted tds",
      "194j tds freelancer",
      "form 26as freelancer",
    ],
    sections: [
      {
        heading: "What is happening",
        blocks: [
          {
            kind: "steps",
            items: [
              "You invoice the gross amount — say ₹1,00,000.",
              "The client deducts tax at source at the applicable rate for professional or technical services.",
              "They pay you the net amount.",
              "They remit the deducted amount to the government against your PAN.",
              "It appears in your Form 26AS and annual information statement.",
              "You offset it against your own tax liability when you file.",
            ],
          },
          {
            kind: "p",
            text: "So it is not a cost. It is your own tax, paid early and by somebody else. The only way it becomes a loss is if you never claim it, which is what happens when nobody reconciles.",
          },
          {
            kind: "note",
            text: "Rates and thresholds for deduction differ by the nature of the payment and have been revised in recent Finance Acts. Rather than quote a figure that could be stale, ask your accountant which section and rate applies to what you supply.",
          },
        ],
      },
      {
        heading: "What to do on the invoice",
        blocks: [
          {
            kind: "list",
            items: [
              "**Show your PAN.** A deduction made without a valid PAN is made at a substantially higher rate, and recovering the difference is your problem, not theirs.",
              "**Invoice the gross amount.** Always. Never pre-deduct.",
              "**Do not add a “less TDS” line.** The deduction is theirs to compute and theirs to report; a figure of yours that differs from theirs by a rupee creates a reconciliation item that outlives the project.",
              "**Expect the short payment.** Do not chase it as an underpayment before checking whether it matches an expected deduction.",
            ],
          },
        ],
      },
      {
        heading: "Reconciling",
        blocks: [
          {
            kind: "p",
            text: "The habit worth forming is reconciling against the tax records rather than the bank. Your bank statement shows the net; your 26AS shows what was deducted and by whom, which is what you can actually claim.",
          },
          {
            kind: "p",
            text: "Check it periodically rather than at filing time. Deductions appear after a lag, and a client who deducted but never deposited is a problem you want to discover while you are still in contact with them — not in March, when the credit is missing and nobody remembers the engagement.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why did my client pay less than the invoice amount?",
        a: "Almost certainly tax deducted at source. Businesses paying professional or technical fees generally deduct tax and remit it against your PAN, so the amount that lands is the net. It is your own tax paid early, not a discount — check your Form 26AS before treating it as an underpayment.",
      },
      {
        q: "Should I show TDS on my invoice?",
        a: "No. Invoice the gross amount and let the payer compute and report the deduction. Adding your own “less TDS” line creates two figures that can differ by a rupee, and that difference becomes a reconciliation item that outlasts the project. Do put your PAN on the invoice.",
      },
      {
        q: "What happens if my PAN is not on the invoice?",
        a: "The deduction is generally made at a substantially higher rate where a valid PAN has not been furnished, and recovering the excess becomes your problem rather than the payer's. It is one field, and leaving it off is expensive.",
      },
      {
        q: "How do I claim TDS that has been deducted?",
        a: "It is credited against your PAN and appears in Form 26AS and your annual information statement, where it offsets your own tax liability when you file. Check it periodically rather than at filing time — deductions appear after a lag, and a client who deducted but never deposited is better discovered early.",
      },
    ],
    related: ["gst-registration-for-freelancers-india", "how-to-invoice-a-government-department-india", "can-i-invoice-without-a-company"],
    guide: "freelance-invoice-format",
  },

  {
    slug: "can-i-invoice-without-a-company",
    title: "Can I Invoice Without a Registered Company?",
    h1: "Can I invoice without a company?",
    description:
      "Invoicing as an individual or sole proprietor in India — what you can legally issue, what to put where a company name would go, and when a structure starts to matter.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "You do not need a company to send an invoice. You need a name, a PAN and a bank account — the rest is preference until it is not.",
    answer:
      "Yes. An individual or sole proprietor can issue a valid invoice in India without registering a company. Use your own legal name, or a trade name you operate under, along with your address, PAN and bank details. A sole proprietorship is not a separate legal entity and requires no incorporation. A company or LLP becomes worth forming when you need limited liability, when clients require it for onboarding, or when you are taking on partners — not merely to look established.",
    keywords: [
      "can i invoice without a company",
      "sole proprietor invoice india",
      "invoice as individual india",
      "freelancer invoice without gst",
      "proprietorship invoice format",
    ],
    sections: [
      {
        heading: "What goes where the company name would",
        blocks: [
          {
            kind: "fields",
            rows: [
              ["Name", "Your legal name, or your trade name — “Ananya Sharma” or “Studio Nine”."],
              ["Address", "Your business address. A residential address is fine and extremely common."],
              ["PAN", "Yours. This matters for TDS, so do not leave it off."],
              ["GSTIN", "Only if you are registered. Omit the field entirely if not."],
              ["Bank details", "An account in the name the invoice is issued in, or transfers get held."],
            ],
          },
          {
            kind: "p",
            text: "If you trade under a name that is not your own, the safest presentation is the trade name prominently with your legal name beneath it — “Studio Nine · Proprietor: Ananya Sharma”. It reads professionally and it matches what the bank and the PAN say, which is what matters when payment is being processed.",
          },
        ],
      },
      {
        heading: "Sole proprietorship is not a registration",
        blocks: [
          {
            kind: "p",
            text: "This is the point that causes most of the confusion. A sole proprietorship is not a separate legal entity and there is no central register of them — you and the business are the same person for legal and tax purposes. You do not incorporate one; you simply operate.",
          },
          {
            kind: "p",
            text: "What you may end up holding are ancillary registrations, depending on what you do and where — GST if you cross a threshold or fall into a situation requiring it, a trade licence in some municipalities, Udyam registration if you want MSME recognition, a shop and establishment registration in some states. None of those creates a company; they register an activity.",
          },
        ],
      },
      {
        heading: "When a structure starts to matter",
        blocks: [
          {
            kind: "list",
            items: [
              "**Liability.** As a proprietor there is no separation between business and personal assets. Where the work carries real risk, that is the argument for a company or LLP.",
              "**Client onboarding.** Some larger organisations and most public-sector bodies have vendor requirements that a proprietorship cannot satisfy.",
              "**Partners.** The moment income is shared with someone else, an informal arrangement is the thing you will regret.",
              "**Scale.** Beyond a certain size the tax treatment of a company can be favourable — which is an accountant's calculation, not a rule of thumb.",
            ],
          },
          {
            kind: "note",
            text: "None of that is a reason to incorporate before you need to. A company brings annual filings, compliance costs and an accountant on retainer. Plenty of profitable one-person businesses never form one, and their invoices are no less valid.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I send an invoice as an individual in India?",
        a: "Yes. An individual or sole proprietor can issue a fully valid invoice using their own legal name or a trade name, with their address, PAN and bank details. No incorporation is required, and the invoice is no less valid than a company's.",
      },
      {
        q: "Do I need to register a sole proprietorship?",
        a: "There is no central register of sole proprietorships and no incorporation step — you and the business are the same person legally. You may need ancillary registrations depending on what you do and where, such as GST above a threshold or a local trade licence, but those register an activity rather than create an entity.",
      },
      {
        q: "What name should I put on the invoice if I trade under a brand?",
        a: "The trade name prominently, with your legal name beneath it — “Studio Nine · Proprietor: Ananya Sharma”. That reads professionally while matching what your PAN and bank account say, which is what matters when the payment is being processed at the other end.",
      },
      {
        q: "When should I form a company instead?",
        a: "When you need limited liability because the work carries real risk, when clients you want cannot onboard a proprietorship, when you are sharing income with a partner, or when the tax arithmetic favours it at your scale. Not merely to look established — a company brings annual filings and compliance costs with it.",
      },
    ],
    related: ["gst-registration-for-freelancers-india", "tds-on-professional-fees", "invoice-terms-and-conditions"],
    guide: "freelance-invoice-format",
  },

  {
    slug: "invoice-terms-and-conditions",
    title: "Invoice Terms and Conditions — What to Actually Write",
    h1: "Invoice terms and conditions",
    description:
      "The four clauses worth having, wording you can use directly, and why an invoice cannot introduce a term your agreement does not contain.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "Most invoice terms are copied from another invoice, which was copied from another. Here are four that do something.",
    answer:
      "Four clauses earn their place on an invoice: when payment is due, what happens if it is late, who owns the work until it is paid, and how long the stated prices hold. Keep each to one sentence, and keep them identical to what your underlying agreement says — an invoice cannot introduce a term the contract does not contain, so a late-payment charge appearing for the first time on the invoice is generally unenforceable. Terms you will not act on are worse than none, because they teach the client which of your deadlines are decorative.",
    keywords: [
      "invoice terms and conditions",
      "invoice terms examples",
      "payment terms wording",
      "invoice t&c sample",
    ],
    sections: [
      {
        heading: "The four that do something",
        blocks: [
          {
            kind: "p",
            text: "**Payment due.** State a date, not a period.",
          },
          {
            kind: "note",
            text: "Payment is due by 23 September 2026. Please quote the invoice number with your transfer.",
          },
          {
            kind: "p",
            text: "**Late payment.** Only if it matches your agreement and you will act on it.",
          },
          {
            kind: "note",
            text: "Interest at [x]% per month may be charged on amounts outstanding beyond the due date, as set out in our agreement dated [date].",
          },
          {
            kind: "p",
            text: "**Ownership until paid.** Genuinely useful for creative and development work, and rarely included.",
          },
          {
            kind: "note",
            text: "All rights in the delivered work remain with [you] until this invoice is paid in full, at which point they transfer to the client.",
          },
          {
            kind: "p",
            text: "**Validity of quoted prices**, where the invoice follows a quotation.",
          },
          {
            kind: "note",
            text: "Prices reflect the scope agreed in quotation QUO-202608-004. Work beyond that scope will be quoted separately before it is undertaken.",
          },
        ],
      },
      {
        heading: "An invoice cannot create a term",
        blocks: [
          {
            kind: "p",
            text: "This is the part most people get wrong. Terms on an invoice restate an agreement that already exists; they do not form one. A late-payment charge that appears for the first time on the invoice — after the work was agreed and delivered — is generally unenforceable, because the client never agreed to it.",
          },
          {
            kind: "p",
            text: "So the sequence matters: get the terms into the quotation or the engagement email, then restate them on the invoice. The invoice is a reminder of what was agreed, and that is exactly the weight it can carry.",
          },
        ],
      },
      {
        heading: "What to leave off",
        blocks: [
          {
            kind: "list",
            items: [
              "**Half a page of boilerplate.** Nobody reads it, and it makes the four clauses that matter invisible.",
              "**A jurisdiction clause you copied.** If it contradicts your actual contract, you have created a conflict rather than protection.",
              "**Penalties you will not enforce.** An unenforced threat teaches the client that your deadlines are optional, and it weakens every subsequent reminder.",
              "**Terms in six-point type.** A term nobody could reasonably read is a term you may struggle to rely on.",
            ],
          },
          {
            kind: "note",
            text: "Anything with real legal weight — liability caps, indemnities, governing law — belongs in a contract drafted for your situation, not in an invoice footer. This page is about wording that reinforces what you have already agreed.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What terms and conditions should be on an invoice?",
        a: "Four are enough: when payment is due as a specific date, what happens if it is late, who owns the work until it is paid, and what scope the prices cover. One sentence each. Anything longer stops being read, which makes the clauses that matter invisible.",
      },
      {
        q: "Can I add a late payment fee on the invoice?",
        a: "Only if your underlying agreement already provides for it. An invoice restates terms rather than creating them, so a charge appearing for the first time on the invoice — after the work was agreed and delivered — is generally unenforceable. Get it into the quotation first.",
      },
      {
        q: "Should I say I retain ownership until payment?",
        a: "For creative, design and development work it is one of the more useful clauses available and it is routinely omitted. It gives you a clear position if a client uses delivered work without paying. As with any term, it needs to be in the agreement as well as on the invoice.",
      },
      {
        q: "Are invoice terms legally binding?",
        a: "They are binding to the extent they restate what was already agreed. They cannot unilaterally impose new obligations on a client who has already accepted a scope and price on different terms. For anything carrying real legal weight, use a contract rather than an invoice footer.",
      },
    ],
    related: ["can-i-invoice-without-a-company", "what-to-do-when-a-client-refuses-to-pay", "how-to-get-invoices-paid-faster"],
    guide: "quotation-format",
  },

  {
    slug: "how-to-number-invoices-across-clients",
    title: "Numbering Invoices Across Clients, Branches and Tools",
    h1: "Numbering invoices across clients and branches",
    description:
      "When to run one series and when several are allowed, how to keep them consecutive, and what to do when invoices come from two systems.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "One series is simplest. Several are permitted. What is not permitted is a series that is not consecutive, which is what happens by accident.",
    answer:
      "GST permits one series or several, provided each is consecutive and unique for the financial year. A single series across all clients is simplest and is right for most small businesses — never number per client, which produces duplicates. Separate series are worth running per state registration, per branch, or per document type, and each then needs its own prefix. Where invoices are raised in two different tools, decide which owns the numbering and let the other follow it, because two systems each incrementing independently will collide.",
    keywords: [
      "invoice numbering multiple clients",
      "invoice series gst",
      "multiple invoice series",
      "invoice numbering system",
    ],
    sections: [
      {
        heading: "One series, or several",
        blocks: [
          {
            kind: "table",
            head: ["Situation", "Series"],
            rows: [
              ["One person, many clients", "One series across everything"],
              ["Several document types", "One per type — INV, QUO, PI, CN"],
              ["Multiple state registrations", "One per registration"],
              ["Branches invoicing separately", "One per branch, with a branch prefix"],
              ["Per client", "Never — it produces duplicates"],
            ],
          },
          {
            kind: "p",
            text: "The per-client row is the one worth stating explicitly, because it is an intuitive idea and a bad one. Numbering restarted for each client means several invoices numbered 001 in the same financial year, and uniqueness is the requirement.",
          },
        ],
      },
      {
        heading: "Keeping several series straight",
        blocks: [
          {
            kind: "p",
            text: "Where you do run several, the prefix carries the distinction and everything after it stays identical in shape:",
          },
          {
            kind: "list",
            items: [
              "`INV-202608-001` — invoices",
              "`QUO-202608-001` — quotations",
              "`PI-202608-001` — proforma",
              "`CN-202608-001` — credit notes",
              "`KOL-INV-202608-001` — where a branch needs its own",
            ],
          },
          {
            kind: "p",
            text: "Each is independently consecutive. They do not interleave and they do not need to. The generator switches the prefix automatically when you change document type, which is what keeps quotations out of your invoice sequence.",
          },
        ],
      },
      {
        heading: "Two tools, one series",
        blocks: [
          {
            kind: "p",
            text: "The common failure: accounting software raises the recurring invoices, a generator raises the one-off quotations and credit notes, and both are incrementing from their own idea of the last number.",
          },
          {
            kind: "steps",
            items: [
              "Decide which system owns the invoice series. Usually the accounting software, since it raises the most.",
              "Give the other system a different document type or prefix so the two never collide.",
              "Before raising anything manually, check the last number the owning system issued.",
              "Record manual invoices back into the owning system the same week, not at year end.",
              "Reconcile the series once a month — read it top to bottom and look for a gap.",
            ],
          },
          {
            kind: "note",
            text: "That monthly read is thirty seconds and it is the only reliable way to catch a duplicate while you can still remember the circumstances. A collision discovered at year end is a much longer conversation.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I have a separate invoice series for each client?",
        a: "No — that produces several invoices numbered 001 in the same financial year, and the requirement is that the number is unique for the year. Use one series across all clients and put the client in the name and body of the invoice, not in the number.",
      },
      {
        q: "Can I run more than one invoice series?",
        a: "Yes. Rule 46(b) explicitly permits one or multiple series, provided each is consecutive in itself. Businesses commonly run one per document type, per state registration, or per branch. Distinguish them with a prefix and keep the rest of the format identical.",
      },
      {
        q: "What if I raise invoices in two different systems?",
        a: "Decide which system owns the invoice series and give the other a different prefix or document type so they cannot collide. Check the last issued number before raising anything manually, and read the series top to bottom once a month — a duplicate found early is fixable, one found at year end is not.",
      },
      {
        q: "Do quotations and credit notes need to be in the invoice series?",
        a: "No, and they should not be. Give each document type its own prefixed series. Interleaving quotations into your invoice numbers creates gaps in a sequence that is required to be consecutive, and quotations far outnumber invoices for most businesses.",
      },
    ],
    related: ["how-to-cancel-an-invoice", "invoicing-software-vs-free-invoice-generator", "how-long-to-keep-invoices-india"],
    guide: "invoice-number-format",
  },
];
