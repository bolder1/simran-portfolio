import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { moreWork } from "@/lib/site";
import { cn } from "@/lib/utils";

const DOT: Record<string, string> = {
  rose: "bg-rose-deep",
  mint: "bg-mint-deep",
  sky: "bg-sky-deep",
  butter: "bg-butter",
  lilac: "bg-lilac-deep",
};

export default function MoreWork() {
  return (
    <Section id="more">
      <SectionHeading
        kicker="more work ✿"
        title="A little more of everything."
        intro="Product, brand, and visual work from across the years — the supporting cast."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {moreWork.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06}>
            <div className="group h-full rounded-card border border-ink/5 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(36,30,51,0.4)] sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className={cn("size-3 rounded-full", DOT[w.accent])} />
                <span className="text-sm font-medium text-ink-faint">
                  {w.role}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                {w.title}
              </h3>
              <p className="mt-2 text-ink-soft">{w.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
