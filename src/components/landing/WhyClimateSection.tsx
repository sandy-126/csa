"use client";

const stats = [
  {
    value: "1.5°C",
    label: "Critical warming threshold",
    detail: "The Paris Agreement target to limit global temperature rise",
    icon: "🌡️",
    color: "red",
  },
  {
    value: "37.4B",
    label: "Tonnes CO₂ emitted in 2023",
    detail: "Global fossil fuel CO₂ emissions hit record levels",
    icon: "💨",
    color: "orange",
  },
  {
    value: "4.7T",
    label: "USD needed annually",
    detail: "Global investment needed for climate action by 2030",
    icon: "💰",
    color: "yellow",
  },
  {
    value: "SDG 13",
    label: "UN Climate Action Goal",
    detail: "Urgent action is needed to combat climate change and its impacts",
    icon: "🌱",
    color: "green",
  },
];

const impacts = [
  {
    icon: "🌊",
    title: "Rising Sea Levels",
    desc: "Coastal flooding threatens millions of homes and communities worldwide.",
  },
  {
    icon: "🔥",
    title: "Extreme Weather",
    desc: "More frequent and intense heat waves, storms, and wildfires.",
  },
  {
    icon: "🌾",
    title: "Food Security",
    desc: "Disrupted agricultural patterns threaten global food supply chains.",
  },
  {
    icon: "💧",
    title: "Water Scarcity",
    desc: "Changing precipitation patterns lead to droughts and water shortages.",
  },
  {
    icon: "🦎",
    title: "Biodiversity Loss",
    desc: "Species extinction rates accelerate with habitat destruction and climate shifts.",
  },
  {
    icon: "🏙️",
    title: "Urban Heat Islands",
    desc: "Cities face rising temperatures, increasing energy demands and health risks.",
  },
];

export default function WhyClimateSection() {
  return (
    <section
      id="why-climate"
      className="py-24 bg-[var(--background)] relative overflow-hidden"
      aria-label="Why climate action matters"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-sm font-medium mb-6">
            ⚠️ The Climate Crisis
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Why Climate Action{" "}
            <span className="gradient-text">Cannot Wait</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            The scientific consensus is clear. Every action, every measurement, 
            every goal matters — and the time to act is now.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] relative overflow-hidden card-hover hover:border-green-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-[var(--foreground)] mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[var(--foreground)] mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mb-12 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-3">
          <span className="text-yellow-400 text-lg flex-shrink-0">ℹ️</span>
          <p className="text-xs text-[var(--foreground-muted)]">
            <strong className="text-[var(--foreground)]">Data sources:</strong>{" "}
            Statistics referenced from IPCC, IEA, and UN climate reports.
            All data is approximate and for educational purposes.
            ClimateSense does not make unverified scientific claims.
          </p>
        </div>

        {/* Climate Impacts Grid */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
            The Real Impacts of Climate Change
          </h3>
          <p className="text-[var(--foreground-muted)]">
            Understanding these impacts makes the case for immediate, structured climate action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-green-500/30 transition-all duration-300"
            >
              <div className="text-2xl flex-shrink-0">{impact.icon}</div>
              <div>
                <h4 className="text-sm font-semibold text-[var(--foreground)] mb-1.5">
                  {impact.title}
                </h4>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {impact.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
