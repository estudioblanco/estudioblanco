"use client";

import type { CSSProperties } from "react";

export type LogoVariant = "left" | "center" | "symbol";
export type LogoTexture = "grain" | "halftone" | "registration";

type LogoSparkProps = {
  variant: LogoVariant;
  texture?: LogoTexture;
  active?: boolean;
  className?: string;
};

const logoAssets: Record<LogoVariant, string> = {
  left: "/logo_left.svg",
  center: "/logo_center.svg",
  symbol: "/isotipo.svg",
};

export function LogoSpark({ variant, texture = "grain", active = false, className = "" }: LogoSparkProps) {
  const style = { "--logo-mask": `url("${logoAssets[variant]}")` } as CSSProperties;
  return (
    <span
      className={["logo-spark", `logo-spark--${variant}`, `logo-spark--${texture}`, active ? "is-active" : "", className].filter(Boolean).join(" ")}
      style={style}
      aria-hidden="true"
    >
      <span className="logo-spark__monochrome" />
      <span className="logo-spark__texture" />
    </span>
  );
}
