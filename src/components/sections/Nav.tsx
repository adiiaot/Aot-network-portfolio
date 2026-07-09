"use client";

import { useState, useEffect } from "react";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { useTheme } from "@/components/ThemeProvider";
import { NAV_LINKS, GITHUB_URL, UPWORK_URL } from "@/data/social";

export function Nav() {
  const { theme, toggle } = useTheme();
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
          ? "border-b backdrop-blur-2xl"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled ? "var(--bg-nav)" : "transparent",
        borderColor: scrolled ? "var(--border-color)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <AOTLogo size={34} />
          <div>
            <div
              className="font-black text-sm leading-none tracking-[0.2em]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
            >
              ΔOT
            </div>
            <div
              className="text-[7px] tracking-[0.35em] leading-none mt-0.5"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent-primary)" }}
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
              className="text-[11px] transition-colors tracking-widest uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ color: "var(--text-muted)" }}
            aria-label="Upwork profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.258c.456-.516.893-1.107 1.343-1.708.16-.217.407-.336.672-.336.125 0 .252.027.37.087 1.207.608 2.02.624 2.494.059.771-.919-.414-2.548-2.14-3.257-.504-.207-1.008-.318-1.504-.318-1.39 0-2.65.713-3.575 1.773l-1.026-.327.149-.628c.463-1.893 1.463-3.183 2.622-3.87.12-.071.254-.104.387-.104.177 0 .352.064.488.179.358.302.553.818.64 1.142.043.16.125.348.236.498.304.41.76.636 1.277.636.511 0 .973-.233 1.299-.655.65-.839.582-2.072-.263-2.994-.429-.469-1.055-.741-1.719-.741-.422 0-.852.108-1.241.318-.667.359-1.199.97-1.567 1.738-.489 1.019-.732 2.177-.732 3.456 0 .223.008.447.024.671 0 .008.003.016.003.024l-.491.177c-1.237.445-2.668 1.401-3.524 2.468-.281.349-.78.424-1.154.166-.373-.258-.483-.743-.245-1.13.163-.265.339-.528.505-.781.779-1.186 1.686-2.568 1.779-2.715.09-.144.201-.267.333-.359.75-.523 1.635-.799 2.552-.799.802 0 1.572.196 2.258.567-1.66.787-2.984 2.353-3.08 4.235-.006.099-.01.196-.01.293 0 1.373.619 2.642 1.698 3.497-1.348.606-2.482 1.511-3.032 2.675-.163.341-.062.743.243.966.165.121.36.181.558.181.17 0 .341-.047.493-.142.893-.562 1.729-.776 2.535-.776.243 0 .492.016.754.05 1.163.155 2.235.615 3.153 1.254.166.115.362.171.558.171.248 0 .49-.1.661-.28.118-.123.186-.285.186-.457 0-.053-.005-.107-.018-.16a5.356 5.356 0 00-.393-1.235c.555-.213 1.12-.291 1.678-.291.645 0 1.281.131 1.882.388.219.093.462.143.71.143.392 0 .758-.145 1.037-.408.29-.272.463-.647.489-1.058.041-.712-.415-1.387-1.144-1.694-.726-.307-1.87-.569-2.893-.569zm-4.867 4.963a4.054 4.054 0 01-.701.17c-.332.049-.651.074-.955.074-1.196 0-2.233-.357-3.094-1.017.857-.136 1.699-.428 2.482-.901.018-.01.035-.02.052-.03.214.095.437.17.668.217.332.07.653.106.963.106.544 0 1.059-.108 1.536-.314-.274.572-.612 1.143-.951 1.695z"/>
            </svg>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ color: "var(--text-muted)" }}
            aria-label="GitHub profile"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <button
            onClick={toggle}
            className="p-2 rounded-full transition-all hover:scale-110"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-bold px-6 py-2.5 rounded-full transition-all"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.1em",
              border: "1px solid var(--border-color-strong)",
              color: "var(--accent-primary)",
              boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Contact Me
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-1.5 rounded-full transition-all"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <div className="w-6 space-y-1.5">
              <span
                className={`block h-px transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
                style={{ background: "var(--accent-primary)" }}
              />
              <span
                className={`block h-px transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
                style={{ background: "var(--accent-primary)" }}
              />
              <span
                className={`block h-px transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
                style={{ background: "var(--accent-primary)" }}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden px-6 py-5 flex flex-col gap-4"
          style={{
            background: "var(--bg-primary)",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase transition-colors"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}
            >
              {l.label}
            </a>
          ))}
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 text-sm tracking-widest transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--text-muted)",
            }}
            onClick={() => setOpen(false)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.258c.456-.516.893-1.107 1.343-1.708.16-.217.407-.336.672-.336.125 0 .252.027.37.087 1.207.608 2.02.624 2.494.059.771-.919-.414-2.548-2.14-3.257-.504-.207-1.008-.318-1.504-.318-1.39 0-2.65.713-3.575 1.773l-1.026-.327.149-.628c.463-1.893 1.463-3.183 2.622-3.87.12-.071.254-.104.387-.104.177 0 .352.064.488.179.358.302.553.818.64 1.142.043.16.125.348.236.498.304.41.76.636 1.277.636.511 0 .973-.233 1.299-.655.65-.839.582-2.072-.263-2.994-.429-.469-1.055-.741-1.719-.741-.422 0-.852.108-1.241.318-.667.359-1.199.97-1.567 1.738-.489 1.019-.732 2.177-.732 3.456 0 .223.008.447.024.671 0 .008.003.016.003.024l-.491.177c-1.237.445-2.668 1.401-3.524 2.468-.281.349-.78.424-1.154.166-.373-.258-.483-.743-.245-1.13.163-.265.339-.528.505-.781.779-1.186 1.686-2.568 1.779-2.715.09-.144.201-.267.333-.359.75-.523 1.635-.799 2.552-.799.802 0 1.572.196 2.258.567-1.66.787-2.984 2.353-3.08 4.235-.006.099-.01.196-.01.293 0 1.373.619 2.642 1.698 3.497-1.348.606-2.482 1.511-3.032 2.675-.163.341-.062.743.243.966.165.121.36.181.558.181.17 0 .341-.047.493-.142.893-.562 1.729-.776 2.535-.776.243 0 .492.016.754.05 1.163.155 2.235.615 3.153 1.254.166.115.362.171.558.171.248 0 .49-.1.661-.28.118-.123.186-.285.186-.457 0-.053-.005-.107-.018-.16a5.356 5.356 0 00-.393-1.235c.555-.213 1.12-.291 1.678-.291.645 0 1.281.131 1.882.388.219.093.462.143.71.143.392 0 .758-.145 1.037-.408.29-.272.463-.647.489-1.058.041-.712-.415-1.387-1.144-1.694-.726-.307-1.87-.569-2.893-.569zm-4.867 4.963a4.054 4.054 0 01-.701.17c-.332.049-.651.074-.955.074-1.196 0-2.233-.357-3.094-1.017.857-.136 1.699-.428 2.482-.901.018-.01.035-.02.052-.03.214.095.437.17.668.217.332.07.653.106.963.106.544 0 1.059-.108 1.536-.314-.274.572-.612 1.143-.951 1.695z"/>
            </svg>
            Upwork
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 text-sm tracking-widest transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--text-muted)",
            }}
            onClick={() => setOpen(false)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="/#contact"
            className="mt-2 rounded-full py-3 text-center text-sm tracking-widest"
            style={{
              fontFamily: "'Inter', sans-serif",
              border: "1px solid var(--border-color-strong)",
              color: "var(--accent-primary)",
            }}
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
