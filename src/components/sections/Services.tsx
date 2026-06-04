import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Services</SectionLabel>
        <h2
          className="text-4xl md:text-6xl font-black mb-4 mt-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
        >
          What I{" "}
          <span
            style={{
              background: "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            execute.
          </span>
        </h2>
        <p
          className="mb-16 max-w-md text-sm"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-muted)" }}
        >
          Three focused service lines. All done by me. No subcontractors.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="border rounded-2xl p-7 transition-all duration-500 group hover:-translate-y-2 hover:border-[var(--card-hover-border)]"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--card-bg)",
              }}
            >
              <div
                className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{
                  color: "var(--accent-primary)",
                  filter: "drop-shadow(0 0 12px rgba(var(--accent-rgb), 0.6))",
                }}
              >
                {s.icon}
              </div>
              <h3
                className="text-xl font-black mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-md"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: "var(--bg-code-tag)",
                      color: "var(--accent-primary)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
