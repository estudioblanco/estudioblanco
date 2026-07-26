import type { ReactNode } from "react";

type EyebrowProps = { children: ReactNode; trailing?: ReactNode; className?: string };

export function Eyebrow({ children, trailing, className = "" }: EyebrowProps) {
  return <div className={["eyebrow", className].filter(Boolean).join(" ")}><span>{children}</span>{trailing ? <span>{trailing}</span> : null}</div>;
}
