import { explorationAreas } from "@/content/site";
import { Grid } from "@/components/ui/Grid";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExplorationAreas() {
  return <Section aria-labelledby="exploration"><SectionHeader number="02" title="Áreas de exploración" note="Preguntas abiertas" titleId="exploration" /><Grid columns={3}>{explorationAreas.map(area => <article className="exploration-card" key={area.title}><span className="meta-label">{area.number}</span><h3>{area.title}</h3><ul>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></article>)}</Grid></Section>;
}
