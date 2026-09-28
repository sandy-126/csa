"use client";

export default function WhatIsSection() {
  return (
    <section
      id="what-is"
      className="py-24 bg-[var(--surface)] relative overflow-hidden"
      aria-label="What is ClimateSense"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-sm font-medium mb-6">
              🌍 The Platform
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6">
              What is{" "}
              <span className="gradient-text">ClimateSense?</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-6">
              ClimateSense is a complete AI-powered web platform designed to bridge 
              the gap between climate awareness and climate action. We combine 
              data science, machine learning, and artificial intelligence to give 
              you a clear picture of your environmental impact.
            </p>
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">
              Whether you&apos;re an individual looking to reduce your carbon footprint 
              or an organization tracking collective sustainability goals, 
              ClimateSense provides the tools, insights, and guidance you need 
              to make meaningful progress.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "📏",
                  title: "Measure",
                  desc: "Calculate your estimated carbon footprint with our multi-step calculator using verified emission factors.",
                },
                {
                  icon: "🧠",
                  title: "Understand",
                  desc: "AI-powered analysis explains your biggest contributors and areas for improvement in plain language.",
                },
                {
                  icon: "🎯",
                  title: "Act",
                  desc: "Set goals, build action plans, and track your progress toward a lower environmental impact.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-green-500/20 to-teal-500/20">
              <div className="rounded-[22px] bg-[var(--surface-2)] p-8 border border-[var(--border)]">
                {/* Mock Dashboard Preview */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-[var(--foreground-subtle)] mb-1">Climate Score</div>
                      <div className="text-3xl font-bold text-green-400">72<span className="text-lg text-[var(--foreground-muted)]">/100</span></div>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-green-500/30 flex items-center justify-center bg-green-500/10">
                      <span className="text-2xl font-bold text-green-400">72</span>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-teal-500"
                      style={{ width: "72%" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Footprint", value: "2.8", unit: "tCO₂e", color: "text-green-400" },
                    { label: "Change", value: "-8.4%", unit: "vs last", color: "text-teal-400" },
                    { label: "Goals", value: "3", unit: "active", color: "text-blue-400" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center"
                    >
                      <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-[10px] text-[var(--foreground-subtle)]">{stat.unit}</div>
                      <div className="text-[10px] text-[var(--foreground-muted)] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bar chart mockup */}
                <div>
                  <div className="text-xs text-[var(--foreground-subtle)] mb-3">Main Contributors</div>
                  <div className="space-y-2">
                    {[
                      { label: "Transport", pct: 48, color: "bg-green-500" },
                      { label: "Electricity", pct: 32, color: "bg-teal-500" },
                      { label: "Other", pct: 20, color: "bg-blue-500" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="text-xs text-[var(--foreground-muted)] w-20">{item.label}</div>
                        <div className="flex-1 h-2 bg-[var(--border)] rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                        <div className="text-xs text-[var(--foreground-muted)] w-8 text-right">{item.pct}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center gap-2">
                  <span className="badge-demo">DEMO DATA</span>
                  <span className="text-xs text-[var(--foreground-subtle)]">Sample dashboard preview</span>
                </div>
              </div>
            </div>

            {/* Floating AI badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl bg-[var(--surface)] border border-green-500/30 shadow-xl glow-green-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-sm">
                  🤖
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--foreground)]">AI Recommendation</div>
                  <div className="text-[10px] text-[var(--foreground-muted)]">Transportation is your #1 factor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
