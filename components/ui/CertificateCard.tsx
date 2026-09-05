import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Certificate } from "@/data/certifications";

interface CertificateCardProps {
  certificate: Certificate;
}

const categoryLabels: Record<Certificate["category"], string> = {
  kepanitiaan: "Kepanitiaan",
  kursus: "Kursus",
};

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Card className="flex flex-col p-5 sm:p-6">
      {/* Category badge */}
      <div className="mb-3">
        <Badge>{categoryLabels[certificate.category]}</Badge>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold leading-snug text-text sm:text-lg">
        {certificate.title}
      </h3>

      {/* Issuer */}
      <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
        {certificate.issuer}
      </p>

      {/* Date */}
      <p className="mt-1 text-xs text-text-muted">{certificate.date}</p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {certificate.description}
      </p>

      {/* Certificate number, if available */}
      {certificate.certificateNumber && (
        <p className="mt-2 text-xs text-text-muted">
          {certificate.certificateNumber}
        </p>
      )}

      {/* Spacer to push CTA to bottom */}
      <div className="mt-auto pt-5">
        <a
          href={certificate.file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover transition-colors duration-[var(--transition-fast)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Lihat Sertifikat
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm7.25-.338v0A.75.75 0 0 1 12.25 4h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.31l-5.72 5.72a.75.75 0 1 1-1.06-1.06l5.72-5.72H12.25a.75.75 0 0 1-.75-.596Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </Card>
  );
}
