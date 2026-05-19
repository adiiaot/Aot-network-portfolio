import { SectionLabel } from "@/components/ui/SectionLabel";
import { pricingPlans } from "@/data/pricing";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 px-6"
      style={{
        background:
          "linear-gradient(180deg,#000 0%,#07001e 50%,#000 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Packages</SectionLabel>
        <h2
          className="text-4xl md:text-6xl font-black text-white mb-4 mt-4"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          Transparent pricing.
        </h2>
        <p
          className="text-zinc-500 mb-16 max-w-md text-sm"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Structured packages. Clear deliverables. No hidden costs.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col border transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight
                  ? "border-purple-500/60"
                  : "border-purple-900/30"
              }`}
              style={{
                background: plan.highlight
                  ? "linear-gradient(135deg,#1e0542 0%,#0d0020 100%)"
                  : "linear-gradient(135deg,#0d0020 0%,#000 100%)",
                boxShadow: plan.highlight
                  ? "0 0 80px -20px rgba(168,85,247,0.55)"
                  : "none",
              }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="text-xs font-black px-5 py-1.5 rounded-full text-black tracking-widest"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      background:
                        "linear-gradient(135deg,#e879f9,#a855f7)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    POPULAR
                  </span>
                </div>
              )}
              <div
                className="text-[10px] text-purple-500/50 mb-4 tracking-widest uppercase"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                {plan.tag}
              </div>
              <h3
                className="text-2xl font-black text-white mb-1"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {plan.name}
              </h3>
              <p className="text-sm text-zinc-500 mb-5">
                {plan.description}
              </p>
              <div
                className="text-3xl font-black text-white mb-1"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  textShadow: plan.highlight
                    ? "0 0 30px rgba(168,85,247,0.5)"
                    : "none",
                }}
              >
                {plan.price}
              </div>
              <div
                className="text-[10px] text-zinc-600 mb-8"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                Timeline: {plan.timeline}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-zinc-400"
                  >
                    <span className="text-purple-400 mt-0.5 shrink-0 text-xs">
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
                    ? "text-black hover:opacity-90"
                    : "border border-purple-500/30 hover:border-purple-400/70 text-purple-300 hover:bg-purple-500/10"
                }`}
                style={
                  plan.highlight
                    ? {
                        fontFamily: "'Rajdhani', sans-serif",
                        background:
                          "linear-gradient(135deg,#a855f7,#7c3aed)",
                        boxShadow:
                          "0 0 30px rgba(168,85,247,0.4)",
                        letterSpacing: "0.15em",
                      }
                    : {
                        fontFamily: "'Rajdhani', sans-serif",
                        letterSpacing: "0.12em",
                      }
                }
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div
          className="border border-purple-900/20 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg,#0a0018 0%,#000 100%)",
          }}
        >
          <div
            className="text-[10px] text-purple-500/40 mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            Flexible Scope
          </div>
          <h3
            className="text-2xl font-black text-white mb-3"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Working with a unique budget?
          </h3>
          <p className="text-zinc-500 max-w-lg mx-auto mb-6 text-sm leading-relaxed">
            We selectively partner with founders at various stages depending on
            project scope and long-term potential. Every great product started
            somewhere—schedule a call and let&apos;s find the right structure for
            your build.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-purple-500/30 text-purple-300 hover:border-purple-400/60 hover:bg-purple-500/10 px-8 py-3 rounded-full text-sm font-bold transition-all"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            Schedule a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
