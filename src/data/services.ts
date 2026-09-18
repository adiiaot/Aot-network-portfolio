import { Service } from "@/types";

export const services: Service[] = [
  {
    icon: "\u25C8",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps. From concept to App Store. Built for performance, designed for real users.",
    tags: ["React Native", "iOS", "Android", "Push Notifications"],
  },
  {
    icon: "\u25AB",
    title: "Web & Dashboard Systems",
    description:
      "Scalable web platforms, SaaS dashboards, and admin systems. Clean architecture. Real infrastructure.",
    tags: ["Next.js", "React", "Supabase", "REST APIs"],
  },
  {
    icon: "◎",
    title: "AI Systems & Integrations",
    description:
      "LLM-powered features, automation pipelines, and intelligent workflows built for production—not demos.",
    tags: ["OpenAI", "Anthropic", "Automation", "Custom APIs"],
  },
  {
    icon: "⬔",
    title: "Trading Systems & Signals API",
    description:
      "Systematic signal engines, verifiable trade ledgers, MT5 EA delivery, and API access — proven live by L2 Signals.",
    tags: ["MT5 EA", "Dukascopy", "Firestore", "REST & Webhooks"],
  },
];
