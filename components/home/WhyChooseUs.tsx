import Image from "next/image";
import {
  Factory,
  Gem,
  Ruler,
  Sparkles,
  Truck,
  Wallet,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { img } from "@/data/images";

const reasons = [
  {
    icon: Factory,
    title: "Own Manufacturing",
    text: "Control over quality, timelines and custom requests from our workshop.",
  },
  {
    icon: Gem,
    title: "Quality Materials",
    text: "Thoughtful selection of wood, foam, hardware and finishes.",
  },
  {
    icon: Ruler,
    title: "Custom Sizes & Designs",
    text: "Furniture planned for your room measurements and lifestyle.",
  },
  {
    icon: Sparkles,
    title: "Experienced Craftsmanship",
    text: "Detailing that holds up to daily family use.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    text: "Fair quotations for made-to-order and showroom pieces.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    text: "Coordinated delivery and installation support across Ahmedabad.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-espresso px-4 py-16 text-ivory sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={img.sofaGreen}
              alt="Premium sofa craftsmanship detail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
        <div>
          <SectionHeading
            eyebrow="Why Us"
            title="Why Choose THE CLASSIC FURNITURE"
            description="A showroom you can visit and a manufacturing team that builds for your space."
            light
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <FadeIn key={reason.title} delay={i * 0.05}>
                <div className="rounded-xl border border-ivory/10 bg-ivory/5 p-4">
                  <reason.icon
                    className="mb-3 h-5 w-5 text-stone"
                    aria-hidden
                  />
                  <h3 className="font-display text-lg">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/70">
                    {reason.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
