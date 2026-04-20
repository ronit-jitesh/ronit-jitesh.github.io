"use client";

import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">Contact</div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[1] max-w-[14ch]">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-[color:var(--ink-muted)]">
            I reply to every message. If you&apos;re hiring for an AI, product,
            business analyst, or operations role in the UK — or just want to
            talk about AI products — I&apos;d love to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal as="div" className="md:col-span-5 space-y-3">
            <ContactRow
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow label="Phone" value={profile.phone} />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/ronit-jitesh-440a1319b"
              href={profile.linkedin}
            />
            <ContactRow
              label="GitHub"
              value="github.com/ronit-jitesh"
              href={profile.github}
            />
            <ContactRow
              label="Based in"
              value="Edinburgh, United Kingdom"
            />
          </Reveal>

          <Reveal as="div" className="md:col-span-7" delay={100}>
            <form
              className="surface p-7 md:p-9 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input label="Your name" name="name" />
                <Input label="Email" name="email" type="email" />
              </div>
              <div>
                <label className="kicker mb-2 block">Hiring for</label>
                <select
                  name="role"
                  className="w-full px-4 py-3 rounded-lg bg-[color:var(--bg)] border border-[color:var(--border)] text-sm focus:border-[color:var(--ink)] outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a role…
                  </option>
                  <option>AI / Prompt Engineer</option>
                  <option>Product Manager</option>
                  <option>Business Analyst</option>
                  <option>Operations Manager</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="kicker mb-2 block">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full px-4 py-3 rounded-lg bg-[color:var(--bg)] border border-[color:var(--border)] text-sm focus:border-[color:var(--ink)] outline-none resize-none"
                  placeholder="A quick note about the role, team, or question."
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs text-[color:var(--ink-soft)]">
                  Form endpoint — to be wired to Formspree on launch.
                </p>
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="kicker mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full px-4 py-3 rounded-lg bg-[color:var(--bg)] border border-[color:var(--border)] text-sm focus:border-[color:var(--ink)] outline-none"
      />
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-baseline justify-between border-b border-[color:var(--border)] py-4 group">
      <span className="kicker">{label}</span>
      <span className="text-[color:var(--ink)] text-[15px] group-hover:text-[color:var(--accent)] transition-colors">
        {value}
      </span>
    </div>
  );
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {inner}
      </a>
    );
  return inner;
}
