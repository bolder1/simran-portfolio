import { Bricolage_Grotesque, Hanken_Grotesk, Caveat } from "next/font/google";

// Display — chunky, warm, quirky variable grotesque (Cotton Candy Pop headings)
export const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Body / UI — clean humanist sans that keeps reading senior-credible
export const fontBody = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Doodle captions only — single words, small sizes
export const fontHand = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const fontVariables = `${fontDisplay.variable} ${fontBody.variable} ${fontHand.variable}`;
