import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/lib/site-data";
import bgImage from "@/assets/testimonials-bg.png";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <img 
        src={bgImage} 
        alt="Testimonials - Loved by Our Customers" 
        className="absolute inset-0 h-full w-full object-cover object-top" 
      />
      <div className="absolute inset-0 bg-black/10 sm:bg-transparent" /> {/* Slight dark overlay on mobile for contrast if needed */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-72 md:pt-96 sm:px-8">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="w-[85vw] shrink-0 snap-center sm:w-[70vw] md:w-auto"
            >
              <figure className="surface-card flex h-full flex-col rounded-2xl p-7 shadow-lg backdrop-blur-sm bg-background/90">
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
      </div>
    </section>
  );
}
