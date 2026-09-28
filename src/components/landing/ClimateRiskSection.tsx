"use client";

const riskTypes = [
  { icon: "🌡️", label: "Heat Risk", level: "High", color: "orange", value: 74 },
  { icon: "🌊", label: "Flood Risk", level: "Moderate", color: "blue", value: 52 },
  { icon: "🏜️", label: "Drought Risk", level: "Low", color: "yellow", value: 28 },
  { icon: "🌊", label: "Coastal Risk", level: "Moderate", color: "teal", value: 45 },
];

const levelColors: Record<string, { bg: string; text: string; bar: string }> = {
  "Very High": { bg: "bg-red-500/10", text: "text-red-400", bar: "bg-red-500" },
  High: { bg: "bg-orange-500/10", text: "text-orange-400", bar: "bg-orange-500" },
  Moderate: { bg: "bg-yellow-500/10", text: "text-yellow-400", bar: "bg-yellow-500" },
  Low: { bg: "bg-green-500/10", text: "text-green-400", bar: "bg-green-500" },
};

export default function ClimateRiskSection() {
  return (
    <section
      id="climate-risk"
      className="py-24 bg-[var(--surface)] relative overflow-hidden"
      aria-label="Climate risk information"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-sm font-medium mb-6">
              🗺️ Climate Risk Map
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-6">
              Know Your{" "}
              <span className="gradient-text">Climate Risks</span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-6">
              Our interactive climate risk map shows location-based hazard information 
              including heat stress, flood risk, drought likelihood, and coastal 
              vulnerability — so you can prepare and plan ahead.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "📍",
                  title: "Location-Based Risk",
                  desc: "Select any location to view climate risk indicators specific to that area.",
                },
                {
                  icon: "📊",
                  title: "Multiple Hazard Types",
                  desc: "Heat, flood, drought, coastal, and other climate-related risk indicators.",
                },
                {
                  icon: "📋",
                  title: "Data Sources Visible",
                  desc: "Every data point shows its source, date, version, and description.",
                },
                {
                  icon: "✅",
                  title: "Preparedness Guidance",
                  desc: "AI-suggested preparedness actions specific to the identified risks.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Legend */}
            <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
              <div className="text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider mb-3">
                Risk Level Legend
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { color: "bg-green-500", label: "Low" },
                  { color: "bg-yellow-500", label: "Moderate" },
                  { color: "bg-orange-500", label: "High" },
                  { color: "bg-red-500", label: "Very High" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-sm ${item.color}`} />
                    <span className="text-xs text-[var(--foreground-muted)]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Mock Map & Risk Panel */}
          <div className="space-y-4">
            {/* Mock Map */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-2)]">
              {/* Fake map background */}
              <div className="absolute inset-0 grid-pattern opacity-60" />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.05) 0%, rgba(20,184,166,0.05) 100%)"
              }} />
              
              {/* Fake map grid lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[var(--foreground-subtle)] text-sm font-medium flex flex-col items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-500/50">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Interactive Leaflet Map</span>
                  <span className="text-xs text-[var(--foreground-subtle)]">OpenStreetMap • Real-time risk data</span>
                </div>
              </div>

              {/* Fake markers */}
              <div className="absolute top-8 left-1/4 w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow-lg pulse-green" />
              <div className="absolute top-16 right-1/3 w-4 h-4 rounded-full bg-yellow-500 border-2 border-white shadow-lg" />
              <div className="absolute bottom-12 left-1/2 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg" />
              <div className="absolute bottom-8 right-1/4 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-lg" />

              <div className="absolute bottom-3 left-3">
                <span className="badge-demo">DEMO MAP</span>
              </div>
            </div>

            {/* Risk Indicators */}
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--foreground)]">Sample Location: Mumbai, India</h4>
                  <p className="text-xs text-[var(--foreground-muted)]">Climate Risk Assessment</p>
                </div>
                <span className="badge-demo">DEMO DATA</span>
              </div>

              <div className="space-y-3">
                {riskTypes.map((risk) => {
                  const colors = levelColors[risk.level] || levelColors.Low;
                  return (
                    <div key={risk.label} className="flex items-center gap-3">
                      <span className="text-base flex-shrink-0">{risk.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-[var(--foreground)]">{risk.label}</span>
                          <span className={`text-xs font-semibold ${colors.text}`}>{risk.level}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
                          <div
                            className={`h-full ${colors.bar} rounded-full`}
                            style={{ width: `${risk.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="text-xs text-[var(--foreground-subtle)] flex items-start gap-1.5">
                  <span>ℹ️</span>
                  <span>
                    This is <strong>DEMO DATA</strong> for illustration purposes only. 
                    Actual climate risk data will be sourced from verified public datasets 
                    with full source attribution.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
