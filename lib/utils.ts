export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/** Linear interpolation — used for cursor/scroll easing in canvas + DOM. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
