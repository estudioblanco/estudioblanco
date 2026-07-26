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
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Estudio Blanco — Diseño, software e investigación",
  description:
    "Laboratorio independiente de diseño, software, IA e investigación en General Madariaga.",
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
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
