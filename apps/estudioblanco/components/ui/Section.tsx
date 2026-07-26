import type { HTMLAttributes, ReactNode } from "react";

export type SectionSurface = "paper" | "muted" | "dark" | "sage";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  surface?: SectionSurface;
};

export function Section({ children, className = "", surface = "paper", ...props }: SectionProps) {
  const classes = ["section", `surface-${surface}`, className].filter(Boolean).join(" ");
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}
