export type MediaPlaceholderVariant =
  "grid" | "halftone" | "ruled" | "field" | "registration" | "orbit";

type MediaPlaceholderProps = {
  variant: MediaPlaceholderVariant;
  label?: string;
  className?: string;
};

export function MediaPlaceholder({ variant, label, className = "" }: MediaPlaceholderProps) {
  return (
    <div
      className={["media-placeholder", `media-placeholder--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      {label ? <span>{label}</span> : null}
      <i />
    </div>
  );
}
