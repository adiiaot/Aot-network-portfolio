import { AOTLogo } from "@/components/ui/AOTLogo";
import { testimonials } from "@/data/testimonials";

export function Authority() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="flex justify-center mb-8"
          style={{ animation: "float-logo 9s ease-in-out infinite" }}
        >
          <AOTLogo size={60} />
        </div>
        <h2
          className="text-3xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          Trusted by{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg,#e879f9,#a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            12,000+
          </span>{" "}
          professionals
          <br />
          following our work on LinkedIn.
        </h2>
        <p
          className="text-zinc-500 mb-12 text-sm"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Real builders. Real products. Documented in public.
        </p>

        <div className="flex items-center justify-center mb-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border-2 border-black -ml-2 first:ml-0 flex items-center justify-center"
              style={{
                background: `hsl(${265 + i * 10},${45 + i * 3}%,${
                  14 + i * 2
                }%)`,
              }}
            >
              <div className="text-[7px] text-purple-400/40">◆</div>
            </div>
          ))}
          <div
            className="w-11 h-11 rounded-full border-2 border-black -ml-2 flex items-center justify-center text-[8px] text-purple-300 font-black"
            style={{
              background: "linear-gradient(135deg,#3b0764,#1e1b4b)",
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            12k+
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-left">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="border border-purple-900/30 rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg,#0d0020 0%,#000 100%)",
              }}
            >
              <div
                className="text-purple-400 text-xl mb-3"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(168,85,247,0.5))",
                }}
              >
                ❝
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {t.quote}
              </p>
              <p
                className="text-[10px] text-zinc-600 tracking-widest uppercase"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
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
