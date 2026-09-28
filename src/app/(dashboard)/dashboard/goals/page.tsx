"use client";

import { useState, useEffect } from "react";

type Goal = {
  id: string;
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  deadline: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "ON_TRACK" | "AT_RISK" | "COMPLETED";
  icon: string;
};

const defaultGoals: Goal[] = [
  {
    id: "1",
    title: "Cut transport emissions by 20%",
    description: "Use public transit, carpool, or bike more often",
    targetValue: 20,
    currentValue: 5,
    unit: "%",
    deadline: "2024-12-31",
    status: "IN_PROGRESS",
    icon: "🚌",
  },
  {
    id: "2",
    title: "Reduce energy use by 10%",
    description: "Switch to LED bulbs, turn off unused devices",
    targetValue: 10,
    currentValue: 3,
    unit: "%",
    deadline: "2024-12-31",
    status: "IN_PROGRESS",
    icon: "💡",
  },
  {
    id: "3",
    title: "3 meatless days per week",
    description: "Replace meat with plant-based options",
    targetValue: 3,
    currentValue: 1,
    unit: "days/week",
    deadline: "2024-12-31",
    status: "IN_PROGRESS",
    icon: "🥗",
  },
];

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(() => {
    if (typeof window === "undefined") return defaultGoals;
    const saved = localStorage.getItem("climatesense_goals");
    return saved ? JSON.parse(saved) : defaultGoals;
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    targetValue: 0,
    unit: "",
    deadline: "",
    icon: "🎯",
  });

  useEffect(() => {
    localStorage.setItem("climatesense_goals", JSON.stringify(goals));
  }, [goals]);

  const updateProgress = (id: string, value: number) => {
    setGoals((prev) =>
      prev.map((goal) => {
        if (goal.id === id) {
          const updated = { ...goal, currentValue: value };
          if (value >= goal.targetValue) {
            updated.status = "COMPLETED";
          } else if (value > 0) {
            updated.status = "IN_PROGRESS";
          }
          return updated;
        }
        return goal;
      })
    );
  };

  const addGoal = () => {
    if (!newGoal.title || !newGoal.targetValue) return;
    const goal: Goal = {
      id: Date.now().toString(),
      title: newGoal.title,
      description: newGoal.description,
      targetValue: newGoal.targetValue,
      currentValue: 0,
      unit: newGoal.unit,
      deadline: newGoal.deadline,
      status: "NOT_STARTED",
      icon: newGoal.icon,
    };
    setGoals([...goals, goal]);
    setNewGoal({ title: "", description: "", targetValue: 0, unit: "", deadline: "", icon: "🎯" });
    setShowAddForm(false);
  };

  const deleteGoal = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const getStatusColor = (status: Goal["status"]) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-500";
      case "ON_TRACK":
        return "bg-blue-500";
      case "IN_PROGRESS":
        return "bg-yellow-500";
      case "AT_RISK":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const progress = (goal: Goal) => (goal.currentValue / goal.targetValue) * 100;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">
            Goals & Action Plans
          </h1>
          <p className="text-[var(--foreground-muted)]">
            Set targets, break them into small steps, track progress over time. <span className="badge-demo ml-1">DEMO DATA</span>
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold hover:from-green-400 hover:to-teal-400 shadow-md"
        >
          <span>＋</span> {showAddForm ? "Cancel" : "New Goal"}
        </button>
      </header>

      {showAddForm && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Create New Goal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Title</label>
              <input
                type="text"
                value={newGoal.title}
                onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                placeholder="e.g., Reduce car usage"
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Target Value</label>
              <input
                type="number"
                value={newGoal.targetValue}
                onChange={(e) => setNewGoal({ ...newGoal, targetValue: parseFloat(e.target.value) || 0 })}
                placeholder="e.g., 20"
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Unit</label>
              <input
                type="text"
                value={newGoal.unit}
                onChange={(e) => setNewGoal({ ...newGoal, unit: e.target.value })}
                placeholder="e.g., % or kg"
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Deadline</label>
              <input
                type="date"
                value={newGoal.deadline}
                onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-medium text-[var(--foreground)]">Description</label>
              <input
                type="text"
                value={newGoal.description}
                onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                placeholder="Describe your goal"
                className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] hover:bg-[var(--border)]/40 transition"
            >
              Cancel
            </button>
            <button
              onClick={addGoal}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:from-green-400 hover:to-teal-400 transition"
            >
              Create Goal
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <div key={goal.id} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="text-3xl">{goal.icon}</div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(goal.status)}`}>
                  {goal.status.replace("_", " ")}
                </span>
                <button
                  onClick={() => deleteGoal(goal.id)}
                  className="text-[var(--foreground-subtle)] hover:text-red-500 transition"
                >
                  ✕
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-[var(--foreground)] mb-1">{goal.title}</h3>
            <p className="text-sm text-[var(--foreground-muted)] mb-4">{goal.description}</p>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--foreground-muted)]">Progress</span>
                <span className="font-medium text-[var(--foreground)]">
                  {goal.currentValue} / {goal.targetValue} {goal.unit}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[var(--surface-2)] overflow-hidden">
                <div
                  className={`h-full ${getStatusColor(goal.status)} transition-all duration-300`}
                  style={{ width: `${Math.min(progress(goal), 100)}%` }}
                />
              </div>
              <input
                type="range"
                min="0"
                max={goal.targetValue}
                value={goal.currentValue}
                onChange={(e) => updateProgress(goal.id, parseFloat(e.target.value))}
                className="w-full mt-2 accent-green-500"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <p className="text-xs text-[var(--foreground-muted)]">
                Deadline: {new Date(goal.deadline).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {goals.length === 0 && (
        <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <div className="text-4xl mb-3">🎯</div>
          <h2 className="font-semibold text-[var(--foreground)] mb-1">No goals yet</h2>
          <p className="text-sm text-[var(--foreground-muted)]">Create your first goal to start tracking progress</p>
        </div>
      )}
    </div>
  );
}
