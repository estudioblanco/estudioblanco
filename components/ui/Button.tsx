import type { AnchorHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "light" | "outlineLight";
export type ButtonSize = "default" | "small";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "",
  outline: "button--outline",
  light: "button--light",
  outlineLight: "button--outline-light",
};

export function Button({ children, className = "", variant = "primary", size = "default", ...props }: ButtonProps) {
  const classes = ["button", variantClasses[variant], size === "small" ? "button--small" : "", className].filter(Boolean).join(" ");
  return <a className={classes} {...props}>{children}</a>;
}
