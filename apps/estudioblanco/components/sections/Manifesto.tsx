import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export function Manifesto() {
  return (
    <Section surface="muted" className="manifesto">
      <Eyebrow>Cómo trabajamos</Eyebrow>
      <h2 className="type-heading-2 manifesto__title">
        Combinamos investigación, diseño e ingeniería para entender un problema, construir una
        solución y ponerla a prueba en el mundo real.
      </h2>
    </Section>
  );
}
