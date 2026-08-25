import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { siteConfig } from "@/data/site-config";
import {
  breadcrumbJsonLd,
  buildMetadata,
  JsonLd,
} from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { ProductCard } from "@/components/products/ProductCard";
import { CategoryCard } from "@/components/products/CategoryCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ShowroomBlock } from "@/components/shared/ShowroomBlock";
import { FadeIn } from "@/components/shared/FadeIn";
import type { CategorySlug } from "@/types";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return buildMetadata({
      title: "Category Not Found",
      description: "This furniture category could not be found.",
      path: `/furniture/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/furniture/${category.slug}`,
    image: category.image,
    keywords: [
      `${category.name} Ahmedabad`,
      `${category.name} furniture showroom`,
    ],
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug as CategorySlug);
  const related = categories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Furniture", path: "/furniture" },
          { name: category.name, path: `/furniture/${category.slug}` },
        ])}
      />

      <PageHero
        eyebrow="Furniture"
        title={category.name}
        description={category.description}
        image={category.image}
        imageAlt={category.imageAlt}
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <FadeIn>
            <SectionHeading
              title={`${category.name} Collection`}
              description={`Explore ${category.name.toLowerCase()} available at our ${siteConfig.city} furniture showroom. Enquire for custom sizes and finishes.`}
            />
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>

          {products.length === 0 ? (
            <p className="mt-8 font-sans text-muted">
              Pieces in this category rotate often.{" "}
              <Link href="/contact" className="text-walnut underline-offset-4 hover:underline">
                Visit our showroom
              </Link>{" "}
              or enquire on WhatsApp for current availability.
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-stone/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            title="Related Categories"
            description="Continue browsing our furniture collections."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <CategoryCard key={item.id} category={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Prefer something made for your room?"
        text="Custom sizes, materials and finishes — crafted in our Ahmedabad manufacturing facility."
        actions={[
          {
            label: "Request Custom Furniture",
            href: "/custom-furniture",
            variant: "outline",
          },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />

      <ShowroomBlock />
    </>
  );
}
