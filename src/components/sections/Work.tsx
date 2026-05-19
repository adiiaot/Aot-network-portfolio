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
      style={{
        background:
          "linear-gradient(180deg,#000 0%,#06001a 50%,#000 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="flex items-end justify-between mb-16 mt-4 flex-wrap gap-4">
          <h2
            className="text-4xl md:text-6xl font-black text-white"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Products we&apos;ve
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg,#e879f9,#a855f7)",
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
              className="text-xs text-purple-400 hover:text-purple-300 tracking-widest uppercase flex items-center gap-2 transition-colors"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
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
                background: `linear-gradient(135deg,${p.accent}06 0%,#000 100%)`,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 70px -15px ${p.accent}70` }}
              />
              <div
                className="w-full h-48 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg,${p.accent}12 0%,#000 100%)`,
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
                        className="text-[10px] tracking-widest text-zinc-700 uppercase"
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
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
                    fontFamily: "'Share Tech Mono', monospace",
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
                className="text-xl font-black text-white mt-2 mb-2"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                {p.name}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div
                className="text-xs text-zinc-700 mb-4"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                Role: <span className="text-zinc-400">{p.role}</span>
              </div>
              {p.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] px-2 py-0.5 rounded-md bg-purple-900/15 text-purple-400/60 border border-purple-900/30"
                      style={{ fontFamily: "'Share Tech Mono', monospace" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-3 mt-auto">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    className="flex-1 text-center text-xs font-bold border border-white/10 hover:border-purple-500/50 hover:text-purple-300 text-zinc-400 py-2.5 rounded-xl transition-all"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Live Site
                  </a>
                )}
                {p.appStoreUrl && (
                  <a
                    href={p.appStoreUrl}
                    className="flex-1 text-center text-xs font-bold border border-white/10 hover:border-purple-500/50 hover:text-purple-300 text-zinc-400 py-2.5 rounded-xl transition-all"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    App Store
                  </a>
                )}
                {p.playStoreUrl && (
                  <a
                    href={p.playStoreUrl}
                    className="flex-1 text-center text-xs font-bold border border-white/10 hover:border-purple-500/50 hover:text-purple-300 text-zinc-400 py-2.5 rounded-xl transition-all"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Play Store
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    className="flex-1 text-center text-xs font-bold border border-white/10 hover:border-purple-500/50 hover:text-purple-300 text-zinc-400 py-2.5 rounded-xl transition-all"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    GitHub
                  </a>
                )}
                {p.caseStudyUrl && (
                  <a
                    href={p.caseStudyUrl}
                    className="flex-1 text-center text-xs font-bold border border-white/10 hover:border-purple-500/50 hover:text-purple-300 text-zinc-400 py-2.5 rounded-xl transition-all"
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Case Study
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
