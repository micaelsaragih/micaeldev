import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/data/social";

export const metadata: Metadata = {
  title: "Contact | micaeldev",
  description: "Hubungi Micael Zecsen Saragih melalui GitHub atau LinkedIn.",
};

export default function ContactPage() {
  return (
    <main>
      <SectionWrapper>
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mari Terhubung
            </h1>
            <p className="mt-4 leading-relaxed text-text-muted">
              Tertarik untuk berdiskusi, berkolaborasi, atau sekadar menyapa?
              Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full sm:w-auto">
                    {link.label}
                  </Button>
                </a>
              ))}
            </div>

            <p className="mt-10 text-sm text-text-muted">
              Informasi kontak tambahan akan ditambahkan seiring berjalannya
              waktu.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
