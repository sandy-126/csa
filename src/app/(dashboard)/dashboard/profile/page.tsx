import Link from "next/link";

export const metadata = { title: "Profile – ClimateSense" };

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">My Profile</h1>
        <p className="text-[var(--foreground-muted)]">
          Personal details, location (for climate risks), display preferences.
        </p>
      </header>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8 pb-8 border-b border-[var(--border)]">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-green-500/20 shrink-0">
            DU
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-[var(--foreground)] truncate">
              Demo User
            </h2>
            <p className="text-sm text-[var(--foreground-muted)] truncate">demo@climatesense.app</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[var(--surface-2)] text-[10px] font-bold uppercase tracking-wider text-[var(--foreground-muted)] border border-[var(--border)]">
                INDIVIDUAL
              </span>
              <span className="badge-demo">PHASE 2 UI</span>
            </div>
          </div>
          <button
            disabled
            className="px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] text-xs font-semibold hover:border-green-500/40 hover:text-green-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            🖼️ Upload avatar
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Full name" value="Demo User" />
          <Field label="Email" value="demo@climatesense.app" />
          <Field label="Display units" value="Metric (kg, km)" />
          <Field label="Theme preference" value="Match system" />
          <Field label="Location / City" value="— not set —" hint="Used to personalize risk map" />
          <Field label="Notifications" value="Email + In-app" />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            disabled
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Save changes
          </button>
          <button
            disabled
            className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] text-sm font-semibold hover:bg-[var(--border)]/40 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/dashboard"
          className="text-xs font-semibold text-green-500 hover:text-green-400"
        >
          ← Back to dashboard
        </Link>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider mb-1.5">
        {label}
      </span>
      <input
        disabled
        value={value}
        className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/50 focus:ring-2 focus:ring-green-500/15 outline-none transition disabled:opacity-90"
      />
      {hint && <span className="block text-[11px] text-[var(--foreground-subtle)] mt-1">{hint}</span>}
    </label>
  );
}
