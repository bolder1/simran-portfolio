import { heroChips, chipClass } from "@/lib/hero-chips";

/** Non-interactive scatter for mobile / reduced-motion — same stickers, placed by hand. */
const POS = [
  "left-[3%] bottom-[7%] -rotate-6",
  "left-[24%] bottom-[3%] rotate-3",
  "left-[9%] bottom-[20%] rotate-[8deg]",
  "left-[42%] bottom-[5%] -rotate-3",
  "right-[26%] bottom-[4%] rotate-6",
  "right-[5%] bottom-[8%] rotate-[-8deg]",
  "right-[13%] bottom-[19%] rotate-3",
  "left-[2%] bottom-[33%] rotate-6",
  "right-[3%] bottom-[30%] -rotate-6",
  "left-[33%] bottom-[15%] -rotate-3",
  "right-[34%] bottom-[13%] rotate-6",
];

export default function HeroStaticChips() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[6]" aria-hidden="true">
      {heroChips.slice(0, POS.length).map((c, i) => (
        <div key={i} className={`absolute ${POS[i]}`}>
          <div className={chipClass(c)}>{c.text}</div>
        </div>
      ))}
    </div>
  );
}
