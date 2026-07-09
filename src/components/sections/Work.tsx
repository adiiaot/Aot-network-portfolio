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
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const allProjects = projects;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.offsetWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
    const threshold = Math.max(40, containerWidth * 0.08);
    if (Math.abs(dragOffset) > threshold) {
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

  const isMobile = containerWidth < 768;
  const prev = wrapIndex(activeIndex - 1);
  const next = wrapIndex(activeIndex + 1);
  const prev2 = wrapIndex(activeIndex - 2);
  const next2 = wrapIndex(activeIndex + 2);
  const prev3 = wrapIndex(activeIndex - 3);
  const next3 = wrapIndex(activeIndex + 3);
  const prev4 = wrapIndex(activeIndex - 4);
  const next4 = wrapIndex(activeIndex + 4);
  const prev5 = wrapIndex(activeIndex - 5);
  const next5 = wrapIndex(activeIndex + 5);

  const tiltClamped = Math.max(-containerWidth * 0.3, Math.min(containerWidth * 0.3, dragOffset));
  const dragProgress = containerWidth > 0 ? tiltClamped / (containerWidth * 0.3) : 0;

  const getCardConfig = (position: string) => {
    if (containerWidth < 480) {
      const configs: Record<string, { xPct: number; s: number }> = {
        prev: { xPct: -75, s: 0.7 },
        active: { xPct: 0, s: 1 },
        next: { xPct: 75, s: 0.7 },
      };
      return configs[position] || null;
    }
    if (containerWidth < 768) {
      const configs: Record<string, { xPct: number; s: number }> = {
        prev: { xPct: -65, s: 0.75 },
        active: { xPct: 0, s: 1 },
        next: { xPct: 65, s: 0.75 },
      };
      return configs[position] || null;
    }
    const configs: Record<string, { xPct: number; s: number }> = {
      prev2: { xPct: -85, s: 0.55 },
      prev: { xPct: -48, s: 0.78 },
      active: { xPct: 0, s: 1 },
      next: { xPct: 48, s: 0.78 },
      next2: { xPct: 85, s: 0.55 },
    };
    return configs[position] || null;
  };

  const cards = !isMobile
    ? [
        { idx: prev2, pos: "prev2" as const },
        { idx: prev, pos: "prev" as const },
        { idx: activeIndex, pos: "active" as const },
        { idx: next, pos: "next" as const },
        { idx: next2, pos: "next2" as const },
      ]
    : [
        { idx: prev4, pos: "prev" as const },
        { idx: prev3, pos: "prev" as const },
        { idx: prev2, pos: "prev" as const },
        { idx: prev, pos: "prev" as const },
        { idx: activeIndex, pos: "active" as const },
        { idx: next, pos: "next" as const },
        { idx: next2, pos: "next" as const },
        { idx: next3, pos: "next" as const },
        { idx: next4, pos: "next" as const },
        { idx: next5, pos: "next" as const },
      ];

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

        <div
          ref={containerRef}
          className="relative select-none mx-auto"
          style={{ height: isMobile ? "440px" : "520px", maxWidth: "1000px" }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {cards.map(({ idx, pos }) => {
            const cfg = getCardConfig(pos);
            if (!cfg) return null;
            const isActive = pos === "active";
            const pct = cfg.xPct;
            const zIndexOrder = isMobile
              ? pos === "active" ? 20 : Math.abs(pct) > 70 ? 1 : 10 - Math.abs(pct)
              : pos === "active" ? 5 : pos === "prev" || pos === "next" ? 3 : 1;

            const dragShift = isActive
              ? 0
              : dragProgress * pct;

            const translateX = containerWidth > 0 ? (pct + dragShift) * containerWidth / 100 : 0;
            const s = isActive
              ? 1 + Math.abs(dragProgress) * 0.15
              : cfg.s - Math.abs(dragProgress) * 0.12;
            const o = isActive
              ? 1
              : Math.max(0, Math.min(1, 1 - Math.abs(dragProgress)));

            const cardWidth = isMobile ? "min(85vw, 320px)" : "min(40vw, 340px)";

            return (
              <div
                key={`${pos}-${idx}`}
                className="absolute top-0 flex items-start justify-center cursor-pointer pt-4"
                style={{
                  left: "50%",
                  width: cardWidth,
                  height: "100%",
                  transform: `translateX(-50%) translateX(${translateX}px) scale(${Math.max(0.4, s)})`,
                  opacity: o,
                  zIndex: zIndexOrder,
                  transition: isActive
                    ? "none"
                    : "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  pointerEvents: o < 0.05 ? "none" : "auto",
                }}
                onClick={isActive ? undefined : () => goTo(pos === "prev" || pos === "prev2" ? -1 : 1)}
              >
                <div
                  className="relative border rounded-2xl p-5 flex flex-col transition-shadow duration-500 w-full"
                  style={{
                    borderColor: `${allProjects[idx].accent}25`,
                    background: `linear-gradient(135deg,${allProjects[idx].accent}06 0%, var(--bg-primary) 100%)`,
                    boxShadow: isActive ? `0 0 70px -15px ${allProjects[idx].accent}70` : "none",
                    height: isActive ? "100%" : "88%",
                  }}
                >
                  {isActive && (
                    <Link
                      href={`/projects/${allProjects[idx].id}`}
                      className="absolute inset-0 z-10 rounded-2xl"
                      aria-label={`View details for ${allProjects[idx].name}`}
                    />
                  )}
                  <div
                    className="w-full h-32 md:h-40 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden shrink-0"
                    style={{
                      background: `linear-gradient(135deg,${allProjects[idx].accent}12 0%, var(--bg-primary) 100%)`,
                      border: `1px solid ${allProjects[idx].accent}20`,
                    }}
                  >
                    {allProjects[idx].imageUrl ? (
                      <Image
                        src={allProjects[idx].imageUrl}
                        alt={allProjects[idx].name}
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
                  <div className="flex items-start justify-between mb-2 shrink-0 gap-1">
                    <span
                      className="text-[10px] px-2 py-1 rounded-md truncate max-w-[60%]"
                      style={{
                        background: `${allProjects[idx].accent}15`,
                        color: allProjects[idx].accent,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {allProjects[idx].tag}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-1 rounded-md font-mono shrink-0 ${
                        allProjects[idx].status === "Live"
                          ? "bg-green-500/10 text-green-400"
                          : allProjects[idx].status === "Open"
                            ? "bg-fuchsia-500/10 text-fuchsia-400"
                            : "bg-purple-500/10 text-purple-400"
                      }`}
                    >
                      {allProjects[idx].status}
                    </span>
                  </div>
                  <h3
                    className="text-base md:text-lg font-black mb-1 truncate shrink-0"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {allProjects[idx].name}
                  </h3>
                  {isActive && (
                    <>
                      <p
                        className="text-xs md:text-sm leading-relaxed mb-3 flex-1 overflow-hidden line-clamp-3"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {allProjects[idx].description}
                      </p>
                      <div
                        className="text-[10px] md:text-xs mb-3 shrink-0"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "var(--text-dim)",
                        }}
                      >
                        Role:{" "}
                        <span style={{ color: "var(--text-muted)" }}>{allProjects[idx].role}</span>
                      </div>
                      {allProjects[idx].technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3 shrink-0">
                          {allProjects[idx].technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="text-[7px] md:text-[8px] px-2 py-0.5 rounded-md"
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
                          {allProjects[idx].technologies.length > 4 && (
                            <span
                              className="text-[7px] md:text-[8px] px-2 py-0.5 rounded-md"
                              style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                color: "var(--text-dim)",
                                border: "1px solid var(--border-color)",
                              }}
                            >
                              +{allProjects[idx].technologies.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                      <Link
                        href={`/projects/${allProjects[idx].id}`}
                        className="block w-full text-center text-[10px] md:text-xs font-bold py-2.5 rounded-xl transition-all relative z-20 shrink-0"
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
          })}
        </div>

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