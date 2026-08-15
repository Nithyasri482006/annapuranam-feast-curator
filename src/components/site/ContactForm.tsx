import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  preference: string;
  location: string;
  requirements: string;
};

const eventTypes = ["Wedding", "Birthday", "Corporate", "Family Function", "Other"];
const preferences = ["Vegetarian", "Non-Vegetarian", "Both"];

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";

export function ContactForm({ defaults }: { defaults?: Partial<Values> }) {
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    email: "",
    eventType: defaults?.eventType ?? "Wedding",
    eventDate: defaults?.eventDate ?? "",
    guests: defaults?.guests ?? "",
    preference: defaults?.preference ?? "Both",
    location: "",
    requirements: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{7,}$/.test(values.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.eventDate) next.eventDate = "Please select your event date.";
    if (!values.guests || Number(values.guests) < 1)
      next.guests = "Please enter the number of guests.";
    if (values.location.trim().length < 2) next.location = "Please enter the event location.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  if (sent) {
    return (
      <div className="surface-card rounded-3xl p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-5 font-display text-3xl text-primary">Thank you!</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          We received your enquiry. Our team will get in touch with you soon.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 rounded-full border border-border px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-gold"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const Field = ({
    id,
    label,
    children,
    error,
  }: {
    id: string;
    label: string;
    children: React.ReactNode;
    error?: string;
  }) => (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card rounded-3xl p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full Name" error={errors.name}>
          <input
            id="name"
            value={values.name}
            onChange={set("name")}
            placeholder="Your name"
            className={cn(fieldClass, errors.name && "border-destructive")}
          />
        </Field>
        <Field id="phone" label="Phone Number" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="+91 90000 00000"
            className={cn(fieldClass, errors.phone && "border-destructive")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className={cn(fieldClass, errors.email && "border-destructive")}
          />
        </Field>
        <Field id="eventType" label="Event Type">
          <select id="eventType" value={values.eventType} onChange={set("eventType")} className={fieldClass}>
            {eventTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field id="eventDate" label="Event Date" error={errors.eventDate}>
          <input
            id="eventDate"
            type="date"
            value={values.eventDate}
            onChange={set("eventDate")}
            className={cn(fieldClass, errors.eventDate && "border-destructive")}
          />
        </Field>
        <Field id="guests" label="Number of Guests" error={errors.guests}>
          <input
            id="guests"
            type="number"
            min={1}
            value={values.guests}
            onChange={set("guests")}
            placeholder="150"
            className={cn(fieldClass, errors.guests && "border-destructive")}
          />
        </Field>
        <Field id="preference" label="Food Preference">
          <select id="preference" value={values.preference} onChange={set("preference")} className={fieldClass}>
            {preferences.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </Field>
        <Field id="location" label="Location" error={errors.location}>
          <input
            id="location"
            value={values.location}
            onChange={set("location")}
            placeholder="Venue, city"
            className={cn(fieldClass, errors.location && "border-destructive")}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id="requirements" label="Additional Requirements">
            <textarea
              id="requirements"
              rows={4}
              value={values.requirements}
              onChange={set("requirements")}
              placeholder="Menu ideas, serving style, timings…"
              className={cn(fieldClass, "resize-none")}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-gold px-8 py-4 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
      >
        Send Catering Enquiry
      </button>
    </form>
  );
}
