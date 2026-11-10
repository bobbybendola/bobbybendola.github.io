import type { CourseItem, CourseworkContent } from "@/types/content";
import { Container } from "@/components/ui/Container";

interface CourseworkProps {
  content: CourseworkContent;
}

/**
 * Horizontal timeline on desktop (dots on a line, one card per term below it),
 * vertical list on mobile. Courses are always visible and cards sit in normal
 * flow, so a term with many courses just makes the row taller instead of
 * overflowing into the next section.
 */
export function Coursework({ content }: CourseworkProps) {
  return (
    <section
      id="coursework"
      aria-labelledby="coursework-heading"
      className="scroll-mt-4 border-t border-border bg-bg py-16 md:py-28"
    >
      <Container>
        <h2
          id="coursework-heading"
          className="text-center text-2xl font-bold text-text-primary md:text-3xl"
        >
          {content.heading}
        </h2>
        {content.subtitle.trim() && (
          <p className="mt-2 text-center text-sm text-text-secondary md:text-base">{content.subtitle}</p>
        )}

        <div className="relative mx-auto mt-12 max-w-5xl md:mt-16">
          {/* Horizontal line through the dots (desktop only) */}
          <div className="absolute left-0 right-0 top-2 hidden h-px bg-border md:block" />

          <ol className="flex flex-col gap-8 md:flex-row md:gap-4">
            {content.terms.map((term) => {
              const courses = term.courses ?? [];

              return (
                <li key={term.id} className="relative md:flex md:flex-1 md:flex-col">
                  {/* Timeline dot, centred on the line */}
                  <div
                    className={`absolute left-0 top-2 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-text-primary md:left-1/2 md:-translate-x-1/2 ${
                      courses.length > 0 ? "bg-text-primary" : "bg-bg"
                    }`}
                  />

                  <div className="pl-8 md:flex-1 md:pl-0 md:pt-8">
                    <div className="h-full border border-border bg-bg p-4 text-left shadow-sm">
                      <h3 className="text-sm font-bold text-text-primary md:text-base">{term.label}</h3>

                      {courses.length > 0 ? (
                        <ul className="mt-3 flex flex-col gap-2.5">
                          {courses.map((course: CourseItem) => (
                            <li key={`${term.id}-${course.code}`} className="text-sm leading-snug">
                              <span className="block font-semibold text-text-primary">{course.code.trim()}</span>
                              <span className="block text-text-secondary">{course.name}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-3 text-sm text-text-secondary">TBD</p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
