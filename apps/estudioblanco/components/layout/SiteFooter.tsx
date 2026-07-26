import { socialLinks } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { LogoSpark } from "@/components/ui/LogoSpark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <a className="footer-lockup" href="#inicio" aria-label="Estudio Blanco, inicio">
          <LogoSpark variant="left" />
        </a>
        <p>Diseño · Software · Investigación · Tecnología</p>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label} ↗
            </a>
          ))}
        </div>
        <div className="legal">
          <span>© 2026 Estudio Blanco</span>
          <span>General Madariaga, AR</span>
          <a href="#">Información legal</a>
        </div>
      </Container>
    </footer>
  );
}
