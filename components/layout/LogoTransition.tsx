"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LogoSpark, type LogoTexture } from "@/components/ui/LogoSpark";

type LogoTransitionProps = { isScrolled: boolean };
const textures: LogoTexture[] = ["grain", "halftone", "registration"];

export function LogoTransition({ isScrolled }: LogoTransitionProps) {
  const [sparkVisible, setSparkVisible] = useState(false);
  const [texture, setTexture] = useState<LogoTexture>("grain");
  const sparkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollingRef = useRef(false);

  const reveal = useCallback((duration = 220) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTexture(textures[Math.floor(Math.random() * textures.length)]);
    setSparkVisible(true);
    if (sparkTimerRef.current) clearTimeout(sparkTimerRef.current);
    sparkTimerRef.current = setTimeout(() => setSparkVisible(false), duration);
  }, []);

  useEffect(() => {
    let idleTimer: number | undefined;
    const onScroll = () => {
      scrollingRef.current = true;
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => { scrollingRef.current = false; }, 260);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(idleTimer);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const key = "estudio-blanco-logo-sparks";
    const count = Number(sessionStorage.getItem(key) ?? "0");
    if (count >= 2) return;
    let ambientTimer: ReturnType<typeof setTimeout>;
    let retryTimer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const delay = 18_000 + Math.random() * 27_000;
      ambientTimer = setTimeout(() => {
        if (scrollingRef.current) {
          retryTimer = setTimeout(schedule, 2_000);
          return;
        }
        reveal(120);
        sessionStorage.setItem(key, String(count + 1));
      }, delay);
    };
    schedule();
    return () => {
      clearTimeout(ambientTimer);
      clearTimeout(retryTimer);
    };
  }, [reveal]);

  return (
    <a className="logo-transition" href="#inicio" aria-label="Estudio Blanco, inicio" onPointerEnter={() => reveal()} onFocus={() => reveal()}>
      <LogoSpark variant="left" texture={texture} active={sparkVisible} className="logo-transition__left" />
      <LogoSpark variant="center" texture={texture} active={sparkVisible} className="logo-transition__center" />
      <LogoSpark variant="symbol" texture={texture} active={sparkVisible} className="logo-transition__symbol" />
      <span className="sr-only">{isScrolled ? "Estudio Blanco" : "Estudio Blanco, inicio"}</span>
    </a>
  );
}
