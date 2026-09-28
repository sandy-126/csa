"use client";

type User = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ORG_ADMIN" | "SYSTEM_ADMIN";
  status: "ACTIVE" | "INACTIVE" | "PENDING";
  joinedDate: string;
};

type SystemStats = {
  totalUsers: number;
  activeUsers: number;
  totalOrganizations: number;
  totalAssessments: number;
  avgFootprint: number;
};

const demoUsers: User[] = [
  { id: "1", name: "Alex Johnson", email: "alex@example.com", role: "USER", status: "ACTIVE", joinedDate: "2024-01-15" },
  { id: "2", name: "Sarah Chen", email: "sarah@example.com", role: "ORG_ADMIN", status: "ACTIVE", joinedDate: "2024-02-20" },
  { id: "3", name: "Mike Brown", email: "mike@example.com", role: "USER", status: "ACTIVE", joinedDate: "2024-03-10" },
  { id: "4", name: "Emma Wilson", email: "emma@example.com", role: "USER", status: "INACTIVE", joinedDate: "2024-04-05" },
  { id: "5", name: "David Lee", email: "david@example.com", role: "SYSTEM_ADMIN", status: "ACTIVE", joinedDate: "2024-01-01" },
];

const demoStats: SystemStats = {
  totalUsers: 156,
  activeUsers: 142,
  totalOrganizations: 12,
  totalAssessments: 892,
  avgFootprint: 1850,
};

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1.5">Admin Dashboard</h1>
        <p className="text-[var(--foreground-muted)]">
          System overview, user management, and platform statistics. <span className="badge-demo ml-1">DEMO DATA</span>
        </p>
      </header>

      {/* System Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard label="Total Users" value={demoStats.totalUsers} icon="👥" />
        <StatCard label="Active Users" value={demoStats.activeUsers} icon="✅" />
        <StatCard label="Organizations" value={demoStats.totalOrganizations} icon="🏢" />
        <StatCard label="Assessments" value={demoStats.totalAssessments} icon="📊" />
        <StatCard label="Avg Footprint" value={`${demoStats.avgFootprint} kg`} icon="🌍" />
      </div>

      {/* User Management */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-[var(--foreground)]">User Management</h3>
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold hover:from-green-400 hover:to-teal-400">
            Add User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 px-4 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider">
                  User
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider">
                  Role
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider">
                  Joined
                </th>
                <th className="text-right py-3 px-4 text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {demoUsers.map((user) => (
                <tr key={user.id} className="border-b border-[var(--border)] last:border-0">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-[var(--foreground)]">{user.name}</p>
                      <p className="text-xs text-[var(--foreground-muted)]">{user.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <RoleBadge role={user.role} />
                  </td>
                  <td className="py-3 px-4">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="py-3 px-4 text-sm text-[var(--foreground-muted)]">
                    {new Date(user.joinedDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-xs text-blue-500 hover:text-blue-400 font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--foreground)] mb-4">System Health</h3>
          <div className="space-y-4">
            <HealthItem label="API Response Time" value="45ms" status="good" />
            <HealthItem label="Database Latency" value="12ms" status="good" />
            <HealthItem label="Error Rate" value="0.02%" status="good" />
            <HealthItem label="Uptime (30d)" value="99.98%" status="good" />
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--foreground)] mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: "New user registered", user: "John Doe", time: "2 min ago" },
              { action: "Organization created", user: "TechCorp", time: "15 min ago" },
              { action: "Assessment completed", user: "Sarah Chen", time: "1 hour ago" },
              { action: "Goal achieved", user: "Mike Brown", time: "3 hours ago" },
              { action: "Report generated", user: "Emma Wilson", time: "5 hours ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0">
                <div>
                  <p className="text-sm text-[var(--foreground)]">{activity.action}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">{activity.user}</p>
                </div>
                <span className="text-xs text-[var(--foreground-subtle)]">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: number | string; icon: string }) {
  return (
    <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{icon}</span>
        <p className="text-xs text-[var(--foreground-muted)]">{label}</p>
      </div>
      <p className="text-2xl font-bold text-[var(--foreground)]">{value}</p>
    </div>
  );
}

function RoleBadge({ role }: { role: User["role"] }) {
  const colors = {
    USER: "bg-gray-500/15 text-gray-400 border-gray-500/20",
    ORG_ADMIN: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    SYSTEM_ADMIN: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  };
  return (
    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${colors[role]}`}>
      {role.replace("_", " ")}
    </span>
  );
}

function StatusBadge({ status }: { status: User["status"] }) {
  const colors = {
    ACTIVE: "bg-green-500/15 text-green-400 border-green-500/20",
    INACTIVE: "bg-gray-500/15 text-gray-400 border-gray-500/20",
    PENDING: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  };
  return (
    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${colors[status]}`}>
      {status}
    </span>
  );
}

function HealthItem({ label, value, status }: { label: string; value: string; status: "good" | "warning" | "error" }) {
  const colors = {
    good: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-[var(--foreground)]">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--foreground-muted)]">{value}</span>
        <div className={`w-2 h-2 rounded-full ${colors[status]}`} />
      </div>
    </div>
  );
}
