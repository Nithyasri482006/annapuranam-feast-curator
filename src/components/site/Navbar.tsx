import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled ? "h-16" : "h-20 sm:h-24",
        )}
      >
        <Link to="/" aria-label="Annapuranam Catering home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ "data-active": "true" }}
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[active=true]:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full group-data-[active=true]:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-primary shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft sm:inline-flex"
          >
            Book Catering
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-6 sm:px-8" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ "data-active": "true" }}
              className="border-b border-border/50 py-3.5 font-display text-2xl text-foreground/85 transition-colors data-[active=true]:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-primary"
          >
            Book Catering
          </Link>
        </nav>
      </div>
    </header>
  );
}
