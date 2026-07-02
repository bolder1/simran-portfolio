export type Tone =
  | "rose"
  | "mint"
  | "sky"
  | "butter"
  | "lilac"
  | "magenta"
  | "cream";

export type Chip = { text: string; kind: "pill" | "round"; tone: Tone };

/** The playful, draggable stickers — her skills, values & doodles. */
export const heroChips: Chip[] = [
  { text: "research", kind: "pill", tone: "sky" },
  { text: "empathy", kind: "pill", tone: "rose" },
  { text: "Figma", kind: "pill", tone: "lilac" },
  { text: "prototyping", kind: "pill", tone: "mint" },
  { text: "50K+ users", kind: "pill", tone: "magenta" },
  { text: "data-driven", kind: "pill", tone: "sky" },
  { text: "pixel-perfect", kind: "pill", tone: "rose" },
  { text: "accessible", kind: "pill", tone: "butter" },
  { text: "Gen Z", kind: "pill", tone: "mint" },
  { text: "user-first", kind: "pill", tone: "lilac" },
  { text: "☕", kind: "round", tone: "butter" },
  { text: "♥", kind: "round", tone: "magenta" },
  { text: "★", kind: "round", tone: "sky" },
  { text: "✿", kind: "round", tone: "rose" },
  { text: "✦", kind: "round", tone: "lilac" },
];

const TONE: Record<Tone, string> = {
  rose: "bg-rose text-ink",
  mint: "bg-mint text-ink",
  sky: "bg-sky text-ink",
  butter: "bg-butter text-ink",
  lilac: "bg-lilac text-ink",
  magenta: "bg-magenta text-white",
  cream: "bg-cream text-ink",
};

export function chipClass(c: Chip): string {
  const base =
    "select-none font-semibold shadow-[0_8px_18px_-8px_rgba(36,30,51,0.45)] ring-2 ring-white/70";
  const kind =
    c.kind === "round"
      ? "grid place-items-center size-12 rounded-full text-2xl leading-none"
      : "inline-flex items-center rounded-full px-4 py-2 text-sm whitespace-nowrap";
  return `${base} ${kind} ${TONE[c.tone]}`;
}
