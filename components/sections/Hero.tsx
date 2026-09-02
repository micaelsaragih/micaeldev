import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { interests } from "@/data/skills";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background gradient orb */}
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

      <Container>
        <div className="relative py-20 md:py-32">
          {/* Greeting + Name */}
          <p className="text-sm font-medium text-primary">
            Halo, saya
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
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
          <div className="mt-8 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/projects">
              <Button>Lihat Projek</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline">Tentang Saya</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
