import Link from "next/link";
import { Star, Heart, Sparkle } from "@/components/ui/Doodle";

export default function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-6 text-center">
      <Star className="absolute left-[18%] top-[24%] size-10 rotate-12 text-butter" />
      <Sparkle className="absolute right-[20%] top-[30%] size-12 text-lilac" />
      <Heart className="absolute bottom-[24%] left-[26%] size-8 text-rose" />
      <div>
        <p className="font-hand text-3xl text-magenta-ink">oops ✿</p>
        <h1 className="mt-2 font-display text-8xl font-extrabold text-ink sm:text-9xl">
          404
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          This page wandered off to get more coffee.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-pill bg-magenta px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105"
        >
          Take me home
        </Link>
      </div>
    </main>
  );
}
