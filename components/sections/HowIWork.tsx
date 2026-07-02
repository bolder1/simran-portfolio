import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { process } from "@/lib/site";
import { cn } from "@/lib/utils";

const TINT: Record<string, string> = {
  rose: "bg-rose/40",
  mint: "bg-mint/40",
  sky: "bg-sky/40",
  butter: "bg-butter/40",
  lilac: "bg-lilac/40",
};

export default function HowIWork() {
  return (
    <Section id="process">
      <SectionHeading
        kicker="how i work"
        title={
          <>
            From fuzzy problem to shipped{" "}
            <span className="text-magenta">product</span>.
          </>
        }
        intro="A repeatable loop I trust — grounded in research, closed by measurement."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.08}>
            <div
              className={cn(
                "h-full rounded-card border border-ink/5 p-6",
                TINT[s.accent],
              )}
            >
              <span className="font-display text-3xl font-extrabold text-ink/35">
                {s.step}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-ink-soft">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
