import { PARENT_URL, PDF_URL } from "@/lib/seo";
import { Reveal } from "./Reveal";
import Magnetic from "./Magnetic";
import TransitionLink from "./TransitionLink";
import Wordmark from "./Wordmark";

const COLUMNS = [
  {
    heading: "Generator",
    links: [
      { label: "Create an invoice", href: "/#builder" },
      { label: "How it works", href: "/#how" },
      { label: "Questions", href: "/#faq" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { label: "GST invoice format", href: "/gst-invoice-format" },
      { label: "What to put on an invoice", href: "/guide" },
    ],
  },
  {
    heading: "More tools",
    links: [
      { label: "PDF tools", href: PDF_URL },
      { label: "Merge PDF", href: `${PDF_URL}/merge-pdf` },
      { label: "Compress PDF", href: `${PDF_URL}/compress-pdf` },
    ],
  },
  {
    heading: "Advorize",
    links: [
      { label: "Web & app development", href: `${PARENT_URL}/services` },
      { label: "Projects", href: `${PARENT_URL}/projects` },
      { label: "Contact", href: `${PARENT_URL}/contact` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="shell pt-24 pb-10 md:pt-36">
      {/* The same oversized closing CTA the main site ends on. */}
      <h2 className="display text-[13vw] leading-[0.95] md:text-[8vw]">
        <Reveal>Need one built?</Reveal>
      </h2>

      <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <Magnetic className="inline-block">
          <a
            href="mailto:sales@advorize.com"
            data-cursor="hover"
            className="display inline-block border-b border-line pb-2 text-2xl transition-colors hover:border-accent hover:text-accent md:text-4xl"
          >
            sales@advorize.com
          </a>
        </Magnetic>

        <Magnetic>
          <a
            href={`${PARENT_URL}/contact`}
            data-cursor="hover"
            className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-accent text-center text-sm font-medium text-white md:h-40 md:w-40"
          >
            Start a
            <br />
            project
          </a>
        </Magnetic>
      </div>

      <div className="mt-24 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {COLUMNS.map((column) => (
          <div key={column.heading}>
            <div className="font-medium">{column.heading}</div>
            <ul className="mt-2 space-y-1">
              {column.links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      data-cursor="hover"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <TransitionLink
                      href={link.href}
                      data-cursor="hover"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </TransitionLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <Wordmark className="h-5 text-muted" />
        <p className="max-w-md text-sm text-muted">
          Your invoice is built in this browser. Nothing you type — client
          details, bank details, amounts — is ever sent to us.
        </p>
        <div className="flex gap-6 text-sm text-muted">
          <a href={PARENT_URL} data-cursor="hover" className="underline-grow">
            Advorize.com
          </a>
          <a
            href={`${PARENT_URL}/privacy`}
            data-cursor="hover"
            className="underline-grow"
          >
            Privacy
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
