import Link from "next/link";

export const metadata = { title: "Assessments – ClimateSense" };

export default function AssessmentsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">Assessments</h1>
          <p className="text-[var(--foreground-muted)]">
            Historical climate assessments. Each one is a snapshot in time.
          </p>
        </div>
        <Link
          href="/dashboard/calculator"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold hover:from-green-400 hover:to-teal-400 shadow-md"
        >
          ＋ New Assessment
        </Link>
      </header>

      <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-10 text-center">
        <div className="text-4xl mb-4">🗒️</div>
        <h2 className="font-semibold text-xl text-[var(--foreground)] mb-2">
          No assessments yet.
        </h2>
        <p className="text-sm text-[var(--foreground-muted)] max-w-md mx-auto mb-6">
          Past calculator runs, imports, and API data will be listed here with period, footprint,
          and a one-click compare.
        </p>
        <Link
          href="/dashboard/calculator"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-[var(--foreground)] text-sm font-semibold hover:border-green-500/40 hover:text-green-500 transition-colors"
        >
          Create your first assessment →
        </Link>
      </div>
    </div>
  );
}
