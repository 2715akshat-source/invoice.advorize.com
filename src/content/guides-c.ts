import type { Guide } from "./guide-types";

export const guidesC: Guide[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "freelance-invoice-format",
    title: "Freelance Invoice Format — For Consultants and Contractors in India",
    h1: "Freelance invoice format",
    description:
      "How a freelancer or consultant in India should invoice: GST or no GST, TDS on your fee, invoicing overseas clients, and getting paid on time.",
    updated: "2026-08-27",
    eyebrow: "Guide",
    lead: "Invoicing as a freelancer is mostly the same job as invoicing as a company, with three complications a company does not have: registration, TDS, and getting paid across a border.",
    keywords: [
      "freelance invoice format",
      "consultant invoice format india",
      "freelancer invoice india",
      "invoice format for professional services",
      "self employed invoice format",
    ],
    sections: [
      {
        heading: "Do you charge GST?",
        blocks: [
          {
            kind: "p",
            text: "Registration turns on your aggregate turnover and on what and where you supply. Broadly, service providers register above a turnover threshold, and some situations require registration regardless of turnover — inter-state supply of certain kinds, and supply through some platforms among them.",
          },
          {
            kind: "list",
            items: [
              "**Registered:** issue a tax invoice, show your GSTIN, charge CGST and SGST or IGST according to the place of supply.",
              "**Not registered:** issue an ordinary invoice with no tax line and no GSTIN. Do not show either.",
            ],
          },
          {
            kind: "note",
            text: "Showing a tax line or a GSTIN you do not hold is a serious offence, and it hands your client a credit they cannot claim — which they will discover and come back about. If you are near a threshold, this is a question for an accountant, not a template.",
          },
        ],
      },
      {
        heading: "TDS: why you receive less than you invoiced",
        blocks: [
          {
            kind: "p",
            text: "An Indian business paying a professional fee generally deducts tax at source and remits it against your PAN. You invoice the full amount; they pay the net; the deduction is credited to you and shows up in your Form 26AS, where it offsets your own tax.",
          },
          {
            kind: "p",
            text: "The practical consequences for your invoice are small but worth getting right:",
          },
          {
            kind: "list",
            items: [
              "Put your PAN on the invoice. Without it the deduction is made at a higher rate.",
              "Invoice the gross amount. Do not deduct TDS yourself — that is the payer's job, and doing it for them makes the amounts irreconcilable.",
              "Expect the receipt to be short by the deducted amount, and reconcile against 26AS rather than against your bank statement.",
            ],
          },
        ],
      },
      {
        heading: "Invoicing an overseas client",
        blocks: [
          {
            kind: "p",
            text: "Export of services is a specific status under GST with its own conditions, and meeting them is what makes the supply zero-rated rather than merely untaxed. The conditions concern where the supplier and recipient are, where the service is used, and that payment is received in convertible foreign exchange.",
          },
          {
            kind: "list",
            items: [
              "Invoice in the client's currency. The generator supports USD, EUR, GBP, AED, CAD, AUD, SGD and JPY alongside INR, with the right digit grouping for each.",
              "Include your bank's SWIFT code, not just the IFSC — an overseas transfer needs it.",
              "Keep the FIRC or equivalent your bank issues on receipt. It is what evidences that payment came in as foreign exchange.",
              "State the nature of the service clearly. Vague descriptions cause questions at the receiving bank, not at your end.",
            ],
          },
        ],
      },
      {
        heading: "Getting paid, specifically",
        blocks: [
          {
            kind: "p",
            text: "Freelancers get paid late for structural reasons rather than personal ones — you are usually a small line in someone else's payment run, and anything that makes your invoice harder to process pushes it to the next one.",
          },
          {
            kind: "steps",
            items: [
              "Agree the rate, the scope and the payment terms in writing before starting. A short email is enough.",
              "Ask whether a purchase order is needed. If it is, you will not be paid without the number on the invoice.",
              "Invoice the day the work is delivered, not at the end of the month.",
              "Put a real due date on it, not “Net 15”.",
              "Send it to your contact and to accounts payable in the same email.",
              "Follow up on the due date itself, referencing the invoice number.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "How to invoice as a freelancer in India",
      steps: [
        "Agree the rate, scope and payment terms in writing before starting.",
        "Ask whether a purchase order number is required on the invoice.",
        "Invoice the day the work is delivered rather than at month end.",
        "Show your PAN, and your GSTIN only if you are actually registered.",
        "Put a real due date on the invoice instead of a payment-term phrase.",
        "Send it to your contact and to accounts payable together.",
      ],
    },
    faqs: [
      {
        q: "Can I invoice a client without GST registration?",
        a: "Yes. If you are not registered you issue an ordinary invoice with no tax line and no GSTIN. What you must never do is show GST you are not registered to collect — the client cannot claim it, and the exposure is yours.",
      },
      {
        q: "Should I show TDS on my invoice?",
        a: "No. Invoice the gross amount and let the payer deduct. If you deduct it yourself the two sides' records disagree, and the deduction they report against your PAN will not match what you billed. Put your PAN on the invoice so the deduction is made at the correct rate.",
      },
      {
        q: "What currency should I invoice an overseas client in?",
        a: "The currency you have agreed to be paid in — usually the client's. Include your SWIFT code as well as the IFSC, and keep the FIRC your bank issues, since that is what evidences receipt in convertible foreign exchange.",
      },
      {
        q: "How much should I ask for up front?",
        a: "For a new client, an advance of a third is normal in India and reasonable to ask for. Issue a proforma invoice for the advance, then a tax invoice on delivery for the whole engagement with the advance shown as amount paid, so the balance due is unambiguous.",
      },
    ],
    related: [
      "how-to-make-an-invoice",
      "export-invoice-format",
      "quotation-format",
      "gst-invoice-format",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "tax-invoice-vs-bill-of-supply",
    title: "Tax Invoice vs Bill of Supply — Which One to Issue",
    h1: "Tax invoice vs bill of supply",
    description:
      "When GST requires a bill of supply instead of a tax invoice, what each document must contain, and why issuing the wrong one costs your customer their credit.",
    updated: "2026-08-27",
    eyebrow: "Reference",
    lead: "They look almost identical and they are not interchangeable. One carries tax and supports a credit; the other says, in as many words, that no tax was charged.",
    keywords: [
      "tax invoice vs bill of supply",
      "bill of supply format",
      "bill of supply gst",
      "composition dealer invoice format",
      "exempt supply invoice",
    ],
    sections: [
      {
        heading: "The distinction",
        blocks: [
          {
            kind: "table",
            head: ["", "Tax invoice", "Bill of supply"],
            rows: [
              [
                "Issue when",
                "Registered, making a taxable supply",
                "Exempt supply, or you are a composition dealer",
              ],
              ["Shows tax", "Yes, itemised", "No"],
              ["Buyer can claim ITC", "Yes", "No"],
              [
                "Must state",
                "Place of supply, tax rate and amount",
                "That it is a bill of supply",
              ],
            ],
          },
          {
            kind: "p",
            text: "A composition dealer cannot collect tax from a customer, so there is no tax to show and nothing for the customer to claim. An exempt supply carries no tax for a different reason — the supply itself is outside the charge — but the document is the same.",
          },
        ],
      },
      {
        heading: "What a bill of supply must carry",
        blocks: [
          {
            kind: "list",
            items: [
              "The words “Bill of Supply”.",
              "Your name, address and GSTIN.",
              "A consecutive serial number, unique for the financial year, on the same 16-character rules as an invoice.",
              "The date of issue.",
              "The recipient's name and address, and GSTIN if registered.",
              "HSN or SAC codes, description and value of the goods or services.",
              "Signature or digital signature.",
            ],
          },
          {
            kind: "p",
            text: "A composition dealer has one more obligation: the document must carry the declaration that the dealer is a composition taxable person and is not eligible to collect tax on supplies. Put it in the notes field — it is required to appear on the face of the document, not in your records.",
          },
        ],
      },
      {
        heading: "When a single supply is partly exempt",
        blocks: [
          {
            kind: "p",
            text: "Where a registered person supplies both taxable and exempt items to the same customer, an invoice-cum-bill-of-supply may be issued covering both — one document, taxable lines carrying tax and exempt lines carrying none.",
          },
          {
            kind: "p",
            text: "The way to produce this here is per-item tax mode: set the tax rate on the exempt lines to zero and the taxable lines to their real rate. The summary then shows tax only against the lines that carry it, and the exempt lines sit in the same table at their full value.",
          },
        ],
      },
      {
        heading: "Getting it wrong",
        blocks: [
          {
            kind: "p",
            text: "The costly direction is issuing a tax invoice for an exempt supply, or as a composition dealer. You have then shown tax you were not entitled to collect, your customer has claimed a credit they were not entitled to, and both of those get unwound — usually at the customer's audit rather than yours, which is a difficult conversation to have with a client.",
          },
          {
            kind: "note",
            text: "Which of these applies to you depends on your registration and what you supply, and neither is something a formatting tool can determine. Confirm your position with your accountant; this page describes the two documents, not which one is yours.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can a composition dealer issue a tax invoice?",
        a: "No. A composition dealer cannot collect tax from customers, so there is no tax to itemise. They issue a bill of supply, and it must carry the declaration that they are a composition taxable person not eligible to collect tax on supplies.",
      },
      {
        q: "Does a bill of supply need a serial number?",
        a: "Yes, on the same basis as a tax invoice — consecutive, unique for the financial year, at most sixteen characters. Keeping it in its own series is the cleanest way to stay consecutive in both.",
      },
      {
        q: "Can I put taxable and exempt items on the same document?",
        a: "A registered person can issue an invoice-cum-bill-of-supply covering both. Use per-item tax mode, set the exempt lines to zero and the taxable lines to their rate, and the totals will show tax only where tax applies.",
      },
      {
        q: "Can my customer claim input tax credit on a bill of supply?",
        a: "No, and that is the whole point of the distinction. No tax has been charged, so there is nothing to claim. If a customer is expecting a credit, they are expecting a tax invoice — which means one of you has misunderstood the nature of the supply.",
      },
    ],
    related: [
      "gst-invoice-format",
      "invoice-format-india",
      "credit-note-and-debit-note-format",
      "invoice-number-format",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "e-invoice-india",
    title: "E-Invoicing in India — Who It Applies To and What Changes",
    h1: "E-invoicing in India",
    description:
      "Who has to generate an IRN, what the Invoice Registration Portal actually does, the 30-day reporting window, and where a PDF generator fits alongside it.",
    updated: "2026-08-27",
    eyebrow: "Compliance",
    lead: "E-invoicing does not mean emailing a PDF. It means registering the invoice with a government portal and getting a number back — and if it applies to you, an invoice without that number is not valid.",
    keywords: [
      "e invoice india",
      "e invoicing gst",
      "irn invoice",
      "e invoice limit",
      "e invoice applicability",
      "invoice registration portal",
    ],
    sections: [
      {
        heading: "What e-invoicing actually is",
        blocks: [
          {
            kind: "p",
            text: "A common misunderstanding: e-invoicing is not the practice of sending invoices electronically. It is a registration step. You submit the invoice data to the Invoice Registration Portal, and the IRP returns an **Invoice Reference Number** — a 64-character hash derived from your GSTIN, the document type, the financial year and the document number — along with a signed QR code that must appear on the invoice you give the customer.",
          },
          {
            kind: "p",
            text: "The portal also pushes the data onward, which is the real purpose: your GSTR-1 and, where relevant, the e-way bill are populated from what you reported, rather than keyed in again later.",
          },
        ],
      },
      {
        heading: "Who it applies to",
        blocks: [
          {
            kind: "p",
            text: "As of 2026, e-invoicing is mandatory for businesses whose **aggregate annual turnover exceeded ₹5 crore in any financial year from 2017-18 onwards**. The test looks backwards: if you crossed the threshold once, you are in, whether or not you are above it now.",
          },
          {
            kind: "p",
            text: "It applies to B2B supplies and exports. It does not apply to B2C invoices, though large taxpayers have separate QR-code obligations there.",
          },
          {
            kind: "table",
            head: ["Aggregate annual turnover", "E-invoice required", "30-day IRN window"],
            rows: [
              ["Above ₹10 crore", "Yes", "Yes — hard stop at 30 days"],
              ["₹5 crore to ₹10 crore", "Yes", "Not currently applied"],
              ["Below ₹5 crore", "No", "—"],
            ],
          },
          {
            kind: "note",
            text: "Thresholds and reporting windows have been revised repeatedly since 2020 and will be again. Treat the figures above as correct at the time of writing and confirm your own position against the current notifications or with your accountant before relying on them.",
          },
        ],
      },
      {
        heading: "The 30-day window",
        blocks: [
          {
            kind: "p",
            text: "For taxpayers with turnover of ₹10 crore and above, invoices, credit notes and debit notes older than 30 days cannot be reported to the IRP at all. There is no late reporting and no grace period — the portal refuses the document.",
          },
          {
            kind: "p",
            text: "The consequence is not merely administrative. An invoice that should have carried an IRN and does not is not a valid tax invoice, which puts the recipient's input tax credit at risk on a document they had no part in delaying.",
          },
        ],
      },
      {
        heading: "Where this generator fits",
        blocks: [
          {
            kind: "p",
            text: "This tool produces the invoice document. It does not connect to the IRP, and it makes no attempt to — that requires your GSTIN credentials, and the entire premise here is that nothing you type leaves your browser.",
          },
          {
            kind: "list",
            items: [
              "**If e-invoicing does not apply to you**, the PDF from this tool is your invoice. Nothing further is needed.",
              "**If it does apply**, generate the IRN through your accounting software, an ASP/GSP or the government portal, then place the IRN and QR code on the document you send.",
              "**Either way**, the formatting rules on the rest of these pages are unchanged. E-invoicing adds a registration step; it does not alter what the invoice must contain.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the e-invoice limit in India?",
        a: "E-invoicing applies where aggregate annual turnover exceeded ₹5 crore in any financial year from 2017-18 onwards. The test is historical — crossing the threshold once brings you in permanently, even if turnover later falls below it. Confirm against current notifications, as this threshold has been lowered several times.",
      },
      {
        q: "Does e-invoicing mean I email the invoice?",
        a: "No. It means registering the invoice with the Invoice Registration Portal and receiving an IRN and signed QR code, which must then appear on the invoice you give the customer. How you deliver the document is unrelated.",
      },
      {
        q: "Can this generator create an e-invoice with an IRN?",
        a: "No, and deliberately not. Generating an IRN requires authenticated access to the IRP using your GST credentials, which would mean sending your invoice data to a server. Everything here runs in your browser. Generate the IRN through your accounting software or a GSP, then add the IRN and QR code to the document.",
      },
      {
        q: "What happens if I miss the 30-day reporting window?",
        a: "For taxpayers at or above ₹10 crore turnover, the portal simply refuses the document — there is no late reporting. The invoice is then not a valid tax invoice, which puts your customer's input tax credit at risk. Report promptly rather than at a monthly reconciliation.",
      },
    ],
    related: [
      "gst-invoice-format",
      "invoice-number-format",
      "credit-note-and-debit-note-format",
      "export-invoice-format",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "export-invoice-format",
    title: "Export Invoice Format — Invoicing Overseas Clients from India",
    h1: "Export invoice format",
    description:
      "What an export invoice must carry, the endorsement that depends on whether you export under LUT or with tax paid, and how to handle foreign currency.",
    updated: "2026-08-27",
    eyebrow: "Format",
    lead: "An export invoice is an ordinary tax invoice with four additions — and one line of wording that changes depending on how you have chosen to export.",
    keywords: [
      "export invoice format",
      "export invoice under gst",
      "lut invoice format",
      "zero rated supply invoice",
      "commercial invoice format india",
    ],
    sections: [
      {
        heading: "What makes it an export invoice",
        blocks: [
          {
            kind: "p",
            text: "The base document is a tax invoice and everything on the GST invoice format page still applies. Exports add these:",
          },
          {
            kind: "fields",
            rows: [
              [
                "The endorsement",
                "A statement on the face of the invoice saying whether the supply is made under a bond or Letter of Undertaking without payment of IGST, or on payment of IGST.",
              ],
              [
                "Recipient's country",
                "The full delivery address including the country of destination.",
              ],
              [
                "Currency",
                "The currency you are invoicing and being paid in.",
              ],
              [
                "Banking details for an inbound transfer",
                "SWIFT or BIC alongside your account details — an IFSC alone is not enough for a wire from abroad.",
              ],
            ],
          },
          {
            kind: "p",
            text: "For goods there is more: shipping bill details, port of loading, and terms of delivery. Those come from your freight documentation rather than from the invoice tool.",
          },
        ],
      },
      {
        heading: "LUT or with tax paid",
        blocks: [
          {
            kind: "p",
            text: "Exports are zero-rated, and there are two routes to that. The one you have chosen determines the endorsement wording, so it has to be on the invoice.",
          },
          {
            kind: "table",
            head: ["", "Under LUT / bond", "With IGST paid"],
            rows: [
              ["You charge IGST", "No", "Yes"],
              ["You recover it", "Refund of input tax credit", "Refund of the IGST paid"],
              ["Cash flow", "Better — nothing is paid out", "Worse — paid, then reclaimed"],
              [
                "Endorsement",
                "“Supply meant for export under bond or Letter of Undertaking without payment of integrated tax”",
                "“Supply meant for export on payment of integrated tax”",
              ],
            ],
          },
          {
            kind: "note",
            text: "Most regular exporters file a Letter of Undertaking for exactly the cash-flow reason. Which route applies to you, and whether your LUT is current, is a question for your accountant — put the resulting endorsement in the notes field and it prints on the invoice.",
          },
        ],
      },
      {
        heading: "Export of services",
        blocks: [
          {
            kind: "p",
            text: "Services qualify as exports only if a specific set of conditions is met — concerning where the supplier and recipient are located, where the service is used, that the two are not merely establishments of the same person, and that payment is received in convertible foreign exchange.",
          },
          {
            kind: "p",
            text: "That last condition has a documentary consequence. Keep the FIRC or the bank advice your bank issues on receipt: it is the evidence that payment came in as foreign exchange, and it is what gets asked for when a refund is examined.",
          },
        ],
      },
      {
        heading: "Currency and formatting",
        blocks: [
          {
            kind: "p",
            text: "Invoice in the currency you will be paid in. The generator supports USD, EUR, GBP, AED, CAD, AUD, SGD and JPY alongside INR, and applies each currency's own conventions — Western digit grouping and the correct symbol rather than Indian lakh-crore grouping, which reads as an error to an overseas accounts team.",
          },
          {
            kind: "p",
            text: "The amount in words follows the same logic: a USD invoice reads “One Hundred Twenty Thousand Dollars”, not “One Lakh Twenty Thousand”. Your GST return still reports in rupees at the applicable rate; the document the customer receives should be in theirs.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I charge GST on an export invoice?",
        a: "Exports are zero-rated, and there are two routes. Under a Letter of Undertaking or bond you charge no IGST and claim a refund of input tax credit. Alternatively you charge IGST and claim a refund of the tax paid. The route you use determines the endorsement that must appear on the invoice.",
      },
      {
        q: "What endorsement must appear on an export invoice?",
        a: "Either “Supply meant for export under bond or Letter of Undertaking without payment of integrated tax” or “Supply meant for export on payment of integrated tax”, depending on which route you export under. Put it in the notes field so it prints on the face of the document.",
      },
      {
        q: "Can I raise an export invoice in a foreign currency?",
        a: "Yes, and you generally should — invoice in the currency you are paid in. Your GST return still reports in rupees at the applicable rate. The generator handles nine currencies with the correct symbol, digit grouping and amount-in-words scale for each.",
      },
      {
        q: "What is an FIRC and why does it matter?",
        a: "A Foreign Inward Remittance Certificate, or the bank advice that has largely replaced it, evidences that you received payment in convertible foreign exchange. That is one of the conditions for a supply of services to qualify as an export, so it is the document asked for when a refund claim is examined.",
      },
    ],
    related: [
      "freelance-invoice-format",
      "gst-invoice-format",
      "e-invoice-india",
      "proforma-invoice-format",
    ],
  },
];
