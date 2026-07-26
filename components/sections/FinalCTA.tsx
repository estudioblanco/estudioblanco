import { mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function FinalCTA() {
  return <Section surface="sage" className="final-cta"><span className="meta-label">Punto de partida</span><h2>¿Tenés un problema<br />interesante?</h2><div className="final-cta__support"><p>Nos interesa colaborar con personas y organizaciones que estén haciendo preguntas difíciles. Contanos en qué estás trabajando.</p><div className="button-group"><Button href={mailto("Tengo un problema interesante")} variant="light">Contratar Estudio ↗</Button><Button href={mailto("Visita al estudio")} variant="outlineLight">Coordinar una visita</Button></div></div></Section>;
}
