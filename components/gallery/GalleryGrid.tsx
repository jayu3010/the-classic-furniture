"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryFilters, galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]["value"]>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const filtered = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const activeItem: GalleryItem | null =
    activeIndex !== null ? filtered[activeIndex] ?? null : null;

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null || filtered.length === 0) return i;
      return (i - 1 + filtered.length) % filtered.length;
    });
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null || filtered.length === 0) return i;
      return (i + 1) % filtered.length;
    });
  }, [filtered.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="space-y-10">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Gallery filters"
      >
        {galleryFilters.map((item) => {
          const selected = filter === item.value;
          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setFilter(item.value);
                setActiveIndex(null);
              }}
              className={cn(
                "rounded-md px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40",
                selected
                  ? "bg-walnut text-ivory"
                  : "bg-stone text-ink hover:bg-walnut/10",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
              aria-label={`Open ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-80"
                aria-hidden
              />
              <span className="absolute inset-x-0 bottom-0 p-4 text-left font-display text-lg text-ivory">
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="font-sans text-muted">No images in this category yet.</p>
      ) : null}

      {activeItem ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close lightbox"
            onClick={closeLightbox}
          />

          <div className="relative z-10 flex w-full max-w-5xl flex-col gap-4">
            <div className="flex items-center justify-between gap-4 text-ivory">
              <h2 id={titleId} className="font-display text-xl sm:text-2xl">
                {activeItem.title}
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={closeLightbox}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ivory hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/50"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-ink/40 sm:aspect-[16/10]">
              <Image
                src={activeItem.image}
                alt={activeItem.imageAlt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={showPrev}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-ivory hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/50"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous
              </button>
              <p className="text-sm text-ivory/70">
                {(activeIndex ?? 0) + 1} / {filtered.length}
              </p>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-ivory hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/50"
                aria-label="Next image"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
