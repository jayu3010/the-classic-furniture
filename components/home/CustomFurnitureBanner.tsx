import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/FadeIn";
import { imgW } from "@/data/images";

export function CustomFurnitureBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imgW("workshopTools", 1800)}
          alt="Furniture workshop crafting custom pieces"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-espresso/70" aria-hidden />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn>
          <div className="max-w-xl text-ivory">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">
              Furniture Made for Your Space
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/85 sm:text-lg">
              From custom sizes and materials to colours and finishes, we create
              furniture designed around your home and your requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-ivory text-espresso hover:bg-stone"
            >
              <Link href="/custom-furniture">Create Your Custom Furniture</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
