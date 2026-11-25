import { DOCS, KIND_META, KINDS } from "@/content";
import { APP_URL, RESOURCE_LINKS } from "@/lib/site";

import { HeaderNav, type NavGroup } from "./header-nav";

const FEATURES: Record<string, NavGroup["feature"]> = {
  solutions: {
    kicker: "One platform",
    title: "Start with tracking. Add what your operation needs.",
    body: "Every solution runs on the same modules, so a school, a transporter and a rental yard can share one account.",
    href: "/products",
    cta: "See the modules",
  },
  products: {
    kicker: "Modular by design",
    title: "Pick modules like parts, not a fixed plan.",
    body: "Tell us what you run. We will map the modules that fit and what each one needs to go live.",
    href: "/demo",
    cta: "Book a demo",
  },
  industries: {
    kicker: "Not sure where you fit?",
    title: "Describe your fleet and we will show the setup.",
    body: "Mixed fleets are normal. Most customers combine two or three of these.",
    href: "/contact",
    cta: "Talk to sales",
  },
};

/** Server wrapper: only labels and links cross to the client, not page content. */
export function Header() {
  const groups: NavGroup[] = [
    ...KINDS.map((kind) => ({
      label: KIND_META[kind].label,
      href: `/${kind}`,
      intro: KIND_META[kind].lede,
      links: DOCS[kind].map((d) => ({ label: d.name, href: `/${kind}/${d.slug}`, blurb: d.blurb })),
      feature: FEATURES[kind],
    })),
    {
      label: "Resources",
      href: "/resources",
      intro: "Guides, answers and the practical details of putting trackers on vehicles.",
      links: RESOURCE_LINKS.map((l) => ({ ...l })),
      feature: {
        kicker: "New to GPS tracking?",
        title: "How a tracker turns into a dot on your map.",
        body: "Device, SIM, server and app, explained without the jargon.",
        href: "/resources",
        cta: "Read the guides",
      },
    },
  ];
  return <HeaderNav groups={groups} appUrl={APP_URL} />;
}
