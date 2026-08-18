import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { images, services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Catering Services — Annapaathiram Catering" },
      {
        name: "description",
        content:
          "Wedding, birthday, corporate, family function and special event catering with customized South Indian menus.",
      },
      { property: "og:title", content: "Catering Services — Annapaathiram Catering" },
      {
        property: "og:description",
        content: "Detailed catering services for weddings, birthdays, corporate and family events.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Catering for Every Occasion"
        subtitle="Menus, serving styles and teams shaped around the celebration you are planning."
        image={images.setupBuffet}
      />

      <Section className="space-y-24 lg:space-y-32">
        {services.map((service, i) => (
          <div
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-80 w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105 sm:h-[30rem]"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow text-gold">0{i + 1}</p>
              <h2 className="mt-4 text-4xl leading-tight text-primary sm:text-5xl">
                {service.title}
              </h2>
              <span className="gold-rule mt-6" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {service.offerings.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {o}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
              >
                Book Catering
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        ))}
      </Section>

      <FinalCTA />
    </>
  );
}
