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
        style={{ background: "var(--hero-glow)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-glow-bottom)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(var(--accent-rgb), 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--accent-rgb), 0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 10%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 10%, transparent 100%)",
        }}
      />
      <FloatingTriangles />
      <Particles />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ boxShadow: "0 0 150px 50px rgba(var(--accent-rgb), 0.35)" }}
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
                  "radial-gradient(circle, rgba(var(--accent-rgb), 0.25) 0%, transparent 70%)",
                filter: "blur(40px)",
                transform: "scale(2.2)",
              }}
            />
            <AOTLogo size={110} />
          </div>
        </div>

        <div
          className="text-[11px] tracking-[0.6em] mb-6 uppercase"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--accent-primary)",
            opacity: 0.8,
          }}
        >
          ── AOT NETWORK ──
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "var(--text-primary)",
            textShadow: "0 0 80px rgba(var(--accent-rgb), 0.25)",
          }}
        >
          I build scalable
        </h1>

        <div
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 min-h-[1.25em] flex items-center justify-center gap-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg,var(--accent-soft) 0%,var(--accent-primary) 50%,var(--accent-secondary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {typed}
          </span>
          <span
            className="inline-block w-1 h-16 md:h-20 lg:h-24 animate-pulse rounded-sm"
            style={{ background: "var(--accent-primary)" }}
          />
        </div>

        <p
          className="text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "17px",
            color: "var(--text-muted)",
          }}
        >
          From MVP to production—fast, structured, and reliable.
          <br />
          No fluff. Just execution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 font-black px-10 py-4 rounded-full transition-all"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.12em",
              background:
                "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary),var(--accent-tertiary))",
              boxShadow: "0 0 50px rgba(var(--accent-rgb), 0.55)",
              fontSize: "15px",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
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
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold transition-all"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.12em",
              fontSize: "15px",
              border: "1px solid var(--border-color-strong)",
              color: "var(--accent-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.08)";
              e.currentTarget.style.borderColor = "var(--accent-secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border-color-strong)";
            }}
          >
            View Work
          </a>
        </div>

        <div
          className="flex flex-wrap justify-center gap-12 pt-10"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-black"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "var(--text-primary)",
                  textShadow: "0 0 25px rgba(var(--accent-rgb), 0.5)",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-[10px] tracking-widest uppercase mt-1"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--text-dim)",
                }}
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
