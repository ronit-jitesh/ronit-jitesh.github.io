export type Metric = { value: string; label: string };

/**
 * Single, unified positioning. The old two-lens (AI vs Analyst) toggle was
 * removed deliberately: it signalled two identities. Everything now serves one
 * story — an AI analyst who validates the problem with data, then builds the AI
 * that solves it, then measures whether it worked.
 */
export const hero: { display: string; sub: string } = {
  display:
    "I validate the problem with data, then build the AI that solves it.",
  sub: "AI analyst with two years of commercial analytics at LKQ across US, Canada, and EU markets, now finishing an MSc Business Analytics at Edinburgh. I use that instinct for what the data actually says to build AI products people rely on: ORAII (clinical documentation for therapists), a live automated report pipeline, and a dual-source RAG system with Siemens. I find the problem worth solving, then ship the thing.",
};

export const metrics: [Metric, Metric, Metric] = [
  {
    value: "$1.2M",
    label:
      "in underperforming inventory surfaced at LKQ, by joining data nobody had linked",
  },
  {
    value: "25 → 1",
    label:
      "therapists contacted; one in-depth interview cut two features before they cost a week of build",
  },
  {
    value: "4",
    label:
      "AI and data products built end-to-end, one live in production (Astroverse)",
  },
];

/**
 * The one-line identity, used in the About section and the overlap diagram.
 */
export const positioningStatement =
  "Data analysts report on the problem. Engineers build the solution. The AI analyst is the rare overlap: proves the problem is real with data, then builds the thing anyway, and measures whether it worked.";

export type ProofItem = { label: string; href?: string };

export type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  oneLine: string;
  context: string;
  role: string;
  approach: string[];
  stack: string[];
  outcome: string;
  proof: ProofItem[];
  status?: "live" | "in-progress" | "shipped";
};

export const caseStudies: Record<string, CaseStudy> = {
  oraii: {
    id: "oraii",
    tag: "AI Product · Co-Founder · In Development",
    title: "ORAII — Clinical Co-Pilot",
    oneLine:
      "25 therapists contacted, one interview, two features cut before they cost a week of build.",
    context:
      "Therapists spend 20–30 minutes after each session writing SOAP and DAP notes. I contacted 25 private-practice therapists; one in-depth structured interview, with a licensed practitioner, confirmed the problem was worth solving and specifically, that there was no compliant AI documentation tool built for mental health practitioners.",
    role: "Co-founder. Owned product and engineering end-to-end: discovery, architecture, full-stack build, and go-to-market research.",
    approach: [
      "Validated first: contacted 25 private-practice therapists and built on one in-depth structured interview with a licensed practitioner before writing a line of code",
      "Prompt-engineered GPT-4o to generate four clinical note formats (SOAP, DAP, GIRP, BIRP) and score C-SSRS risk directly from session transcripts",
      "Chose real-time transcription plus clinical note generation as the wedge feature",
      "Built Hinglish support via Sarvam AI saaras-v3 as an India-specific moat",
      "Shipped a two-sided platform (therapist and patient portal) in one academic year, zero external funding",
    ],
    stack: [
      "Next.js 15",
      "Supabase",
      "GPT-4o",
      "Deepgram",
      "ElevenLabs",
      "Sarvam AI",
      "PostgreSQL",
    ],
    outcome:
      "Core features built and validated against one in-depth practitioner interview and supporting market research. Architecture designed for UK ICO/GDPR and Indian DPDP Act 2023 compliance. Two features cut after that interview saved weeks of build time. ORAII grew out of AfterWard, a post-medical follow-up concept I helped validate on Edinburgh's Startup Fast Track 2025; the team won Most Viable Business for it.",
    proof: [
      { label: "Code on GitHub", href: "https://github.com/ronit-jitesh/Oraii-UK" },
      { label: "Architecture diagram" },
    ],
    status: "in-progress",
  },
  lkq: {
    id: "lkq",
    tag: "BI · 2 Years Industry · EURO CAR PARTS Group",
    title: "LKQ — Commercial Analytics at Scale",
    oneLine:
      "$1.2M of dead inventory, surfaced from data nobody had joined.",
    context:
      "LKQ India's category performance data was fragmented across teams, with no single view linking inventory health to sales outcomes. Senior business owners made weekly decisions on incomplete data.",
    role: "Product Master Data Analyst I — Business Intelligence & Analytics. Partnered with BI, product, and supply chain across US, Canada, and EU portfolios.",
    approach: [
      "Designed Power BI dashboards backed by SQL models linking operational outputs to commercial KPIs",
      "Built automated Python and SQL validation scripts, reducing error rates by 60%",
      "Created a repeatable data storytelling framework for vendor reviews",
      "Led performance reviews with senior stakeholders across three international markets",
    ],
    stack: [
      "Power BI",
      "SQL",
      "Python",
      "Excel VBA",
      "YMM · PCdb · VCdb standards",
    ],
    outcome:
      "$1.2M in underperforming inventory surfaced. 1M+ SKUs enriched. 40% reduction in manual effort. 25% improvement in catalogue enrichment rates. Dashboards adopted across three business units.",
    proof: [
      { label: "Anonymised dashboard screenshot" },
      { label: "Process diagram" },
    ],
    status: "shipped",
  },
  siemens: {
    id: "siemens",
    tag: "RAG · MSc Dissertation · Siemens Digital Industries",
    title: "Siemens Industrial Repair Companion",
    oneLine:
      "Manuals plus repair logs, fused into a five-second answer, on-prem.",
    context:
      "Siemens engineers spend hours searching across technical manuals and historical repair logs to diagnose variable-frequency drive faults. Neither source alone answers the question. You need both.",
    role: "Sole builder. Academic partner: Siemens Digital Industries.",
    approach: [
      "Dual-source retrieval: separate FAISS indices for manuals and repair logs, weighted fusion at query time",
      "Llama 3 for generation, deployable on-prem. No data leaves the engineer's machine",
      "Streamlit evaluation UI for Siemens engineer feedback, Docker for reproducibility",
      "Evaluation planned against live field cases from Siemens CSD",
    ],
    stack: ["Python", "FAISS", "Llama 3", "Streamlit", "Docker", "LangChain"],
    outcome:
      "Dissertation in progress, submission Aug 2026. Benchmark results published on completion. Flagged during a Siemens review as the strongest retrieval approach in the cohort to date.",
    proof: [
      { label: "Code on GitHub", href: "https://github.com/ronit-jitesh/Industrial-Repair-Companion" },
      { label: "Companion POC — SOP migration", href: "https://github.com/ronit-jitesh/Document-Migration" },
      { label: "Architecture diagram" },
    ],
    status: "in-progress",
  },
  astroverse: {
    id: "astroverse",
    tag: "Live Product · Co-Founder · Production Pipeline",
    title: "Astroverse — Automated Delivery Pipeline",
    oneLine:
      "Payment to typeset PDF in minutes, with zero humans in the loop.",
    context:
      "Astroverse sells AI-generated reports to paying customers in English and Hindi, built with a co-founder. A customer pays, then needs a finished, professionally typeset PDF delivered automatically, in their own language, usually within minutes, with zero manual intervention.",
    role: "Co-founder. Owned the layer between the product and the customer: post-purchase pipeline, production infrastructure, deployment process, and technical SEO, across a live, revenue-generating product shipped alongside a second developer.",
    approach: [
      "Built the Python worker pipeline: polls Supabase for new submissions, runs LLM-assisted analysis, executes a notebook, renders LaTeX to PDF, uploads to storage, updates status",
      "Designed the delivery layer to never throw — a transient email failure can't roll back a paid, already-generated report. Every failure path is handled, including failures while logging the failure",
      "Integrated transactional email over verified DNS (SPF, DKIM, DMARC) from a custom domain, with delivery language matched automatically to the report language",
      "Shipped the technical SEO foundation from zero: dynamic sitemap and robots.txt, Open Graph and JSON-LD structured data, indexed and verified through Google Search Console",
      "Diagnosed a CI/CD permissions issue silently blocking production deployments and shipped a workaround with zero downtime",
      "Ran a merge-master-first workflow before every PR across two developers shipping in parallel against production, with zero post-merge conflicts",
    ],
    stack: ["Python", "Next.js 16", "Supabase", "Razorpay", "Resend", "Vercel"],
    outcome:
      "Live in production with three payment-gated product surfaces, ₹399–999 pricing. Automated English and Hindi report delivery with zero manual intervention. DNS fully verified for inbox deliverability. Indexed via Google Search Console. Zero downtime caused by my changes across the full build.",
    proof: [
      { label: "Live product", href: "https://theastroverse.in" },
      { label: "Code on GitHub", href: "https://github.com/astro-verse-2709/astroverse" },
    ],
    status: "live",
  },
};

/**
 * Single order, lead with ORAII (best validate-then-build story) then LKQ
 * (hard commercial proof), then the RAG depth and the shipped pipeline.
 */
export const workOrder: string[] = ["oraii", "lkq", "siemens", "astroverse"];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "LKQ India Private Limited — EURO CAR PARTS Group",
    role: "Product Master Data Analyst I — BI & Analytics",
    period: "Sep 2024 – Aug 2025",
    bullets: [
      "Built executive Power BI dashboards across 16+ product categories, adopted by three business units",
      "Led enrichment of 1M+ SKUs using predictive modelling and automated VBA pipelines; reduced manual effort by 40%",
      "Surfaced $1.2M in underperforming inventory through category scorecards linking operational and commercial data",
      "Led stakeholder performance reviews with senior owners across US, Canada, and EU portfolios",
    ],
  },
  {
    company: "LKQ India Private Limited — EURO CAR PARTS Group",
    role: "Data Analyst Apprentice — Data Quality & Analytics",
    period: "Sep 2023 – Sep 2024",
    bullets: [
      "Designed automated Python and SQL quality-check scripts; reduced error rates by 60%",
      "Built centralised pipeline ingesting multi-source supplier feeds (CSV, XML, API) into a unified master database",
      "Applied global automotive cataloging standards (YMM, PCdb, VCdb) across US, Canada, and EU catalogues",
    ],
  },
  {
    company: "ORAII — Clinical AI Platform",
    role: "Builder",
    period: "2024 – present",
    bullets: [
      "Building a full-stack clinical AI platform during MSc: Next.js 15, Supabase, GPT-4o, Deepgram",
      "Contacted 25 private-practice therapists; validated the core problem through one in-depth structured interview before writing a line of code",
      "Shipped SOAP/DAP/GIRP/BIRP note generation, C-SSRS risk scoring, ICD-10/CPT billing, Hinglish speech support",
      "Directly inspired by AfterWard, a healthcare concept I helped validate on Edinburgh's Startup Fast Track 2025",
    ],
  },
  {
    company: "AfterWard — Edinburgh Startup Fast Track 2025",
    role: "Team member · Concept validation",
    period: "Nov 2025",
    bullets: [
      "Team project: a post-medical follow-up platform improving continuity of care between doctors and patients",
      "Ran problem–solution fit work, user interviews, and go-to-market testing during the University of Edinburgh / Edinburgh Innovations programme",
      "Won Most Viable Business, recognised for real-world applicability, problem–solution fit, and healthcare scalability",
      "The experience directly led to ORAII, which I went on to co-found and build",
    ],
  },
];

export const education = [
  {
    school: "University of Edinburgh Business School",
    degree: "MSc Business Analytics",
    period: "2025 – 2026 (expected)",
    detail:
      "Predictive & Prescriptive Analytics · Simulation Modelling · Data Envelopment Analysis · Mathematical & Stochastic Programming",
    extras: [
      "Dissertation: Industrial Repair Companion Chatbot (Dual-Source RAG), Siemens Digital Industries",
      "Social Representative, Edinburgh Business School",
      "Most Viable Business, Edinburgh Startup Fast Track 2025, awarded to AfterWard (team project that inspired ORAII)",
    ],
  },
  {
    school: "Malnad College of Engineering, India",
    degree: "BEng Mechanical Engineering",
    period: "2019 – 2023",
    detail: "Foundation in systems, optimisation, and operational planning.",
    extras: [
      "Vice President, IUCEE Engineers Without Borders Student Chapter",
    ],
  },
];

/**
 * Skills mirror the three-part operating model (Validate · Build · Prove) so
 * the same spine repeats across the site instead of a scattered tool dump.
 */
export const skillGroups = [
  {
    title: "Validate — analytics & discovery",
    items: [
      "SQL",
      "Power BI",
      "Predictive Modelling",
      "Data Envelopment Analysis",
      "Simulation Modelling",
      "User Research",
      "Stakeholder Reviews",
      "Excel · VBA",
    ],
  },
  {
    title: "Build — AI engineering",
    items: [
      "Python",
      "GPT-4o",
      "Llama 3",
      "RAG Pipelines",
      "FAISS",
      "Prompt Engineering",
      "LangChain",
      "Next.js · TypeScript",
      "Supabase · PostgreSQL",
    ],
  },
  {
    title: "Prove — impact & delivery",
    items: [
      "Automated Validation",
      "Model Evaluation",
      "Data Storytelling",
      "Executive Reporting",
      "Deployment & CI/CD",
      "Technical SEO",
      "KPI Frameworks",
    ],
  },
];

/**
 * The overlap that defines the role. Each discipline (the Venn circle) maps to
 * one action in the operating loop.
 */
export type OperatingPillar = {
  num: string;
  action: string;
  discipline: string;
  subtitle: string;
  body: string;
};

export const operatingModel: OperatingPillar[] = [
  {
    num: "01",
    action: "Validate",
    discipline: "Data & Analytics",
    subtitle: "Find the problem worth solving.",
    body: "Two years turning fragmented data into decisions senior stakeholders across three markets acted on at LKQ, including $1.2M of dead inventory nobody had linked. The one therapist interview that cut two ORAII features before they cost a week of build. I prove the problem is real before anyone writes code.",
  },
  {
    num: "02",
    action: "Build",
    discipline: "AI Engineering",
    subtitle: "Ship the AI, not slideware.",
    body: "GPT-4o clinical notes for ORAII, dual-source RAG on Llama 3 and FAISS for Siemens, an automated LLM-to-PDF pipeline for Astroverse. I prompt-engineer and ship to production, across transcription, generation, billing, and delivery, not just prototypes.",
  },
  {
    num: "03",
    action: "Prove",
    discipline: "Product & Commercial",
    subtitle: "Measure whether it worked.",
    body: "60% fewer data errors from the validation pipelines I automated. A delivery layer that never drops a paid order. Features cut, not just shipped. I track the outcome and the commercial case, not just the launch.",
  },
];

export const profile = {
  name: "Ronit Jitesh",
  location: "Edinburgh, UK",
  email: "ronitjitesh@gmail.com",
  phone: "+44 7810 782484",
  linkedin: "https://www.linkedin.com/in/ronit-jitesh-440a1319b",
  github: "https://github.com/ronit-jitesh",
  calendly: "https://calendly.com/ronitjitesh/ronit-intro-chat",
  cv: "/Ronit_Jitesh_CV.pdf",
  formspree: "https://formspree.io/f/xeevlvbk",
};
