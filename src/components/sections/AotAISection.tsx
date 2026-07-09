"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AotAISection() {
  return (
    <section
      id="aot-ai"
      className="py-32 px-6"
      style={{ background: "var(--section-ai)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>AOT AI</SectionLabel>
        <h2
          className="text-4xl md:text-6xl font-black mb-4 mt-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
        >
          Not sure where to start?
        </h2>
        <p
          className="mb-12 max-w-lg mx-auto text-sm"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-muted)" }}
        >
          Tell me what you&apos;re building and I&apos;ll help you figure out the right approach, estimate timeline, and generate a project brief you can send directly.
        </p>

        <Link
          href="/aot-ai"
          className="block text-left rounded-2xl p-6 border transition-all hover:-translate-y-1"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--card-bg)",
          }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
              style={{
                background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
                color: "#fff",
              }}
            >
              AI
            </div>
            <div>
              <div
                className="text-sm font-bold"
                style={{ color: "var(--text-primary)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                AOT AI Assistant
              </div>
              <div
                className="text-[11px]"
                style={{ color: "var(--text-dim)" }}
              >
                Online — Ask me anything
              </div>
            </div>
          </div>

          <div
            className="rounded-xl px-4 py-3 text-sm mb-3 inline-block"
            style={{
              background: "var(--bg-code-tag)",
              border: "1px solid var(--border-color)",
              color: "var(--text-muted)",
              borderBottomLeftRadius: "4px",
            }}
          >
            Hi! Tell me about your project and I&apos;ll help you figure out the best approach, tech stack, and what it might cost.
          </div>

          <div className="flex items-center gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
            <Link
              href="/aot-ai"
              className="h-9 flex-1 rounded-lg px-3 flex items-center text-xs"
              style={{
                background: "var(--bg-input)",
                border: "1px solid var(--border-color)",
                color: "var(--text-very-dim)",
              }}
            >
              Ask about projects, pricing, or services...
            </Link>
            <Link
              href="/aot-ai"
              className="text-xs font-bold px-4 py-2 rounded-lg"
              style={{
                background: "var(--accent-primary)",
                color: "#fff",
              }}
            >
              Send
            </Link>
          </div>

          <div
            className="mt-5 text-xs font-bold text-center py-2 rounded-lg transition-colors"
            style={{
              background: "rgba(var(--accent-rgb), 0.08)",
              color: "var(--accent-primary)",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            OPEN FULL CHAT →
          </div>
        </Link>
      </div>
    </section>
  );
}