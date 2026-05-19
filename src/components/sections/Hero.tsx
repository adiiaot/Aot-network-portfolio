"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { FloatingTriangles } from "@/components/ui/FloatingTriangles";
import { Particles } from "@/components/ui/Particles";
import { STATS } from "@/data/social";

export function Hero() {
  const typed = useTypewriter(
    ["Mobile Apps.", "Web Platforms.", "AI Systems.", "Your Next Product."],
    80,
    2300
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 70% at 50% -10%, #1e0540 0%, #0a0015 45%, #000 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 100%, #0d0022 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 10%, transparent 100%)",
        }}
      />
      <FloatingTriangles />
      <Particles />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ boxShadow: "0 0 150px 50px rgba(168,85,247,0.35)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div
          className="flex justify-center mb-10"
          style={{ animation: "float-logo 7s ease-in-out infinite" }}
        >
          <div className="relative">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
                transform: "scale(2.2)",
              }}
            />
            <AOTLogo size={110} />
          </div>
        </div>

        <div
          className="text-[11px] tracking-[0.6em] text-purple-400/80 mb-6 uppercase"
          style={{ fontFamily: "'Share Tech Mono', monospace" }}
        >
          ── AOT NETWORK ──
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            textShadow: "0 0 80px rgba(168,85,247,0.25)",
          }}
        >
          We build scalable
        </h1>

        <div
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 min-h-[1.25em] flex items-center justify-center gap-2"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg,#e879f9 0%,#a855f7 50%,#7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {typed}
          </span>
          <span className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-purple-400 animate-pulse rounded-sm" />
        </div>

        <p
          className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "17px" }}
        >
          From MVP to production—fast, structured, and reliable.
          <br />
          No fluff. Just execution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 font-black px-10 py-4 rounded-full text-white transition-all"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              letterSpacing: "0.12em",
              background:
                "linear-gradient(135deg,#7c3aed,#a855f7,#c084fc)",
              boxShadow: "0 0 50px rgba(168,85,247,0.55)",
              fontSize: "15px",
            }}
          >
            Start a Project
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 border border-purple-500/40 text-purple-300 hover:border-purple-400/80 hover:bg-purple-500/10 px-10 py-4 rounded-full font-bold transition-all"
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              letterSpacing: "0.12em",
              fontSize: "15px",
            }}
          >
            View Work
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-12 border-t border-purple-900/25 pt-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-black text-white"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  textShadow: "0 0 25px rgba(168,85,247,0.5)",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-[10px] text-zinc-600 tracking-widest uppercase mt-1"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
