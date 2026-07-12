import { modelBench } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * Classical ML and statistics evidence, kept deliberately terse: business
 * question → method → measured result. Cards without a recorded metric show
 * the method and stop. No invented numbers.
 */
export function ModelBench() {
  return (
    <section
      id="models"
      className="scroll-mt-24 py-24 md:py-32 border-b border-[color:var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">Model bench</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-[20ch]">
            Classical ML, honestly evaluated.
          </h2>
          <p className="mt-6 max-w-2xl text-[color:var(--ink-muted)] leading-relaxed">
            The modelling fundamentals behind the bigger builds: a real
            business question, a defensible method, and only measured results.
            No tutorial datasets.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {modelBench.map((m, i) => (
            <Reveal key={m.title} delay={i * 70}>
              <div className="surface h-full p-6 md:p-7 flex flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="kicker">{m.tag}</span>
                  {m.href && (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-mono uppercase tracking-[0.12em] text-[color:var(--ink-soft)] hover:text-[color:var(--accent)] transition-colors whitespace-nowrap"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
                <h3 className="mt-3 font-display text-2xl md:text-[28px] leading-tight">
                  {m.title}
                </h3>
                <p className="mt-3 font-display italic text-[15px] text-[color:var(--ink-muted)] leading-snug">
                  {m.question}
                </p>
                <p className="mt-4 text-[15px] text-[color:var(--ink)] leading-relaxed">
                  {m.method}
                </p>
                {m.result && (
                  <div className="mt-5 pt-4 border-t border-[color:var(--border)] flex items-baseline gap-3">
                    <span className="kicker text-[color:var(--accent)]">
                      Result
                    </span>
                    <span className="text-[15px] font-medium text-[color:var(--ink)]">
                      {m.result}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
