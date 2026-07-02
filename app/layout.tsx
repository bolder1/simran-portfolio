import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fontVariables } from "./fonts";
import { site, SITE_URL } from "@/lib/site";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Nav from "@/components/ui/Nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Simran Sharma is a research-led UX / Product Designer. Flagship case study: SPILZ — a Gen Z social platform that grew to 50K+ users across 13 campuses. Empathy, accessibility, data-driven design — with a little sparkle.",
  keywords: [
    "Simran Sharma",
    "UX Designer",
    "Product Designer",
    "UX Portfolio",
    "Product Design",
    "SPILZ",
    "NIFT",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${site.name} — ${site.role}`,
    description:
      "Research-led UX / Product Designer. Flagship: SPILZ — 50K+ users across 13 campuses.",
    siteName: `${site.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Research-led UX / Product Designer. Flagship: SPILZ — 50K+ users across 13 campuses.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF6F0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-dvh antialiased">
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
