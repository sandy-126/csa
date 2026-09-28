"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { AuthenticatedUser } from "@/types";

interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: string;
}

const NAV_ITEMS: Array<{ group: string; items: NavItem[] }> = [
  {
    group: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: "📊" },
      { label: "Analytics", href: "/dashboard/analytics", icon: "📈" },
      { label: "AI Recommendations", href: "/dashboard/recommendations", icon: "🤖", badge: "AI" },
    ],
  },
  {
    group: "Measure & Predict",
    items: [
      { label: "Climate Calculator", href: "/dashboard/calculator", icon: "🧮" },
      { label: "Assessments", href: "/dashboard/assessments", icon: "🗒️" },
      { label: "ML Predictions", href: "/dashboard/predictions", icon: "🔮", badge: "PREDICTION" },
    ],
  },
  {
    group: "Take Action",
    items: [
      { label: "Goals & Plans", href: "/dashboard/goals", icon: "🎯" },
      { label: "Climate Risk Map", href: "/dashboard/risk", icon: "🗺️", badge: "DEMO" },
    ],
  },
  {
    group: "Engage",
    items: [
      { label: "AI Assistant", href: "/dashboard/assistant", icon: "💬", badge: "AI" },
      { label: "Reports", href: "/dashboard/reports", icon: "📄" },
    ],
  },
  {
    group: "Account",
    items: [
      { label: "Profile", href: "/dashboard/profile", icon: "👤" },
      { label: "Organizations", href: "/dashboard/orgs", icon: "🏢" },
      { label: "Settings", href: "/dashboard/settings", icon: "⚙️" },
    ],
  },
];

interface Props {
  user: AuthenticatedUser | null;
  demoMode: boolean;
}

export default function DashboardSidebar({ user, demoMode }: Props) {
  const pathname = usePathname();

  const initials =
    user?.name
      ?.split(" ")
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? "?";

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      {/* Logo */}
      <div className="h-16 flex items-center gap-2.5 px-5 border-b border-[var(--border)]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="rgba(255,255,255,0.2)" />
              <circle cx="12" cy="12" r="2" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-[var(--foreground)]">
              Climate<span className="text-green-500">Sense</span>
            </span>
            <span className="text-[8px] text-[var(--foreground-subtle)] tracking-widest uppercase">
              Climate Platform
            </span>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3" aria-label="Dashboard navigation">
        {NAV_ITEMS.map((section) => (
          <div key={section.group} className="mb-6">
            <h3 className="px-3 mb-2 text-[10px] font-semibold text-[var(--foreground-subtle)] tracking-widest uppercase">
              {section.group}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const active =
                  item.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname === item.href || pathname?.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                        active
                          ? "bg-green-500/12 text-green-500 shadow-[0_0_0_1px_rgba(34,197,94,0.2)]"
                          : "text-[var(--foreground-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]",
                      )}
                    >
                      <span className="text-base leading-none">{item.icon}</span>
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <span
                          className={cn(
                            "px-1.5 py-0.5 rounded-md text-[9px] font-bold tracking-wider uppercase",
                            item.badge === "AI"
                              ? "bg-purple-500/15 text-purple-400 border border-purple-500/20"
                              : item.badge === "PREDICTION"
                                ? "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                                : "bg-yellow-500/15 text-yellow-500 border border-yellow-500/20",
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="p-3 border-t border-[var(--border)]">
        <div className="p-2.5 rounded-xl bg-[var(--surface-2)] flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-md shrink-0">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-[var(--foreground)] truncate">
              {user?.name ?? (demoMode ? "Demo User" : "Guest")}
            </div>
            <div className="text-[11px] text-[var(--foreground-subtle)] truncate">
              {user?.email ?? (demoMode ? "demo@climatesense.app" : "Not signed in")}
            </div>
          </div>
          {demoMode && <span className="badge-demo shrink-0">DEMO</span>}
        </div>
      </div>
    </aside>
  );
}
