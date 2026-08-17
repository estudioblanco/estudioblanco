import { clients } from "@/content/site";
import { ClientRow } from "@/components/ui/ClientRow";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Clients() {
  const current = clients.filter((client) => client.group === "actual");
  const previous = clients.filter((client) => client.group === "anterior");
  const groups = [
    { title: "Clientes actuales", items: current },
    { title: "Clientes anteriores", items: previous },
  ];

  return (
    <Section className="clients-section" aria-labelledby="clients">
      <SectionHeader
        number="05"
        eyebrow="Colaboraciones"
        title="Clientes"
        note="Trabajo compartido"
        titleId="clients"
      />
      <div className="client-section">
        {groups.map((group) => {
          const primary = group.items.slice(0, 3);
          const remaining = group.items.slice(3);

          return (
            <div className="client-group" key={group.title}>
              <h3 className="type-heading-3">{group.title}</h3>
              <div className="editorial-list">
                {primary.map((client) => (
                  <ClientRow key={client.title} client={client} />
                ))}
              </div>
              {remaining.length > 0 ? (
                <details className="client-group__overflow">
                  <summary>
                    Ver {remaining.length} colaboración{remaining.length === 1 ? "" : "es"} más
                  </summary>
                  <div className="editorial-list client-group__overflow-list">
                    {remaining.map((client) => (
                      <ClientRow key={client.title} client={client} />
                    ))}
                  </div>
                </details>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
