"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-text transition-colors duration-[var(--transition-fast)] hover:text-primary"
          >
            micaeldev
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-sm font-medium transition-colors duration-[var(--transition-fast)] hover:text-primary ${
                        isActive ? "text-primary" : "text-text-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] p-2 text-text-muted transition-colors duration-[var(--transition-fast)] hover:text-text md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
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
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border/60 pb-4 md:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-medium transition-colors duration-[var(--transition-fast)] hover:bg-primary-light hover:text-primary ${
                        isActive
                          ? "bg-primary-light text-primary"
                          : "text-text-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
