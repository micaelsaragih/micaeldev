import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | micaeldev",
  description: "Projek-projek yang pernah dan sedang dikerjakan oleh Micael Zecsen Saragih.",
};

export default function ProjectsPage() {
  return (
    <main>
      <SectionWrapper>
        <Container>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projek
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
            Beberapa projek yang pernah dan sedang saya kerjakan — sebagian
            besar dibangun secara mandiri sebagai bagian dari proses belajar
            dan eksplorasi teknologi.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col p-6">
                <h2 className="text-lg font-semibold">{project.title}</h2>
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
    </main>
  );
}
