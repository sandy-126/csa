"use client";

export default function DashboardPreviewSection() {
  return (
    <section
      id="dashboard-preview"
      className="py-24 bg-[var(--background)] relative overflow-hidden"
      aria-label="Dashboard preview"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-sm font-medium mb-6">
            📊 Your Command Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            A Dashboard That{" "}
            <span className="gradient-text">Actually Tells a Story</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Your personal climate command center. See everything at a glance — 
            from your current footprint to AI recommendations to goal progress.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-transparent to-teal-500/10 rounded-3xl blur-2xl" />

          <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-2)]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4 h-5 rounded-md bg-[var(--border)] flex items-center px-3">
                <span className="text-xs text-[var(--foreground-subtle)]">climatesense.app/dashboard</span>
              </div>
              <span className="badge-demo">DEMO</span>
            </div>

            {/* Dashboard content */}
            <div className="flex h-80 overflow-hidden">
              {/* Sidebar */}
              <div className="w-14 lg:w-48 border-r border-[var(--border)] bg-[var(--surface-2)] p-3 flex-shrink-0">
                <div className="flex items-center gap-2 mb-6 p-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-teal-500" />
                  <span className="hidden lg:block text-xs font-bold text-[var(--foreground)]">ClimateSense</span>
                </div>
                <div className="space-y-1">
                  {[
                    { icon: "📊", label: "Dashboard", active: true },
                    { icon: "🔢", label: "Calculator" },
                    { icon: "📈", label: "Analytics" },
                    { icon: "🎯", label: "Goals" },
                    { icon: "🗺️", label: "Risk Map" },
                    { icon: "💬", label: "AI Assistant" },
                    { icon: "📄", label: "Reports" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs cursor-pointer transition-all duration-200 ${
                        item.active
                          ? "bg-green-500/15 text-green-400 font-medium"
                          : "text-[var(--foreground-muted)] hover:bg-[var(--border)]"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="hidden lg:block">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 overflow-hidden">
                {/* Welcome row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">Welcome back, Alex 👋</div>
                    <div className="text-xs text-[var(--foreground-muted)]">Your climate summary for September 2024</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-xs text-white font-bold">A</div>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Climate Score", value: "72/100", change: "+4", color: "text-green-400", icon: "⭐" },
                    { label: "Footprint", value: "2.8 tCO₂e", change: "-8.4%", color: "text-teal-400", icon: "🌍" },
                    { label: "Active Goals", value: "3", change: "On track", color: "text-blue-400", icon: "🎯" },
                    { label: "Actions Done", value: "12", change: "This month", color: "text-purple-400", icon: "✅" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[var(--foreground-muted)]">{stat.label}</span>
                        <span className="text-sm">{stat.icon}</span>
                      </div>
                      <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-[10px] text-[var(--foreground-subtle)]">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom panels */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Contributors */}
                  <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
                    <div className="text-xs font-medium text-[var(--foreground)] mb-2">Top Contributors</div>
                    <div className="space-y-1.5">
                      {[
                        { label: "Transport", pct: 48, color: "bg-green-500" },
                        { label: "Energy", pct: 32, color: "bg-teal-500" },
                        { label: "Other", pct: 20, color: "bg-blue-500" },
                      ].map((c) => (
                        <div key={c.label} className="flex items-center gap-2">
                          <span className="text-[10px] text-[var(--foreground-muted)] w-12">{c.label}</span>
                          <div className="flex-1 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                            <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
                          </div>
                          <span className="text-[10px] text-[var(--foreground-muted)]">{c.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="p-3 rounded-xl border border-green-500/20 bg-green-500/5">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-sm">🤖</span>
                      <span className="text-xs font-medium text-green-400">AI Recommendation</span>
                    </div>
                    <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                      Transportation is your largest contributor. Consider using public transit 2x/week to reduce impact by ~15%.
                    </p>
                    <div className="mt-2">
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">AI-GENERATED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard features list */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {[
            { icon: "📊", label: "Real-time scoring" },
            { icon: "🤖", label: "AI recommendations" },
            { icon: "🎯", label: "Goal progress" },
            { icon: "📈", label: "Trend charts" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm text-[var(--foreground-muted)]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
