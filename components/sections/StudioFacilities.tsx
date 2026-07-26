import { contact, facilities } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function StudioFacilities() {
  return <Section surface="dark" id="estudio" aria-labelledby="studio"><SectionHeader number="03" title="El estudio" note={contact.address.street} titleId="studio" /><div className="studio-intro"><h3>Un lugar para hacer,<br />probar y compartir.</h3><p>Nuestro espacio funciona como taller, oficina, aula y punto de encuentro. Está en el centro de General Madariaga, Buenos Aires.</p></div><div className="facility-list">{facilities.map(item => <div key={item.number}><span className="meta-label">{item.number}</span><p>{item.label}</p><span>↘</span></div>)}</div></Section>;
}
