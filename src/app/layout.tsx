import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClimateSense – AI-Powered Climate Impact Platform",
  description:
    "Understand your climate impact, predict future trends, and take smarter climate action with AI-powered insights. Supporting UN SDG 13 – Climate Action.",
  keywords: [
    "climate action",
    "carbon footprint",
    "climate impact",
    "sustainability",
    "AI recommendations",
    "SDG 13",
    "carbon calculator",
    "climate risk",
  ],
  authors: [{ name: "ClimateSense" }],
  openGraph: {
    title: "ClimateSense – AI-Powered Climate Impact Platform",
    description:
      "Measure, understand, predict, and act on your climate impact with AI-powered insights.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClimateSense – AI-Powered Climate Impact Platform",
    description:
      "Measure, understand, predict, and act on your climate impact with AI-powered insights.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
