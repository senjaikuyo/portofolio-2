import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Using Inter as a placeholder for a clear, modern brutalist font
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Afif Hamzah Siregar | Fullstack Enthusiast",
  description: "Personal portfolio of Afif Hamzah Siregar, Software Engineering Student at Politeknik Negeri Batam.",
};

import { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={`${inter.className} antialiased selection:bg-accent-lime selection:text-text-dark overflow-x-hidden`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
