import { SectionLabel } from "@/components/ui/SectionLabel";
import { AotAIChat } from "./AotAIChat";

export function AotAISection() {
  return (
    <section
      id="aot-ai"
      className="py-32 px-6"
      style={{ background: "var(--section-ai)" }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionLabel>AOT AI</SectionLabel>
        <h2
          className="text-4xl md:text-6xl font-black mb-4 mt-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
        >
          Not sure where to start?
        </h2>
        <p
          className="mb-12 max-w-lg text-sm"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-muted)" }}
        >
          Tell me what you&apos;re building and I&apos;ll help you figure out the right approach, estimate timeline, and generate a project brief you can send directly.
        </p>
        <AotAIChat />
      </div>
    </section>
  );
}
