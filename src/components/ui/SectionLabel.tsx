import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      className="inline-flex items-center gap-3 text-xs text-purple-400 uppercase tracking-widest"
      style={{ fontFamily: "'Share Tech Mono', monospace" }}
    >
      <span
        className="w-5 h-px"
        style={{ background: "linear-gradient(90deg,#a855f7,transparent)" }}
      />
      ◆ {children}
      <span
        className="w-5 h-px"
        style={{ background: "linear-gradient(90deg,transparent,#a855f7)" }}
      />
    </div>
  );
}
