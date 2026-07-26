import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionHeaderProps = {
  number: string;
  title: string;
  titleId: string;
  eyebrow?: string;
  note?: string;
};

export function SectionHeader({
  number,
  title,
  titleId,
  eyebrow = "Estudio Blanco",
  note,
}: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-number" aria-hidden="true">
        {number}
      </span>
      <div className="section-header__content">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={titleId}>{title}</h2>
        {note ? <p>{note}</p> : null}
      </div>
    </header>
  );
}
