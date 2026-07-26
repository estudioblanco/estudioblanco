import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estudio Blanco — Diseño, software e investigación",
  description: "Laboratorio independiente de diseño, software, IA e investigación en General Madariaga.",
};

const capabilities = [
  ["01", "Diseño de Producto", "Investigación, estrategia, interfaces y sistemas que convierten complejidad en experiencias claras."],
  ["02", "Desarrollo de Software", "Productos digitales, automatizaciones e inteligencia artificial construidos para durar."],
  ["03", "Identidad y Marca", "Lenguajes visuales y verbales que ayudan a organizaciones e ideas a encontrar su forma propia."],
];
const explorations = [
  ["A", "Tecnología + I+D", "Inteligencia artificial aplicada|Prototipado e interfaces|Software cívico|Electrónica"],
  ["B", "Cultura + Identidad", "Archivos y memoria|Narrativas territoriales|Sistemas de identidad|Publicaciones"],
  ["C", "Territorio", "Datos geográficos|Herramientas rurales|Patrimonio local|Nuevas economías"],
];
const facilities = ["Espacio de trabajo", "Laboratorio de electrónica", "Estación de medios", "Cocina", "Patio", "Centro de General Madariaga"];

export default function Home() {
  return <main>
    <header className="nav">
      <a className="brand" href="#inicio"><span className="mark">EB</span><b>Estudio Blanco</b></a>
      <nav aria-label="Navegación principal"><a href="#estudio">Estudio</a><a href="#proyectos">Proyectos</a><a className="button small" href="mailto:hola@estudioblanco.com.ar?subject=Proyecto para Estudio Blanco">Contratar Estudio ↗</a></nav>
    </header>

    <section className="hero dots" id="inicio">
      <div className="eyebrow"><span>Laboratorio independiente</span><span>37.0000° S · 57.1333° O</span></div>
      <h1>Diseñamos sistemas para resolver problemas complejos.</h1>
      <div className="hero-bottom">
        <p>Estudio Blanco es un laboratorio independiente enfocado en diseño, software, inteligencia artificial e investigación.</p>
        <div className="actions"><a className="button" href="mailto:hola@estudioblanco.com.ar?subject=Proyecto para Estudio Blanco">Contratar Estudio ↗</a><a className="button outline" href="#visita">Coordinar una visita</a></div>
      </div>
      <figure><img src="/studio.jpg" alt="Fachada de Estudio Blanco en General Madariaga" /><figcaption><span>El laboratorio, abierto a la ciudad.</span><span>Registro 07—26</span></figcaption></figure>
    </section>

    <section className="section" aria-labelledby="cap"><Head n="01" title="Capacidades" note="Lo que hacemos" id="cap" />
      <div className="three">{capabilities.map(([n,t,p]) => <article className="cap" key={t}><i>{n}</i><h3>{t}</h3><p>{p}</p></article>)}</div>
    </section>

    <section className="section manifesto"><span>Una práctica compartida</span><p>Combinamos investigación, diseño e ingeniería para crear herramientas útiles y productos con sentido. Trabajamos cerca del problema, documentando lo que aprendemos y dejando espacio para el error.</p></section>

    <section className="section" aria-labelledby="exp"><Head n="02" title="Áreas de exploración" note="Preguntas abiertas" id="exp" />
      <div className="three">{explorations.map(([n,t,list]) => <article className="explore" key={t}><i>{n}</i><h3>{t}</h3><ul>{list.split("|").map(x=><li key={x}>{x}</li>)}</ul></article>)}</div>
    </section>

    <section className="section dark" id="estudio" aria-labelledby="studio"><Head n="03" title="El estudio" note="Dr. Carlos Madariaga 479" id="studio" />
      <div className="studio-intro"><h3>Un lugar para hacer,<br/>probar y compartir.</h3><p>Nuestro espacio funciona como taller, oficina, aula y punto de encuentro. Está en el centro de General Madariaga, Buenos Aires.</p></div>
      <div className="facilities">{facilities.map((x,i)=><div key={x}><i>{String(i+1).padStart(2,"0")}</i><p>{x}</p><span>↘</span></div>)}</div>
    </section>

    <section className="section" id="proyectos" aria-labelledby="projects"><Head n="04" title="Proyectos" note="En proceso" id="projects" />
      <div className="projects">
        <Project n="P—01" title="Cernunnos" text="Una plataforma de inteligencia territorial que transforma datos dispersos en mejores decisiones para gobiernos y comunidades." tag="Producto · Datos · Territorio" />
        <Project n="P—02" title="Huellas de los Pioneros" text="Un archivo vivo que recupera historias, documentos y recorridos para conectar la memoria local con nuevas generaciones." tag="Investigación · Archivo · Cultura" />
      </div>
    </section>

    <section className="section" aria-labelledby="clients"><Head n="05" title="Colaboraciones" note="Trabajo compartido" id="clients" />
      <div className="clients"><div><i>Colaboraciones actuales</i><h3>Cernunnos<br/>Huellas de los Pioneros<br/>Comunidad Madariaga</h3></div><div><i>Experiencia previa</i><h3>Organizaciones públicas<br/>Equipos de producto<br/>Proyectos culturales</h3></div></div>
    </section>

    <section className="section events" aria-labelledby="events"><Head n="06" title="Agenda abierta" note="Cursos + talleres" id="events" />
      <div className="event-content"><h3>El laboratorio también es un lugar de aprendizaje.</h3><div><p>Cursos, talleres y encuentros sobre diseño, tecnología y cultura. Ideas en progreso, compartidas alrededor de una mesa.</p><form action="mailto:hola@estudioblanco.com.ar" method="post"><label htmlFor="email">Recibir novedades</label><div><input id="email" name="email" type="email" placeholder="tu@email.com" required/><button aria-label="Suscribirse">→</button></div></form></div></div>
    </section>

    <section className="section" id="visita" aria-labelledby="where"><Head n="07" title="Dónde estamos" note="General Madariaga" id="where" />
      <a className="map" href="https://www.google.com/maps/search/?api=1&query=Dr.+Carlos+Madariaga+479,+General+Madariaga,+Buenos+Aires,+Argentina" target="_blank" rel="noreferrer"><span className="grid"/><b className="pin">● &nbsp; Estudio Blanco</b><span className="address">Dr. Carlos Madariaga 479<br/>General Madariaga<br/>Buenos Aires, Argentina</span><span className="open">Abrir mapa ↗</span></a>
    </section>

    <section className="section cta"><i>Punto de partida</i><h2>¿Tenés un problema<br/>interesante?</h2><div className="cta-bottom"><p>Nos interesa colaborar con personas y organizaciones que estén haciendo preguntas difíciles. Contanos en qué estás trabajando.</p><div className="actions"><a className="button light" href="mailto:hola@estudioblanco.com.ar?subject=Tengo un problema interesante">Contratar Estudio ↗</a><a className="button outline-light" href="mailto:hola@estudioblanco.com.ar?subject=Visita al estudio">Coordinar una visita</a></div></div></section>

    <footer><a className="brand" href="#inicio"><span className="mark">EB</span><b>Estudio Blanco</b></a><p>Diseño · Software · Investigación · Tecnología</p><div className="social"><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a><a href="#">GitHub ↗</a><a href="#">YouTube ↗</a></div><div className="legal"><span>© 2026 Estudio Blanco</span><span>General Madariaga, AR</span><a href="#">Información legal</a></div></footer>
  </main>;
}

function Head({n,title,note,id}:{n:string,title:string,note:string,id:string}) {
  return <div className="head"><span>{n}</span><h2 id={id}>{title}</h2><span>{note}</span></div>;
}
function Project({n,title,text,tag}:{n:string,title:string,text:string,tag:string}) {
  return <details><summary><i>{n}</i><span>{title}</span><b>+</b></summary><div className="project-body"><p>{text}</p><span>{tag}</span></div></details>;
}
