import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { featuredWork } from "@/lib/site";
import { cn } from "@/lib/utils";

const CHIP: Record<string, string> = {
  rose: "bg-rose/60",
  mint: "bg-mint/60",
  sky: "bg-sky/60",
  butter: "bg-butter/60",
  lilac: "bg-lilac/60",
};

export default function SelectedWork() {
  return (
    <Section id="work">
      <SectionHeading
        kicker="selected work ✦"
        title={
          <>
            Three projects I&apos;m{" "}
            <span className="text-magenta">proud</span> of.
          </>
        }
        intro="Deep dives into the research, the decisions, and the outcomes — not just the pretty screens."
      />

      <div className="mt-14 space-y-8 sm:space-y-12">
        {featuredWork.map((w, i) => (
          <Reveal key={w.slug}>
            <Link
              href={`/work/${w.slug}`}
              className="group block rounded-[2rem] border border-ink/5 bg-surface p-4 shadow-[0_10px_40px_-24px_rgba(36,30,51,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(36,30,51,0.5)] sm:p-5"
            >
              <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
                <div className={cn(i % 2 === 1 && "md:order-2")}>
                  <ImageSlot
                    accent={w.accent}
                    watermark={w.title}
                    alt={`${w.title} — ${w.subtitle}`}
                    className="aspect-[4/3]"
                  />
                </div>
                <div className={cn("px-3 pb-4 md:px-6", i % 2 === 1 && "md:order-1")}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "rounded-pill px-3 py-1 text-xs font-semibold text-ink",
                        CHIP[w.accent],
                      )}
                    >
                      {w.category}
                    </span>
                    <span className="text-sm text-ink-faint">{w.year}</span>
                  </div>
                  <h3 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-lg text-ink-soft">{w.subtitle}</p>
                  <p className="mt-4 font-hand text-2xl text-magenta-ink">
                    {w.metric}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-ink transition-colors group-hover:text-magenta">
                    View case study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
