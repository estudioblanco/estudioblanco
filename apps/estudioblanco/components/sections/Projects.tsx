import { projects } from "@/content/site";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Projects() {
  return (
    <Section id="proyectos" aria-labelledby="projects">
      <SectionHeader
        number="04"
        title="Proyectos"
        note={`${projects.length} proyectos activos`}
        titleId="projects"
      />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
