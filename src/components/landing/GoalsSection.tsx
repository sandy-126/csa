"use client";

const goals = [
  {
    icon: "🚗",
    title: "Reduce Transportation Impact",
    category: "Transportation",
    target: "Reduce by 20%",
    progress: 65,
    status: "Active",
    statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
    dueDate: "Dec 2024",
    color: "green",
  },
  {
    icon: "⚡",
    title: "Switch to Renewable Energy",
    category: "Energy",
    target: "50% renewable",
    progress: 30,
    status: "Active",
    statusColor: "text-green-400 bg-green-500/10 border-green-500/20",
    dueDate: "Mar 2025",
    color: "teal",
  },
  {
    icon: "🌱",
    title: "Overall Footprint Reduction",
    category: "General",
    target: "Reduce by 10%",
    progress: 42,
    status: "At Risk",
    statusColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    dueDate: "Jun 2025",
    color: "orange",
  },
];

export default function GoalsSection() {
  return (
    <section
      id="goals"
      className="py-24 bg-[var(--surface)] relative overflow-hidden"
      aria-label="Goals and progress tracking"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Goals mockup */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[var(--foreground)]">My Climate Goals</h3>
              <div className="flex items-center gap-2">
                <span className="badge-demo">DEMO DATA</span>
              </div>
            </div>

            {goals.map((goal) => (
              <div
                key={goal.title}
                className={`p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] hover:border-green-500/30 transition-all duration-300 card-hover`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                    {goal.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-[var(--foreground)] truncate">{goal.title}</h4>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${goal.statusColor}`}>
                        {goal.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-[var(--foreground-subtle)]">{goal.category}</span>
                      <span className="text-[var(--foreground-subtle)]">•</span>
                      <span className="text-xs text-[var(--foreground-subtle)]">Target: {goal.target}</span>
                      <span className="text-[var(--foreground-subtle)]">•</span>
                      <span className="text-xs text-[var(--foreground-subtle)]">Due: {goal.dueDate}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-[var(--foreground-muted)]">Progress</span>
                    <span className="font-semibold text-[var(--foreground)]">{goal.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        goal.color === "green" ? "bg-gradient-to-r from-green-500 to-teal-500" :
                        goal.color === "teal" ? "bg-gradient-to-r from-teal-500 to-blue-500" :
                        "bg-gradient-to-r from-orange-500 to-yellow-500"
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Gamification badges */}
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
              <div className="text-xs font-medium text-[var(--foreground-muted)] mb-3">Achievements</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: "🌱", label: "Climate Starter", earned: true },
                  { icon: "⚡", label: "Action Streak: 7", earned: true },
                  { icon: "🏆", label: "Green Contributor", earned: true },
                  { icon: "🔮", label: "Climate Champion", earned: false },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs ${
                      badge.earned
                        ? "border-green-500/30 bg-green-500/10 text-green-400"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-subtle)] opacity-50"
                    }`}
                  >
                    <span>{badge.icon}</span>
                    <span className="font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-sm font-medium mb-6">
              🎯 Goals & Progress
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6">
              Set Goals.{" "}
              <span className="gradient-text">Track Progress.</span>
              <br />
              Make Impact.
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8">
              Transform climate awareness into measurable action. Create 
              structured goals, build action plans, and track your progress 
              with visual dashboards designed to keep you motivated.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Smart Goal Creation",
                  desc: "Set specific, measurable targets for different impact categories.",
                },
                {
                  icon: "📋",
                  title: "AI-Generated Action Plans",
                  desc: "Let AI suggest personalized actions based on your biggest impact areas.",
                },
                {
                  icon: "📈",
                  title: "Visual Progress Tracking",
                  desc: "Progress bars, charts, and trend lines keep you motivated and informed.",
                },
                {
                  icon: "🏆",
                  title: "Achievements & Gamification",
                  desc: "Earn badges and maintain action streaks to build lasting habits.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
