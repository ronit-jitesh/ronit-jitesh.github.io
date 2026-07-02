import { operatingModel, positioningStatement } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Colour per discipline / pillar — ties each Venn circle to its card. */
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
                  <span
                    className="kicker"
                    style={{ color: RING[i] }}
                  >
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

/**
 * A three-circle Venn describing the role. Each circle is a discipline; the
 * centre where all three meet is the position itself. Fills are low-opacity so
 * the overlaps deepen naturally toward the middle. Pure SVG, theme-driven
 * colours, no external deps.
 */
function VennDiagram() {
  return (
    <svg
      viewBox="0 0 620 520"
      className="w-full max-w-xl"
      role="img"
      aria-labelledby="venn-title venn-desc"
    >
      <title id="venn-title">
        Ronit Jitesh sits at the overlap of Data &amp; Analytics, AI
        Engineering, and Product &amp; Commercial.
      </title>
      <desc id="venn-desc">
        A three-circle Venn diagram. Data and Analytics maps to Validate, AI
        Engineering maps to Build, Product and Commercial maps to Prove. The
        centre where all three overlap is the AI Analyst role.
      </desc>

      {/* Circles */}
      <g>
        {/* Data & Analytics — navy */}
        <circle
          cx="235"
          cy="215"
          r="150"
          fill="var(--accent)"
          fillOpacity="0.10"
          stroke="var(--accent)"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        {/* AI Engineering — gold */}
        <circle
          cx="385"
          cy="215"
          r="150"
          fill="var(--gold)"
          fillOpacity="0.12"
          stroke="var(--gold)"
          strokeOpacity="0.6"
          strokeWidth="1.5"
        />
        {/* Product & Commercial — neutral */}
        <circle
          cx="310"
          cy="330"
          r="150"
          fill="var(--ink-muted)"
          fillOpacity="0.08"
          stroke="var(--ink-muted)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      </g>

      {/* Centre label */}
      <g>
        <text
          x="310"
          y="262"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-display)" }}
          fontSize="27"
          fill="var(--ink)"
          letterSpacing="-0.5"
        >
          AI Analyst
        </text>
        <text
          x="310"
          y="284"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
          fontSize="10.5"
          letterSpacing="2.2"
          fill="var(--ink-soft)"
        >
          VALIDATE · BUILD · PROVE
        </text>
      </g>

      {/* Discipline labels */}
      <VennLabel
        x="150"
        y="115"
        color="var(--accent)"
        action="Validate"
        line1="Data &"
        line2="Analytics"
      />
      <VennLabel
        x="470"
        y="115"
        color="var(--gold)"
        action="Build"
        line1="AI"
        line2="Engineering"
      />
      <VennLabel
        x="310"
        y="470"
        color="var(--ink-muted)"
        action="Prove"
        line1="Product &"
        line2="Commercial"
      />
    </svg>
  );
}

function VennLabel({
  x,
  y,
  color,
  action,
  line1,
  line2,
}: {
  x: string;
  y: string;
  color: string;
  action: string;
  line1: string;
  line2: string;
}) {
  return (
    <g>
      <text
        x={x}
        y={y}
        textAnchor="middle"
        style={{ fontFamily: "var(--font-display)" }}
        fontSize="19"
        fill="var(--ink)"
      >
        <tspan x={x}>{line1}</tspan>
        <tspan x={x} dy="21">
          {line2}
        </tspan>
      </text>
      <text
        x={x}
        y={Number(y) + 40}
        textAnchor="middle"
        style={{ fontFamily: "var(--font-mono)" }}
        fontSize="10"
        letterSpacing="2"
        fill={color}
      >
        {action.toUpperCase()}
      </text>
    </g>
  );
}
