import { currentClients, previousClients } from "@/content/site";
import { Grid } from "@/components/ui/Grid";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

function ClientGroup({ label, clients }: { label: string; clients: string[] }) {
  return <div><span className="meta-label">{label}</span><h3>{clients.map((client, index) => <span key={client}>{index > 0 && <br />}{client}</span>)}</h3></div>;
}

export function Clients() {
  return <Section aria-labelledby="clients"><SectionHeader number="05" title="Colaboraciones" note="Trabajo compartido" titleId="clients" /><Grid columns={2} className="client-groups"><ClientGroup label="Colaboraciones actuales" clients={currentClients} /><ClientGroup label="Experiencia previa" clients={previousClients} /></Grid></Section>;
}
