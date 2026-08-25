import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { getPhoneTelHref, getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

type ShowroomBlockProps = {
  className?: string;
  showHeading?: boolean;
};

export function ShowroomBlock({
  className,
  showHeading = true,
}: ShowroomBlockProps) {
  return (
    <section className={cn("bg-ivory", className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="space-y-8">
          {showHeading ? (
            <SectionHeading
              eyebrow="Visit Us"
              title="Our Ahmedabad Showroom"
              description={`See finishes, fabrics and craftsmanship in person at ${siteConfig.name}.`}
            />
          ) : (
            <p className="font-display text-2xl text-espresso sm:text-3xl">
              {siteConfig.name}
            </p>
          )}

          <ul className="space-y-5 font-sans text-ink">
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
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-walnut" aria-hidden />
              <div>
                <p className="font-medium text-espresso">Opening Hours</p>
                <p className="mt-1 text-muted">{siteConfig.openingHours}</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
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
              <a href={getPhoneTelHref()}>Call Now</a>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={getWhatsAppUrl(
                  `Hello, I would like to visit the ${siteConfig.name} showroom.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-stone sm:min-h-[360px]">
          <iframe
            title={`${siteConfig.name} showroom location map`}
            src={siteConfig.googleMapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
