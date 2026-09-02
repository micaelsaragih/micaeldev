import { Container } from "@/components/layout/Container";
import { socialLinks } from "@/data/social";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm font-medium text-text-muted">
            &copy; {currentYear} micaeldev
          </p>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors duration-[var(--transition-fast)] hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
