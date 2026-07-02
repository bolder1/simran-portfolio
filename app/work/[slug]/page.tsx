import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudySlugs, getCaseStudy } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/site";
import CaseStudyView from "@/components/case-study/CaseStudyView";
import Contact from "@/components/sections/Contact";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.tagline,
    openGraph: {
      title: `${study.title} — ${study.category}`,
      description: study.tagline,
      url: `${SITE_URL}/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main>
      <CaseStudyView study={study} />
      <Contact />
    </main>
  );
}
