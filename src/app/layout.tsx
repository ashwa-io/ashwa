import type { Metadata, Viewport } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/header";
import { Footer } from "@/sections/footer";

const bebasNeue = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bebas-neue",
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashwa Vehicle Tracking System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwa - India's Best Vehicle Tracking System",
    description: "Real-time GPS tracking, complete vehicle history, analytics, and comprehensive fleet management solutions.",
    images: ["/og-image.jpg"],
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
    icon: "/logo.png",
    apple: "/logo.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${bebasNeue.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
