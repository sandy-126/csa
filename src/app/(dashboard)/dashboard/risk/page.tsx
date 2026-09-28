"use client";

type RiskData = {
  type: string;
  level: "VERY_LOW" | "LOW" | "MODERATE" | "HIGH" | "VERY_HIGH";
  description: string;
  icon: string;
  color: string;
};

const demoRiskData: RiskData[] = [
  {
    type: "HEAT",
    level: "HIGH",
    description: "Increasing frequency of heatwaves expected. Summer temperatures projected to rise 2-3°C by 2050.",
    icon: "🌡️",
    color: "bg-orange-500",
  },
  {
    type: "FLOOD",
    level: "MODERATE",
    description: "Moderate flood risk due to increased rainfall intensity. Flash flood events may become more common.",
    icon: "🌊",
    color: "bg-blue-500",
  },
  {
    type: "DROUGHT",
    level: "LOW",
    description: "Current drought risk is low, but seasonal dry periods may extend in coming decades.",
    icon: "🏜️",
    color: "bg-yellow-500",
  },
  {
    type: "WILDFIRE",
    level: "VERY_LOW",
    description: "Wildfire risk is minimal in this region. Vegetation and climate conditions are not conducive to fires.",
    icon: "🔥",
    color: "bg-red-500",
  },
  {
    type: "AIR QUALITY",
    level: "MODERATE",
    description: "Air quality varies seasonally. Pollution levels may increase during winter months due to heating emissions.",
    icon: "💨",
    color: "bg-purple-500",
  },
];

const getLevelWidth = (level: RiskData["level"]) => {
  switch (level) {
    case "VERY_LOW":
      return "20%";
    case "LOW":
      return "40%";
    case "MODERATE":
      return "60%";
    case "HIGH":
      return "80%";
    case "VERY_HIGH":
      return "100%";
  }
};

const getLevelColor = (level: RiskData["level"]) => {
  switch (level) {
    case "VERY_LOW":
      return "bg-green-500";
    case "LOW":
      return "bg-lime-500";
    case "MODERATE":
      return "bg-yellow-500";
    case "HIGH":
      return "bg-orange-500";
    case "VERY_HIGH":
      return "bg-red-500";
  }
};

export default function RiskPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">
            Climate Risk Map
          </h1>
          <p className="text-[var(--foreground-muted)]">
            Location-based outlook for heat, flood, drought, wildfire, and other climate risks. <span className="badge-demo ml-1">DEMO DATA</span>
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 relative overflow-hidden min-h-[420px] flex items-center justify-center">
          <div className="absolute inset-0 dot-pattern opacity-60" />
          <div className="relative text-center max-w-md">
            <div className="text-5xl mb-4">🗺️</div>
            <h2 className="font-semibold text-lg text-[var(--foreground)] mb-2">
              Demo Location: San Francisco, CA
            </h2>
            <p className="text-sm text-[var(--foreground-muted)] mb-5">
              Risk data shown is for demonstration purposes. Set your location in profile to see personalized risk assessments.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
              <span className="text-sm">📍</span>
              <span className="text-sm text-[var(--foreground)]">37.7749° N, 122.4194° W</span>
            </div>
          </div>
        </div>

        <aside className="space-y-3">
          {demoRiskData.map((risk) => (
            <div
              key={risk.type}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{risk.icon}</span>
                  <span className="text-sm font-semibold text-[var(--foreground)]">{risk.type}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md text-white bg-[var(--surface-2)]">
                  {risk.level.replace("_", " ")}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[var(--surface-2)] overflow-hidden mb-2">
                <div
                  className={`h-full rounded-full ${getLevelColor(risk.level)}`}
                  style={{ width: getLevelWidth(risk.level) }}
                />
              </div>
              <p className="text-[11px] text-[var(--foreground-muted)] leading-relaxed">
                {risk.description}
              </p>
            </div>
          ))}
        </aside>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h3 className="font-semibold text-[var(--foreground)] mb-4">Risk Level Legend</h3>
        <div className="grid grid-cols-5 gap-4">
          {[
            { level: "VERY LOW", color: "bg-green-500" },
            { level: "LOW", color: "bg-lime-500" },
            { level: "MODERATE", color: "bg-yellow-500" },
            { level: "HIGH", color: "bg-orange-500" },
            { level: "VERY HIGH", color: "bg-red-500" },
          ].map((item) => (
            <div key={item.level} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${item.color}`} />
              <span className="text-xs text-[var(--foreground-muted)]">{item.level}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--foreground-muted)] mt-4">
          Risk assessments are based on historical climate data and IPCC projections. Actual risks may vary based on local conditions.
        </p>
      </div>
    </div>
  );
}
