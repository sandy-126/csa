import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters")
      .max(80, "Full name is too long"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(128, "Password is too long")
      .regex(/[A-Z]/, "Password must include at least one uppercase letter")
      .regex(/[0-9]/, "Password must include at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    accountType: z.enum(["individual", "organization"]),
    agreeToTerms: z.literal(true),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
      });
    }
  });

export type RegisterInput = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must include at least one uppercase letter")
      .regex(/[0-9]/, "Password must include at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
      });
    }
  });

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
