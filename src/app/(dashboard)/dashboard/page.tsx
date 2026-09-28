import Link from "next/link";

export default function DashboardHomePage() {
  // Placeholder stat cards. Once DB is wired, replace with real aggregates from
  // climate_assessments, climate_goals, progress_records, recommendations.
  const stats = [
    {
      label: "Climate Score",
      value: "—",
      delta: "No assessment yet",
      icon: "⭐",
      accent: "from-yellow-500 to-orange-500",
      cta: { label: "Take calculator", href: "/dashboard/calculator" },
    },
    {
      label: "Estimated Footprint",
      value: "—",
      delta: "Start an assessment",
      icon: "🌍",
      accent: "from-green-500 to-teal-500",
      cta: { label: "New assessment", href: "/dashboard/calculator" },
      badge: "ESTIMATE",
    },
    {
      label: "Active Goals",
      value: "0",
      delta: "Create your first goal",
      icon: "🎯",
      accent: "from-blue-500 to-indigo-500",
      cta: { label: "Set a goal", href: "/dashboard/goals" },
    },
    {
      label: "Actions Completed",
      value: "0",
      delta: "No actions yet",
      icon: "✅",
      accent: "from-purple-500 to-pink-500",
      cta: { label: "Browse action plans", href: "/dashboard/goals" },
    },
  ];

  const contributors = [
    { label: "Transport", pct: 0 },
    { label: "Energy", pct: 0 },
    { label: "Diet", pct: 0 },
    { label: "Shopping", pct: 0 },
    { label: "Waste", pct: 0 },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20 bg-green-500/10 text-green-500 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-green" />
            Welcome to your climate command center
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Let&apos;s take your next climate step.
          </h1>
          <p className="mt-1.5 text-[var(--foreground-muted)]">
            Measure, understand, predict, and act — everything lives here.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href="/dashboard/calculator"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all shadow-lg hover:shadow-green-500/25"
          >
            <span>🧮</span>
            Start Climate Assessment
          </Link>
          <Link
            href="/dashboard/assistant"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-purple-500/40 hover:bg-purple-500/5 transition-colors"
          >
            <span>💬</span>
            Ask AI Assistant
          </Link>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden card-hover"
          >
            <div
              className={`absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-20 bg-gradient-to-br ${stat.accent}`}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-sm">{stat.icon}</span>
                    <p className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold text-[var(--foreground)] tabular-nums">
                      {stat.value}
                    </div>
                    {stat.badge && <span className="badge-estimate">{stat.badge}</span>}
                  </div>
                  <p className="text-xs text-[var(--foreground-subtle)] mt-1">{stat.delta}</p>
                </div>
              </div>
              {stat.cta && (
                <Link
                  href={stat.cta.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-green-500 hover:text-green-400"
                >
                  {stat.cta.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 2-column: Contributors + AI Recommendation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Top Contributors (empty) */}
        <section className="lg:col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 lg:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-semibold text-[var(--foreground)]">
                Top Contributors
              </h2>
              <p className="text-xs text-[var(--foreground-muted)] mt-0.5">
                Where your emissions come from — after your first assessment.
              </p>
            </div>
            <span className="badge-estimate">ESTIMATES</span>
          </div>

          <div className="space-y-3">
            {contributors.map((c) => (
              <div key={c.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--foreground-muted)] font-medium">{c.label}</span>
                  <span className="text-[var(--foreground-subtle)] tabular-nums">—</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--surface-2)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20"
                    style={{ width: "4%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <EmptyState
            icon="📊"
            title="No assessment data yet"
            body="Run your first climate calculator to see a live breakdown of transport, energy, diet, shopping, and waste contributions."
            action={{ label: "Start calculator", href: "/dashboard/calculator" }}
          />
        </section>

        {/* AI Recommendation */}
        <section className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-[var(--surface)] to-transparent p-5 lg:p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span>🤖</span>
            <h2 className="text-base font-semibold text-[var(--foreground)]">AI Recommendation</h2>
            <span className="ml-auto px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/20">
              AI-GENERATED
            </span>
          </div>

          <p className="text-sm text-[var(--foreground-muted)] leading-relaxed flex-1">
            Complete your first footprint assessment and ClimateSense will analyze your biggest
            contributors, then suggest 3–5 personalized actions ranked by impact × effort.
          </p>

          <EmptyState
            compact
            icon="✨"
            title="Unlock personalized tips"
            body="Assessment data required."
            action={{ label: "Take assessment", href: "/dashboard/calculator" }}
          />
        </section>
      </div>

      {/* 3-column: Trends | Goals | Risk */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-[var(--foreground)]">Monthly Trend</h2>
            <Link
              href="/dashboard/analytics"
              className="text-xs font-semibold text-green-500 hover:text-green-400"
            >
              View analytics →
            </Link>
          </div>
          <div className="h-40 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface-2)] flex items-center justify-center text-center px-4">
            <div>
              <div className="text-2xl mb-2 opacity-50">📈</div>
              <p className="text-sm text-[var(--foreground-muted)] font-medium">
                Trend chart coming soon
              </p>
              <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                You&apos;ll see your footprint over time after 2+ assessments.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-[var(--foreground)]">Goals Progress</h2>
            <Link
              href="/dashboard/goals"
              className="text-xs font-semibold text-green-500 hover:text-green-400"
            >
              All goals →
            </Link>
          </div>
          <EmptyState
            icon="🎯"
            title="Set your first climate goal"
            body="Try: cut transport footprint 20% in 6 months, or go car-free 3 days a week."
            action={{ label: "Create goal", href: "/dashboard/goals" }}
          />
        </section>

        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-[var(--foreground)]">Climate Risk</h2>
            <div className="flex items-center gap-1.5">
              <span className="badge-demo">DEMO DATA</span>
              <Link
                href="/dashboard/risk"
                className="text-xs font-semibold text-green-500 hover:text-green-400"
              >
                Risk map →
              </Link>
            </div>
          </div>
          <EmptyState
            icon="🗺️"
            title="Add your location to see risks"
            body="Heat, flood, drought, and wildfire outlook for your area — using labeled demonstration data until real APIs are configured."
            action={{ label: "Set location", href: "/dashboard/profile" }}
          />
        </section>
      </div>

      {/* Recent activity */}
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 lg:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-[var(--foreground)]">Recent Activity</h2>
          <Link
            href="/dashboard/assessments"
            className="text-xs font-semibold text-green-500 hover:text-green-400"
          >
            All activity →
          </Link>
        </div>
        <EmptyState
          icon="🗒️"
          title="Nothing recorded yet"
          body="Assessments, completed actions, and goal milestones will appear here automatically."
        />
      </section>
    </div>
  );
}

function EmptyState({
  icon,
  title,
  body,
  action,
  compact,
}: {
  icon: string;
  title: string;
  body: string;
  action?: { label: string; href: string };
  compact?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center text-center ${
        compact ? "mt-4" : "mt-8"
      } border-t border-dashed border-[var(--border)] ${compact ? "pt-4" : "pt-8"}`}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-[var(--surface-2)] border border-[var(--border)] ${
          compact ? "w-10 h-10 text-lg mb-3" : "w-14 h-14 text-2xl mb-4"
        }`}
      >
        {icon}
      </div>
      <h3 className={`font-semibold text-[var(--foreground)] ${compact ? "text-sm mb-1" : "text-base mb-1.5"}`}>
        {title}
      </h3>
      <p className={`text-[var(--foreground-muted)] max-w-xs ${compact ? "text-xs mb-3" : "text-sm mb-4"}`}>
        {body}
      </p>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-[var(--surface-2)] border border-[var(--border)] text-[var(--foreground)] hover:border-green-500/40 hover:text-green-500 transition-colors"
        >
          {action.label}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
