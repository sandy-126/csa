"use client";

export default function AiMlSection() {
  return (
    <section
      id="ai-ml"
      className="py-24 bg-[var(--background)] relative overflow-hidden"
      aria-label="AI and Machine Learning capabilities"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
           style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6">
            🤖 Powered by AI & ML
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Intelligent Climate Analysis,{" "}
            <span className="gradient-text">Built In</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            ClimateSense uses large language models and machine learning to turn 
            raw climate data into actionable insights — in plain language you can 
            actually understand and use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* AI Analysis Panel */}
          <div className="p-8 rounded-2xl border border-blue-500/20 bg-[var(--surface)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5"
                 style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">🤖</div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">AI Analysis Engine</h3>
                  <p className="text-xs text-[var(--foreground-muted)]">Google Gemini • Secure Backend Processing</p>
                </div>
                <span className="ml-auto px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                  AI-GENERATED
                </span>
              </div>

              {/* Sample AI Output */}
              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    🤖
                  </div>
                  <div>
                    <p className="text-sm text-[var(--foreground)] leading-relaxed">
                      Based on your submitted data, <strong className="text-blue-400">transportation accounts for 48%</strong> of your estimated footprint. 
                      Your daily commute contributes most significantly. 
                      Switching to public transport twice a week could reduce this by an estimated 15–20%.
                    </p>
                    <p className="text-xs text-[var(--foreground-subtle)] mt-2">
                      This is an AI-generated analysis based on your entered data and publicly available emission factors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "💡", label: "Personalized Recommendations", desc: "Based on your actual data, not generic advice" },
                  { icon: "📋", label: "Plain-Language Explanations", desc: "No jargon — clear, understandable insights" },
                  { icon: "🎯", label: "Suggested Goals & Actions", desc: "AI proposes targets based on your impact areas" },
                  { icon: "🔒", label: "Secure Processing", desc: "AI API calls made server-side only — no key exposure" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 p-3 rounded-lg hover:bg-[var(--surface-2)] transition-colors duration-200">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-[var(--foreground)]">{item.label}</div>
                      <div className="text-xs text-[var(--foreground-muted)]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ML Prediction Panel */}
          <div className="p-8 rounded-2xl border border-purple-500/20 bg-[var(--surface)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5"
                 style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-xl">🔮</div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">ML Prediction Engine</h3>
                  <p className="text-xs text-[var(--foreground-muted)]">Python • scikit-learn • FastAPI Service</p>
                </div>
                <span className="ml-auto px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
                  ML ESTIMATE
                </span>
              </div>

              {/* Mock prediction chart */}
              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] mb-4">
                <div className="text-xs text-[var(--foreground-subtle)] mb-3">Estimated Footprint Trend (tCO₂e)</div>
                <div className="flex items-end gap-2 h-20 mb-2">
                  {[
                    { month: "Jan", val: 2.1, isPrediction: false },
                    { month: "Feb", val: 2.3, isPrediction: false },
                    { month: "Mar", val: 2.5, isPrediction: false },
                    { month: "Apr", val: 2.7, isPrediction: false },
                    { month: "May", val: 2.9, isPrediction: true },
                    { month: "Jun", val: 3.0, isPrediction: true },
                  ].map((bar) => (
                    <div key={bar.month} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t-sm transition-all duration-300 ${
                          bar.isPrediction
                            ? "bg-purple-500/40 border-t-2 border-dashed border-purple-400"
                            : "bg-green-500/70"
                        }`}
                        style={{ height: `${(bar.val / 3.5) * 80}px` }}
                      />
                      <div className="text-[9px] text-[var(--foreground-subtle)]">{bar.month}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-green-500/70 inline-block" />
                    <span className="text-[var(--foreground-muted)]">Historical</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-purple-500/40 border border-dashed border-purple-400 inline-block" />
                    <span className="text-purple-400 font-medium">Predicted</span>
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center gap-2">
                  <span className="badge-estimate">ML ESTIMATE</span>
                  <span className="text-[10px] text-[var(--foreground-subtle)]">Sample data — not real values</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: "📊", label: "Regression-Based Forecasting", desc: "Trained on your personal historical data" },
                  { icon: "📉", label: "Trend Analysis", desc: "Identifies if your footprint is improving or worsening" },
                  { icon: "🔬", label: "Model Transparency", desc: "Shows model version, accuracy metrics" },
                  { icon: "⚠️", label: "Clearly Labeled Estimates", desc: "Predictions are estimates, never presented as facts" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 p-3 rounded-lg hover:bg-[var(--surface-2)] transition-colors duration-200">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-[var(--foreground)]">{item.label}</div>
                      <div className="text-xs text-[var(--foreground-muted)]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Preview */}
        <div className="p-8 rounded-2xl border border-teal-500/20 bg-[var(--surface)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-xl">💬</div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">ClimateSense AI Assistant</h3>
                  <p className="text-xs text-[var(--foreground-muted)]">Ask questions about your climate impact in natural language</p>
                </div>
              </div>
              <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-6">
                Interact with ClimateSense AI as you would with a knowledgeable 
                climate advisor. Ask about your data, get explanations, request 
                action plan suggestions, or learn about climate concepts.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Why did my footprint increase?",
                  "What's my biggest contributor?",
                  "Suggest a 3-month action plan",
                  "Explain my climate report",
                ].map((q) => (
                  <span
                    key={q}
                    className="px-3 py-1.5 rounded-full border border-[var(--border)] text-xs text-[var(--foreground-muted)] bg-[var(--surface-2)] hover:border-teal-500/30 hover:text-teal-400 transition-colors duration-200 cursor-pointer"
                  >
                    &ldquo;{q}&rdquo;
                  </span>
                ))}
              </div>
            </div>

            {/* Mock Chat */}
            <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] space-y-3">
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[var(--border)] flex items-center justify-center text-sm flex-shrink-0">👤</div>
                <div className="bg-[var(--surface)] rounded-xl rounded-tl-none px-4 py-2.5 text-sm text-[var(--foreground)] border border-[var(--border)] max-w-xs">
                  What is my biggest carbon contributor?
                </div>
              </div>
              <div className="flex gap-2.5 flex-row-reverse">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-sm flex-shrink-0">🤖</div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl rounded-tr-none px-4 py-2.5 text-sm text-[var(--foreground)] max-w-xs">
                  Based on your recent assessment, <strong>transportation accounts for ~48%</strong> of your estimated footprint. Your personal vehicle usage is the primary factor.
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[var(--border)] flex items-center justify-center text-sm flex-shrink-0">👤</div>
                <div className="bg-[var(--surface)] rounded-xl rounded-tl-none px-4 py-2.5 text-sm text-[var(--foreground)] border border-[var(--border)] max-w-xs">
                  How can I reduce it?
                </div>
              </div>
              <div className="flex gap-2.5 flex-row-reverse">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-sm flex-shrink-0">🤖</div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl rounded-tr-none px-4 py-2.5 text-sm text-[var(--foreground)] max-w-xs">
                  Consider carpooling, using public transport 2–3 days/week, or switching to an EV. I can create an action plan if you&apos;d like! 🌱
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <div className="flex-1 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 flex items-center">
                  <span className="text-xs text-[var(--foreground-subtle)]">Ask ClimateSense AI...</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-[var(--border)]">
                <span className="badge-demo">DEMO</span>
                <span className="text-[10px] text-[var(--foreground-subtle)]">Sample conversation — AI responses require API key</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
