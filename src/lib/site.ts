export const SITE_URL = "https://ashwa.io";

export const CONTACT = {
  email: "hello@ashwa.io",
  phone: "+91 6263441130",
  phoneHref: "tel:+916263441130",
  address: "Raipur, Chhattisgarh, India",
} as const;

/** Last revision of the privacy policy, terms and deletion pages. */
export const LEGAL_UPDATED = "23 October 2026";

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/delete-account", label: "Delete Account" },
  { href: "/support", label: "Support" },
] as const;
