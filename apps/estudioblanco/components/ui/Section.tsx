import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export type SectionSurface = "paper" | "muted" | "dark" | "sage";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  surface?: SectionSurface;
};

export function Section({ children, className = "", surface = "paper", ...props }: SectionProps) {
  const classes = ["section", `surface-${surface}`, className].filter(Boolean).join(" ");
  return (
    <section className={classes} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
