"use client";

import { heroByLens } from "@/lib/content";
import { useLens } from "@/lib/lens";

export function ProofStrip() {
  const { lens } = useLens();
  const { metrics } = heroByLens[lens];

  return (
    <section className="py-14 md:py-20 border-y border-[color:var(--border)] bg-[color:var(--bg-elev)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="kicker mb-8">Proof in numbers</div>
        <div
          key={lens}
          className="lens-fade grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6"
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className="md:pr-8 md:border-r last:border-r-0 border-[color:var(--border)]"
            >
              <div className="font-display text-5xl md:text-6xl tracking-tight leading-none text-[color:var(--ink)]">
                {m.value}
              </div>
              <div className="mt-4 text-sm md:text-[15px] text-[color:var(--ink-muted)] leading-relaxed max-w-[32ch]">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
