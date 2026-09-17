import { useState } from "react";

import type { CourseworkContent } from "@/types/content";
import { Container } from "@/components/ui/Container";

interface CourseworkProps {
  content: CourseworkContent;
}

export function Coursework({ content }: CourseworkProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

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
        <p className="mt-2 text-center text-sm text-text-secondary md:text-base">{content.subtitle}</p>

        {/* Horizontal Container & Connecting Line */}
        <div className="relative mx-auto mt-20 max-w-5xl md:py-16">
          {/* Horizontal Line stretching across the middle */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border hidden md:block" />

          <ol className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-4">
            {content.terms.map((term, index) => {
              const isEven = index % 2 === 0; // Even = Top, Odd = Bottom
              const courses = term.courses ?? [];
              const isOpen = activeId === term.id;
              const filled = courses.length > 0;

              return (
                <li key={term.id} className="relative flex flex-col items-start md:flex-1 md:items-center">
                  
                  {/* Timeline Dot (Centered right on the horizontal line) */}
                  <div
                    className={`absolute left-0 top-2 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-2 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ${
                      filled
                        ? "border-text-primary bg-text-primary"
                        : "border-text-primary bg-bg"
                    }`}
                  />

                  {/* Card Content container (Alternates top/bottom on desktop) */}
                  <div
                    className={`w-full pl-8 md:pl-0 md:w-64 md:left-1/2 md:-translate-x-1/2 ${
                      isEven
                        ? "md:absolute md:bottom-1/2 md:pb-8" // Positioned ABOVE the line
                        : "md:absolute md:top-1/2 md:pt-8"    // Positioned BELOW the line
                    }`}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(term.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onFocus={() => setActiveId(term.id)}
                      onBlur={() => setActiveId(null)}
                      onClick={() => setActiveId(isOpen ? null : term.id)}
                      className="w-full cursor-pointer border border-border bg-bg p-4 text-left transition-colors hover:border-text-primary shadow-sm"
                    >
                      <h3 className="text-sm font-bold text-text-primary md:text-base">{term.label}</h3>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "mt-3 max-h-48 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {courses.length > 0 ? (
                          <ul className="flex flex-col gap-1.5">
                            {courses.map((course) => (
                              <li
                                key={`${term.id}-${course.code}`}
                                className="text-sm leading-relaxed text-text-secondary"
                              >
                                <span className="text-text-primary">• </span>
                                {course.code} — {course.name}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-text-secondary">TBD</p>
                        )}
                      </div>
                    </button>
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