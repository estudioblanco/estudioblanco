"use client";

import type { CSSProperties } from "react";

export type LogoVariant = "left" | "center" | "symbol";

type LogoSparkProps = {
  variant: LogoVariant;
  className?: string;
};

const logoAssets: Record<LogoVariant, string> = {
  left: "/logo_left.svg",
  center: "/logo_center.svg",
  symbol: "/isotipo.svg",
};

export function LogoSpark({ variant, className = "" }: LogoSparkProps) {
  const style = { "--logo-mask": `url("${logoAssets[variant]}")` } as CSSProperties;
  return (
    <span
      className={["logo-spark", `logo-spark--${variant}`, className].filter(Boolean).join(" ")}
      style={style}
      aria-hidden="true"
    >
      <span className="logo-spark__monochrome" />
    </span>
  );
}
