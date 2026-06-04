import { SectionLabel } from "@/components/ui/SectionLabel";
import { pricingPlans } from "@/data/pricing";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 px-6"
      style={{ background: "var(--section-pricing)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Packages</SectionLabel>
        <h2
          className="text-4xl md:text-6xl font-black mb-4 mt-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
        >
          Transparent pricing.
        </h2>
        <p
          className="mb-16 max-w-md text-sm"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-muted)" }}
        >
          Structured packages. Clear deliverables. No hidden costs.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col border transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight ? "" : ""
              }`}
              style={{
                borderColor: plan.highlight ? "var(--accent-primary)" : "var(--border-color)",
                background: plan.highlight
                  ? "linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-card) 100%)"
                  : "var(--card-bg)",
                boxShadow: plan.highlight
                  ? "0 0 80px -20px rgba(var(--accent-rgb), 0.55)"
                  : "none",
              }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="text-xs font-black px-5 py-1.5 rounded-full tracking-widest"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      background:
                        "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
                      letterSpacing: "0.15em",
                      color: "#fff",
                    }}
                  >
                    POPULAR
                  </span>
                </div>
              )}
              <div
                className="text-[10px] mb-4 tracking-widest uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--text-dim)",
                  opacity: 0.7,
                }}
              >
                {plan.tag}
              </div>
              <h3
                className="text-2xl font-black mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
              >
                {plan.name}
              </h3>
              <p
                className="text-sm mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {plan.description}
              </p>
              <div
                className="text-3xl font-black mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "var(--text-primary)",
                  textShadow: plan.highlight
                    ? "0 0 30px rgba(var(--accent-rgb), 0.5)"
                    : "none",
                }}
              >
                {plan.price}
              </div>
              <div
                className="text-[10px] mb-8"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}
              >
                Timeline: {plan.timeline}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="mt-0.5 shrink-0 text-xs"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      ◆
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center font-black py-3.5 rounded-xl transition-all text-sm tracking-widest ${
                  plan.highlight
                    ? "text-white hover:opacity-90"
                    : "hover:bg-[rgba(var(--accent-rgb),0.1)] hover:border-[var(--accent-secondary)]"
                }`}
                style={
                  plan.highlight
                    ? {
                        fontFamily: "'Inter', sans-serif",
                        background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
                        boxShadow: "0 0 30px rgba(var(--accent-rgb), 0.4)",
                        letterSpacing: "0.15em",
                      }
                    : {
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "0.12em",
                        border: "1px solid var(--border-color-strong)",
                        color: "var(--accent-primary)",
                      }
                }
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div
          className="border rounded-2xl p-8 text-center"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--card-bg)",
          }}
        >
          <div
            className="text-[10px] mb-3 tracking-widest uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--text-dim)",
              opacity: 0.7,
            }}
          >
            Flexible Scope
          </div>
          <h3
            className="text-2xl font-black mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Working with a unique budget?
          </h3>
          <p
            className="max-w-lg mx-auto mb-6 text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            I selectively partner with founders at various stages depending on
            project scope and long-term potential. Every great product started
            somewhere—schedule a call and let&apos;s find the right structure for
            your build.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all hover:bg-[rgba(var(--accent-rgb),0.1)] hover:border-[var(--accent-secondary)]"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.1em",
              border: "1px solid var(--border-color-strong)",
              color: "var(--accent-primary)",
            }}
          >
            Contact Me About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
