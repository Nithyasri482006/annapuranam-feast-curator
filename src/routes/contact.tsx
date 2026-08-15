import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { contactInfo, images } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Catering — Annapuranam Catering" },
      {
        name: "description",
        content:
          "Send a catering enquiry for weddings, birthdays, corporate events and family functions. We will get in touch soon.",
      },
      { property: "og:title", content: "Let's Make Your Celebration Delicious" },
      {
        property: "og:description",
        content: "Share your event details and we will design a South Indian catering menu for it.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { Icon: Phone, label: "Call Us", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
    { Icon: MessageCircle, label: "WhatsApp", value: contactInfo.whatsapp, href: contactInfo.whatsappLink },
    { Icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { Icon: MapPin, label: "Location", value: contactInfo.location },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Enquiry"
        title="Let's Make Your Celebration Delicious"
        subtitle="Tell us about your event and our team will get back to you with a customized menu."
        image={images.dishSappadu}
      />

      <Section>
        <div id="enquiry" className="grid scroll-mt-28 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-gold">Get in touch</p>
            <h2 className="mt-4 text-3xl leading-tight text-primary sm:text-4xl">
              We would love to cater for you
            </h2>
            <span className="gold-rule mt-6" />
            <ul className="mt-9 space-y-6">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-gold">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="eyebrow text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-base text-primary transition-colors hover:text-gold"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base text-primary">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
              Contact details shown are placeholders and can be replaced with your business
              information. {contactInfo.serviceArea}.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
