import { navigation, mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function DesktopNav() {
  return (
    <nav className="primary-nav" aria-label="Navegación principal">
      <div className="primary-nav__links">
        {navigation.map((item) => (
          <a className="primary-nav__link" key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <Button href={mailto("Proyecto para Estudio Blanco")} size="small">
        Contratar
      </Button>
    </nav>
  );
}
