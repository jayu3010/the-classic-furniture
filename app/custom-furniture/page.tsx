import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { FadeIn } from "@/components/shared/FadeIn";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site-config";
import { img, imgW } from "@/data/images";

export const metadata: Metadata = buildMetadata({
  title: `Custom Furniture in Ahmedabad | ${siteConfig.name}`,
  description:
    "Request custom sofas, wardrobes, beds, dining tables and more. Designed and crafted by THE CLASSIC FURNITURE in our Ahmedabad manufacturing facility.",
  path: "/custom-furniture",
  keywords: [
    "custom furniture Ahmedabad",
    "made to order furniture Gujarat",
    "custom sofa Ahmedabad",
  ],
});

const customTypes = [
  {
    title: "Custom Sofa",
    description: "Sectionals, modular layouts and fabric choices for your living room.",
  },
  {
    title: "Custom Wardrobe",
    description: "Sliding or hinged systems planned around your walls and storage needs.",
  },
  {
    title: "Custom Bed",
    description: "Storage beds, headboards and sizes tailored to your bedroom.",
  },
  {
    title: "Custom TV Unit",
    description: "Media consoles sized for your wall and device setup.",
  },
  {
    title: "Custom Dining Table",
    description: "Lengths, finishes and seating counts for family dining.",
  },
  {
    title: "Office Furniture",
    description: "Desks and storage for home offices and small commercial spaces.",
  },
];

const processSteps = [
  "Share Your Requirement",
  "Choose Design & Material",
  "Get a Quote",
  "We Craft It",
  "Delivery & Installation",
];

export default function CustomFurniturePage() {
  return (
    <>
      <PageHero
        eyebrow="Made to Measure"
        title="Your Idea. Our Craftsmanship."
        description="From custom sizes and materials to colours and finishes, we create furniture designed around your home — manufactured in Ahmedabad."
        image={imgW("livingModern", 1600)}
        imageAlt="Custom furnished living interior"
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Make"
              title="Furniture built around your space"
              description="Share measurements, inspiration photos or a rough sketch — our team helps refine the design before manufacturing begins."
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {customTypes.map((item) => (
              <div
                key={item.title}
                className="border-t border-walnut/20 pt-5"
              >
                <h3 className="font-display text-xl text-espresso">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="From idea to installation"
            description="A clear path from first conversation to furniture in your home."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step} className="relative">
                <span className="font-display text-3xl text-walnut/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-sans text-sm font-medium text-espresso">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[5/6]">
              <Image
                src={img.workshopTools}
                alt="Furniture craftsmanship in a workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <SectionHeading
                eyebrow="Enquire"
                title="Tell us what you need"
                description="Fill in the form for a visual summary, then continue on WhatsApp — our primary way to respond quickly with options and quotes."
              />
              <div className="mt-8">
                <EnquiryForm />
              </div>
              <div className="mt-6">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={getWhatsAppUrl(
                      "Hello, I would like to discuss custom furniture.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prefer WhatsApp? Message us now
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        heading="Visit the showroom to feel the materials"
        text={`See finishes and fabrics in person at ${siteConfig.name}, ${siteConfig.city}.`}
        actions={[
          { label: "Get Directions", href: "/contact", variant: "outline" },
          { label: "Call Us", href: `tel:+91${siteConfig.phone}`, variant: "secondary", external: true },
        ]}
      />
    </>
  );
}
