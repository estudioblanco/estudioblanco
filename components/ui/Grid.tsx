import type { HTMLAttributes, ReactNode } from "react";

export type GridColumns = 2 | 3 | 4;
type GridProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode; columns?: GridColumns };

export function Grid({ children, className = "", columns = 2, ...props }: GridProps) {
  return <div className={["layout-grid", `layout-grid--${columns}`, className].filter(Boolean).join(" ")} {...props}>{children}</div>;
}
