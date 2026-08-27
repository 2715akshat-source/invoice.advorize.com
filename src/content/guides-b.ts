import type { Guide } from "./guide-types";

export const guidesB: Guide[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "proforma-invoice-format",
    title: "Proforma Invoice Format — What It Is and When to Send One",
    h1: "Proforma invoice format",
    description:
      "What a proforma invoice is, how it differs from a tax invoice and a quotation, what it must say, and why it never supports input tax credit.",
    updated: "2026-08-27",
    eyebrow: "Format",
    lead: "A proforma looks exactly like an invoice and does none of the same work. That is the whole point of it, and it is also why people keep sending the wrong one.",
    keywords: [
      "proforma invoice format",
      "proforma invoice meaning",
      "proforma invoice vs invoice",
      "pi format",
      "proforma invoice india",
    ],
    sections: [
      {
        heading: "What it is",
        blocks: [
          {
            kind: "p",
            text: "A proforma invoice is a commitment to what you *will* charge, issued before the supply happens. It exists so the buyer can act — raise a purchase order, get an advance released, open a letter of credit, clear a budget — using a document that states the final numbers.",
          },
          {
            kind: "p",
            text: "It is not a demand for payment and it is not a tax document. No GST liability arises from issuing one, and the recipient cannot claim input tax credit against it, however much tax the document displays.",
          },
          {
            kind: "note",
            text: "Write the words “Proforma Invoice” on it. A proforma that is not labelled as one is a tax invoice as far as the person filing it is concerned, and that mistake is discovered at reconciliation.",
          },
        ],
      },
      {
        heading: "Proforma, quotation, tax invoice",
        blocks: [
          {
            kind: "table",
            head: ["", "Quotation", "Proforma", "Tax invoice"],
            rows: [
              [
                "Sent",
                "Before agreement",
                "After agreement, before supply",
                "At or after supply",
              ],
              ["Purpose", "An offer", "A commitment", "A demand for payment"],
              ["Negotiable", "Yes", "Rarely", "No"],
              ["Creates tax liability", "No", "No", "Yes"],
              ["Supports input tax credit", "No", "No", "Yes"],
            ],
          },
          {
            kind: "p",
            text: "The practical distinction between a quotation and a proforma is certainty. A quotation invites a decision; a proforma records one that has already been made and puts it in a form the buyer's finance team can process.",
          },
        ],
      },
      {
        heading: "What to put on it",
        blocks: [
          {
            kind: "p",
            text: "A proforma should carry everything the eventual tax invoice will, so that nothing changes between the two except the heading and the number:",
          },
          {
            kind: "list",
            items: [
              "The words “Proforma Invoice”, prominently.",
              "Your details and the buyer's, in full.",
              "A proforma number from its own series — PI-202608-001, not your invoice series.",
              "A validity date. A proforma without one is a price you have quoted forever.",
              "Line items, quantities and rates exactly as they will appear on the invoice.",
              "The tax that will be charged, shown as it will be charged.",
              "Payment and delivery terms, and bank details if an advance is expected.",
            ],
          },
          {
            kind: "p",
            text: "Keep the proforma series separate from the invoice series. They are different documents and mixing them puts gaps in the sequence that is required to be consecutive.",
          },
        ],
      },
      {
        heading: "Turning it into an invoice",
        blocks: [
          {
            kind: "steps",
            items: [
              "Confirm the supply has actually happened, or that you are within the window to invoice for it.",
              "Switch the document type from Proforma to Invoice.",
              "Let the number change to your invoice series — do not carry the PI number across.",
              "Re-date it to the date of supply, not the date of the proforma.",
              "Check the tax split still matches the place of supply, which can change if delivery changed.",
              "Reference the proforma number in the reference field, so the buyer can match the two.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "How to convert a proforma invoice into a tax invoice",
      steps: [
        "Confirm the supply has happened, or that you are within the window to invoice for it.",
        "Switch the document type from Proforma to Invoice.",
        "Let the number change to your invoice series rather than carrying the proforma number across.",
        "Re-date the document to the date of supply.",
        "Check the tax split still matches the place of supply.",
        "Reference the proforma number so the buyer can match the two documents.",
      ],
    },
    faqs: [
      {
        q: "Is a proforma invoice legally binding?",
        a: "It is not a demand for payment, but it is a stated price and most buyers will treat it as one. It binds you more than it binds them — which is why it should always carry a validity date rather than standing open indefinitely.",
      },
      {
        q: "Can I claim input tax credit on a proforma invoice?",
        a: "No. Input tax credit requires a tax invoice. A proforma may display the tax that will be charged, but it is not the document that supports the claim, and a buyer's accounts team will come back and ask you to raise the real one.",
      },
      {
        q: "Does a proforma invoice need a GST number on it?",
        a: "Include your GSTIN — the buyer needs to know who they are dealing with and what will be charged. What matters is that the document is clearly labelled a proforma, so nobody files it as a tax invoice.",
      },
      {
        q: "Should a proforma use the same number series as my invoices?",
        a: "No. Give it its own series with its own prefix. Your tax invoice numbers must be consecutive, and interleaving proformas into that sequence creates gaps that are difficult to explain later.",
      },
    ],
    related: [
      "quotation-format",
      "invoice-format-india",
      "gst-invoice-format",
      "export-invoice-format",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "quotation-format",
    title: "Quotation Format — How to Write One That Gets Accepted",
    h1: "Quotation format",
    description:
      "What a business quotation should contain, how it differs from an estimate and a proforma, and the terms that stop a quote being negotiated after acceptance.",
    updated: "2026-08-27",
    eyebrow: "Format",
    lead: "A quotation is a price with an expiry date and a scope attached. Drop either and you have written a wish rather than an offer.",
    keywords: [
      "quotation format",
      "quotation format for business",
      "price quotation template",
      "estimate format",
      "quotation vs proforma invoice",
    ],
    sections: [
      {
        heading: "What a quotation has to do",
        blocks: [
          {
            kind: "p",
            text: "Three jobs, in order of how often they are botched: state a price, fix the scope that price covers, and set a date after which neither applies.",
          },
          {
            kind: "list",
            items: [
              "Your details and the client's, in full.",
              "A quotation number from its own series.",
              "The date, and a **valid until** date.",
              "Line items with quantity, unit and rate — the same shape as the eventual invoice.",
              "Tax shown as an estimate, and clearly labelled as such.",
              "What is explicitly not included.",
              "Payment terms and the schedule, if it is staged.",
            ],
          },
          {
            kind: "note",
            text: "The generator's Quotation type prints a “Valid until” date in place of a due date and labels the figure an estimated total, because a quotation with a due date on it reads as a demand for money nobody has agreed to yet.",
          },
        ],
      },
      {
        heading: "The exclusions list is the important half",
        blocks: [
          {
            kind: "p",
            text: "Almost every dispute about a quotation is about something that was never in it. Whatever your quote covers, name the adjacent things it does not — third-party licences, content, hosting, hardware, travel, a second round of revisions, anything that will be assumed included because it usually is.",
          },
          {
            kind: "p",
            text: "Three lines in the notes field is enough. It is the cheapest insurance in commercial writing, and it makes you look precise rather than defensive.",
          },
        ],
      },
      {
        heading: "Quotation or estimate?",
        blocks: [
          {
            kind: "table",
            head: ["", "Estimate", "Quotation"],
            rows: [
              ["Precision", "Approximate", "Fixed"],
              ["Changes later", "Expected to", "Should not"],
              ["Use it for", "Undefined or exploratory work", "Defined scope"],
              ["Client reads it as", "A ballpark", "A price"],
            ],
          },
          {
            kind: "p",
            text: "If the scope is genuinely not knowable yet, say estimate and say why. Sending a firm-looking quotation for work you cannot yet scope produces an argument later that you will lose, because the document said quotation.",
          },
        ],
      },
      {
        heading: "After it is accepted",
        blocks: [
          {
            kind: "p",
            text: "Get the acceptance in writing — an email saying “approved” against a quotation number is sufficient and has settled more disputes than any contract clause. Then keep the same line items and switch the document type, so the invoice the client eventually receives is recognisably the thing they agreed to.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How long should a quotation be valid for?",
        a: "Fifteen to thirty days is the usual range, and it should reflect how quickly your own costs move. The point of the date is not to pressure the client — it is so that a quote you sent eight months ago cannot be accepted at today's costs.",
      },
      {
        q: "What is the difference between a quotation and a proforma invoice?",
        a: "A quotation is an offer made before agreement and is open to negotiation. A proforma is issued after agreement and records what has been settled, usually so the buyer can raise a purchase order or release an advance. Neither creates a tax liability.",
      },
      {
        q: "Should I show GST on a quotation?",
        a: "Show it, and label it as estimated. The client needs to know their total outlay, and a quotation that shows a price excluding tax without saying so leads to an unpleasant surprise at invoicing. The generator shows the tax lines and calls the figure an estimated total.",
      },
      {
        q: "Can a client hold me to an expired quotation?",
        a: "That is exactly what the validity date prevents. Once it has passed, the offer has lapsed and you are free to requote. Without a date, you have made an open-ended offer, and that is a much harder conversation.",
      },
    ],
    related: [
      "proforma-invoice-format",
      "how-to-make-an-invoice",
      "freelance-invoice-format",
      "invoice-format-india",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "payment-receipt-format",
    title: "Payment Receipt Format — What a Money Receipt Must Show",
    h1: "Payment receipt format",
    description:
      "What a payment or money receipt should contain, how it differs from an invoice, and how to handle advances, part payments and balances due.",
    updated: "2026-08-27",
    eyebrow: "Format",
    lead: "An invoice asks for money. A receipt confirms it arrived. Sending the first when the client wanted the second is a surprisingly common way to get chased twice.",
    keywords: [
      "payment receipt format",
      "money receipt format",
      "receipt format india",
      "cash receipt format",
      "rent receipt format",
    ],
    sections: [
      {
        heading: "What goes on a receipt",
        blocks: [
          {
            kind: "fields",
            rows: [
              ["Receipt number", "Its own series, separate from your invoices."],
              ["Date received", "The date the money arrived, not the date you wrote it up."],
              ["Received from", "The payer's name as it appears on the payment."],
              ["Amount", "In figures and in words."],
              ["Method", "Bank transfer, UPI, cheque, cash — and the reference number."],
              ["Against", "The invoice number the payment settles."],
              ["Balance", "What remains outstanding, if anything."],
              ["Signature", "Yours or an authorised signatory's."],
            ],
          },
          {
            kind: "p",
            text: "The two fields that get left off are the payment reference and the balance. The reference is what lets either side trace the payment when a bank statement is queried months later. The balance is what stops a part payment being remembered as settlement in full.",
          },
        ],
      },
      {
        heading: "Part payments and advances",
        blocks: [
          {
            kind: "p",
            text: "Where a payment does not clear the invoice, the receipt has to be explicit about what is left. The generator handles this through the **amount paid** field: enter what has been received and the document prints the total, the amount paid and the balance due underneath it, so there is no ambiguity about what the payment covered.",
          },
          {
            kind: "p",
            text: "For an advance taken before any supply, a receipt is the acknowledgement — but be aware that receiving an advance against a future supply can have GST consequences of its own depending on what is being supplied. That is a question for your accountant rather than a formatting question.",
          },
        ],
      },
      {
        heading: "Rent receipts",
        blocks: [
          {
            kind: "p",
            text: "A rent receipt is the same document with three additions, and it is worth getting right because it is used to claim HRA:",
          },
          {
            kind: "list",
            items: [
              "The period the rent covers, stated as a date range.",
              "The address of the property.",
              "The landlord's PAN, where the annual rent is large enough for the tenant's employer to require it.",
            ],
          },
          {
            kind: "note",
            text: "Use the Receipt document type, put the property address and period in the detail line of the item, and the landlord's PAN in the notes. It prints as a clean, complete rent receipt.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between an invoice and a receipt?",
        a: "An invoice is a request for payment, issued when the supply happens. A receipt is an acknowledgement that payment was received, issued afterwards. A client who has paid and wants proof needs a receipt; sending another invoice suggests you have not noticed their payment.",
      },
      {
        q: "Do I need to issue a receipt if I have already issued an invoice?",
        a: "Not always, but it is good practice and clients often ask. For a bank transfer the statement is evidence enough for most purposes; for cash, a receipt is the only record either side has, so it stops being optional.",
      },
      {
        q: "Should a receipt show GST?",
        a: "A receipt reflects tax that was charged on the underlying invoice rather than charging tax itself. Reference the invoice number and let that document carry the tax detail. The exception is an advance receipt, where the treatment depends on the supply — ask your accountant.",
      },
      {
        q: "Can I use this for a rent receipt?",
        a: "Yes. Switch the document type to Receipt, put the rental period and property address in the item detail line, and the landlord's PAN in the notes if the tenant's employer needs it for an HRA claim.",
      },
    ],
    related: [
      "how-to-make-an-invoice",
      "invoice-format-india",
      "credit-note-and-debit-note-format",
      "gst-invoice-format",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "credit-note-and-debit-note-format",
    title: "Credit Note and Debit Note Format Under GST",
    h1: "Credit note and debit note format",
    description:
      "When to issue a credit note versus a debit note, what each must reference, and the deadline after which a credit note can no longer reduce your tax.",
    updated: "2026-08-27",
    eyebrow: "Format",
    lead: "You invoiced too much, or too little, or the goods came back. Which document you issue depends on which direction the correction runs.",
    keywords: [
      "credit note format",
      "debit note format",
      "credit note under gst",
      "credit note vs debit note",
      "credit note format india",
    ],
    sections: [
      {
        heading: "Which one, and when",
        blocks: [
          {
            kind: "table",
            head: ["", "Credit note", "Debit note"],
            rows: [
              ["Issued by", "The supplier", "The supplier"],
              [
                "Issued when",
                "You charged too much, goods were returned, or the supply was deficient",
                "You charged too little, or the taxable value has increased",
              ],
              ["Effect on invoice value", "Reduces it", "Increases it"],
              ["Effect on your output tax", "Reduces it", "Increases it"],
              ["Time limit", "Yes — see below", "No equivalent limit"],
            ],
          },
          {
            kind: "note",
            text: "Both are issued by the supplier, not the buyer. A buyer raising what they call a debit note is raising a claim, not a GST document — the supplier still has to issue the credit note for the adjustment to have any tax effect.",
          },
        ],
      },
      {
        heading: "What a credit note must contain",
        blocks: [
          {
            kind: "list",
            items: [
              "The words “Credit Note”.",
              "Your name, address and GSTIN, and the recipient's.",
              "A consecutive serial number from its own series, unique for the financial year.",
              "The date of issue.",
              "**The number and date of the original tax invoice** it corrects.",
              "The taxable value being credited, the rate, and the tax being credited.",
              "The reason for issuing it.",
              "Signature or digital signature.",
            ],
          },
          {
            kind: "p",
            text: "The reference to the original invoice is the field that makes the document work. A credit note that does not name the invoice it corrects cannot be matched to anything, and neither side can reconcile it.",
          },
        ],
      },
      {
        heading: "The deadline that catches people",
        blocks: [
          {
            kind: "p",
            text: "A credit note only reduces your output tax liability if it is declared in a return within the statutory window — broadly, by the return for September following the end of the financial year in which the original supply was made, or the date the annual return is filed, whichever is earlier.",
          },
          {
            kind: "p",
            text: "After that you can still issue a commercial credit note and give the customer the money back. What you cannot do is reduce the tax you have already paid on it. In practice this means a credit note is a thing to issue promptly rather than at the next convenient reconciliation.",
          },
          {
            kind: "note",
            text: "Time limits and their interaction with your return filings are exactly the kind of thing to confirm with your accountant against the current rules. This page describes the shape of the document, not your filing position.",
          },
        ],
      },
      {
        heading: "Issuing one here",
        blocks: [
          {
            kind: "steps",
            items: [
              "Switch the document type to Credit Note. The number prefix changes to its own CN series.",
              "Put the original invoice number and date in the reference field.",
              "Enter only the lines being credited, at the rates they were originally charged at.",
              "Keep the same tax treatment — if the original was CGST and SGST, the credit note is too.",
              "State the reason in the notes field. “Goods returned”, “rate correction”, “short supply”.",
              "Download it and send it alongside the original invoice, not instead of it.",
            ],
          },
        ],
      },
    ],
    howTo: {
      name: "How to issue a credit note",
      steps: [
        "Switch the document type to Credit Note so the number takes its own series.",
        "Put the original invoice number and date in the reference field.",
        "Enter only the lines being credited, at the rates originally charged.",
        "Keep the same tax treatment as the original invoice.",
        "State the reason for the credit in the notes field.",
        "Send the credit note alongside the original invoice rather than instead of it.",
      ],
    },
    faqs: [
      {
        q: "Who issues a credit note — the buyer or the seller?",
        a: "The supplier, always. A buyer can raise a claim or what they informally call a debit note, but only the supplier's credit note adjusts the taxable value and the tax. Until the supplier issues one, nothing has changed for GST purposes.",
      },
      {
        q: "Can I cancel an invoice instead of issuing a credit note?",
        a: "Only before it has been reported and acted on. Once an invoice has been declared in a return, or the buyer has claimed credit against it, the correct instrument is a credit note — cancelling it retrospectively leaves a gap in a series that is required to be consecutive.",
      },
      {
        q: "Does a credit note need its own number series?",
        a: "It needs a consecutive serial number unique for the financial year, and keeping it in its own series is the clean way to do that. The generator prefixes credit notes with CN so they never interleave with your invoice numbers.",
      },
      {
        q: "What if I under-charged rather than over-charged?",
        a: "That is a debit note — it increases the value of the original supply and your output tax with it. Same structure, same requirement to reference the original invoice, but there is no equivalent of the credit note's time limit.",
      },
    ],
    related: [
      "gst-invoice-format",
      "invoice-number-format",
      "payment-receipt-format",
      "e-invoice-india",
    ],
  },
];
