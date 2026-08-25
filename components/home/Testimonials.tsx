import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function Testimonials() {
  return (
    <section className="bg-stone/35 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Stories"
            title="What Our Customers Say"
            description="Placeholder stories you can replace with real customer feedback later. No platform ratings shown."
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.06}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-walnut/10 bg-ivory p-6 shadow-sm">
                <p className="flex-1 text-sm leading-relaxed text-ink/85">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-walnut/10 pt-4">
                  <cite className="not-italic">
                    <span className="font-medium text-espresso">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {item.location} · {item.furnitureType}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
