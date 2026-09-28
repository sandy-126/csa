"use client";

const features = [
  {
    icon: "🌡️",
    title: "Multi-Step Calculator",
    description:
      "Estimate your carbon footprint across transportation, energy, and other activities with our guided calculator.",
    color: "green",
  },
  {
    icon: "🤖",
    title: "AI-Powered Analysis",
    description:
      "Get plain-language explanations of your climate impact with personalized AI-generated recommendations.",
    color: "blue",
  },
  {
    icon: "🔮",
    title: "ML Predictions",
    description:
      "Forecast your future environmental impact using machine learning trained on your historical data.",
    color: "purple",
  },
  {
    icon: "🗺️",
    title: "Climate Risk Map",
    description:
      "View location-based climate risks including heat, flood, drought, and coastal hazards on an interactive map.",
    color: "teal",
  },
  {
    icon: "🎯",
    title: "Goals & Action Plans",
    description:
      "Set measurable climate goals and build structured action plans with progress tracking.",
    color: "orange",
  },
  {
    icon: "💬",
    title: "AI Climate Assistant",
    description:
      "Ask ClimateSense AI questions about your impact, get recommendations, and understand your data.",
    color: "indigo",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Visualize historical trends, category breakdowns, and changes over time with interactive charts.",
    color: "cyan",
  },
  {
    icon: "📄",
    title: "Professional Reports",
    description:
      "Generate detailed PDF reports for personal tracking, reviews, or stakeholder presentations.",
    color: "pink",
  },
  {
    icon: "🏢",
    title: "Organization Tools",
    description:
      "Manage team climate goals, track collective footprint, and engage members in climate action.",
    color: "green",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/20 hover:border-green-500/40",
    text: "text-green-400",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    text: "text-blue-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20 hover:border-purple-500/40",
    text: "text-purple-400",
  },
  teal: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/20 hover:border-teal-500/40",
    text: "text-teal-400",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20 hover:border-orange-500/40",
    text: "text-orange-400",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    text: "text-indigo-400",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    text: "text-cyan-400",
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20 hover:border-pink-500/40",
    text: "text-pink-400",
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[var(--background)] relative overflow-hidden" aria-label="Platform features">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-sm font-medium mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Complete Feature Set
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Everything You Need for{" "}
            <span className="gradient-text">Climate Action</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            A comprehensive platform covering the complete climate action journey — 
            from initial measurement to sustained progress tracking.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const colors = colorMap[feature.color] || colorMap.green;
            return (
              <div
                key={feature.title}
                className={`p-6 rounded-2xl border bg-[var(--surface)] transition-all duration-300 card-hover ${colors.border}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className={`text-base font-semibold ${colors.text} mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
