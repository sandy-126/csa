import type { Metadata } from "next";
import Link from "next/link";
import { registerAction } from "@/app/actions/auth";
import { AuthBrand, FieldError, FormError } from "@/components/auth/AuthCard";
import { isDemoMode } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Create Account – ClimateSense",
  description: "Create your ClimateSense account and start measuring your climate impact.",
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const next = params.next ?? "/dashboard";
  const demoMode = isDemoMode();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 py-12">
      <div className="w-full max-w-lg">
        <AuthBrand />

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2">Start Your Climate Journey</h1>
          <p className="text-[var(--foreground-muted)] text-sm">
            Create your account to begin measuring your impact
          </p>
        </div>

        {demoMode && (
          <div className="mb-6 p-4 rounded-xl border border-green-500/30 bg-green-500/5 text-sm">
            <p className="font-semibold text-green-700 dark:text-green-400 mb-2">🎯 Demo Mode Registration</p>
            <p className="text-[var(--foreground-muted)]">In demo mode, registration creates a local session. No email verification required.</p>
          </div>
        )}

        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
          <FormError />

          <form action={registerAction} className="space-y-4" noValidate>
            <input type="hidden" name="next" value={next} />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Alex Johnson"
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
              />
              <FieldError />
            </div>

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
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
              />
              <FieldError />
            </div>

            <fieldset>
              <legend className="text-sm font-medium text-[var(--foreground)] mb-2">
                Account type
              </legend>
              <div className="grid grid-cols-2 gap-3">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="accountType"
                    value="individual"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] hover:border-green-500/40 peer-checked:border-green-500 peer-checked:bg-green-500/5 peer-checked:shadow-[0_0_0_1px_rgba(34,197,94,0.4)] transition-all">
                    <div className="text-lg mb-0.5">👤</div>
                    <div className="text-sm font-medium text-[var(--foreground)]">Individual</div>
                    <div className="text-[11px] text-[var(--foreground-subtle)] mt-0.5">
                      Personal climate tracking
                    </div>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="accountType"
                    value="organization"
                    className="peer sr-only"
                  />
                  <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] hover:border-green-500/40 peer-checked:border-green-500 peer-checked:bg-green-500/5 peer-checked:shadow-[0_0_0_1px_rgba(34,197,94,0.4)] transition-all">
                    <div className="text-lg mb-0.5">🏢</div>
                    <div className="text-sm font-medium text-[var(--foreground)]">Organization</div>
                    <div className="text-[11px] text-[var(--foreground-subtle)] mt-0.5">
                      Teams & admin controls
                    </div>
                  </div>
                </label>
              </div>
            </fieldset>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="At least 8 characters"
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
                />
                <FieldError />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Re-enter password"
                  className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
                />
                <FieldError />
              </div>
            </div>

            <div className="text-xs text-[var(--foreground-muted)] leading-relaxed bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-3">
              <strong className="text-[var(--foreground)]">Password rules:</strong> 8+ characters,
              1+ uppercase letter, 1+ number. We never store passwords in plain text.
            </div>

            <label className="flex items-start gap-2 text-sm text-[var(--foreground-muted)] select-none">
              <input
                name="agreeToTerms"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-[var(--border)] text-green-500 focus:ring-green-500/30 bg-[var(--surface-2)]"
              />
              <span>
                I agree to ClimateSense&apos;s{" "}
                <a href="#terms" className="text-green-500 hover:text-green-400 underline-offset-2 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" className="text-green-500 hover:text-green-400 underline-offset-2 hover:underline">
                  Privacy Policy
                </a>
                . I understand all calculations are{" "}
                <span className="badge-estimate mx-0.5">ESTIMATES</span>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full px-4 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200 shadow-lg hover:shadow-green-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--foreground-muted)]">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-green-500 hover:text-green-400">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)]">
            ← Back to ClimateSense home
          </Link>
        </div>
      </div>
    </div>
  );
}
