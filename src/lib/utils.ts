import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatKgCo2e(kg: number | bigint | string | null | undefined, digits = 1): string {
  if (kg == null || Number.isNaN(Number(kg))) return "—";
  const n = Number(kg);
  if (n >= 1000) return `${(n / 1000).toFixed(digits)} tCO₂e`;
  return `${n.toFixed(digits)} kg CO₂e`;
}

export function formatDate(input: Date | string | null | undefined): string {
  if (!input) return "—";
  try {
    const d = typeof input === "string" ? new Date(input) : input;
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "—";
  }
}

export function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
