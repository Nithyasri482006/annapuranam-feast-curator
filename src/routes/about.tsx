import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, ShieldCheck, Soup, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Annapuranam Catering" },
      {
        name: "description",
        content:
          "Annapuranam Catering brings authentic South Indian flavours, quality ingredients and warm hospitality to every celebration.",
      },
      { property: "og:title", content: "The Taste of Tradition — Annapuranam Catering" },
      {
        property: "og:description",
        content: "Traditional recipes, quality ingredients, hygienic preparation and customized menus.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  { Icon: Soup, title: "Traditional Recipes", text: "Time-tested South Indian recipes, cooked the way they are meant to be." },
  { Icon: Leaf, title: "Quality Ingredients", text: "Fresh produce, spices and ingredients selected for every menu." },
  { Icon: ShieldCheck, title: "Hygienic Preparation", text: "Careful, clean preparation from kitchen to serving counter." },
  { Icon: Sparkles, title: "Customized Menus", text: "Menus shaped around your occasion, guests and preferences." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="The Taste of Tradition"
        subtitle="Authentic South Indian catering built on flavour, quality and hospitality."
        image={images.kitchenPrep}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Our Story</p>
            <h2 className="mt-5 text-4xl leading-tight text-primary sm:text-5xl">
              Food that carries a celebration
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Annapuranam Catering brings authentic South Indian flavours and warm hospitality to
              every celebration. From traditional vegetarian meals to delicious non-vegetarian
              favourites, every dish is prepared with attention to flavour, quality and
              presentation.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Whether it is a wedding sappadu served on banana leaves or a biryani counter for a
              family gathering, we plan the menu around your occasion and serve it with care.
            </p>
            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Book Catering
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <img
              src={images.vegFeast}
              alt="Traditional vegetarian banana leaf meal"
              loading="lazy"
              className="mt-10 h-72 w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] sm:h-96"
            />
            <img
              src={images.setupBuffet}
              alt="Catering setup with brass serving vessels"
              loading="lazy"
              className="h-72 w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] sm:h-96"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <SectionHeading eyebrow="What we stand for" title="Prepared with Purpose" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="surface-card h-full rounded-2xl p-7">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-2xl text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
