"use client";

import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Demo data for analytics
const monthlyData = [
  { month: "Jan", transport: 120, energy: 80, diet: 60, shopping: 40, total: 300 },
  { month: "Feb", transport: 110, energy: 75, diet: 65, shopping: 35, total: 285 },
  { month: "Mar", transport: 130, energy: 85, diet: 55, shopping: 50, total: 320 },
  { month: "Apr", transport: 100, energy: 70, diet: 60, shopping: 30, total: 260 },
  { month: "May", transport: 90, energy: 65, diet: 50, shopping: 25, total: 230 },
  { month: "Jun", transport: 85, energy: 60, diet: 45, shopping: 20, total: 210 },
];

const categoryData = [
  { name: "Transport", value: 635, color: "#3b82f6" },
  { name: "Energy", value: 435, color: "#eab308" },
  { name: "Diet", value: 335, color: "#22c55e" },
  { name: "Shopping", value: 200, color: "#a855f7" },
];

const comparisonData = [
  { name: "You", value: 1605 },
  { name: "Average", value: 2000 },
  { name: "Low Impact", value: 1000 },
];


export default function AnalyticsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <header>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-1.5">
          Analytics
        </h1>
        <p className="text-[var(--foreground-muted)]">
          Track your carbon footprint trends and breakdowns. <span className="badge-demo ml-1">DEMO DATA</span>
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--foreground)] mb-4">Monthly Footprint Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--foreground-muted)" />
              <YAxis stroke="var(--foreground-muted)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#22c55e" strokeWidth={2} name="Total CO₂e (kg)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Breakdown */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--foreground)] mb-4">Category Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Category Comparison */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--foreground)] mb-4">Category Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--foreground-muted)" />
              <YAxis stroke="var(--foreground-muted)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="transport" fill="#3b82f6" name="Transport" />
              <Bar dataKey="energy" fill="#eab308" name="Energy" />
              <Bar dataKey="diet" fill="#22c55e" name="Diet" />
              <Bar dataKey="shopping" fill="#a855f7" name="Shopping" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Comparison vs Average */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--foreground)] mb-4">You vs. Average</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={comparisonData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis type="number" stroke="var(--foreground-muted)" />
              <YAxis dataKey="name" type="category" stroke="var(--foreground-muted)" width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="#22c55e" name="Annual CO₂e (kg)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h3 className="font-semibold text-[var(--foreground)] mb-4">Summary Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[var(--surface-2)]">
            <p className="text-xs text-[var(--foreground-muted)] mb-1">Total Annual</p>
            <p className="text-2xl font-bold text-[var(--foreground)]">1,605</p>
            <p className="text-xs text-[var(--foreground-muted)]">kg CO₂e</p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-2)]">
            <p className="text-xs text-[var(--foreground-muted)] mb-1">Monthly Average</p>
            <p className="text-2xl font-bold text-[var(--foreground)]">267.5</p>
            <p className="text-xs text-[var(--foreground-muted)]">kg CO₂e</p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-2)]">
            <p className="text-xs text-[var(--foreground-muted)] mb-1">vs. Average</p>
            <p className="text-2xl font-bold text-green-500">-20%</p>
            <p className="text-xs text-[var(--foreground-muted)]">below average</p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-2)]">
            <p className="text-xs text-[var(--foreground-muted)] mb-1">Top Category</p>
            <p className="text-2xl font-bold text-[var(--foreground)]">Transport</p>
            <p className="text-xs text-[var(--foreground-muted)]">40% of total</p>
          </div>
        </div>
      </div>
    </div>
  );
}
