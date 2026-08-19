import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, ArrowRight } from "lucide-react";
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
    <footer className="relative bg-gradient-to-b from-primary to-[#0c1f13] text-white overflow-hidden border-t-[6px] border-gold">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
      <div className="absolute -top-[300px] -right-[300px] w-[700px] h-[700px] rounded-full bg-gold/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-green-900/20 blur-[150px] pointer-events-none"></div>
      
      {/* Top CTA Section */}
      <div className="border-b border-white/10 relative z-10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row lg:py-12">
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl text-gold mb-2 drop-shadow-sm">Ready to plan your Virundhu?</h3>
            <p className="text-white/80 max-w-md font-light">Contact us today to discuss your event requirements and let us curate a memorable culinary experience.</p>
          </div>
          <Link to="/contact" className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-[#d4af37] px-8 py-4 font-semibold text-primary transition-all hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:scale-[1.02]">
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 lg:py-20 relative z-10">
        
        {/* Brand Column */}
        <div className="md:col-span-12 lg:col-span-4">
          <div className="flex items-center gap-4">
            <KalashMark className="h-12 w-12 text-gold drop-shadow-md" />
            <div>
              <p className="font-display text-2xl tracking-wide">Annapaathiram</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mt-0.5">Catering Services</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/70 font-light pr-4">
            Authentic South Indian vegetarian and non-vegetarian catering for weddings, family
            functions and corporate occasions, served with traditional hospitality and warmth.
          </p>
          
          <div className="mt-8 flex gap-4">
            {[
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Facebook, label: "Facebook", href: "#" },
              { Icon: Youtube, label: "YouTube", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-gold hover:border-gold hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,215,0,0.3)]"
              >
                <Icon className="h-4 w-4 text-white/80 transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
          <p className="font-display text-xl text-gold mb-6 relative inline-block">
            Explore
            <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold/50 rounded-full"></span>
          </p>
          <ul className="space-y-3.5 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group flex items-center text-white/75 transition-colors hover:text-gold"
                >
                  <span className="w-0 h-[2px] bg-gold mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2 rounded-full"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="md:col-span-4 lg:col-span-2">
          <p className="font-display text-xl text-gold mb-6 relative inline-block">
            Services
            <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold/50 rounded-full"></span>
          </p>
          <ul className="space-y-3.5 text-sm text-white/75">
            {[
              "Wedding Feasts",
              "Corporate Catering",
              "Private Parties",
              "Custom Menus",
              "Live Food Counters"
            ].map((service, idx) => (
              <li key={idx} className="group flex items-center transition-colors hover:text-gold cursor-pointer">
                <span className="w-0 h-[2px] bg-gold mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2 rounded-full"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 lg:col-span-3">
          <p className="font-display text-xl text-gold mb-6 relative inline-block">
            Get in touch
            <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gold/50 rounded-full"></span>
          </p>
          <ul className="space-y-5 text-sm text-white/75">
            <li className="flex items-start gap-4 group cursor-pointer">
              <div className="mt-0.5 p-2 rounded-full bg-white/5 border border-white/10 text-gold group-hover:bg-gold group-hover:text-primary transition-colors duration-300 shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="leading-relaxed group-hover:text-white transition-colors duration-300 pt-1">{contactInfo.location}</span>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="p-2 rounded-full bg-white/5 border border-white/10 text-gold group-hover:bg-gold group-hover:text-primary transition-colors duration-300 shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="group-hover:text-white transition-colors duration-300 pt-0.5">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="p-2 rounded-full bg-white/5 border border-white/10 text-gold group-hover:bg-gold group-hover:text-primary transition-colors duration-300 shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <a href={`mailto:${contactInfo.email}`} className="group-hover:text-white transition-colors duration-300 pt-0.5">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/30 backdrop-blur-md relative z-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
          <div className="text-sm text-white/50 font-light">
            © {new Date().getFullYear()} Annapaathiram Catering. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-white/50 font-light">
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
