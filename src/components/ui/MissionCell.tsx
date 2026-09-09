import type { MissionItem } from "@/types/content";

interface MissionCellProps {
  mission: MissionItem;
  index: number;
}

interface MissionImageProps {
  mission: MissionItem;
}

function MissionImage({ mission }: MissionImageProps) {
  if (!mission.image) return null;

  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={mission.image}
        alt={mission.title}
        className="w-full rounded-lg object-cover"
      />

      {/* Small linked organization icon in the image's top-right corner */}
      {mission.icon && mission.links && (
        <a
          href={mission.links}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${mission.title}`}
          title={`Visit ${mission.title}`}
          className="
            absolute right-3 top-3
            rounded-full bg-white/95 p-2
            shadow-md
            transition-all duration-200
            hover:scale-110 hover:bg-white
            focus:outline-none focus:ring-2
            focus:ring-text-primary focus:ring-offset-2
          "
        >
          <img
            src={mission.icon}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        </a>
      )}
    </div>
  );
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
          isLeft
            ? "pr-10 text-right md:pr-16"
            : "pl-10 text-left md:pl-16"
        }`}
      >
        {isLeft ? (
          <>
            {/* Experience content */}
            <h3 className="text-lg font-bold text-text-primary md:text-xl">
              {mission.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">
              {mission.description}
            </p>
          </>
        ) : (
          /* Image for right-side experience */
          <MissionImage mission={mission} />
        )}
      </div>

      {/* Right side */}
      <div
        className={`px-6 md:px-10 ${
          !isLeft
            ? "pl-10 text-left md:pl-16"
            : "pr-10 text-right md:pr-16"
        }`}
      >
        {!isLeft ? (
          <>
            {/* Experience content */}
            <h3 className="text-lg font-bold text-text-primary md:text-xl">
              {mission.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">
              {mission.description}
            </p>
          </>
        ) : (
          /* Image for left-side experience */
          <MissionImage mission={mission} />
        )}
      </div>
    </div>
  );
}