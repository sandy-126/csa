import type { Metadata } from "next";
import Link from "next/link";
import { isDemoMode } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Forgot Password – ClimateSense",
  description: "Reset your ClimateSense account password.",
};

export default async function ForgotPasswordPage() {
  const demoMode = isDemoMode();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.2)" />
                <circle cx="12" cy="12" r="4" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[var(--foreground)]">
              Climate<span className="text-green-500">Sense</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2">Reset your password</h1>
          <p className="text-[var(--foreground-muted)] text-sm">
            Enter your email and we&apos;ll send you a reset link.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
          {demoMode && (
            <div className="mb-6 p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5 text-sm">
              <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">⚠️ Demo Mode</p>
              <p className="text-[var(--foreground-muted)]">Password reset is not available in demo mode. For demo purposes, you can create a new account or use the demo account.</p>
            </div>
          )}

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={demoMode}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={demoMode}
              title={demoMode ? "Not available in demo mode" : "Coming in Phase 2 — wire to Supabase reset-password endpoint"}
              className="w-full px-4 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200 shadow-lg hover:shadow-green-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send reset link
            </button>

            {!demoMode && (
              <p className="text-xs text-[var(--foreground-subtle)] bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                Password reset will be available once Supabase Auth is fully configured in the deployed environment.
              </p>
            )}
          </form>

          <p className="mt-6 text-center text-sm text-[var(--foreground-muted)]">
            Remembered your password?{" "}
            <Link href="/login" className="font-semibold text-green-500 hover:text-green-400">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
