import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PastelName } from "@/lib/theme";
import { Star, Sparkle, Heart } from "./Doodle";

const GRADIENTS: Record<PastelName, string> = {
  rose: "linear-gradient(135deg, #FBDCE8 0%, #F3B9CE 55%, #E9A6C6 100%)",
  mint: "linear-gradient(135deg, #DFF3EC 0%, #A7D8C8 55%, #8FCBB8 100%)",
  sky: "linear-gradient(135deg, #DCEBF7 0%, #A9CCE8 55%, #93BEE0 100%)",
  butter: "linear-gradient(135deg, #FBEFC9 0%, #F4D07A 55%, #EEC45E 100%)",
  lilac: "linear-gradient(135deg, #EAE0F7 0%, #C9B6E8 55%, #B9A2E0 100%)",
};

/**
 * A real-screen slot. When `src` is provided it renders an optimized next/image;
 * otherwise it shows an on-brand placeholder so the layout is award-ready now
 * and Simran's exports drop straight in later.
 */
export function ImageSlot({
  src,
  alt,
  accent = "lilac",
  label,
  watermark,
  className,
}: {
  src?: string;
  alt: string;
  accent?: PastelName;
  label?: string;
  watermark?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-2xl",
        className,
      )}
      style={{ background: GRADIENTS[accent] }}
      role="img"
      aria-label={alt}
    >
      {/* dotted texture */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(36,30,51,0.35) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      {watermark ? (
        <span className="pointer-events-none absolute font-display text-[18vw] font-extrabold leading-none text-white/25 md:text-[7rem]">
          {watermark}
        </span>
      ) : null}

      <Star className="absolute left-6 top-6 size-7 text-white/70" />
      <Sparkle className="absolute right-8 top-10 size-8 text-white/70" />
      <Heart className="absolute bottom-8 right-10 size-6 text-white/60" />

      <span className="relative z-10 rounded-pill bg-ink/80 px-4 py-2 font-hand text-lg text-cream">
        {label ?? "real screens coming soon ✿"}
      </span>
    </div>
  );
}
