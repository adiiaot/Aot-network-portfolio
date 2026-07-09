import { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter MVP",
    price: "$600",
    range: "$300 – $900",
    timeline: "~24 hrs · 1 week",
    tag: "Early-stage",
    description: "Validate your idea fast with a clean, functional product.",
    features: [
      "Web or mobile MVP",
      "Core feature set",
      "Clean UI/UX design",
      "Deployment + handoff",
      "1-week post-launch support",
    ],
    highlight: false,
  },
  {
    name: "Growth Build",
    price: "$1,000",
    range: "$1,500 – $3,000",
    timeline: "~40 hrs · 1–2 weeks",
    tag: "Most Popular",
    description: "Full product build for startups ready to scale.",
    features: [
      "Full product build",
      "Backend infrastructure",
      "Dashboards + admin tools",
      "Third-party integrations",
      "Performance optimization",
      "30-day support",
    ],
    highlight: true,
  },
  {
    name: "AI Systems",
    price: "$2,000",
    range: "$3,500 – $5,000",
    timeline: "~80 hrs · 2–3 weeks",
    tag: "Advanced",
    description: "AI-first products, automation systems, and complex logic.",
    features: [
      "LLM integrations",
      "Custom AI workflows",
      "API design + development",
      "Automation pipelines",
      "Complex business logic",
      "Ongoing retainer available",
    ],
    highlight: false,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "I understand your product, users, and goals. No assumptions, no guessing.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Scope, tech stack, timeline, and milestones locked before I write a line of code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Structured sprints. Regular updates. Clean, maintainable, production-grade code.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deployment, QA, handoff. I ship—and I stay until it's live and stable.",
  },
];
