import { contact } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LocationMap() {
  const { address } = contact;
  return (
    <Section id="visita" aria-labelledby="location">
      <SectionHeader number="07" title="Dónde estamos" note={address.city} titleId="location" />
      <a
        className="location-map"
        href={contact.mapUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir ubicación de Estudio Blanco en Google Maps"
      >
        <span className="location-map__grid" />
        <b className="location-map__pin">● &nbsp; Estudio Blanco</b>
        <span className="location-map__address">
          {address.street}
          <br />
          {address.city}
          <br />
          {address.province}, {address.country}
        </span>
        <span className="location-map__open">Abrir mapa ↗</span>
      </a>
    </Section>
  );
}
