import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <SectionWrapper id="projects">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">Projek</h2>
        <p className="mt-3 max-w-xl text-text-muted">
          Beberapa projek yang pernah dan sedang saya kerjakan — sebagian besar
          dibangun secara mandiri sebagai bagian dari proses belajar.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col p-6">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>
              {project.status && (
                <p className="mt-3 text-xs text-text-muted italic">
                  {project.status}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
