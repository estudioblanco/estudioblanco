export type NavigationItem = { label: string; href: string };
export type Capability = { number: string; title: string; description: string };
export type ExplorationArea = { number: string; title: string; topics: string[] };
export type Facility = { number: string; label: string };
export type Project = { number: string; title: string; description: string; disciplines: string };
export type SocialLink = { label: string; href: string };
export type ContactDetails = {
  email: string;
  address: { street: string; city: string; province: string; country: string };
  coordinates: string;
  mapUrl: string;
};

export const navigation: NavigationItem[] = [
  { label: "Estudio", href: "#estudio" },
  { label: "Proyectos", href: "#proyectos" },
];

export const capabilities: Capability[] = [
  { number: "01", title: "Diseño de Producto", description: "Investigación, estrategia, interfaces y sistemas que convierten complejidad en experiencias claras." },
  { number: "02", title: "Desarrollo de Software", description: "Productos digitales, automatizaciones e inteligencia artificial construidos para durar." },
  { number: "03", title: "Identidad y Marca", description: "Lenguajes visuales y verbales que ayudan a organizaciones e ideas a encontrar su forma propia." },
];

export const explorationAreas: ExplorationArea[] = [
  { number: "A", title: "Tecnología + I+D", topics: ["Inteligencia artificial aplicada", "Prototipado e interfaces", "Software cívico", "Electrónica"] },
  { number: "B", title: "Cultura + Identidad", topics: ["Archivos y memoria", "Narrativas territoriales", "Sistemas de identidad", "Publicaciones"] },
  { number: "C", title: "Territorio", topics: ["Datos geográficos", "Herramientas rurales", "Patrimonio local", "Nuevas economías"] },
];

export const facilities: Facility[] = [
  "Espacio de trabajo",
  "Laboratorio de electrónica",
  "Estación de medios",
  "Cocina",
  "Patio",
  "Centro de General Madariaga",
].map((label, index) => ({ number: String(index + 1).padStart(2, "0"), label }));

export const projects: Project[] = [
  { number: "P—01", title: "Cernunnos", description: "Una plataforma de inteligencia territorial que transforma datos dispersos en mejores decisiones para gobiernos y comunidades.", disciplines: "Producto · Datos · Territorio" },
  { number: "P—02", title: "Huellas de los Pioneros", description: "Un archivo vivo que recupera historias, documentos y recorridos para conectar la memoria local con nuevas generaciones.", disciplines: "Investigación · Archivo · Cultura" },
];

export const currentClients = ["Cernunnos", "Huellas de los Pioneros", "Comunidad Madariaga"];
export const previousClients = ["Organizaciones públicas", "Equipos de producto", "Proyectos culturales"];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "YouTube", href: "#" },
];

export const contact: ContactDetails = {
  email: "hola@estudioblanco.com.ar",
  address: { street: "Dr. Carlos Madariaga 479", city: "General Madariaga", province: "Buenos Aires", country: "Argentina" },
  coordinates: "37.0000° S · 57.1333° O",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Dr.+Carlos+Madariaga+479,+General+Madariaga,+Buenos+Aires,+Argentina",
};

export const mailto = (subject: string) => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
