import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FoodCard } from "@/components/site/FoodCard";
import { FinalCTA } from "@/components/site/FinalCTA";
import { images, menuCategories, menuItems } from "@/lib/site-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu — Annapuranam Catering" },
      {
        name: "description",
        content:
          "Explore vegetarian and non-vegetarian South Indian catering menus: meals, biryani, snacks, sweets and beverages.",
      },
      { property: "og:title", content: "Our Menu — Annapuranam Catering" },
      {
        property: "og:description",
        content: "Flavours crafted for every kind of celebration — veg, non-veg, biryani and sweets.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("All");

  const items = useMemo(
    () => (active === "All" ? menuItems : menuItems.filter((i) => i.categories.includes(active))),
    [active],
  );

  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title="Our Menu"
        subtitle="Explore flavours crafted for every kind of celebration."
        image={images.dishChickenBiryani}
      />

      <Section>
        <Reveal className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {menuCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2.5 text-sm transition-all duration-300",
                active === c
                  ? "border-gold bg-gold text-primary"
                  : "border-border bg-background text-foreground/75 hover:border-gold/60 hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <FoodCard {...item} tag={item.categories[0]} className="h-full" />
            </Reveal>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No dishes in this category yet.
          </p>
        ) : null}

        <Reveal className="mt-20 text-center">
          <h2 className="font-display text-4xl text-primary">Need a Customized Menu?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Share your occasion and guest count, and we will design a menu around it.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Talk to Us
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      <FinalCTA />
    </>
  );
}
