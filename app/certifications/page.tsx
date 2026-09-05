import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CertificateCard } from "@/components/ui/CertificateCard";
import { certificates } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Sertifikasi",
  description:
    "Sertifikat yang telah diperoleh Micael Zecsen Saragih, termasuk sertifikat kepanitiaan dan kursus.",
};

export default function CertificationsPage() {
  return (
    <main>
      <SectionWrapper>
        <Container>
          {/* Page heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Sertifikasi
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
            Kumpulan sertifikat yang telah saya peroleh dari kegiatan
            kepanitiaan, kursus, dan pengembangan diri selama perjalanan belajar.
          </p>

          {/* Certificate grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.file}
                certificate={certificate}
              />
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
