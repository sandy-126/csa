"use client";

import { useState } from "react";
import { emissionFactors, getEmissionFactorsByCategory, type EmissionFactor } from "@/data/emissionFactors";

type CalculatorData = {
  transport: Record<string, number>;
  energy: Record<string, number>;
  diet: Record<string, number>;
  shopping: Record<string, number>;
};

type Step = 1 | 2 | 3 | 4;

export default function CalculatorPage() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<CalculatorData>({
    transport: {},
    energy: {},
    diet: {},
    shopping: {},
  });

  const transportFactors = getEmissionFactorsByCategory("TRANSPORT");
  const energyFactors = getEmissionFactorsByCategory("ENERGY");
  const dietFactors = getEmissionFactorsByCategory("DIET");
  const shoppingFactors = getEmissionFactorsByCategory("SHOPPING");

  const updateData = (category: keyof CalculatorData, factorId: string, value: number) => {
    setData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [factorId]: value,
      },
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    const breakdown = { transport: 0, energy: 0, diet: 0, shopping: 0 };

    Object.entries(data.transport).forEach(([id, value]) => {
      const factor = getEmissionFactor(id);
      if (factor) {
        const emissions = value * factor.co2ePerUnit;
        total += emissions;
        breakdown.transport += emissions;
      }
    });

    Object.entries(data.energy).forEach(([id, value]) => {
      const factor = getEmissionFactor(id);
      if (factor) {
        const emissions = value * factor.co2ePerUnit;
        total += emissions;
        breakdown.energy += emissions;
      }
    });

    Object.entries(data.diet).forEach(([id, value]) => {
      const factor = getEmissionFactor(id);
      if (factor) {
        const emissions = value * factor.co2ePerUnit;
        total += emissions;
        breakdown.diet += emissions;
      }
    });

    Object.entries(data.shopping).forEach(([id, value]) => {
      const factor = getEmissionFactor(id);
      if (factor) {
        const emissions = value * factor.co2ePerUnit;
        total += emissions;
        breakdown.shopping += emissions;
      }
    });

    return { total, breakdown };
  };

  const results = calculateTotal();

  const steps = [
    { n: 1, label: "Transport" },
    { n: 2, label: "Energy" },
    { n: 3, label: "Lifestyle" },
    { n: 4, label: "Summary" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-green-500 mb-2">
          Measure · Calculator
        </p>
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
          Climate Impact Calculator
        </h1>
        <p className="text-[var(--foreground-muted)] max-w-2xl">
          Answer a few questions about your lifestyle and we&apos;ll estimate your annual climate
          footprint. Results are <span className="badge-estimate ml-0.5">ESTIMATES</span> using
          public emission factors.
        </p>
      </header>

      {/* Steps */}
      <ol className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {steps.map((s) => (
          <li key={s.n} className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 ${
                step === s.n
                  ? "bg-gradient-to-br from-green-500 to-teal-500 text-white border-transparent shadow-lg shadow-green-500/20"
                  : step > s.n
                  ? "bg-green-500 text-white border-transparent"
                  : "bg-[var(--surface-2)] text-[var(--foreground-subtle)] border-[var(--border)]"
              }`}
            >
              {step > s.n ? "✓" : s.n}
            </div>
            <span
              className={`text-sm font-medium ${
                step === s.n ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"
              }`}
            >
              {s.label}
            </span>
          </li>
        ))}
      </ol>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
        {step === 1 && (
          <TransportStep
            factors={transportFactors}
            data={data.transport}
            onChange={(id, value) => updateData("transport", id, value)}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <EnergyStep
            factors={energyFactors}
            data={data.energy}
            onChange={(id, value) => updateData("energy", id, value)}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <LifestyleStep
            dietFactors={dietFactors}
            shoppingFactors={shoppingFactors}
            dietData={data.diet}
            shoppingData={data.shopping}
            onDietChange={(id, value) => updateData("diet", id, value)}
            onShoppingChange={(id, value) => updateData("shopping", id, value)}
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}

        {step === 4 && (
          <SummaryStep
            results={results}
            onBack={() => setStep(3)}
            onReset={() => {
              setData({ transport: {}, energy: {}, diet: {}, shopping: {} });
              setStep(1);
            }}
          />
        )}
      </div>
    </div>
  );
}

function TransportStep({
  factors,
  data,
  onChange,
  onNext,
}: {
  factors: EmissionFactor[];
  data: Record<string, number>;
  onChange: (id: string, value: number) => void;
  onNext: () => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Transportation</h2>
      <p className="text-sm text-[var(--foreground-muted)] mb-6">
        Enter your weekly or monthly travel distances. Leave fields blank if not applicable.
      </p>

      <div className="space-y-6">
        {factors.map((factor) => (
          <div key={factor.id} className="space-y-2">
            <label className="block text-sm font-medium text-[var(--foreground)]">
              {factor.name}
              {factor.description && (
                <span className="text-xs text-[var(--foreground-muted)] ml-2">({factor.description})</span>
              )}
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                min="0"
                step="0.1"
                value={data[factor.id] || ""}
                onChange={(e) => onChange(factor.id, parseFloat(e.target.value) || 0)}
                placeholder="0"
                className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
              />
              <span className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground-muted)] flex items-center">
                {factor.unit}/week
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
        >
          Next: Energy →
        </button>
      </div>
    </div>
  );
}

function EnergyStep({
  factors,
  data,
  onChange,
  onNext,
  onBack,
}: {
  factors: EmissionFactor[];
  data: Record<string, number>;
  onChange: (id: string, value: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Energy Use</h2>
      <p className="text-sm text-[var(--foreground-muted)] mb-6">
        Enter your monthly energy consumption. Leave fields blank if not applicable.
      </p>

      <div className="space-y-6">
        {factors.map((factor) => (
          <div key={factor.id} className="space-y-2">
            <label className="block text-sm font-medium text-[var(--foreground)]">
              {factor.name}
              {factor.description && (
                <span className="text-xs text-[var(--foreground-muted)] ml-2">({factor.description})</span>
              )}
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                min="0"
                step="0.1"
                value={data[factor.id] || ""}
                onChange={(e) => onChange(factor.id, parseFloat(e.target.value) || 0)}
                placeholder="0"
                className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
              />
              <span className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground-muted)] flex items-center">
                {factor.unit}/month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-sm font-semibold border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] rounded-lg hover:bg-[var(--border)]/40 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
        >
          Next: Lifestyle →
        </button>
      </div>
    </div>
  );
}

function LifestyleStep({
  dietFactors,
  shoppingFactors,
  dietData,
  shoppingData,
  onDietChange,
  onShoppingChange,
  onNext,
  onBack,
}: {
  dietFactors: EmissionFactor[];
  shoppingFactors: EmissionFactor[];
  dietData: Record<string, number>;
  shoppingData: Record<string, number>;
  onDietChange: (id: string, value: number) => void;
  onShoppingChange: (id: string, value: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Lifestyle</h2>
      <p className="text-sm text-[var(--foreground-muted)]">
        Based on your inputs, here&apos;s your estimated carbon footprint.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Diet (weekly)</h3>
          <div className="space-y-4">
            {dietFactors.map((factor) => (
              <div key={factor.id} className="space-y-2">
                <label className="block text-sm font-medium text-[var(--foreground)]">
                  {factor.name}
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={dietData[factor.id] || ""}
                    onChange={(e) => onDietChange(factor.id, parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
                  />
                  <span className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground-muted)] flex items-center">
                    {factor.unit}/week
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Shopping (monthly)</h3>
          <div className="space-y-4">
            {shoppingFactors.map((factor) => (
              <div key={factor.id} className="space-y-2">
                <label className="block text-sm font-medium text-[var(--foreground)]">
                  {factor.name}
                  {factor.description && (
                    <span className="text-xs text-[var(--foreground-muted)] ml-2">({factor.description})</span>
                  )}
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={shoppingData[factor.id] || ""}
                    onChange={(e) => onShoppingChange(factor.id, parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 outline-none transition-colors"
                  />
                  <span className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground-muted)] flex items-center">
                    {factor.unit}/month
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-sm font-semibold border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] rounded-lg hover:bg-[var(--border)]/40 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
        >
          View Results →
        </button>
      </div>
    </div>
  );
}

function SummaryStep({
  results,
  onBack,
  onReset,
}: {
  results: { total: number; breakdown: { transport: number; energy: number; diet: number; shopping: number } };
  onBack: () => void;
  onReset: () => void;
}) {
  const categories = [
    { name: "Transport", value: results.breakdown.transport, color: "bg-blue-500", icon: "🚗" },
    { name: "Energy", value: results.breakdown.energy, color: "bg-yellow-500", icon: "⚡" },
    { name: "Diet", value: results.breakdown.diet, color: "bg-green-500", icon: "🥗" },
    { name: "Shopping", value: results.breakdown.shopping, color: "bg-purple-500", icon: "🛍️" },
  ];

  const maxValue = Math.max(...categories.map((c) => c.value), 1);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Your Carbon Footprint</h2>

      <div className="text-center mb-8 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20">
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Annual CO₂e Emissions</p>
        <p className="text-5xl font-bold text-[var(--foreground)] mb-2">
          {results.total.toFixed(1)}
        </p>
        <p className="text-lg text-[var(--foreground-muted)]">kg CO₂e/year</p>
        <span className="inline-block mt-3 badge-estimate">ESTIMATE</span>
      </div>

      <div className="space-y-4 mb-8">
        {categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-[var(--foreground)] flex items-center gap-2">
                <span>{category.icon}</span>
                {category.name}
              </span>
              <span className="text-[var(--foreground-muted)]">{category.value.toFixed(1)} kg</span>
            </div>
            <div className="h-3 rounded-full bg-[var(--surface-2)] overflow-hidden">
              <div
                className={`h-full ${category.color} transition-all duration-500`}
                style={{ width: `${(category.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-sm text-[var(--foreground-muted)] mb-8">
        <p className="font-medium text-[var(--foreground)] mb-2">💡 Tips to reduce your footprint:</p>
        <ul className="space-y-1 list-disc list-inside">
          {results.breakdown.transport > 500 && <li>Consider public transit or carpooling</li>}
          {results.breakdown.energy > 200 && <li>Switch to renewable energy or reduce consumption</li>}
          {results.breakdown.diet > 200 && <li>Try more plant-based meals</li>}
          {results.breakdown.shopping > 100 && <li>Buy second-hand or choose durable products</li>}
          {results.total < 500 && <li>Great job! You&apos;re below average footprint</li>}
        </ul>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 text-sm font-semibold border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] rounded-lg hover:bg-[var(--border)]/40 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onReset}
          className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
        >
          Calculate Again
        </button>
      </div>
    </div>
  );
}

function getEmissionFactor(id: string): EmissionFactor | undefined {
  return emissionFactors.find((factor) => factor.id === id);
}
