import type { ReactNode } from "react";

type AccordionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Accordion({ eyebrow, title, children }: AccordionProps) {
  return <details className="accordion"><summary><span className="meta-label">{eyebrow}</span><span>{title}</span><b aria-hidden="true">+</b></summary>{children}</details>;
}
