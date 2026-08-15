import { Link } from "@tanstack/react-router";
import { images } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={images.nonvegFeast}
        alt="Premium South Indian catering spread"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.24_0.05_155_/_0.86)]" />
      <div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow text-gold">Book with us</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            Your Celebration Deserves Great Food.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Let Annapuranam bring authentic flavours and unforgettable hospitality to your next
            occasion.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft sm:w-auto"
            >
              Book Catering
            </Link>
            <Link
              to="/contact"
              hash="enquiry"
              className="w-full rounded-full border border-primary-foreground/35 px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
