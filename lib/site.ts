import type { PastelName } from "./theme";

// Update this once the Vercel/custom domain is live.
export const SITE_URL = "https://simran-sharma.vercel.app";

export const site = {
  name: "Simran Sharma",
  role: "UX · Product Designer",
  location: "India",

  // Hero
  greeting: "Hi, I'm Simran",
  tagline:
    "a product designer who turns messy, real-world problems into research-led experiences people actually love — with a little sparkle.",
  availability: "Product Designer @ NxtWave · open to new adventures",

  // Contact
  email: "sharma.21simran@gmail.com",
  linkedin: "https://www.linkedin.com/in/simran-sharma21/",
  resume:
    "https://drive.google.com/file/d/13ZSW3MkNEGSWXnOZtpmV6z3NNw2bGjoU/view?usp=sharing",

  // About
  bio: [
    "I'm a product designer with a Master's in Experience Design from NIFT, Delhi, and around three years spent turning research into products that ship.",
    "Right now I'm designing at NxtWave. Before that: Wyse, One Choice Services, and boAt. I care about empathy, accessibility, and letting data — not ego — drive the decisions.",
    "Also, reliably: powered by black coffee.",
  ],

  clients: ["NxtWave", "Wyse", "One Choice", "boAt", "NIFT Delhi"],
} as const;

export const metrics: {
  number: number;
  suffix: string;
  label: string;
  sub?: string;
  accent: PastelName;
}[] = [
  { number: 50, suffix: "K+", label: "users on SPILZ", sub: "live across 13 campuses", accent: "lilac" },
  { number: 30, suffix: "%", label: "conversion lift", sub: "designing for Wyse", accent: "mint" },
  { number: 20, suffix: "K+", label: "new users", sub: "in the first month", accent: "sky" },
  { number: 3, suffix: " yrs", label: "shipping product", sub: "research → launch", accent: "butter" },
];

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

/** How-I-work band. */
export const process = [
  { step: "01", title: "Research", accent: "sky" as PastelName, body: "Interviews, surveys, and usability tests to find the real pain — not the assumed one." },
  { step: "02", title: "Insight", accent: "lilac" as PastelName, body: "Synthesize the noise into sharp, decision-ready insights that point at a direction." },
  { step: "03", title: "Design", accent: "rose" as PastelName, body: "Flows, systems, and pixel-perfect screens — iterated against real feedback." },
  { step: "04", title: "Ship", accent: "mint" as PastelName, body: "Hand-off, A/B test, measure, and iterate on the metrics that matter." },
];

/** The single featured case study (SPILZ). */
export const featuredWork = {
  slug: "spilz",
  title: "SPILZ",
  subtitle:
    "A social platform for Gen Z built on genuine connection, not curation — researched, designed, and shipped to 13 campuses.",
  category: "Social · 0→1 Product",
  year: "2024",
  accent: "lilac" as PastelName,
  metric: "50K+ users · 13 campuses",
  cover: "/case-studies/spilz/hero-photobooth.webp",
  logo: "/case-studies/spilz/spilz-logo.webp",
  screens: [
    "/case-studies/spilz/screen-feed.webp",
    "/case-studies/spilz/screen-events.webp",
  ],
};

/** Lighter grid — professional & visual work. */
export const moreWork = [
  { title: "Wyse", role: "Product Designer", note: "Mobile app UX, A/B tests, +15% task completion, 20K+ users in month one.", accent: "mint" as PastelName },
  { title: "One Choice Services", role: "Product Designer", note: "Subscription-flow redesign, +25% satisfaction, smoother onboarding.", accent: "rose" as PastelName },
  { title: "boAt — BRAGI", role: "Design Intern", note: "Smartwatch app usability +30%; Amazon rich pages +50% product views.", accent: "sky" as PastelName },
  { title: "Visual & Graphic", role: "Design", note: "Branding, packaging, social & fashion photography across early studios.", accent: "butter" as PastelName },
];
