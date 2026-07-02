import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";
import { metrics } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Sparkle } from "@/components/ui/Doodle";

const TINT: Record<string, string> = {
  rose: "bg-rose/40",
  mint: "bg-mint/40",
  sky: "bg-sky/40",
  butter: "bg-butter/40",
  lilac: "bg-lilac/40",
};

export default function Metrics() {
  return (
    <Section id="impact" className="py-16 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-hand text-2xl text-magenta-ink sm:text-3xl">
          the short version
        </p>
        <p className="mt-2 text-xl text-ink sm:text-2xl">
          I design research-led products — and the results tend to speak up.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <div
              className={cn(
                "relative h-full rounded-card border border-ink/5 p-6 sm:p-7",
                TINT[m.accent],
              )}
            >
              <Sparkle className="absolute right-4 top-4 size-5 text-ink/25" />
              <div className="flex items-end font-display text-5xl font-extrabold leading-none text-ink sm:text-6xl">
                <CountUp to={m.number} />
                <span>{m.suffix}</span>
              </div>
              <AnimatedUnderline
                className="mt-2 h-3 w-24"
                delay={0.25 + i * 0.05}
              />
              <p className="mt-3 font-semibold text-ink">{m.label}</p>
              {m.sub ? (
                <p className="text-sm text-ink-soft">{m.sub}</p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
