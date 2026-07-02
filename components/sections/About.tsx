import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal, Pop } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-10 md:grid-cols-5 md:gap-14">
        <div className="relative md:col-span-2">
          <Pop>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/5 bg-gradient-to-b from-rose/50 via-lilac/40 to-sky/40 shadow-[0_10px_40px_-24px_rgba(36,30,51,0.4)]">
              <div className="absolute left-1/2 top-[58%] h-[70%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-70 blur-[60px]" />
              <Image
                src="/simran/simran-cutout.webp"
                alt="Portrait of Simran Sharma"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-contain object-bottom drop-shadow-[0_18px_30px_rgba(36,30,51,0.22)]"
              />
            </div>
          </Pop>
          <div className="absolute -bottom-4 -right-2 rotate-6 rounded-pill bg-butter px-4 py-2 font-hand text-lg text-ink shadow-md">
            powered by black coffee ☕
          </div>
        </div>

        <div className="md:col-span-3">
          <Reveal>
            <p className="font-hand text-2xl text-magenta-ink sm:text-3xl">
              nice to meet you
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              A designer who sweats the details{" "}
              <span className="text-magenta">(and the data).</span>
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-lg text-ink-soft">
            {site.bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
                Worked with
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.clients.map((c) => (
                  <span
                    key={c}
                    className="rounded-pill border border-ink/10 bg-surface px-4 py-2 text-sm font-medium text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
