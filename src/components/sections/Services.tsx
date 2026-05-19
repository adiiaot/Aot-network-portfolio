import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Services</SectionLabel>
        <h2
          className="text-4xl md:text-6xl font-black text-white mb-4 mt-4"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          What we{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#e879f9,#7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            execute.
          </span>
        </h2>
        <p
          className="text-zinc-500 mb-16 max-w-md text-sm"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Three focused service lines. All done in-house. No subcontractors.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-purple-900/30 rounded-2xl p-7 hover:border-purple-500/40 transition-all duration-500 group hover:-translate-y-2"
              style={{
                background: "linear-gradient(135deg,#0d0020 0%,#000 100%)",
              }}
            >
              <div
                className="text-4xl text-purple-400 mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: "drop-shadow(0 0 12px rgba(168,85,247,0.6))",
                }}
              >
                {s.icon}
              </div>
              <h3
                className="text-xl font-black text-white mb-3"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-md bg-purple-900/20 text-purple-400/70 border border-purple-900/40"
                    style={{ fontFamily: "'Share Tech Mono', monospace" }}
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
