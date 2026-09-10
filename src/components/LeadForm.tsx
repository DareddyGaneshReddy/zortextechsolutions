import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { courses } from "@/data/courses";
import { programs } from "@/data/programs";
import { leadSchema, submitLead, type LeadInput } from "@/lib/leads";
import { cn } from "@/lib/utils";

type FieldName = keyof LeadInput;

interface LeadFormProps {
  source: string;
  submitLabel?: string;
  defaultCourse?: string;
  defaultProgram?: string;
  showProgram?: boolean;
  showCourse?: boolean;
  className?: string;
}

const emptyValues: LeadInput = {
  name: "",
  phone: "",
  email: "",
  program: "",
  course: "",
  message: "",
};

export function LeadForm({
  source,
  submitLabel = "Request a Callback",
  defaultCourse = "",
  defaultProgram = "",
  showProgram = false,
  showCourse = true,
  className,
}: LeadFormProps) {
  const [values, setValues] = useState<LeadInput>({
    ...emptyValues,
    course: defaultCourse,
    program: defaultProgram,
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function update(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName | undefined;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      setFormError("Please fix the highlighted fields.");
      return;
    }

    setStatus("loading");
    const result = await submitLead(parsed.data, source);
    if (result.ok) {
      setStatus("success");
      setValues({ ...emptyValues, course: defaultCourse, program: defaultProgram });
    } else {
      setStatus("error");
      setFormError(result.error ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={cn(
          "flex flex-col items-center rounded-2xl border border-primary/20 bg-primary-soft/60 p-8 text-center",
          className,
        )}
      >
        <CheckCircle2 aria-hidden="true" className="size-10 text-primary" />
        <h3 className="mt-4 text-xl font-bold text-foreground">Thank you — we've got it</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your enquiry has been received. Our team will get in touch with you shortly.
        </p>
        <Button variant="outlineBrand" className="mt-6" onClick={() => setStatus("idle")}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8",
        className,
      )}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${source}-name`} label="Full Name" error={errors.name} required>
          <Input
            id={`${source}-name`}
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            disabled={loading}
          />
        </Field>

        <Field id={`${source}-phone`} label="Phone Number" error={errors.phone} required>
          <Input
            id={`${source}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            disabled={loading}
          />
        </Field>

        <Field
          id={`${source}-email`}
          label="Email"
          error={errors.email}
          required
          className={showProgram && showCourse ? "" : "sm:col-span-2"}
        >
          <Input
            id={`${source}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            disabled={loading}
          />
        </Field>

        {showProgram ? (
          <Field id={`${source}-program`} label="Interested Program">
            <select
              id={`${source}-program`}
              name="program"
              value={values.program}
              onChange={(event) => update("program", event.target.value)}
              disabled={loading}
              className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
            >
              <option value="">Select a program</option>
              {programs.map((program) => (
                <option key={program.slug} value={program.name}>
                  {program.name}
                </option>
              ))}
            </select>
          </Field>
        ) : null}

        {showCourse ? (
          <Field id={`${source}-course`} label="Interested Course">
            <select
              id={`${source}-course`}
              name="course"
              value={values.course}
              onChange={(event) => update("course", event.target.value)}
              disabled={loading}
              className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course.slug} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </Field>
        ) : null}

        <Field
          id={`${source}-message`}
          label="Message"
          error={errors.message}
          className="sm:col-span-2"
        >
          <Textarea
            id={`${source}-message`}
            name="message"
            rows={4}
            placeholder="Tell us what you'd like to know"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            disabled={loading}
          />
        </Field>
      </div>

      {formError ? (
        <p role="alert" className="mt-4 flex items-center gap-2 text-sm text-destructive">
          <AlertCircle aria-hidden="true" className="size-4" />
          {formError}
        </p>
      ) : null}

      <Button type="submit" variant="hero" size="lg" className="mt-6 w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 aria-hidden="true" className="animate-spin" />
            Sending…
          </>
        ) : (
          submitLabel
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We'll only use your details to respond to this enquiry.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <Label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
        {required ? <span className="ml-0.5 text-destructive">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
