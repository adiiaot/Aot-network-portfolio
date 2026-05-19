import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/pricing";

export function Process() {
  return (
    <section id="process" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>How We Work</SectionLabel>
        <h2
          className="text-4xl md:text-6xl font-black text-white mb-16 mt-4"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          Four steps.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg,#e879f9,#7c3aed)",
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
              className="relative border border-purple-900/30 rounded-2xl p-6 group hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2"
              style={{
                background:
                  "linear-gradient(135deg,#0d0020 0%,#000 100%)",
              }}
            >
              <div
                className="text-6xl font-black text-white/5 mb-4 leading-none"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {s.number}
              </div>
              <div className="w-8 h-px bg-purple-500/40 mb-4" />
              <h3
                className="text-lg font-black text-white mb-2"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {s.description}
              </p>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-purple-700/60 text-xl z-10">
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
