import type { Guide } from "./guide-types";

export const guidesA: Guide[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "gst-invoice-format",
    title: "GST Invoice Format — What an Indian Tax Invoice Must Contain",
    h1: "GST invoice format",
    description:
      "The fields a GST tax invoice must carry under Rule 46, when to split the rate into CGST and SGST instead of IGST, and how long you have to issue one.",
    updated: "2026-08-27",
    eyebrow: "Format",
    lead: "What an Indian tax invoice has to carry, why the tax splits in two on some invoices and not others, and how long you have to issue one.",
    keywords: [
      "gst invoice format",
      "tax invoice format india",
      "cgst sgst igst invoice",
      "gst invoice rules",
      "gst bill format",
      "gst invoice mandatory fields",
    ],
    sections: [
      {
        heading: "What Rule 46 actually requires",
        blocks: [
          {
            kind: "p",
            text: "A tax invoice under GST is not a free-form document. Rule 46 of the CGST Rules lists the particulars it has to carry, and an invoice missing one of them is a problem for your customer as much as for you — it is the document their input tax credit rests on.",
          },
          {
            kind: "fields",
            rows: [
              ["Supplier details", "Your name, address and GSTIN."],
              [
                "Invoice number",
                "Unique and consecutive within the financial year, at most 16 characters, using letters, digits, hyphens and slashes only.",
              ],
              ["Date of issue", "The date the invoice is raised."],
              [
                "Recipient details",
                "Name, address, and GSTIN if they are registered. For an unregistered recipient above ₹50,000 you also need their address and the state.",
              ],
              [
                "HSN or SAC code",
                "The classification code for each good or service. How many digits are required scales with your turnover.",
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
                "Split into CGST and SGST, or shown as a single IGST line — see below.",
              ],
              [
                "Place of supply",
                "The state. This is what decides the split, and it is the field most often left off.",
              ],
              [
                "Reverse charge",
                "Whether tax is payable on a reverse-charge basis. State it either way rather than leaving it blank.",
              ],
              [
                "Signature",
                "Of the supplier or an authorised representative. A digital signature is fine.",
              ],
            ],
          },
          {
            kind: "note",
            text: "This page describes the format so you can lay an invoice out correctly. It is not tax advice and does not replace your accountant — thresholds and turnover-linked requirements change, and yours depend on your registration.",
          },
        ],
      },
      {
        heading: "The CGST/SGST split, plainly",
        blocks: [
          {
            kind: "p",
            text: "One rate, two ways of printing it. The deciding factor is the **place of supply**, not where you are sitting.",
          },
          {
            kind: "table",
            head: ["Place of supply", "Type", "How 18% prints"],
            rows: [
              ["Your own state", "Intra-state", "9% CGST + 9% SGST"],
              ["Another state or UT", "Inter-state", "18% IGST, one line"],
            ],
          },
          {
            kind: "p",
            text: "The customer pays the same total either way. What changes is which government receives it. Getting this wrong is the single most common fault in a hand-made Indian invoice, which is why the generator asks one question — same state or another state — and prints the right lines from your answer.",
          },
          {
            kind: "p",
            text: "A related trap: halve the **money**, not the rate. Computing 9% twice and rounding each result can leave the two halves a paisa short of the whole, and a reconciliation that is off by one paisa is still off.",
          },
        ],
      },
      {
        heading: "When you have to issue it",
        blocks: [
          {
            kind: "list",
            items: [
              "Goods: on or before removal or delivery.",
              "Services: within 30 days of supply — 45 days for banks, insurers and other financial institutions.",
              "Continuous supply: on or before the due date each statement covers.",
            ],
          },
        ],
      },
      {
        heading: "Copies",
        blocks: [
          {
            kind: "p",
            text: "For goods, an invoice is issued in triplicate — original for the recipient, duplicate for the transporter, triplicate for you. For services it is in duplicate. A PDF printed twice satisfies this as well as pre-printed stationery does; the marking is what matters, and you can add it in the notes field.",
          },
        ],
      },
    ],
    faqs: [
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
        a: "The number of digits required scales with your turnover, and small taxpayers supplying B2C are given relief on it. Because it depends on your registration and your turnover, this generator gives you a description and detail field to include the code in rather than guessing a rule for you.",
      },
      {
        q: "Is a bill of supply the same thing?",
        a: "No. A bill of supply is what you issue when no tax is charged — a composition dealer, or an exempt supply. It carries no tax lines and must say it is a bill of supply. A tax invoice is what you issue when GST is charged.",
      },
      {
        q: "Does the amount have to be written in words?",
        a: "It is not a Rule 46 requirement, but it is near-universal on Indian invoices and it removes an argument about a misread figure. The generator prints it in lakh and crore, and you can switch it off.",
      },
    ],
    related: [
      "invoice-number-format",
      "tax-invoice-vs-bill-of-supply",
      "e-invoice-india",
      "invoice-format-india",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "invoice-format-india",
    title: "Invoice Format in India — Every Type, and Which One to Use",
    h1: "Invoice format in India",
    description:
      "Tax invoice, bill of supply, proforma, quotation, receipt, credit note and delivery challan — what each one is for, what it must contain, and when to issue which.",
    updated: "2026-08-27",
    eyebrow: "Overview",
    lead: "There are seven documents an Indian business routinely calls an invoice. Only one of them is a tax invoice, and issuing the wrong one is how input tax credit gets refused.",
    keywords: [
      "invoice format india",
      "bill format india",
      "types of invoice in gst",
      "invoice format",
      "billing format india",
    ],
    sections: [
      {
        heading: "The seven documents, and what each is for",
        blocks: [
          {
            kind: "p",
            text: "In everyday speech all of these are “the bill”. In GST they are different instruments with different consequences, and the difference matters most to the person receiving one.",
          },
          {
            kind: "table",
            head: ["Document", "Issue it when", "Carries tax?"],
            rows: [
              [
                "Tax invoice",
                "You made a taxable supply and you are registered",
                "Yes",
              ],
              [
                "Bill of supply",
                "Exempt supply, or you are a composition dealer",
                "No",
              ],
              [
                "Proforma invoice",
                "Before supply — to confirm what will be charged",
                "Shown, not charged",
              ],
              [
                "Quotation / estimate",
                "Before agreement — an offer, not a demand",
                "Shown as estimate",
              ],
              [
                "Receipt / payment voucher",
                "On receiving money, as acknowledgement",
                "Reflects tax paid",
              ],
              [
                "Credit note",
                "You over-charged, or goods came back",
                "Reverses tax",
              ],
              [
                "Delivery challan",
                "Goods move without a supply happening",
                "No",
              ],
            ],
          },
          {
            kind: "note",
            text: "Only a tax invoice supports the recipient's input tax credit. A proforma never does, no matter how closely it resembles one — which is why a client's accounts team will ask you to reissue.",
          },
        ],
      },
      {
        heading: "What every one of them needs",
        blocks: [
          {
            kind: "p",
            text: "Whatever the type, these fields are what make the document usable by the person on the other end:",
          },
          {
            kind: "list",
            items: [
              "Both parties named in full, with the address each of them files under.",
              "A document number from a series you keep consecutive.",
              "The date of issue, and a due date written as an actual date.",
              "Line items specific enough to be checked against something that was agreed.",
              "Tax shown separately from the amount it is charged on.",
              "Payment instructions on the document itself, not in the covering email.",
            ],
          },
        ],
      },
      {
        heading: "Which format to pick, in order",
        blocks: [
          {
            kind: "steps",
            items: [
              "Has the work been agreed? If not, issue a quotation.",
              "Has it been agreed but not supplied, and the client needs a document to raise a PO or make an advance payment? Issue a proforma invoice.",
              "Has the supply happened and are you charging GST? Issue a tax invoice.",
              "Has the supply happened but the supply is exempt, or you are a composition dealer? Issue a bill of supply.",
              "Did you invoice too much, or did goods come back? Issue a credit note against the original invoice number.",
              "Are you acknowledging money received against an invoice already raised? Issue a receipt.",
            ],
          },
        ],
      },
      {
        heading: "The rupee formatting nobody gets right",
        blocks: [
          {
            kind: "p",
            text: "Indian invoices group digits in the Indian system — **12,34,567.50**, not 1,234,567.50. It is not decorative: a finance team reading a Western-grouped figure at speed reads the wrong number, and on a large invoice they read it wrong by a factor of ten.",
          },
          {
            kind: "p",
            text: "The same goes for the amount in words, which is why it is on almost every Indian invoice. “Twelve Lakh Thirty Four Thousand” cannot be misread the way a row of digits can. The generator writes it in lakh and crore for INR and in millions for other currencies, from the same number it printed above.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between an invoice and a bill?",
        a: "In practice, nothing — they are the same document under two names. In GST the term that carries meaning is tax invoice, which is a specific instrument with mandatory fields under Rule 46. If someone asks for a bill and you are registered and charging GST, a tax invoice is what they need.",
      },
      {
        q: "Can I issue an invoice without a GST number?",
        a: "Yes. If you are not registered under GST you issue an ordinary invoice, you do not charge GST on it, and you do not show a GSTIN. What you must not do is show a tax line or a GSTIN you do not hold — that is a serious offence, and it also hands your customer a credit they cannot claim.",
      },
      {
        q: "Does an invoice have to be in a particular format or template?",
        a: "There is no prescribed layout. GST prescribes the particulars, not the design — where you place your logo or how you rule the table is up to you, as long as every required field is present and legible.",
      },
      {
        q: "Can I invoice in a foreign currency?",
        a: "Yes, and exporters routinely do. The invoice can be denominated in the currency you are paid in; your GST return still reports in rupees at the applicable rate. The generator supports nine currencies and applies the right digit grouping to each.",
      },
    ],
    related: [
      "gst-invoice-format",
      "proforma-invoice-format",
      "tax-invoice-vs-bill-of-supply",
      "how-to-make-an-invoice",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-to-make-an-invoice",
    title: "What to Put on an Invoice — And What Gets It Paid Faster",
    h1: "What to put on an invoice",
    description:
      "The fields every invoice needs, the four omissions that hold payment up, and how to word payment terms so an invoice does not sit in an inbox for a month.",
    updated: "2026-08-27",
    eyebrow: "Guide",
    lead: "Most late payments are not a cash-flow problem at the other end. They are an invoice that could not be approved without asking you a question first.",
    keywords: [
      "what to put on an invoice",
      "how to make an invoice",
      "invoice payment terms",
      "invoice checklist",
      "how to write an invoice",
    ],
    sections: [
      {
        heading: "The seven lines that matter",
        blocks: [
          {
            kind: "steps",
            items: [
              "Name both parties in full, with the address and tax number each of them files under.",
              "Give the invoice a unique number from a series you keep consecutive.",
              "Date it, and state the due date as a date rather than a number of days.",
              "Itemise the work so each line can be checked against something the client agreed to.",
              "Show the tax separately from the amount it is charged on.",
              "State exactly how to pay, in the same document.",
              "Send it as a PDF to the person who actually processes it.",
            ],
          },
        ],
      },
      {
        heading: "The four omissions that hold an invoice up",
        blocks: [
          {
            kind: "p",
            text: "**No purchase order or reference.** In any organisation with a procurement process, an invoice that cannot be matched to an approved order does not enter the payment run. It sits with someone who lacks the authority to approve it and does not know who has it. Ask for the PO number before you start the work, not after you have invoiced for it.",
          },
          {
            kind: "p",
            text: "**A due date the reader has to calculate.** “Net 30” is an instruction to do arithmetic. “Due 23 September 2026” is a deadline. One of those gets entered into a system; the other gets deferred until somebody works it out.",
          },
          {
            kind: "p",
            text: "**A single line reading “services rendered”.** An invoice has to be checkable by someone who was not in the room. One line for ₹2,50,000 gives them nothing to verify and every reason to escalate it. Three lines that each correspond to something the client agreed to can be approved by the person who agreed to it.",
          },
          {
            kind: "p",
            text: "**No payment instructions.** Account name, account number, IFSC or SWIFT, UPI ID — on the invoice itself, not in the covering email that gets detached the moment the PDF is filed. Any question here costs you a round trip and a week.",
          },
        ],
      },
      {
        heading: "Send it to a person, and to the process",
        blocks: [
          {
            kind: "p",
            text: "The person who commissioned the work rarely pays for it. Send the invoice to them *and* to accounts payable, so the person who can approve it and the system that will pay it both have it on day one. If there is an invoicing portal, the portal is the only route that counts — everything else is a copy.",
          },
        ],
      },
      {
        heading: "Keep a series, and keep the file",
        blocks: [
          {
            kind: "p",
            text: "One consecutive number series across every invoice you raise, regardless of which tool raised it. Keep the PDF: it is the record, and unlike a draft in a browser it does not disappear when a machine is replaced.",
          },
        ],
      },
    ],
    howTo: {
      name: "How to write an invoice",
      steps: [
        "Name both parties in full, with the address and tax number each of them files under.",
        "Give the invoice a unique number from a series you keep consecutive.",
        "Date it, and state the due date as a date rather than a number of days.",
        "Itemise the work so each line can be checked against something the client agreed to.",
        "Show the tax separately from the amount it is charged on.",
        "State exactly how to pay, in the same document.",
        "Send it as a PDF to the person who actually processes it.",
      ],
    },
    faqs: [
      {
        q: "Net 30, or a date?",
        a: "A date. “Net 30” requires the reader to find your invoice date, add thirty days, and agree with your arithmetic — three chances to defer the decision. “Due 23 September 2026” is a deadline someone can put in a calendar, and it is what accounts payable systems key on.",
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
        a: "For anything above a trivial amount, yes — and it saves the argument later. Send a quotation, and once it is accepted switch the document type to Invoice and keep the same line items. A proforma sits between the two: it looks like an invoice and states what will be charged, but it is not a demand for payment and carries no tax credit.",
      },
      {
        q: "How should I name the file?",
        a: "So that it can be found in a folder of four hundred others. The generator names it by document type, number and client — “Invoice - INV-202608-001 - Northline Retail.pdf” — which sorts sensibly and tells the recipient what it is before they open it.",
      },
    ],
    related: [
      "invoice-number-format",
      "quotation-format",
      "freelance-invoice-format",
      "invoice-format-india",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "invoice-number-format",
    title: "Invoice Number Format — Rules, Series and Examples",
    h1: "Invoice number format",
    description:
      "What GST requires of an invoice number, a series format that sorts correctly and never collides, and how to handle gaps, restarts and multiple series.",
    updated: "2026-08-27",
    eyebrow: "Reference",
    lead: "Sixteen characters, unique for the financial year, consecutive. Within those constraints there is one format worth using and several worth avoiding.",
    keywords: [
      "invoice number format",
      "invoice numbering rules gst",
      "invoice serial number",
      "invoice number example",
      "gst invoice number rules",
    ],
    sections: [
      {
        heading: "What the rule says",
        blocks: [
          {
            kind: "p",
            text: "Rule 46(b) of the CGST Rules is unusually specific. A tax invoice must carry a consecutive serial number that is:",
          },
          {
            kind: "list",
            items: [
              "No more than 16 characters.",
              "Unique for the financial year.",
              "Made only of letters, digits, hyphens and slashes — nothing else.",
              "In one series, or several, as long as each is consecutive.",
            ],
          },
          {
            kind: "note",
            text: "“One or multiple series” is the permission most people miss. You may run a separate series per branch, per client type or per document type — you simply have to keep each one consecutive.",
          },
        ],
      },
      {
        heading: "A format that works",
        blocks: [
          {
            kind: "p",
            text: "The generator suggests **INV-202608-001**, and there are three reasons to keep it.",
          },
          {
            kind: "list",
            items: [
              "It sorts correctly. Year before month before sequence means alphabetical order and chronological order are the same order, in every file browser and spreadsheet you will ever open it in.",
              "It is self-dating. Someone looking at the number alone knows which month it belongs to, which is what makes a folder of them navigable.",
              "It is padded. 001 rather than 1 means the tenth and the hundredth invoice still line up in a column.",
            ],
          },
          {
            kind: "p",
            text: "Change the prefix per document type and you have your multiple series for free: QUO for quotations, PI for proforma, CN for credit notes. The generator does this automatically when you switch the document type.",
          },
        ],
      },
      {
        heading: "What to avoid",
        blocks: [
          {
            kind: "table",
            head: ["Format", "Why it hurts"],
            rows: [
              ["1, 2, 3", "Tells your client you have issued three invoices ever."],
              [
                "24/08/2026-1",
                "Slashes are legal, but day-first dates sort into nonsense.",
              ],
              [
                "INV#001",
                "The # is not an allowed character under Rule 46(b).",
              ],
              [
                "Random or hashed numbers",
                "Legal, but not consecutive — which is the part that is required.",
              ],
              [
                "Restarting at 001 each month without a month in the number",
                "Produces duplicates within the financial year.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Gaps, restarts and mistakes",
        blocks: [
          {
            kind: "p",
            text: "A gap in the series is the thing that gets asked about, because from the outside a missing number looks like a cancelled invoice somebody would rather not discuss. If you void one, keep the number and mark it cancelled rather than reusing it or letting it vanish.",
          },
          {
            kind: "p",
            text: "Start a fresh series on 1 April, when the Indian financial year turns. Uniqueness is required *for the financial year*, so a new year is exactly when you are supposed to restart — and if your number carries the year, as the suggested format does, this happens on its own.",
          },
          {
            kind: "p",
            text: "The one thing this tool cannot do is know about your other invoices. If some are raised in accounting software and some here, keep a single series across both. A duplicate number is the sort of thing that surfaces at exactly the wrong moment.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I restart my invoice numbers every year?",
        a: "You are expected to. The requirement is that the number is unique for the financial year, so 1 April is the natural point to restart. If the year is part of the number, as in INV-202608-001, restarting happens by itself and old numbers never collide with new ones.",
      },
      {
        q: "Can I have more than one invoice series?",
        a: "Yes — Rule 46(b) explicitly allows one or multiple series. Businesses commonly run one per branch, per state registration or per document type. Each series has to be consecutive in itself; they do not have to interleave.",
      },
      {
        q: "What characters are allowed in a GST invoice number?",
        a: "Letters, digits, hyphens and slashes, up to sixteen characters in total. Anything else — a hash, an underscore, a space, a full stop — is outside what the rule permits, even though most software will happily let you type it.",
      },
      {
        q: "What happens if I skip a number by mistake?",
        a: "Nothing automatic, but it is worth documenting. A gap looks like a cancelled or suppressed invoice to anyone reviewing the series later. If you cancel an invoice, retain the number and mark it cancelled rather than reissuing it against different work.",
      },
    ],
    related: [
      "gst-invoice-format",
      "how-to-make-an-invoice",
      "credit-note-and-debit-note-format",
      "invoice-format-india",
    ],
  },
];
