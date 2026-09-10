import { z } from "zod";

/**
 * Single source of truth for every enquiry / callback form on the site.
 * `submitLead` is the only integration point — replace its body with a
 * server call (or database insert) when a backend is connected. No form
 * component should talk to a backend directly.
 */

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(80, { message: "Name must be under 80 characters" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number is too long" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Phone number contains invalid characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(160, { message: "Email must be under 160 characters" }),
  program: z.string().trim().max(60).optional(),
  course: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1000, { message: "Message must be under 1000 characters" }).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export interface LeadPayload extends LeadInput {
  /** Where the lead came from, e.g. "course:java" or "contact-page". */
  source: string;
  submittedAt: string;
}

export interface LeadResult {
  ok: boolean;
  error?: string;
}

export async function submitLead(input: LeadInput, source: string): Promise<LeadResult> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please check the highlighted fields and try again." };
  }

  const payload: LeadPayload = {
    ...parsed.data,
    source,
    submittedAt: new Date().toISOString(),
  };

  try {
    // Backend integration point. Today the lead is captured locally so the
    // UI flow is complete; swap this for a server function / API call later.
    if (import.meta.env.DEV) {
      console.info("[lead captured]", payload);
    }
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { ok: true };
  } catch {
    return { ok: false, error: "We couldn't send your enquiry. Please try again in a moment." };
  }
}
