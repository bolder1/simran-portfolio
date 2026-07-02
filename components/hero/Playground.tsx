"use client";

import { useEffect, useRef } from "react";
import { heroChips, chipClass } from "@/lib/hero-chips";

/**
 * A real, physics-driven sandbox. The chips drop in under gravity, pile up,
 * and can be grabbed and thrown with the mouse (matter.js MouseConstraint).
 * DOM stickers are synced to physics bodies each frame for crisp rendering.
 */
export default function Playground() {
  const scene = useRef<HTMLDivElement>(null);
  const chipEls = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let raf = 0;
    let cancelled = false;
    let cleanup = () => {};

    (async () => {
      const Matter = (await import("matter-js")).default;
      if (cancelled || !scene.current) return;

      const { Engine, Bodies, Composite, Mouse, MouseConstraint, Body } = Matter;
      const el = scene.current;
      let W = el.clientWidth;
      let H = el.clientHeight;

      const engine = Engine.create();
      engine.gravity.y = 1;

      const t = 400;
      const wall = (x: number, y: number, w: number, h: number) =>
        Bodies.rectangle(x, y, w, h, { isStatic: true });
      const floor = wall(W / 2, H + t / 2 - 8, W * 3, t);
      const left = wall(-t / 2, H / 2, t, H * 4);
      const right = wall(W + t / 2, H / 2, t, H * 4);
      const ceil = wall(W / 2, -H * 1.5, W * 3, t);
      Composite.add(engine.world, [floor, left, right, ceil]);

      const bodies = chipEls.current.map((c) => {
        if (!c) return null;
        const w = c.offsetWidth || 64;
        const h = c.offsetHeight || 40;
        const round = c.dataset.kind === "round";
        const x = 50 + Math.random() * Math.max(1, W - 100);
        const y = -100 - Math.random() * 600;
        const opts = { restitution: 0.45, friction: 0.4, frictionAir: 0.02 };
        const b = round
          ? Bodies.circle(x, y, h / 2, opts)
          : Bodies.rectangle(x, y, w, h, {
              ...opts,
              chamfer: { radius: Math.min(h / 2, 22) },
            });
        Body.setAngle(b, (Math.random() - 0.5) * 0.8);
        Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.12);
        return b;
      });
      bodies.forEach((b) => b && Composite.add(engine.world, b));

      const mouse = Mouse.create(el);
      // let the page keep scrolling — drop matter's wheel handlers
      const anyMouse = mouse as unknown as { mousewheel: EventListener };
      ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ev) => {
        try {
          el.removeEventListener(ev, anyMouse.mousewheel);
        } catch {}
      });
      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.18, render: { visible: false } },
      });
      Composite.add(engine.world, mc);

      let visible = true;
      const io = new IntersectionObserver(([e]) => {
        const was = visible;
        visible = e.isIntersecting;
        if (!was && visible) raf = requestAnimationFrame(loop);
      });
      io.observe(el);

      const loop = () => {
        if (!visible) return;
        Engine.update(engine, 1000 / 60);
        for (let i = 0; i < chipEls.current.length; i++) {
          const c = chipEls.current[i];
          const b = bodies[i];
          if (!c || !b) continue;
          c.style.transform = `translate(${b.position.x - c.offsetWidth / 2}px, ${
            b.position.y - c.offsetHeight / 2
          }px) rotate(${b.angle}rad)`;
          c.style.opacity = "1";
        }
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      const onResize = () => {
        if (!scene.current) return;
        W = scene.current.clientWidth;
        H = scene.current.clientHeight;
        Body.setPosition(floor, { x: W / 2, y: H + t / 2 - 8 });
        Body.setPosition(right, { x: W + t / 2, y: H / 2 });
        Body.setPosition(ceil, { x: W / 2, y: -H * 1.5 });
      };
      window.addEventListener("resize", onResize);

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("resize", onResize);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div ref={scene} className="absolute inset-0 z-[6]" aria-hidden="true">
      {heroChips.map((c, i) => (
        <div
          key={i}
          ref={(el) => {
            chipEls.current[i] = el;
          }}
          data-kind={c.kind}
          className={chipClass(c)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            cursor: "grab",
            touchAction: "none",
            willChange: "transform",
          }}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
}
