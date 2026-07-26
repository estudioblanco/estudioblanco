import type { Project } from "@/content/site";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { mailto } from "@/content/site";

type ProjectRowProps = { project: Project };

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="project-row">
      <a
        className="project-row__link"
        href={mailto(`Consulta sobre ${project.title}`)}
        aria-label={`${project.title}: ${project.description}`}
      >
        <div className="project-row__identity">
          <span className="meta-label">{project.number}</span>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <div className="project-row__summary">
          <p>{project.description}</p>
          <span>
            {project.year} · {project.status}
          </span>
        </div>
        <MediaPlaceholder variant={project.visual} label={project.number} />
        <span className="project-row__arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </article>
  );
}
