"use client";

import { useState } from "react";

type Recommendation = {
  id: string;
  category: string;
  title: string;
  description: string;
  impact: "HIGH" | "MEDIUM" | "LOW";
  effort: "EASY" | "MEDIUM" | "HARD";
  co2eSaving: number;
  icon: string;
};

const recommendations: Recommendation[] = [
  {
    id: "1",
    category: "Transport",
    title: "Switch to public transit for commuting",
    description: "Replace 3 car trips per week with bus or train. This can reduce your transport emissions by up to 30%.",
    impact: "HIGH",
    effort: "MEDIUM",
    co2eSaving: 200,
    icon: "🚌",
  },
  {
    id: "2",
    category: "Energy",
    title: "Switch to LED lighting",
    description: "Replace all incandescent bulbs with LEDs. Uses 75% less energy and lasts 25x longer.",
    impact: "MEDIUM",
    effort: "EASY",
    co2eSaving: 50,
    icon: "💡",
  },
  {
    id: "3",
    category: "Diet",
    title: "Add 2 meatless days per week",
    description: "Replace meat with plant-based proteins twice a week. Reduces diet emissions significantly.",
    impact: "HIGH",
    effort: "EASY",
    co2eSaving: 150,
    icon: "🥗",
  },
  {
    id: "4",
    category: "Transport",
    title: "Carpool with colleagues",
    description: "Share rides to work with coworkers. Halves your commute emissions on carpool days.",
    impact: "MEDIUM",
    effort: "EASY",
    co2eSaving: 100,
    icon: "🚗",
  },
  {
    id: "5",
    category: "Energy",
    title: "Lower thermostat by 2°C",
    description: "Reduce heating by 2°C in winter. Saves energy without significant comfort impact.",
    impact: "MEDIUM",
    effort: "EASY",
    co2eSaving: 80,
    icon: "🌡️",
  },
  {
    id: "6",
    category: "Shopping",
    title: "Buy second-hand clothing",
    description: "Choose thrift stores or online resale platforms for clothes. Extends product life and reduces manufacturing emissions.",
    impact: "MEDIUM",
    effort: "EASY",
    co2eSaving: 30,
    icon: "👕",
  },
  {
    id: "7",
    category: "Transport",
    title: "Bike for short trips",
    description: "Use a bicycle for trips under 5km. Zero emissions and good exercise.",
    impact: "HIGH",
    effort: "MEDIUM",
    co2eSaving: 120,
    icon: "🚴",
  },
  {
    id: "8",
    category: "Energy",
    title: "Unplug unused electronics",
    description: "Use power strips to completely cut power to devices when not in use. Eliminates phantom load.",
    impact: "LOW",
    effort: "EASY",
    co2eSaving: 20,
    icon: "🔌",
  },
];

export default function RecommendationsPage() {
  const [filter, setFilter] = useState<"ALL" | "HIGH" | "MEDIUM" | "LOW">("ALL");
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggleComplete = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredRecommendations =
    filter === "ALL"
      ? recommendations
      : recommendations.filter((r) => r.impact === filter);

  const getImpactColor = (impact: Recommendation["impact"]) => {
    switch (impact) {
      case "HIGH":
        return "bg-red-500/15 text-red-400 border-red-500/20";
      case "MEDIUM":
        return "bg-yellow-500/15 text-yellow-400 border-yellow-500/20";
      case "LOW":
        return "bg-green-500/15 text-green-400 border-green-500/20";
    }
  };

  const getEffortColor = (effort: Recommendation["effort"]) => {
    switch (effort) {
      case "EASY":
        return "bg-green-500";
      case "MEDIUM":
        return "bg-yellow-500";
      case "HARD":
        return "bg-red-500";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">
            Recommendations
          </h1>
          <p className="text-[var(--foreground-muted)]">
            Personalized action ideas to reduce your carbon footprint. <span className="badge-demo ml-1">RULE-BASED</span>
          </p>
        </div>
      </header>

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        {(["ALL", "HIGH", "MEDIUM", "LOW"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              filter === f
                ? "bg-gradient-to-r from-green-500 to-teal-500 text-white"
                : "bg-[var(--surface-2)] text-[var(--foreground-muted)] hover:bg-[var(--border)]/40"
            }`}
          >
            {f === "ALL" ? "All" : `${f} Impact`}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-center">
          <p className="text-2xl font-bold text-[var(--foreground)]">{recommendations.length}</p>
          <p className="text-xs text-[var(--foreground-muted)]">Total Actions</p>
        </div>
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-center">
          <p className="text-2xl font-bold text-green-500">
            {recommendations.reduce((sum, r) => sum + r.co2eSaving, 0)}
          </p>
          <p className="text-xs text-[var(--foreground-muted)]">kg CO₂e Potential</p>
        </div>
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-center">
          <p className="text-2xl font-bold text-[var(--foreground)]">{completed.size}</p>
          <p className="text-xs text-[var(--foreground-muted)]">Completed</p>
        </div>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {filteredRecommendations.map((rec) => (
          <div
            key={rec.id}
            className={`rounded-2xl border p-5 transition ${
              completed.has(rec.id)
                ? "border-green-500/30 bg-green-500/5 opacity-60"
                : "border-[var(--border)] bg-[var(--surface)]"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{rec.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">{rec.title}</h3>
                    <p className="text-xs text-[var(--foreground-muted)]">{rec.category}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getImpactColor(
                        rec.impact
                      )}`}
                    >
                      {rec.impact} IMPACT
                    </span>
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white ${getEffortColor(
                        rec.effort
                      )}`}
                    >
                      {rec.effort}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--foreground-muted)] mb-3">{rec.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-green-500 font-medium">
                    Saves ~{rec.co2eSaving} kg CO₂e/year
                  </p>
                  <button
                    onClick={() => toggleComplete(rec.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                      completed.has(rec.id)
                        ? "bg-green-500 text-white"
                        : "bg-[var(--surface-2)] text-[var(--foreground)] hover:bg-[var(--border)]/40"
                    }`}
                  >
                    {completed.has(rec.id) ? "✓ Completed" : "Mark Complete"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
