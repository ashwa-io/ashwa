import type { Metadata } from "next";
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
  title: "Ashwa Studio",
  description: "Created by Youcef Bnm",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
