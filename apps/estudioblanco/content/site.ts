import type { MediaPlaceholderVariant } from "@/components/ui/MediaPlaceholder";

export type NavigationItem = { label: string; href: string };
export type Capability = { title: string; description: string };
export type ExplorationArea = { title: string; topics: string[] };
export type Facility = {
  label: string;
  description: string;
  icon: "desk" | "circuit" | "media" | "kitchen" | "patio" | "location";
};
export type EditorialEntry = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  year?: string;
  status: string;
  visual: MediaPlaceholderVariant;
};
export type Client = EditorialEntry & { group: "actual" | "anterior" };
export type SocialLink = { label: string; href: string };
export type ContactDetails = {
  email: string;
  address: { street: string; city: string; province: string; country: string };
  mapUrl: string;
  mapEmbedUrl: string;
};

export const navigation: NavigationItem[] = [
  { label: "Estudio", href: "#estudio" },
  { label: "Proyectos", href: "#proyectos" },
];

export const capabilities: Capability[] = [
  {
    title: "Diseño de Producto",
    description:
      "Investigación, estrategia e interfaces para transformar necesidades reales en productos digitales claros y utilizables.",
  },
  {
    title: "Software + IA",
    description:
      "Construimos productos, herramientas internas, automatizaciones y agentes que integran software e inteligencia artificial.",
  },
  {
    title: "Sistemas de Diseño",
    description:
      "Creamos sistemas visuales, componentes y herramientas que permiten a productos y organizaciones crecer con consistencia.",
  },
];

export const explorationAreas: ExplorationArea[] = [
  {
    title: "Tecnología + I+D",
    topics: [
      "Inteligencia artificial aplicada",
      "Prototipado e interfaces",
      "Software cívico",
      "Electrónica",
    ],
  },
  {
    title: "Cultura + Identidad",
    topics: [
      "Archivos y memoria",
      "Narrativas territoriales",
      "Sistemas de identidad",
      "Publicaciones",
    ],
  },
  {
    title: "Territorio",
    topics: ["Datos geográficos", "Herramientas rurales", "Patrimonio local", "Nuevas economías"],
  },
];

export const facilities: Facility[] = [
  {
    label: "Espacio de trabajo",
    description: "Mesas compartidas para diseñar, investigar y construir.",
    icon: "desk",
  },
  {
    label: "Laboratorio de electrónica",
    description: "Herramientas para prototipado, prueba y experimentación.",
    icon: "circuit",
  },
  {
    label: "Estación de medios",
    description: "Registro, edición y producción de contenidos.",
    icon: "media",
  },
  {
    label: "Cocina con matera",
    description: "Un espacio cotidiano para conversar y compartir.",
    icon: "kitchen",
  },
  {
    label: "Patio con parrilla",
    description: "Encuentros y trabajo al aire libre.",
    icon: "patio",
  },
  {
    label: "Centro de General Madariaga",
    description: "Conectado con la actividad cultural de la ciudad.",
    icon: "location",
  },
];

export const projects: EditorialEntry[] = [
  {
    number: "P—01",
    title: "Cernunnos",
    subtitle: "Inteligencia territorial",
    year: "2026",
    status: "En desarrollo",
    description:
      "Una plataforma de inteligencia territorial que transforma datos dispersos en mejores decisiones para gobiernos y comunidades.",
    visual: "field",
  },
  {
    number: "P—02",
    title: "Huellas de los Pioneros",
    subtitle: "Archivo vivo",
    year: "2026",
    status: "Investigación activa",
    description:
      "Un archivo vivo que recupera historias, documentos y recorridos para conectar la memoria local con nuevas generaciones.",
    visual: "halftone",
  },
];

const clientNames = [
  [
    "RaidGuild",
    "Diseño y estrategia",
    "Colaboración en productos digitales y sistemas para comunidades descentralizadas.",
    "actual",
    "grid",
  ],
  [
    "Zero Gravité",
    "Producto digital",
    "Diseño de experiencias y herramientas para equipos que trabajan con nuevas tecnologías.",
    "actual",
    "registration",
  ],
  [
    "SoyIO",
    "Identidad y producto",
    "Sistemas de identidad y producto enfocados en claridad, confianza y adopción.",
    "actual",
    "field",
  ],
  [
    "Okemo Resort",
    "Experiencia de servicio",
    "Diseño de puntos de contacto digitales para una experiencia de montaña más simple.",
    "actual",
    "orbit",
  ],
  [
    "Silo Finance",
    "Protocolo financiero",
    "Diseño de producto y comunicación para infraestructura financiera descentralizada.",
    "anterior",
    "halftone",
  ],
  [
    "Exactly Protocol",
    "Producto financiero",
    "Interfaces y sistemas para hacer comprensibles operaciones financieras complejas.",
    "anterior",
    "ruled",
  ],
  [
    "Belo App",
    "Producto y marca",
    "Trabajo sobre experiencias digitales y comunicación para servicios financieros cotidianos.",
    "anterior",
    "registration",
  ],
  [
    "Grandata",
    "Datos e inteligencia",
    "Diseño de herramientas para explorar datos y convertirlos en decisiones accionables.",
    "anterior",
    "grid",
  ],
] as const;

export const clients: Client[] = clientNames.map(
  ([title, subtitle, description, group, visual], index) => ({
    number: `C—${String(index + 1).padStart(2, "0")}`,
    title,
    subtitle,
    description,
    status: group === "actual" ? "Cliente actual" : "Colaboración anterior",
    group,
    visual,
  })
);

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "YouTube", href: "#" },
];

export const contact: ContactDetails = {
  email: "hola@estudioblanco.org",
  address: {
    street: "Dr. Carlos Madariaga 479",
    city: "General Madariaga",
    province: "Buenos Aires",
    country: "Argentina",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr.+Carlos+Madariaga+479,+General+Madariaga,+Buenos+Aires,+Argentina",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Dr.+Carlos+Madariaga+479,+General+Madariaga,+Buenos+Aires,+Argentina&output=embed",
};

export const mailto = (subject: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
