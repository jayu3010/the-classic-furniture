import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { getCategoryBySlug } from "@/data/categories";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg bg-ivory",
        className,
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-[4/5] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 px-1 pt-5 pb-2">
        {category ? (
          <p className="text-xs tracking-[0.16em] text-walnut uppercase">
            {category.name}
          </p>
        ) : null}
        <h3 className="font-display text-xl text-espresso tracking-tight">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
          >
            {product.name}
          </Link>
        </h3>
        <p className="font-sans text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-medium text-walnut underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
          >
            View Details
          </Link>
          {product.enquireForPrice ? (
            <span className="text-sm text-muted">Enquire for Price</span>
          ) : product.priceLabel ? (
            <span className="text-sm text-muted">{product.priceLabel}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
