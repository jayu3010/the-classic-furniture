import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FadeIn } from "@/components/shared/FadeIn";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import { imgW } from "@/data/images";

export const metadata: Metadata = buildMetadata({
  title: `Furniture Gallery | ${siteConfig.name} Ahmedabad`,
  description:
    "Browse living rooms, bedrooms, dining spaces, custom projects and our Ahmedabad showroom — furniture photography from THE CLASSIC FURNITURE.",
  path: "/gallery",
  keywords: [
    "furniture gallery Ahmedabad",
    "showroom furniture photos",
    "custom furniture projects",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Inspiration"
        title="Furniture Gallery"
        description="A visual look at spaces, finishes and craftsmanship — from living rooms to our manufacturing workshop."
        image={imgW("livingWarm", 1600)}
        imageAlt="Warm living room furniture setting"
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <GalleryGrid />
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        heading="See pieces in person"
        text="Photographs help — the showroom lets you feel foam, fabric and finish before you decide."
        actions={[
          { label: "Visit Showroom", href: "/contact", variant: "outline" },
          { label: "Browse Furniture", href: "/furniture", variant: "secondary" },
        ]}
      />
    </>
  );
}
