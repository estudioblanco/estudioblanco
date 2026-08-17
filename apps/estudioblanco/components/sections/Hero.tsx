"use client";

import { useEffect, useRef } from "react";
import { mailto } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => undefined);
    };

    updatePlayback();
    reducedMotion.addEventListener("change", updatePlayback);
    return () => reducedMotion.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <section className="hero dotted-surface" id="inicio">
      <Container>
        <h1 className="type-heading-1">Diseñamos y construimos sistemas digitales.</h1>
        <div className="hero__support">
          <p>
            Combinamos diseño, software e inteligencia artificial para crear productos,
            herramientas y experiencias útiles para organizaciones.
          </p>
          <div className="button-group">
            <Button href={mailto("Proyecto para Estudio Blanco")}>Contratar Estudio</Button>
            <Button href="#visita" variant="outline">
              Coordinar una visita
            </Button>
          </div>
        </div>
        <figure className="documentary-image">
          <video
            ref={videoRef}
            src="/hero_eborg.mp4"
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Estudio Blanco"
          />
        </figure>
      </Container>
    </section>
  );
}
