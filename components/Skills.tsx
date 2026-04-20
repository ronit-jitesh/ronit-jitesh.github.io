import { skillGroups } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">Toolkit</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] max-w-[22ch]">
            A mix that&apos;s unusual by design — engineering, analytics,
            and AI in one stack.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="border-t border-[color:var(--border)] pt-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl md:text-2xl leading-tight">
                    {g.title}
                  </h3>
                  <span className="kicker">0{i + 1}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
