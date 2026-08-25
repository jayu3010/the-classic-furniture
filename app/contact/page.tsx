import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { getPhoneTelHref, getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = buildMetadata({
  title: `Contact Us | ${siteConfig.name} Ahmedabad Showroom`,
  description:
    "Visit THE CLASSIC FURNITURE showroom in Ahmedabad, call or WhatsApp for furniture enquiries, custom work and directions.",
  path: "/contact",
  keywords: [
    "furniture showroom contact Ahmedabad",
    "Classic Furniture Vatva",
    "furniture shop phone Ahmedabad",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Visit, call or message us"
        description={`We are open ${siteConfig.openingHours}. Reach us by phone, WhatsApp or at our New Vatva Road showroom.`}
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Showroom"
              title={`${siteConfig.name}`}
              description="Tap below on mobile to call, message or open directions."
            />

            <ul className="mt-10 space-y-6 font-sans">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-walnut" aria-hidden />
                <div>
                  <p className="font-medium text-espresso">Address</p>
                  <p className="mt-1 text-muted leading-relaxed">
                    {siteConfig.address.full}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-walnut" aria-hidden />
                <div>
                  <p className="font-medium text-espresso">Phone</p>
                  <a
                    href={getPhoneTelHref()}
                    className="mt-1 inline-block text-muted hover:text-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-walnut" aria-hidden />
                <div>
                  <p className="font-medium text-espresso">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-block text-muted hover:text-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-6 text-sm text-muted">
              Opening hours: {siteConfig.openingHours}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={getPhoneTelHref()}>Call</a>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="relative mt-10 min-h-[260px] overflow-hidden rounded-lg bg-stone sm:min-h-[320px]">
              <iframe
                title={`${siteConfig.name} location map`}
                src={siteConfig.googleMapsEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-walnut/10 bg-stone/30 p-6 sm:p-8">
              <h2 className="font-display text-2xl text-espresso tracking-tight sm:text-3xl">
                Send an enquiry
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                Share a few details and continue on WhatsApp for the fastest
                reply. No account required.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
