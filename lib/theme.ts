/** Cotton Candy Pop palette — raw hex for JS/GLSL (shaders, canvas, doodle strokes). */
export const palette = {
  cream: "#FBF6F0",
  surface: "#FFFDFB",
  ink: "#241E33",
  inkSoft: "#5B5470",
  rose: "#F3B9CE",
  mint: "#A7D8C8",
  sky: "#A9CCE8",
  butter: "#F4D07A",
  lilac: "#C9B6E8",
  magenta: "#E0457B",
  magentaInk: "#C1326A",
} as const;

export type PastelName = "rose" | "mint" | "sky" | "butter" | "lilac";

/** Convert a #rrggbb string to a normalized [r,g,b] triplet for GLSL uniforms. */
export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/** Aurora gradient stops for the hero shader (soft, sunlit multi-pastel). */
export const auroraStops = [
  palette.rose,
  palette.lilac,
  palette.sky,
  palette.mint,
  palette.butter,
] as const;
