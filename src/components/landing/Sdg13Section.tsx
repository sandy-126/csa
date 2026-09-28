"use client";

const sdgTargets = [
  {
    code: "13.1",
    title: "Strengthen Resilience",
    desc: "Strengthen resilience and adaptive capacity to climate-related hazards.",
    how: "ClimateSense provides climate risk information for any location, enabling informed preparedness decisions.",
    icon: "🛡️",
  },
  {
    code: "13.2",
    title: "Integrate Climate Measures",
    desc: "Integrate climate change measures into policies, strategies, and planning.",
    how: "Individual and organizational dashboards make climate data central to planning and decision-making.",
    icon: "📋",
  },
  {
    code: "13.3",
    title: "Improve Awareness & Education",
    desc: "Improve education, awareness-raising, and human capacity on climate change.",
    how: "AI explanations, data sources, and educational content make complex climate science accessible to everyone.",
    icon: "🎓",
  },
];

export default function Sdg13Section() {
  return (
    <section
      id="sdg13"
      className="py-24 bg-[var(--background)] relative overflow-hidden"
      aria-label="SDG 13 - Climate Action connection"
    >
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10"
           style={{ background: "radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          {/* SDG 13 Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-green-500/30 bg-green-500/10 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-black text-lg">
              13
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-green-400">UN Sustainable Development Goal</div>
              <div className="text-xs text-[var(--foreground-muted)]">SDG 13 – Take urgent action to combat climate change and its impacts</div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Built for{" "}
            <span className="gradient-text">UN SDG 13</span>
            <br />
            Climate Action
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            ClimateSense is purpose-built to support the United Nations 
            Sustainable Development Goal 13 — taking urgent action to 
            combat climate change and its impacts.
          </p>
        </div>

        {/* SDG Targets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {sdgTargets.map((target) => (
            <div
              key={target.code}
              className="p-6 rounded-2xl border border-green-500/20 bg-[var(--surface)] hover:border-green-500/40 transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-xl">
                  {target.icon}
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                  SDG {target.code}
                </span>
              </div>

              <h3 className="text-base font-bold text-[var(--foreground)] mb-2">{target.title}</h3>
              <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">{target.desc}</p>

              <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                <div className="text-xs font-semibold text-green-400 mb-1.5">How ClimateSense Helps</div>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">{target.how}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="relative p-8 sm:p-12 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/5 via-[var(--surface)] to-teal-500/5 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-teal-500" />

          <div className="text-5xl mb-6">🌍</div>
          <blockquote className="text-xl sm:text-2xl font-semibold text-[var(--foreground)] max-w-3xl mx-auto leading-relaxed mb-6">
            &ldquo;Climate change is a global emergency that goes beyond borders. It is an issue that requires coordinated solutions at all levels — individual, organizational, national, and global.&rdquo;
          </blockquote>
          <cite className="text-sm text-[var(--foreground-muted)]">
            — United Nations, SDG 13 Framework
          </cite>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Individual Action", icon: "👤" },
              { label: "Organization Level", icon: "🏢" },
              { label: "AI-Powered Insights", icon: "🤖" },
              { label: "Climate Education", icon: "🎓" },
              { label: "Progress Tracking", icon: "📈" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-sm text-green-400"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
