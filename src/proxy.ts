import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

const PROTECTED_ROUTES = ["/dashboard"];
const AUTH_ROUTES = ["/login", "/register", "/forgot-password", "/reset-password"];

function isProtected(pathname: string) {
  return PROTECTED_ROUTES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.includes(pathname);
}

// Next.js 16 proxy replaces the deprecated `middleware` convention.
// Behavior is identical: session refresh + cookie-based redirects.
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Refresh Supabase session cookies (if env vars present)
  let response: NextResponse;
  try {
    response = await updateSession(request);
  } catch {
    response = NextResponse.next({ request: { headers: request.headers } });
  }

  // 2. Skip enforcement if Supabase is not yet configured (demo mode).
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    return response;
  }

  // 3. Quick session presence check using the sb-*-auth-token cookie.
  //    True identity verification happens inside server components/actions via getUser().
  const hasSessionCookie = request.cookies
    .getAll()
    .some((c) => c.name.startsWith("sb-") && c.name.endsWith("-auth-token"));

  const loginUrl = new URL("/login", request.nextUrl.origin);

  if (isProtected(pathname) && !hasSessionCookie) {
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute(pathname) && hasSessionCookie) {
    const nextParam = request.nextUrl.searchParams.get("next");
    const nextPath =
      nextParam && nextParam.startsWith("/") && !nextParam.startsWith("//")
        ? nextParam
        : "/dashboard";
    return NextResponse.redirect(new URL(nextPath, request.nextUrl.origin));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|bmp)$).*)",
  ],
};
