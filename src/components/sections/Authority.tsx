import { AOTLogo } from "@/components/ui/AOTLogo";
import { testimonials } from "@/data/testimonials";

export function Authority() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="flex justify-center mb-8"
          style={{ animation: "float-logo 9s ease-in-out infinite" }}
        >
          <AOTLogo size={60} />
        </div>
        <h2
          className="text-3xl md:text-5xl font-black mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
        >
          Trusted by{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            12,000+
          </span>{" "}
          professionals
          <br />
          following my work on LinkedIn.
        </h2>
        <p
          className="mb-12 text-sm"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-muted)" }}
        >
          Real builders. Real products. Documented in public.
        </p>

        <div className="flex items-center justify-center mb-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border-2 -ml-2 first:ml-0 flex items-center justify-center"
              style={{
                borderColor: "var(--bg-primary)",
                background: `hsl(${265 + i * 10},${45 + i * 3}%,${
                  14 + i * 2
                }%)`,
              }}
            >
              <div
                className="text-[7px]"
                style={{ color: "var(--accent-primary)", opacity: 0.4 }}
              >
                ◆
              </div>
            </div>
          ))}
          <div
            className="w-11 h-11 rounded-full border-2 -ml-2 flex items-center justify-center text-[8px] font-black"
            style={{
              borderColor: "var(--bg-primary)",
              background: "linear-gradient(135deg,#3b0764,#1e1b4b)",
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--accent-primary)",
            }}
          >
            12k+
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-left">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="border rounded-2xl p-5"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--card-bg)",
              }}
            >
              <div
                className="text-xl mb-3"
                style={{
                  color: "var(--accent-primary)",
                  filter: "drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.5))",
                }}
              >
                ❝
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {t.quote}
              </p>
              <p
                className="text-[10px] tracking-widest uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--text-dim)",
                }}
              >
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
