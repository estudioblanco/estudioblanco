import type { HTMLAttributes, ReactNode } from "react";

export type StackGap = "small" | "medium" | "large";
type StackProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode; gap?: StackGap };

export function Stack({ children, className = "", gap = "medium", ...props }: StackProps) {
  return <div className={["stack", `stack--${gap}`, className].filter(Boolean).join(" ")} {...props}>{children}</div>;
}
