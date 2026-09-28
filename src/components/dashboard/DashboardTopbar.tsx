"use client";

import Link from "next/link";
import { useState } from "react";
import { signOutAction } from "@/app/actions/auth";
import { cn } from "@/lib/utils";
import type { AuthenticatedUser } from "@/types";

interface Props {
  user: AuthenticatedUser | null;
  demoMode: boolean;
}

export default function DashboardTopbar({ user, demoMode }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials =
    user?.name
      ?.split(" ")
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? "?";

  return (
    <header className="h-16 shrink-0 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl sticky top-0 z-30">
      <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left (mobile trigger + search) */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--foreground-muted)] hover:bg-[var(--surface-2)] transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>

          <div className="w-full max-w-lg relative hidden sm:block">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--foreground-subtle)]"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder="Search assessments, goals, recommendations…"
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/50 focus:ring-2 focus:ring-green-500/15 outline-none transition"
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {demoMode && (
            <Link
              href="/register"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-green-500/30 bg-green-500/10 text-green-500 text-xs font-semibold hover:bg-green-500/20 transition-colors"
            >
              <span>🚀</span>
              Connect Supabase
            </Link>
          )}

          <button
            type="button"
            className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[var(--foreground-muted)] hover:bg-[var(--surface-2)] transition-colors"
            aria-label="Notifications"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_0_2px_var(--surface)]" />
          </button>

          {/* Profile menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-2)] hover:bg-[var(--border)]/40 transition-colors"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="User menu"
            >
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-[11px] font-bold">
                {initials}
              </span>
              <span className="hidden sm:block text-sm font-medium text-[var(--foreground)] pr-1 max-w-[120px] truncate">
                {user?.name ?? (demoMode ? "Demo User" : "Guest")}
              </span>
              <svg
                className="text-[var(--foreground-subtle)]"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {menuOpen && (
              <div
                className="absolute right-0 mt-2 w-60 p-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl z-50 origin-top-right"
                role="menu"
              >
                <div className="px-3 py-2.5 border-b border-[var(--border)] mb-1">
                  <div className="text-sm font-semibold text-[var(--foreground)] truncate">
                    {user?.name ?? (demoMode ? "Demo User" : "Guest")}
                  </div>
                  <div className="text-[11px] text-[var(--foreground-subtle)] truncate">
                    {user?.email ?? (demoMode ? "demo@climatesense.app" : "")}
                  </div>
                  {user?.role && (
                    <div className="mt-1 inline-flex px-2 py-0.5 rounded-md bg-[var(--surface-2)] text-[10px] font-bold uppercase tracking-wider text-[var(--foreground-muted)]">
                      {user.role.replace("_", " ")}
                    </div>
                  )}
                </div>
                <MenuItem href="/dashboard/profile" icon="👤" label="My Profile" />
                <MenuItem href="/dashboard/settings" icon="⚙️" label="Settings" />
                <MenuItem href="/dashboard/reports" icon="📄" label="My Reports" />
                <div className="my-1 border-t border-[var(--border)]" />
                {demoMode ? (
                  <MenuItem href="/login" icon="🔐" label="Sign in with Supabase" />
                ) : (
                  <form action={signOutAction} className="w-full">
                    <button
                      type="submit"
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-500/10 transition-colors text-left"
                      role="menuitem"
                    >
                      <span>🚪</span>
                      Sign out
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile nav sheet */}
      {mobileOpen && (
        <div className="lg:hidden absolute inset-x-0 top-16 border-b border-[var(--border)] bg-[var(--surface)] shadow-lg z-40">
          <nav className="p-4 space-y-2" aria-label="Mobile navigation">
            {[
              { href: "/dashboard", label: "Dashboard", icon: "📊" },
              { href: "/dashboard/calculator", label: "Calculator", icon: "🧮" },
              { href: "/dashboard/analytics", label: "Analytics", icon: "📈" },
              { href: "/dashboard/goals", label: "Goals", icon: "🎯" },
              { href: "/dashboard/risk", label: "Risk Map", icon: "🗺️" },
              { href: "/dashboard/assistant", label: "AI Assistant", icon: "💬" },
              { href: "/dashboard/profile", label: "Profile", icon: "👤" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--foreground-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuItem({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm",
        "text-[var(--foreground-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)] transition-colors",
      )}
      role="menuitem"
    >
      <span>{icon}</span>
      {label}
    </Link>
  );
}
