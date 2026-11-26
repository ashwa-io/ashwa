export const SITE_URL = "https://ashwa.io";
export const APP_URL = "https://app.ashwa.io";
export const SITE_NAME = "Ashwa";

export const CONTACT = {
  email: "hello@ashwa.io",
  phone: "+91 6263441130",
  phoneHref: "tel:+916263441130",
  address: "Raipur, Chhattisgarh, India",
} as const;

/** Last revision of the privacy policy, terms and deletion pages. */
export const LEGAL_UPDATED = "23 October 2026";

/** Last content revision of the marketing pages, used by the sitemap. */
export const CONTENT_UPDATED = "2026-11-25";

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/delete-account", label: "Delete Account" },
  { href: "/support", label: "Support" },
] as const;

export const RESOURCE_LINKS = [
  { href: "/resources", label: "Guides and insights", blurb: "Plain-language guides to GPS tracking and fleet operations" },
  { href: "/faq", label: "FAQ", blurb: "Straight answers on devices, setup, data and pricing" },
  { href: "/devices", label: "Devices", blurb: "The GPS hardware Ashwa works with and how it is fitted" },
  { href: "/integrations", label: "Integrations and API", blurb: "Connect Ashwa to the systems you already run" },
  { href: "/about", label: "About Ashwa", blurb: "Who we are and why we built this" },
  { href: "/partners", label: "Partners", blurb: "For GPS dealers, installers and resellers" },
  { href: "/contact", label: "Contact", blurb: "Sales, support and everything else" },
] as const;

export const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Book a demo" },
  { href: "/contact", label: "Contact" },
] as const;

/** Public booking page for demo calls (Cal.com). */
export const CAL_URL = "https://cal.com/ashwa-cgfqvg/30min";
