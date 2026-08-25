"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { imgW } from "@/data/images";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden sm:min-h-[85vh]">
      <Image
        src={imgW("livingWarm", 2000)}
        alt="Premium living room furniture in a warm modern interior"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/55 to-espresso/25"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 py-16 sm:min-h-[85vh] sm:px-6 sm:py-24 lg:px-8 lg:justify-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-ivory"
        >
          <p className="mb-4 text-xs tracking-[0.28em] text-ivory/75 uppercase">
            THE CLASSIC FURNITURE · Ahmedabad
          </p>
          <h1 className="font-display text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Crafted for the Way You Live
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
            Discover beautifully crafted furniture designed to bring comfort,
            style and timeless elegance to every space.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-ivory text-espresso hover:bg-stone">
              <Link href="/furniture">Explore Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Visit Our Showroom</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
