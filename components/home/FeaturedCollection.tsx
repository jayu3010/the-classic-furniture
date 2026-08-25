import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function FeaturedCollection() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section className="bg-stone/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Featured"
            title="Featured Collection"
            description="A selection of pieces from our showroom — enquire for pricing and customisation options."
          />
        </FadeIn>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.05}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
