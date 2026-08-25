import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import { img, imgW } from "@/data/images";

export const metadata: Metadata = buildMetadata({
  title: `Furniture Manufacturer in Ahmedabad | ${siteConfig.name}`,
  description:
    "Learn how THE CLASSIC FURNITURE designs, crafts and finishes furniture in our own manufacturing facility in Ahmedabad, Gujarat.",
  path: "/manufacturing",
  keywords: [
    "furniture manufacturer Ahmedabad",
    "furniture workshop Gujarat",
    "custom furniture manufacturing",
  ],
  image: img.workshopTools,
});

const processTimeline = [
  {
    title: "Design",
    text: "We refine proportions, storage needs and style with you before production starts.",
  },
  {
    title: "Material",
    text: "Boards, veneers, fabrics and hardware are selected for durability and finish quality.",
  },
  {
    title: "Production",
    text: "Cutting, joinery and assembly happen in our workshop with attention to structure.",
  },
  {
    title: "Finishing",
    text: "Edges, surfaces and upholstery are finished for everyday use and a refined look.",
  },
  {
    title: "Quality Check",
    text: "Each piece is reviewed for fit, finish and function before it leaves the workshop.",
  },
  {
    title: "Ready for Your Home",
    text: "Delivery and installation are planned so the furniture settles cleanly into your space.",
  },
];

const materials = [
  "Engineered wood & solid wood options",
  "Laminates and veneers",
  "Foam and upholstery fabrics",
  "Hardware for soft-close and sliding systems",
  "Protective matte and PU finishes",
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Own Manufacturing"
        title="Designed with Care. Crafted with Precision."
        description="We are a furniture showroom and manufacturer in Ahmedabad — not only a reseller. See how pieces move from design to delivery in our workshop."
        image={imgW("materialsWood", 1600)}
        imageAlt="Wood materials prepared for furniture making"
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Manufacturing"
              title="Built in-house for lasting everyday use"
              description={`At ${siteConfig.name}, manufacturing sits beside the showroom experience. That means clearer communication on sizes, finishes and timelines — and furniture made for how Indian homes are actually lived in.`}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={img.workshopTools}
                alt="Woodworking craftsmanship for furniture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-stone/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="A clear path from drawing to delivery"
            description="Every commission follows a thoughtful sequence so quality stays consistent."
          />
          <ol className="mt-14 space-y-0">
            {processTimeline.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-4 border-t border-walnut/15 py-8 sm:grid-cols-[8rem_1fr] sm:gap-10"
              >
                <div className="flex items-baseline gap-3 sm:block">
                  <span className="font-display text-2xl text-walnut">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-espresso sm:mt-1">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sans leading-relaxed text-muted sm:pt-2">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Materials"
              title="Materials we work with"
              description="We balance aesthetics with practicality — finishes that look refined and hold up to daily life."
            />
            <ul className="mt-8 space-y-3">
              {materials.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 font-sans text-ink/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-walnut" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl text-espresso">
                Craftsmanship
              </h3>
              <p className="mt-3 font-sans leading-relaxed text-muted">
                Joinery, foam density, edge detailing and hardware choice all
                affect how furniture feels after years of use. Our workshop
                focuses on structure first, then the finish you see and touch.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-espresso">
                Quality Control
              </h3>
              <p className="mt-3 font-sans leading-relaxed text-muted">
                Before delivery, we check alignment, movement of doors and
                drawers, upholstery tension and surface consistency — so what
                arrives matches what you approved.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-espresso">
                Custom Manufacturing
              </h3>
              <p className="mt-3 font-sans leading-relaxed text-muted">
                Made-to-measure work is a core part of our practice — from
                awkward alcoves to open-plan living rooms that need a precise
                seating footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to discuss a made-to-order piece?"
        text="Start with a WhatsApp enquiry or visit our Ahmedabad showroom with your measurements."
        actions={[
          {
            label: "Custom Furniture",
            href: "/custom-furniture",
            variant: "outline",
          },
          { label: "Contact Showroom", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
