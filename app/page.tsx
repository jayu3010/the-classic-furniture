import { HomeHero } from "@/components/home/HomeHero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { CustomFurnitureBanner } from "@/components/home/CustomFurnitureBanner";
import { ManufacturingPreview } from "@/components/home/ManufacturingPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { VisitShowroom } from "@/components/home/VisitShowroom";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Furniture Showroom & Manufacturer in Ahmedabad`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ShopByCategory />
      <FeaturedCollection />
      <CustomFurnitureBanner />
      <ManufacturingPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <VisitShowroom />
      <CtaBanner
        heading="Looking for Furniture That Feels Like Home?"
        text="Browse our collection or visit the showroom in Ahmedabad to start your enquiry."
        actions={[
          { label: "Explore Furniture", href: "/furniture", variant: "outline" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
