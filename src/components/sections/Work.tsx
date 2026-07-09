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
    const threshold = Math.max(30, containerWidth * 0.06);
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

  const prev = wrapIndex(activeIndex - 1);
  const next = wrapIndex(activeIndex + 1);

  const tiltClamped = Math.max(-containerWidth * 0.25, Math.min(containerWidth * 0.25, dragOffset));
  const dragProgress = containerWidth > 0 ? tiltClamped / (containerWidth * 0.25) : 0;

  const renderCard = (idx: number, pos: "prev" | "active" | "next") => {
    const p = allProjects[idx];
    
    const isActive = pos === "active";

    const cardWidth = Math.min(containerWidth * 0.32, 360);
    const gap = cardWidth * 0.15;
    let baseX: number;
    if (pos === "prev") baseX = -(cardWidth / 2 + gap);
    else if (pos === "next") baseX = cardWidth / 2 + gap;
    else baseX = 0;

    const dragShift = isActive ? 0 : dragProgress * baseX * 0.6;
    const translateX = baseX + dragShift;

    let s = isActive ? 1 + Math.abs(dragProgress) * 0.08 : 0.82 - Math.abs(dragProgress) * 0.08;
    let o = isActive ? 1 : Math.max(0.4, 1 - Math.abs(dragProgress) * 0.5);

    if (containerWidth < 500) {
      return null;
    }

    return (
      <div
        key={`${pos}-${idx}`}
        className="absolute top-1/2 cursor-pointer"
        style={{
          width: cardWidth,
          left: "50%",
          height: "auto",
          transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${Math.max(0.5, s)})`,
          opacity: o,
          zIndex: isActive ? 10 : 5,
          transition: isActive
            ? "none"
            : "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          pointerEvents: o < 0.3 ? "none" : "auto",
        }}
        onClick={isActive ? undefined : () => goTo(pos === "prev" ? -1 : 1)}
      >
        <div
          className="relative border rounded-2xl p-5 flex flex-col"
          style={{
            borderColor: `${p.accent}25`,
            background: `linear-gradient(135deg,${p.accent}06 0%, var(--bg-primary) 100%)`,
            boxShadow: isActive ? `0 0 60px -10px ${p.accent}70` : `0 0 20px -5px ${p.accent}30`,
          }}
        >
          {isActive && (
            <Link
              href={`/projects/${p.id}`}
              className="absolute inset-0 z-10 rounded-2xl"
              aria-label={`View details for ${p.name}`}
            />
          )}
          <div
            className="w-full rounded-xl mb-3 flex items-center justify-center relative overflow-hidden shrink-0"
            style={{
              aspectRatio: "16 / 10",
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
                sizes="400px"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full" style={{ opacity: 0.25 }}>
                <AOTLogo size={36} />
              </div>
            )}
          </div>
          <div className="flex items-start justify-between mb-2 shrink-0 gap-1">
            <span
              className="text-[9px] px-2 py-0.5 rounded-md truncate max-w-[65%]"
              style={{
                background: `${p.accent}15`,
                color: p.accent,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {p.tag}
            </span>
            <span
              className={`text-[9px] px-2 py-0.5 rounded-md font-mono shrink-0 ${
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
            className="text-sm md:text-base font-black mb-1 truncate shrink-0"
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
                className="text-xs md:text-sm leading-relaxed mb-2 flex-1 overflow-hidden line-clamp-2"
                style={{ color: "var(--text-muted)" }}
              >
                {p.description}
              </p>
              {p.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2 shrink-0">
                  {p.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[7px] px-1.5 py-0.5 rounded-md"
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
              <Link
                href={`/projects/${p.id}`}
                className="block w-full text-center text-[10px] md:text-xs font-bold py-2 rounded-xl transition-all relative z-20 shrink-0"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.05em",
                  border: "1px solid var(--accent-primary)",
                  color: "#fff",
                  background: "var(--accent-primary)",
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
          className="relative select-none"
          style={{ height: containerWidth < 500 ? "auto" : "500px" }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {containerWidth < 500 ? (
            <div className="flex flex-col items-center gap-6 px-4">
              {(() => {
                const p = allProjects[activeIndex];
                return (
                  <div
                    className="relative border rounded-2xl p-5 flex flex-col w-full max-w-sm"
                    style={{
                      borderColor: `${p.accent}25`,
                      background: `linear-gradient(135deg,${p.accent}06 0%, var(--bg-primary) 100%)`,
                      boxShadow: `0 0 40px -10px ${p.accent}50`,
                    }}
                  >
                    <Link
                      href={`/projects/${p.id}`}
                      className="absolute inset-0 z-10 rounded-2xl"
                    />
                    <div
                      className="w-full rounded-xl mb-3 relative overflow-hidden"
                      style={{
                        aspectRatio: "16 / 10",
                        background: `linear-gradient(135deg,${p.accent}12 0%, var(--bg-primary) 100%)`,
                        border: `1px solid ${p.accent}20`,
                      }}
                    >
                      {p.imageUrl ? (
                        <Image src={p.imageUrl} alt={p.name} fill className="object-cover" sizes="100vw" />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full" style={{ opacity: 0.25 }}>
                          <AOTLogo size={36} />
                        </div>
                      )}
                    </div>
                    <div className="flex items-start justify-between mb-2 gap-1">
                      <span
                        className="text-[9px] px-2 py-0.5 rounded-md truncate max-w-[65%]"
                        style={{ background: `${p.accent}15`, color: p.accent, fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {p.tag}
                      </span>
                      <span className={`text-[9px] px-2 py-0.5 rounded-md font-mono shrink-0 ${p.status === "Live" ? "bg-green-500/10 text-green-400" : p.status === "Open" ? "bg-fuchsia-500/10 text-fuchsia-400" : "bg-purple-500/10 text-purple-400"}`}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="text-base font-black mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}>
                      {p.name}
                    </h3>
                    <p className="text-xs leading-relaxed mb-2 line-clamp-2" style={{ color: "var(--text-muted)" }}>
                      {p.description}
                    </p>
                    <Link
                      href={`/projects/${p.id}`}
                      className="block w-full text-center text-xs font-bold py-2.5 rounded-xl transition-all relative z-20"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "0.05em",
                        border: "1px solid var(--accent-primary)",
                        color: "#fff",
                        background: "var(--accent-primary)",
                      }}
                    >
                      View Details →
                    </Link>
                  </div>
                );
              })()}
            </div>
          ) : (
            <>
              {renderCard(prev, "prev")}
              {renderCard(activeIndex, "active")}
              {renderCard(next, "next")}
            </>
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mt-10">
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