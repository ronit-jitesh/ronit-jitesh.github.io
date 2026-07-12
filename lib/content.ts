export type Metric = { value: string; label: string };

/**
 * Single, unified positioning. The old two-lens (AI vs Analyst) toggle was
 * removed deliberately: it signalled two identities. Everything now serves one
 * story: an AI analyst who validates the problem with data, then builds the AI
 * that solves it, then measures whether it worked.
 */
export const hero: { display: string; sub: string } = {
  display: "I turn data into models, and models into products people use.",
  sub: "AI and data analyst: MSc Business Analytics at Edinburgh (predictive and prescriptive modelling, simulation, data envelopment analysis), on top of two years of commercial analytics at LKQ across US, Canada, and EU markets. And the models ship: a hybrid-retrieval fault-ID system with Siemens Digital Industries, GPT-4o clinical documentation in ORAII, and a calibrated London rent-valuation engine in development.",
};

export const metrics: [Metric, Metric, Metric] = [
  {
    value: "$1.2M",
    label:
      "in underperforming inventory surfaced at LKQ, by joining data nobody had linked",
  },
  {
    value: "90%+",
    label:
      "accuracy from a BERT + GPT-4o hybrid NLI classifier with confidence-based routing (group coursework, MSc)",
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
    tag: "AI Product · Personal Project · In Development",
    title: "ORAII: Clinical Co-Pilot",
    oneLine:
      "25 therapists contacted, one interview, two features cut before they cost a week of build.",
    context:
      "Therapists spend 20–30 minutes after each session writing SOAP and DAP notes. I contacted 25 private-practice therapists; one in-depth structured interview, with a licensed practitioner, confirmed the problem was worth solving and specifically, that there was no compliant AI documentation tool built for mental health practitioners.",
    role: "Builder. Owned product and engineering end-to-end: discovery, architecture, full-stack build, and go-to-market research.",
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
    title: "LKQ: Commercial Analytics at Scale",
    oneLine:
      "$1.2M of dead inventory, surfaced from data nobody had joined.",
    context:
      "LKQ India's category performance data was fragmented across teams, with no single view linking inventory health to sales outcomes. Senior business owners made weekly decisions on incomplete data.",
    role: "Product Master Data Analyst I, Business Intelligence & Analytics. Partnered with BI, product, and supply chain across US, Canada, and EU portfolios.",
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
    tag: "Retrieval & Fault ID · MSc Dissertation · Siemens Digital Industries",
    title: "Siemens Repair Companion",
    oneLine:
      "Given a failed drive-unit test, find the likely fault and show the evidence.",
    context:
      "When a Siemens drive unit fails its functional test, engineers need to identify the likely cause, process, component, or tester, and back that judgement with evidence from historical repair records. No single source settles the question on its own.",
    role: "Sole builder. Academic partner: Siemens Digital Industries.",
    approach: [
      "Built and independently audited a clean, matched test-to-repair dataset before any modelling began",
      "Validated a 3-class fault taxonomy against the domain, then built the retrieval corpus from repair records",
      "Built a hybrid retrieval core, dense embeddings plus BM25, fused with Reciprocal Rank Fusion, benchmarked against a reranker and kept the simpler pipeline once it won on the evaluation set",
      "Logged every non-obvious decision as an ADR: taxonomy, evaluation split, retrieval architecture, so the dissertation is defensible, not just narrated",
    ],
    stack: ["Python", "Dense Retrieval (MiniLM)", "BM25", "Reciprocal Rank Fusion", "Evaluation Design"],
    outcome:
      "Retrieval core complete and evaluated; the fault-identification engine is next. Dissertation submission Aug 2026, with full results published on completion.",
    proof: [
      { label: "Private repo, Siemens data confidentiality" },
      { label: "Companion POC: SOP migration", href: "https://github.com/ronit-jitesh/Document-Migration" },
      { label: "Architecture diagram" },
    ],
    status: "in-progress",
  },
  astroverse: {
    id: "astroverse",
    tag: "Live Product · Co-Founder · Production Pipeline",
    title: "Astroverse: Automated Delivery Pipeline",
    oneLine:
      "Payment to typeset PDF in minutes, with zero humans in the loop.",
    context:
      "Astroverse sells AI-generated reports to paying customers in English and Hindi, built with a co-founder. A customer pays, then needs a finished, professionally typeset PDF delivered automatically, in their own language, usually within minutes, with zero manual intervention.",
    role: "Co-founder. Owned the layer between the product and the customer: post-purchase pipeline, production infrastructure, deployment process, and technical SEO, across a live, revenue-generating product shipped alongside a second developer.",
    approach: [
      "Built the Python worker pipeline: polls Supabase for new submissions, runs LLM-assisted analysis, executes a notebook, renders LaTeX to PDF, uploads to storage, updates status",
      "Designed the delivery layer to never throw. A transient email failure can't roll back a paid, already-generated report. Every failure path is handled, including failures while logging the failure",
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
 * Order mirrors the hero arc: data (LKQ), models (Siemens), products
 * (ORAII). Astroverse is deliberately out of the featured list: it renders as
 * a slim "also live in production" strip so the building advantage stays
 * visible without diluting the data/ML focus.
 */
export const workOrder: string[] = ["lkq", "siemens", "oraii"];

export type ModelBenchItem = {
  title: string;
  tag: string;
  question: string;
  method: string;
  result?: string;
  href?: string;
};

/**
 * Classical ML and statistics evidence. Rules: real business question, real
 * method, and only measured results. No invented metrics. Items without a
 * recorded number state the method and stop there.
 */
export const modelBench: ModelBenchItem[] = [
  {
    title: "World Cup 2026 forecast",
    tag: "Personal project · Dixon-Coles + Monte Carlo",
    question:
      "Who wins the World Cup, and does the model actually beat picking the favourite?",
    method:
      "Dixon-Coles adjusted Poisson goals model wrapped in a 100,000-run Monte Carlo simulation of the full knockout bracket. Backtested on the already-played Round of 32 using only pre-tournament ratings, no hindsight, then scored with RPS, Brier score, and log loss against baselines, with a bootstrap confidence interval on the gap.",
    result:
      "87% favourite hit-rate (13/15), but on RPS the model does not beat picking the favourite (0.177 vs 0.133), and the 95% CI on that gap crosses zero. Reported as the headline finding, not buried.",
    href: "https://github.com/ronit-jitesh/worldcup-2026-forecast",
  },
  {
    title: "Adaptive NLI classifier",
    tag: "Group coursework · MSc",
    question:
      "Can routing each input to the right model beat any single model?",
    method:
      "BERT + GPT-4o hybrid with confidence-based routing: the fast local model answers where it is confident, the LLM handles the ambiguous rest.",
    result: "90%+ accuracy at inference",
    href: "https://github.com/ronit-jitesh/Group_6-LLM-NLI",
  },
  {
    title: "Bank loan default prediction",
    tag: "Academic project · MSc",
    question:
      "Which applicants are likely to default, and where should the risk threshold sit?",
    method:
      "XGBoost ensemble on financial and behavioural features, tuned for the precision–recall trade-off; outputs framed as decision thresholds, not raw scores.",
  },
  {
    title: "Customer churn & loyalty",
    tag: "Academic project · MSc",
    question: "Who is about to churn, and what actually drives it?",
    method:
      "Churn-driver analysis on transactional and behavioural data; high-risk segmentation translated into retention recommendations.",
  },
  {
    title: "UK banking efficiency",
    tag: "Academic project · MSc",
    question:
      "Which UK banks convert inputs to outputs most efficiently, and by what margin?",
    method:
      "Data Envelopment Analysis in Python, benchmarking bank efficiency frontiers across input–output combinations.",
    href: "https://github.com/ronit-jitesh/DEA_Assignment",
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "LKQ India Private Limited (EURO CAR PARTS Group)",
    role: "Product Master Data Analyst I, BI & Analytics",
    period: "Sep 2024 – Aug 2025",
    bullets: [
      "Built executive Power BI dashboards across 16+ product categories, adopted by three business units",
      "Led enrichment of 1M+ SKUs using predictive modelling and automated VBA pipelines; reduced manual effort by 40%",
      "Surfaced $1.2M in underperforming inventory through category scorecards linking operational and commercial data",
      "Led stakeholder performance reviews with senior owners across US, Canada, and EU portfolios",
    ],
  },
  {
    company: "LKQ India Private Limited (EURO CAR PARTS Group)",
    role: "Data Analyst Apprentice, Data Quality & Analytics",
    period: "Sep 2023 – Sep 2024",
    bullets: [
      "Designed automated Python and SQL quality-check scripts; reduced error rates by 60%",
      "Built centralised pipeline ingesting multi-source supplier feeds (CSV, XML, API) into a unified master database",
      "Applied global automotive cataloging standards (YMM, PCdb, VCdb) across US, Canada, and EU catalogues",
    ],
  },
  {
    company: "ORAII: Clinical AI Platform",
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
    company: "AfterWard: Edinburgh Startup Fast Track 2025",
    role: "Team member · Concept validation",
    period: "Nov 2025",
    bullets: [
      "Team project: a post-medical follow-up platform improving continuity of care between doctors and patients",
      "Ran problem–solution fit work, user interviews, and go-to-market testing during the University of Edinburgh / Edinburgh Innovations programme",
      "Won Most Viable Business, recognised for real-world applicability, problem–solution fit, and healthcare scalability",
      "The experience directly led to ORAII, which I went on to build",
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
      "Dissertation: Siemens Repair Companion (hybrid retrieval + fault identification), Siemens Digital Industries",
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
    title: "Validate: data & statistics",
    items: [
      "SQL",
      "Python · pandas · NumPy",
      "Exploratory Data Analysis",
      "Hypothesis Testing",
      "A/B Testing & Experiment Design",
      "Simulation Modelling",
      "Data Envelopment Analysis",
      "Power BI",
      "Excel · VBA",
    ],
  },
  {
    title: "Build: machine learning & AI",
    items: [
      "scikit-learn",
      "XGBoost",
      "Quantile Regression · Conformal Prediction",
      "GPT-4o",
      "Llama 3",
      "RAG Pipelines · FAISS",
      "Prompt Engineering",
      "LangChain",
      "Next.js · TypeScript",
      "Supabase · PostgreSQL",
    ],
  },
  {
    title: "Prove: impact & delivery",
    items: [
      "Model Evaluation (ROC-AUC · Precision/Recall)",
      "Automated Validation",
      "Data Storytelling",
      "Executive Reporting",
      "KPI Frameworks",
      "Deployment & CI/CD",
      "Technical SEO",
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
    body: "GPT-4o clinical notes for ORAII, hybrid dense-and-BM25 retrieval for Siemens, an automated LLM-to-PDF pipeline for Astroverse. I prompt-engineer and ship to production, across transcription, generation, billing, and delivery, not just prototypes.",
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
