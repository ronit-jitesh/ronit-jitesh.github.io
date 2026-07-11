import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * Recruiter wayfinding. Replaces the old lens toggle: instead of switching
 * identity, it points each visitor at the proof their role cares about. Pure
 * anchor navigation, no state.
 */
const stops = [
  {
    num: "01",
    label: "See the overlap",
    sub: "Who I am, in one diagram",
    href: "#overlap",
  },
  {
    num: "02",
    label: "See the work",
    sub: "Three case studies + the model bench",
    href: "#work",
  },
  {
    num: "03",
    label: "See the impact",
    sub: "$1.2M, 90%+ classifier accuracy, 60% fewer errors",
    href: "#proof",
  },
  {
    num: "04",
    label: "Start a conversation",
    sub: "20-min chat or a direct message",
    href: "#contact",
  },
];

export function RecruiterGuide() {
  return (
    <section className="pt-4 pb-6 md:pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="surface p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-7">
              <div>
                <div className="kicker mb-2">For recruiters</div>
                <p className="font-display text-xl md:text-2xl leading-snug max-w-[34ch]">
                  Hiring for AI, data, or product? Here&apos;s the 60-second
                  path to the proof that matters.
                </p>
              </div>
              <a
                href={profile.cv}
                download
                className="text-xs font-mono uppercase tracking-[0.12em] text-[color:var(--ink-soft)] hover:text-[color:var(--accent)] transition-colors whitespace-nowrap self-start md:self-auto"
              >
                Download CV ↓
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {stops.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="group border border-[color:var(--border)] rounded-[var(--radius-md)] p-4 hover:border-[color:var(--ink)] transition-colors bg-[color:var(--bg)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="kicker text-[color:var(--accent)]">
                      {s.num}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="text-[color:var(--ink-soft)] group-hover:text-[color:var(--accent)] transition-colors"
                    >
                      <path
                        d="M3 7h8M7 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 font-display text-lg leading-tight">
                    {s.label}
                  </div>
                  <div className="mt-1 text-[13px] text-[color:var(--ink-muted)] leading-snug">
                    {s.sub}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
