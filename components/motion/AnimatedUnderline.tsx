"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/** A hand-drawn underline that draws itself on when scrolled into view. */
export function AnimatedUnderline({
  className,
  color = "var(--color-magenta)",
  delay = 0.15,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 200 14"
      className={cn("w-full", className)}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M4 9c40-7 120-8 192-3"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        initial={{ strokeDashoffset: reduce ? 0 : 1 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: "easeInOut", delay }}
      />
    </svg>
  );
}
