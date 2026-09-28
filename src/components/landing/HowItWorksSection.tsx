"use client";

const steps = [
  {
    number: "01",
    icon: "📊",
    title: "Measure",
    subtitle: "Understand Your Starting Point",
    description:
      "Use our guided multi-step calculator to input your transportation, energy usage, and other activities. We use verified, publicly available emission factors to estimate your carbon footprint.",
    features: [
      "Transportation (car, public transit, flights)",
      "Energy (electricity, renewables)",
      "Configurable categories",
      "Verified emission factors with sources",
    ],
    color: "green",
    label: "ESTIMATE",
    labelType: "estimate",
  },
  {
    number: "02",
    icon: "🔍",
    title: "Understand",
    subtitle: "AI-Powered Analysis",
    description:
      "Our AI analyzes your data and provides plain-language explanations of your biggest contributors, possible causes, and areas where you can make the most impact.",
    features: [
      "Plain-language explanations",
      "Main contributor identification",
      "Historical trend analysis",
      "Personalized insights",
    ],
    color: "blue",
    label: "AI-GENERATED",
    labelType: "ai",
  },
  {
    number: "03",
    icon: "🔮",
    title: "Predict",
    subtitle: "Machine Learning Forecasts",
    description:
      "Our ML model analyzes your historical data to forecast your future carbon footprint, helping you understand if your actions are working and what to expect.",
    features: [
      "Historical pattern analysis",
      "Future footprint forecasts",
      "Trend direction indicator",
      "Model transparency",
    ],
    color: "purple",
    label: "ML PREDICTION",
    labelType: "prediction",
  },
  {
    number: "04",
    icon: "⚡",
    title: "Act",
    subtitle: "Goals & Action Plans",
    description:
      "Set meaningful climate goals and build structured action plans. ClimateSense AI suggests goals and actions based on your biggest impact areas.",
    features: [
      "Goal creation with targets",
      "AI-suggested action plans",
      "Action item management",
      "Priority recommendations",
    ],
    color: "orange",
    label: "ACTION",
    labelType: "action",
  },
  {
    number: "05",
    icon: "📈",
    title: "Track",
    subtitle: "Monitor & Improve",
    description:
      "Track your progress over time with visual dashboards, goal progress bars, and trend charts. Celebrate achievements and adjust plans as needed.",
    features: [
      "Progress dashboards",
      "Goal completion tracking",
      "Trend charts over time",
      "Achievement system",
    ],
    color: "teal",
    label: "PROGRESS",
    labelType: "progress",
  },
];

const colorMap: Record<string, { accent: string; bg: string; border: string; badgeBg: string; badgeText: string }> = {
  green: {
    accent: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    badgeBg: "bg-blue-500/10 border-blue-500/20",
    badgeText: "text-blue-400",
  },
  blue: {
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    badgeBg: "bg-purple-500/10 border-purple-500/20",
    badgeText: "text-purple-400",
  },
  purple: {
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    badgeBg: "bg-purple-500/10 border-purple-500/20",
    badgeText: "text-purple-400",
  },
  orange: {
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    badgeBg: "bg-orange-500/10 border-orange-500/20",
    badgeText: "text-orange-400",
  },
  teal: {
    accent: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    badgeBg: "bg-teal-500/10 border-teal-500/20",
    badgeText: "text-teal-400",
  },
};

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-[var(--surface)] relative overflow-hidden"
      aria-label="How ClimateSense works"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-sm font-medium mb-6">
            🗺️ The Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            How ClimateSense{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            A structured, data-driven journey from your first measurement to 
            sustained, measurable climate progress.
          </p>

          {/* Flow pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${colorMap[step.color].bg} ${colorMap[step.color].accent}`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--foreground-subtle)]">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const colors = colorMap[step.color];
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.title}
                className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`p-8 rounded-2xl border ${colors.border} bg-[var(--surface-2)] relative overflow-hidden`}>
                    {/* Step number watermark */}
                    <div className={`absolute top-4 right-6 text-7xl font-black ${colors.accent} opacity-10`}>
                      {step.number}
                    </div>

                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl mb-4`}>
                        {step.icon}
                      </div>

                      <div className="flex items-start gap-3 mb-2">
                        <div>
                          <span className={`text-xs font-bold ${colors.accent} uppercase tracking-wider`}>
                            Step {step.number}
                          </span>
                          <h3 className={`text-xl font-bold text-[var(--foreground)]`}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-[var(--foreground-muted)]">{step.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-[var(--foreground-muted)] leading-relaxed mb-6 mt-3">
                        {step.description}
                      </p>

                      <ul className="space-y-2">
                        {step.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2.5 text-sm text-[var(--foreground-muted)]">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace("/10", "")} flex-shrink-0`} 
                                 style={{ background: step.color === "green" ? "#22c55e" : step.color === "blue" ? "#3b82f6" : step.color === "purple" ? "#a855f7" : step.color === "orange" ? "#f97316" : "#14b8a6" }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Visual connector */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center text-3xl shadow-lg`}>
                    {step.icon}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
