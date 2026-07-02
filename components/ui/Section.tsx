import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <p className="font-hand text-2xl text-magenta-ink sm:text-3xl">
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg text-ink-soft sm:text-xl">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
