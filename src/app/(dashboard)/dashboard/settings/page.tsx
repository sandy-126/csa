import Link from "next/link";

export const metadata = { title: "Settings – ClimateSense" };

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">Settings</h1>
        <p className="text-[var(--foreground-muted)]">Appearance, notifications, data, account.</p>
      </header>

      <Section title="Appearance" subtitle="Theme and display options">
        <Row label="Theme" value="Match system (auto light/dark)" />
        <Row label="Density" value="Comfortable" />
      </Section>

      <Section title="Notifications" subtitle="What you hear from us">
        <Row label="Goal reminders" value="Weekly email" />
        <Row label="Risk updates" value="In-app only" />
        <Row label="Product news" value="Off" />
      </Section>

      <Section title="Data & Privacy" subtitle="Manage your assessment history">
        <Row label="Stored assessments" value="0 rows" />
        <Row label="Data export (JSON / CSV)" value="Disabled" />
        <Row label="Delete account" value="Irreversible" destructive />
      </Section>

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

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] divide-y divide-[var(--border)] overflow-hidden">
      <header className="p-5 sm:p-6">
        <h2 className="font-semibold text-[var(--foreground)]">{title}</h2>
        <p className="text-xs text-[var(--foreground-muted)] mt-0.5">{subtitle}</p>
      </header>
      <div>{children}</div>
    </section>
  );
}

function Row({
  label,
  value,
  destructive,
}: {
  label: string;
  value: string;
  destructive?: boolean;
}) {
  return (
    <div className="px-5 sm:px-6 py-4 flex items-center justify-between gap-4">
      <span className="text-sm text-[var(--foreground)] font-medium">{label}</span>
      <button
        disabled
        className={`text-xs font-semibold ${
          destructive
            ? "text-red-500 hover:text-red-400"
            : "text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)]"
        } disabled:cursor-not-allowed`}
      >
        {value} →
      </button>
    </div>
  );
}
