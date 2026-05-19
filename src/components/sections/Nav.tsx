"use client";

import { useState, useEffect } from "react";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { NAV_LINKS } from "@/data/social";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-purple-900/25"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <AOTLogo size={34} />
          <div>
            <div
              className="text-white font-black text-sm leading-none tracking-[0.2em]"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              ΔOT
            </div>
            <div
              className="text-purple-400 text-[7px] tracking-[0.35em] leading-none mt-0.5"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              NETWORK
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-zinc-400 hover:text-purple-300 text-[11px] transition-colors tracking-widest uppercase"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 text-xs font-bold px-6 py-2.5 rounded-full border border-purple-500/60 text-purple-300 hover:bg-purple-500/15 transition-all"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            letterSpacing: "0.1em",
            boxShadow: "0 0 20px rgba(168,85,247,0.15)",
          }}
        >
          Contact Us
        </a>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <div className="w-6 space-y-1.5">
            <span
              className={`block h-px bg-purple-400 transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-px bg-purple-400 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-purple-400 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-purple-900/20 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-zinc-400 hover:text-purple-300 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 border border-purple-500/40 text-purple-300 rounded-full py-3 text-center text-sm tracking-widest"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
