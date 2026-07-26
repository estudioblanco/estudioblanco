import { contact } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LocationMap() {
  const { address } = contact;
  return (
    <Section id="visita" aria-labelledby="location">
      <SectionHeader
        number="07"
        eyebrow="General Madariaga"
        title="Dónde estamos"
        titleId="location"
      />
      <div className="location-layout">
        <div className="location-copy">
          <Eyebrow>Visitar el estudio</Eyebrow>
          <h3 className="type-heading-3">{address.street}</h3>
          <p>
            {address.city}, {address.province}
            <br />
            {address.country}
          </p>
          <p>
            Estamos en el centro de la ciudad, cerca de sus principales espacios culturales y
            comunitarios.
          </p>
          <Button href={contact.mapUrl} target="_blank" rel="noreferrer" variant="outline">
            Abrir en Google Maps
          </Button>
        </div>
        <div className="location-map">
          <iframe
            title="Mapa de Estudio Blanco en General Madariaga"
            src={contact.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
