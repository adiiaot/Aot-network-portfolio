"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const colors = [
    "linear-gradient(135deg,#a855f7,#7c3aed)",
    "linear-gradient(135deg,#c084fc,#a855f7)",
  ];
  const idx = name.length % colors.length;
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
      style={{ background: colors[idx] }}
    >
      {initials}
    </div>
  );
}

export default function AboutPage() {
  const RESUME_PATH = "/resume/Oluwadare_Taye_Ayo_Full_Stack_Product_Engineer_CV.pdf";

  const SKILLS = [
    {
      category: "Mobile",
      items: ["React Native", "Expo", "React.js", "Next.js", "TypeScript"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "API Design", "Authentication"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "Prisma", "Supabase", "Firebase"],
    },
    {
      category: "AI",
      items: ["OpenAI API", "Claude API", "AI Integrations", "AI Workflows"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "AWS", "Google Cloud"],
    },
  ];

  const EXPERIENCE = [
    {
      role: "Product Engineer / AI Systems Lead",
      company: "Trivian Technologies",
      items: [
        "Building AI-powered backend systems",
        "Designing APIs and system architecture",
        "Working on production-ready software",
      ],
    },
    {
      role: "Contract Mobile Developer",
      company: "BigCut LLC",
      items: [
        "Building React Native applications",
        "Integrating AI features, payments, analytics, and backend services",
      ],
    },
    {
      role: "Founder / Product Engineer",
      company: "AOT Network",
      items: [
        "Building software products and developer-focused systems",
      ],
    },
  ];

  const SOCIALS = [
    { label: "GitHub", href: "https://github.com/adiiaot" },
    { label: "Portfolio", href: "https://aot-network-portfolio.vercel.app/" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aotayo" },
    { label: "X (Twitter)", href: "https://x.com/Aot_ayo" },
    { label: "Email", href: "mailto:aotayom34@gmail.com" },
  ];
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* ── Hero ── */}
      <section className="pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-12 transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--text-dim)",
            }}
          >
            ← Back to home
          </Link>
          <h1
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            Building scalable mobile, web, and{" "}
            <span
              style={{
                background: "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI-powered products
            </span>
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            I&apos;m Oluwadare Taye Ayo (<strong style={{ fontWeight: 700, color: "var(--text-secondary)" }}>AOT Ayo</strong>), a Full Stack Product Engineer building cross-platform
            applications, backend systems, and intelligent software experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
                color: "#fff",
                letterSpacing: "0.05em",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              View Resume
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                border: "1px solid var(--border-color-strong)",
                color: "var(--accent-primary)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ── About Me ── */}
      <section className="py-24 px-6" style={{ background: "var(--bg-section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>About Me</SectionLabel>
          <h2
            className="text-3xl md:text-5xl font-black mt-4 mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Who I am
          </h2>
          <div
            className="max-w-3xl text-base leading-relaxed space-y-4"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              I am a product-focused software engineer experienced in building
              mobile applications, backend APIs, and AI-powered systems. I
              specialize in React Native, TypeScript, Node.js, databases, cloud
              services, and modern AI integrations.
            </p>
            <p>
              I enjoy turning ideas into production-ready products with clean
              architecture and great user experiences. Every project I ship is
              built with scalability, performance, and maintainability in mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Skills</SectionLabel>
          <h2
            className="text-3xl md:text-5xl font-black mt-4 mb-12"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Tech stack &amp; expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl p-6 border transition-all"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div
                  className="text-[10px] uppercase tracking-widest mb-4"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--accent-primary)",
                    opacity: 0.7,
                  }}
                >
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-lg"
                      style={{
                        background: "var(--bg-code-tag)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-color-light)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="py-24 px-6" style={{ background: "var(--bg-section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Experience</SectionLabel>
          <h2
            className="text-3xl md:text-5xl font-black mt-4 mb-12"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Where I&apos;ve worked
          </h2>
          <div className="space-y-0">
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.company} className="relative pl-8 pb-12 last:pb-0">
                <div
                  className="absolute left-[7px] top-2 bottom-0 w-px"
                  style={{
                    background: i < EXPERIENCE.length - 1
                      ? "linear-gradient(var(--accent-primary), var(--border-color))"
                      : "none",
                  }}
                />
                <div
                  className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2"
                  style={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--accent-primary)",
                  }}
                />
                <div className="pl-6">
                  <div
                    className="text-xs font-bold mb-1"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--accent-primary)",
                    }}
                  >
                    {exp.company}
                  </div>
                  <div
                    className="text-lg font-black mb-3"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {exp.role}
                  </div>
                  <ul className="space-y-1.5">
                    {exp.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span style={{ color: "var(--accent-primary)" }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommendations ── */}
      <section className="py-24 px-6" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Recommendations</SectionLabel>
          <h2
            className="text-3xl md:text-5xl font-black mt-4 mb-12"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            What people say
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border-color)",
                  background: "var(--card-bg)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Avatar name={t.name} />
                  <div className="min-w-0">
                    <div
                      className="font-bold text-sm truncate"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs truncate mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-dim)" }}
                    >
                      {t.title}
                    </div>
                    <span
                      className="inline-block text-[9px] px-2 py-0.5 rounded mt-1.5 tracking-wider"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "rgba(var(--accent-rgb), 0.1)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      {t.relationship}
                    </span>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.recommendation}
                </p>
                <div
                  className="flex items-center gap-1.5 text-[9px] tracking-wider"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--text-very-dim)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                  {t.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social / Contact ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Connect</SectionLabel>
          <h2
            className="text-3xl md:text-5xl font-black mt-4 mb-12"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Find me online
          </h2>
          <div
            className="rounded-2xl p-8 border"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl transition-all text-sm"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    border: "1px solid var(--border-color-light)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.color = "var(--accent-primary)";
                    e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-color-light)";
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span>{s.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Resume ── */}
      <section className="py-24 px-6" style={{ background: "var(--bg-section-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Resume</SectionLabel>
          <h2
            className="text-3xl md:text-5xl font-black mt-4 mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Download my CV
          </h2>
          <p
            className="mb-10 max-w-lg text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Get a full overview of my experience, skills, and past projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3.5 rounded-xl transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
                color: "#fff",
                letterSpacing: "0.05em",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3.5 rounded-xl transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                border: "1px solid var(--border-color-strong)",
                color: "var(--accent-primary)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            Have a project idea?{" "}
            <span
              style={{
                background: "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let&apos;s build something scalable.
            </span>
          </h2>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-bold px-8 py-4 rounded-xl transition-all"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
              color: "#fff",
              letterSpacing: "0.08em",
            }}
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  );
}
