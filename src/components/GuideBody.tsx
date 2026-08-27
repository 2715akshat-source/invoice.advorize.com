import type { Block, Section } from "@/content/guides";

/**
 * Renders a guide's blocks.
 *
 * The only inline markup is `**bold**`, handled below. Markdown was
 * deliberately not used: these pages are a fixed set of block types written
 * by us, and a parser would buy flexibility nobody needs at the cost of a
 * dependency and an XSS surface on every page of the site.
 */

/** Splits on `**…**` and emits the bold runs as <strong>. */
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-medium text-fg">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return (
              <p key={i} className="mb-5 max-w-[68ch] leading-relaxed text-muted">
                {inline(block.text)}
              </p>
            );

          case "list":
            return (
              <ul key={i} className="mb-6 max-w-[68ch] space-y-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="relative pl-6 leading-relaxed text-muted">
                    <span
                      aria-hidden
                      className="absolute top-[11px] left-0 h-[2px] w-3 bg-accent"
                    />
                    {inline(item)}
                  </li>
                ))}
              </ul>
            );

          case "steps":
            return (
              <ol key={i} className="mb-6 max-w-[68ch] space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4 leading-relaxed text-muted">
                    <span className="mt-[2px] shrink-0 text-sm tabular-nums text-accent">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span>{inline(item)}</span>
                  </li>
                ))}
              </ol>
            );

          case "fields":
            return (
              <div key={i} className="mb-8 max-w-[68ch] border-t border-line">
                {block.rows.map(([field, note]) => (
                  <div
                    key={field}
                    className="grid gap-1 border-b border-line py-5 sm:grid-cols-[minmax(0,190px)_minmax(0,1fr)] sm:gap-8"
                  >
                    <div className="font-medium">{field}</div>
                    <p className="leading-relaxed text-muted">{inline(note)}</p>
                  </div>
                ))}
              </div>
            );

          case "table":
            return (
              /* A table may run wider than the prose measure — comparison
                 columns need the room — but not to the full width of a
                 desktop window, which would break the reading rhythm. It
                 scrolls inside its own box rather than the page. */
              <div
                key={i}
                className="mb-8 -mx-5 max-w-[860px] overflow-x-auto px-5 sm:mx-0 sm:px-0"
              >
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-fg/60">
                      {block.head.map((cell) => (
                        <th
                          key={cell}
                          className="py-3 pr-6 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-b border-line align-top">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className={`py-4 pr-6 leading-relaxed ${
                              k === 0 ? "font-medium" : "text-muted"
                            }`}
                          >
                            {inline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "note":
            return (
              <div
                key={i}
                className="mb-8 max-w-[68ch] rounded-2xl border border-line bg-card px-6 py-5"
              >
                <p className="leading-relaxed text-muted">{inline(block.text)}</p>
              </div>
            );
        }
      })}
    </>
  );
}

export default function GuideBody({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="mt-14 first:mt-0">
          <h2 className="display mb-6 text-3xl md:text-4xl">{section.heading}</h2>
          <Blocks blocks={section.blocks} />
        </section>
      ))}
    </>
  );
}
