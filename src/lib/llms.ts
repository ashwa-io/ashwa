import { DOCS, KIND_META, KINDS, articles } from "@/content";
import { siteFaqs } from "@/content/faqs";
import type { PageDoc } from "@/content/types";
import { CONTACT, SITE_URL } from "@/lib/site";

/**
 * The site described for language models, following the llms.txt convention:
 * a short index (llms.txt) and the full text of every page (llms-full.txt).
 * Both are built from the same content files as the pages, so they cannot drift.
 */

const SUMMARY =
  "Ashwa is a GPS vehicle tracking and fleet management platform from India. Customers fit GPS devices in their vehicles and use web and mobile software built from modules: live tracking, route history, trips, maintenance, geofencing, alerts, reports, route management, rental management and school transport. Pricing is by quote: a one-time device cost, a prepaid tracking recharge per vehicle, and add-on modules.";

const OTHER: [string, string, string][] = [
  ["/pricing", "Pricing", "How an Ashwa quote is built: device, tracking recharge and add-on modules"],
  ["/devices", "Devices", "GPS tracker types and the tracker families Ashwa works with"],
  ["/integrations", "Integrations and API", "API access, event webhooks, portal feeds and custom integrations"],
  ["/faq", "FAQ", "Answers on devices, installation, data, modules, pricing and support"],
  ["/demo", "Book a demo", "Request a walkthrough built around your fleet"],
  ["/partners", "Partners", "White-label tracking for GPS dealers, installers and resellers"],
  ["/about", "About", "Who builds Ashwa and why"],
  ["/contact", "Contact", `Sales and support: ${CONTACT.email}, ${CONTACT.phone}`],
];

const link = (path: string, name: string, note: string) => `- [${name}](${SITE_URL}${path}): ${note}`;

export function llmsIndex(): string {
  return [
    "# Ashwa",
    "",
    `> ${SUMMARY}`,
    "",
    `Full text of every page: ${SITE_URL}/llms-full.txt`,
    "",
    ...KINDS.flatMap((kind) => [
      `## ${KIND_META[kind].label}`,
      "",
      ...DOCS[kind].map((d) => link(`/${kind}/${d.slug}`, d.name, d.seo.description)),
      "",
    ]),
    "## Guides",
    "",
    ...articles.map((a) => link(`/resources/${a.slug}`, a.title, a.description)),
    "",
    "## Company and buying",
    "",
    ...OTHER.map(([path, name, note]) => link(path, name, note)),
    "",
  ].join("\n");
}

const list = (items: { title: string; body: string }[]) => items.map((i) => `- **${i.title}**: ${i.body}`);

function docText(kind: string, d: PageDoc): string[] {
  return [
    `## ${d.hero.title}`,
    "",
    `URL: ${SITE_URL}/${kind}/${d.slug}`,
    "",
    d.hero.lede,
    "",
    `Built for: ${d.audience.join(", ")}.`,
    "",
    "### Problems it solves",
    ...list(d.problems),
    "",
    "### How it works",
    ...d.how.map((h, i) => `${i + 1}. **${h.title}**: ${h.body}`),
    "",
    "### Capabilities",
    ...list(d.features),
    "",
    ...d.showcase.flatMap((s) => [`### ${s.title}`, s.body, ...s.bullets.map((b) => `- ${b}`), ""]),
    "### Outcomes",
    ...list(d.outcomes),
    "",
    "### Scenarios",
    ...list(d.useCases),
    "",
    "### Questions",
    ...d.faqs.flatMap((f) => [`**${f.q}**`, f.a, ""]),
  ];
}

export function llmsFull(): string {
  return [
    "# Ashwa: full site content",
    "",
    `> ${SUMMARY}`,
    "",
    `Contact: ${CONTACT.email}, ${CONTACT.phone}, ${CONTACT.address}.`,
    "",
    ...KINDS.flatMap((kind) => [
      `# ${KIND_META[kind].label}`,
      "",
      KIND_META[kind].lede,
      "",
      ...DOCS[kind].flatMap((d) => docText(kind, d)),
    ]),
    "# Guides",
    "",
    ...articles.flatMap((a) => [
      `## ${a.title}`,
      "",
      `URL: ${SITE_URL}/resources/${a.slug}`,
      `Published: ${a.published}`,
      "",
      a.intro,
      "",
      ...a.sections.flatMap((s) => [`### ${s.heading}`, ...s.body, ...(s.list ?? []).map((x) => `- ${x}`), ""]),
      ...a.faqs.flatMap((f) => [`**${f.q}**`, f.a, ""]),
    ]),
    "# Frequently asked questions",
    "",
    ...siteFaqs.flatMap((g) => [`## ${g.group}`, "", ...g.items.flatMap((f) => [`**${f.q}**`, f.a, ""])]),
  ].join("\n");
}
