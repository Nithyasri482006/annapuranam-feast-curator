import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Logo";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { CateringPlannerForm } from "./CateringPlanner";

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
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isSolid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isSolid
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-gold/20 py-3"
          : "bg-transparent border-b border-transparent py-5 sm:py-6"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 relative">
        <Link to="/" aria-label="Annapaathiram Catering home" onClick={() => setOpen(false)} className="z-50">
          <Wordmark tone={isSolid ? "default" : "inverse"} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ "data-active": "true" }}
              className={cn(
                "group relative text-[15px] font-medium transition-colors hover:text-gold data-[active=true]:text-gold tracking-wide",
                isSolid ? "text-foreground/80" : "text-primary-foreground/95"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full group-data-[active=true]:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 z-50">
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gold px-7 py-2.5 text-sm font-medium text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:bg-gold-soft border border-transparent hover:border-primary/10"
          >
            Book Now
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gold/20 hover:text-gold lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
              isSolid ? "text-foreground/80" : "text-primary-foreground"
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={cn(
          "absolute inset-x-0 top-full overflow-hidden border-b border-gold/10 bg-background/98 backdrop-blur-xl transition-all duration-500 ease-in-out lg:hidden shadow-lg",
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0 border-transparent shadow-none"
        )}
      >
        <div className="flex flex-col px-5 py-8 sm:px-8 h-full max-h-[80vh] overflow-y-auto">
          {/* Subtle gold decoration at the top of the menu */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
          
          <nav className="flex flex-col gap-6 text-center" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ "data-active": "true" }}
                className="font-display text-3xl tracking-wide text-foreground/85 transition-colors hover:text-gold data-[active=true]:text-gold relative inline-block mx-auto w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setBookingOpen(true);
              }}
              className="inline-flex w-full max-w-[220px] items-center justify-center rounded-full bg-gold px-6 py-3.5 text-[15px] font-medium tracking-wide text-primary shadow-sm transition-all hover:bg-gold-soft active:scale-95"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      {/* Booking Sheet */}
      <Sheet open={bookingOpen} onOpenChange={setBookingOpen}>
        <SheetContent className="overflow-y-auto sm:max-w-md w-full">
          <CateringPlannerForm onSuccess={() => setBookingOpen(false)} />
        </SheetContent>
      </Sheet>
    </header>
  );
}

