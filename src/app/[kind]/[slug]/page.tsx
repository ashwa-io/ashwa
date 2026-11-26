import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocPage } from "@/components/site/doc-page";
import { visualImage } from "@/components/visuals";
import { DOCS, KINDS, getDoc } from "@/content";
import { pageContext } from "@/content/contexts";
import type { PageKind } from "@/content/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return KINDS.flatMap((kind) => DOCS[kind].map((d) => ({ kind, slug: d.slug })));
}

type Props = { params: Promise<{ kind: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kind, slug } = await params;
  const doc = getDoc(kind as PageKind, slug);
  if (!doc) return {};
  const path = `/${kind}/${slug}`;
  // Share the page's own product picture, drawn for its sample world.
  const image = visualImage(doc.hero.visual, pageContext(kind as PageKind, slug));
  return {
    title: doc.seo.title,
    description: doc.seo.description,
    keywords: doc.seo.keywords,
    alternates: { canonical: path },
    openGraph: { title: doc.seo.title, description: doc.seo.description, url: path, type: "website", images: [image] },
    twitter: { card: "summary_large_image", title: doc.seo.title, description: doc.seo.description, images: [image.url] },
  };
}

export default async function Page({ params }: Props) {
  const { kind, slug } = await params;
  const doc = getDoc(kind as PageKind, slug);
  if (!doc) notFound();
  return <DocPage kind={kind as PageKind} doc={doc} />;
}
