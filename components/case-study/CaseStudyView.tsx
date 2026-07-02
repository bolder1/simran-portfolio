import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import { getCaseStudy } from "@/lib/case-studies";
import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Star, Sparkle, Heart } from "@/components/ui/Doodle";
import { cn } from "@/lib/utils";
import type { PastelName } from "@/lib/theme";

const BAND: Record<PastelName, string> = {
  rose: "bg-rose/30",
  mint: "bg-mint/30",
  sky: "bg-sky/30",
  butter: "bg-butter/30",
  lilac: "bg-lilac/30",
};
const CHIP: Record<PastelName, string> = {
  rose: "bg-rose/60",
  mint: "bg-mint/60",
  sky: "bg-sky/60",
  butter: "bg-butter/60",
  lilac: "bg-lilac/60",
};
const PANEL: Record<PastelName, string> = {
  rose: "bg-rose/25",
  mint: "bg-mint/25",
  sky: "bg-sky/25",
  butter: "bg-butter/25",
  lilac: "bg-lilac/25",
};
const DOT: Record<PastelName, string> = {
  rose: "bg-rose-deep",
  mint: "bg-mint-deep",
  sky: "bg-sky-deep",
  butter: "bg-butter",
  lilac: "bg-lilac-deep",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-hand text-2xl text-magenta-ink">{children}</p>
  );
}

const wrap = "mx-auto w-full max-w-4xl px-6";
const wrapWide = "mx-auto w-full max-w-6xl px-6";

export default function CaseStudyView({ study }: { study: CaseStudy }) {
  const next = getCaseStudy(study.nextSlug);

  return (
    <article className="pb-8">
      {/* ---------------------------------------------------------- Cover */}
      <header className={cn("relative overflow-hidden pb-16 pt-28 sm:pt-32", BAND[study.accent])}>
        <Star className="absolute left-[8%] top-28 size-8 rotate-12 text-white/70" />
        <Sparkle className="absolute right-[10%] top-36 size-10 text-white/70" />

        <div className={wrapWide}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" /> All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className={cn("rounded-pill px-3 py-1 text-xs font-semibold text-ink", CHIP[study.accent])}>
              {study.category}
            </span>
            <span className="text-sm text-ink-faint">{study.year}</span>
            {study.draft ? (
              <span className="rounded-pill border border-ink/10 bg-cream/70 px-3 py-1 text-xs font-medium text-ink-soft">
                ✦ full write-up in progress
              </span>
            ) : null}
          </div>

          <Reveal>
            <h1 className="mt-5 font-display text-6xl font-extrabold tracking-tight text-ink sm:text-8xl">
              {study.title}
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-2xl text-xl text-ink-soft sm:text-2xl">
              {study.tagline}
            </p>
            <p className="mt-4 font-hand text-2xl text-magenta-ink">
              {study.topMetric}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <ImageSlot
                accent={study.accent}
                alt={`${study.title} — cover`}
                label="hero shot coming soon ✿"
                watermark={study.title}
                className="aspect-[16/9]"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------------------------------------------------------- Meta */}
      <section className={cn(wrapWide, "py-12")}>
        <div className="grid gap-6 rounded-card border border-ink/5 bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
          {[
            { k: "Role", v: study.meta.role },
            { k: "Timeline", v: study.meta.timeline },
            { k: "Team", v: study.meta.team },
            { k: "Tools", v: study.meta.tools.join(" · ") },
          ].map((m) => (
            <div key={m.k}>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                {m.k}
              </p>
              <p className="mt-1.5 font-medium text-ink">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- Overview */}
      <section className={cn(wrap, "py-10")}>
        <Reveal>
          <p className="text-xl leading-relaxed text-ink sm:text-2xl">
            {study.overview}
          </p>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- Problem */}
      <section className={cn(wrap, "py-10")}>
        <Reveal>
          <div className={cn("rounded-card p-7 sm:p-10", PANEL[study.accent])}>
            <Kicker>the problem</Kicker>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              What was actually broken
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {study.problem}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- Research */}
      <section className={cn(wrap, "py-10")}>
        <Reveal>
          <Kicker>research</Kicker>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Talking to real people first
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            {study.research.body}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <ul className="space-y-3">
              {study.research.methods.map((m) => (
                <li key={m} className="flex gap-3 text-ink">
                  <span className={cn("mt-2 size-2.5 shrink-0 rounded-full", DOT[study.accent])} />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid gap-3">
              {study.research.stats.map((s) => (
                <div key={s.label} className={cn("rounded-2xl p-4", PANEL[study.accent])}>
                  <span className="font-display text-3xl font-extrabold text-ink">
                    {s.value}
                  </span>
                  <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- Personas */}
      {study.personas ? (
        <section className={cn(wrapWide, "py-10")}>
          <Reveal>
            <Kicker>who we designed for</Kicker>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
              The people behind the data
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {study.personas.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="h-full rounded-card border border-ink/5 bg-surface p-6">
                  <div className="flex items-center gap-2.5">
                    <span className={cn("size-3 rounded-full", DOT[p.accent])} />
                    <span className="font-display text-xl font-bold text-ink">{p.name}</span>
                    <span className="text-sm text-ink-faint">· {p.tag}</span>
                  </div>
                  <p className="mt-3 font-hand text-xl text-magenta-ink">“{p.quote}”</p>
                  <p className="mt-3 text-ink-soft">{p.needs}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* ---------------------------------------------------------- Insights */}
      <section className={cn(wrapWide, "py-10")}>
        <Reveal>
          <Kicker>the insights ✦</Kicker>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            What the research told us to do
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {study.insights.map((ins, i) => (
            <Reveal key={ins.title} delay={i * 0.06}>
              <div className={cn("h-full rounded-card p-6", PANEL[study.accent])}>
                <span className="font-display text-3xl font-extrabold text-ink/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{ins.title}</h3>
                <p className="mt-2 text-ink-soft">{ins.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- Process */}
      <section className={cn(wrap, "py-10")}>
        <Reveal>
          <Kicker>the process</Kicker>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            From insight to interface
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{study.process.body}</p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {study.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="flex gap-4 rounded-2xl border border-ink/5 bg-surface p-5">
                <span className="font-display text-2xl font-extrabold text-magenta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- Solution */}
      <section className={cn(wrapWide, "py-10")}>
        <Reveal>
          <Kicker>the solution</Kicker>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            The experience we shipped
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {study.solution.body}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {study.solution.screens.map((s, i) => (
            <Reveal key={s.caption} delay={(i % 3) * 0.06}>
              <figure>
                <ImageSlot
                  accent={s.accent}
                  alt={`${study.title} — ${s.caption}`}
                  label="screen coming ✿"
                  className="aspect-[4/5]"
                />
                <figcaption className="mt-3">
                  <p className="font-semibold text-ink">{s.caption}</p>
                  {s.note ? (
                    <p className="font-hand text-lg text-magenta-ink">↳ {s.note}</p>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- Outcome */}
      <section className={cn(wrap, "py-10")}>
        <Reveal>
          <div className="rounded-card border border-ink/5 bg-ink p-7 text-cream sm:p-10">
            <p className="font-hand text-2xl text-rose">the outcome</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              What changed after it shipped
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream/80">
              {study.outcome.body}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {study.outcome.metrics.map((m) => (
                <div key={m.label}>
                  <span className="font-display text-4xl font-extrabold text-butter sm:text-5xl">
                    {m.value}
                  </span>
                  <p className="mt-1 text-sm text-cream/70">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- Reflection */}
      <section className={cn(wrap, "py-10")}>
        <Reveal>
          <div className="relative">
            <Heart className="absolute -left-2 -top-3 size-7 text-rose" />
            <Kicker>reflection</Kicker>
            <p className="mt-3 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              {study.reflection}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- Next */}
      {next ? (
        <section className={cn(wrapWide, "py-12")}>
          <Reveal>
            <Link
              href={`/work/${next.slug}`}
              className={cn(
                "group flex flex-col items-start justify-between gap-4 rounded-card border border-ink/5 p-8 transition-all hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center",
                BAND[next.accent],
              )}
            >
              <div>
                <p className="font-hand text-xl text-magenta-ink">next project</p>
                <p className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                  {next.title}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-pill bg-ink px-6 py-3 font-semibold text-cream">
                View
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </section>
      ) : null}
    </article>
  );
}
