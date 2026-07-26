"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { LogoTransition } from "@/components/layout/LogoTransition";

export function SiteHeader() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setIsScrolled(!entry.isIntersecting), {
      threshold: 0,
      rootMargin: "-1px 0px 0px 0px",
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="header-sentinel" aria-hidden="true" />
      <header className="site-header" data-scrolled={isScrolled ? "true" : "false"}>
        <Container className="site-header__inner">
          <div className="site-header__brand-zone">
            <LogoTransition isScrolled={isScrolled} />
          </div>
          <div className="site-header__center-zone" aria-hidden="true" />
          <div className="site-header__nav-zone">
            <DesktopNav />
          </div>
        </Container>
      </header>
    </>
  );
}
