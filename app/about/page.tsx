import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { ShowroomBlock } from "@/components/shared/ShowroomBlock";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import { img, imgW } from "@/data/images";

export const metadata: Metadata = buildMetadata({
  title: `About Us | ${siteConfig.name} Ahmedabad`,
  description:
    "Meet THE CLASSIC FURNITURE — a warm Ahmedabad furniture showroom and manufacturer focused on thoughtful design, solid craftsmanship and custom work.",
  path: "/about",
  keywords: [
    "about Classic Furniture Ahmedabad",
    "furniture manufacturer story",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Furniture rooted in Ahmedabad homes"
        description="We started with a simple belief: furniture should feel considered in real rooms — not only look good in a catalogue."
        image={imgW("sofaGreen", 1600)}
        imageAlt="Premium sofa in a bright living room"
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Why we began"
              title="A showroom that also makes"
              description={`${siteConfig.name} grew from conversations with families who wanted better proportions, honest materials and the option to customise. Owning manufacturing lets us answer those requests with clarity — sizes that fit, finishes that match, and timelines we can stand behind.`}
            />
            <p className="mt-6 font-sans leading-relaxed text-muted">
              Today we welcome customers to our showroom on New Vatva Road while
              crafting pieces in our workshop. Whether you choose a ready design
              or something made to measure, the goal stays the same: furniture
              that settles comfortably into everyday life.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={img.livingModern}
                alt="Thoughtfully furnished living space"
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
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-espresso sm:text-3xl">
                Mission
              </h2>
              <p className="mt-4 font-sans leading-relaxed text-muted">
                To help people furnish their homes with pieces that balance
                comfort, craftsmanship and lasting design — with transparent
                guidance from first enquiry to installation.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-espresso sm:text-3xl">
                Vision
              </h2>
              <p className="mt-4 font-sans leading-relaxed text-muted">
                To be Ahmedabad&apos;s trusted place for premium and custom
                furniture — where showroom experience and manufacturing skill
                work as one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="What we value"
            title="Craft, care and clear conversation"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Own manufacturing",
                text: "In-house production means we can customise with fewer middle steps and better control of quality.",
              },
              {
                title: "Experienced craftsmanship",
                text: "From frames to finishes, we prioritise structure and detail that hold up to daily family use.",
              },
              {
                title: "Commitment to quality",
                text: "We would rather refine a specification than rush a piece that will not feel right in your home.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-walnut/20 pt-5">
                <h3 className="font-display text-xl text-espresso">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShowroomBlock />

      <CtaBanner
        heading="Come say hello"
        text="Browse the floor, talk through a custom idea, or simply feel the fabrics — we are open every day."
        actions={[
          { label: "Contact Us", href: "/contact", variant: "outline" },
          { label: "Explore Furniture", href: "/furniture", variant: "secondary" },
        ]}
      />
    </>
  );
}
