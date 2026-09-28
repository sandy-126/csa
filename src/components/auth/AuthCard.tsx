import Link from "next/link";

export function AuthBrand() {
  return (
    <div className="text-center mb-8">
      <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="rgba(255,255,255,0.2)" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="rgba(255,255,255,0.3)" />
            <circle cx="12" cy="12" r="2" fill="white" />
          </svg>
        </div>
        <span className="text-xl font-bold text-[var(--foreground)]">
          Climate<span className="text-green-500">Sense</span>
        </span>
      </Link>
    </div>
  );
}

export function FieldError({ error }: { error?: string[] }) {
  if (!error || error.length === 0) return null;
  return (
    <p className="mt-1.5 text-xs text-red-500 dark:text-red-400" role="alert">
      {error[0]}
    </p>
  );
}

export function FormError({ errors }: { errors?: string[] }) {
  if (!errors || errors.length === 0) return null;
  return (
    <div
      className="mb-4 p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-sm text-red-600 dark:text-red-400"
      role="alert"
    >
      {errors[0]}
    </div>
  );
}
