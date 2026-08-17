import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { Manifesto } from "@/components/sections/Manifesto";
import { ExplorationAreas } from "@/components/sections/ExplorationAreas";
import { StudioFacilities } from "@/components/sections/StudioFacilities";
import { Projects } from "@/components/sections/Projects";
import { Clients } from "@/components/sections/Clients";
import { Events } from "@/components/sections/Events";
import { LocationMap } from "@/components/sections/LocationMap";

export const metadata: Metadata = {
  title: "Estudio Blanco — Diseño y tecnología",
  description:
    "Diseñamos y construimos productos y sistemas digitales combinando diseño, software e inteligencia artificial.",
};

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Capabilities />
      <Manifesto />
      <ExplorationAreas />
      <StudioFacilities />
      <Projects />
      <Clients />
      <Events />
      <LocationMap />
      <SiteFooter />
    </main>
  );
}
