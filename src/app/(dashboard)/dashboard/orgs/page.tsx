"use client";

type OrgMember = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "MEMBER";
  avatar: string;
};

type Organization = {
  id: string;
  name: string;
  description: string;
  industry: string;
  members: OrgMember[];
  totalFootprint: number;
  goals: number;
};

const demoOrg: Organization = {
  id: "1",
  name: "TechCorp Sustainability",
  description: "Corporate sustainability initiative for reducing carbon footprint across all departments",
  industry: "Technology",
  members: [
    { id: "1", name: "Alex Johnson", email: "alex@techcorp.com", role: "ADMIN", avatar: "👤" },
    { id: "2", name: "Sarah Chen", email: "sarah@techcorp.com", role: "MEMBER", avatar: "👩" },
    { id: "3", name: "Mike Brown", email: "mike@techcorp.com", role: "MEMBER", avatar: "👨" },
    { id: "4", name: "Emma Wilson", email: "emma@techcorp.com", role: "MEMBER", avatar: "👩" },
  ],
  totalFootprint: 12500,
  goals: 5,
};

export default function OrganizationsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">Organizations</h1>
          <p className="text-[var(--foreground-muted)]">
            Team dashboards, member management, and aggregate analytics. <span className="badge-demo ml-1">DEMO DATA</span>
          </p>
        </div>
      </header>

      {/* Organization Overview */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border border-blue-500/20 flex items-center justify-center text-3xl">
              🏢
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)]">{demoOrg.name}</h2>
              <p className="text-sm text-[var(--foreground-muted)]">{demoOrg.industry}</p>
              <p className="text-xs text-[var(--foreground-subtle)] mt-1">{demoOrg.description}</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-md bg-green-500/15 text-green-400 text-xs font-semibold border border-green-500/20">
            ACTIVE
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[var(--surface-2)]">
            <p className="text-xs text-[var(--foreground-muted)] mb-1">Members</p>
            <p className="text-2xl font-bold text-[var(--foreground)]">{demoOrg.members.length}</p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-2)]">
            <p className="text-xs text-[var(--foreground-muted)] mb-1">Total Footprint</p>
            <p className="text-2xl font-bold text-[var(--foreground)]">{demoOrg.totalFootprint.toLocaleString()}</p>
            <p className="text-xs text-[var(--foreground-subtle)]">kg CO₂e/year</p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-2)]">
            <p className="text-xs text-[var(--foreground-muted)] mb-1">Active Goals</p>
            <p className="text-2xl font-bold text-[var(--foreground)]">{demoOrg.goals}</p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-2)]">
            <p className="text-xs text-[var(--foreground-muted)] mb-1">Avg per Member</p>
            <p className="text-2xl font-bold text-[var(--foreground)]">
              {(demoOrg.totalFootprint / demoOrg.members.length).toFixed(0)}
            </p>
            <p className="text-xs text-[var(--foreground-subtle)]">kg CO₂e/year</p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h3 className="font-semibold text-[var(--foreground)] mb-4">Team Members</h3>
        <div className="space-y-3">
          {demoOrg.members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/15 to-teal-500/15 border border-green-500/20 flex items-center justify-center text-xl">
                  {member.avatar}
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)]">{member.name}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">{member.email}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                  member.role === "ADMIN"
                    ? "bg-purple-500/15 text-purple-400 border border-purple-500/20"
                    : "bg-gray-500/15 text-gray-400 border border-gray-500/20"
                }`}
              >
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Organization Goals */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h3 className="font-semibold text-[var(--foreground)] mb-4">Organization Goals</h3>
        <div className="space-y-4">
          {[
            { title: "Reduce emissions by 30% by 2025", progress: 65, icon: "🎯" },
            { title: "100% renewable energy by 2026", progress: 40, icon: "⚡" },
            { title: "Zero waste to landfill by 2027", progress: 25, icon: "♻️" },
            { title: "Carbon neutral operations by 2030", progress: 15, icon: "🌱" },
            { title: "Sustainable supply chain by 2025", progress: 50, icon: "📦" },
          ].map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{goal.icon}</span>
                  <span className="text-sm font-medium text-[var(--foreground)]">{goal.title}</span>
                </div>
                <span className="text-sm text-[var(--foreground-muted)]">{goal.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--surface-2)] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
