import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Pop } from "@/components/motion/Reveal";
import { featuredWork } from "@/lib/site";
import { Star, Sparkle } from "@/components/ui/Doodle";

export default function SelectedWork() {
  const w = featuredWork;
  return (
    <Section id="work">
      <SectionHeading
        kicker="the flagship case study ✦"
        title={
          <>
            Meet <span className="text-magenta">SPILZ</span>.
          </>
        }
        intro="A deep dive into the research, the decisions, and the outcomes — not just the pretty screens."
      />

      <Reveal className="mt-14">
        <Link
          href={`/work/${w.slug}`}
          className="group relative block overflow-hidden rounded-[2.25rem] border border-ink/5 bg-lilac/30 p-7 shadow-[0_10px_40px_-24px_rgba(36,30,51,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_-28px_rgba(36,30,51,0.5)] sm:p-10"
        >
          <Star className="absolute right-8 top-8 size-8 text-butter" />
          <Sparkle className="absolute bottom-10 left-[46%] hidden size-8 text-magenta/50 lg:block" />

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-pill bg-lilac/70 px-3 py-1 text-xs font-semibold text-ink">
                  {w.category}
                </span>
                <span className="text-sm text-ink-faint">{w.year}</span>
              </div>

              <div className="mt-5 flex items-end gap-3">
                <h3 className="font-display text-5xl font-extrabold tracking-tight text-ink sm:text-7xl">
                  {w.title}
                </h3>
                <Image
                  src={w.logo}
                  alt=""
                  aria-hidden
                  width={90}
                  height={90}
                  className="mb-1.5 h-12 w-auto rotate-6 sm:h-16"
                />
              </div>

              <p className="mt-4 max-w-md text-lg text-ink-soft">{w.subtitle}</p>
              <p className="mt-4 font-hand text-2xl text-magenta-ink sm:text-3xl">
                {w.metric}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 rounded-pill bg-ink px-6 py-3 font-semibold text-cream transition-all group-hover:gap-3.5">
                Read the case study
                <ArrowRight className="size-4" />
              </span>
            </div>

            {/* collage: photobooth illustration + two real app screens */}
            <div className="relative mx-auto flex items-center justify-center">
              <Pop className="relative z-10 -rotate-3 w-40 sm:w-48">
                <div className="rounded-2xl bg-surface p-2 shadow-xl">
                  <Image
                    src={w.cover}
                    alt="SPILZ — hand-drawn photo-booth strip of friends"
                    width={400}
                    height={575}
                    className="rounded-xl"
                  />
                </div>
              </Pop>
              <Pop delay={0.1} className="relative z-20 -ml-10 mt-16 rotate-3 w-36 sm:w-44">
                <div className="overflow-hidden rounded-2xl border-4 border-surface bg-black shadow-2xl">
                  <div className="relative aspect-[9/17]">
                    <Image
                      src={w.screens[0]}
                      alt="SPILZ app — feed screen"
                      fill
                      sizes="176px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </Pop>
              <Pop delay={0.18} className="relative z-0 -ml-8 -mt-10 rotate-12 hidden w-32 sm:block sm:w-40">
                <div className="overflow-hidden rounded-2xl border-4 border-surface bg-black shadow-xl">
                  <div className="relative aspect-[9/17]">
                    <Image
                      src={w.screens[1]}
                      alt="SPILZ app — events screen"
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </Pop>
            </div>
          </div>
        </Link>
      </Reveal>
    </Section>
  );
}
