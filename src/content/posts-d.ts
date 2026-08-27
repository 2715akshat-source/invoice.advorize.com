import type { Post } from "./post-types";

/* GST mechanics — the fields on an invoice people get wrong most often. */
export const postsD: Post[] = [
  {
    slug: "what-is-place-of-supply",
    title: "What Is Place of Supply, and Why It Decides Your GST",
    h1: "What is place of supply?",
    description:
      "The single field that decides whether you charge CGST and SGST or IGST — how to determine it, and what happens when you get it wrong.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 6,
    lead: "It is one line on the invoice, it is frequently left blank, and it silently determines which government receives your tax.",
    answer:
      "Place of supply is the location where a supply is treated as being made, and it decides whether GST splits into CGST and SGST or is charged as a single IGST line. If the place of supply is in your own state, the supply is intra-state and the rate splits in half. If it is in another state or union territory, the supply is inter-state and the whole rate is charged as IGST. It is determined by rules — generally the recipient's registered location for B2B services, and the delivery destination for goods — not by where you are sitting when you raise the invoice.",
    keywords: [
      "place of supply gst",
      "place of supply meaning",
      "cgst sgst or igst",
      "how to determine place of supply",
      "inter state vs intra state supply",
    ],
    sections: [
      {
        heading: "The rule in one table",
        blocks: [
          {
            kind: "table",
            head: ["Place of supply is", "Supply is", "You charge"],
            rows: [
              ["In your own state", "Intra-state", "CGST + SGST, half each"],
              ["In another state or UT", "Inter-state", "IGST, one line"],
              ["Outside India", "Export", "Zero-rated, with an endorsement"],
            ],
          },
          {
            kind: "p",
            text: "The customer pays the same total in the first two cases. What changes is which government receives it, which is why the field exists and why an error has to be corrected rather than ignored.",
          },
        ],
      },
      {
        heading: "How it is actually determined",
        blocks: [
          {
            kind: "p",
            text: "The two cases that cover most invoices:",
          },
          {
            kind: "fields",
            rows: [
              [
                "Goods",
                "Generally where the goods are delivered — the destination, not where they were despatched from.",
              ],
              [
                "Services, B2B",
                "Generally the recipient's registered location. If your client is registered in Karnataka, that is normally the place of supply even if the work was performed in Kolkata.",
              ],
            ],
          },
          {
            kind: "p",
            text: "There is then a long list of specific situations with their own rules — immovable property, events, transport, telecom, restaurant and accommodation services among them — where the answer is the location of the property, the venue or the performance rather than the recipient's registration.",
          },
          {
            kind: "note",
            text: "If your work touches any of those categories, the general rule above is the wrong one to rely on. This page describes the shape of the concept so the field on your invoice means something to you — it is not a determination of your position, which is your accountant's.",
          },
        ],
      },
      {
        heading: "The mistake almost everyone makes once",
        blocks: [
          {
            kind: "p",
            text: "Charging CGST and SGST because the client is physically nearby, or because you always have, when their **registration** is in another state. A Kolkata studio doing work for a client whose GSTIN is Karnataka is normally making an inter-state supply, however local the meetings felt.",
          },
          {
            kind: "p",
            text: "It matters because your customer's credit follows the tax you charged. Charge the wrong heads and they cannot claim what you collected, so the invoice comes back — usually weeks later, from their accountant rather than your contact.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if a supply is inter-state or intra-state?",
        a: "Compare the place of supply with your own state. Same state means intra-state, and the rate splits into CGST and SGST. A different state or union territory means inter-state, and the whole rate is charged as a single IGST line. For B2B services the place of supply is generally the recipient's registered location, not where the work was done.",
      },
      {
        q: "Is place of supply the same as the delivery address?",
        a: "For goods it usually is — the destination where they are delivered. For services it generally is not; the default for a registered recipient is their registered location. That gap is where most errors come from, because the delivery address on the invoice and the place of supply can legitimately be different states.",
      },
      {
        q: "What happens if I charge CGST and SGST instead of IGST?",
        a: "Your customer cannot claim credit for tax charged under the wrong heads, so the invoice is usually returned for correction. It is fixed by issuing a credit note against the original and raising a fresh invoice with the correct split rather than by editing the original document.",
      },
      {
        q: "Does place of supply need to be printed on the invoice?",
        a: "Yes — it is one of the particulars a tax invoice must carry, and it is among the most commonly omitted. It is the field that justifies the tax split you have applied, so leaving it off removes the reader's ability to check that the split is right.",
      },
    ],
    related: ["hsn-and-sac-codes-on-invoices", "reverse-charge-on-invoices", "invoice-mistakes-that-delay-payment"],
    guide: "gst-invoice-format",
  },

  {
    slug: "hsn-and-sac-codes-on-invoices",
    title: "Do I Need HSN or SAC Codes on My Invoice?",
    h1: "HSN and SAC codes on invoices",
    description:
      "What the codes are, who has to show them and to how many digits, and where to put them when your invoice template has no dedicated field.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "The requirement scales with your turnover, which is why no template can decide it for you.",
    answer:
      "HSN codes classify goods and SAC codes classify services, and a GST tax invoice generally has to carry the relevant code for each line. How many digits you must show is linked to your aggregate annual turnover, with smaller taxpayers required to show fewer and relief available in some B2C situations. Because the requirement depends on your own turnover and registration rather than on the transaction, no invoice template can determine it for you — confirm your digit requirement with your accountant and include the code in the line description.",
    keywords: [
      "hsn code on invoice",
      "sac code for services",
      "hsn code mandatory gst",
      "how many digits hsn code",
      "hsn sac difference",
    ],
    sections: [
      {
        heading: "What they are",
        blocks: [
          {
            kind: "fields",
            rows: [
              [
                "HSN",
                "Harmonised System of Nomenclature — an international classification for goods, adopted into GST.",
              ],
              [
                "SAC",
                "Services Accounting Code — the equivalent classification for services.",
              ],
            ],
          },
          {
            kind: "p",
            text: "Both do the same job: they tell the tax system what was supplied in a way that does not depend on how you phrased the description. “Website design and build” is not a category; a SAC code is.",
          },
        ],
      },
      {
        heading: "How many digits",
        blocks: [
          {
            kind: "p",
            text: "The number of digits required is tied to your **aggregate annual turnover**, with a lower requirement for smaller taxpayers and some relief for B2C supplies. The thresholds have been revised more than once since GST began.",
          },
          {
            kind: "note",
            text: "Deliberately no figures here. This is a turnover-linked requirement that has changed several times, and a stale number on a page like this is worse than none — a supplier who prints four digits when six are required has a defective invoice. Ask your accountant what applies to your registration this year.",
          },
        ],
      },
      {
        heading: "Where to put it",
        blocks: [
          {
            kind: "p",
            text: "Most simple invoice layouts have no dedicated HSN column, and adding one for a three-line invoice wastes width. The practical answer is the detail line beneath each item:",
          },
          {
            kind: "list",
            items: [
              "**Description:** Website design and build",
              "**Detail:** SAC 998314 · 12 pages, CMS, staging and launch",
            ],
          },
            {
            kind: "p",
            text: "That satisfies the requirement that the code appear against the line, keeps the table readable, and means the description still tells a human what they are paying for. The generator's second line on each item exists for exactly this kind of content.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is an HSN code mandatory on every invoice?",
        a: "A tax invoice generally has to carry the classification code for each line, but the number of digits required is linked to your aggregate annual turnover, and there is relief in some B2C situations. Because it depends on your registration rather than the transaction, confirm your specific requirement with your accountant.",
      },
      {
        q: "What is the difference between HSN and SAC?",
        a: "HSN classifies goods and SAC classifies services. They are two halves of the same classification system — if you supply services you will be quoting SAC codes, and if you supply goods, HSN. A business doing both quotes each against the relevant lines.",
      },
      {
        q: "Where do I find the right HSN or SAC code?",
        a: "The official rate and classification schedules published on the GST portal are the source, and your accountant will normally have already determined the codes for what you supply. Do not guess one from a search result — the code determines the rate, so an approximate match is a wrong rate.",
      },
      {
        q: "My invoice template has no HSN column. What do I do?",
        a: "Put the code in the detail line beneath each item — “SAC 998314 · 12 pages, CMS, staging and launch”. The requirement is that the code appears against the line, not that it occupies its own column, and this keeps a short invoice readable.",
      },
    ],
    related: ["what-is-place-of-supply", "reverse-charge-on-invoices", "how-to-show-discounts-on-an-invoice"],
    guide: "gst-invoice-format",
  },

  {
    slug: "reverse-charge-on-invoices",
    title: "What Reverse Charge Means on an Invoice",
    h1: "Reverse charge on invoices",
    description:
      "When the recipient pays the tax instead of you, what your invoice must say, and why the field has to be filled in either way.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "Normally you collect the tax and pay it over. Under reverse charge your customer does — and the invoice has to say so on its face.",
    answer:
      "Reverse charge means the recipient of a supply is liable to pay the GST directly to the government instead of paying it to the supplier. It applies to specified categories of supply and to certain supplies from unregistered persons. When it applies, the supplier does not collect tax on the invoice, and the invoice must state that tax is payable on a reverse-charge basis. A tax invoice has to declare its reverse-charge position either way — stating “No” is part of the required particulars, not an optional extra.",
    keywords: [
      "reverse charge mechanism gst",
      "rcm on invoice",
      "reverse charge invoice format",
      "what is reverse charge",
    ],
    sections: [
      {
        heading: "The normal case, and the reversed one",
        blocks: [
          {
            kind: "table",
            head: ["", "Forward charge", "Reverse charge"],
            rows: [
              ["Who collects the tax", "You, on the invoice", "Nobody — you don't charge it"],
              ["Who pays the government", "You", "Your customer"],
              ["Invoice shows tax", "Yes, itemised", "No tax charged"],
              ["Invoice must state", "Reverse charge: No", "Reverse charge: Yes"],
            ],
          },
          {
            kind: "p",
            text: "The declaration is a required particular of a tax invoice. An invoice that simply omits the field has not answered a question the reader needs answered, which is why the safest habit is to state it explicitly in the notes on every invoice you raise.",
          },
        ],
      },
      {
        heading: "When it applies",
        blocks: [
          {
            kind: "p",
            text: "Reverse charge is not something you elect into. It applies where the law says it applies, in two broad situations:",
          },
          {
            kind: "list",
            items: [
              "**Notified categories of supply** — a specific list of goods and services where the liability is placed on the recipient, updated by notification.",
              "**Certain supplies from unregistered persons** to registered ones, in the circumstances the rules specify.",
            ],
          },
          {
            kind: "note",
            text: "The notified list changes, and whether a given supply is on it is a question of classification rather than of judgement. If you think reverse charge might apply to something you supply or receive, that is a question for your accountant before you raise the invoice, not after.",
          },
        ],
      },
      {
        heading: "What it means practically",
        blocks: [
          {
            kind: "p",
            text: "If you are the **supplier** under reverse charge, you raise a tax invoice showing the taxable value with no tax added, and you state that tax is payable on a reverse-charge basis. You are not out of pocket; you simply never handled the tax.",
          },
          {
            kind: "p",
            text: "If you are the **recipient**, you pay the tax directly and, subject to the ordinary conditions, may be able to claim it as credit. The obligation sits with you regardless of what the supplier's invoice says, which is the part that catches people — a supplier's omission does not transfer the liability back to them.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What does reverse charge mean on an invoice?",
        a: "It means the recipient, not the supplier, is liable to pay the GST directly to the government. The supplier raises the invoice without charging tax and states on it that tax is payable on a reverse-charge basis. It applies only where the law places the liability that way — it is not something either party can choose.",
      },
      {
        q: "Do I have to mention reverse charge if it does not apply?",
        a: "Yes. Whether tax is payable on a reverse-charge basis is one of the particulars a tax invoice must carry, so the answer “no” still has to appear. The habit worth forming is stating it explicitly on every invoice rather than treating a blank as a negative.",
      },
      {
        q: "Can I claim input tax credit on reverse charge?",
        a: "A recipient who has paid tax under reverse charge may generally claim it as input tax credit subject to the ordinary conditions for claiming credit. The mechanics of when and how depend on your returns, so confirm the treatment with your accountant rather than assuming it nets to zero automatically.",
      },
      {
        q: "How do I show reverse charge in this generator?",
        a: "Set the tax mode to none so no tax is added, and put the declaration in the notes field — “Tax payable on reverse charge basis: Yes”. It then prints on the face of the invoice, which is where the requirement is that it appears.",
      },
    ],
    related: ["what-is-place-of-supply", "hsn-and-sac-codes-on-invoices", "gst-registration-for-freelancers-india"],
    guide: "gst-invoice-format",
  },

  {
    slug: "rounding-off-on-invoices",
    title: "How to Round Off an Invoice Total",
    h1: "Rounding off an invoice total",
    description:
      "Why invoice totals are rounded to the nearest rupee, where the adjustment should appear, and the rounding error that quietly breaks reconciliation.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 4,
    lead: "A one-paisa difference is still a difference, and it is the kind that surfaces during reconciliation rather than during invoicing.",
    answer:
      "Invoice totals are conventionally rounded to the nearest rupee, and the adjustment should be shown as its own line — a visible round-off of plus or minus a few paise — rather than silently absorbed into a line item or the tax. Round only once, at the final payable, and never round the individual tax components separately: halving a rounded GST figure into CGST and SGST and rounding each half can leave the two halves a paisa short of the whole.",
    keywords: [
      "round off in invoice",
      "invoice rounding rules gst",
      "round off amount meaning",
      "invoice total rounding",
    ],
    sections: [
      {
        heading: "Round once, at the end",
        blocks: [
          {
            kind: "p",
            text: "The order matters more than the arithmetic. Compute the line totals, the discount, the tax and any shipping at full precision, and round only the final payable figure.",
          },
          {
            kind: "steps",
            items: [
              "Total the lines at full precision.",
              "Apply the discount.",
              "Compute tax on the discounted value.",
              "Add shipping or other charges.",
              "Round the resulting total to the nearest rupee, and show the difference as a round-off line.",
            ],
          },
          {
            kind: "p",
            text: "Rounding at each intermediate step instead compounds the error, and on a long invoice the accumulated drift can exceed a rupee — at which point the total no longer equals the sum of its own parts, which is the one thing an invoice must never do.",
          },
        ],
      },
      {
        heading: "Show the adjustment",
        blocks: [
          {
            kind: "p",
            text: "The round-off should be visible: a line reading **Round off  + ₹0.40** above the total. It costs one row and it means the person checking your arithmetic can follow it.",
          },
          {
            kind: "p",
            text: "The alternative — quietly adjusting a line item or the tax figure so the total comes out round — makes the invoice internally inconsistent. A finance team recomputing the tax from the taxable value will get a different number to the one you printed, and they will ask.",
          },
        ],
      },
      {
        heading: "The CGST/SGST halving trap",
        blocks: [
          {
            kind: "p",
            text: "This one is specific and catches good software. To split 18% GST into CGST and SGST, compute the **whole** tax, then halve the money. Do not compute 9% twice.",
          },
          {
            kind: "table",
            head: ["Approach", "On ₹1,850.05 taxable", "Result"],
            rows: [
              ["9% twice, each rounded", "166.50 + 166.50", "333.00"],
              ["18% once, then halved", "333.01 → 166.51 + 166.50", "333.01"],
            ],
          },
          {
            kind: "p",
            text: "A paisa is trivial on one invoice and is not trivial across a year of them, because the difference shows up as a mismatch between what you charged and what your return computes. The generator halves the money rather than the rate for this reason.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Should I round off the invoice total?",
        a: "Rounding the final payable to the nearest rupee is the normal convention on Indian invoices and is what most recipients expect. Show the adjustment as its own round-off line rather than absorbing it, so the total remains the sum of the parts above it.",
      },
      {
        q: "Where should the round-off appear on an invoice?",
        a: "As a separate line immediately above the total, showing the sign and the amount — “Round off + ₹0.40”. Hiding it inside a line item or the tax figure makes the invoice internally inconsistent, and anyone recomputing the tax will get a different answer to the one printed.",
      },
      {
        q: "Should I round the tax amount or the total?",
        a: "The total, once, at the end. Rounding intermediate values compounds the error, and on a long invoice the drift can exceed a rupee — at which point the total no longer equals the sum of its own lines.",
      },
      {
        q: "Why do my CGST and SGST not add up to the total GST?",
        a: "Almost certainly because the rate was halved rather than the money. Computing 9% twice and rounding each result can land a paisa short of computing 18% once. Compute the whole tax, then split the amount, giving the remainder to one half.",
      },
    ],
    related: ["how-to-show-discounts-on-an-invoice", "what-is-place-of-supply", "invoice-mistakes-that-delay-payment"],
    guide: "gst-invoice-format",
  },

  {
    slug: "how-to-show-discounts-on-an-invoice",
    title: "How to Show a Discount on an Invoice",
    h1: "How to show a discount on an invoice",
    description:
      "Line-level versus invoice-level discounts, why the order matters for tax, and the discount that has to be agreed before the supply to count.",
    date: "2026-08-28",
    updated: "2026-08-28",
    minutes: 5,
    lead: "Where you apply the discount changes the tax. Applying it after tax is the most common way to charge a customer for money they are not paying.",
    answer:
      "A discount must be applied before tax is calculated, not after — tax is charged on the discounted taxable value. Show it as its own line beneath the subtotal so the taxable value is visible and checkable. Discounts given at or before the time of supply, and recorded on the invoice, reduce the taxable value directly. A discount agreed after the supply generally requires a credit note and has conditions attached, so it cannot simply be applied to a later invoice.",
    keywords: [
      "discount on invoice gst",
      "how to apply discount invoice",
      "trade discount vs cash discount",
      "discount before or after tax",
    ],
    sections: [
      {
        heading: "The order of operations",
        blocks: [
          {
            kind: "p",
            text: "Tax is charged on what the customer actually pays for the supply, so the discount comes first:",
          },
          {
            kind: "steps",
            items: [
              "Subtotal the lines.",
              "Subtract the discount.",
              "That figure is the taxable value — show it.",
              "Compute tax on it.",
              "Add tax to reach the total.",
            ],
          },
          {
            kind: "note",
            text: "Applying a discount after tax charges the customer tax on money nobody is paying. It is usually an accident of a spreadsheet's column order, and it is the most common discount error on a hand-made invoice.",
          },
        ],
      },
      {
        heading: "Line-level or invoice-level",
        blocks: [
          {
            kind: "table",
            head: ["", "Line-level", "Invoice-level"],
            rows: [
              ["Applies to", "One item", "The whole subtotal"],
              ["Use when", "One item is discounted", "A blanket reduction is agreed"],
              ["Shown as", "A reduced rate on that line", "Its own line under the subtotal"],
              [
                "With mixed tax rates",
                "Simple — the line keeps its own rate",
                "Must be apportioned pro rata across the lines",
              ],
            ],
          },
          {
            kind: "p",
            text: "That last row is the subtle one. An invoice-level discount on an invoice where different lines carry different tax rates has to be spread across those lines in proportion before their rates are applied — otherwise the tax is computed on a value nobody is being charged. The generator apportions it automatically in per-item tax mode.",
          },
        ],
      },
      {
        heading: "Before or after the supply",
        blocks: [
          {
            kind: "p",
            text: "The timing determines whether it can be taken off the invoice at all.",
          },
          {
            kind: "list",
            items: [
              "**Agreed at or before the time of supply and recorded on the invoice** — reduces the taxable value directly. This is the ordinary case and the one the generator handles.",
              "**Agreed after the supply** — generally requires a credit note against the original invoice, and there are conditions attached to whether it reduces the tax. It is not something to net off against a future invoice.",
            ],
          },
          {
            kind: "note",
            text: "The post-supply case has conditions that depend on what was agreed and when, and on the recipient's credit position. If you are negotiating a retrospective discount, raise it with your accountant before you issue anything.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Should a discount be applied before or after GST?",
        a: "Before. Tax is charged on the discounted taxable value, because that is what the customer is actually paying for the supply. Applying the discount after tax charges them tax on money nobody is paying, and it is the single most common discount error on a manually prepared invoice.",
      },
      {
        q: "How do I show a discount on an invoice?",
        a: "As its own line beneath the subtotal, with the discounted figure shown as the taxable value before tax is added. Making it visible lets the recipient check the arithmetic; folding it into the line rates hides the basis on which tax was computed.",
      },
      {
        q: "What happens with a discount when lines have different tax rates?",
        a: "An invoice-level discount has to be apportioned across the lines in proportion to their values before each line's own rate is applied. Otherwise tax is calculated on amounts that do not reflect what is being charged. In per-item tax mode the generator does this apportionment for you.",
      },
      {
        q: "Can I give a discount after I have already invoiced?",
        a: "Generally through a credit note against the original invoice rather than by adjusting a later one, and there are conditions on whether a post-supply discount reduces the tax. Because it depends on what was agreed and when, take it to your accountant before issuing the document.",
      },
    ],
    related: ["rounding-off-on-invoices", "what-is-place-of-supply", "how-to-cancel-an-invoice"],
    guide: "credit-note-and-debit-note-format",
  },
];
