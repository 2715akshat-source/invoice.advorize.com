import type { Post } from "./post-types";

/* Situations — the invoices that are not a simple one-off sale. */
export const postsE: Post[] = [
  {
    slug: "how-to-cancel-an-invoice",
    title: "How to Cancel an Invoice (and When You Cannot)",
    h1: "How to cancel an invoice",
    description:
      "When an invoice can simply be cancelled, when it needs a credit note instead, and why deleting the number is the one thing never to do.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "The instinct is to delete it and pretend it never happened. That is the option that causes the problem you will be asked about later.",
    answer:
      "An invoice can be cancelled outright only before it has been acted on — before it is reported in a return and before the recipient has claimed credit against it. After that, the correct instrument is a credit note referencing the original invoice number, not a cancellation. In either case, never delete or reuse the number: retain it and mark it cancelled, because a GST invoice series must be consecutive and a missing number reads as a suppressed invoice.",
    keywords: [
      "how to cancel an invoice",
      "cancel invoice gst",
      "invoice cancellation rules",
      "delete invoice number",
    ],
    sections: [
      {
        heading: "Which route applies",
        blocks: [
          {
            kind: "table",
            head: ["Situation", "Do this"],
            rows: [
              ["Raised minutes ago, not sent", "Cancel it. Keep the number, mark it cancelled."],
              ["Sent, but not reported or claimed", "Cancel and reissue, keeping the cancelled number in the series."],
              ["Reported in a return", "Credit note against the original."],
              ["Recipient has claimed credit", "Credit note. The cancellation option has gone."],
              ["Wrong amount, everything else right", "Credit note for the difference, or a debit note if you undercharged."],
            ],
          },
        ],
      },
      {
        heading: "Never delete the number",
        blocks: [
          {
            kind: "p",
            text: "A GST invoice series must be consecutive and unique for the financial year. A gap is visible to anyone who looks, and from the outside a missing number looks like an invoice somebody would rather not discuss.",
          },
          {
            kind: "p",
            text: "So retain it. Keep a cancelled invoice on file, marked cancelled, with a one-line note of why. It costs nothing now and it answers a question later without you having to remember anything.",
          },
          {
            kind: "note",
            text: "Reusing a cancelled number for different work is worse than a gap. You then have two documents that have carried the same number, which is precisely what the uniqueness requirement exists to prevent.",
          },
        ],
      },
      {
        heading: "If e-invoicing applies to you",
        blocks: [
          {
            kind: "p",
            text: "Where the invoice has been registered with the Invoice Registration Portal and carries an IRN, cancellation is a portal action with its own short time window, and after that window the only route is a credit note.",
          },
          {
            kind: "p",
            text: "That window is significantly shorter than most people expect, so an e-invoice raised in error is a same-day problem rather than an end-of-month one. Check the current window before you rely on it.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I delete an invoice I raised by mistake?",
        a: "You can cancel it, but never delete the number. A GST invoice series must be consecutive and unique for the financial year, so a missing number is visible and reads as a suppressed invoice. Retain the cancelled document, mark it cancelled, and note why.",
      },
      {
        q: "When do I need a credit note instead of cancelling?",
        a: "Once the invoice has been reported in a return or the recipient has claimed credit against it. At that point the document has had an effect that cancellation cannot undo, and a credit note referencing the original invoice number is the instrument that reverses it.",
      },
      {
        q: "Can I reuse a cancelled invoice number?",
        a: "No. That leaves two documents that have carried the same number, which is exactly what the uniqueness requirement prevents. Retain the cancelled number as a cancelled number and carry on with the next one in the series.",
      },
      {
        q: "How do I cancel an e-invoice with an IRN?",
        a: "Through the Invoice Registration Portal, within the cancellation window that applies — which is short, and shorter than most people assume. Once it has passed, a credit note is the only route. Treat an e-invoice raised in error as a same-day problem.",
      },
    ],
    related: ["how-to-show-discounts-on-an-invoice", "how-to-number-invoices-across-clients", "invoice-mistakes-that-delay-payment"],
    guide: "credit-note-and-debit-note-format",
  },

  {
    slug: "how-to-invoice-for-recurring-work",
    title: "How to Invoice for Retainers and Recurring Work",
    h1: "Invoicing for retainers and recurring work",
    description:
      "How to describe a retainer so it does not get queried every month, when to invoice, and what to do about the work that exceeds the retainer.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 6,
    lead: "A retainer invoice is the same document twelve times. The failure mode is that month seven gets questioned by someone who was not there in month one.",
    answer:
      "Invoice a retainer on a fixed date each month, name the period explicitly in the line item — “Performance marketing retainer, August 2026” — and keep the wording identical every month so it reconciles without thought. Invoice in advance for a retainer that reserves your availability and in arrears for one that bills delivered work, and agree which in writing at the start. Bill anything beyond the retainer as a separate line with its own description, never by quietly increasing the retainer amount.",
    keywords: [
      "retainer invoice format",
      "how to invoice monthly retainer",
      "recurring invoice",
      "subscription invoice format",
    ],
    sections: [
      {
        heading: "Name the period, every time",
        blocks: [
          {
            kind: "p",
            text: "The single most useful field on a recurring invoice is the one that says which month it is for. “Monthly retainer” on its own is unverifiable — the person approving it in November cannot tell whether they already approved this one.",
          },
          {
            kind: "list",
            items: [
              "**Description:** Performance marketing retainer",
              "**Detail:** August 2026 · Google and Meta · 1–31 August",
            ],
          },
          {
            kind: "p",
            text: "Keep that wording byte-for-byte identical each month apart from the period. Consistency is what lets a finance team match twelve invoices against one purchase order without reading any of them closely.",
          },
        ],
      },
      {
        heading: "In advance or in arrears",
        blocks: [
          {
            kind: "table",
            head: ["", "In advance", "In arrears"],
            rows: [
              ["Bills", "Reserved availability", "Work delivered"],
              ["Invoice date", "Start of the period", "End of the period"],
              ["Your cash flow", "Better", "Worse"],
              ["Client resistance", "Higher", "Lower"],
              ["Suits", "Capacity retainers", "Deliverable-based work"],
            ],
          },
          {
            kind: "p",
            text: "Neither is more correct; what matters is that it is agreed in writing before the first invoice. The argument you want to avoid is the one in month one about whether the invoice that just arrived covers the month that just started or the month that just ended.",
          },
        ],
      },
      {
        heading: "Work beyond the retainer",
        blocks: [
          {
            kind: "p",
            text: "Never absorb overage silently, and never fold it into the retainer figure. A retainer that is ₹65,000 for six months and ₹81,000 in month seven gets stopped, and the person stopping it is right to.",
          },
          {
            kind: "steps",
            items: [
              "Flag the overage before doing the work, not on the invoice.",
              "Get it approved in writing, however briefly.",
              "Invoice it as a separate line with its own description and its own quantity and rate.",
              "Keep the retainer line unchanged at its usual figure.",
              "Reference the approval in the detail line if there is a thread to point at.",
            ],
          },
        ],
      },
      {
        heading: "Practicalities",
        blocks: [
          {
            kind: "list",
            items: [
              "**Invoice on a fixed date.** The 1st, or the last working day. Predictability is worth more than optimising a few days of cash flow.",
              "**Use one number series** and let it run consecutively across clients.",
              "**Ask whether the PO covers the full term.** An annual PO invoiced monthly is normal; discovering in month four that the PO was for one month is not.",
              "**Re-send the same PDF each period, regenerated** — not a forwarded copy of last month's with the date edited in a PDF reader.",
            ],
          },
          {
            kind: "note",
            text: "A browser-based generator does not raise recurring invoices for you — there is no server to run a schedule. If you bill several retainers monthly, that is the clearest single reason to move to accounting software, and it is not a small convenience.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Should a retainer be invoiced in advance or in arrears?",
        a: "In advance if the retainer reserves your availability, in arrears if it bills work delivered. Neither is more correct, but it must be agreed in writing before the first invoice — otherwise month one produces an argument about whether the invoice covers the month starting or the month ending.",
      },
      {
        q: "How do I describe a retainer on an invoice?",
        a: "Name the service and then the period explicitly — “Performance marketing retainer”, detail line “August 2026 · 1–31 August”. Keep the wording identical every month apart from the period, so twelve invoices reconcile against one purchase order without anyone having to read them closely.",
      },
      {
        q: "How do I bill work that goes beyond the retainer?",
        a: "As a separate line with its own description, quantity and rate, with the retainer line left unchanged. Flag and get approval for the overage before doing the work. Quietly raising the retainer figure for one month is how an invoice that would have been approved gets stopped.",
      },
      {
        q: "Can a free invoice generator handle recurring invoices?",
        a: "Not automatically — a tool that runs entirely in your browser has no server to run a schedule on. You can regenerate the same invoice each month in seconds, but if you are billing several retainers monthly, automated recurring billing is the clearest reason to move to accounting software.",
      },
    ],
    related: ["partial-payments-and-progress-billing", "invoicing-software-vs-free-invoice-generator", "how-to-get-invoices-paid-faster"],
    guide: "how-to-make-an-invoice",
  },

  {
    slug: "partial-payments-and-progress-billing",
    title: "Part Payments and Progress Billing on Invoices",
    h1: "Part payments and progress billing",
    description:
      "How to invoice a project in stages, show a part payment without ambiguity, and keep the running balance clear across several documents.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "The end-of-project dispute is almost never about the work. It is about what the last payment was for.",
    answer:
      "There are two ways to bill in stages, and mixing them causes the confusion. Either invoice each milestone separately for its own amount, so each invoice stands alone, or invoice the full engagement once and record payments against it, showing total, amount paid and balance due. Pick one per project and say which in the payment terms. Whichever you use, every document should show the running balance rather than leaving the reader to work it out across several PDFs.",
    keywords: [
      "part payment invoice",
      "progress billing",
      "milestone invoice format",
      "partial payment invoice format",
      "balance due invoice",
    ],
    sections: [
      {
        heading: "The two approaches",
        blocks: [
          {
            kind: "table",
            head: ["", "Milestone invoices", "One invoice, payments recorded"],
            rows: [
              ["You raise", "One invoice per stage", "One invoice for the engagement"],
              ["Each document is", "Complete in itself", "Updated as payments arrive"],
              ["Suits", "Long projects, separate deliverables", "Advance plus balance"],
              ["Client sees", "Several smaller demands", "One total with a shrinking balance"],
              ["Risk", "Stages drift out of sync with work", "Ambiguity about what a payment covered"],
            ],
          },
          {
            kind: "p",
            text: "Milestone invoicing is the cleaner option for anything long, because each document is self-contained and can be approved on its own merits. The single-invoice approach suits the common freelance shape of an advance followed by a balance.",
          },
        ],
      },
      {
        heading: "Showing a part payment",
        blocks: [
          {
            kind: "p",
            text: "A part payment recorded without a balance line is remembered, months later, as settlement in full. The fix is one field.",
          },
          {
            kind: "list",
            items: [
              "**Total** — the full amount of the engagement or stage.",
              "**Amount paid** — what has been received against it, with the date and reference.",
              "**Balance due** — printed separately, in the same weight as the total.",
            ],
          },
          {
            kind: "p",
            text: "In the generator this is the amount-paid field: enter what has been received and the document prints all three, so there is nothing left to interpret.",
          },
        ],
      },
      {
        heading: "Keeping the thread across documents",
        blocks: [
          {
            kind: "steps",
            items: [
              "Give the project a reference and put it in the reference field on every related document.",
              "Number milestone invoices consecutively in your normal series — do not start a sub-series per project.",
              "State in the detail line which stage this is: “Stage 2 of 4 — design sign-off”.",
              "Show the running balance on each one, so nobody has to open the previous three.",
              "Reference the proforma or advance receipt where one exists.",
            ],
          },
          {
            kind: "note",
            text: "Tax on staged payments depends on when the supply is treated as taking place, which is not necessarily when you invoiced. On a long project spanning a rate change or a financial year, that is a question worth putting to your accountant at the start rather than at the end.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How do I show a part payment on an invoice?",
        a: "Print three figures: the total, the amount already paid with its date and reference, and the balance due shown separately in the same weight as the total. A part payment recorded without an explicit balance line is what becomes an end-of-project argument about whether the payment settled everything.",
      },
      {
        q: "Should I invoice per milestone or once for the whole project?",
        a: "Per milestone for anything long, since each invoice is then self-contained and can be approved on its own. One invoice with payments recorded against it suits the simpler shape of an advance followed by a balance. Pick one per project and state which in the payment terms.",
      },
      {
        q: "How do I number milestone invoices?",
        a: "Consecutively in your normal series, exactly like any other invoice. Do not start a sub-series per project — the requirement is one consecutive series unique for the financial year, and per-project numbering creates gaps in it. Use the reference field to tie them to the project instead.",
      },
      {
        q: "When is tax due on a staged payment?",
        a: "It depends on when the supply is treated as taking place, which is not necessarily when you raised the invoice or when the money arrived. On a long project — particularly one spanning a rate change or a financial year end — settle this with your accountant at the start of the engagement rather than at the end.",
      },
    ],
    related: ["how-to-invoice-for-recurring-work", "advance-payment-for-freelancers-india", "how-to-get-invoices-paid-faster"],
    guide: "payment-receipt-format",
  },

  {
    slug: "how-to-invoice-a-government-department-india",
    title: "How to Invoice a Government Department in India",
    h1: "Invoicing a government department",
    description:
      "Why public-sector invoices take longer, the fields that are non-negotiable, and how GeM and portal submission change what counts as sending an invoice.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 6,
    lead: "Government payment is slow but it is also predictable, and almost every delay traces to a field that was optional for your other clients.",
    answer:
      "Invoicing a government department requires exact compliance rather than good enough: the purchase or work order number must appear on the invoice, your details must match the vendor registration character for character, and submission usually has to go through the specified portal — GeM or a departmental system — where the portal submission is the invoice and email is only a copy. Expect longer cycles, expect TDS and any applicable GST TDS to be deducted, and reconcile against the deduction certificates rather than your bank statement.",
    keywords: [
      "how to invoice government department india",
      "gem invoice",
      "government invoice format india",
      "psu vendor invoice",
    ],
    sections: [
      {
        heading: "The fields that are not optional",
        blocks: [
          {
            kind: "fields",
            rows: [
              ["Purchase or work order number", "No order number, no processing. This is absolute, not a preference."],
              ["Vendor code", "Your identifier in their system. Ask for it during onboarding."],
              ["Exact registered name", "Character for character as registered. “Pvt Ltd” where the registration says “Pvt. Ltd.” gets returned."],
              ["GSTIN", "Yours and theirs, and the department will have a specific one for the unit you are billing."],
              ["Bank details matching the registration", "Any mismatch with the vendor master stops payment entirely."],
              ["Sanction or milestone reference", "Where the order defines stages, name which one this is."],
            ],
          },
          {
            kind: "note",
            text: "The exact-name requirement causes more returned invoices than anything else. Copy the name from the vendor registration rather than typing it from memory, and do not correct their punctuation.",
          },
        ],
      },
      {
        heading: "The portal is the invoice",
        blocks: [
          {
            kind: "p",
            text: "For GeM and most departmental systems, submission through the portal is what constitutes raising the invoice. An emailed PDF to your contact is a courtesy copy and starts no clock.",
          },
          {
            kind: "p",
            text: "This is the single most expensive misunderstanding for a first-time public-sector supplier: three weeks pass, you follow up, and you learn that nothing was ever submitted because you emailed it. Establish the route during onboarding, before there is an invoice to send.",
          },
        ],
      },
      {
        heading: "Deductions and reconciliation",
        blocks: [
          {
            kind: "p",
            text: "Expect the amount that arrives to be less than the amount invoiced. Income tax TDS applies as it does with any business client, and government departments and certain public-sector bodies are also required to deduct GST TDS on contracts above a specified value.",
          },
          {
            kind: "list",
            items: [
              "Invoice the gross amount. Never deduct on their behalf.",
              "Reconcile against the deduction certificates and your GST portal credit, not against your bank statement.",
              "Expect deductions to appear in the relevant statements after a lag — often after you have stopped watching for them.",
            ],
          },
          {
            kind: "note",
            text: "Whether GST TDS applies to a given contract, and at what threshold, depends on the deductor and the contract value. Confirm with your accountant rather than assuming from a previous engagement.",
          },
        ],
      },
      {
        heading: "Working with the timeline",
        blocks: [
          {
            kind: "list",
            items: [
              "**Submit early in the month.** Payment runs cluster, and missing one costs weeks rather than days.",
              "**Get the inspection or acceptance certificate.** Where the order requires one, no payment moves without it, and chasing the invoice instead of the certificate wastes a fortnight.",
              "**Keep every submission acknowledgement.** The portal receipt is your evidence of when the clock started.",
              "**Find the dealing officer.** Public-sector payment is a queue with a named person at each desk, and a polite call to the right one moves things that email does not.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is different about invoicing a government department?",
        a: "Exactness. The purchase or work order number is mandatory, your registered name and bank details must match the vendor master character for character, and submission normally has to go through a specified portal. Requirements that are preferences with a private client are hard blocks here.",
      },
      {
        q: "Is emailing the invoice enough for a GeM order?",
        a: "No. For GeM and most departmental systems the portal submission is the invoice, and an emailed PDF is a courtesy copy that starts no clock. Establish the correct submission route during onboarding — discovering it three weeks later is the most common and most expensive first-timer mistake.",
      },
      {
        q: "Why is the amount received less than the invoice?",
        a: "Income tax TDS, and often GST TDS as well, since government departments and certain public-sector bodies are required to deduct it on contracts above a specified value. Invoice the gross amount, never deduct on their behalf, and reconcile against the deduction certificates rather than your bank statement.",
      },
      {
        q: "Why did my government invoice get returned?",
        a: "Most often a name mismatch — punctuation or an abbreviation differing from the vendor registration — or a missing order number or vendor code. Copy your details from the registration rather than typing them, and do not tidy up their formatting.",
      },
    ],
    related: ["what-to-do-when-a-client-refuses-to-pay", "tds-on-professional-fees", "how-to-get-invoices-paid-faster"],
    guide: "gst-invoice-format",
  },

  {
    slug: "invoicing-for-goods-vs-services",
    title: "Invoicing for Goods vs Services — What Changes",
    h1: "Invoicing for goods vs services",
    description:
      "Different deadlines, different documents, different fields — the practical differences between billing a product and billing work.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "The invoice looks the same. The timing, the paperwork around it and the classification underneath it do not.",
    answer:
      "The main differences are timing, copies and classification. For goods, the invoice is issued on or before removal or delivery, in triplicate, and carries HSN codes; for services it is issued within 30 days of supply — 45 for banks, insurers and other financial institutions — in duplicate, and carries SAC codes. Goods moving without a supply need a delivery challan rather than an invoice, and place of supply is determined by delivery destination for goods but generally by the recipient's registered location for B2B services.",
    keywords: [
      "invoice for goods vs services",
      "difference invoicing products services",
      "time limit to issue invoice gst",
      "goods invoice format",
    ],
    sections: [
      {
        heading: "Side by side",
        blocks: [
          {
            kind: "table",
            head: ["", "Goods", "Services"],
            rows: [
              ["Issue by", "On or before removal or delivery", "Within 30 days of supply"],
              ["Copies", "Triplicate", "Duplicate"],
              ["Classification", "HSN", "SAC"],
              ["Place of supply", "Delivery destination", "Recipient's registered location (B2B, generally)"],
              ["Quantity and unit", "Essential", "Often notional — hours, months, or blank"],
              ["Movement document", "Delivery challan where no supply occurs", "Not applicable"],
            ],
          },
          {
            kind: "p",
            text: "Financial institutions get 45 days rather than 30 for services. Continuous supply of either has its own timing tied to the statement period or the due date it covers.",
          },
        ],
      },
      {
        heading: "The deadline is the practical difference",
        blocks: [
          {
            kind: "p",
            text: "For goods the invoice has to exist before the goods move. That makes invoicing part of despatch rather than part of accounting, and it is why goods businesses invoice continuously while service businesses tend to batch at month end.",
          },
          {
            kind: "p",
            text: "For services the 30-day window is generous enough that people use all of it, which is a habit worth breaking. A fortnight of batching is a fortnight of ageing added for no reason other than convention.",
          },
        ],
      },
      {
        heading: "Quantity on a services invoice",
        blocks: [
          {
            kind: "p",
            text: "A services invoice still has quantity and unit fields, and using them well is what makes the invoice checkable.",
          },
          {
            kind: "list",
            items: [
              "**Hourly work** — quantity 12, unit “hrs”, rate per hour.",
              "**A retainer** — quantity 1, unit “month”, with the period in the detail line.",
              "**A fixed-price deliverable** — quantity 1, no unit, rate equal to the price.",
              "**Per-unit services** — quantity 40, unit “images”, rate per image.",
            ],
          },
          {
            kind: "p",
            text: "The temptation with fixed-price work is to leave quantity blank and put the whole amount in the rate. That works, but a quantity of 1 with a clear description reads better to the person approving it and matches how their system expects a line to look.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How long do I have to issue an invoice for services?",
        a: "Within 30 days of the supply, extended to 45 days for banks, insurers and other financial institutions. For goods the invoice must exist on or before removal or delivery, which makes it part of despatch rather than part of month-end accounting.",
      },
      {
        q: "Do I need a delivery challan as well as an invoice?",
        a: "Only where goods move without a supply taking place — a transfer between your own branches, materials sent for job work, goods on approval. A normal sale needs an invoice, not a challan. Issuing a tax invoice for a non-supply movement creates a taxable event that never happened.",
      },
      {
        q: "What quantity do I put for a fixed-price project?",
        a: "One, with the deliverable as the description and the price as the rate. Leaving quantity blank works but reads oddly to the person approving it, and most accounts systems expect a line to have a quantity. Use the detail line for what the fixed price covers.",
      },
      {
        q: "Why do goods invoices need three copies?",
        a: "Original for the recipient, duplicate for the transporter, triplicate for you — because goods move physically and the invoice travels with them. Services need only duplicate. A PDF printed the required number of times satisfies this; the marking on each copy is what matters.",
      },
    ],
    related: ["what-is-place-of-supply", "hsn-and-sac-codes-on-invoices", "invoice-vs-receipt-vs-bill-vs-challan"],
    guide: "invoice-format-india",
  },
];
