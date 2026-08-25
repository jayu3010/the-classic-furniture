"use client";

import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { CategorySlug } from "@/types";
import { CategoryCard } from "@/components/products/CategoryCard";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

const allFilter = "all" as const;

type FilterValue = typeof allFilter | CategorySlug;

export function FurnitureBrowser() {
  const [filter, setFilter] = useState<FilterValue>(allFilter);

  const filteredProducts = useMemo(() => {
    if (filter === allFilter) return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="space-y-12">
      <div>
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-walnut uppercase">
          Browse by category
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Furniture category filter"
        >
          <FilterChip
            selected={filter === allFilter}
            onClick={() => setFilter(allFilter)}
            label="All"
          />
          {categories.map((category) => (
            <FilterChip
              key={category.slug}
              selected={filter === category.slug}
              onClick={() => setFilter(category.slug)}
              label={category.name}
            />
          ))}
        </div>
      </div>

      {filter === allFilter ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : null}

      <div>
        <h2 className="font-display text-2xl text-espresso tracking-tight sm:text-3xl">
          {filter === allFilter
            ? "All Pieces"
            : categories.find((c) => c.slug === filter)?.name}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 ? (
          <p className="mt-6 font-sans text-muted">
            No products in this category yet. Visit our showroom for more options.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onClick}
      className={cn(
        "rounded-md px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40",
        selected
          ? "bg-walnut text-ivory"
          : "bg-stone text-ink hover:bg-walnut/10",
      )}
    >
      {label}
    </button>
  );
}
