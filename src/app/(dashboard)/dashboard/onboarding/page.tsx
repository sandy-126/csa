import Link from "next/link";

export const metadata = { title: "Welcome to ClimateSense" };

export default function OnboardingPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-500 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 pulse-green" />
          Step 1 of 3 · Welcome
        </div>

        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-4xl shadow-2xl shadow-green-500/30">
          🎉
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-3 tracking-tight">
          Account created successfully
        </h1>
        <p className="text-[var(--foreground-muted)] mb-8 max-w-md mx-auto">
          Let&apos;s take 2 minutes to personalize ClimateSense for you — or skip and explore the
          dashboard right away.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
          {[
            { n: 1, label: "Tell us about you", active: true, icon: "👤" },
            { n: 2, label: "Set your location", icon: "📍" },
            { n: 3, label: "First climate goal", icon: "🎯" },
          ].map((s) => (
            <div
              key={s.n}
              className={`p-4 rounded-xl border ${
                s.active
                  ? "border-green-500/40 bg-green-500/5 shadow-[0_0_0_1px_rgba(34,197,94,0.25)]"
                  : "border-[var(--border)] bg-[var(--surface-2)] opacity-70"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-base">
                  {s.icon}
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    s.active ? "text-green-500" : "text-[var(--foreground-subtle)]"
                  }`}
                >
                  Step {s.n}
                </span>
              </div>
              <div className="text-sm font-semibold text-[var(--foreground)]">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            disabled
            title="Onboarding wizard wired to Prisma profile table"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold shadow-lg shadow-green-500/25 hover:from-green-400 hover:to-teal-400 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Start onboarding
          </button>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] font-semibold hover:border-green-500/40 hover:text-green-500"
          >
            Skip to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
