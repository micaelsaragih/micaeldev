import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { socialLinks } from "@/data/social";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Mari Terhubung
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Tertarik untuk berdiskusi, berkolaborasi, atau sekadar menyapa?
            Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">{link.label}</Button>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
