// Demo authentication for college project - no Supabase required
// Uses localStorage for session management

export type DemoUser = {
  id: string;
  name: string;
  email: string;
  role: "INDIVIDUAL" | "ORG_ADMIN" | "SYSTEM_ADMIN";
  createdAt: string;
};

const DEMO_USER_STORAGE_KEY = "climatesense_demo_user";
const DEMO_USERS_STORAGE_KEY = "climatesense_demo_users";

// Default demo account
export const DEFAULT_DEMO_USER: DemoUser = {
  id: "demo-001",
  name: "Demo User",
  email: "demo@climatesense.com",
  role: "INDIVIDUAL",
  createdAt: new Date().toISOString(),
};

export const DEMO_PASSWORD = "Demo@123";

// Get current session user
export function getDemoUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(DEMO_USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

// Set current session user
export function setDemoUser(user: DemoUser | null): void {
  if (typeof window === "undefined") return;
  if (user) {
    localStorage.setItem(DEMO_USER_STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(DEMO_USER_STORAGE_KEY);
  }
}

// Get all registered demo users
export function getDemoUsers(): DemoUser[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(DEMO_USERS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Add a new demo user
export function addDemoUser(user: DemoUser): void {
  if (typeof window === "undefined") return;
  const users = getDemoUsers();
  users.push(user);
  localStorage.setItem(DEMO_USERS_STORAGE_KEY, JSON.stringify(users));
}

// Find user by email
export function findDemoUserByEmail(email: string): DemoUser | null {
  const users = getDemoUsers();
  // Also check default demo user
  if (email.toLowerCase() === DEFAULT_DEMO_USER.email.toLowerCase()) {
    return DEFAULT_DEMO_USER;
  }
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

// Clear demo session
export function clearDemoSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(DEMO_USER_STORAGE_KEY);
}

// Check if demo mode is active (no Supabase credentials)
export function isDemoMode(): boolean {
  return !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}
