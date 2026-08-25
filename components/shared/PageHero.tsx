import Image from "next/image";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export function PageHero({
  title,
  description,
  eyebrow,
  image,
  imageAlt = "",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        image ? "min-h-[42vh] sm:min-h-[48vh]" : "bg-stone",
        className,
      )}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/55 to-espresso/35"
            aria-hidden
          />
        </>
      ) : null}

      <div
        className={cn(
          "relative mx-auto flex max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 sm:py-20 lg:px-8",
          image ? "min-h-[42vh] sm:min-h-[48vh]" : "",
        )}
      >
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p
              className={cn(
                "text-xs font-medium tracking-[0.22em] uppercase",
                image ? "text-ivory/75" : "text-walnut",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl",
              image ? "text-ivory" : "text-espresso",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "max-w-2xl font-sans text-base leading-relaxed sm:text-lg",
                image ? "text-ivory/85" : "text-muted",
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
