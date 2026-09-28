"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background)]">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/50 via-[var(--background)] to-teal-950/30 dark:from-green-950/60 dark:via-[var(--background)] dark:to-teal-950/40" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Glow orbs */}
        <div className="hero-orb-1 top-1/4 -left-1/4 opacity-60" />
        <div className="hero-orb-2 bottom-1/4 right-0 opacity-40" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(34, 197, 94, 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
        {/* SDG Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 mb-8 text-sm font-medium text-green-400">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[9px] font-bold">13</span>
          </div>
          <span>UN Sustainable Development Goal 13 – Climate Action</span>
          <span className="pulse-green w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          Understand Your{" "}
          <span className="gradient-text">Climate Impact.</span>
          <br />
          Take{" "}
          <span className="relative">
            <span className="gradient-text">Smarter Action.</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M1 9C75 3 150 1 299 9"
                stroke="url(#heroUnderline)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="heroUnderline" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#22c55e" />
                  <stop offset="1" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto mb-10 leading-relaxed">
          ClimateSense is an AI-powered platform that helps individuals and organizations{" "}
          <strong className="text-green-400">measure</strong>,{" "}
          <strong className="text-teal-400">understand</strong>,{" "}
          <strong className="text-blue-400">predict</strong>, and{" "}
          <strong className="text-green-400">act</strong> on their climate impact — 
          all in one place.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/register"
            id="hero-get-started"
            className="group px-8 py-4 text-base font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl hover:from-green-400 hover:to-teal-400 transition-all duration-300 shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 flex items-center gap-2"
          >
            Start Measuring Your Impact
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <a
            href="#how-it-works"
            id="hero-learn-more"
            className="group px-8 py-4 text-base font-semibold text-[var(--foreground)] border border-[var(--border)] rounded-xl hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300 flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            See How It Works
          </a>
        </div>

        {/* Flow Steps */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {[
            { step: "MEASURE", icon: "📊", color: "green" },
            { step: "UNDERSTAND", icon: "🔍", color: "teal" },
            { step: "PREDICT", icon: "🔮", color: "blue" },
            { step: "ACT", icon: "⚡", color: "purple" },
            { step: "TRACK", icon: "📈", color: "green" },
          ].map((item, index) => (
            <div key={item.step} className="flex items-center gap-2 sm:gap-3">
              <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 ${
                item.color === "green" ? "border-green-500/30 bg-green-500/10 text-green-400" :
                item.color === "teal" ? "border-teal-500/30 bg-teal-500/10 text-teal-400" :
                item.color === "blue" ? "border-blue-500/30 bg-blue-500/10 text-blue-400" :
                "border-purple-500/30 bg-purple-500/10 text-purple-400"
              }`}>
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs font-bold tracking-wider">{item.step}</span>
              </div>
              {index < 4 && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--foreground-subtle)] flex-shrink-0">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Hero Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "2.8", unit: "tCO₂e", label: "Avg. Footprint Tracked", icon: "🌍" },
            { value: "AI", unit: "Powered", label: "Analysis & Recommendations", icon: "🤖" },
            { value: "ML", unit: "Predictions", label: "Future Impact Forecast", icon: "📈" },
            { value: "SDG", unit: "13 Aligned", label: "UN Climate Action Goal", icon: "🌱" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 card-hover"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-[var(--foreground)]">
                {stat.value}
                <span className="text-xs font-medium text-[var(--foreground-muted)] ml-1">{stat.unit}</span>
              </div>
              <div className="text-xs text-[var(--foreground-subtle)] leading-tight mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--foreground-subtle)]">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-current flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-green-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
