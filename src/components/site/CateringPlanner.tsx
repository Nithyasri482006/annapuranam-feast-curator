import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const occasions = ["Wedding", "Birthday", "Corporate", "Family Function", "Other"];
const preferences = ["Vegetarian", "Non-Vegetarian", "Both"];

function Choice({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-5 py-2.5 text-sm transition-all duration-300",
        active
          ? "border-gold bg-gold text-primary"
          : "border-border bg-background text-foreground/75 hover:border-gold/60 hover:text-primary",
      )}
    >
      {label}
    </button>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-7 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-lg text-gold">0{n}</span>
        <h3 className="font-display text-2xl text-primary">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function CateringPlanner() {
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState("Wedding");
  const [preference, setPreference] = useState("Both");
  const [guests, setGuests] = useState(150);
  const [date, setDate] = useState("");

  return (
    <Section id="planner" className="bg-primary">
      <SectionHeading
        eyebrow="Catering Planner"
        title="Plan Your Perfect Feast"
        subtitle="Tell us a little about your celebration and we will shape a menu around it."
        tone="inverse"
      />

      <Reveal className="mx-auto mt-14 max-w-3xl">
        <div className="space-y-7 rounded-3xl bg-background p-7 shadow-[var(--shadow-lift)] sm:p-10">
          <Step n={1} title="What is your occasion?">
            <div className="flex flex-wrap gap-2.5">
              {occasions.map((o) => (
                <Choice key={o} label={o} active={occasion === o} onClick={() => setOccasion(o)} />
              ))}
            </div>
          </Step>

          <Step n={2} title="Food preference">
            <div className="flex flex-wrap gap-2.5">
              {preferences.map((p) => (
                <Choice
                  key={p}
                  label={p}
                  active={preference === p}
                  onClick={() => setPreference(p)}
                />
              ))}
            </div>
          </Step>

          <Step n={3} title="Number of guests">
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Decrease guests"
                onClick={() => setGuests((g) => Math.max(10, g - 25))}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-gold"
              >
                <Minus className="h-4 w-4" />
              </button>
              <label className="sr-only" htmlFor="planner-guests">
                Number of guests
              </label>
              <input
                id="planner-guests"
                type="number"
                min={10}
                step={5}
                value={guests}
                onChange={(e) => setGuests(Math.max(10, Number(e.target.value) || 10))}
                className="w-32 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-center font-display text-2xl text-primary focus:border-gold focus:outline-none"
              />
              <button
                type="button"
                aria-label="Increase guests"
                onClick={() => setGuests((g) => g + 25)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-gold"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </Step>

          <Step n={4} title="Event date">
            <label className="sr-only" htmlFor="planner-date">
              Event date
            </label>
            <input
              id="planner-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none sm:w-64"
            />
          </Step>

          <div className="border-t border-border pt-7">
            <p className="font-display text-2xl text-primary">
              Let’s create a menu that fits your celebration.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {preference} catering for a {occasion.toLowerCase()} of around {guests} guests
              {date ? ` on ${date}` : ""}.
            </p>
            <button
              type="button"
              onClick={() =>
                navigate({
                  to: "/contact",
                  search: { occasion, preference, guests, date: date || undefined },
                  hash: "enquiry",
                })
              }
              className="mt-6 w-full rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft sm:w-auto"
            >
              Get a Customized Quote
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              This is an enquiry — no payment is taken online.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
