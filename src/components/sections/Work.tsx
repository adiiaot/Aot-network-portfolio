"use client";

import { useState } from "react";
import Image from "next/image";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const nonFeatured = projects.filter((p) => !p.featured);
  const visible = showAll ? projects : featured.slice(0, 3);

  return (
    <section
      id="work"
      className="py-32 px-6"
      style={{ background: "var(--section-work)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="flex items-end justify-between mb-16 mt-4 flex-wrap gap-4">
          <h2
            className="text-4xl md:text-6xl font-black"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Products I&apos;ve
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              shipped.
            </span>
          </h2>
          {nonFeatured.length > 0 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-xs tracking-widest uppercase flex items-center gap-2 transition-colors"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--accent-primary)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {showAll ? "Show featured only" : "View all projects"} →
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => (
            <div
              key={p.id}
              className="group relative border rounded-2xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-2"
              style={{
                borderColor: `${p.accent}25`,
                background: `linear-gradient(135deg,${p.accent}06 0%, var(--bg-primary) 100%)`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 70px -15px ${p.accent}70` }}
              />
              <div
                className="w-full h-48 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg,${p.accent}12 0%, var(--bg-primary) 100%)`,
                  border: `1px solid ${p.accent}20`,
                }}
              >
                {p.imageUrl ? (
                  <Image
                    src={p.imageUrl}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <>
                    <div style={{ opacity: 0.25 }}>
                      <AOTLogo size={56} />
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <span
                        className="text-[10px] tracking-widest uppercase"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "var(--text-very-dim)",
                        }}
                      >
                        Preview Coming Soon
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-start justify-between mb-3">
                <span
                  className="text-[10px] px-2.5 py-1 rounded-md"
                  style={{
                    background: `${p.accent}15`,
                    color: p.accent,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {p.tag}
                </span>
                <span
                  className={`text-[10px] px-2.5 py-1 rounded-md font-mono ${
                    p.status === "Live"
                      ? "bg-green-500/10 text-green-400"
                      : p.status === "Open"
                      ? "bg-fuchsia-500/10 text-fuchsia-400"
                      : "bg-purple-500/10 text-purple-400"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <h3
                className="text-xl font-black mt-2 mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
              >
                {p.name}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                {p.description}
              </p>
              <div
                className="text-xs mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}
              >
                Role: <span style={{ color: "var(--text-muted)" }}>{p.role}</span>
              </div>
              {p.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] px-2 py-0.5 rounded-md"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "var(--bg-code-tag)",
                        color: "var(--accent-primary)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {(p.liveUrl || p.apkUrl || p.githubUrl) && (
                <div
                  className="text-[10px] mb-3 leading-relaxed"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--text-dim)",
                  }}
                >
                  Tap the demo to preview instantly in Expo Go, or download the APK for native Android experience.
                </div>
              )}
              <div className="flex gap-3 mt-auto">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    className="flex-1 text-center text-xs font-bold py-2.5 rounded-xl transition-all"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.05em",
                      border: "1px solid var(--border-color-light)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-secondary)";
                      e.currentTarget.style.color = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-color-light)";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    Live Demo
                  </a>
                )}
                {p.apkUrl && (
                  <a
                    href={p.apkUrl}
                    className="flex-1 text-center text-xs font-bold py-2.5 rounded-xl transition-all"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.05em",
                      border: "1px solid var(--border-color-light)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-secondary)";
                      e.currentTarget.style.color = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-color-light)";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    Download APK
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    className="flex-1 text-center text-xs font-bold py-2.5 rounded-xl transition-all"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.05em",
                      border: "1px solid var(--border-color-light)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-secondary)";
                      e.currentTarget.style.color = "var(--accent-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-color-light)";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
