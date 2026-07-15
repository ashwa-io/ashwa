import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Ashwa — Vehicle Tracking Engineers | Raipur, India",
  description:
    "Meet the team behind Ashwa. Engineers and fleet tracking experts building India's most reliable GPS vehicle tracking and fleet management platform.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/about",
    siteName: "Ashwa - Vehicle Tracking System",
    title: "About Ashwa — Vehicle Tracking Engineers",
    description:
      "Engineers and fleet tracking experts building India's most reliable GPS vehicle tracking platform. Based in Raipur, Chhattisgarh.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashwa — Smart Vehicle Tracking for Indian fleets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ashwa — Vehicle Tracking Engineers",
    description:
      "Engineers and fleet tracking experts building India's most reliable GPS vehicle tracking platform.",
    images: ["/og-image.png"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://ashwa.in/about#webpage",
      url: "https://ashwa.in/about",
      name: "About Ashwa — Vehicle Tracking Engineers",
      isPartOf: { "@id": "https://ashwa.in/#website" },
      about: { "@id": "https://ashwa.in/#organization" },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ashwa.in/about#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ashwa.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://ashwa.in/about",
        },
      ],
    },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="mx-auto mt-36 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </main>
  );
}
