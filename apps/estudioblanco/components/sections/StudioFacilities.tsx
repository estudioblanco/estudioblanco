import { facilities } from "@/content/site";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function StudioFacilities() {
  return (
    <Section surface="dark" id="estudio" aria-labelledby="studio">
      <SectionHeader number="03" eyebrow="Espacio" title="El estudio" titleId="studio" />
      <div className="studio-intro">
        <div className="studio-intro__copy">
          <h3>Un lugar para hacer, probar y compartir.</h3>
          <p>
            Un espacio de encuentro que funciona como taller, oficina, aula y laboratorio creativo.
          </p>
          <p>Ubicado en el centro cultural de la ciudad de General Madariaga.</p>
        </div>
        <MediaPlaceholder variant="registration" className="studio-placeholder" />
      </div>
      <div className="facility-list">
        {facilities.map((item) => (
          <article key={item.label}>
            <span className={`facility-icon facility-icon--${item.icon}`} aria-hidden="true">
              <i />
            </span>
            <div>
              <h4>{item.label}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
