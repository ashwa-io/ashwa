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
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Ashwa — Vehicle Tracking Engineers",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "About Ashwa — Vehicle Tracking Engineers",
    description:
      "Engineers and fleet tracking experts building India's most reliable GPS vehicle tracking platform.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main className="mx-auto mt-36 max-w-6xl">{children}</main>;
}
