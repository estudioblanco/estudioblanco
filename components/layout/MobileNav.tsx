import { mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  return <nav className="mobile-nav" aria-label="Navegación móvil"><Button href={mailto("Proyecto para Estudio Blanco")} size="small" texture="pigment">Contratar ↗</Button></nav>;
}
