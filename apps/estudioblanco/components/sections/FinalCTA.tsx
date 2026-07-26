import { mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FinalCTA() {
  return (
    <Section surface="sage" className="final-cta" aria-labelledby="conversion">
      <SectionHeader
        number="08"
        eyebrow="Punto de partida"
        title="Conversemos"
        titleId="conversion"
      />
      <h2 className="type-heading-cta">
        ¿Tenés un problema
        <br />
        interesante?
      </h2>
      <div className="final-cta__support">
        <p>
          Nos interesa colaborar con personas y organizaciones que estén haciendo preguntas
          difíciles. Contanos en qué estás trabajando.
        </p>
        <div className="button-group">
          <Button href={mailto("Tengo un problema interesante")} variant="light">
            Contratar Estudio
          </Button>
          <Button href={mailto("Visita al estudio")} variant="outlineLight">
            Coordinar una visita
          </Button>
        </div>
      </div>
    </Section>
  );
}
