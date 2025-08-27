import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI Home Fix - AI-Powered Home Repair Assistant",
  description: "Transform your home repairs with AI-powered diagnostics. Get instant, accurate solutions for any household problem. Upload a photo and get your fix in 1 minute.",
  keywords: ["home repair", "AI assistant", "DIY", "home maintenance", "household fixes"],
  authors: [{ name: "AI Home Fix Team" }],
  creator: "AI Home Fix",
  publisher: "AI Home Fix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aihomefix.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Home Fix - AI-Powered Home Repair Assistant",
    description: "Transform your home repairs with AI-powered diagnostics. Get instant, accurate solutions for any household problem.",
    url: "https://aihomefix.com",
    siteName: "AI Home Fix",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Home Fix - AI-Powered Home Repair Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Home Fix - AI-Powered Home Repair Assistant",
    description: "Transform your home repairs with AI-powered diagnostics. Get instant, accurate solutions for any household problem.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Header />
        <main className="pt-16 lg:pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
