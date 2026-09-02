import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Certifications | micaeldev",
  description: "Sertifikasi dan kredensial Micael Zecsen Saragih.",
};

export default function CertificationsPage() {
  return (
    <main>
      <SectionWrapper>
        <Container>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Sertifikasi
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
            Halaman ini akan menampilkan sertifikasi dan kredensial yang telah
            saya peroleh seiring perjalanan belajar.
          </p>

          {/* Honest empty state */}
          <div className="mt-12 flex flex-col items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface px-6 py-16 text-center">
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
              aria-hidden="true"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold">Segera Hadir</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-muted">
              Sertifikasi dan kredensial yang sudah terverifikasi akan
              ditampilkan di sini. Saat ini data sedang dikumpulkan dan
              divalidasi.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
