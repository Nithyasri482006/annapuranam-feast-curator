import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 lg:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "default" | "inverse";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="eyebrow text-gold">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]",
          tone === "inverse" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      <span className={cn("gold-rule mt-6", align === "center" && "mx-auto")} />
      {subtitle ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "inverse" ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
