import { projects } from "@/content/site";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Projects() {
  return <Section id="proyectos" aria-labelledby="projects"><SectionHeader number="04" title="Proyectos" note="En proceso" titleId="projects" /><div className="project-list">{projects.map(project => <Accordion key={project.title} eyebrow={project.number} title={project.title}><div className="accordion__content"><p>{project.description}</p><span>{project.disciplines}</span></div></Accordion>)}</div></Section>;
}
