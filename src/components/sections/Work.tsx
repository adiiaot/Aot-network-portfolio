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
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);
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
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = containerWidth * 0.08;
    if (Math.abs(dragOffset) > threshold) {
      goTo(dragOffset > 0 ? -1 : 1);
    }
    setDragOffset(0);
    startAutoSlide();
  };

  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setActiveIndex((prev) => wrapIndex(prev + 1));
    }, 10000);
  }, [wrapIndex]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [startAutoSlide]);

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

  const isMobile = containerWidth < 640;
  const prev = wrapIndex(activeIndex - 1);
  const next = wrapIndex(activeIndex + 1);

  const dragClamped = Math.max(-containerWidth * 0.25, Math.min(containerWidth * 0.25, dragOffset));
  const dragProgress = containerWidth > 0 ? dragClamped / (containerWidth * 0.25) : 0;

  const renderCard = (idx: number, pos: "prev" | "active" | "next") => {
    const p = allProjects[idx];
    const isActive = pos === "active";

    const cardWidth = isMobile ? Math.min(containerWidth * 0.88, 360) : Math.min(containerWidth * 0.28, 340);
    const overlap = cardWidth * 0.25;
    const sideOffset = cardWidth - overlap;

    let baseX: number;
    if (pos === "prev") baseX = -sideOffset;
    else if (pos === "next") baseX = sideOffset;
    else baseX = 0;

    if (isMobile && !isActive) return null;

    const dragShift = dragProgress * (pos === "prev" ? -sideOffset * 0.4 : pos === "next" ? -sideOffset * 0.4 : 0);
    const translateX = baseX + dragShift;

    const s = isActive
      ? 1 + Math.abs(dragProgress) * 0.06
      : 0.82 - Math.abs(dragProgress) * 0.06;

    return (
      <div
        key={`${pos}-${idx}`}
        className="absolute top-1/2 cursor-pointer"
        style={{
          width: cardWidth,
          left: "50%",
          transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${Math.max(0.5, s)})`,
          opacity: 1,
          zIndex: isActive ? 30 : pos === "prev" || pos === "next" ? 20 : 10,
          transition: isDragging
            ? "none"
            : "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onClick={() => {
          if (!isActive) goTo(pos === "prev" ? -1 : 1);
        }}
      >
        <div
          className="relative rounded-2xl p-5 flex flex-col"
          style={{
            border: isActive ? `2px solid ${p.accent}50` : `1px solid ${p.accent}15`,
            background: isActive
              ? `linear-gradient(135deg, ${p.accent}20 0%, #0f172a 100%)`
              : `linear-gradient(135deg, ${p.accent}10 0%, #0f172a 100%)`,
            boxShadow: isActive
              ? `0 0 60px -5px ${p.accent}50`
              : "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <div
            className="w-full rounded-xl mb-3 relative overflow-hidden shrink-0"
            style={{
              aspectRatio: "16 / 11",
              background: `linear-gradient(135deg,${p.accent}12 0%, #0f172a 100%)`,
              border: `1px solid ${p.accent}20`,
            }}
          >
            {p.imageUrl ? (
              <Image
                src={p.imageUrl}
                alt={p.name}
                fill
                className="object-cover"
                sizes="400px"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full" style={{ opacity: 0.25 }}>
                <AOTLogo size={32} />
              </div>
            )}
          </div>
          <div className="flex items-start justify-between mb-2 shrink-0 gap-1">
            <span
              className="text-[9px] px-2 py-0.5 rounded-md truncate max-w-[65%]"
              style={{
                background: `${p.accent}20`,
                color: p.accent,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {p.tag}
            </span>
            <span
              className={`text-[9px] px-2 py-0.5 rounded-md font-mono shrink-0 ${
                p.status === "Live"
                  ? "bg-emerald-500/15 text-emerald-400"
                  : p.status === "Open"
                    ? "bg-fuchsia-500/15 text-fuchsia-400"
                    : "bg-purple-500/15 text-purple-400"
              }`}
            >
              {p.status}
            </span>
          </div>
          <h3
            className="text-sm md:text-base font-black mb-1 truncate"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {p.name}
          </h3>
          {isActive && (
            <>
              <p
                className="text-xs md:text-sm leading-relaxed mb-3 flex-1 line-clamp-2"
                style={{ color: "var(--text-muted)" }}
              >
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3 shrink-0">
                {p.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[7px] md:text-[8px] px-1.5 py-0.5 rounded-md"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: `${p.accent}15`,
                      color: p.accent,
                      border: `1px solid ${p.accent}25`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${p.id}`}
                className="block w-full text-center text-xs font-bold py-2.5 rounded-xl transition-all duration-200 relative z-20 shrink-0"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.05em",
                  color: "#fff",
                  background: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)`,
                  border: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                View Details →
              </Link>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id="work"
      className="py-24 md:py-32 px-4 md:px-6 overflow-hidden"
      style={{ background: "var(--section-work)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="flex items-end justify-between mb-12 md:mb-16 mt-4 flex-wrap gap-4">
          <h2
            className="text-3xl md:text-6xl font-black"
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
          className="relative select-none rounded-3xl"
          style={{
            height: isMobile ? "480px" : "500px",
          }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {renderCard(prev, "prev")}
          {renderCard(activeIndex, "active")}
          {renderCard(next, "next")}
        </div>

        <div className="flex justify-center items-center gap-3 mt-8 md:mt-10">
          {!isMobile && (
            <button
              onClick={() => goTo(-1)}
              className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              style={{
                width: 36,
                height: 36,
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-color)",
                color: "var(--text-muted)",
              }}
              aria-label="Previous project"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}
          <div className="flex justify-center items-center gap-2">
            {allProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  if (autoSlideRef.current) {
                    clearInterval(autoSlideRef.current);
                    autoSlideRef.current = null;
                  }
                  startAutoSlide();
                }}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === activeIndex ? isMobile ? 24 : 28 : 8,
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
          {!isMobile && (
            <button
              onClick={() => goTo(1)}
              className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              style={{
                width: 36,
                height: 36,
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-color)",
                color: "var(--text-muted)",
              }}
              aria-label="Next project"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}