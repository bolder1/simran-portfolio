"use client";

import { useEffect, useState } from "react";

/**
 * True only where a physics playground makes sense: a fine pointer (mouse),
 * a wide screen, and no reduced-motion preference. Elsewhere → static fallback.
 * `null` on first paint so we render neither until we know (avoids a flash).
 */
export function useIsInteractive(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    const queries = [
      "(prefers-reduced-motion: no-preference)",
      "(pointer: fine)",
      "(min-width: 768px)",
    ].map((q) => window.matchMedia(q));
    const update = () => setOk(queries.every((q) => q.matches));
    update();
    queries.forEach((q) => q.addEventListener("change", update));
    return () => queries.forEach((q) => q.removeEventListener("change", update));
  }, []);
  return ok;
}
