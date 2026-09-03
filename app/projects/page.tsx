import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | micaeldev",
  description:
    "Daftar projek yang pernah dan sedang dikerjakan oleh Micael Zecsen Saragih — mencakup aplikasi web, analisis dokumen berbasis AI, sistem antrean, dan simulasi algoritma.",
};

export default function ProjectsPage() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main>
      <SectionWrapper>
        <Container>
          {/* Page Header */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
              Projek
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Kumpulan projek nyata yang pernah dan sedang saya kerjakan. Sebagian
              besar dibangun secara mandiri untuk memahami proses pengembangan
              perangkat lunak secara langsung — dari perancangan hingga implementasi.
            </p>
          </div>

          {/* Featured Project Section */}
          <div className="mt-12 sm:mt-16">
            <FeaturedProjectCard project={featuredProject} />
          </div>

          {/* Other Projects Section */}
          <div className="mt-16 sm:mt-20">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
                Projek Lainnya
              </h2>
              <p className="mt-2 text-base text-text-muted">
                Eksplorasi sistem antrean digital, website organisasi, dan simulasi visual algoritma.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Approach Note */}
          <div className="mt-16 rounded-[var(--radius-md)] border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-base font-semibold text-text">
              Pendekatan Pembelajaran
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Saya sering memilih membangun projek pembelajaran dan akademik secara mandiri
              agar dapat memahami keseluruhan alur teknologi — mulai dari perancangan antarmuka,
              integrasi logika dan API, hingga proses deployment. Setiap projek menjadi wadah
              eksplorasi nyata untuk memperdalam pemahaman teknologi.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
