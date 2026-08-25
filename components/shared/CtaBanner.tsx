import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaAction = {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "outline" | "whatsapp";
  external?: boolean;
};

type CtaBannerProps = {
  heading: string;
  text?: string;
  actions: CtaAction[];
  className?: string;
  tone?: "dark" | "light";
};

export function CtaBanner({
  heading,
  text,
  actions,
  className,
  tone = "dark",
}: CtaBannerProps) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        dark
          ? "bg-espresso text-ivory"
          : "bg-stone text-espresso",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-40",
          dark
            ? "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-walnut/40 via-transparent to-transparent"
            : "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-walnut/15 via-transparent to-transparent",
        )}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            {heading}
          </h2>
          {text ? (
            <p
              className={cn(
                "font-sans text-base leading-relaxed sm:text-lg",
                dark ? "text-ivory/80" : "text-muted",
              )}
            >
              {text}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          {actions.map((action) => (
            <Button
              key={action.label}
              asChild
              variant={
                action.variant ??
                (dark ? "outline" : "default")
              }
              size="lg"
            >
              {action.external ? (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {action.label}
                </a>
              ) : (
                <Link href={action.href}>{action.label}</Link>
              )}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
