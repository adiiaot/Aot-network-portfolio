import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/pricing";

export function Process() {
  return (
    <section
      id="process"
      className="py-32 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel>How I Work</SectionLabel>
        <h2
          className="text-4xl md:text-6xl font-black mb-16 mt-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
        >
          Four steps.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Zero surprises.
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((s, i) => (
            <div
              key={s.number}
              className="relative border rounded-2xl p-6 group transition-all duration-500 hover:-translate-y-2 hover:border-[var(--card-hover-border)]"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--card-bg)",
              }}
            >
              <div
                className="text-6xl font-black mb-4 leading-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "var(--text-very-dim)",
                  opacity: 0.4,
                }}
              >
                {s.number}
              </div>
              <div
                className="w-8 h-px mb-4"
                style={{ background: "var(--accent-primary)", opacity: 0.4 }}
              />
              <h3
                className="text-lg font-black mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {s.description}
              </p>
              {i < processSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 text-xl z-10"
                  style={{ color: "var(--text-dim)", opacity: 0.6 }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
