import type { BioContent } from "@/types/content";
import { Container } from "@/components/ui/Container";

interface BioProps {
  content: BioContent;
}

export function Bio({ content }: BioProps) {
  return (
    <section aria-labelledby="bio-heading" className="bg-bg py-16 md:py-20">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-5">
          <h2 id="bio-heading" className="text-2xl font-bold leading-tight text-text-primary md:text-3xl">
            {content.heading}
          </h2>

          <div className="flex flex-col gap-4">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="max-w-[60ch] text-sm leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href={content.ctaHref}
            className="mt-2 inline-flex w-fit items-center rounded-sm border border-text-primary px-5 py-2.5 text-sm font-medium text-text-primary transition-opacity hover:opacity-60"
          >
            {content.ctaLabel}
          </a>
        </div>

        <figure>
          {/* // TODO(assets): replace src in siteConfig.ts with the real, licensed photo */}
          <div
            style={{ aspectRatio: content.photo.aspectRatio }}
            className="overflow-hidden bg-border"
          >
            <img src={content.photo.src} alt={content.photo.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <figcaption className="mt-2 text-xs italic text-text-secondary">{content.photoCaption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
