import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue, Bricolage_Grotesque, Caveat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/header";
import { Footer } from "@/sections/footer";
import { MotionProvider } from "@/components/site/reveal";

const bebasNeue = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bebas-neue",
	display: "swap",
});

const display = Bricolage_Grotesque({
	subsets: ["latin"],
	variable: "--ff-display",
	display: "swap",
});

const body = Geist({
	subsets: ["latin"],
	variable: "--ff-body",
	display: "swap",
});

const mono = Geist_Mono({
	subsets: ["latin"],
	variable: "--ff-mono",
	display: "swap",
});

const caveat = Caveat({
	weight: "600",
	subsets: ["latin"],
	variable: "--font-handwriting",
	display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Ashwa | GPS Vehicle Tracking and Fleet Management Platform",
    template: "%s | Ashwa",
  },
  description: "Ashwa is a modular GPS tracking and fleet management platform. Live vehicle tracking, trip history, geofences, alerts and reports, with modules for rental fleets, school buses and enterprise operations.",
  keywords: [
    "vehicle tracking system India",
    "GPS tracking India",
    "fleet management India",
    "real-time vehicle tracking",
    "vehicle tracking software",
    "fleet tracking system",
    "GPS vehicle tracker India",
    "school bus tracking system",
    "vehicle monitoring system",
    "fleet analytics India"
  ],
  authors: [{ name: "Ashwa" }],
  creator: "Ashwa",
  publisher: "Ashwa",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ashwa.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Ashwa",
    title: "Ashwa | GPS Vehicle Tracking and Fleet Management Platform",
    description: "Live vehicle tracking, trip history, geofences, alerts and reports, with modules for rental fleets, school buses and enterprise operations.",
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
    title: "Ashwa | GPS Vehicle Tracking and Fleet Management Platform",
    description: "Live vehicle tracking, trip history, geofences, alerts and reports, with modules for rental fleets, school buses and enterprise operations.",
    images: ["/og-image.png"],
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
      "@id": "https://ashwa.io/#organization",
      name: "Ashwa",
      url: "https://ashwa.io",
      logo: {
        "@type": "ImageObject",
        url: "https://ashwa.io/logo.png",
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
        telephone: "+91-6263441130",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ashwa.io/#website",
      url: "https://ashwa.io",
      name: "Ashwa",
      publisher: {
        "@id": "https://ashwa.io/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://ashwa.io/#software",
      name: "Ashwa",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      provider: {
        "@id": "https://ashwa.io/#organization",
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
      <body className={`${bebasNeue.variable} ${caveat.variable} ${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <MotionProvider>
          <Header />
          <div id="main">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
