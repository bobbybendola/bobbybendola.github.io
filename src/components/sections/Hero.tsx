import type { HeroContent } from "@/types/content";
import { Container } from "@/components/ui/Container";

interface HeroProps {
  content: HeroContent;
}

// Full-black section: a small floating image sits in open space above
// left-aligned text anchored near the bottom. A faint blue "atmosphere"
// glow sits right at the seam with the white section below — a subtle
// detail from the source, not a generic gradient background.
export function Hero({ content }: HeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-hero-bg">
      <Container className="flex min-h-[560px] flex-col justify-between py-10 md:min-h-[640px] md:py-14">
        <div className="flex flex-1 items-start justify-center pt-16">
          <img
            src={content.floatingImage.src}
            alt={content.floatingImage.alt}
            style={{ aspectRatio: content.floatingImage.aspectRatio }}
            className="w-24 object-contain opacity-90 md:w-28"
          />
        </div>

        <div className="flex flex-col gap-4 pb-6">
          <h1 className="text-3xl font-bold leading-tight text-hero-text md:text-4xl">
            {content.greeting}
            <br />
            {content.name}
          </h1>
          <p className="max-w-[52ch] text-sm text-hero-text-secondary md:text-base">{content.subheading}</p>
        </div>
      </Container>

      {/* Faint atmosphere-glow seam, matching the source's transition into the white section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
        style={{ background: "linear-gradient(to top, rgba(90, 120, 190, 0.35), transparent)" }}
      />
    </section>
  );
}
