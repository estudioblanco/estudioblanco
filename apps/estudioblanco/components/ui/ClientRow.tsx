import type { Client } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { StatusPill } from "@/components/ui/StatusPill";

type ClientRowProps = { client: Client };

export function ClientRow({ client }: ClientRowProps) {
  return (
    <article className="editorial-row client-row">
      <div className="editorial-row__link">
        <div className="editorial-row__identity">
          <Eyebrow>{client.number}</Eyebrow>
          <h3 className="type-heading-3">{client.title}</h3>
          <h4 className="type-heading-4">{client.subtitle}</h4>
        </div>
        <details className="client-row__details">
          <summary>
            <span className="client-row__more">Ver más</span>
            <span className="client-row__less">Ver menos</span>
          </summary>
          <p>{client.description}</p>
          <StatusPill>{client.status}</StatusPill>
        </details>
        <MediaPlaceholder variant={client.visual} className="media-placeholder--banner" />
      </div>
    </article>
  );
}
