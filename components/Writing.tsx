"use client";

import { Reveal } from "./Reveal";

export function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 bg-[color:var(--bg-elev)] border-y border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">Writing</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] max-w-[22ch]">
            Working notes from building ORAII, researching industrial RAG, and
            finding signal in commercial analytics.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 surface p-8 md:p-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="pill">Next post · May 2026</span>
              <span className="kicker">First drop</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              RAG in the wild: what the Siemens dissertation taught me about
              retrieval quality.
            </h3>
            <p className="mt-4 text-[color:var(--ink-muted)] leading-relaxed">
              Notes from evaluating dual-source retrieval against live
              industrial field cases: what actually predicted answer
              quality, and what looked great in benchmarks but fell apart on
              the factory floor.
            </p>

            <form
              className="mt-6 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-full bg-[color:var(--bg)] border border-[color:var(--border)] text-sm focus:border-[color:var(--ink)] outline-none"
              />
              <button type="submit" className="btn btn-primary">
                Notify me
              </button>
            </form>
            <p className="mt-3 text-xs text-[color:var(--ink-soft)]">
              No newsletter. Just a one-off note when the first piece is live.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
