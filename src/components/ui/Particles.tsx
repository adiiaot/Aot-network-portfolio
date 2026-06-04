"use client";

import { useRef, useEffect, useState } from "react";

function getCSSVar(name: string): string {
  if (typeof document === "undefined") return "#a855f7";
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#a855f7";
}

export function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colors = useRef(["#a855f7", "#c084fc", "#7c3aed", "#e879f9"]);

  useEffect(() => {
    colors.current = [
      getCSSVar("--accent-primary"),
      getCSSVar("--accent-secondary"),
      getCSSVar("--accent-soft"),
      getCSSVar("--accent-tertiary"),
    ];
  }, []);

  const particles = useRef(
    Array.from({ length: 24 }, (_, i) => ({
      w: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      ci: i % 4,
      dur: Math.random() * 9 + 6,
      delay: Math.random() * 6,
    }))
  );

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.current.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.w,
            height: p.w,
            background: colors.current[p.ci],
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `float-particle ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
