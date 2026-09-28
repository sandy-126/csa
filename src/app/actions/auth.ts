"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient, isDemoMode } from "@/lib/supabase/server";
import { loginSchema, registerSchema } from "@/schemas/auth";
import type { Role } from "@/types";
import { DEFAULT_DEMO_USER, DEMO_PASSWORD, type DemoUser } from "@/lib/demoAuth";
import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {
  const raw = {
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
    rememberMe: formData.get("rememberMe") === "on",
    next: String(formData.get("next") ?? "/dashboard"),
  };

  const parsed = loginSchema.safeParse({ email: raw.email, password: raw.password });
  if (!parsed.success) {
    return;
  }

  // Demo mode authentication
  if (isDemoMode()) {
    const email = parsed.data.email.toLowerCase();
    const password = parsed.data.password;

    // Check for default demo account
    if (email === DEFAULT_DEMO_USER.email.toLowerCase() && password === DEMO_PASSWORD) {
      const cookieStore = await cookies();
      cookieStore.set("climatesense_demo_user", JSON.stringify(DEFAULT_DEMO_USER), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      revalidatePath("/", "layout");
      redirect(raw.next);
    }

    // For demo mode, accept any registration with valid format
    // In a real app, this would check against stored users
    // For demo, we'll just accept and create a session
    const demoUser: DemoUser = {
      id: `demo-${Date.now()}`,
      name: email.split("@")[0],
      email: parsed.data.email,
      role: "INDIVIDUAL",
      createdAt: new Date().toISOString(),
    };

    const cookieStore = await cookies();
    cookieStore.set("climatesense_demo_user", JSON.stringify(demoUser), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
    revalidatePath("/", "layout");
    redirect(raw.next);
  }

  // Supabase authentication
  const supabase = await createClient();
  if (!supabase) {
    return;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (error) {
    return;
  }

  const nextPath = raw.next?.startsWith("/") && !raw.next.startsWith("//") ? raw.next : "/dashboard";

  revalidatePath("/", "layout");
  redirect(nextPath);
}

export async function registerAction(formData: FormData) {
  const raw = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
    confirmPassword: String(formData.get("confirmPassword") ?? ""),
    accountType: String(formData.get("accountType") ?? "individual"),
    agreeToTerms: formData.get("agreeToTerms") === "on",
    next: String(formData.get("next") ?? "/dashboard"),
  };

  const parsed = registerSchema.safeParse({
    name: raw.name,
    email: raw.email,
    password: raw.password,
    confirmPassword: raw.confirmPassword,
    accountType: raw.accountType,
    agreeToTerms: raw.agreeToTerms,
  });

  if (!parsed.success) {
    return;
  }

  // Demo mode registration
  if (isDemoMode()) {
    const initialRole: Role = parsed.data.accountType === "organization" ? "ORG_ADMIN" : "INDIVIDUAL";

    const demoUser: DemoUser = {
      id: `demo-${Date.now()}`,
      name: parsed.data.name,
      email: parsed.data.email,
      role: initialRole,
      createdAt: new Date().toISOString(),
    };

    const cookieStore = await cookies();
    cookieStore.set("climatesense_demo_user", JSON.stringify(demoUser), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
    revalidatePath("/", "layout");
    redirect(raw.next);
  }

  // Supabase registration
  const supabase = await createClient();
  if (!supabase) {
    return;
  }

  const initialRole: Role = parsed.data.accountType === "organization" ? "ORG_ADMIN" : "INDIVIDUAL";

  const { error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        name: parsed.data.name,
        role: initialRole,
      },
      emailRedirectTo: new URL("/auth/callback", process.env.NEXTAUTH_URL ?? "http://localhost:3000").toString(),
    },
  });

  if (error) {
    return;
  }

  revalidatePath("/", "layout");
  const nextPath = raw.next?.startsWith("/") && !raw.next.startsWith("//") ? raw.next : "/dashboard/onboarding";
  redirect(nextPath);
}

export async function signOutAction() {
  // Demo mode logout
  if (isDemoMode()) {
    const cookieStore = await cookies();
    cookieStore.delete("climatesense_demo_user");
    revalidatePath("/", "layout");
    redirect("/");
    return;
  }

  // Supabase logout
  const supabase = await createClient();
  if (supabase) {
    await supabase.auth.signOut({ scope: "global" });
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function getCurrentUser() {
  // Demo mode user
  if (isDemoMode()) {
    const cookieStore = await cookies();
    const demoUserCookie = cookieStore.get("climatesense_demo_user");
    if (demoUserCookie) {
      try {
        const user: DemoUser = JSON.parse(demoUserCookie.value);
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          imageUrl: null,
          role: user.role,
        };
      } catch {
        return null;
      }
    }
    return null;
  }

  // Supabase user
  try {
    const supabase = await createClient();
    if (!supabase) return null;

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error || !user) return null;

    const role: Role =
      (typeof user.app_metadata?.role === "string" ? (user.app_metadata.role as Role) : null) ??
      (typeof user.user_metadata?.role === "string" ? (user.user_metadata.role as Role) : null) ??
      "INDIVIDUAL";

    return {
      id: user.id,
      email: user.email ?? null,
      name: (user.user_metadata?.name as string | undefined) ?? (typeof user.identities?.[0]?.identity_data?.name === "string" ? user.identities[0].identity_data.name : null),
      imageUrl: (user.user_metadata?.avatar_url as string | undefined) ?? user.user_metadata?.picture ?? null,
      role,
    };
  } catch {
    return null;
  }
}
