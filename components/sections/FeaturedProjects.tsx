import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Projek Pilihan
            </h2>
            <p className="mt-3 max-w-xl text-base text-text-muted">
              Beberapa projek yang pernah dan sedang saya kerjakan — sebagian besar
              dibangun secara mandiri sebagai bagian dari proses belajar.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors duration-[var(--transition-fast)]"
          >
            Lihat semua projek
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Featured Project Showcase */}
        <div className="mt-10">
          <FeaturedProjectCard project={featuredProject} />
        </div>

        {/* Other Projects Grid */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl font-semibold tracking-tight text-text">
            Projek Lainnya
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
