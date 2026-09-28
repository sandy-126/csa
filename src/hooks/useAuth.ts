"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient, isDemoMode } from "@/lib/supabase/client";
import type { AuthenticatedUser, Role } from "@/types";
import type { DemoUser } from "@/lib/demoAuth";

type AuthState = {
  user: AuthenticatedUser | null;
  loading: boolean;
};

interface SupabaseUserShape {
  id: string;
  email?: string | null;
  app_metadata: Record<string, unknown>;
  user_metadata: Record<string, unknown>;
  identities?: Array<{ identity_data?: { name?: unknown } | null } | null> | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({ user: null, loading: true });
  const supabase = createClient();

  const deriveUser = useCallback((supabaseUser: SupabaseUserShape | null | undefined): AuthenticatedUser | null => {
    if (!supabaseUser) return null;
    const appMeta = supabaseUser.app_metadata ?? {};
    const userMeta = supabaseUser.user_metadata ?? {};
    const identityName =
      typeof supabaseUser.identities?.[0]?.identity_data?.name === "string"
        ? supabaseUser.identities[0].identity_data.name
        : null;

    const role: Role =
      (typeof appMeta.role === "string" ? (appMeta.role as Role) : null) ??
      (typeof userMeta.role === "string" ? (userMeta.role as Role) : null) ??
      "INDIVIDUAL";

    return {
      id: supabaseUser.id,
      email: supabaseUser.email ?? null,
      name: (typeof userMeta.name === "string" ? userMeta.name : null) ?? identityName,
      imageUrl:
        (typeof userMeta.avatar_url === "string" ? userMeta.avatar_url : null) ??
        (typeof userMeta.picture === "string" ? userMeta.picture : null),
      role,
    };
  }, []);

  const deriveDemoUser = useCallback((demoUser: DemoUser): AuthenticatedUser => {
    return {
      id: demoUser.id,
      email: demoUser.email,
      name: demoUser.name,
      imageUrl: null,
      role: demoUser.role,
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    // Demo mode - check for demo user in cookies via server action
    if (isDemoMode()) {
      (async () => {
        try {
          // For demo mode, we'll use a simpler approach
          // Check if there's a demo user cookie
          const response = await fetch("/api/auth/me");
          if (response.ok) {
            const data = await response.json();
            if (data.user && !cancelled) {
              setState({ user: deriveDemoUser(data.user), loading: false });
              return;
            }
          }
          if (cancelled) return;
          setState({ user: null, loading: false });
        } catch {
          if (cancelled) return;
          setState({ user: null, loading: false });
        }
      })();
      return;
    }

    // Supabase mode
    (async () => {
      if (!supabase) {
        if (cancelled) return;
        setState({ user: null, loading: false });
        return;
      }

      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (cancelled) return;
        setState({ user: deriveUser(user), loading: false });
      } catch {
        if (cancelled) return;
        setState({ user: null, loading: false });
      }
    })();

    if (supabase) {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setState({ user: deriveUser(session?.user ?? null), loading: false });
      });

      return () => {
        cancelled = true;
        subscription.unsubscribe();
      };
    }

    return () => {
      cancelled = true;
    };
  }, [supabase, deriveUser, deriveDemoUser]);

  return state;
}
