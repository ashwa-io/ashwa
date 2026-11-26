import { articles } from "./articles";
import { industries } from "./industries";
import { products } from "./products";
import { solutions } from "./solutions";
import type { PageDoc, PageKind } from "./types";

export const DOCS: Record<PageKind, PageDoc[]> = { solutions, products, industries };

export const KINDS: PageKind[] = ["solutions", "products", "industries"];

export const KIND_META: Record<
  PageKind,
  { label: string; singular: string; title: string; description: string; lede: string }
> = {
  solutions: {
    label: "Solutions",
    singular: "Solution",
    title: "Tracking solutions for every kind of fleet",
    description:
      "GPS vehicle tracking, fleet management, school bus tracking, rental fleet and enterprise solutions from Ashwa. Pick the one that fits how you run vehicles.",
    lede: "Each solution is the same Ashwa platform, arranged around one job: running a truck fleet, a school's buses, a rental yard or a whole enterprise.",
  },
  products: {
    label: "Products",
    singular: "Product",
    title: "Modules you combine into your own platform",
    description:
      "Live tracking, trip history, geofencing, alerts, reports, driver and vehicle management, routes, rentals and school transport: the modules that make up Ashwa.",
    lede: "Start with live tracking and add the modules your operation needs. You only see, and pay for, what you use.",
  },
  industries: {
    label: "Industries",
    singular: "Industry",
    title: "Built around how your industry moves",
    description:
      "How logistics, education, car rental, trucking, delivery, construction, corporate and field service fleets use Ashwa GPS tracking and fleet management.",
    lede: "The same vehicle means different things to a school, a transporter and a rental company. These pages start from your day, not from our feature list.",
  },
};

export function getDoc(kind: PageKind, slug: string): PageDoc | undefined {
  return DOCS[kind]?.find((d) => d.slug === slug);
}

/** Resolves a "kind/slug" cross-link written in content files. */
export function resolveRef(ref: string): { kind: PageKind; doc: PageDoc; href: string } | undefined {
  const [kind, slug] = ref.split("/") as [PageKind, string];
  const doc = getDoc(kind, slug);
  return doc ? { kind, doc, href: `/${kind}/${slug}` } : undefined;
}

export { articles };
export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
