import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      className="inline-flex items-center gap-3 text-xs uppercase tracking-widest"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: "var(--accent-primary)",
      }}
    >
      <span
        className="w-5 h-px"
        style={{ background: "linear-gradient(90deg,var(--accent-primary),transparent)" }}
      />
      ◆ {children}
      <span
        className="w-5 h-px"
        style={{ background: "linear-gradient(90deg,transparent,var(--accent-primary))" }}
      />
    </div>
  );
}
