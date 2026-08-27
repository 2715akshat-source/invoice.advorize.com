"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";
import TransitionLink from "./TransitionLink";
import ThemeToggle from "./ThemeToggle";
import Wordmark from "./Wordmark";
import { PARENT_URL, PDF_URL } from "@/lib/seo";

const LINKS = [
  { label: "Generator", href: "/#builder" },
  { label: "How it works", href: "/#how" },
  { label: "Guides", href: "/guides" },
  { label: "PDF tools", href: PDF_URL },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  /* Hide the bar on the way down, bring it back on the way up. */
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200);
  });

  /*
   * The header is fixed, so it does not occupy space — anything else that
   * wants to stick below it has to be told how much room to leave. That
   * distance is published as `--nav-offset` on <html> rather than hard-coded
   * where it is used, because it changes twice: with the viewport, since the
   * bar is shorter on small screens, and with the hide-on-scroll state. When
   * the header slides away the offset goes to zero and the builder's toolbar
   * rises to meet the top of the window, so the two move as one strip
   * instead of the toolbar disappearing underneath a bar that is still
   * painted over it.
   */
  useEffect(() => {
    const el = bar.current;
    if (!el) return;

    const publish = () =>
      document.documentElement.style.setProperty(
        "--nav-offset",
        `${hidden ? 0 : el.offsetHeight}px`,
      );

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => observer.disconnect();
  }, [hidden]);

  return (
    <motion.header
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        ref={bar}
        className="shell flex items-center justify-between bg-bg/80 py-4 backdrop-blur-md"
      >
        <TransitionLink
          href="/"
          data-cursor="hover"
          className="flex items-center gap-3"
          aria-label="Advorize Invoice Generator"
        >
          <Wordmark className="h-5 md:h-[22px]" />
          <span className="hidden border-l border-line pl-3 text-[13px] text-muted sm:block">
            Invoice Generator
          </span>
        </TransitionLink>

        <nav className="hidden items-center gap-8 text-[15px] lg:flex">
          {LINKS.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                data-cursor="hover"
                className="underline-grow"
              >
                {link.label}
              </a>
            ) : (
              <TransitionLink
                key={link.href}
                href={link.href}
                className="underline-grow"
              >
                {link.label}
              </TransitionLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Magnetic className="hidden sm:block">
            <a
              href={`${PARENT_URL}/contact`}
              data-cursor="hover"
              className="inline-flex h-11 items-center rounded-full bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              Work with us
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.header>
  );
}
