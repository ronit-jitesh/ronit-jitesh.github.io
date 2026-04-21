import type { Lens } from "./lens";

export type Metric = { value: string; label: string };

export const heroByLens: Record<
  Lens,
  { display: string; sub: string; metrics: [Metric, Metric, Metric] }
> = {
  ai: {
    display: "Building AI that earns its place in real workflows.",
    sub: "MSc Business Analytics, Edinburgh. Building ORAII, an AI clinical documentation platform for mental health practitioners. Dissertation partner with Siemens Digital Industries. Two years of commercial data analytics across US, Canada, and EU markets.",
    metrics: [
      { value: "90%+", label: "accuracy on the adaptive NLI hybrid classifier (BERT + GPT-4o)" },
      { value: "25", label: "therapist interviews conducted before writing a line of code" },
      { value: "1M+", label: "SKUs enriched across three international portfolios" },
    ],
  },
  product: {
    display: "Products that ship, from research to release.",
    sub: "Building ORAII — 25 user interviews turned into a validated AI clinical platform. Two years turning commercial data into decisions across three international markets. MSc Business Analytics, Edinburgh.",
    metrics: [
      { value: "20 / 25", label: "research hypotheses validated before first line of code" },
      { value: "$1.2M", label: "inventory insight surfaced at LKQ" },
      { value: "Winner", label: "Most Viable Business — Edinburgh Startup Fast Track 2025" },
    ],
  },
  analyst: {
    display: "Turning commercial data into decisions stakeholders trust.",
    sub: "Two years at LKQ India delivering executive dashboards across US, Canada, and EU portfolios. MSc Business Analytics, Edinburgh. Building ORAII, an AI clinical documentation platform, in parallel.",
    metrics: [
      { value: "$1.2M", label: "underperforming inventory surfaced through category scorecards" },
      { value: "25%", label: "lift in catalogue enrichment rates" },
      { value: "60%", label: "reduction in data error rates through automated validation" },
    ],
  },
  ops: {
    display: "Operational analytics, built on an engineering foundation.",
    sub: "Mechanical engineer with two years of commercial analytics across US, Canada, and EU markets. MSc Business Analytics, Edinburgh — scheduling, simulation, DEA. Building a clinical AI platform end-to-end.",
    metrics: [
      { value: "40%", label: "reduction in manual effort across enrichment workflows" },
      { value: "1M+", label: "SKUs handled across three international portfolios" },
      { value: "60%", label: "reduction in error rates on master data pipelines" },
    ],
  },
};

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
    tag: "AI Product · Personal Project · In Development",
    title: "ORAII — Clinical Co-Pilot",
    oneLine:
      "An AI documentation platform being built to give therapists back 30 minutes per session.",
    context:
      "Therapists spend 20–30 minutes after each session writing SOAP and DAP notes. I ran 25 private-practice interviews; 20 confirmed the problem was worth solving — and specifically, that there was no compliant AI documentation tool built for mental health practitioners.",
    role: "Sole builder. Owned discovery, architecture, full-stack build, and go-to-market research.",
    approach: [
      "25 structured therapist interviews before writing a line of code",
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
      "Core features built and validated. Architecture designed for UK ICO/GDPR and Indian DPDP Act 2023 compliance. 20 of 25 research hypotheses validated. Two features cut after interviews saved weeks of build time. Most Viable Business Award, Edinburgh Startup Fast Track 2025 (AfterWard — a related healthcare concept validated during the programme).",
    proof: [
      { label: "Code on GitHub", href: "https://github.com/ronit-jitesh/Oraii-UK" },
      { label: "Architecture diagram" },
    ],
    status: "in-progress",
  },
  siemens: {
    id: "siemens",
    tag: "RAG · MSc Dissertation · Siemens Digital Industries",
    title: "Siemens Industrial Repair Companion",
    oneLine:
      "A dual-source RAG chatbot helping engineers diagnose VFD faults using manuals and historical repair logs.",
    context:
      "Siemens engineers spend hours searching across technical manuals and historical repair logs to diagnose variable-frequency drive faults. Neither source alone answers the question — you need both.",
    role: "Sole builder. Academic partner: Siemens Digital Industries.",
    approach: [
      "Dual-source retrieval: separate FAISS indices for manuals and repair logs, weighted fusion at query time",
      "Llama 3 for generation — deployable on-prem, no data leaves the engineer's machine",
      "Streamlit evaluation UI for Siemens engineer feedback, Docker for reproducibility",
      "Evaluation planned against live field cases from Siemens CSD",
    ],
    stack: ["Python", "FAISS", "Llama 3", "Streamlit", "Docker", "LangChain"],
    outcome:
      "Dissertation in progress — submission Aug 2026. Benchmark results published on completion. Flagged during a Siemens review as the strongest retrieval approach in the cohort to date.",
    proof: [
      { label: "Code on GitHub", href: "https://github.com/ronit-jitesh/Industrial-Repair-Companion" },
      { label: "Companion POC — SOP migration", href: "https://github.com/ronit-jitesh/Document-Migration" },
      { label: "Architecture diagram" },
    ],
    status: "in-progress",
  },
  lkq: {
    id: "lkq",
    tag: "BI · 2 Years Industry · EURO CAR PARTS Group",
    title: "LKQ — Commercial Analytics at Scale",
    oneLine:
      "How I surfaced $1.2M of underperforming inventory by joining operational and commercial data.",
    context:
      "LKQ India's category performance data was fragmented across teams — no single view linking inventory health to sales outcomes. Senior business owners made weekly decisions on incomplete data.",
    role: "Product Master Data Analyst I — Business Intelligence & Analytics. Partnered with BI, product, and supply chain across US, Canada, and EU portfolios.",
    approach: [
      "Designed Power BI dashboards backed by SQL models linking operational outputs to commercial KPIs",
      "Built automated Python and SQL validation scripts — reduced error rates by 60%",
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
};

export const workOrderByLens: Record<Lens, string[]> = {
  ai: ["oraii", "siemens", "lkq"],
  product: ["oraii", "lkq", "siemens"],
  analyst: ["lkq", "oraii", "siemens"],
  ops: ["lkq", "oraii", "siemens"],
};

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
      "Building a full-stack clinical AI platform during MSc — Next.js 15, Supabase, GPT-4o, Deepgram",
      "Ran 25 therapist interviews; validated 20 of 25 hypotheses before writing a line of code",
      "Shipped SOAP/DAP/GIRP/BIRP note generation, C-SSRS risk scoring, ICD-10/CPT billing, Hinglish speech support",
      "Most Viable Business Award for AfterWard, Edinburgh Startup Fast Track 2025",
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
      "Dissertation: Industrial Repair Companion Chatbot (Dual-Source RAG) — Siemens Digital Industries",
      "Social Representative, Edinburgh Business School",
      "Award: Most Viable Business — Edinburgh Startup Fast Track 2025 (AfterWard)",
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

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    items: [
      "Python",
      "GPT-4o",
      "Llama 3",
      "BERT",
      "HuggingFace",
      "RAG Pipelines",
      "FAISS",
      "Prompt Engineering",
      "LangChain",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "SQL",
      "Power BI",
      "Advanced Excel",
      "VBA",
      "Predictive Modelling",
      "XGBoost",
      "Data Envelopment Analysis",
      "Simulation Modelling",
      "Linear Programming (PuLP)",
    ],
  },
  {
    title: "Product & Build",
    items: [
      "Next.js 15",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "User Research",
      "Go-to-Market",
    ],
  },
  {
    title: "Business & Ops",
    items: [
      "KPI Frameworks",
      "Executive Reporting",
      "Stakeholder Management",
      "Supply Chain Analytics",
      "Data Storytelling",
      "Cross-Functional Collaboration",
    ],
  },
];

export const profile = {
  name: "Ronit Jitesh",
  location: "Edinburgh, UK",
  email: "ronitjitesh@gmail.com",
  phone: "+44 07810 782484",
  linkedin: "https://www.linkedin.com/in/ronit-jitesh-440a1319b",
  github: "https://github.com/ronit-jitesh",
  calendly: "#", // placeholder — paste your Calendly URL here
  cv: "/Ronit_Jitesh_CV.pdf",
  formspree: "https://formspree.io/f/xeevlvbk",
};
