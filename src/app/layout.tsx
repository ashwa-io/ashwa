import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/header";
import { Footer } from "@/sections/footer";

const bebasNeue = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bebas-neue",
	display: "swap",
});

export const metadata: Metadata = {
  title: "Ashwa - India's Best Vehicle Tracking System | Real-Time Fleet Management",
  description: "India's leading vehicle tracking and fleet management system. Real-time GPS tracking, complete vehicle history, analytics, and comprehensive fleet management solutions for businesses across India.",
  keywords: [
    "vehicle tracking system India",
    "GPS tracking India",
    "fleet management India",
    "real-time vehicle tracking",
    "vehicle tracking software",
    "fleet tracking system",
    "GPS vehicle tracker India",
    "best tracking system India",
    "vehicle monitoring system",
    "fleet analytics India"
  ],
  authors: [{ name: "Ashwa" }],
  creator: "Ashwa",
  publisher: "Ashwa",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ashwa.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Ashwa - Vehicle Tracking System",
    title: "Ashwa - India's Best Vehicle Tracking System",
    description: "Real-time GPS tracking, complete vehicle history, analytics, and comprehensive fleet management solutions for businesses across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwa - India's Best Vehicle Tracking System",
    description: "Real-time GPS tracking, complete vehicle history, analytics, and comprehensive fleet management solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e73b24",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ashwa.in/#organization",
      name: "Ashwa",
      url: "https://ashwa.in",
      logo: {
        "@type": "ImageObject",
        url: "https://ashwa.in/logo.png",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raipur",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@ashwa.io",
        contactType: "customer service",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://ashwa.in/#software",
      name: "Ashwa Vehicle Tracking System",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "1200",
        priceCurrency: "INR",
      },
      provider: {
        "@id": "https://ashwa.in/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebasNeue.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
