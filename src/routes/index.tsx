import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChefHat, HeartHandshake, Leaf, UtensilsCrossed } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FoodCard } from "@/components/site/FoodCard";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { CateringPlanner } from "@/components/site/CateringPlanner";
import { FinalCTA } from "@/components/site/FinalCTA";
import { galleryImages, images, services, signatureDishes } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Annapuranam Catering — South Indian Wedding & Event Catering" },
      {
        name: "description",
        content:
          "Authentic South Indian vegetarian and non-vegetarian catering for weddings, birthdays, corporate events and family functions.",
      },
      { property: "og:title", content: "Annapuranam Catering — Traditional Taste, Memorable Celebrations" },
      {
        property: "og:description",
        content:
          "Banana-leaf feasts, biryanis and traditional sweets catered with warmth for every occasion.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  { Icon: Leaf, title: "Authentic Flavours", text: "Traditional recipes prepared with care." },
  { Icon: UtensilsCrossed, title: "Fresh Ingredients", text: "Quality ingredients for every celebration." },
  { Icon: ChefHat, title: "Customized Menus", text: "Menus designed around your occasion." },
  { Icon: HeartHandshake, title: "Warm Hospitality", text: "Food and service that guests remember." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={images.heroFeast}
          alt="Traditional South Indian feast served on a banana leaf with brass vessels"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="scrim absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-gold">Annapuranam Catering</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-5xl leading-[1.02] text-primary-foreground sm:text-7xl lg:text-[5.2rem]">
                Traditional Taste.
                <span className="block text-gradient-gold">Memorable Celebrations.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Authentic vegetarian and non-vegetarian catering crafted with tradition, care and
                unforgettable flavour.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft"
                >
                  Explore Our Menu
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Book Catering
                </Link>
              </div>
            </Reveal>
            <Reveal delay={460}>
              <p className="eyebrow mt-12 inline-block rounded-full border border-primary-foreground/25 px-5 py-2 text-primary-foreground/80">
                Veg • Non-Veg • Events
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-border bg-background px-5 py-14 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="flex items-start gap-4">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.4} />
              <div>
                <h3 className="font-display text-xl text-primary">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VEG & NON-VEG */}
      <Section>
        <SectionHeading
          eyebrow="Veg & Non-Veg"
          title="A Feast for Every Taste"
          subtitle="From traditional vegetarian celebrations to rich non-vegetarian favourites, discover flavours made for every occasion."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Vegetarian Feast",
              image: images.vegFeast,
              text: "Traditional South Indian flavours prepared with fresh ingredients and timeless recipes.",
              cta: "Explore Veg Menu",
            },
            {
              title: "Non-Vegetarian Feast",
              image: images.nonvegFeast,
              text: "Rich, aromatic and flavourful dishes prepared for unforgettable celebrations.",
              cta: "Explore Non-Veg Menu",
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <Link
                to="/menu"
                className="group relative block h-[520px] overflow-hidden rounded-3xl sm:h-[600px]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="veil-bottom absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                  <h3 className="font-display text-4xl text-primary-foreground">{card.title}</h3>
                  <span className="gold-rule mt-5" />
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/80">
                    {card.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                    {card.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SIGNATURE DISHES */}
      <Section className="bg-secondary/50">
        <SectionHeading
          eyebrow="Signature Dishes"
          title="From Our Kitchen to Your Celebration"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 3) * 100}>
              <FoodCard {...dish} tag={dish.categories[0]} className="h-full" />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      {/* STORY */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 scale-110">
          <img
            src={images.storyBanner}
            alt="Guests served traditional banana-leaf meals at a celebration"
            loading="lazy"
            className="h-full w-full object-cover motion-safe:animate-[pulse_18s_ease-in-out_infinite]"
          />
        </div>
        <div className="absolute inset-0 bg-[oklch(0.2_0.04_155_/_0.72)]" />
        <div className="relative mx-auto w-full max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-36">
          <Reveal>
            <p className="eyebrow text-gold">Our Tradition</p>
            <h2 className="mt-5 text-4xl leading-tight text-primary-foreground sm:text-6xl">
              Served with Tradition
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Every serving carries the warmth of tradition, the richness of authentic flavours and
              the joy of bringing people together.
            </p>
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* OCCASIONS */}
      <Section>
        <SectionHeading eyebrow="Occasions" title="Perfect Food for Every Occasion" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90}>
              <Link
                to="/services"
                hash={service.slug}
                className="surface-card group flex h-full flex-col rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[var(--shadow-lift)]"
              >
                <span className="eyebrow text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl text-primary">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <ArrowRight className="mt-6 h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      {/* GALLERY PREVIEW */}
      <Section className="bg-secondary/50">
        <SectionHeading eyebrow="Gallery" title="Moments We Cater" />
        <div className="mt-14">
          <GalleryGrid items={galleryImages.slice(0, 8)} />
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      <Testimonials />
      <CateringPlanner />
      <FinalCTA />
    </>
  );
}
