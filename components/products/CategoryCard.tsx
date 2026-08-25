import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: Category;
  className?: string;
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={`/furniture/${category.slug}`}
      className={cn(
        "group relative block aspect-[4/5] overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40 focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent transition-opacity duration-500 group-hover:from-espresso/90"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-display text-2xl text-ivory tracking-tight">
          {category.name}
        </h3>
        <p className="mt-1 line-clamp-2 font-sans text-sm text-ivory/80">
          {category.shortDescription}
        </p>
      </div>
    </Link>
  );
}
