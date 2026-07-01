"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(profile.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        const firstError = Array.isArray(data?.errors) && data.errors[0]?.message;
        setErrorMsg(firstError || "Something went wrong. Please email me directly.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please email me directly.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="kicker mb-4">Contact</div>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[1] max-w-[14ch]">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-[color:var(--ink-muted)]">
            I reply to every message. If you&apos;re hiring for an AI analyst,
            applied AI, or data-product role in the UK, or just want to talk
            about building AI that earns its place, I&apos;d love to hear from
            you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal as="div" className="md:col-span-5 space-y-3">
            <ContactRow
              label="Book a chat"
              value="20 min · Google Meet"
              href={profile.calendly}
            />
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
            {status === "success" ? (
              <div
                className="surface p-8 md:p-10 space-y-4"
                role="status"
                aria-live="polite"
              >
                <div className="kicker text-[color:var(--accent)]">Sent</div>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.1]">
                  Thanks. I&apos;ll reply within 24 hours.
                </h3>
                <p className="text-[color:var(--ink-muted)] text-[15px] max-w-md">
                  In the meantime, feel free to check out my work on GitHub or
                  connect on LinkedIn.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn btn-secondary mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="surface p-7 md:p-9 space-y-5"
                action={profile.formspree}
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="Your name" name="name" required />
                  <Input label="Email" name="email" type="email" required />
                </div>
                <Input
                  label="What's the role?"
                  name="role"
                  placeholder="e.g. AI Analyst, Applied AI Engineer, Data Product Analyst"
                />
                <input type="hidden" name="_subject" value="Portfolio enquiry — Ronit Jitesh" />
                <div>
                  <label className="kicker mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[color:var(--bg)] border border-[color:var(--border)] text-sm focus:border-[color:var(--ink)] outline-none resize-none"
                    placeholder="A quick note about the role, team, or question."
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p
                    className={`text-xs ${
                      status === "error"
                        ? "text-red-600"
                        : "text-[color:var(--ink-soft)]"
                    }`}
                    aria-live="polite"
                  >
                    {status === "submitting"
                      ? "Sending…"
                      : status === "error"
                      ? errorMsg
                      : "I reply within 24 hours."}
                  </p>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            )}
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
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="kicker mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-[color:var(--bg)] border border-[color:var(--border)] text-sm focus:border-[color:var(--ink)] outline-none placeholder:text-[color:var(--ink-soft)]"
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
