import { hero, profile } from "@/lib/content";
import { Magnetic } from "./Magnetic";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* meta row */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
            </span>
            <span className="kicker">Available from Sept 2026, UK</span>
          </div>
          <span className="kicker hidden md:inline">
            AI &amp; Data Analyst · Edinburgh
          </span>
        </div>

        <div>
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.75rem)] leading-[1.02] tracking-tight max-w-[18ch]">
            {hero.display}
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-[color:var(--ink-muted)] leading-relaxed">
            {hero.sub}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a href="#work" className="btn btn-primary">
              View work
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Book a 20-min chat
            </a>
          </Magnetic>
          <Magnetic>
            <a href={profile.cv} download className="btn btn-secondary">
              Download CV
            </a>
          </Magnetic>
        </div>

        {/* hairline with role labels */}
        <div className="mt-20 flex items-center gap-6 text-xs">
          <span className="kicker whitespace-nowrap">How I work</span>
          <div className="h-px flex-1 bg-[color:var(--border)]" />
          <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-[color:var(--ink-muted)]">
            Validate · Build · Prove
          </span>
        </div>
      </div>
    </section>
  );
}
