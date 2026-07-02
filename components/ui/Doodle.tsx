/**
 * Custom-authored SVG doodles — 100% owned, tiny, recolor via currentColor.
 * Stroke doodles can animate on with the `draw-path` class + GSAP/CSS.
 */
type DoodleProps = { className?: string };

export function Star({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 1c.85 6.2 3.8 9.15 10 10-6.2.85-9.15 3.8-10 10-.85-6.2-3.8-9.15-10-10 6.2-.85 9.15-3.8 10-10Z" />
    </svg>
  );
}

export function Sparkle({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2c.5 4 1.5 5 5.5 6-4 1-5 2-5.5 6-.5-4-1.5-5-5.5-6 4-1 5-2 5.5-6Z" />
      <circle cx="19" cy="5" r="1.4" />
      <circle cx="5" cy="18" r="1.1" />
    </svg>
  );
}

export function Heart({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 21S3.5 15.5 3.5 9.4C3.5 6.4 5.7 4.5 8.2 4.5c1.7 0 3 .9 3.8 2.2.8-1.3 2.1-2.2 3.8-2.2 2.5 0 4.7 1.9 4.7 4.9C20.5 15.5 12 21 12 21Z" />
    </svg>
  );
}

export function Squiggle({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M3 14c8-12 18-12 26 0s18 12 26 0 18-12 26 0 18 12 26 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Underline({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 200 14"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 9c40-7 120-8 192-3"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
        className="draw-path"
      />
    </svg>
  );
}

export function Arrow({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 8c18 6 34 18 40 34"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M44 42c1-6 0-11-1-15M44 42c-5-1-10-2-14-1"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Loop({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 40" className={className} fill="none" aria-hidden="true">
      <path
        d="M6 34c6-24 22-34 34-26S66 34 52 36 30 18 44 10s28 2 30 12"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Flower({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <g>
        <circle cx="12" cy="5.5" r="3.4" />
        <circle cx="12" cy="18.5" r="3.4" />
        <circle cx="5.5" cy="12" r="3.4" />
        <circle cx="18.5" cy="12" r="3.4" />
      </g>
      <circle cx="12" cy="12" r="3" fill="#241E33" opacity="0.85" />
    </svg>
  );
}
