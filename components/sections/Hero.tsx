import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { interests } from "@/data/skills";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
      />
      {/* Subtle atmospheric glow behind right column for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/4 hidden h-[350px] w-[350px] rounded-full opacity-15 blur-3xl md:block"
        style={{
          background: "radial-gradient(circle, #0284c7, transparent)",
        }}
      />

      <Container>
        <div className="relative py-14 md:py-20 lg:py-24">
          {/* Two-column grid: text left, photo right */}
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10 lg:gap-14">
            {/* ── Left column: text content ── */}
            <div className="relative">
              {/* Subtle dark/navy radial gradient for text readability */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl opacity-[0.12]"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 50%, #0c1929 0%, transparent 70%)",
                }}
              />

              {/* Greeting + Name */}
              <p className="text-sm font-medium text-primary">
                Halo, saya
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  Micael Zecsen Saragih
                </span>
              </h1>
              <p className="mt-2 text-lg font-medium text-text-muted sm:text-xl">
                micaeldev
              </p>

              {/* Academic + Career direction */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
                Mahasiswa Matematika — Program Studi Ilmu Komputer di{" "}
                <span className="text-text">Universitas Negeri Medan</span>.
                Tertarik membangun dan belajar di dunia software engineering
                — satu projek, satu eksperimen pada satu waktu.
              </p>

              {/* Technology interest badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest}>{interest}</Badge>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects">
                  <Button>Lihat Projek</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Tentang Saya</Button>
                </Link>
              </div>
            </div>

            {/* ── Right column: profile photo ── */}
            <div className="flex justify-center md:justify-end">
              <div
                className="relative h-[280px] w-[240px] sm:h-[320px] sm:w-[270px] md:h-[370px] md:w-[300px] lg:h-[440px] lg:w-[360px]"
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Foto profil Micael Zecsen Saragih"
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 300px, 360px"
                  priority
                  className="rounded-2xl object-cover object-top"
                  style={{
                    boxShadow:
                      "var(--shadow-md), 0 0 50px rgba(2, 132, 199, 0.15)",
                    border: "1px solid rgba(2, 132, 199, 0.1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
