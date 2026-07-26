import { navigation, mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  return <header className="site-header"><Container className="site-header__inner"><a className="brand" href="#inicio" aria-label="Estudio Blanco, inicio"><span className="brand__mark">EB</span><b>Estudio Blanco</b></a><nav aria-label="Navegación principal">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<Button href={mailto("Proyecto para Estudio Blanco")} size="small">Contratar Estudio ↗</Button></nav></Container></header>;
}
