import type { Metadata } from "next";
import SpilzCaseStudy from "@/components/case-study/SpilzCaseStudy";
import Contact from "@/components/sections/Contact";
import { spilz } from "@/lib/spilz";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "SPILZ — Case Study",
  description: spilz.tagline,
  openGraph: {
    title: `SPILZ — ${spilz.category}`,
    description: spilz.tagline,
    url: `${SITE_URL}/work/spilz`,
    images: [{ url: `${SITE_URL}${spilz.hero}` }],
  },
};

export default function SpilzPage() {
  return (
    <main>
      <SpilzCaseStudy />
      <Contact />
    </main>
  );
}
