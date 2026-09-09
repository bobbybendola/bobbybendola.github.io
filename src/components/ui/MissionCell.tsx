import type { MissionItem } from "@/types/content";

interface MissionCellProps {
  mission: MissionItem;
  index: number;
}

export function MissionCell({ mission, index }: MissionCellProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid min-h-[240px] grid-cols-2 items-center">
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-bg bg-text-primary" />

      {/* Left side */}
      <div
        className={`px-6 md:px-10 ${
          isLeft ? "pr-10 text-right md:pr-16" : "invisible"
        }`}
      >
        {isLeft && (
          <>
            <h3 className="text-lg font-bold text-text-primary md:text-xl">
              {mission.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">
              {mission.description}
            </p>
          </>
        )}
      </div>

      {/* Right side */}
      <div
        className={`px-6 md:px-10 ${
          !isLeft ? "pl-10 text-left md:pl-16" : "invisible"
        }`}
      >
        {!isLeft && (
          <>
            <h3 className="text-lg font-bold text-text-primary md:text-xl">
              {mission.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">
              {mission.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}