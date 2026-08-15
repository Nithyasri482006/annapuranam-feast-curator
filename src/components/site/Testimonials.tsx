import { Star } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <Section className="bg-secondary/50">
      <SectionHeading eyebrow="Testimonials" title="Loved by Our Customers" />
      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <Reveal
            key={i}
            delay={i * 90}
            className="w-[85vw] shrink-0 snap-center sm:w-[70vw] md:w-auto"
          >
            <figure className="surface-card flex h-full flex-col rounded-2xl p-7">
              <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-primary">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.event}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
