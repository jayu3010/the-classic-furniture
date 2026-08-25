import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/categories";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { siteConfig } from "@/data/site-config";
import {
  breadcrumbJsonLd,
  buildMetadata,
  JsonLd,
  productJsonLd,
} from "@/lib/seo";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "This furniture product could not be found.",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products/${product.slug}`,
    image: product.images[0],
    keywords: [product.name, `${product.category} Ahmedabad`],
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Furniture", path: "/furniture" },
            ...(category
              ? [
                  {
                    name: category.name,
                    path: `/furniture/${category.slug}`,
                  },
                ]
              : []),
            { name: product.name, path: `/products/${product.slug}` },
          ]),
          productJsonLd({
            name: product.name,
            description: product.description,
            images: product.images,
            slug: product.slug,
            category: category?.name ?? product.category,
          }),
        ]}
      />

      <article className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <FadeIn>
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {product.images.length > 1 ? (
                <div className="grid grid-cols-3 gap-3">
                  {product.images.slice(1).map((src, index) => (
                    <div
                      key={src}
                      className="relative aspect-square overflow-hidden rounded-md bg-stone"
                    >
                      <Image
                        src={src}
                        alt={`${product.name} view ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 33vw, 16vw"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col lg:pt-2">
              {category ? (
                <Link
                  href={`/furniture/${category.slug}`}
                  className="text-xs font-medium tracking-[0.2em] text-walnut uppercase hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
                >
                  {category.name}
                </Link>
              ) : null}
              <h1 className="mt-3 font-display text-4xl tracking-tight text-espresso sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 font-sans text-lg leading-relaxed text-muted">
                {product.shortDescription}
              </p>
              <p className="mt-6 font-sans leading-relaxed text-ink/80">
                {product.description}
              </p>

              {product.enquireForPrice ? (
                <p className="mt-6 text-sm font-medium text-walnut">
                  Enquire for Price
                </p>
              ) : null}

              <dl className="mt-8 space-y-4 border-t border-walnut/10 pt-8">
                <Spec label="Material" value={product.material} />
                <Spec label="Dimensions" value={product.dimensions} />
                <Spec label="Colours" value={product.colours.join(", ")} />
                <Spec label="Finish" value={product.finish} />
                <Spec
                  label="Customization"
                  value={
                    product.customizable
                      ? "Available — sizes, fabrics and finishes on request"
                      : "Standard configuration"
                  }
                />
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={getProductWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">Visit Showroom</Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted">
                Available to view at our {siteConfig.city} showroom. Bring your
                room measurements for a clearer recommendation.
              </p>
            </div>
          </FadeIn>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-walnut/10 bg-stone/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <SectionHeading
              title="Related Pieces"
              description="More from this collection."
            />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBanner
        heading="Want this piece customized?"
        text="Adjust dimensions, materials or finishes — our manufacturing team builds furniture around your space."
        actions={[
          {
            label: "Custom Furniture",
            href: "/custom-furniture",
            variant: "outline",
          },
          {
            label: "WhatsApp Enquiry",
            href: getProductWhatsAppUrl(product.name),
            variant: "whatsapp",
            external: true,
          },
        ]}
      />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
      <dt className="text-sm font-medium text-espresso">{label}</dt>
      <dd className="font-sans text-sm leading-relaxed text-muted">{value}</dd>
    </div>
  );
}
