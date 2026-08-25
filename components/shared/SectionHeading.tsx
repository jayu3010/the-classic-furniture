import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-3",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-medium tracking-[0.22em] uppercase",
            light ? "text-ivory/70" : "text-walnut",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight tracking-tight sm:text-4xl",
          light ? "text-ivory" : "text-espresso",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "font-sans text-base leading-relaxed sm:text-lg",
            light ? "text-ivory/80" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
