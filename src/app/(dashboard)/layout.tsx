import { getCurrentUser } from "@/app/actions/auth";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import { isDemoMode } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard – ClimateSense",
  description: "Your personal climate impact command center.",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const demoMode = isDemoMode();
  const user = await getCurrentUser();

  // Redirect to login if no user (in both demo and Supabase mode)
  if (!user) {
    redirect("/login?next=/dashboard");
  }

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)]">
      <DashboardSidebar user={user} demoMode={demoMode} />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar user={user} demoMode={demoMode} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {demoMode && (
            <div className="mb-6 p-4 rounded-xl border border-green-500/30 bg-green-500/5 text-sm text-green-700 dark:text-green-400 flex items-start gap-3">
              <span className="text-lg">✅</span>
              <div>
                <p className="font-semibold mb-1">Demo mode active</p>
                <p className="opacity-80">
                  Using local authentication for demonstration. No Supabase configuration required.
                </p>
              </div>
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
