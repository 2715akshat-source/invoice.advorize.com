import type { Post } from "./post-types";

export const postsC: Post[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "invoice-vs-receipt-vs-bill-vs-challan",
    title: "Invoice vs Receipt vs Bill vs Challan — The Difference",
    h1: "Invoice vs receipt vs bill vs challan",
    description:
      "Four documents people use interchangeably, what each one actually does, and which to send when a client asks for “the bill”.",
    date: "2026-08-21",
    updated: "2026-08-27",
    minutes: 5,
    lead: "Used loosely these are synonyms. Used precisely they are four different instruments with four different consequences, and sending the wrong one costs somebody their tax credit.",
    answer:
      "An invoice is a request for payment, issued when a supply happens. A receipt is an acknowledgement that payment was received, issued afterwards. A bill is the everyday word for an invoice and carries no separate legal meaning in GST. A delivery challan accompanies goods that are moving without a supply taking place — a transfer between your own branches, or goods sent for job work — and carries no tax. Only a tax invoice supports the recipient's input tax credit.",
    keywords: [
      "invoice vs receipt",
      "difference between bill and invoice",
      "delivery challan meaning",
      "invoice vs bill",
      "what is a tax invoice",
    ],
    sections: [
      {
        heading: "The four, side by side",
        blocks: [
          {
            kind: "table",
            head: ["Document", "Says", "Issued", "Supports ITC"],
            rows: [
              [
                "Tax invoice",
                "You owe this",
                "At or after supply",
                "Yes",
              ],
              [
                "Receipt",
                "You have paid this",
                "After payment arrives",
                "No — the invoice does that",
              ],
              [
                "Bill",
                "Everyday word for an invoice",
                "Same as an invoice",
                "Only if it is a tax invoice",
              ],
              [
                "Delivery challan",
                "These goods are moving",
                "When goods move without a supply",
                "No",
              ],
            ],
          },
        ],
      },
      {
        heading: "Invoice and receipt are the pair that get confused",
        blocks: [
          {
            kind: "p",
            text: "The direction is the whole distinction. An invoice looks forward — it asks for money that has not arrived. A receipt looks back — it confirms money that has.",
          },
          {
            kind: "p",
            text: "The practical consequence is that a client who has paid and asks for “a receipt for our records” does not want another invoice. Sending one suggests you have not noticed their payment, which is a small thing that reads badly. Switch the document type, reference the invoice it settles, and state the amount and method.",
          },
          {
            kind: "note",
            text: "A receipt should always name the invoice it settles and state any remaining balance. A part payment recorded without a balance line is remembered, months later, as settlement in full.",
          },
        ],
      },
      {
        heading: "“Bill” means whatever the speaker means",
        blocks: [
          {
            kind: "p",
            text: "In Indian business English “bill” is used for all of these and for the printed slip from a shop. It has no distinct status under GST — the term that carries meaning is **tax invoice**, and a separate one, **bill of supply**, which is what you issue when no tax is charged.",
          },
          {
            kind: "p",
            text: "So when a client asks for the bill, the answer is almost always a tax invoice. If you are a composition dealer or the supply is exempt, it is a bill of supply. The word they used tells you nothing; what you are supplying and how you are registered tells you everything.",
          },
        ],
      },
      {
        heading: "The delivery challan is the one people forget exists",
        blocks: [
          {
            kind: "p",
            text: "Goods sometimes move without being supplied — stock going to your own second branch, materials sent out for job work, equipment going to an exhibition and coming back, goods sent on approval. None of those is a sale, so none of them should carry a tax invoice.",
          },
          {
            kind: "p",
            text: "A delivery challan is the document for that movement. It describes and values the goods so they can travel and be accounted for, without asserting that a supply happened. Issuing a tax invoice instead creates a taxable event that did not occur, which is a genuinely expensive mistake to unwind.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between an invoice and a receipt?",
        a: "An invoice requests payment and is issued when the supply happens. A receipt acknowledges payment and is issued after the money arrives. A client who has already paid and asks for a receipt does not want another invoice — send a receipt that references the invoice number, states the amount and method, and shows any remaining balance.",
      },
      {
        q: "Is a bill the same as an invoice?",
        a: "In everyday use, yes — they are the same document under two names. Under GST the term that carries meaning is tax invoice. There is also a separate instrument called a bill of supply, which is what you issue when no tax is charged, such as an exempt supply or where you are a composition dealer.",
      },
      {
        q: "When do I use a delivery challan instead of an invoice?",
        a: "When goods move but no supply takes place — stock transferred between your own branches, materials sent for job work, equipment going out and coming back, or goods sent on approval. A delivery challan lets the goods travel and be accounted for without asserting a sale. Issuing a tax invoice there creates a taxable event that never happened.",
      },
      {
        q: "Which document lets my customer claim input tax credit?",
        a: "Only a tax invoice. A receipt, a proforma, a quotation and a delivery challan do not, however much tax detail they display. If a customer is expecting a credit and you have sent anything else, they will come back and ask you to raise the tax invoice.",
      },
    ],
    related: [
      "best-free-invoice-generator-india",
      "how-to-get-invoices-paid-faster",
      "how-long-to-keep-invoices-india",
    ],
    guide: "invoice-format-india",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "invoicing-software-vs-free-invoice-generator",
    title: "Invoicing Software or a Free Generator — Which Do You Need?",
    h1: "Invoicing software or a free generator?",
    description:
      "An honest comparison: what paid invoicing software does that a browser tool cannot, and the point at which it becomes worth the subscription.",
    date: "2026-08-20",
    updated: "2026-08-27",
    minutes: 6,
    lead: "We build a free generator, so treat this with appropriate suspicion — but there is a real line, and it is worth knowing which side of it you are on.",
    answer:
      "A free invoice generator is the right tool when you raise invoices occasionally, work alone, and keep the PDF as your record. Paid invoicing software becomes worth it when you need recurring invoices raised automatically, a shared client and item database, multiple people working from the same ledger, payment status tracked against each invoice, or direct filing and reconciliation. The dividing line is roughly whether you are producing documents or running a ledger.",
    keywords: [
      "invoicing software vs free tool",
      "do i need invoicing software",
      "best invoicing software india",
      "accounting software small business india",
    ],
    sections: [
      {
        heading: "What a free generator genuinely cannot do",
        blocks: [
          {
            kind: "p",
            text: "Starting with the honest side of the ledger, because it is the part a free tool's own website usually omits.",
          },
          {
            kind: "list",
            items: [
              "**Recurring invoices.** If you bill the same retainer on the first of every month, software raises and sends it. A generator needs you to remember.",
              "**A client and item database.** Re-picking a client from a list beats retyping their GSTIN every time.",
              "**Payment status.** Software knows which invoices are outstanding and how old they are. A folder of PDFs does not.",
              "**Multi-user access.** A browser tool stores your draft in one browser on one machine. There is no “our invoices”.",
              "**Reconciliation and filing.** Matching payments to invoices, populating returns, connecting to your bank.",
              "**An audit trail.** Who changed what, and when.",
            ],
          },
          {
            kind: "note",
            text: "The multi-user point is worth dwelling on. A tool that runs entirely in your browser cannot sync — that is a direct consequence of the privacy model, not an oversight. If two people need the same invoice list, a browser tool is structurally the wrong choice.",
          },
        ],
      },
      {
        heading: "What a generator does better",
        blocks: [
          {
            kind: "list",
            items: [
              "**Nothing is uploaded.** Your client list, bank details and amounts never leave your machine. With software, they live on somebody's server under a retention policy you have not read.",
              "**No account, no lock-in.** Nothing to cancel, no data to export when you leave, no price rise to absorb.",
              "**Instant.** No onboarding, no company setup wizard, no thirty-day trial that starts charging.",
              "**It works offline.** Once the page has loaded, it keeps working.",
              "**No per-invoice cost.** Raise four hundred if the month calls for it.",
            ],
          },
        ],
      },
      {
        heading: "Where the line actually falls",
        blocks: [
          {
            kind: "table",
            head: ["If you…", "Use"],
            rows: [
              ["Raise a few invoices a month, alone", "A free generator"],
              ["Send the same retainer monthly", "Software"],
              ["Have a team touching the same invoices", "Software"],
              ["Need to know what is outstanding at a glance", "Software"],
              ["Are registered and filing GST returns regularly", "Software, or an accountant with it"],
              ["Invoice occasionally and keep the PDFs", "A free generator"],
              ["Need e-invoicing with IRN generation", "Software or a GSP — a browser tool cannot"],
            ],
          },
          {
            kind: "p",
            text: "The e-invoicing row is absolute rather than a preference. Generating an IRN requires authenticated access to the Invoice Registration Portal using your GST credentials, which means sending invoice data to a server. A tool built on the promise that nothing leaves your browser cannot do it, and should not claim to.",
          },
        ],
      },
      {
        heading: "The sensible middle",
        blocks: [
          {
            kind: "p",
            text: "Plenty of businesses use both, and it is not a compromise. Software runs the ledger — recurring billing, the client database, what is outstanding. A generator handles the one-offs that do not belong in it: a quotation for a prospect who may never become a client, a proforma for an advance, a receipt someone asked for, a credit note.",
          },
          {
            kind: "p",
            text: "The only thing to be disciplined about is the number series. If invoices are raised in two places, keep one consecutive series across both — a duplicate or a gap is exactly the kind of thing that surfaces at the wrong moment.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need invoicing software as a freelancer?",
        a: "Usually not at first. If you raise a handful of invoices a month, work alone and keep the PDFs as your record, a free generator does the job. Software earns its subscription once you need recurring invoices raised automatically, a client database, or a live view of what is outstanding — roughly the point where you are running a ledger rather than producing documents.",
      },
      {
        q: "Can a free invoice generator handle GST invoices?",
        a: "Yes, for producing the document — the GST split, the mandatory fields, the amount in words. What it cannot do is file your returns, reconcile payments, or generate an IRN for e-invoicing, since that needs authenticated access to the government portal. If e-invoicing applies to you, you need software or a GSP alongside.",
      },
      {
        q: "Is it safe to keep invoices only as PDFs?",
        a: "The PDF is the record, and it is the thing you would produce if asked, so keeping it is the essential part. What a folder of PDFs does not give you is a view of what is outstanding or an audit trail of changes. Back them up somewhere that is not one laptop.",
      },
      {
        q: "Can I use both a generator and accounting software?",
        a: "Many businesses do, and it works well — software runs the recurring billing and the ledger, and a generator handles one-off quotations, proformas, receipts and credit notes that do not belong in it. The one discipline required is keeping a single consecutive invoice number series across both.",
      },
    ],
    related: [
      "best-free-invoice-generator-india",
      "how-long-to-keep-invoices-india",
      "invoice-vs-receipt-vs-bill-vs-challan",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-long-to-keep-invoices-india",
    title: "How Long to Keep Invoices and Records in India",
    h1: "How long to keep invoices",
    description:
      "What GST and the Companies Act expect you to retain, how long for, and a filing system that survives a laptop being replaced.",
    date: "2026-08-19",
    updated: "2026-08-27",
    minutes: 5,
    lead: "The retention period is longer than most people assume, and the records people lose are almost never the invoices themselves.",
    answer:
      "Under GST, records and documents must generally be retained until seventy-two months from the due date of the annual return for the relevant financial year — six years — and longer where an appeal or investigation is pending, in which case the period runs beyond the conclusion of those proceedings. Other statutes impose their own periods, so the practical rule most accountants give is to keep everything for eight years. Store the PDFs somewhere that is not a single laptop.",
    keywords: [
      "how long to keep invoices india",
      "gst record retention period",
      "invoice retention rules",
      "business record keeping india",
    ],
    sections: [
      {
        heading: "The periods",
        blocks: [
          {
            kind: "fields",
            rows: [
              [
                "GST records",
                "Generally seventy-two months from the due date of the annual return for that financial year. Where an appeal, revision or investigation is pending, retention extends beyond the conclusion of those proceedings.",
              ],
              [
                "Company books",
                "The Companies Act sets its own minimum for books of account, which for most companies is eight financial years.",
              ],
              [
                "Income tax",
                "Records supporting a return should survive the window in which that return can be reopened.",
              ],
              [
                "Bank and FIRC evidence",
                "Keep for as long as the underlying supply's records, since a refund claim can be examined well after the fact.",
              ],
            ],
          },
          {
            kind: "note",
            text: "These periods interact, they have exceptions, and the pending-proceedings extension can push any of them out indefinitely. The safe operating rule is eight years for everything — but confirm your own position with your accountant rather than treating this page as the answer.",
          },
        ],
      },
      {
        heading: "What people actually lose",
        blocks: [
          {
            kind: "p",
            text: "Not the invoices. Invoices are emailed, so a copy exists in a sent folder somewhere. What goes missing is the surrounding evidence, which never had a natural home:",
          },
          {
            kind: "list",
            items: [
              "**Proformas and quotations** that were superseded and quietly deleted.",
              "**Credit notes**, which are issued rarely and filed inconsistently.",
              "**FIRCs and bank advices** for foreign receipts — needed for refund claims, and issued by a bank portal that ages out.",
              "**Delivery challans**, which feel like logistics paperwork rather than accounting records.",
              "**The written acceptance** of a quotation, which is usually one email that resolves a dispute two years later.",
            ],
          },
        ],
      },
      {
        heading: "A filing system that survives",
        blocks: [
          {
            kind: "steps",
            items: [
              "One folder per financial year, named 2026-27 so it sorts correctly.",
              "Subfolders by document type: invoices, credit notes, proformas, receipts, bank.",
              "Name every file by type, number and client — “Invoice - INV-202608-001 - Northline Retail.pdf”.",
              "Put the folder somewhere synced, not on one machine. A laptop failure should be an inconvenience, not an event.",
              "Once a year, open a file at random from three years ago. If you cannot, the system has already failed and you have time to fix it.",
            ],
          },
          {
            kind: "p",
            text: "The naming convention is the part that matters most and the part most often skipped. A folder of four hundred files called invoice.pdf, invoice-1.pdf and invoice-final.pdf is technically retained and practically lost.",
          },
        ],
      },
      {
        heading: "A note on browser-stored drafts",
        blocks: [
          {
            kind: "p",
            text: "This is worth stating plainly since our own tool works this way. A draft saved in your browser is a convenience, not a record. It lives in one browser on one machine, and clearing site data removes it.",
          },
          {
            kind: "p",
            text: "The PDF is the record. Download it, file it, and treat anything held in a browser — ours or anyone else's — as scratch paper.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How long should I keep invoices in India?",
        a: "Under GST, generally seventy-two months from the due date of the annual return for the relevant financial year, and longer where an appeal or investigation is pending. Other statutes impose their own periods, so most accountants advise keeping everything for eight years. Confirm your specific position with yours, since the periods interact.",
      },
      {
        q: "Do I need to keep paper copies of invoices?",
        a: "Digital records are ordinarily acceptable, and a PDF is the practical record for most businesses. What matters is that they are complete, legible, retained for the full period and actually retrievable — a folder of files called invoice-final-2.pdf meets none of that last test.",
      },
      {
        q: "What records do people most often lose?",
        a: "Not invoices, which survive in email. It is the surrounding evidence — superseded proformas, credit notes issued rarely, FIRCs for foreign receipts, delivery challans, and the single email in which a client accepted a quotation. Those never had an obvious filing home, and they are what resolve disputes years later.",
      },
      {
        q: "Is a draft saved in my browser a record?",
        a: "No. A browser-stored draft lives in one browser on one machine and disappears when site data is cleared. It is a convenience so you do not lose work between sessions. Download the PDF and file it — that is the record.",
      },
    ],
    related: [
      "invoicing-software-vs-free-invoice-generator",
      "invoice-vs-receipt-vs-bill-vs-challan",
      "invoice-mistakes-that-delay-payment",
    ],
    guide: "invoice-number-format",
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "upi-payment-links-on-invoices",
    title: "Putting UPI and Payment Links on Your Invoices",
    h1: "UPI and payment links on invoices",
    description:
      "How to make paying an invoice a single action, which details to include for each method, and the limits worth knowing before you rely on UPI.",
    date: "2026-08-18",
    updated: "2026-08-27",
    minutes: 5,
    lead: "Every extra step between reading your invoice and paying it is a chance for the payment to be deferred to later, and later is where invoices go to age.",
    answer:
      "Put your UPI ID directly on the invoice alongside full bank details, and include both rather than choosing. UPI is fastest for small-value payments from individuals and small businesses, but transaction limits and company payment processes make bank transfer the only viable route for larger B2B invoices. Always include the account name exactly as the bank holds it, the account number and the IFSC — and for overseas clients, the SWIFT code as well.",
    keywords: [
      "upi on invoice",
      "payment link invoice",
      "how to accept payments freelancer india",
      "upi id on bill",
      "invoice payment methods india",
    ],
    sections: [
      {
        heading: "Include every route, on the document",
        blocks: [
          {
            kind: "p",
            text: "The single most common omission on an Indian invoice is complete payment details, and the second most common is putting them in the covering email instead of on the document — where they are detached the moment the PDF is filed.",
          },
          {
            kind: "fields",
            rows: [
              [
                "Account name",
                "Exactly as the bank holds it. A mismatch is the most common cause of a held or returned transfer.",
              ],
              ["Account number", "In full, without spaces that invite transcription errors."],
              ["IFSC", "For any domestic transfer."],
              ["UPI ID", "For anyone who can use it — often the fastest route by far."],
              [
                "SWIFT / BIC",
                "For overseas clients. An IFSC alone is meaningless to a foreign bank.",
              ],
              [
                "Reference to quote",
                "Ask them to quote the invoice number. It is what lets you reconcile the receipt later.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Where UPI helps, and where it does not",
        blocks: [
          {
            kind: "table",
            head: ["Paying party", "UPI works?", "Note"],
            rows: [
              ["An individual client", "Very well", "Often paid within minutes of reading the invoice."],
              ["A small business owner", "Well", "If they pay personally rather than through a process."],
              [
                "A mid-sized company",
                "Rarely",
                "Payments run through a bank process; UPI is not in it.",
              ],
              [
                "A large company",
                "No",
                "Supplier bank details are held on file; nothing routes through UPI.",
              ],
              ["An overseas client", "No", "UPI is domestic. SWIFT is the route."],
            ],
          },
          {
            kind: "p",
            text: "So include UPI, but never *only* UPI. A large-value B2B invoice with a UPI ID and no bank details is unpayable by the person it was sent to, and you will hear about it a week later.",
          },
          {
            kind: "note",
            text: "UPI transaction limits vary by bank and by the type of payment, and they change. If you regularly invoice above a lakh, treat bank transfer as the primary route and UPI as the convenience option rather than the reverse.",
          },
        ],
      },
      {
        heading: "QR codes and payment links",
        blocks: [
          {
            kind: "p",
            text: "A UPI QR code on the invoice removes the retyping step, which is genuinely worth something for individual clients paying from a phone. A payment link from a gateway does the same and additionally handles cards.",
          },
          {
            kind: "p",
            text: "Two things to weigh before adding a gateway link. It carries a fee per transaction, which on a large invoice is a real cost, and it introduces a third party between you and the payment. For high-value B2B work, a plain bank transfer costs nothing and is what the client's process expects anyway.",
          },
          {
            kind: "p",
            text: "There is also a distinction worth not blurring: the signed QR code on a GST **e-invoice** is a different thing entirely. That one is returned by the Invoice Registration Portal and is a compliance artefact, not a way to pay you.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Should I put my UPI ID on an invoice?",
        a: "Yes, alongside full bank details rather than instead of them. UPI is the fastest route for individuals and small businesses paying personally, but company payment processes route through banks and overseas clients cannot use it at all. Including only a UPI ID makes a large B2B invoice unpayable.",
      },
      {
        q: "What payment details should be on an invoice?",
        a: "The account name exactly as the bank holds it, the account number, the IFSC, and your UPI ID. Add the SWIFT or BIC code for overseas clients. Put them on the document itself, not in the covering email — the email is detached the moment the PDF is filed, and then somebody has to ask you.",
      },
      {
        q: "Is a payment link better than bank details?",
        a: "For small invoices to individual clients, a link removes friction and often gets paid the same day. For larger B2B invoices it adds a per-transaction fee and a third party to a process the client's finance team already handles by bank transfer. Include both and let the payer choose.",
      },
      {
        q: "Is the QR code on a GST e-invoice for making payment?",
        a: "No — that is a different thing. The signed QR code returned by the Invoice Registration Portal is a compliance artefact that encodes invoice details and the IRN. A UPI QR code, which you would add yourself, is what lets someone pay you. Do not confuse the two on the same document.",
      },
    ],
    related: [
      "how-to-get-invoices-paid-faster",
      "how-to-invoice-international-clients-from-india",
      "advance-payment-for-freelancers-india",
    ],
  },
];
