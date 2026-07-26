import { clients } from "@/content/site";
import { ClientRow } from "@/components/ui/ClientRow";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Clients() {
  const current = clients.filter((client) => client.group === "actual");
  const previous = clients.filter((client) => client.group === "anterior");

  return (
    <Section aria-labelledby="clients">
      <SectionHeader
        number="05"
        eyebrow="Colaboraciones"
        title="Clientes"
        note="Trabajo compartido"
        titleId="clients"
      />
      <div className="client-section">
        <h3 className="type-heading-3">Clientes actuales</h3>
        <div className="editorial-list">
          {current.map((client) => (
            <ClientRow key={client.title} client={client} />
          ))}
        </div>
        <h3 className="type-heading-3">Clientes anteriores</h3>
        <div className="editorial-list">
          {previous.map((client) => (
            <ClientRow key={client.title} client={client} />
          ))}
        </div>
      </div>
    </Section>
  );
}
