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
      className="scroll-mt-4 border-t border-border bg-bg py-16 md:py-20"
    >
      <Container>
        <h2
          id="coursework-heading"
          className="text-center text-2xl font-bold text-text-primary md:text-3xl"
        >
          {content.heading}
        </h2>
        <p className="mt-2 text-center text-sm text-text-secondary md:text-base">{content.subtitle}</p>

        <div className="relative mx-auto mt-12 max-w-3xl pb-4 before:absolute before:bottom-3 before:left-5 before:top-0 before:w-px before:bg-border after:absolute after:bottom-0 after:left-5 after:-translate-x-1/2 after:border-x-[6px] after:border-t-[10px] after:border-x-transparent after:border-t-border md:before:left-1/2 md:after:left-1/2">
          <ol>
            {content.terms.map((term, index) => {
              const isLeft = index % 2 === 0;
              const courses = term.courses ?? [];
              const isOpen = activeId === term.id;
              const filled = courses.length > 0;

              return (
                <li
                  key={term.id}
                  className={`relative mb-8 flex items-center md:mb-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex flex-1 ${
                      isLeft ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10"
                    } justify-start pl-12 md:pl-0`}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(term.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onFocus={() => setActiveId(term.id)}
                      onBlur={() => setActiveId(null)}
                      onClick={() => setActiveId(isOpen ? null : term.id)}
                      className="w-full max-w-[260px] cursor-pointer border border-border bg-bg p-4 text-left transition-colors hover:border-text-primary"
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

                  <div
                    className={`absolute left-5 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 md:relative md:left-auto md:translate-x-0 ${
                      filled
                        ? "border-text-primary bg-text-primary"
                        : "border-text-primary bg-bg"
                    }`}
                  />

                  <div className="hidden flex-1 md:block" />
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
