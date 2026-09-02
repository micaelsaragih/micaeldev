import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">
          Teknologi &amp; Keahlian
        </h2>
        <p className="mt-3 max-w-xl text-text-muted">
          Teknologi yang pernah saya gunakan, sedang saya pelajari, dan area
          yang menjadi fokus ketertarikan saya.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
