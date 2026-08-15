import { cn } from "@/lib/utils";

export function FoodCard({
  name,
  description,
  image,
  tag,
  className,
}: {
  name: string;
  description: string;
  image: string;
  tag?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group surface-card overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        {tag ? (
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-primary">
            {tag}
          </span>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-primary">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
