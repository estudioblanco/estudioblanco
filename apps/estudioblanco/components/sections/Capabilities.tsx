import { capabilities } from "@/content/site";
import { Grid } from "@/components/ui/Grid";
import { MediaPlaceholder, type MediaPlaceholderVariant } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const visuals: MediaPlaceholderVariant[] = ["grid", "field", "ruled"];

export function Capabilities() {
  return (
    <Section aria-labelledby="capabilities">
      <SectionHeader
        number="01"
        eyebrow="Servicios"
        title="Nuestros servicios"
        titleId="capabilities"
      />
      <Grid columns={3} className="card-grid">
        {capabilities.map((item, index) => (
          <article className="editorial-card" key={item.title}>
            <MediaPlaceholder variant={visuals[index]} />
            <h3 className="type-heading-3">{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </Grid>
    </Section>
  );
}
