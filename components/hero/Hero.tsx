"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { site } from "@/lib/site";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const scrollRef = useRef(0);
  const root = useRef<HTMLElement>(null);

  // hero scroll progress (0..1) → aurora scroll uniform
  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = Math.min(1, window.scrollY / window.innerHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scripted load reveal (< 1.5s), skipped under reduced motion
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-kicker", { y: 18, opacity: 0, duration: 0.5 })
        .from(".hero-name", { y: 56, opacity: 0, duration: 0.9, stagger: 0.09 }, "-=0.2")
        .from(".hero-statement", { y: 24, opacity: 0, duration: 0.7 }, "-=0.45")
        .from(".hero-meta", { y: 18, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .to(".hero-underline path", { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.3")
        .from(".hero-cue", { opacity: 0, duration: 0.6 }, "-=0.2");
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      <HeroBackground scrollRef={scrollRef} />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28 text-center">
        {/* contrast scrim so ink text always clears AA over the moving aurora */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(251,246,240,0.85), rgba(251,246,240,0))",
          }}
        />

        <p className="hero-kicker font-hand text-2xl text-magenta-ink sm:text-3xl">
          {site.greeting} <span className="align-middle">✿</span>
        </p>

        <h1 className="mt-1 font-display font-extrabold leading-[0.92] tracking-tight text-ink">
          <span className="hero-name block text-[clamp(3.2rem,13vw,9.5rem)]">
            Simran
          </span>
          <span className="hero-name block text-[clamp(3.2rem,13vw,9.5rem)]">
            Sharma
          </span>
        </h1>

        <p className="hero-statement mx-auto mt-7 max-w-2xl text-balance text-lg text-ink-soft sm:text-2xl">
          A product designer who turns messy problems into research-led
          experiences people{" "}
          <span className="relative inline-block font-semibold text-ink">
            actually love
            <svg
              className="hero-underline absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M3 8c40-6 120-7 194-2"
                stroke="var(--color-magenta)"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength={1}
                className="draw-path"
              />
            </svg>
          </span>{" "}
          — with a little sparkle.
        </p>

        <p className="hero-meta mt-6 inline-flex items-center gap-2 rounded-pill border border-ink/10 bg-surface/70 px-4 py-2 text-sm font-medium text-ink-soft backdrop-blur-sm">
          <span className="size-2 rounded-full bg-mint-deep" />
          {site.availability}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#work"
            className="hero-cta rounded-pill bg-magenta px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(224,69,123,0.6)] transition-transform hover:scale-105"
          >
            See my work
          </Link>
          <Link
            href="#contact"
            className="hero-cta rounded-pill border-2 border-ink/15 bg-surface/60 px-7 py-3.5 font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink/40"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* scroll cue */}
      <div className="hero-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <span className="font-hand text-lg text-ink-soft">scroll</span>
        <div className="mx-auto mt-1 h-8 w-[2px] animate-pulse rounded-full bg-ink/30" />
      </div>
    </section>
  );
}
