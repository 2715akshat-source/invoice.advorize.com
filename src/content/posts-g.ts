import type { Post } from "./post-types";

/* Sending the invoice, and what happens when it is not paid. */
export const postsG: Post[] = [
  {
    slug: "what-to-write-in-an-invoice-email",
    title: "What to Write in an Email When Sending an Invoice",
    h1: "What to write when sending an invoice",
    description:
      "A subject line that survives a full inbox, a body that takes ten seconds to read, and the four details that belong in every one.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 4,
    lead: "The email is not the invoice. Its only job is to get the invoice into the right system without anyone needing to reply.",
    answer:
      "Put the invoice number, the amount and the due date in the subject line, attach the PDF rather than linking it, and keep the body to three sentences: what the invoice is for, what the total and due date are, and how to pay. Copy accounts payable as well as your contact. The most useful sentence you can add is a question that surfaces problems early — asking whether anything further is needed to process it.",
    keywords: [
      "invoice email template",
      "what to write when sending an invoice",
      "email for sending invoice",
      "invoice covering email",
    ],
    sections: [
      {
        heading: "The subject line",
        blocks: [
          {
            kind: "p",
            text: "It has to be identifiable in a list of two hundred and searchable six months later. Three elements do that:",
          },
          {
            kind: "note",
            text: "Invoice INV-202608-001 · ₹1,85,000 · due 23 September",
          },
          {
            kind: "p",
            text: "Not “Invoice”, not “Invoice attached”, not “Following up on our work”. The number is what their system keys on and what you will quote in every subsequent message about it.",
          },
        ],
      },
      {
        heading: "The body",
        blocks: [
          {
            kind: "note",
            text: "Hi [name],\n\nAttached is invoice INV-202608-001 for the August performance marketing retainer — ₹1,85,000, due 23 September 2026. Bank and UPI details are on the invoice.\n\nI've copied [accounts@client.com]. Could you confirm it's in the system, and whether anything further is needed from me?\n\nThanks,\n[you]",
          },
          {
            kind: "p",
            text: "Three sentences, and the last one is the one that earns its place. “Is anything further needed?” surfaces a missing PO number or an unapproved line in two days instead of five weeks, and it costs nothing to ask.",
          },
        ],
      },
      {
        heading: "The mechanics that matter",
        blocks: [
          {
            kind: "list",
            items: [
              "**Attach the PDF.** Never a link — links expire, require logins the finance team does not have, and cannot be attached to an approval workflow.",
              "**Name the file properly.** “Invoice - INV-202608-001 - Northline Retail.pdf”, not invoice-final-2.pdf.",
              "**Copy accounts payable.** The person who commissioned the work rarely pays for it.",
              "**Use the portal where there is one.** If the client has a supplier portal, the portal submission is the invoice and the email is a copy.",
              "**Repeat the key facts in the body.** Some approval systems strip attachments; the amount and due date should survive that.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What should the subject line of an invoice email be?",
        a: "The invoice number, the amount and the due date — “Invoice INV-202608-001 · ₹1,85,000 · due 23 September”. The number is what the recipient's system keys on and what you will quote in every follow-up. A subject line reading just “Invoice” is unfindable a month later.",
      },
      {
        q: "How long should an invoice email be?",
        a: "Three sentences. What the invoice is for, the total and due date, and how to pay. Its only job is to get the PDF into the right system without anyone needing to reply, and length works against that.",
      },
      {
        q: "Should I attach the invoice or send a link?",
        a: "Attach it. Links expire, often require a login the finance team does not have, and cannot be attached to an internal approval workflow. The PDF is the document of record and it needs to be forwardable and filable.",
      },
      {
        q: "Who should I send the invoice to?",
        a: "Your contact and accounts payable, in the same email. The person who commissioned the work can approve it; the team that pays it needs it in their system. If the client has a supplier portal, that submission is the invoice and email is only a courtesy copy.",
      },
    ],
    related: ["payment-reminder-email-templates", "how-to-send-an-invoice-on-whatsapp", "how-to-get-invoices-paid-faster"],
    guide: "how-to-make-an-invoice",
  },

  {
    slug: "how-to-send-an-invoice-on-whatsapp",
    title: "How to Send an Invoice on WhatsApp (and When Not To)",
    h1: "Sending an invoice on WhatsApp",
    description:
      "WhatsApp is how a great deal of Indian business actually happens. How to use it for invoices without losing the paper trail.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 4,
    lead: "It gets read in minutes, which is exactly why it is tempting and exactly why it needs a rule attached.",
    answer:
      "Send the PDF as a document, never as a screenshot or photo — a screenshot cannot be searched, filed or processed, and it looks improvised. Keep the message short and include the invoice number, amount and due date as text so they are searchable in the chat. For anything above a small amount, or any client with a finance team, send it by email as well: WhatsApp is a notification, and email is the record. Never send bank details over WhatsApp alone, given how common payment-redirection scams have become.",
    keywords: [
      "send invoice on whatsapp",
      "whatsapp invoice",
      "invoice through whatsapp india",
      "share invoice pdf whatsapp",
    ],
    sections: [
      {
        heading: "Send the document, not a picture of it",
        blocks: [
          {
            kind: "p",
            text: "The single most common mistake is screenshotting the invoice and sending the image. It reads as improvised, and practically it is worse than that:",
          },
          {
            kind: "list",
            items: [
              "It cannot be searched, so it is unfindable in the chat six months later.",
              "It cannot be forwarded into an accounting system that expects a document.",
              "It compresses, and on a long invoice the figures become genuinely hard to read.",
              "It is not the document of record, so if there is ever a dispute you are producing a photograph.",
            ],
          },
          {
            kind: "p",
            text: "Use the attach menu, choose Document, and send the PDF. Same effort, and what arrives is the actual invoice.",
          },
        ],
      },
      {
        heading: "The message",
        blocks: [
          {
            kind: "note",
            text: "Hi [name] — invoice INV-202608-001 attached, ₹1,85,000, due 23 September. Bank and UPI details are on it. Shall I send a copy to your accounts team as well?",
          },
          {
            kind: "p",
            text: "Put the number, the amount and the date in the text rather than leaving them only inside the PDF. WhatsApp search covers message text, so this is what makes the invoice findable in the thread later.",
          },
        ],
      },
      {
        heading: "When to use email instead, or as well",
        blocks: [
          {
            kind: "table",
            head: ["Client", "WhatsApp", "Email"],
            rows: [
              ["Individual, small amount", "Fine on its own", "Optional"],
              ["Small business owner", "Good for the nudge", "Send it too"],
              ["Anyone with a finance team", "Notification only", "Required — this is the record"],
              ["Government or corporate", "Not appropriate", "Portal, then email"],
            ],
          },
          {
            kind: "note",
            text: "Never send bank details by WhatsApp alone. Payment-redirection fraud — a spoofed account intercepting a chat thread — is common enough that a client's finance team may refuse to act on details received that way, and they are right to. The bank details live on the invoice, and the invoice comes by email.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is it professional to send an invoice on WhatsApp?",
        a: "For individuals and small business owners in India it is normal and often gets the fastest response. Send the PDF as a document rather than a screenshot, and treat WhatsApp as the notification while email carries the record. For a client with a finance team or a supplier portal, WhatsApp alone is not enough.",
      },
      {
        q: "Should I send a screenshot of the invoice?",
        a: "No. A screenshot cannot be searched or filed, compresses badly on a detailed invoice, cannot be forwarded into an accounting system, and is not the document of record. Attach the PDF as a document — it is the same number of taps.",
      },
      {
        q: "Is it safe to send bank details over WhatsApp?",
        a: "Send them on the invoice rather than as chat text. Payment-redirection fraud, where a spoofed account intercepts a thread and substitutes different account details, is common enough that many finance teams will not act on details received by chat at all.",
      },
      {
        q: "Do I still need to email the invoice if I sent it on WhatsApp?",
        a: "For any client with a finance team, yes. Email is the record — it is what gets filed, forwarded into approval workflows and found in a search two years later. Treat WhatsApp as the thing that makes them look at it today.",
      },
    ],
    related: ["what-to-write-in-an-invoice-email", "upi-payment-links-on-invoices", "how-to-get-invoices-paid-faster"],
    guide: "how-to-make-an-invoice",
  },

  {
    slug: "invoice-format-in-excel-vs-generator",
    title: "Invoice Format in Excel — And Why It Keeps Going Wrong",
    h1: "Invoice format in Excel",
    description:
      "The five errors an Excel invoice template produces reliably, when a spreadsheet is genuinely the right tool, and what to check before sending one.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 6,
    lead: "Nearly every small business in India has invoiced from a spreadsheet, and nearly every one of them has sent an invoice with a stale number on it.",
    answer:
      "An Excel invoice template works, but it produces the same five errors reliably: a duplicated invoice number from a copied file, a discount applied after tax instead of before, CGST and SGST computed as 9% twice rather than by halving the total tax, Western digit grouping instead of Indian, and a PDF export that drops the rupee symbol. A spreadsheet is genuinely good for keeping the register of what you have issued. It is a poor tool for producing the document, because every error above comes from a formula nobody re-checks.",
    keywords: [
      "invoice format in excel",
      "excel invoice template india",
      "gst invoice format excel",
      "invoice template excel free",
    ],
    sections: [
      {
        heading: "The five errors, in order of frequency",
        blocks: [
          {
            kind: "fields",
            rows: [
              [
                "A duplicated number",
                "The workflow is copy last month's file and edit it. The number is the field most easily forgotten, and a duplicate breaks the consecutive-and-unique requirement.",
              ],
              [
                "Discount after tax",
                "Column order in a spreadsheet is visual, so the discount often sits below the tax row and gets applied there. That charges the customer tax on money nobody is paying.",
              ],
              [
                "CGST and SGST as 9% twice",
                "The intuitive formula, and it can land a paisa short of computing 18% once and halving the money.",
              ],
              [
                "Western digit grouping",
                "Excel's default number format gives 1,234,567.50. Indian invoices need 12,34,567.50, and the difference is misread as a factor of ten.",
              ],
              [
                "A missing rupee sign in the PDF",
                "Depending on the export path and font, ₹ can become a box or fall back to Rs. — on the document that is asking for money.",
              ],
            ],
          },
        ],
      },
      {
        heading: "What a spreadsheet is actually good at",
        blocks: [
          {
            kind: "p",
            text: "This is not an argument against spreadsheets. It is an argument about which job to give one.",
          },
          {
            kind: "p",
            text: "A spreadsheet is an excellent **register**: one row per invoice, with number, date, client, amount, tax, due date and paid date. Sorted by number it shows gaps and duplicates instantly, and a paid-date column gives you an ageing view that a folder of PDFs never will.",
          },
          {
            kind: "p",
            text: "It is a poor **document generator**, because the arithmetic lives in formulas that get copied between files and are never re-checked, and because the PDF export is the least controlled part of Excel.",
          },
        ],
      },
      {
        heading: "If you are staying with Excel",
        blocks: [
          {
            kind: "steps",
            items: [
              "Set the number format to Indian grouping — `[>9999999]##\\,##\\,##\\,##0.00;[>99999]##\\,##\\,##0.00;##,##0.00` — rather than the default.",
              "Compute the full tax first, then split it: SGST = total tax − CGST, so the two always sum exactly.",
              "Put the discount row above the tax row, and reference the discounted subtotal in the tax formula.",
              "Keep the invoice number in a register sheet, not typed into the template, and increment it there.",
              "Export to PDF and open the result — check the rupee sign rendered before sending.",
              "Lock the formula cells so next month's edit cannot overwrite them.",
            ],
          },
          {
            kind: "note",
            text: "Step five is worth doing every time rather than once. The font used in a PDF export can change when a file moves between machines, which is exactly when the rupee sign disappears without anyone noticing.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is Excel good for making invoices?",
        a: "It works, but it reliably produces five errors: duplicated numbers from copied files, discounts applied after tax, CGST and SGST computed as 9% twice, Western digit grouping, and a rupee sign that disappears on export. A spreadsheet is far better used as the register of what you have issued than as the tool that produces the document.",
      },
      {
        q: "How do I get Indian number formatting in Excel?",
        a: "Excel's default grouping is Western, so it needs a custom number format with conditional sections to place the separators for lakh and crore. Without it you get 1,234,567.50 where an Indian invoice needs 12,34,567.50 — a difference a finance team reading at speed misreads by a factor of ten.",
      },
      {
        q: "Why does the rupee symbol not show in my PDF?",
        a: "The font used at export has no glyph for ₹, so it drops to a box or a fallback. It is font-dependent, which means it can start happening when the file moves to another machine. Open every exported PDF and check before sending.",
      },
      {
        q: "Should I switch from Excel to an invoice generator?",
        a: "For producing the document, yes — the arithmetic and formatting are then handled once and correctly rather than living in formulas that get copied between files. Keep the spreadsheet as your register of issued invoices, which is the job it does better than a folder of PDFs.",
      },
    ],
    related: ["invoicing-software-vs-free-invoice-generator", "rounding-off-on-invoices", "how-to-number-invoices-across-clients"],
    guide: "gst-invoice-format",
  },

  {
    slug: "what-to-do-when-a-client-refuses-to-pay",
    title: "What to Do When a Client Refuses to Pay",
    h1: "When a client refuses to pay",
    description:
      "The escalation path from a stalled invoice to formal recourse in India, and the evidence worth having before you need any of it.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 7,
    lead: "There is a real ladder here, and most people jump from polite emails straight to giving up, without touching any of the rungs between.",
    answer:
      "Work the ladder in order: establish in writing whether the refusal is a dispute or a delay, stop further work, send a formal demand quoting the invoice and the agreement, then escalate to a legal notice through a lawyer. In India a registered MSME supplier can also refer a delayed payment to the MSME Samadhaan facility, and small commercial claims can go to the appropriate court. What determines the outcome is almost always the evidence you gathered at the start — the written scope, the accepted quotation and the delivery confirmation — not the strength of the final letter.",
    keywords: [
      "client not paying invoice india",
      "legal action for unpaid invoice",
      "msme samadhaan",
      "recover unpaid invoice india",
      "legal notice for payment",
    ],
    sections: [
      {
        heading: "First, find out which problem you have",
        blocks: [
          {
            kind: "p",
            text: "A refusal and a delay look identical from outside and need opposite responses. Get the client to say, in writing, which it is.",
          },
          {
            kind: "note",
            text: "Could you confirm whether there is an issue with the work or the invoice itself, or whether this is a scheduling matter at your end? If there's something to resolve, I'd rather deal with it now.",
          },
          {
            kind: "p",
            text: "A genuine dispute is often fixable and sometimes reasonable. A stall dressed as a dispute usually collapses the moment it has to be stated specifically in writing. Either way you now have an answer you can act on rather than silence you can only guess at.",
          },
        ],
      },
      {
        heading: "The ladder",
        blocks: [
          {
            kind: "steps",
            items: [
              "**Stop work.** Continuing to deliver while unpaid increases your exposure and removes the only leverage you have.",
              "**Put the position in writing.** Invoice number, amount, date due, what was delivered and when, and what you are asking for.",
              "**Send a formal demand.** Not a reminder — a letter referencing the agreement, the invoice and a deadline, sent to a named person and by post as well as email.",
              "**Legal notice through a lawyer.** In India this alone resolves a significant share of cases, because it changes who inside the client's organisation is now dealing with it.",
              "**MSME Samadhaan**, if you are a registered MSME supplier — a facility for referring delayed payments from buyers.",
              "**Court.** Small commercial claims have simpler routes than people expect, though the time cost is real.",
            ],
          },
          {
            kind: "note",
            text: "This is a description of the routes that exist, not legal advice, and it is not a substitute for a lawyer on your specific facts. Which route fits depends on the amounts, your registration and what your agreement says.",
          },
        ],
      },
      {
        heading: "MSME registration is worth having in advance",
        blocks: [
          {
            kind: "p",
            text: "The MSMED framework provides for payment to registered micro and small enterprises within a period tied to the agreed date, and where there is no agreement, a shorter statutory period. Delayed payment can attract interest, and there is a dedicated facility — MSME Samadhaan — for referring such cases.",
          },
          {
            kind: "p",
            text: "The practical point is that Udyam registration is free and takes minutes, and it is only useful if you already have it when the problem arises. Registering after a client has stopped paying is a much weaker position than registering when you started trading.",
          },
          {
            kind: "note",
            text: "The specific periods, the interest provisions and how they interact with income tax deductibility for your buyer have changed in recent years. Confirm the current position with your accountant — the point of this section is that the route exists and that registration should be done in advance.",
          },
        ],
      },
      {
        heading: "The evidence that decides it",
        blocks: [
          {
            kind: "p",
            text: "Every one of these routes turns on the same handful of documents, and they are all created at the beginning of an engagement rather than at the end:",
          },
          {
            kind: "list",
            items: [
              "**The accepted quotation.** An email saying “approved” against a quotation number settles more disputes than any contract clause.",
              "**The scope in writing**, including what was excluded.",
              "**Delivery confirmation** — the message where you handed the work over and they acknowledged it.",
              "**The invoice and its submission record**, including the portal acknowledgement where there was one.",
              "**The follow-up thread**, unedited, showing what was said and when.",
              "**Any admission of the debt** — “we'll process it next month” is worth keeping.",
            ],
          },
          {
            kind: "p",
            text: "If you are reading this because a client has stopped paying, gather those now, before the correspondence goes cold and while people still reply. If you are reading it out of interest, the lesson is that the file you would need is built during the work, not after it.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What can I do if a client refuses to pay an invoice in India?",
        a: "Establish in writing whether it is a dispute or a delay, stop further work, send a formal demand quoting the invoice and the agreement, then escalate to a legal notice through a lawyer. A registered MSME supplier can also refer delayed payment to the MSME Samadhaan facility, and small commercial claims can go to court.",
      },
      {
        q: "Does a legal notice actually work?",
        a: "In India it resolves a meaningful share of cases, largely because it moves the matter to a different person inside the client's organisation — typically from an accounts clerk to someone with authority and a reason to settle. It is a normal commercial step rather than an aggressive one.",
      },
      {
        q: "What is MSME Samadhaan?",
        a: "A facility through which a registered micro or small enterprise can refer a delayed payment from a buyer. The value of it depends on being registered under Udyam already — registration is free and quick, but doing it after a client has stopped paying is a far weaker position than having it from the start.",
      },
      {
        q: "What evidence do I need to recover an unpaid invoice?",
        a: "The accepted quotation, the scope in writing including exclusions, confirmation that the work was delivered and acknowledged, the invoice and its submission record, the unedited follow-up thread, and any message admitting the debt. All of it is created during the engagement, which is why the file has to be built before you need it.",
      },
      {
        q: "Should I keep working while an invoice is unpaid?",
        a: "No. Continuing to deliver increases your exposure and gives away the only leverage you have. Say plainly that work is paused pending payment, and mean it — an unenforced pause teaches the client that your deadlines are decorative.",
      },
    ],
    related: ["msme-payment-rules-for-suppliers", "payment-reminder-email-templates", "invoice-terms-and-conditions"],
    guide: "how-to-make-an-invoice",
  },

  {
    slug: "msme-payment-rules-for-suppliers",
    title: "MSME Payment Rules — What Suppliers Should Know",
    h1: "MSME payment rules for suppliers",
    description:
      "Why Udyam registration changes how quickly you have to be paid, what to put on your invoice once you have it, and why buyers now care.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "Registration is free, takes minutes, and materially changes your position when a large buyer decides to pay you late.",
    answer:
      "A registered micro or small enterprise is entitled under the MSMED Act to payment within the period agreed with the buyer, subject to a statutory maximum, and within a shorter period where nothing was agreed. Delayed payment can attract interest, and there is a dedicated referral facility. Since the introduction of a related income-tax provision, buyers also face a deductibility consequence for paying registered MSME suppliers late — which is why many now ask suppliers for their Udyam number. State your Udyam registration number on your invoices; it is the thing that makes the protection visible to the person processing payment.",
    keywords: [
      "msme payment rules",
      "udyam registration benefits",
      "msme 45 days payment",
      "msme payment act india",
      "udyam number on invoice",
    ],
    sections: [
      {
        heading: "What registration gets you",
        blocks: [
          {
            kind: "list",
            items: [
              "**A statutory payment period.** Payment is due within the period agreed with the buyer, subject to a maximum set by the Act, and within a shorter period where nothing has been agreed in writing.",
              "**Interest on delayed payment**, provided for by the Act rather than requiring a clause in your contract.",
              "**Access to MSME Samadhaan**, a referral facility for delayed payments.",
              "**A buyer-side consequence.** A related income-tax provision affects the deductibility of amounts owed to registered MSME suppliers that are not paid within the applicable period.",
            ],
          },
          {
            kind: "note",
            text: "The specific periods, the interest rate and the tax provision's mechanics have been amended in recent years and interact with each other. This describes what the framework does; confirm the current figures and how they apply to you with your accountant.",
          },
        ],
      },
      {
        heading: "Why buyers started asking",
        blocks: [
          {
            kind: "p",
            text: "For years MSME status was something suppliers cared about and buyers ignored. That changed when the tax consequence arrived: a buyer who does not pay a registered MSME supplier within the applicable period now has a deductibility problem of their own.",
          },
          {
            kind: "p",
            text: "The practical effect is that your Udyam number has become a field a finance team actively wants. It is no longer a claim you are making about yourself — it is information they need for their own filing, which is a considerably stronger position to negotiate from.",
          },
        ],
      },
      {
        heading: "What to do",
        blocks: [
          {
            kind: "steps",
            items: [
              "Register on the Udyam portal. It is free, online, and takes minutes.",
              "Put the Udyam registration number on your invoices, near your GSTIN.",
              "State it during onboarding with any new client, not only on the invoice.",
              "Agree payment terms in writing — where nothing is agreed, a shorter statutory period applies by default.",
              "Where a payment goes badly overdue, take the position to your accountant and, if needed, a lawyer.",
            ],
          },
          {
            kind: "p",
            text: "The generator has no dedicated field for a Udyam number, and it does not need one — put it in the notes alongside your other registration details, or in the line beneath your GSTIN. What matters is that it appears on the face of the document.",
          },
        ],
      },
      {
        heading: "The limits",
        blocks: [
          {
            kind: "p",
            text: "It is worth being honest about what this does not do. It does not make a buyer pay on time, it does not help if you are not registered before the problem arises, and enforcing interest against a client you want to keep working with is a commercial decision rather than a legal one.",
          },
          {
            kind: "p",
            text: "What it does is change the conversation. A late payment stops being a favour you are asking for and becomes a position with a framework behind it — and for most disputes, that shift is what actually moves the money.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the MSME payment rule?",
        a: "Under the MSMED Act, a registered micro or small enterprise is entitled to payment within the period agreed with the buyer, subject to a statutory maximum, and within a shorter period where nothing was agreed in writing. Delayed payment can attract interest. Confirm the current periods with your accountant, as they interact with a related tax provision that has been amended recently.",
      },
      {
        q: "Do I need Udyam registration to benefit?",
        a: "Yes, and you need it before the problem arises. Registration is free and takes minutes on the Udyam portal. Registering after a client has already stopped paying is a much weaker position than having been registered throughout the engagement.",
      },
      {
        q: "Why do clients ask for my Udyam number now?",
        a: "Because a related income-tax provision affects the deductibility of amounts owed to registered MSME suppliers that are not paid within the applicable period. Your registration status is now information the buyer needs for their own filing, which is why it went from something you claimed to something they request.",
      },
      {
        q: "Where do I put the Udyam number on an invoice?",
        a: "Near your GSTIN, or in the notes alongside your other registration details. There is no prescribed position — what matters is that it appears on the face of the document, so the person processing payment can see that the MSME timelines apply.",
      },
    ],
    related: ["what-to-do-when-a-client-refuses-to-pay", "how-to-get-invoices-paid-faster", "can-i-invoice-without-a-company"],
    guide: "freelance-invoice-format",
  },
];
