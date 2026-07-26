import type { ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
};

export function Container({ as: Component = "div", children, className = "", ...props }: ContainerProps) {
  return <Component className={["container", className].filter(Boolean).join(" ")} {...props}>{children}</Component>;
}
