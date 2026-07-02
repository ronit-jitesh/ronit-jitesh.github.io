import { caseStudies, workOrder } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

const statusBadge = (status?: string) => {
  if (status === "live")
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.12em] text-green-700">
        <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
        Live
      </span>
    );
  if (status === "in-progress")
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.12em] text-amber-700">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        In progress
      </span>
    );
  if (status === "shipped")
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.12em] text-[color:var(--accent)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
        Shipped
      </span>
    );
  return null;
};

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">Featured Work</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-[18ch]">
            Four projects that prove the rest.
          </h2>
          <p className="mt-6 max-w-2xl text-[color:var(--ink-muted)]">
            Each case study follows the same arc: validate the problem, build
            the AI, prove it worked. Context, what I decided, what I shipped,
            and what it changed.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 space-y-20 md:space-y-28">
          {workOrder.map((id, idx) => {
            const c = caseStudies[id];
            const isEven = idx % 2 === 0;
            return (
              <Reveal key={c.id} delay={80}>
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                  {/* Media / visual side */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <TiltCard>
                      <div className="surface relative aspect-[4/5] overflow-hidden">
                        <MediaMock id={c.id} />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="pill bg-[color:var(--bg)]">
                            {c.id === "oraii"
                              ? "ORAII"
                              : c.id === "siemens"
                              ? "Siemens"
                              : c.id === "astroverse"
                              ? "Astroverse"
                              : "LKQ"}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          {statusBadge(c.status)}
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Text side */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="kicker">{c.tag}</div>
                    <h3 className="mt-3 font-display text-3xl md:text-5xl tracking-tight leading-[1.08]">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-lg md:text-xl text-[color:var(--ink)] leading-snug max-w-[44ch] italic font-display">
                      {c.oneLine}
                    </p>

                    <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-8">
                      <Field label="Context" value={c.context} />
                      <Field label="My role" value={c.role} />
                    </div>

                    <div className="mt-8">
                      <div className="kicker mb-3">Approach</div>
                      <ul className="space-y-2.5">
                        {c.approach.map((a, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[15px] text-[color:var(--ink)] leading-relaxed"
                          >
                            <span className="mt-[9px] h-1 w-3 shrink-0 bg-[color:var(--accent)]/70 rounded" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {c.stack.map((s) => (
                        <span key={s} className="pill">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 border-l-2 border-[color:var(--accent)] pl-5">
                      <div className="kicker mb-2">Outcome</div>
                      <p className="text-[15px] md:text-base text-[color:var(--ink)] leading-relaxed">
                        {c.outcome}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                      {c.proof.map((p) => {
                        const inner = (
                          <>
                            <svg width="10" height="10" viewBox="0 0 10 10">
                              <circle
                                cx="5"
                                cy="5"
                                r="3.5"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="1"
                              />
                            </svg>
                            {p.label}
                            {p.href && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                aria-hidden
                              >
                                <path
                                  d="M3 3h4v4M7 3L3 7"
                                  stroke="currentColor"
                                  strokeWidth="1"
                                  fill="none"
                                  strokeLinecap="round"
                                />
                              </svg>
                            )}
                          </>
                        );
                        const cls =
                          "text-xs font-mono uppercase tracking-[0.12em] text-[color:var(--ink-soft)] flex items-center gap-1.5";
                        return p.href ? (
                          <a
                            key={p.label}
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`${cls} hover:text-[color:var(--accent)] transition-colors`}
                          >
                            {inner}
                          </a>
                        ) : (
                          <span key={p.label} className={cls}>
                            {inner}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="kicker mb-2">{label}</div>
      <p className="text-[15px] text-[color:var(--ink)] leading-relaxed">
        {value}
      </p>
    </div>
  );
}

/** Stylised placeholder media per project */
function MediaMock({ id }: { id: string }) {
  if (id === "oraii") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3ece1] via-[#e9dfcd] to-[#d7c9b0]">
        <div className="absolute inset-6 bg-[color:var(--bg)] rounded-2xl shadow-inner border border-[color:var(--border)] p-4 flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#e06c5a]" />
            <span className="h-2 w-2 rounded-full bg-[#e0b35a]" />
            <span className="h-2 w-2 rounded-full bg-[#7fa96b]" />
          </div>
          <div className="mt-4 kicker">Session · 14:32</div>
          <div className="mt-2 font-display text-xl leading-tight">
            Client reports sustained low mood. Sleep: 4–5 hrs.
          </div>
          <div className="mt-3 space-y-1.5">
            {[..."....."].map((_, i) => (
              <div
                key={i}
                className="h-2 rounded bg-[color:var(--border)]"
                style={{ width: `${75 - i * 8}%` }}
              />
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between">
            <span className="pill">SOAP note</span>
            <span className="kicker">GPT-4o</span>
          </div>
        </div>
      </div>
    );
  }
  if (id === "siemens") {
    return (
      <div className="absolute inset-0 bg-[#0e1730]">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute inset-6 text-[#cfe0ff] font-mono text-[11px] leading-5">
          <div className="opacity-60">&gt; query: VFD trips on overcurrent after restart</div>
          <div className="mt-3 opacity-90">retrieving · manuals  █████░░░ 62%</div>
          <div className="opacity-90">retrieving · repair_logs ███████ 94%</div>
          <div className="mt-4 text-[#a8cbff]">
            fused context → Llama 3
          </div>
          <div className="mt-3 p-3 rounded border border-[#284078] bg-[#132248]/60">
            Likely cause: DC-bus capacitor drift. Cross-ref: 12 historical
            cases, MTTR 47 min.
          </div>
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#7896c9] uppercase tracking-widest">
          FAISS · Dual-Source RAG
        </div>
      </div>
    );
  }
  if (id === "astroverse") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef0f6] via-[#e3e6f0] to-[#cfd5e8]">
        <div className="absolute inset-6 bg-[color:var(--bg)] rounded-2xl shadow-inner border border-[color:var(--border)] p-4 flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#e06c5a]" />
            <span className="h-2 w-2 rounded-full bg-[#e0b35a]" />
            <span className="h-2 w-2 rounded-full bg-[#7fa96b]" />
          </div>
          <div className="mt-4 kicker">Pipeline · Order #4821</div>
          <div className="mt-3 space-y-2.5 font-mono text-[11px]">
            {[
              "Payment verified",
              "LLM analysis",
              "PDF rendered",
              "Email sent · HI",
            ].map((step) => (
              <div key={step} className="flex items-center justify-between">
                <span className="text-[color:var(--ink-muted)]">{step}</span>
                <span className="text-[#7fa96b]">✓</span>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between">
            <span className="pill">Delivered</span>
            <span className="kicker">2m 14s</span>
          </div>
        </div>
      </div>
    );
  }
  // LKQ
  return (
    <div className="absolute inset-0 bg-[color:var(--bg-elev)] p-6">
      <div className="text-[color:var(--ink-muted)] kicker">
        Category scorecard · Q4 FY25
      </div>
      <div className="mt-2 font-display text-2xl text-[color:var(--ink)]">
        Inventory health vs sell-through
      </div>
      <div className="mt-6 grid grid-cols-5 gap-3 items-end h-36">
        {[42, 66, 83, 54, 71, 38, 88, 60, 74, 46].slice(0, 10).map((h, i) => (
          <div key={i} className="flex flex-col-reverse">
            <div
              className="rounded-t"
              style={{
                height: `${h}%`,
                background: i % 2 === 0 ? "#1b2a4e" : "#a8864b",
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="pill">US · CA · EU</span>
        <span className="font-display text-xl text-[color:var(--accent)]">
          $1.2M
        </span>
      </div>
    </div>
  );
}
