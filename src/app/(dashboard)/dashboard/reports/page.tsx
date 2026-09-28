"use client";

import { useState } from "react";

type ReportType = "PERSONAL" | "ORGANIZATION" | "SDG";

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<ReportType | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = (type: ReportType) => {
    setSelectedReport(type);
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 1500);
  };

  const reportTemplates = [
    {
      type: "PERSONAL" as ReportType,
      icon: "🧑",
      label: "Personal Monthly",
      description: "Your carbon footprint, goals progress, and recommendations",
      formats: ["HTML", "PDF"],
    },
    {
      type: "ORGANIZATION" as ReportType,
      icon: "🏢",
      label: "Organization Quarterly",
      description: "Team analytics, aggregate footprint, and org goals",
      formats: ["HTML", "CSV"],
    },
    {
      type: "SDG" as ReportType,
      icon: "🌐",
      label: "SDG 13 Impact",
      description: "UN Sustainable Development Goal 13 alignment report",
      formats: ["HTML", "JSON"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">Reports</h1>
          <p className="text-[var(--foreground-muted)]">
            Generate and download climate reports with your data. <span className="badge-demo ml-1">DEMO DATA</span>
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {reportTemplates.map((template) => (
          <div
            key={template.type}
            className={`p-5 rounded-2xl border cursor-pointer transition ${
              selectedReport === template.type
                ? "border-green-500/50 bg-green-500/5"
                : "border-[var(--border)] bg-[var(--surface)] hover:border-green-500/40"
            }`}
            onClick={() => generateReport(template.type)}
          >
            <div className="text-3xl mb-3">{template.icon}</div>
            <div className="font-semibold text-[var(--foreground)] mb-0.5">{template.label}</div>
            <div className="text-xs text-[var(--foreground-subtle)] mb-2">{template.description}</div>
            <div className="flex gap-1 flex-wrap">
              {template.formats.map((format) => (
                <span
                  key={format}
                  className="px-2 py-0.5 rounded-md bg-[var(--surface-2)] text-[10px] font-semibold text-[var(--foreground-muted)] border border-[var(--border)]"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isGenerating && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <div className="text-4xl mb-4 animate-pulse">⏳</div>
          <p className="text-sm text-[var(--foreground-muted)]">Generating report...</p>
        </div>
      )}

      {selectedReport && !isGenerating && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[var(--foreground)]">Report Preview</h3>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold hover:from-green-400 hover:to-teal-400">
              Download HTML
            </button>
          </div>

          <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface-2)] space-y-4">
            <div className="text-center border-b border-[var(--border)] pb-4">
              <h2 className="text-xl font-bold text-[var(--foreground)]">ClimateSense Report</h2>
              <p className="text-sm text-[var(--foreground-muted)]">Generated on {new Date().toLocaleDateString()}</p>
            </div>

            {selectedReport === "PERSONAL" && (
              <>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Carbon Footprint Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[var(--foreground-muted)]">Annual Total</p>
                      <p className="font-bold text-[var(--foreground)]">1,605 kg CO₂e</p>
                    </div>
                    <div>
                      <p className="text-[var(--foreground-muted)]">Monthly Average</p>
                      <p className="font-bold text-[var(--foreground)]">267.5 kg CO₂e</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Category Breakdown</h4>
                  <ul className="text-sm space-y-1 text-[var(--foreground-muted)]">
                    <li>Transport: 635 kg (40%)</li>
                    <li>Energy: 435 kg (27%)</li>
                    <li>Diet: 335 kg (21%)</li>
                    <li>Shopping: 200 kg (12%)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Goals Progress</h4>
                  <p className="text-sm text-[var(--foreground-muted)]">3 active goals, 1 completed this month</p>
                </div>
              </>
            )}

            {selectedReport === "ORGANIZATION" && (
              <>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Organization: TechCorp Sustainability</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[var(--foreground-muted)]">Total Members</p>
                      <p className="font-bold text-[var(--foreground)]">4</p>
                    </div>
                    <div>
                      <p className="text-[var(--foreground-muted)]">Total Footprint</p>
                      <p className="font-bold text-[var(--foreground)]">12,500 kg CO₂e</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Organization Goals</h4>
                  <ul className="text-sm space-y-1 text-[var(--foreground-muted)]">
                    <li>Reduce emissions by 30% by 2025: 65%</li>
                    <li>100% renewable energy by 2026: 40%</li>
                    <li>Zero waste to landfill by 2027: 25%</li>
                  </ul>
                </div>
              </>
            )}

            {selectedReport === "SDG" && (
              <>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">SDG 13: Climate Action</h4>
                  <p className="text-sm text-[var(--foreground-muted)] mb-2">
                    Your actions contribute to the United Nations Sustainable Development Goal 13: Take urgent action to combat climate change and its impacts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Contributions</h4>
                  <ul className="text-sm space-y-1 text-[var(--foreground-muted)]">
                    <li>✓ Measured and tracking carbon footprint</li>
                    <li>✓ Set reduction targets and goals</li>
                    <li>✓ Implemented energy-saving measures</li>
                    <li>✓ Promoting sustainable transportation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Impact Score</h4>
                  <p className="text-2xl font-bold text-green-500">B+</p>
                  <p className="text-xs text-[var(--foreground-muted)]">Strong contribution to SDG 13</p>
                </div>
              </>
            )}

            <div className="pt-4 border-t border-[var(--border)] text-xs text-[var(--foreground-subtle]">
              <p>This report was generated by ClimateSense. Data is based on user inputs and static emission factors.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
