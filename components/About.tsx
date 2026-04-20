import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[color:var(--bg-elev)] border-y border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">About</div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal as="div" className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md">
              <div className="absolute -inset-3 rounded-2xl bg-[color:var(--accent-wash)] -z-10 translate-x-3 translate-y-3" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg)]">
                <Image
                  src="/headshot.png"
                  alt="Portrait of Ronit Jitesh"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="pill">Edinburgh, UK</span>
                <span className="pill">Eligible to work in UK</span>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className="lg:col-span-7 order-1 lg:order-2" delay={80}>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-[18ch]">
              Mechanical engineer turned analyst, now building AI products real
              users rely on.
            </h2>

            <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-[color:var(--ink-muted)] max-w-2xl">
              <p>
                I started with a BEng in Mechanical Engineering — systems,
                optimisation, and the habit of asking{" "}
                <em className="text-[color:var(--ink)] font-display not-italic">
                  what actually breaks this?
                </em>{" "}
                That foundation still shapes how I approach every problem.
              </p>
              <p>
                Two years at LKQ India (EURO CAR PARTS Group) taught me
                commercial analytics at scale — Power BI dashboards reviewed by
                senior stakeholders in three markets, SQL pipelines across a
                million SKUs, and data storytelling that actually moved
                decisions. I&apos;m finishing my MSc Business Analytics at the
                University of Edinburgh, with a dissertation partnership at
                Siemens Digital Industries on industrial RAG.
              </p>
              <p>
                In parallel, I co-founded{" "}
                <span className="text-[color:var(--ink)] font-medium">
                  ORAII
                </span>{" "}
                — an AI clinical documentation platform for therapists, live in
                India and the UK. We won Most Viable Business at Edinburgh&apos;s
                Startup Fast Track 2025. Building ORAII taught me more about
                product than any course: how to interview users properly, cut
                scope ruthlessly, and ship something people will actually use.
              </p>
              <p className="text-[color:var(--ink)]">
                I&apos;m based in Edinburgh and looking for UK roles where I
                can combine analytical rigour with hands-on building — across
                AI, product, business analytics, and operations.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
