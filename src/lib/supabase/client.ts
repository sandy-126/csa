"use client";

import { createBrowserClient } from "@supabase/ssr";

export function isDemoMode(): boolean {
  return !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Demo mode - return null to indicate no Supabase client
    return null;
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
