import { contact } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextInput } from "@/components/ui/TextInput";

export function Events() {
  return (
    <Section className="events" aria-labelledby="events">
      <SectionHeader number="06" title="Agenda abierta" note="Cursos + talleres" titleId="events" />
      <div className="event-content">
        <h3>El laboratorio también es un lugar de aprendizaje.</h3>
        <div>
          <p>
            Cursos, talleres y encuentros sobre diseño, tecnología y cultura. Ideas en progreso,
            compartidas alrededor de una mesa.
          </p>
          <form action={`mailto:${contact.email}`} method="post">
            <label htmlFor="email">Recibir novedades</label>
            <div>
              <TextInput id="email" name="email" type="email" placeholder="tu@email.com" required />
              <button aria-label="Suscribirse">→</button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
