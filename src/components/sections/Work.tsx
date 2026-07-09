"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const allProjects = projects;

  const wrapIndex = (i: number) =>
    ((i % allProjects.length) + allProjects.length) % allProjects.length;

  const goTo = useCallback(
    (dir: number) => {
      setActiveIndex((prev) => wrapIndex(prev + dir));
    },
    [wrapIndex]
  );

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 60) {
      goTo(dragOffset > 0 ? -1 : 1);
    }
    setDragOffset(0);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (e.deltaX > 0) goTo(1);
        else goTo(-1);
      }
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [goTo]);

  const prev = wrapIndex(activeIndex - 1);
  const next = wrapIndex(activeIndex + 1);
  const prev2 = wrapIndex(activeIndex - 2);
  const next2 = wrapIndex(activeIndex + 2);

  const totalTilt = dragOffset;
  const tiltClamped = Math.max(-120, Math.min(120, totalTilt));
  const dragProgress = tiltClamped / 120;

  return (
    <section
      id="work"
      className="py-32 px-6 overflow-hidden"
      style={{ background: "var(--section-work)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="flex items-end justify-between mb-16 mt-4 flex-wrap gap-4">
          <h2
            className="text-4xl md:text-6xl font-black"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "var(--text-primary)",
            }}
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
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative select-none"
          style={{ height: "520px" }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Slide 2 back */}
          <CarouselCard
            project={allProjects[prev2]}
            position="prev2"
            dragProgress={dragProgress}
            onClick={() => goTo(-1)}
          />

          <CarouselCard
            project={allProjects[prev]}
            position="prev"
            dragProgress={dragProgress}
            onClick={() => goTo(-1)}
          />

          <CarouselCard
            project={allProjects[activeIndex]}
            position="active"
            dragProgress={dragProgress}
            onClick={() => {}}
            active
          />

          <CarouselCard
            project={allProjects[next]}
            position="next"
            dragProgress={dragProgress}
            onClick={() => goTo(1)}
          />

          <CarouselCard
            project={allProjects[next2]}
            position="next2"
            dragProgress={dragProgress}
            onClick={() => goTo(1)}
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {allProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 28 : 8,
                height: 8,
                background:
                  i === activeIndex
                    ? "var(--accent-primary)"
                    : "var(--border-color-light)",
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselCard({
  project,
  position,
  scale,
  dragProgress,
  onClick,
  active,
}: {
  project: (typeof import("@/data/projects").projects)[0];
  position: "prev2" | "prev" | "active" | "next" | "next2";
  scale?: number;
  dragProgress: number;
  onClick: () => void;
  active?: boolean;
}) {
  const p = project;

  const baseConfig: Record<string, { x: number; s: number; o: number; z: number }> = {
    prev2: { x: -140, s: 0.6, o: 0, z: 0 },
    prev: { x: -65, s: 0.8, o: 0.5, z: 1 },
    active: { x: 0, s: 1, o: 1, z: 3 },
    next: { x: 65, s: 0.8, o: 0.5, z: 1 },
    next2: { x: 140, s: 0.6, o: 0, z: 0 },
  };

  const cfg = baseConfig[position];
  const dragShift = dragProgress * (position === "active" ? 0 : position === "prev" ? -65 : position === "next" ? -65 : position === "prev2" ? -140 : position === "next2" ? -140 : 0);

  const translateX = cfg.x + dragShift;
  const s = active ? cfg.s + Math.abs(dragProgress) * 0.2 : cfg.s - Math.abs(dragProgress) * 0.1;
  const o = Math.max(0, Math.min(1, cfg.o - Math.abs(dragProgress) * 0.3));

  return (
    <div
      className="absolute inset-0 flex items-center justify-center cursor-pointer"
      style={{
        transform: `translateX(${translateX}px) scale(${Math.max(0.4, s)})`,
        opacity: o,
        zIndex: cfg.z,
        transition: !active
          ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          : "none",
        pointerEvents: o < 0.1 ? "none" : "auto",
      }}
      onClick={active ? undefined : onClick}
    >
      <div
        className="relative border rounded-2xl p-6 flex flex-col transition-shadow duration-500 w-full max-w-sm mx-2"
        style={{
          borderColor: `${p.accent}25`,
          background: `linear-gradient(135deg,${p.accent}06 0%, var(--bg-primary) 100%)`,
          boxShadow: active ? `0 0 70px -15px ${p.accent}70` : "none",
          height: active ? "100%" : "90%",
        }}
      >
        {active && (
          <Link
            href={`/projects/${p.id}`}
            className="absolute inset-0 z-10 rounded-2xl"
            aria-label={`View details for ${p.name}`}
          />
        )}
        <div
          className="w-full h-40 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden shrink-0"
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
              sizes="(max-width: 768px) 100vw, 400px"
            />
          ) : (
            <>
              <div style={{ opacity: 0.25 }}>
                <AOTLogo size={40} />
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
        <div className="flex items-start justify-between mb-2 shrink-0">
          <span
            className="text-[10px] px-2.5 py-1 rounded-md truncate max-w-[60%]"
            style={{
              background: `${p.accent}15`,
              color: p.accent,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {p.tag}
          </span>
          <span
            className={`text-[10px] px-2.5 py-1 rounded-md font-mono shrink-0 ${
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
          className="text-lg font-black mb-1 truncate shrink-0"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "var(--text-primary)",
          }}
        >
          {p.name}
        </h3>
        {active && (
          <>
            <p
              className="text-sm leading-relaxed mb-3 flex-1 overflow-hidden line-clamp-3"
              style={{ color: "var(--text-muted)" }}
            >
              {p.description}
            </p>
            <div
              className="text-xs mb-3 shrink-0"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--text-dim)",
              }}
            >
              Role:{" "}
              <span style={{ color: "var(--text-muted)" }}>{p.role}</span>
            </div>
            {p.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3 shrink-0">
                {p.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[8px] px-2 py-0.5 rounded-md"
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
                {p.technologies.length > 5 && (
                  <span
                    className="text-[8px] px-2 py-0.5 rounded-md"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--text-dim)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    +{p.technologies.length - 5}
                  </span>
                )}
              </div>
            )}
            <Link
              href={`/projects/${p.id}`}
              className="block w-full text-center text-xs font-bold py-2.5 rounded-xl transition-all relative z-20 shrink-0"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.05em",
                border: "1px solid var(--accent-primary)",
                color: "#fff",
                background: "var(--accent-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              View Details →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}