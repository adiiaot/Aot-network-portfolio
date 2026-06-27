import Link from "next/link";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { AotAIChat } from "@/components/sections/AotAIChat";

export default function AotAIPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--bg-primary)" }}>
      <header
        className="px-6 py-4 flex items-center justify-between"
        style={{
          borderBottom: "1px solid var(--border-color)",
          background: "var(--bg-nav)",
        }}
      >
        <Link href="/" className="flex items-center gap-3">
          <AOTLogo size={30} />
          <span
            className="font-black text-sm tracking-[0.25em]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            AOT AI
          </span>
        </Link>
        <Link
          href="/"
          className="text-[10px] tracking-widest uppercase transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-dim)",
          }}
        >
          ← Back
        </Link>
      </header>

      <div className="flex-1 max-w-3xl w-full mx-auto px-4 py-12 flex flex-col">
        <AotAIChat />
      </div>
    </main>
  );
}
