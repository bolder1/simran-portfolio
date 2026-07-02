/**
 * Non-WebGL hero background — the reduced-motion / mobile / low-GPU / WebGL-fail
 * fallback. A pure-CSS multi-pastel aurora + a few static 2D stickers, designed
 * to be an equally premium experience (not an afterthought).
 */
export default function HeroStaticAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(42% 52% at 20% 26%, rgba(243,185,206,0.92), transparent 70%)",
            "radial-gradient(46% 56% at 80% 18%, rgba(201,182,232,0.88), transparent 70%)",
            "radial-gradient(52% 62% at 76% 78%, rgba(169,204,232,0.82), transparent 72%)",
            "radial-gradient(46% 56% at 14% 84%, rgba(167,216,200,0.82), transparent 72%)",
            "radial-gradient(40% 46% at 52% 54%, rgba(244,208,122,0.5), transparent 70%)",
            "var(--color-cream)",
          ].join(","),
          filter: "saturate(1.04)",
        }}
      />
      {/* static 2D stickers */}
      <Star className="left-[16%] top-[24%] size-10 text-butter" />
      <Heart className="right-[18%] top-[20%] size-11 text-magenta" />
      <Blob className="right-[12%] bottom-[26%] size-16 text-lilac" />
      <Heart className="left-[12%] bottom-[22%] size-8 text-rose" />
      <Star className="left-[46%] top-[14%] size-6 text-sky" />
    </div>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`absolute ${className}`} fill="currentColor" aria-hidden="true">
      <path d="M12 1c.8 5.7 3.5 8.5 9 9-5.5.5-8.2 3.3-9 9-.8-5.7-3.5-8.5-9-9 5.5-.5 8.2-3.3 9-9Z" />
    </svg>
  );
}
function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`absolute ${className}`} fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2 5 5.2 5c2 0 3.3 1.1 4.1 2.3C10.1 6.1 11.4 5 13.4 5 16.6 5 18.2 8.3 16.6 11.7 14.1 16.4 12 21 12 21Z" transform="translate(-0.5 0)" />
    </svg>
  );
}
function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`absolute ${className}`} fill="currentColor" aria-hidden="true">
      <path d="M52 8c14-3 30 5 36 19s2 33-10 43-32 14-45 6S13 45 18 30 38 11 52 8Z" />
    </svg>
  );
}
