import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { KalashMark } from "./Logo";
import { contactInfo } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <KalashMark className="h-9 w-9 text-gold" />
            <div>
              <p className="font-display text-2xl">Annapuranam Catering</p>
              <p className="eyebrow mt-1 text-gold">Traditional Taste. Memorable Celebrations.</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            Authentic South Indian vegetarian and non-vegetarian catering for weddings, family
            functions and corporate occasions.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Get in touch</p>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-gold">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              {contactInfo.location}
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto w-full max-w-7xl px-5 py-6 text-xs text-primary-foreground/60 sm:px-8">
          © 2026 Annapuranam Catering. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
