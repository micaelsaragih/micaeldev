import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-sm transition-[border-color,box-shadow] duration-[var(--transition-fast)] hover:border-border-hover hover:shadow-md">
      {/* Project Screenshot — Prominent presentation */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] w-full overflow-hidden border-b border-border bg-bg">
        <Image
          src={project.image}
          alt={`Tangkapan layar ${project.title}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          className="object-cover object-top transition-transform duration-[var(--transition-base)] group-hover:scale-[1.01]"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Meta Header: Tag + Status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase">
            01 · Projek Unggulan
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-full)] bg-slate-100 px-3 py-1 text-xs font-medium text-text-muted">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted sm:text-lg">
          {project.description}
        </p>

        {/* Focus tags */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-text-muted mr-1">Fokus:</span>
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Action CTA */}
        {project.liveUrl && (
          <div className="mt-8">
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors duration-[var(--transition-fast)] hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Lihat Projek
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 1 0-1.06l7.22-7.22H8.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V7.06l-7.22 7.22a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
