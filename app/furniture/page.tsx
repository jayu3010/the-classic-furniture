import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FurnitureBrowser } from "@/components/furniture/FurnitureBrowser";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import { imgW } from "@/data/images";

export const metadata: Metadata = buildMetadata({
  title: `Furniture Collection | ${siteConfig.name} Ahmedabad`,
  description:
    "Explore sofas, beds, dining tables, wardrobes and more at THE CLASSIC FURNITURE — a furniture showroom and manufacturer in Ahmedabad, Gujarat.",
  path: "/furniture",
  keywords: [
    "furniture collection Ahmedabad",
    "sofa shop Ahmedabad",
    "wooden furniture Ahmedabad",
  ],
});

export default function FurniturePage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Explore Our Furniture Collection"
        description="Browse premium furniture crafted for Indian homes — from everyday seating to made-to-measure storage — at our Ahmedabad showroom."
        image={imgW("livingWarm", 1600)}
        imageAlt="Styled living room with premium furniture"
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <FurnitureBrowser />
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        heading="Need something made to measure?"
        text="Share your room size and style preference — we craft custom furniture in our own manufacturing facility."
        actions={[
          { label: "Custom Furniture", href: "/custom-furniture", variant: "outline" },
          { label: "Visit Showroom", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
