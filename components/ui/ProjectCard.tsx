import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface shadow-sm transition-[border-color,box-shadow] duration-[var(--transition-fast)] hover:border-border-hover hover:shadow-md">
      {/* Project screenshot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg">
        <Image
          src={project.image}
          alt={`Tangkapan layar projek ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-[var(--transition-base)] ${
            project.title.includes("SmartQBank")
              ? "object-left-top scale-125 group-hover:scale-[1.3]"
              : "object-top group-hover:scale-[1.02]"
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold leading-snug">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        {/* Status */}
        {project.status && (
          <p className="mt-3 text-xs font-medium text-text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mr-1.5 align-middle" />
            {project.status}
          </p>
        )}

        {/* Focus tags */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-medium text-text-muted mr-1">Fokus:</span>
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Live demo link */}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-[var(--transition-fast)] hover:text-primary-hover"
          >
            Lihat Demo
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
        )}
      </div>
    </div>
  );
}
