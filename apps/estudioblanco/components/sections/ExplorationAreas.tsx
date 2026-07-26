import { explorationAreas } from "@/content/site";
import { Grid } from "@/components/ui/Grid";
import { MediaPlaceholder, type MediaPlaceholderVariant } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const visuals: MediaPlaceholderVariant[] = ["halftone", "registration", "orbit"];

export function ExplorationAreas() {
  return (
    <Section aria-labelledby="exploration">
      <SectionHeader
        number="02"
        eyebrow="Investigación"
        title="Áreas de estudio"
        titleId="exploration"
      />
      <Grid columns={3} className="card-grid">
        {explorationAreas.map((area, index) => (
          <article className="exploration-card" key={area.title}>
            <MediaPlaceholder variant={visuals[index]} />
            <h3 className="type-heading-3">{area.title}</h3>
            <ul>
              {area.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>
        ))}
      </Grid>
    </Section>
  );
}
