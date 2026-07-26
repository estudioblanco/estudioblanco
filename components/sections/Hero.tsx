import { contact, mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  return <section className="hero dotted-surface" id="inicio"><Eyebrow trailing={contact.coordinates}>Laboratorio independiente</Eyebrow><h1>Diseñamos sistemas para resolver problemas complejos.</h1><div className="hero__support"><p>Estudio Blanco es un laboratorio independiente enfocado en diseño, software, inteligencia artificial e investigación.</p><div className="button-group"><Button href={mailto("Proyecto para Estudio Blanco")}>Contratar Estudio ↗</Button><Button href="#visita" variant="outline">Coordinar una visita</Button></div></div><figure className="documentary-image"><img src="/studio.jpg" alt="Fachada de Estudio Blanco en General Madariaga" /><figcaption><span>El laboratorio, abierto a la ciudad.</span><span>Registro 07—26</span></figcaption></figure></section>;
}
