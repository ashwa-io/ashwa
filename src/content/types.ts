export type VisualKey =
  | "live-map"
  | "trip-playback"
  | "geofence"
  | "alerts"
  | "reports"
  | "drivers"
  | "vehicles"
  | "routes"
  | "rental"
  | "school-bus"
  | "parent-app"
  | "enterprise"
  | "assets"
  | "trips"
  | "maintenance"
  | "coverage"
  | "branding"
  | "mobile-app"
  | "device"
  | "api";

export type PageKind = "solutions" | "products" | "industries";

export interface TitledText {
  title: string;
  body: string;
}

export interface Showcase extends TitledText {
  bullets: string[];
  visual: VisualKey;
}

export interface Faq {
  q: string;
  a: string;
}

/** One marketing page: a solution, a product module or an industry. */
export interface PageDoc {
  slug: string;
  /** Short label for menus, cards and breadcrumbs. */
  name: string;
  /** One line for menus and cards. No trailing period needed. */
  blurb: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    visual: VisualKey;
  };
  /** Who this page is written for: 3 to 5 short role or business labels. */
  audience: string[];
  /** The problems this page answers: exactly 3. */
  problems: TitledText[];
  /** How it works, in order: 3 or 4 steps. */
  how: TitledText[];
  /** 6 to 9 capabilities. */
  features: TitledText[];
  /** 2 or 3 deep-dive rows, each with its own concept visual. */
  showcase: Showcase[];
  /** Business outcomes: exactly 3. No invented figures. */
  outcomes: TitledText[];
  /** Real-world scenarios: exactly 3. */
  useCases: TitledText[];
  /** 4 to 6 questions. */
  faqs: Faq[];
  /** Cross-links as "kind/slug", e.g. "products/geofencing": 3 or 4. */
  related: string[];
}

export interface ArticleSection {
  heading: string;
  /** Paragraphs of plain text. */
  body: string[];
  /** Optional bullet list shown after the paragraphs. */
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "GPS tracking" | "Fleet management" | "School transport" | "Compliance";
  /** ISO date. */
  published: string;
  readMinutes: number;
  keywords: string[];
  intro: string;
  sections: ArticleSection[];
  faqs: Faq[];
  related: string[];
}
