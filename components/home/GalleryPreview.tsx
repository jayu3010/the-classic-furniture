import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function GalleryPreview() {
  const preview = galleryItems.slice(0, 7);

  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Inspiration"
            title="Furniture Inspiration"
            description="Living rooms, bedrooms, dining spaces, custom projects and glimpses of our showroom and workshop."
          />
        </FadeIn>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {preview.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.04} className="mb-4 break-inside-avoid">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={800}
                  height={i % 2 === 0 ? 1000 : 700}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
