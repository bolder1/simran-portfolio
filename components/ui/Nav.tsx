"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Flower } from "./Doodle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-pill px-3 py-2 transition-all duration-300 sm:px-4",
          scrolled
            ? "border border-ink/5 bg-surface/85 shadow-[0_8px_30px_-12px_rgba(36,30,51,0.25)] backdrop-blur-md"
            : "border border-transparent",
        )}
      >
        <Link
          href="/#top"
          className="flex items-center gap-2 rounded-pill px-2 py-1 font-display text-lg font-bold text-ink"
        >
          <Flower className="size-5 text-magenta" />
          Simran
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-pill px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden rounded-pill bg-magenta px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 sm:inline-flex"
          >
            Say hi
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-ink/5 bg-surface/95 p-2 shadow-lg backdrop-blur-md md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-medium text-ink transition-colors hover:bg-ink/5"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-2xl bg-magenta px-4 py-3 text-center font-semibold text-white"
          >
            Say hi
          </Link>
        </div>
      )}
    </header>
  );
}
