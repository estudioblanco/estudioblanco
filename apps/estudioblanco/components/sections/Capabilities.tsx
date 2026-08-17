import Image from "next/image";
import { capabilities } from "@/content/site";
import { Grid } from "@/components/ui/Grid";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const serviceIllustrations = [
  "/ilus_01_eborg.png",
  "/ilus_02_eborg.png",
  "/ilus_03_eborg.png",
] as const;

export function Capabilities() {
  return (
    <Section className="capabilities-section" aria-labelledby="capabilities">
      <SectionHeader
        number="01"
        eyebrow="Servicios"
        title="Nuestros servicios"
        titleId="capabilities"
      />
      <Grid columns={3} className="card-grid">
        {capabilities.map((item, index) => (
          <article className="editorial-card" key={item.title}>
            <div className="media-placeholder service-illustration" aria-hidden="true">
              <Image
                src={serviceIllustrations[index]}
                alt=""
                fill
                sizes="(max-width: 820px) 100vw, 33vw"
                unoptimized
              />
            </div>
            <h3 className="type-heading-3">{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </Grid>
    </Section>
  );
}
