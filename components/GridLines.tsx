/**
 * Editorial hairline grid: two faint vertical rules aligned to the content
 * column (max-w-6xl), running the full viewport height. A magazine "margin
 * rule" that reads as precise and structured. Overlay so it shows across every
 * section's background; sits in the gutter outside the text, so it never
 * crosses body copy. Large screens only (below xl the column fills the
 * viewport and the rules would hug the edges). Pure CSS, no JS, no cost.
 */
export function GridLines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden xl:block"
    >
      <div className="mx-auto h-full max-w-6xl border-x border-[color:var(--border)] opacity-70" />
    </div>
  );
}
