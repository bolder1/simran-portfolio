import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { Star, Heart, Sparkle } from "@/components/ui/Doodle";

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9s-2.04 1.38-2.04 2.8V21h-4z" />
    </svg>
  );
}

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-70 blur-[130px]" />
        <div className="absolute -left-24 bottom-0 h-[36vh] w-[36vh] rounded-full bg-rose/35 blur-[110px]" />
        <div className="absolute -right-24 top-0 h-[36vh] w-[36vh] rounded-full bg-sky/35 blur-[110px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <Star className="absolute left-[12%] top-16 size-8 rotate-12 text-butter" />
        <Sparkle className="absolute right-[14%] top-24 size-9 text-lilac" />
        <Heart className="absolute bottom-24 left-[18%] size-7 text-rose" />

        <Reveal>
          <p className="font-hand text-2xl text-magenta-ink sm:text-3xl">
            don&apos;t be a stranger
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-7xl">
            Let&apos;s make something people{" "}
            <span className="text-magenta">love</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-pill bg-magenta px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(224,69,123,0.6)] transition-transform hover:scale-105"
            >
              <Mail className="size-4" /> Say hello
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border-2 border-ink/15 bg-surface px-6 py-3.5 font-semibold text-ink transition-colors hover:border-ink/40"
            >
              <LinkedInIcon className="size-4" /> LinkedIn
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border-2 border-ink/15 bg-surface px-6 py-3.5 font-semibold text-ink transition-colors hover:border-ink/40"
            >
              <FileText className="size-4" /> Resume
              <ArrowUpRight className="size-3.5 opacity-60" />
            </a>
          </div>
          <p className="mt-6 text-ink-soft">{site.email}</p>
        </Reveal>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-ink-faint sm:flex-row">
          <p>© {year} Simran Sharma. Made with lots of pastel + a little code.</p>
          <p>Doodles by fffuel · Built with Next.js + a pinch of physics</p>
        </div>
      </div>
    </footer>
  );
}
