import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isDemoMode } from "@/lib/supabase/server";
import type { DemoUser } from "@/lib/demoAuth";

export async function GET() {
  // Demo mode - check for demo user cookie
  if (isDemoMode()) {
    const cookieStore = await cookies();
    const demoUserCookie = cookieStore.get("climatesense_demo_user");
    if (demoUserCookie) {
      try {
        const user: DemoUser = JSON.parse(demoUserCookie.value);
        return NextResponse.json({ user });
      } catch {
        return NextResponse.json({ user: null });
      }
    }
    return NextResponse.json({ user: null });
  }

  // Supabase mode - not implemented for this endpoint
  return NextResponse.json({ user: null });
}
