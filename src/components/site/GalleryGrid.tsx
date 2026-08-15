import { useState } from "react";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";
import type { GalleryImage } from "@/lib/site-data";

export function GalleryGrid({ items }: { items: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <Reveal key={`${item.src}-${i}`} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl"
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/25" />
              <span className="pointer-events-none absolute bottom-4 left-4 right-4 translate-y-3 text-left text-sm font-medium text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </>
  );
}
