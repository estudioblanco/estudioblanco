import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function Manifesto() {
  return (
    <Section surface="muted" className="manifesto">
      <Eyebrow>Un proceso proyectual</Eyebrow>
      <h2 className="type-heading-2 manifesto__title">
        Combinamos investigación, diseño e ingeniería para crear productos y servicios útiles que
        resuelven problemas.
      </h2>
    </Section>
  );
}
