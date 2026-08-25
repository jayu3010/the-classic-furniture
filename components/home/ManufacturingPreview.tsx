import Link from "next/link";
import {
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Package,
  Palette,
  Ruler,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

const steps = [
  { icon: Palette, label: "Design" },
  { icon: Ruler, label: "Material Selection" },
  { icon: Hammer, label: "Craftsmanship" },
  { icon: Package, label: "Finishing" },
  { icon: ClipboardCheck, label: "Quality Check" },
  { icon: CheckCircle2, label: "Delivery" },
];

export function ManufacturingPreview() {
  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Own Manufacturing"
            title="Designed with Care. Crafted with Precision."
            description="We are a furniture showroom and manufacturer in Ahmedabad — so you can follow the journey from sketch to finished piece."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, i) => (
            <FadeIn key={step.label} delay={i * 0.06}>
              <div className="relative flex flex-col items-center rounded-xl border border-walnut/10 bg-stone/30 px-4 py-6 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-walnut text-ivory">
                  <step.icon className="h-5 w-5" aria-hidden />
                </div>
                <p className="font-display text-lg text-espresso">{step.label}</p>
                {i < steps.length - 1 ? (
                  <span
                    className="absolute top-1/2 -right-3 hidden text-walnut/40 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/manufacturing">Explore Our Manufacturing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
