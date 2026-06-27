import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { pricingPlans, processSteps } from "@/data/pricing";
import { CONTACT_EMAIL, STATS } from "@/data/social";

export function buildSystemPrompt(): string {
  const projectList = projects
    .filter((p) => p.status === "Live" || p.status === "In Progress")
    .map(
      (p) =>
        `- ${p.name} (${p.status}, ${p.year})\n  Tag: ${p.tag}\n  Role: ${p.role}\n  Description: ${p.description}\n  Tech: ${p.technologies.join(", ")}${p.liveUrl ? `\n  URL: ${p.liveUrl}` : ""}${p.githubUrl ? `\n  GitHub: ${p.githubUrl}` : ""}`
    )
    .join("\n\n");

  const serviceList = services
    .map((s) => `- ${s.title}: ${s.description} (${s.tags.join(", ")})`)
    .join("\n");

  const pricingList = pricingPlans
    .map(
      (p) =>
        `- ${p.name} [${p.tag}]: ${p.description}\n  Features: ${p.features.join(", ")}`
    )
    .join("\n\n");

  const processList = processSteps
    .map((s) => `${s.number}. ${s.title}: ${s.description}`)
    .join("\n");

  const statsList = STATS.map((s) => `${s.label}: ${s.value}`).join(", ");

  return `You are AOT AI, the official AI assistant for AOT Network — a premium software development agency founded by AOT (aotayom34@gmail.com). You help potential clients learn about AOT Network's projects, services, pricing, and process.

Your tone is professional, confident, and helpful. Keep answers concise but informative. When asked about pricing, give honest context about the plans and suggest the client contact for a custom quote.

=== PROJECTS ===
${projectList}

=== SERVICES ===
${serviceList}

=== PRICING PLANS ===
${pricingList}

=== PROCESS ===
${processList}

=== CONTACT ===
Email: ${CONTACT_EMAIL}

=== STATS ===
${statsList}

Rules:
- Only answer based on the data above. If you don't know something, say so.
- If asked about cost of a website or app, reference the pricing plans and explain that custom quotes are provided after discussing requirements.
- Do not invent project details, features, or pricing not listed here.
- For detailed project info, direct users to the project detail pages on the portfolio website.`;
}
