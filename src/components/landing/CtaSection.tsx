"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-24 bg-[var(--surface)] relative overflow-hidden"
      aria-label="Call to action"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute inset-0"
           style={{ background: "radial-gradient(ellipse at center, rgba(34, 197, 94, 0.05) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Top accent */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-sm font-medium mb-8">
          <span className="pulse-green w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          Start Your Climate Journey Today
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
          Ready to{" "}
          <span className="gradient-text">Measure, Understand,</span>
          <br />
          and <span className="gradient-text">Act on</span> Your Climate Impact?
        </h2>

        <p className="text-lg text-[var(--foreground-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
          Join ClimateSense and get the tools, insights, and AI-powered guidance 
          you need to make a real difference — one measurement at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/register"
            id="cta-register"
            className="group px-8 py-4 text-base font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl hover:from-green-400 hover:to-teal-400 transition-all duration-300 shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 flex items-center gap-2"
          >
            Create Free Account
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link
            href="/login"
            id="cta-login"
            className="px-8 py-4 text-base font-semibold text-[var(--foreground)] border border-[var(--border)] rounded-xl hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300"
          >
            Sign In to Existing Account
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--foreground-subtle)]">
          {[
            { icon: "🔒", label: "Secure & Private" },
            { icon: "🌍", label: "SDG 13 Aligned" },
            { icon: "🤖", label: "AI-Powered" },
            { icon: "📊", label: "Science-Based" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-left">
          <p className="text-xs text-[var(--foreground-subtle)] leading-relaxed">
            <strong className="text-[var(--foreground-muted)]">Important note:</strong>{" "}
            All carbon footprint calculations performed by ClimateSense are{" "}
            <span className="badge-estimate mx-1">ESTIMATES</span> 
            based on publicly available emission factors. They are not official measurements.
            AI-generated recommendations are for guidance only. Climate risk data may include{" "}
            <span className="badge-demo mx-1">DEMO DATA</span>{" "}
            during development — data sources and versions are always displayed.
            ClimateSense does not make unverified scientific claims.
          </p>
        </div>
      </div>
    </section>
  );
}
