import type { Post } from "./post-types";

export const postsB: Post[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "invoice-mistakes-that-delay-payment",
    title: "Nine Invoice Mistakes That Delay Payment",
    h1: "Nine invoice mistakes that delay payment",
    description:
      "The specific, fixable errors that stop an invoice being approved — from a missing PO number to a rupee sign that did not render in the PDF.",
    date: "2026-08-24",
    updated: "2026-08-27",
    minutes: 6,
    lead: "Every one of these is invisible to the person sending the invoice and immediately obvious to the person trying to pay it.",
    answer:
      "The mistakes that delay payment most are: no purchase order or reference number, a due date written as “Net 30” rather than a date, a single vague line item, missing payment details, sending only to your contact rather than to accounts payable, an inconsistent invoice number series, the wrong GST split for the place of supply, a PDF that is an image rather than text, and a file named something like invoice-final-2.pdf. All nine are fixed at the moment you create the invoice, and none of them can be fixed by chasing.",
    keywords: [
      "invoice mistakes",
      "why invoices get rejected",
      "common invoicing errors",
      "invoice not paid reasons",
    ],
    sections: [
      {
        heading: "The nine",
        blocks: [
          {
            kind: "fields",
            rows: [
              [
                "No PO or reference",
                "In any company with procurement, an unmatched invoice never enters the payment run. It stops with someone who cannot approve it and does not know who can.",
              ],
              [
                "“Net 30” instead of a date",
                "An instruction to do arithmetic, not a deadline. Accounts payable systems key on dates.",
              ],
              [
                "One line saying “services rendered”",
                "Nothing the approver can verify, so they escalate it to someone more senior, who is busier.",
              ],
              [
                "No payment details on the document",
                "If the bank details live in the covering email, they are gone the moment the PDF is filed.",
              ],
              [
                "Sent only to your contact",
                "The person who commissioned the work rarely pays for it. Send to them and to accounts payable.",
              ],
              [
                "An inconsistent number series",
                "Duplicates and gaps invite questions. Under GST the series must be consecutive and unique for the financial year.",
              ],
              [
                "The wrong GST split",
                "CGST/SGST where it should be IGST, or the reverse. The customer's credit is affected, so they will send it back.",
              ],
              [
                "A PDF that is an image",
                "Cannot be searched, copied from, or read by the software processing it. Scanned or screenshotted invoices stall.",
              ],
              [
                "A filename like invoice-final-2.pdf",
                "It has to be findable in a folder of four hundred. Name it by type, number and client.",
              ],
            ],
          },
        ],
      },
      {
        heading: "The three that cost the most",
        blocks: [
          {
            kind: "p",
            text: "If you only fix three, fix the PO number, the due date and the itemisation. Together they account for most of the delay in most invoices, and all three are decided before you press download.",
          },
          {
            kind: "p",
            text: "The PO number is worth a particular note because it is the only one you cannot fix afterwards without reissuing. Ask for it at the point the work is agreed. If the answer is “we don't use POs”, get that in writing from someone in finance, because the person telling you often does not know.",
          },
        ],
      },
      {
        heading: "The rupee sign nobody checks",
        blocks: [
          {
            kind: "p",
            text: "A quieter one, worth its own mention: a surprising number of invoice tools print a box, a question mark or “Rs.” where the ₹ should be. It happens because the font embedded in their PDF has no glyph for it — the standard PDF fonts are Western-encoded, and ₹ is not in that set.",
          },
          {
            kind: "p",
            text: "It looks careless on a document that is asking for money, and on a large figure it introduces genuine ambiguity. Download one test invoice with a rupee amount and look at it before you trust any tool with a real one.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why do clients reject invoices?",
        a: "Almost always because the invoice cannot be matched to something already approved — usually a missing purchase order number — or because a line item does not correspond to anything the approver recognises. Genuine disputes about the work are far rarer than administrative mismatches, which is why itemising clearly is worth more than any amount of chasing.",
      },
      {
        q: "What is the most common invoicing mistake?",
        a: "Omitting the purchase order or reference number when the client's process requires one. It is the only mistake on this list you cannot correct without reissuing the invoice, and it stops the document at the very first gate, where nobody is motivated to tell you what is wrong.",
      },
      {
        q: "Does the file name of an invoice matter?",
        a: "More than it should. The person receiving it files hundreds, and a name like invoice-final-2.pdf is unfindable a month later when they are reconciling. Name it by document type, number and client — “Invoice - INV-202608-001 - Northline Retail.pdf” sorts sensibly and identifies itself before it is opened.",
      },
      {
        q: "Should I send the invoice as a PDF or in the email body?",
        a: "PDF, always, and attached rather than linked. It is the document of record, it survives being forwarded, and it can be filed. An invoice in an email body cannot be attached to an approval workflow, and a link expires or requires a login the finance team does not have.",
      },
    ],
    related: [
      "how-to-get-invoices-paid-faster",
      "payment-reminder-email-templates",
      "best-free-invoice-generator-india",
    ],
    guide: "how-to-make-an-invoice",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-to-invoice-international-clients-from-india",
    title: "How to Invoice International Clients from India",
    h1: "How to invoice international clients from India",
    description:
      "Currency, bank details, the export endorsement, FIRC evidence and the practical differences that decide whether an overseas invoice gets paid without friction.",
    date: "2026-08-23",
    updated: "2026-08-27",
    minutes: 8,
    lead: "The invoice itself changes very little. What changes is everything around it — the banking, the evidence you have to keep, and the wording that makes the supply zero-rated.",
    answer:
      "Invoice an overseas client in the currency you have agreed to be paid in, include your SWIFT or BIC code alongside your account details, and put the export endorsement on the document — either “Supply meant for export under bond or Letter of Undertaking without payment of integrated tax” or “Supply meant for export on payment of integrated tax”, depending on which route you use. Keep the FIRC or bank advice your bank issues on receipt, since evidence that payment arrived in convertible foreign exchange is one of the conditions for a service to qualify as an export.",
    keywords: [
      "invoice international clients india",
      "export invoice india",
      "invoice foreign clients from india",
      "freelancer invoice usa client",
      "foreign currency invoice india",
    ],
    sections: [
      {
        heading: "Currency, and why it is not a small decision",
        blocks: [
          {
            kind: "p",
            text: "Invoice in the currency you will be paid in — usually the client's. Invoicing in rupees and asking a US client to send dollars leaves the exchange rate and the conversion spread undefined, and whoever did not define it absorbs the difference.",
          },
          {
            kind: "p",
            text: "Formatting follows the currency, and getting this wrong signals amateurism immediately. A USD invoice uses Western digit grouping — $120,000.00, not $1,20,000.00 — and if you print the amount in words it should read “One Hundred Twenty Thousand Dollars”, not “One Lakh Twenty Thousand”. Your GST return still reports in rupees at the applicable rate; the document the client receives should be entirely in theirs.",
          },
        ],
      },
      {
        heading: "Banking details that actually work",
        blocks: [
          {
            kind: "p",
            text: "An IFSC code is a domestic routing code and means nothing to a bank abroad. An inbound international transfer needs:",
          },
          {
            kind: "list",
            items: [
              "The account holder's name **exactly** as the bank holds it. A mismatch here is the single most common cause of a returned or held transfer.",
              "The account number.",
              "Your bank's **SWIFT or BIC** code.",
              "The bank's branch name and full address.",
              "The IFSC as well — some corridors ask for it, and it costs nothing to include.",
            ],
          },
          {
            kind: "note",
            text: "Also state the purpose of the remittance in plain language on the invoice. The receiving bank asks for it under FEMA reporting, and if you have not supplied it they will contact you before releasing the funds — which is how a two-day transfer becomes a two-week one.",
          },
        ],
      },
      {
        heading: "The export endorsement",
        blocks: [
          {
            kind: "p",
            text: "Exports are zero-rated, and there are two routes to that status. Which one you use determines a line of wording that has to appear on the face of the invoice.",
          },
          {
            kind: "table",
            head: ["", "Under LUT / bond", "With IGST paid"],
            rows: [
              ["You charge IGST", "No", "Yes"],
              [
                "You recover it via",
                "Refund of input tax credit",
                "Refund of the IGST paid",
              ],
              ["Cash flow", "Better — nothing goes out", "Worse — paid, then reclaimed"],
              [
                "Endorsement on the invoice",
                "“…under bond or Letter of Undertaking without payment of integrated tax”",
                "“…on payment of integrated tax”",
              ],
            ],
          },
          {
            kind: "p",
            text: "Most regular exporters file a Letter of Undertaking for exactly the cash-flow reason. Whether yours is current, and which route applies to you, is a question for your accountant — put the resulting wording in the notes field and it prints on the document.",
          },
        ],
      },
      {
        heading: "Export of services is a status, not a description",
        blocks: [
          {
            kind: "p",
            text: "A supply of services counts as an export only when a specific set of conditions is met — concerning where the supplier and the recipient are located, where the service is used, that the two are not merely establishments of the same person, and that payment is received in convertible foreign exchange.",
          },
          {
            kind: "p",
            text: "That last condition is the one with a filing consequence. Keep the FIRC, or the bank advice that has largely replaced it, for every payment. It is what evidences the foreign-exchange receipt, and it is the document that gets requested when a refund claim is examined — often long after you have stopped thinking about that invoice.",
          },
        ],
      },
      {
        heading: "Practical differences worth planning for",
        blocks: [
          {
            kind: "list",
            items: [
              "**Payment takes longer.** Two to five working days is normal for a wire, before the client's own approval cycle. Set due dates accordingly.",
              "**Fees are deducted en route.** Intermediary banks take a cut. Agree in writing who absorbs it, or you will be short and it will be awkward.",
              "**Your client may need a W-8BEN or local equivalent.** Ask early; it is routine paperwork that becomes urgent at exactly the wrong moment.",
              "**Write dates unambiguously.** “23 September 2026”, never 09/23 or 23/09 — the two readings differ by months and nobody notices until they do.",
              "**Time zones affect due dates.** A date is a date; do not add “by 5pm” unless you say whose 5pm.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I charge GST when invoicing a foreign client?",
        a: "Exports of services are zero-rated, so you either export under a Letter of Undertaking and charge no IGST, claiming a refund of input tax credit, or you charge IGST and claim a refund of the tax paid. Which route applies is a decision to take with your accountant, and the invoice must carry the corresponding endorsement either way.",
      },
      {
        q: "What currency should I invoice an overseas client in?",
        a: "The currency you have agreed to be paid in, which is usually the client's. Invoicing in rupees and asking for dollars leaves the exchange rate undefined and someone absorbs the spread. Use that currency's own digit grouping and amount-in-words convention on the document.",
      },
      {
        q: "What bank details do I need on an international invoice?",
        a: "The account holder's name exactly as the bank holds it, the account number, your bank's SWIFT or BIC code, and the branch name and address. Include the IFSC too. Add the purpose of the remittance in plain language, because the receiving bank needs it for FEMA reporting and will hold the funds while they ask you.",
      },
      {
        q: "What is an FIRC and do I need one?",
        a: "A Foreign Inward Remittance Certificate, or the bank advice that has largely replaced it, evidences that you received payment in convertible foreign exchange. That is one of the conditions for a supply of services to qualify as an export, so it is what gets asked for when a refund claim is examined. Keep one for every payment.",
      },
      {
        q: "How long does an international payment take to arrive?",
        a: "Two to five working days for a wire once it is actually sent, on top of the client's own approval cycle. Intermediary banks deduct fees along the way, so agree in writing who absorbs those — otherwise the amount that lands is short of the invoice and the conversation happens after the fact.",
      },
    ],
    related: [
      "advance-payment-for-freelancers-india",
      "how-to-get-invoices-paid-faster",
      "upi-payment-links-on-invoices",
    ],
    guide: "export-invoice-format",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "advance-payment-for-freelancers-india",
    title: "Asking for an Advance: A Freelancer's Guide",
    h1: "Asking for an advance",
    description:
      "How much to ask for, how to word it so it does not cost you the job, and how to document an advance so the final invoice is unambiguous.",
    date: "2026-08-22",
    updated: "2026-08-27",
    minutes: 6,
    lead: "An advance is not a sign of distrust. It is the ordinary way commercial work is funded, and asking for one filters out the clients who were never going to pay.",
    answer:
      "For a new client in India, an advance of a third is normal and reasonable to ask for. Issue a proforma invoice for the advance rather than a tax invoice, since no supply has happened yet. When you invoice for the whole engagement on delivery, enter the advance as the amount already paid so the document shows the total, the amount received and the balance due — which removes any argument about what the final payment covers.",
    keywords: [
      "advance payment freelancer",
      "how much advance to ask client",
      "deposit before starting work",
      "proforma invoice advance",
      "freelancer payment terms india",
    ],
    sections: [
      {
        heading: "How much to ask for",
        blocks: [
          {
            kind: "table",
            head: ["Situation", "Advance", "Why"],
            rows: [
              ["New client, small project", "50%", "Your entire exposure is the project."],
              ["New client, larger project", "33%", "Standard, and rarely negotiated."],
              ["Existing client, good history", "0–25%", "Track record has replaced the need."],
              [
                "Long engagement",
                "Staged",
                "Milestones matter more than the opening payment.",
              ],
              [
                "Work with hard costs",
                "Costs + 25%",
                "Never fund someone else's licences or print run.",
              ],
            ],
          },
          {
            kind: "p",
            text: "The last row is the one freelancers most often get wrong. If a project requires you to buy stock photography, a licence, print or hardware, those costs should be covered before you incur them. You are a supplier, not a lender.",
          },
        ],
      },
      {
        heading: "How to ask without it being a negotiation",
        blocks: [
          {
            kind: "p",
            text: "Put it in the quotation as a term rather than raising it as a request. A stated payment schedule reads as how you work; a question reads as something to be discussed.",
          },
          {
            kind: "note",
            text: "**Payment:** 33% on acceptance of this quotation, balance on delivery. Work begins once the advance is received.\n\nThat second sentence is not aggressive. It is the part that prevents the situation where you have done three weeks of work while the advance sits unpaid.",
          },
          {
            kind: "p",
            text: "If a client pushes back, the useful question is what they would be comfortable with rather than a defence of your terms. Often the objection is procedural — an approval threshold, or a policy about paying before delivery — and a staged schedule solves it without either side conceding anything.",
          },
        ],
      },
      {
        heading: "Which document to send",
        blocks: [
          {
            kind: "steps",
            items: [
              "Send a **quotation** with the payment schedule in it. This is the offer.",
              "On acceptance, send a **proforma invoice** for the advance. No supply has happened, so this is not a tax invoice and creates no tax liability on the work.",
              "Start once the advance lands, not once it is promised.",
              "On delivery, raise the **tax invoice** for the full engagement.",
              "Enter the advance in the amount-paid field so the invoice shows total, paid and balance due.",
              "Reference the proforma number so the client's finance team can match the two documents.",
            ],
          },
          {
            kind: "note",
            text: "Receiving an advance can have GST consequences of its own depending on what is being supplied and when. That is a question for your accountant rather than a formatting question — this describes which document to send, not your tax position on the money.",
          },
        ],
      },
      {
        heading: "Why the balance-due line matters",
        blocks: [
          {
            kind: "p",
            text: "The most common dispute at the end of a project is not about the work. It is about what the final payment is for — whether the advance was a deposit against the total or a separate payment for an early phase.",
          },
          {
            kind: "p",
            text: "An invoice that prints the full total, subtracts the amount already paid and shows a balance due leaves nothing to interpret. It takes one field to fill in and it removes an entire category of awkward conversation.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How much advance should a freelancer ask for?",
        a: "A third is the normal ask for a new client in India and is rarely negotiated. Go to 50% for a small project with a new client, since the project is your entire exposure, and lower or drop it for clients with a good payment history. Where the work has hard costs — licences, stock, print — cover those in full before incurring them.",
      },
      {
        q: "Should I send an invoice or a proforma for an advance?",
        a: "A proforma. No supply has happened yet, so a tax invoice is the wrong instrument and the client cannot claim input tax credit against it anyway. Send the tax invoice for the whole engagement on delivery, with the advance shown as the amount already paid.",
      },
      {
        q: "What if a client refuses to pay an advance?",
        a: "Ask what they would be comfortable with rather than defending your terms. The objection is usually procedural — an approval threshold or a policy against paying before delivery — and a staged schedule tied to milestones usually resolves it. A client who refuses any structure at all on a first engagement has told you something useful before you did the work.",
      },
      {
        q: "How do I show an advance on the final invoice?",
        a: "Invoice the full engagement, then enter the advance in the amount-paid field so the document prints the total, the amount received and the balance due. Reference the proforma number so the two can be matched. This is what prevents an end-of-project argument about what the final payment covers.",
      },
    ],
    related: [
      "how-to-get-invoices-paid-faster",
      "how-to-invoice-international-clients-from-india",
      "payment-reminder-email-templates",
    ],
    guide: "freelance-invoice-format",
  },
];
