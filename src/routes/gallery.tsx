import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { FinalCTA } from "@/components/site/FinalCTA";
import { galleryImages, images } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Annapuranam Catering" },
      {
        name: "description",
        content:
          "Photographs of our wedding feasts, banana-leaf meals, biryanis, desserts and catering setups.",
      },
      { property: "og:title", content: "Gallery — Annapuranam Catering" },
      {
        property: "og:description",
        content: "A look at the food and celebrations we cater across weddings and events.",
      },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Weddings", "Food", "Events", "Catering Setup"] as const;

function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const items = useMemo(
    () => (active === "All" ? galleryImages : galleryImages.filter((i) => i.category === active)),
    [active],
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments We Cater"
        subtitle="Feasts, celebrations and the details behind them."
        image={images.storyBanner}
      />

      <Section>
        <Reveal className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {categories.map((c) => (
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

        <div className="mt-12">
          <GalleryGrid key={active} items={items} />
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
