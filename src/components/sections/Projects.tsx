import type { ProjectItem, ProjectsContent } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

interface ProjectsProps {
  content: ProjectsContent;
}

function filledLines(lines: string[]) {
  return lines.filter((line) => line.trim().length > 0);
}

function filledLinks(links: ProjectItem["links"]) {
  return links.filter((link) => link.href.trim().length > 0);
}

function filledTeammates(teammates: ProjectItem["teammates"]) {
  return teammates.filter((person) => person.name.trim().length > 0 && person.href.trim().length > 0);
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-text-secondary">
      {items.map((item, index) => (
        <li key={index} className="pl-1">
          • {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectBlock({ project, compact = false }: { project: ProjectItem; compact?: boolean }) {
  const what = filledLines(project.what);
  const how = filledLines(project.how);
  const links = filledLinks(project.links);
  const teammates = filledTeammates(project.teammates);

  return (
    <article className={compact ? "border-t border-border py-8" : "border-t border-border py-12 md:py-16"}>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-8">
        <h3 className={`font-bold text-text-primary ${compact ? "text-xl" : "text-2xl md:text-3xl"}`}>
          {project.title}
        </h3>

        {teammates.length > 0 && (
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 md:justify-end">
            {teammates.map((person, index) => (
              <li key={person.href} className="flex items-center gap-3">
                {index > 0 && <span className="text-text-secondary">·</span>}
                <a
                  href={person.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-text-primary transition-opacity hover:opacity-60"
                >
                  <Icon name="Linkedin" size={14} strokeWidth={1.75} />
                  {person.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {project.caption.trim() && (
        <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-text-secondary">{project.caption}</p>
      )}

      {(what.length > 0 || how.length > 0) && (
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {what.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-text-primary">What?</h4>
              <BulletList items={what} />
            </div>
          )}
          {how.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-text-primary">How?</h4>
              <BulletList items={how} />
            </div>
          )}
        </div>
      )}

      {project.images.length > 0 && (
        <div
          className={`mt-8 grid gap-4 ${
            project.images.length > 1 ? "md:grid-cols-2" : ""
          }`}
        >
          {project.images.map((image) => (
            <figure key={image.src}>
              <div
                style={{ aspectRatio: image.aspectRatio }}
                className="overflow-hidden bg-border"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {image.caption?.trim() && (
                <figcaption className="mt-2 text-xs italic text-text-secondary">{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-primary transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function Projects({ content }: ProjectsProps) {
  return (
    <section className="bg-bg py-16 md:py-20">
      <Container>
        <h2 className="mb-4 text-2xl font-bold text-text-primary md:text-3xl">{content.heading}</h2>

        <div>
          {content.featured.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>

        {content.labs.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-2 text-xl font-bold text-text-primary md:text-2xl">{content.labsHeading}</h3>
            <div className="grid gap-x-12 md:grid-cols-2">
              {content.labs.map((project) => (
                <ProjectBlock key={project.id} project={project} compact />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
