import { AOTLogo } from "./AOTLogo";

const tris = [
  { left: 8, top: 12, size: 130, dur: 10, delay: 0 },
  { left: 78, top: 20, size: 80, dur: 13, delay: 1.5 },
  { left: 22, top: 65, size: 55, dur: 9, delay: 3 },
  { left: 68, top: 72, size: 95, dur: 12, delay: 2 },
  { left: 42, top: 35, size: 45, dur: 8, delay: 0.8 },
  { left: 88, top: 82, size: 65, dur: 11, delay: 4 },
];

export function FloatingTriangles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {tris.map((t, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${t.left}%`,
            top: `${t.top}%`,
            animation: `float-tri ${t.dur}s ease-in-out infinite`,
            animationDelay: `${t.delay}s`,
          }}
        >
          <AOTLogo size={t.size} />
        </div>
      ))}
    </div>
  );
}
