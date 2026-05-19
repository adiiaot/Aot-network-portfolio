"use client";

import { useRef } from "react";

const COLORS = ["#a855f7", "#c084fc", "#7c3aed", "#e879f9"];

export function Particles() {
  const particles = useRef(
    Array.from({ length: 24 }, (_, i) => ({
      w: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: COLORS[i % 4],
      dur: Math.random() * 9 + 6,
      delay: Math.random() * 6,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.w,
            height: p.w,
            background: p.color,
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
