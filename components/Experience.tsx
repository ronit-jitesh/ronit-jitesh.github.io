import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">Experience</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-[20ch]">
            Two years shipping analytics. One year shipping an AI product.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 space-y-14 md:space-y-16">
          {experience.map((e, i) => (
            <Reveal key={i} delay={60}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-[color:var(--border)] pt-10">
                <div className="md:col-span-4">
                  <div className="kicker">{e.period}</div>
                  <h3 className="font-display text-2xl md:text-3xl mt-2 leading-tight text-[color:var(--ink)]">
                    {e.role}
                  </h3>
                  <div className="mt-2 text-sm text-[color:var(--ink-muted)]">
                    {e.company}
                  </div>
                </div>
                <ul className="md:col-span-8 space-y-3">
                  {e.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-4 text-[15px] text-[color:var(--ink)] leading-relaxed"
                    >
                      <span className="mt-[10px] h-1 w-4 shrink-0 bg-[color:var(--accent)]/60 rounded" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
