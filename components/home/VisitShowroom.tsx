import { ShowroomBlock } from "@/components/shared/ShowroomBlock";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function VisitShowroom() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Visit"
            title="Visit Our Showroom"
            description="See finishes in person, compare fabrics and talk through custom options at our Ahmedabad showroom."
          />
        </FadeIn>
      </div>
      <ShowroomBlock showHeading={false} className="pt-0" />
    </section>
  );
}
