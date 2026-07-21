"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { profile } from "@/lib/content";

/**
 * Recruiter concierge: a rule-based chat assistant.
 *
 * This is deliberately NOT an LLM: the site is a static export, so there is no
 * safe place for an API key, and a scripted assistant can only surface facts
 * that are already true on the page (no hallucination). It matches a question
 * to a fixed answer node and offers quick-reply chips + action buttons.
 */

type Action =
  | { kind: "scroll"; label: string; target: string }
  | { kind: "link"; label: string; href: string }
  | { kind: "download"; label: string; href: string };

type Node = {
  /** Short label used when this node is offered as a quick-reply chip. */
  label: string;
  /** Lowercase substrings that route free text to this node. */
  keywords: string[];
  text: string;
  chips?: string[];
  actions?: Action[];
};

const NODES: Record<string, Node> = {
  roles: {
    label: "What roles?",
    keywords: ["role", "hiring", "looking for", "position", "fit", "suitable", "job"],
    text: "Ronit is targeting AI analyst, data analyst, data science, and applied AI roles in the UK. The through-line: turn data into models, and models into products people use.",
    chips: ["overlap", "proof", "models"],
  },
  proof: {
    label: "Strongest proof?",
    keywords: ["proof", "number", "metric", "impact", "result", "achieve", "1.2", "money"],
    text: "The headline numbers: $1.2M of underperforming inventory surfaced at LKQ, a TrueDigs fare engine accurate to within £2 a month of TfL's own fare finder (20 golden journeys, CI-gated), and 4 AI and data products built end-to-end, two live in production (TrueDigs, Astroverse).",
    chips: ["lkq", "models", "work"],
    actions: [{ kind: "scroll", label: "See the numbers", target: "proof" }],
  },
  ai: {
    label: "Show the AI builds",
    keywords: ["ai", "llm", "gpt", "prompt", "build"],
    text: "Three AI builds: ORAII (GPT-4o clinical documentation), a Siemens hybrid-retrieval fault-ID system, and Astroverse (a live, automated LLM-to-PDF pipeline). Plus a model bench of classical ML work.",
    chips: ["oraii", "siemens", "models"],
    actions: [{ kind: "scroll", label: "Open the case studies", target: "work" }],
  },
  models: {
    label: "Classical ML & stats",
    keywords: [
      "ml",
      "machine learning",
      "model",
      "classifier",
      "xgboost",
      "scikit",
      "churn",
      "loan",
      "default",
      "regression",
      "statistics",
      "dea",
      "data science",
      "scientist",
      "nli",
      "bench",
      "world cup",
      "football",
      "forecast",
      "sports",
      "poisson",
      "monte carlo",
    ],
    text: "Beyond the LLM work there's a model bench: a Dixon-Coles + Monte Carlo World Cup forecast (backtested, and honestly reported when it does not beat the naive baseline), a BERT + GPT-4o hybrid NLI classifier at 90%+ accuracy (group coursework), XGBoost loan-default prediction, customer-churn analysis, and UK banking efficiency via DEA. Each framed as business question, method, measured result.",
    chips: ["rent", "work"],
    actions: [{ kind: "scroll", label: "See the model bench", target: "models" }],
  },
  rent: {
    label: "TrueDigs (flagship)",
    keywords: ["rent", "london", "valuation", "quantile", "conformal", "housing", "property", "truedigs", "digs", "flagship"],
    text: "TrueDigs is Ronit's flagship, live at truedigs.co.uk: it computes the true monthly cost of a London flat (rent plus TfL fares plus council tax plus energy plus bills) and gives a fair-rent verdict. A LightGBM quantile model with conformal intervals, validated by leave-borough-out spatial CV; the fare engine matches TfL's own fare finder to within £2 a month across 20 golden journeys, CI-gated. No LLM in the valuation path, and the model card is candid about the raw 53.5% coverage before conformal correction.",
    chips: ["models", "work"],
    actions: [
      { kind: "link", label: "Live product ↗", href: "https://truedigs.co.uk" },
      { kind: "link", label: "Code + model card ↗", href: "https://github.com/ronit-jitesh/truedigs" },
      { kind: "scroll", label: "See the case study", target: "work" },
    ],
  },
  oraii: {
    label: "What's ORAII?",
    keywords: ["oraii", "clinical", "therap", "documentation", "soap", "note", "patient"],
    text: "ORAII is Ronit's flagship project: an AI clinical-documentation platform for therapists. Real-time transcription becomes SOAP/DAP/GIRP/BIRP notes via GPT-4o, with C-SSRS risk scoring, architected for UK-GDPR and India's DPDP Act.",
    chips: ["work"],
    actions: [
      { kind: "scroll", label: "ORAII case study", target: "work" },
      { kind: "link", label: "Code on GitHub", href: "https://github.com/ronit-jitesh/Oraii-UK" },
    ],
  },
  siemens: {
    label: "The Siemens work",
    keywords: ["siemens", "rag", "retrieval", "dissertation", "repair", "industrial", "faiss", "llama", "fault"],
    text: "Ronit's MSc dissertation with Siemens Digital Industries: given a failed drive-unit test, find the likely fault and surface the evidence. Hybrid dense-and-BM25 retrieval fused with Reciprocal Rank Fusion; every non-obvious decision logged as an ADR. Private repo, Siemens data confidentiality.",
    actions: [{ kind: "scroll", label: "See the project", target: "work" }],
  },
  astroverse: {
    label: "Astroverse",
    keywords: ["astroverse", "pipeline", "pdf", "razorpay", "consumer", "saas", "live product"],
    text: "Astroverse is a live, revenue-generating product (co-founded). Ronit owns the layer between purchase and delivery: a Python pipeline that turns a payment into a typeset PDF in minutes, plus DNS deliverability, CI/CD, and technical SEO.",
    actions: [{ kind: "link", label: "Live product ↗", href: "https://theastroverse.in" }],
  },
  lkq: {
    label: "The $1.2M story",
    keywords: ["lkq", "inventory", "power bi", "dashboard", "commercial", "euro car", "analyst"],
    text: "Two years of commercial analytics at LKQ (US, Canada, EU). Ronit joined operational and commercial data nobody had linked and surfaced $1.2M of underperforming inventory, plus enriched 1M+ SKUs and cut data errors 60% with automated validation.",
    actions: [{ kind: "scroll", label: "See the case study", target: "work" }],
  },
  eligibility: {
    label: "UK work eligibility?",
    keywords: ["visa", "eligib", "sponsor", "right to work", "work right", "authoris", "authoriz"],
    text: "Yes. Ronit has UK work rights through the Graduate Route to January 2029. No sponsorship needed in that window.",
    chips: ["availability"],
  },
  availability: {
    label: "When is he available?",
    keywords: ["available", "start", "notice", "when can", "availab"],
    text: "Available from September 2026, based in Edinburgh and open to UK roles.",
    actions: [{ kind: "scroll", label: "Get in touch", target: "contact" }],
  },
  cv: {
    label: "Download CV",
    keywords: ["cv", "resume", "résumé", "download"],
    text: "Here's Ronit's CV, two pages, AI-analyst focused.",
    actions: [{ kind: "download", label: "Download CV ↓", href: profile.cv }],
  },
  chat: {
    label: "Book a chat",
    keywords: ["chat", "call", "meet", "talk", "book", "calendly", "speak", "interview"],
    text: "Happy to set that up. Ronit replies to every message and offers a 20-minute intro call.",
    actions: [
      { kind: "link", label: "Book 20 min ↗", href: profile.calendly },
      { kind: "scroll", label: "Or send a message", target: "contact" },
    ],
  },
  overlap: {
    label: "See the overlap",
    keywords: ["overlap", "venn", "who", "about", "background", "story"],
    text: "Ronit sits at the overlap of Data & Analytics, AI Engineering, and Product & Commercial. That's the AI-analyst edge: he proves the problem is real before building the AI for it.",
    actions: [{ kind: "scroll", label: "See the diagram", target: "overlap" }],
  },
  work: {
    label: "See all work",
    keywords: ["work", "project", "portfolio", "case study", "case studies"],
    text: "Three case studies led by TrueDigs (a live London rent-cost ML product), then LKQ (commercial impact) and the Siemens dissertation. Plus a model bench of classical ML, with ORAII and Astroverse live in production.",
    actions: [{ kind: "scroll", label: "Open the work", target: "work" }],
  },
};

const GREETING =
  "Hi, I'm Ronit's portfolio guide. Ask me anything, or pick a starting point:";
const START_CHIPS = ["roles", "rent", "proof", "models", "chat"];
const FALLBACK =
  "I can point you to the right place. Try one of these, or ask about his projects, the numbers, or UK eligibility:";

type Msg = { from: "bot" | "user"; text: string; chips?: string[]; actions?: Action[] };

function route(query: string): Node | null {
  const q = query.toLowerCase();
  // Check every node; longer keyword matches win so "clinical" beats "ai".
  let best: { node: Node; len: number } | null = null;
  for (const node of Object.values(NODES)) {
    for (const kw of node.keywords) {
      if (q.includes(kw) && (!best || kw.length > best.len)) {
        best = { node, len: kw.length };
      }
    }
  }
  return best?.node ?? null;
}

export function RecruiterChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: GREETING, chips: START_CHIPS },
  ]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function pushUser(text: string) {
    setMsgs((m) => [...m, { from: "user", text }]);
  }

  function answer(node: Node) {
    setMsgs((m) => [
      ...m,
      { from: "bot", text: node.text, chips: node.chips, actions: node.actions },
    ]);
  }

  function handleChip(id: string) {
    const node = NODES[id];
    if (!node) return;
    pushUser(node.label);
    answer(node);
  }

  function handleSend(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    pushUser(text);
    setInput("");
    const node = route(text);
    if (node) {
      answer(node);
    } else {
      setMsgs((m) => [...m, { from: "bot", text: FALLBACK, chips: START_CHIPS }]);
    }
  }

  function runAction(a: Action) {
    if (a.kind === "scroll") {
      document.getElementById(a.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
    // link/download are plain anchors and handle themselves.
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close portfolio guide" : "Open portfolio guide"}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[color:var(--ink)] text-[color:var(--bg)] pl-4 pr-5 py-3 shadow-[0_18px_50px_-15px_rgba(15,15,14,0.5)] hover:bg-[color:var(--accent)] transition-colors"
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
            <path
              d="M2 3.5h12v7H6l-3 2.5v-2.5H2z"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <span className="text-sm font-medium">{open ? "Close" : "Ask about Ronit"}</span>
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Portfolio guide chat"
          className="fixed bottom-24 right-6 z-50 flex flex-col w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[70vh] surface overflow-hidden shadow-[0_30px_80px_-20px_rgba(15,15,14,0.35)]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[color:var(--border)] bg-[color:var(--bg)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg">Portfolio guide</div>
              <div className="kicker">Rule-based · instant answers</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className={m.from === "user" ? "max-w-[85%]" : "max-w-[92%]"}>
                  <div
                    className={
                      m.from === "user"
                        ? "rounded-2xl rounded-br-sm bg-[color:var(--accent)] text-[color:var(--bg)] px-4 py-2.5 text-[14px] leading-relaxed"
                        : "rounded-2xl rounded-bl-sm bg-[color:var(--bg)] border border-[color:var(--border)] px-4 py-2.5 text-[14px] leading-relaxed text-[color:var(--ink)]"
                    }
                  >
                    {m.text}
                  </div>

                  {m.actions && m.actions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.actions.map((a) =>
                        a.kind === "scroll" ? (
                          <button
                            key={a.label}
                            onClick={() => runAction(a)}
                            className="btn btn-primary !py-2 !px-3.5 !text-[13px]"
                          >
                            {a.label}
                          </button>
                        ) : (
                          <a
                            key={a.label}
                            href={a.href}
                            {...(a.kind === "download"
                              ? { download: true }
                              : { target: "_blank", rel: "noreferrer" })}
                            className="btn btn-primary !py-2 !px-3.5 !text-[13px]"
                          >
                            {a.label}
                          </a>
                        )
                      )}
                    </div>
                  )}

                  {m.chips && m.chips.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.chips.map((id) => (
                        <button
                          key={id}
                          onClick={() => handleChip(id)}
                          className="pill hover:border-[color:var(--ink)] transition-colors text-left"
                        >
                          {NODES[id]?.label ?? id}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-[color:var(--border)] p-3 bg-[color:var(--bg)]"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about roles, projects, eligibility…"
              className="flex-1 px-3.5 py-2.5 rounded-full bg-[color:var(--bg-elev)] border border-[color:var(--border)] text-[14px] focus:border-[color:var(--ink)] outline-none"
              aria-label="Ask the portfolio guide a question"
            />
            <button
              type="submit"
              aria-label="Send"
              className="shrink-0 h-10 w-10 rounded-full bg-[color:var(--ink)] text-[color:var(--bg)] hover:bg-[color:var(--accent)] transition-colors flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
