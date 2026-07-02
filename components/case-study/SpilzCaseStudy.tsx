import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { spilz } from "@/lib/spilz";
import { site } from "@/lib/site";
import { Reveal, Pop } from "@/components/motion/Reveal";
import { Star, Sparkle, Heart, Squiggle } from "@/components/ui/Doodle";
import { cn } from "@/lib/utils";

const wrap = "mx-auto w-full max-w-6xl px-6";
const wrapText = "mx-auto w-full max-w-4xl px-6";

const TINT: Record<string, string> = {
  rose: "bg-rose/30",
  mint: "bg-mint/30",
  sky: "bg-sky/30",
  butter: "bg-butter/30",
  lilac: "bg-lilac/30",
};
const DOT: Record<string, string> = {
  rose: "bg-rose-deep",
  mint: "bg-mint-deep",
  sky: "bg-sky-deep",
  butter: "bg-butter",
  lilac: "bg-lilac-deep",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="font-hand text-2xl text-magenta-ink sm:text-3xl">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
      {children}
    </h2>
  );
}

export default function SpilzCaseStudy() {
  return (
    <article className="pb-8">
      {/* ------------------------------------------------------------ COVER */}
      <header className="relative overflow-hidden bg-lilac/30 pb-16 pt-28 sm:pt-32">
        <Star className="absolute left-[6%] top-28 size-8 rotate-12 text-butter" />
        <Sparkle className="absolute right-[8%] top-40 size-10 text-magenta/60" />
        <Heart className="absolute bottom-16 left-[10%] size-7 text-rose-deep/70" />

        <div className={cn(wrap, "grid items-center gap-10 md:grid-cols-2")}>
          <div>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" /> Back home
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-pill bg-lilac/70 px-3 py-1 text-xs font-semibold text-ink">
                {spilz.category}
              </span>
              <span className="text-sm text-ink-faint">{spilz.year}</span>
            </div>

            <Reveal>
              <div className="mt-5 flex items-end gap-4">
                <h1 className="font-display text-6xl font-extrabold tracking-tight text-ink sm:text-8xl">
                  SPILZ
                </h1>
                <Image
                  src={spilz.logo}
                  alt="SPILZ logo"
                  width={110}
                  height={110}
                  className="mb-2 h-14 w-auto rotate-6 sm:h-20"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">
                {spilz.tagline}
              </p>
              <p className="mt-4 font-hand text-2xl text-magenta-ink sm:text-3xl">
                {spilz.topMetric}
              </p>
            </Reveal>
          </div>

          <Pop className="relative mx-auto w-64 sm:w-80">
            <div className="rotate-3 rounded-3xl bg-surface p-3 shadow-[0_24px_60px_-24px_rgba(36,30,51,0.45)]">
              <Image
                src={spilz.hero}
                alt="Hand-drawn photo-booth strip of friends — the spirit of SPILZ"
                width={640}
                height={920}
                className="rounded-2xl"
                priority
              />
            </div>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 -rotate-2 rounded-pill bg-butter px-4 py-1.5 font-hand text-lg text-ink shadow-md">
              friendship, but real ✿
            </span>
          </Pop>
        </div>
      </header>

      {/* ------------------------------------------------------------- META */}
      <section className={cn(wrap, "py-10")}>
        <div className="grid gap-6 rounded-card border border-ink/5 bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
          {[
            { k: "Role", v: spilz.meta.role },
            { k: "Timeline", v: spilz.meta.timeline },
            { k: "Team", v: spilz.meta.team },
            { k: "Tools", v: spilz.meta.tools.join(" · ") },
          ].map((m) => (
            <div key={m.k}>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{m.k}</p>
              <p className="mt-1.5 font-medium text-ink">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- HOOK */}
      <section className={cn(wrap, "py-12")}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Kicker>let&apos;s start with a question</Kicker>
          <H2>{spilz.hook.question}</H2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6">
          {spilz.hook.generations.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center gap-3 rounded-card border border-ink/5 bg-surface p-4 text-center sm:p-6">
                <div className="grid aspect-square w-full place-items-center overflow-hidden rounded-2xl bg-shell">
                  {g.img ? (
                    <Image
                      src={g.img}
                      alt={`${g.label} illustration`}
                      width={300}
                      height={300}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <span className="font-display text-6xl font-extrabold text-magenta sm:text-8xl">
                      ?
                    </span>
                  )}
                </div>
                <p className="font-display text-lg font-bold text-ink">{g.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- HYPOTHESIS */}
      <section className={cn(wrapText, "py-10")}>
        <Reveal>
          <div className="rounded-card bg-lilac/25 p-7 sm:p-10">
            <Kicker>the hypothesis</Kicker>
            <p className="mt-4 text-lg leading-relaxed text-ink sm:text-xl">
              {spilz.hypothesis}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------ BACKGROUND RESEARCH */}
      <section className={cn(wrap, "py-12")}>
        <Reveal>
          <Kicker>background research · gen z behaviour</Kicker>
          <H2>What the desk research said</H2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{spilz.background.intro}</p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          <Pop className="lg:order-2">
            <figure className="rounded-card border border-ink/5 bg-surface p-3">
              <Image
                src={spilz.background.image}
                alt="Sketch exploring how Gen Z answers 'How are you feeling today?'"
                width={700}
                height={800}
                className="w-full rounded-2xl object-contain"
              />
              <figcaption className="p-3 text-center font-hand text-xl text-magenta-ink">
                “{spilz.background.imageCaption}”
              </figcaption>
            </figure>
          </Pop>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:order-1">
            {spilz.background.learnings.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.06}>
                <div className="h-full rounded-card border border-ink/5 bg-surface p-6">
                  <span className="font-display text-2xl font-extrabold text-magenta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{l.title}</h3>
                  <p className="mt-2 text-ink-soft">{l.body}</p>
                  {"source" in l && l.source ? (
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-faint">
                      {l.source}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* other apps */}
        <Reveal className="mt-12">
          <div className="rounded-card bg-sky/25 p-6 sm:p-8">
            <p className="font-hand text-2xl text-magenta-ink">what about the other apps?</p>
            <div className="mt-5 grid items-center gap-6 md:grid-cols-2">
              <Image
                src={spilz.background.otherApps.image}
                alt="Competitive analysis of the social apps Gen Z already uses"
                width={900}
                height={700}
                className="w-full rounded-2xl bg-surface object-contain"
              />
              <ul className="space-y-4">
                {spilz.background.otherApps.notes.map((n) => (
                  <li key={n} className="flex gap-3 text-lg text-ink">
                    <span className="mt-2.5 size-2.5 shrink-0 rounded-full bg-sky-deep" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --------------------------------------------------------- INTERVIEWS */}
      <section className={cn(wrap, "py-12")}>
        <Reveal>
          <Kicker>primary research</Kicker>
          <H2>In-depth interviews were conducted</H2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{spilz.interviews.intro}</p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          {spilz.interviews.facts.map((f) => (
            <span
              key={f.k}
              className="rounded-pill border border-ink/10 bg-surface px-4 py-2 text-sm text-ink"
            >
              <strong className="font-semibold">{f.k}:</strong> {f.v}
            </span>
          ))}
        </div>
        <p className="mt-3 font-hand text-xl text-ink-soft">{spilz.interviews.note}</p>

        <Reveal className="mt-10">
          <p className="font-display text-2xl font-bold text-ink">
            Insights were exciting<span className="text-magenta">…</span>
          </p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {spilz.interviews.stats.map((s, i) => (
            <Reveal key={s.value + i} delay={i * 0.07}>
              <div
                className={cn(
                  "h-full rounded-card p-6",
                  ["bg-lilac/30", "bg-rose/30", "bg-sky/30", "bg-mint/30"][i % 4],
                )}
              >
                <span className="font-display text-5xl font-extrabold text-ink sm:text-6xl">
                  {s.value}
                </span>
                <p className="mt-3 text-ink-soft">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- PERSONAS */}
      <section className={cn(wrap, "py-12")}>
        <Reveal>
          <Kicker>personas</Kicker>
          <H2>The people behind the data</H2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {spilz.personas.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-card border border-ink/5 bg-surface p-6 sm:p-7">
                <div className="flex items-center gap-5">
                  <div
                    className={cn(
                      "grid size-24 shrink-0 place-items-center overflow-hidden rounded-2xl sm:size-28",
                      TINT[p.accent],
                    )}
                  >
                    <Image
                      src={p.img}
                      alt={`Hand-drawn portrait of ${p.name}`}
                      width={220}
                      height={220}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink">{p.name}</h3>
                    <p className="text-sm text-ink-faint">{p.tag}</p>
                  </div>
                </div>
                <dl className="mt-5 space-y-3 text-sm sm:text-base">
                  <div>
                    <dt className="font-semibold text-ink">Context</dt>
                    <dd className="text-ink-soft">{p.needs}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Goals</dt>
                    <dd className="text-ink-soft">{p.goals}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Frustrations</dt>
                    <dd className="text-ink-soft">{p.frustrations}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ JOURNEY */}
      <section className={cn(wrap, "py-12")}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Kicker>journey mapping</Kicker>
              <H2>Four stages of drifting apart</H2>
              <p className="mt-4 max-w-2xl text-lg text-ink-soft">{spilz.journey.intro}</p>
            </div>
            <Image
              src={spilz.journey.rocket}
              alt=""
              aria-hidden
              width={160}
              height={160}
              className="hidden h-28 w-auto md:block"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {spilz.journey.stages.map((st, i) => (
            <Reveal key={st.stage} delay={i * 0.07}>
              <div className={cn("flex h-full flex-col rounded-card p-5", TINT[st.accent])}>
                <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl bg-surface/70">
                  <Image
                    src={st.img}
                    alt={`Stage ${st.stage} — ${st.title}`}
                    width={360}
                    height={360}
                    className="h-full w-full object-contain p-3"
                  />
                </div>
                <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-ink/50">
                  Stage {st.stage}
                </p>
                <h3 className="font-display text-lg font-bold leading-snug text-ink">
                  {st.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {st.emotions.map((e) => (
                    <span
                      key={e}
                      className="rounded-pill bg-ink/80 px-2.5 py-0.5 font-hand text-sm text-cream"
                    >
                      {e}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                  {st.actions.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", DOT[st.accent])} />
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-medium text-ink">
                  Pain: <span className="font-normal text-ink-soft">{st.pains.join(" · ")}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- BRAINSTORM */}
      <section className={cn(wrapText, "py-12")}>
        <Reveal>
          <Kicker>brainstorming &amp; wireframing</Kicker>
          <H2>Four people, one whiteboard</H2>
          <p className="mt-4 text-lg text-ink-soft">{spilz.brainstorm.intro}</p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {spilz.brainstorm.chats.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={c.who} delay={0.05}>
                <div className={cn("flex items-end gap-4", flip && "flex-row-reverse")}>
                  <div
                    className={cn(
                      "grid size-16 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-ink/10 sm:size-20",
                      TINT[c.accent],
                    )}
                  >
                    <Image
                      src={c.img}
                      alt={`${c.who} avatar`}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  <div
                    className={cn(
                      "relative max-w-xl rounded-3xl border border-ink/5 bg-surface p-5 shadow-sm",
                      flip ? "rounded-br-md" : "rounded-bl-md",
                    )}
                  >
                    <p className="text-xs font-bold uppercase tracking-wide text-magenta-ink">
                      {c.who}
                    </p>
                    <p className="mt-1.5 text-ink">{c.quote}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="font-hand text-2xl text-magenta-ink sm:text-3xl">
            “{spilz.brainstorm.outro}”
          </p>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------ PILLARS */}
      <section className={cn(wrap, "pb-12 pt-2")}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {spilz.pillars.map((p, i) => (
            <Pop key={p.label} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center gap-3 rounded-card border border-ink/5 bg-surface p-4 text-center">
                <div className="grid size-16 place-items-center overflow-hidden">
                  <Image
                    src={p.img}
                    alt=""
                    aria-hidden
                    width={90}
                    height={90}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold leading-tight text-ink">{p.label}</p>
              </div>
            </Pop>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-card bg-butter/30 p-6 sm:p-8">
            <p className="font-hand text-2xl text-magenta-ink">the objectives</p>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {spilz.objectives.map((o) => (
                <li key={o} className="flex gap-3 text-lg text-ink">
                  <Sparkle className="mt-1 size-5 shrink-0 text-magenta" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------------ SCREENS */}
      <section className="bg-ink py-16 sm:py-20">
        <div className={wrap}>
          <Reveal>
            <p className="font-hand text-2xl text-rose sm:text-3xl">the outcome ✦</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-cream sm:text-5xl">
              The experience we shipped
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-cream/75">{spilz.screens.intro}</p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {spilz.screens.items.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <figure>
                  <div className="overflow-hidden rounded-[2rem] border-4 border-cream/15 bg-black shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
                    <div className="relative aspect-[9/17.5]">
                      <Image
                        src={s.img}
                        alt={s.alt}
                        fill
                        sizes="(max-width: 640px) 90vw, 30vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-4 text-center">
                    <p className="font-display text-xl font-bold text-cream">{s.title}</p>
                    <p className="font-hand text-lg text-rose">↳ {s.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center font-hand text-2xl text-cream/60">
            {spilz.screens.more}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- IMPACT */}
      <section className={cn(wrap, "py-14")}>
        <Reveal>
          <div className="grid items-center gap-8 rounded-card bg-mint/30 p-7 sm:p-10 md:grid-cols-2">
            <div>
              <Kicker>impact</Kicker>
              <H2>{spilz.impact.headline}</H2>
              <div className="mt-7 flex gap-10">
                {spilz.impact.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="font-display text-5xl font-extrabold text-ink sm:text-7xl">
                      {m.value}
                    </span>
                    <p className="mt-1 font-medium text-ink-soft">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src={spilz.impact.img}
              alt="SPILZ launch — the founders celebrating traction"
              width={900}
              height={700}
              className="w-full rounded-2xl object-contain"
            />
          </div>
        </Reveal>
      </section>

      {/* -------------------------------------------------------------- BRAND */}
      <section className={cn(wrap, "py-12")}>
        <Reveal>
          <Kicker>extra sprinkles ✿</Kicker>
          <H2>Some extra work for the brand</H2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{spilz.brand.intro}</p>
        </Reveal>
        <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {spilz.brand.items.map((b, i) => (
            <Pop key={b.img} delay={(i % 4) * 0.04}>
              <figure className="break-inside-avoid overflow-hidden rounded-2xl border border-ink/5 bg-surface">
                <Image
                  src={b.img}
                  alt={`SPILZ brand work — ${b.label}`}
                  width={600}
                  height={b.tall ? 900 : 600}
                  className="w-full object-cover"
                />
                <figcaption className="p-3 text-center text-sm font-medium text-ink-soft">
                  {b.label}
                </figcaption>
              </figure>
            </Pop>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- LEARNINGS */}
      <section className={cn(wrap, "py-12")}>
        <Reveal>
          <Kicker>my learnings</Kicker>
          <H2>What SPILZ taught me</H2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {spilz.learnings.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.07}>
              <div
                className={cn(
                  "h-full rounded-card p-6 sm:p-7",
                  ["bg-rose/30", "bg-sky/30", "bg-butter/30"][i],
                )}
              >
                <Heart className="size-6 text-magenta/70" />
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{l.title}</h3>
                <p className="mt-2 text-ink-soft">{l.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------- TEASER */}
      <section className={cn(wrapText, "py-14")}>
        <Reveal>
          <div className="relative overflow-hidden rounded-card border border-ink/5 bg-surface p-8 text-center sm:p-12">
            <Squiggle className="absolute -left-4 top-6 w-28 text-rose" />
            <Star className="absolute right-8 top-8 size-7 text-butter" />
            <p className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
              {spilz.teaser.line}
            </p>
            <p className="mt-3 text-lg text-ink-soft">{spilz.teaser.sub}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-pill bg-magenta px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(224,69,123,0.6)] transition-transform hover:scale-105"
              >
                <Mail className="size-4" /> Ask for the full story
              </a>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-pill border-2 border-ink/15 bg-surface px-6 py-3.5 font-semibold text-ink transition-colors hover:border-ink/40"
              >
                Back to work <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
