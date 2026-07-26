import type { AnchorHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "light" | "outlineLight";
export type ButtonSize = "default" | "small";
export type ButtonTexture = "pigment" | "organic" | "iridescent" | "project";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  texture?: ButtonTexture;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "",
  outline: "button--outline",
  light: "button--light",
  outlineLight: "button--outline-light",
};

export function Button({ children, className = "", variant = "primary", size = "default", texture = "pigment", ...props }: ButtonProps) {
  const classes = ["button", variantClasses[variant], size === "small" ? "button--small" : "", `button--texture-${texture}`, className].filter(Boolean).join(" ");
  return <a className={classes} {...props}><span className="button__texture" aria-hidden="true" /><span className="button__label">{children}</span></a>;
}
