import { navigation, mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function DesktopNav() {
  return <nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<Button href={mailto("Proyecto para Estudio Blanco")} size="small">Contratar Estudio ↗</Button></nav>;
}
