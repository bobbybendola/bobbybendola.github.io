import type { MissionItem } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { MissionCell } from "@/components/ui/MissionCell";

interface MissionGridProps {
  heading: string;
  missions: MissionItem[];
}

export function MissionGrid({ heading, missions }: MissionGridProps) {
  return (
    <section
      id="experience"
      aria-labelledby="mission-heading"
      className="scroll-mt-4 border-t border-border bg-bg py-16 md:py-20"
    >
      <Container>
        <h2
          id="mission-heading"
          className="mb-12 text-2xl font-bold text-text-primary md:text-3xl"
        >
          {heading}
        </h2>

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-border" />

          {missions.map((mission, index) => (
            <MissionCell
              key={mission.id}
              mission={mission}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}