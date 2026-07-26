import { capabilities } from "@/content/site";
import { Grid } from "@/components/ui/Grid";
import { MediaPlaceholder, type MediaPlaceholderVariant } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const visuals: MediaPlaceholderVariant[] = ["grid", "field", "ruled"];

export function Capabilities() {
  return <Section aria-labelledby="capabilities"><SectionHeader number="01" title="Capacidades" note="Lo que hacemos" titleId="capabilities" /><Grid columns={3}>{capabilities.map((item, index) => <article className="editorial-card" key={item.title}><span className="meta-label">{item.number}</span><MediaPlaceholder variant={visuals[index]} label={`Ensayo ${item.number}`} /><h3>{item.title}</h3><p>{item.description}</p></article>)}</Grid></Section>;
}
