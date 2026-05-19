interface AOTLogoProps {
  size?: number;
}

export function AOTLogo({ size = 48 }: AOTLogoProps) {
  const id = `g${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={`glow-${id}`}>
          <feGaussianBlur stdDeviation="2.5" result="cb" />
          <feMerge>
            <feMergeNode in="cb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient
          id={`lg-${id}`}
          x1="50"
          y1="5"
          x2="50"
          y2="95"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <polygon
        points="50,5 97,91 3,91"
        stroke={`url(#lg-${id})`}
        strokeWidth="3.5"
        fill="none"
        filter={`url(#glow-${id})`}
      />
      <polygon
        points="50,21 83,81 17,81"
        stroke={`url(#lg-${id})`}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#glow-${id})`}
        opacity="0.8"
      />
      <polygon
        points="50,37 69,71 31,71"
        stroke={`url(#lg-${id})`}
        strokeWidth="2"
        fill="none"
        filter={`url(#glow-${id})`}
        opacity="0.6"
      />
    </svg>
  );
}
