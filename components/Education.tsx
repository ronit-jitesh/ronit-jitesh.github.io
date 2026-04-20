import { education } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-[color:var(--bg-elev)] border-y border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">Education & Awards</div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((ed, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="surface p-8 md:p-10 h-full">
                <div className="kicker">{ed.period}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-2 leading-tight">
                  {ed.degree}
                </h3>
                <div className="mt-1 text-sm text-[color:var(--ink-muted)]">
                  {ed.school}
                </div>
                <p className="mt-5 text-[15px] text-[color:var(--ink)] leading-relaxed">
                  {ed.detail}
                </p>
                <ul className="mt-5 space-y-2">
                  {ed.extras.map((x, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[14px] text-[color:var(--ink-muted)]"
                    >
                      <span className="mt-[8px] h-1 w-3 shrink-0 bg-[color:var(--gold)] rounded" />
                      <span>{x}</span>
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
