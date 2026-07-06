import type { SVGProps } from "react";

export function MonsteraLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" aria-hidden {...props}>
      <path d="M100 8c-8 34-38 46-70 52 26 10 30 22 30 40-24 2-40 16-52 40 34-6 52 4 66 28 6-30 6-58-2-86 22 14 40 12 62-2-20-8-28-22-30-42 26 6 44-2 60-26-32 2-52-8-64-36-2 12-4 22-6 32-2-14-2-26 0-40z" />
    </svg>
  );
}

export function PalmLeaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 120" fill="currentColor" aria-hidden {...props}>
      <path d="M6 112c40-72 118-104 208-108-58 22-96 54-120 96-8-30-4-54 6-74-20 22-32 48-38 78-10-14-24-10-56 8z" />
    </svg>
  );
}

export function Pineapple(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 200" fill="currentColor" aria-hidden {...props}>
      <path d="M60 6c-6 14-4 26 2 38-12-8-24-8-36 0 10 6 16 14 18 24-14-2-26 4-34 16 12 2 22 8 28 18-16 4-26 16-30 32 44-10 68-10 112 0-4-16-14-28-30-32 6-10 16-16 28-18-8-12-20-18-34-16 2-10 8-18 18-24-12-8-24-8-36 0 6-12 8-24 2-38-2 8-4 14-4 20-2-6-2-12-4-20z" />
      <ellipse cx="60" cy="150" rx="42" ry="44" opacity="0" />
    </svg>
  );
}

export function SunRays(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden {...props}>
      <g stroke="currentColor" strokeWidth="10" strokeLinecap="round">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2="200"
              y2="40"
              transform={`rotate(${angle} 200 200)`}
              opacity={i % 2 === 0 ? 1 : 0.5}
            />
          );
        })}
      </g>
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M14 8.5V7c0-.83.67-1 1.5-1H17V3h-2.5C11.9 3 11 4.9 11 6.6V8.5H8.5V12H11v9h3v-9h2.3l.7-3.5H14z" />
    </svg>
  );
}

export function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 40c120 26 240 26 360 8s240-44 360-44 240 26 360 30 240-8 360-22v68H0z"
      />
    </svg>
  );
}
