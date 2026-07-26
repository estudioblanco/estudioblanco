export type MediaPlaceholderVariant = "grid" | "halftone" | "ruled" | "field" | "registration" | "orbit";

type MediaPlaceholderProps = {
  variant: MediaPlaceholderVariant;
  label: string;
};

export function MediaPlaceholder({ variant, label }: MediaPlaceholderProps) {
  return <div className={["media-placeholder", `media-placeholder--${variant}`].join(" ")} aria-hidden="true"><span>{label}</span><i /></div>;
}
