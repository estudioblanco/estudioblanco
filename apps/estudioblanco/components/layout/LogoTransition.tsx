"use client";

import { LogoSpark } from "@/components/ui/LogoSpark";

type LogoTransitionProps = { isScrolled: boolean };

export function LogoTransition({ isScrolled }: LogoTransitionProps) {
  return (
    <a className="logo-transition" href="#inicio" aria-label="Estudio Blanco, inicio">
      <LogoSpark variant="left" className="logo-transition__left" />
      <LogoSpark variant="center" className="logo-transition__center" />
      <LogoSpark variant="symbol" className="logo-transition__symbol" />
      <span className="sr-only">{isScrolled ? "Estudio Blanco" : "Estudio Blanco, inicio"}</span>
    </a>
  );
}
