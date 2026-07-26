import { explorationAreas } from "@/content/site";
import { Grid } from "@/components/ui/Grid";
import { MediaPlaceholder, type MediaPlaceholderVariant } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const visuals: MediaPlaceholderVariant[] = ["halftone", "registration", "orbit"];

export function ExplorationAreas() {
  return <Section aria-labelledby="exploration"><SectionHeader number="02" title="Áreas de exploración" note="Preguntas abiertas" titleId="exploration" /><Grid columns={3}>{explorationAreas.map((area, index) => <article className="exploration-card" key={area.title}><span className="meta-label">{area.number}</span><MediaPlaceholder variant={visuals[index]} label={`Muestra ${area.number}`} /><h3>{area.title}</h3><ul>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></article>)}</Grid></Section>;
}
