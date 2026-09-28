import type { Metadata } from "next";
import Link from "next/link";
import { loginAction } from "@/app/actions/auth";
import { AuthBrand, FieldError, FormError } from "@/components/auth/AuthCard";
import { isDemoMode } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Sign In – ClimateSense",
  description: "Sign in to your ClimateSense account to manage your climate impact.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string; error?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const next = params.next ?? "/dashboard";
  const errorMessage = params.error;
  const demoMode = isDemoMode();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 py-12">
      <div className="w-full max-w-md">
        <AuthBrand />

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2">Welcome Back</h1>
          <p className="text-[var(--foreground-muted)] text-sm">
            Sign in to continue your climate journey
          </p>
        </div>

        {demoMode && (
          <div className="mb-6 p-4 rounded-xl border border-green-500/30 bg-green-500/5 text-sm">
            <p className="font-semibold text-green-700 dark:text-green-400 mb-2">🎯 Demo Mode Quick Login</p>
            <div className="bg-[var(--surface-2)] rounded-lg p-3 space-y-1">
              <p className="text-xs text-[var(--foreground-muted)]">Email: <span className="font-mono text-[var(--foreground)]">demo@climatesense.com</span></p>
              <p className="text-xs text-[var(--foreground-muted)]">Password: <span className="font-mono text-[var(--foreground)]">Demo@123</span></p>
            </div>
          </div>
        )}

        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
          <FormError errors={errorMessage ? [errorMessage] : undefined} />

          <form action={loginAction} className="space-y-5" noValidate>
            <input type="hidden" name="next" value={next} />

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
                defaultValue={demoMode ? "demo@climatesense.com" : ""}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
              />
              <FieldError />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-[var(--foreground)]">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-green-500 hover:text-green-400 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                defaultValue={demoMode ? "Demo@123" : ""}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
              />
              <FieldError />
            </div>

            <label className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] select-none">
              <input
                name="rememberMe"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-[var(--border)] text-green-500 focus:ring-green-500/30 bg-[var(--surface-2)]"
              />
              Keep me signed in
            </label>

            <button
              type="submit"
              className="w-full px-4 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200 shadow-lg hover:shadow-green-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Sign In
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border)]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-[var(--surface)] text-[var(--foreground-subtle)] uppercase tracking-wider">
                  or
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                disabled
                title="OAuth coming soon"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground-muted)] hover:bg-[var(--border)]/40 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>🔵</span> Google
              </button>
              <button
                type="button"
                disabled
                title="OAuth coming soon"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground-muted)] hover:bg-[var(--border)]/40 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>⚫</span> GitHub
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--foreground-muted)]">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-green-500 hover:text-green-400">
              Create one
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
