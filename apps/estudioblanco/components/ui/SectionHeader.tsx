type SectionHeaderProps = {
  number: string;
  title: string;
  note: string;
  titleId: string;
};

export function SectionHeader({ number, title, note, titleId }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span>{number}</span>
      <h2 id={titleId}>{title}</h2>
      <span>{note}</span>
    </div>
  );
}
