import { mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  return (
    <section className="hero dotted-surface" id="inicio">
      <Container>
        <Eyebrow>Laboratorio independiente</Eyebrow>
        <h1>Diseñamos sistemas simples para resolver problemas complejos.</h1>
        <div className="hero__support">
          <p>
            Estudio Blanco es un laboratorio independiente enfocado en diseño, software,
            inteligencia artificial e investigación.
          </p>
          <div className="button-group">
            <Button href={mailto("Proyecto para Estudio Blanco")}>Contratar Estudio</Button>
            <Button href="#visita" variant="outline">
              Coordinar una visita
            </Button>
          </div>
        </div>
        <figure className="documentary-image">
          <img
            src="/studio.jpg"
            alt="Fachada de Estudio Blanco en General Madariaga"
            width="1600"
            height="1067"
          />
        </figure>
      </Container>
    </section>
  );
}
