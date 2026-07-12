import { operatingModel, positioningStatement } from "@/lib/content";
import { Reveal } from "./Reveal";
import { VennDiagram } from "./VennDiagram";

/** Colour per discipline / pillar, ties each Venn disc to its card. */
const RING = ["var(--accent)", "var(--gold)", "var(--ink-muted)"];

export function OperatingModel() {
  return (
    <section
      id="overlap"
      className="scroll-mt-24 py-24 md:py-32 bg-[color:var(--bg-elev)] border-y border-[color:var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">The overlap</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-[20ch]">
            Three disciplines. One rare overlap.
          </h2>
          <p className="mt-6 max-w-2xl text-[color:var(--ink-muted)] leading-relaxed">
            {positioningStatement}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 flex justify-center">
            <VennDiagram />
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {operatingModel.map((p, i) => (
            <Reveal key={p.num} delay={i * 90}>
              <div
                className="border-t-2 pt-6"
                style={{ borderColor: RING[i] }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="kicker" style={{ color: RING[i] }}>
                    {p.num} · {p.action}
                  </span>
                  <span className="kicker">{p.discipline}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl leading-tight">
                  {p.subtitle}
                </h3>
                <p className="mt-4 text-[15px] text-[color:var(--ink-muted)] leading-relaxed">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
