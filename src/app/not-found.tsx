import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found – ClimateSense",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 text-center">
      <div>
        <div className="text-6xl mb-6">🌍</div>
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-3">404</h1>
        <h2 className="text-xl font-semibold text-[var(--foreground-muted)] mb-4">Page Not Found</h2>
        <p className="text-[var(--foreground-subtle)] mb-8 max-w-sm mx-auto">
          This page doesn&apos;t exist. Let&apos;s get you back on track with your climate journey.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-semibold hover:from-green-400 hover:to-teal-400 transition-all duration-300 shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
