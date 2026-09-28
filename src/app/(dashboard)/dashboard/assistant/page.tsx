import Link from "next/link";

export const metadata = { title: "Assistant – ClimateSense" };

export default function AssistantPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">Climate Assistant</h1>
        <p className="text-[var(--foreground-muted)]">
          AI-powered climate guidance (not available in demo mode)
        </p>
      </header>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
        <div className="text-5xl mb-4">💬</div>
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">
          Feature Not Available
        </h2>
        <p className="text-sm text-[var(--foreground-muted)] max-w-md mx-auto mb-6">
          The AI Climate Assistant feature has been removed for this simplified demo version. 
          Use the Recommendations page for rule-based action suggestions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/dashboard/recommendations"
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold hover:from-green-400 hover:to-teal-400"
          >
            View Recommendations
          </Link>
          <Link
            href="/dashboard"
            className="text-xs font-semibold text-green-500 hover:text-green-400"
          >
            ← Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
