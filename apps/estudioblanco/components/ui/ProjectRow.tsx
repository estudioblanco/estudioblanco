import type { EditorialEntry } from "@/content/site";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { StatusPill } from "@/components/ui/StatusPill";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { mailto } from "@/content/site";

type ProjectRowProps = { project: EditorialEntry };

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="editorial-row project-row">
      <a
        className="editorial-row__link"
        href={mailto(`Consulta sobre ${project.title}`)}
        aria-label={`${project.title}: ${project.description}`}
      >
        <div className="editorial-row__identity">
          <Eyebrow>{project.number}</Eyebrow>
          <h3 className="type-heading-3">{project.title}</h3>
          <h4 className="type-heading-4">{project.subtitle}</h4>
        </div>
        <div className="editorial-row__summary">
          <p>{project.description}</p>
          <StatusPill>{project.status}</StatusPill>
          {project.year ? <span className="editorial-row__year">{project.year}</span> : null}
        </div>
        <MediaPlaceholder variant={project.visual} className="media-placeholder--banner" />
      </a>
    </article>
  );
}
