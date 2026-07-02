"use client";

import dynamic from "next/dynamic";
import {
  Component,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "motion/react";
import HeroStaticAurora from "./HeroStaticAurora";

// WebGL lives ONLY in a client-mounted, SSR-disabled island.
const HeroScene = dynamic(() => import("@/components/webgl/HeroScene"), {
  ssr: false,
});

class WebGLBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export default function HeroBackground({
  scrollRef,
}: {
  scrollRef: React.RefObject<number>;
}) {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [inView, setInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) {
      setEnabled(false);
      return;
    }
    let webglOk = true;
    try {
      const c = document.createElement("canvas");
      webglOk = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webglOk = false;
    }
    const smallScreen = window.matchMedia("(max-width: 700px)").matches;
    const cores = navigator.hardwareConcurrency ?? 8;
    setEnabled(webglOk && !smallScreen && cores > 4);
  }, [reduce]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10" aria-hidden="true">
      {enabled ? (
        <WebGLBoundary fallback={<HeroStaticAurora />}>
          <HeroScene active={inView} scrollRef={scrollRef} />
        </WebGLBoundary>
      ) : (
        <HeroStaticAurora />
      )}
    </div>
  );
}
