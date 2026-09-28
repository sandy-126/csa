export type Role =
  | "INDIVIDUAL"
  | "ORG_MEMBER"
  | "ORG_ADMIN"
  | "SYSTEM_ADMIN";

export type AssessmentCategory =
  | "TRANSPORT"
  | "ENERGY"
  | "DIET"
  | "SHOPPING"
  | "WASTE"
  | "WATER"
  | "OTHER";

export type GoalStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "ON_TRACK"
  | "AT_RISK"
  | "COMPLETED"
  | "CANCELLED";

export type RiskType =
  | "HEAT"
  | "FLOOD"
  | "DROUGHT"
  | "WILDFIRE"
  | "CYCLONE"
  | "SEA_LEVEL"
  | "AIR_QUALITY"
  | "OTHER";

export type RiskLevel =
  | "VERY_LOW"
  | "LOW"
  | "MODERATE"
  | "HIGH"
  | "VERY_HIGH";

export type ActionItemStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "SKIPPED";

export type RecommendationSource =
  | "RULE_BASED"
  | "AI"
  | "ML";

export type ConfidenceLevel = "LOW" | "MEDIUM" | "HIGH";

export interface AuthenticatedUser {
  id: string;
  email?: string | null;
  name?: string | null;
  role?: Role | null;
  imageUrl?: string | null;
}

export interface ClimateScoreSummary {
  score: number;
  footprintKg: number;
  vsAveragePct?: number;
  contributors: Array<{ category: AssessmentCategory; pct: number; kg: number }>;
}
