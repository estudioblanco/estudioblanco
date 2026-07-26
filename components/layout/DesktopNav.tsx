import { navigation, mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function DesktopNav() {
  return <nav className="primary-nav" aria-label="Navegación principal">{navigation.map(item => <a className="primary-nav__link" key={item.href} href={item.href}>{item.label}</a>)}<Button href={mailto("Proyecto para Estudio Blanco")} size="small" texture="pigment"><span className="primary-nav__cta-long">Contratar Estudio ↗</span><span className="primary-nav__cta-short">Contratar ↗</span></Button></nav>;
}
