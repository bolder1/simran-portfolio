"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { site } from "@/lib/site";
import { useIsInteractive } from "@/hooks/useIsInteractive";
import Playground from "./Playground";
import HeroStaticChips from "./HeroStaticChips";
import { AnimatedUnderline } from "@/components/motion/AnimatedUnderline";
import { Star, Sparkle } from "@/components/ui/Doodle";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const interactive = useIsInteractive();

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-kicker", { y: 16, opacity: 0, duration: 0.5 })
        .from(".hero-name span", { y: 44, opacity: 0, duration: 0.85, stagger: 0.1 }, "-=0.2")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(".hero-cutout", { y: 50, opacity: 0, duration: 0.9, ease: "power2.out" }, "-=0.9")
        .from(".hero-hint", { opacity: 0, duration: 0.6 }, "-=0.2");
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-dvh overflow-hidden bg-cream"
    >
      {/* ---------------------------------------------------- glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-[1]">
        <div className="absolute left-[56%] top-[42%] h-[85vh] w-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-80 blur-[130px]" />
        <div className="absolute left-[8%] top-[14%] h-[42vh] w-[42vh] rounded-full bg-rose/40 blur-[120px]" />
        <div className="absolute bottom-[4%] right-[8%] h-[46vh] w-[46vh] rounded-full bg-lilac/40 blur-[120px]" />
        <div className="absolute bottom-0 left-[26%] h-[34vh] w-[52vh] rounded-full bg-sky/30 blur-[120px]" />
      </div>

      {/* ------------------------------------------------------- her cutout */}
      <div className="hero-cutout pointer-events-none absolute bottom-0 left-1/2 z-[5] h-[54%] -translate-x-1/2 sm:h-[62%] md:left-auto md:right-[3%] md:h-[88%] md:translate-x-0">
        <div className="absolute left-1/2 top-1/2 -z-[1] h-[78%] w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-90 blur-[70px]" />
        <Image
          src="/simran/simran-cutout.webp"
          alt="Simran Sharma"
          width={814}
          height={1300}
          priority
          className="h-full w-auto object-contain drop-shadow-[0_24px_44px_rgba(36,30,51,0.20)]"
        />
      </div>

      {/* --------------------------------------------------- playable chips */}
      {interactive === null ? null : interactive ? <Playground /> : <HeroStaticChips />}

      {/* decorative doodles */}
      <Star className="pointer-events-none absolute left-[6%] top-[28%] hidden size-8 rotate-12 text-butter md:block" />
      <Sparkle className="pointer-events-none absolute left-[40%] top-[20%] hidden size-9 text-magenta/50 lg:block" />

      {/* ------------------------------------------------------------ copy */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-start px-6 pt-28 text-center md:justify-center md:pt-0 md:text-left">
        <div className="max-w-2xl">
          <p className="hero-kicker font-hand text-2xl text-magenta-ink sm:text-3xl">
            {site.greeting} <span className="align-middle">✿</span>
          </p>
          <h1 className="hero-name mt-1 font-display font-extrabold leading-[0.86] tracking-tight text-ink">
            <span className="block text-[clamp(3rem,11vw,8.5rem)]">Simran</span>
            <span className="relative inline-block text-[clamp(3rem,11vw,8.5rem)]">
              Sharma
              <AnimatedUnderline className="absolute -bottom-1 left-0 h-3.5 sm:h-5" delay={0.9} />
            </span>
          </h1>
          <p className="hero-sub mx-auto mt-6 max-w-xl text-balance text-lg text-ink-soft [text-shadow:0_2px_18px_rgba(251,246,240,0.92)] sm:text-2xl md:mx-0">
            UX · Product Designer turning messy problems into research-led
            experiences people <span className="font-semibold text-ink">actually love</span>.
          </p>

          <div className="hero-cta pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="#work"
              className="rounded-pill bg-magenta px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(224,69,123,0.6)] transition-transform hover:scale-105"
            >
              See my work
            </Link>
            <Link
              href="#contact"
              className="rounded-pill border-2 border-ink/15 bg-surface/70 px-7 py-3.5 font-semibold text-ink backdrop-blur-sm transition-colors hover:border-ink/40"
            >
              Get in touch
            </Link>
          </div>

          <p className="hero-cta pointer-events-auto mt-5 inline-flex items-center gap-2 rounded-pill border border-ink/10 bg-surface/70 px-4 py-2 text-sm font-medium text-ink-soft backdrop-blur-sm">
            <span className="size-2 rounded-full bg-mint-deep" />
            {site.availability}
          </p>
        </div>
      </div>

      {/* --------------------------------------------------------- drag hint */}
      {interactive ? (
        <p className="hero-hint pointer-events-none absolute bottom-6 left-6 z-20 font-hand text-lg text-ink-soft md:left-10">
          psst — drag the stickers around ✨
        </p>
      ) : null}
    </section>
  );
}
