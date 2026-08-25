import {
  Award,
  Factory,
  Hammer,
  HeartHandshake,
} from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";

const highlights = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Materials and finishes chosen for lasting everyday comfort.",
  },
  {
    icon: Hammer,
    title: "Custom Designs",
    description: "Sizes, fabrics and details planned around your home.",
  },
  {
    icon: Factory,
    title: "Own Manufacturing",
    description: "Crafted in our workshop — not only resold from catalogues.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Service",
    description: "Clear guidance from showroom visit to delivery.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-walnut/10 bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-14">
        {highlights.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone text-walnut">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-lg text-espresso">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
