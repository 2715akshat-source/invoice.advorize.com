import type { ReactNode } from "react";

/** A written page: the measure, the rhythm and the heading scale, once. */
export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        max-w-[68ch] leading-relaxed
        [&>h2]:display [&>h2]:mt-16 [&>h2]:mb-5 [&>h2]:text-3xl md:[&>h2]:text-4xl
        [&>h3]:display [&>h3]:mt-10 [&>h3]:mb-3 [&>h3]:text-xl
        [&>p]:mb-5 [&>p]:text-muted
        [&>ul]:mb-6 [&>ul]:space-y-2.5
        [&>ol]:mb-6 [&>ol]:space-y-2.5 [&>ol]:list-decimal [&>ol]:pl-5
        [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:text-muted
        [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[11px]
        [&>ul>li]:before:h-[2px] [&>ul>li]:before:w-3 [&>ul>li]:before:bg-accent
        [&>ol>li]:text-muted
        [&_strong]:font-medium [&_strong]:text-fg
        [&_a]:underline [&_a]:decoration-line [&_a]:underline-offset-4 hover:[&_a]:decoration-accent
      "
    >
      {children}
    </div>
  );
}
