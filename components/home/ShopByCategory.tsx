import Link from "next/link";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/products/CategoryCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function ShopByCategory() {
  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Browse"
            title="Shop by Category"
            description="Explore furniture for every room — designed, displayed and often manufactured right here in Ahmedabad."
          />
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <FadeIn key={category.id} delay={i * 0.05}>
              <CategoryCard category={category} />
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Looking for something specific?{" "}
          <Link
            href="/furniture"
            className="font-medium text-walnut underline-offset-4 hover:underline"
          >
            View full collection
          </Link>
        </p>
      </div>
    </section>
  );
}
