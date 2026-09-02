import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { skillGroups } from "@/data/skills";
import {
  organizations,
  communities,
  activityHighlights,
} from "@/data/community";

export const metadata: Metadata = {
  title: "About | micaeldev",
  description: "Tentang Micael Zecsen Saragih — mahasiswa Ilmu Komputer di Universitas Negeri Medan.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Identity & Narrative */}
      <SectionWrapper>
        <Container>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tentang Saya
          </h1>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <p className="leading-relaxed text-text-muted">
                Saya{" "}
                <span className="font-medium text-text">
                  Micael Zecsen Saragih
                </span>
                , mahasiswa{" "}
                <span className="font-medium text-text">
                  Matematika — Program Studi Ilmu Komputer
                </span>{" "}
                di Universitas Negeri Medan, saat ini semester 6.
              </p>
              <p className="leading-relaxed text-text-muted">
                Ketertarikan saya terhadap teknologi sudah dimulai sejak kecil.
                Meski awalnya akses terhadap perangkat terbatas, rasa ingin tahu
                mendorong saya untuk terus belajar secara mandiri — melalui
                handphone, materi online, dan eksperimen pribadi.
              </p>
              <p className="leading-relaxed text-text-muted">
                Melalui proses seleksi SNBT, saya diterima di Program Studi
                Ilmu Komputer UNIMED. Sejak saat itu, perjalanan saya terus
                berkembang: membangun projek, mempelajari teknologi baru, dan
                terlibat dalam berbagai kegiatan kampus.
              </p>
            </div>

            <div className="space-y-5">
              <p className="leading-relaxed text-text-muted">
                Saya menikmati proses membangun sesuatu dari nol — memahami
                cara kerja sistem, bukan sekadar menulis kode. Pendekatan ini
                membantu saya tumbuh sebagai programmer yang lebih sadar
                konsep, bukan sekadar menghafal sintaks.
              </p>
              <p className="leading-relaxed text-text-muted">
                Di luar teknologi, saya percaya bahwa kemampuan komunikasi,
                adaptasi, dan kepemimpinan sama pentingnya. Saya aktif di
                organisasi kampus, terlibat sebagai panitia dan MC di berbagai
                acara, serta berpartisipasi di komunitas yang membantu saya
                berkembang secara personal.
              </p>
              <p className="leading-relaxed text-text-muted">
                Saat ini saya sedang mempelajari{" "}
                <span className="font-medium text-text">React</span> dan{" "}
                <span className="font-medium text-text">Arduino</span>, sambil
                terus meningkatkan kemampuan bahasa Inggris sebagai skill
                internasional yang penting untuk masa depan.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Technology & Skills */}
      <SectionWrapper>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">
            Teknologi &amp; Keahlian
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Community & Activities */}
      <SectionWrapper>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">
            Komunitas &amp; Aktivitas
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Organisasi &amp; Komunitas
              </h3>
              <div className="space-y-3">
                {[...organizations, ...communities].map((org) => (
                  <Card key={org.name} className="p-4" hover={false}>
                    <h4 className="font-medium">{org.name}</h4>
                    <p className="mt-1 text-sm text-text-muted">
                      {org.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Pengalaman &amp; Aktivitas
              </h3>
              <ul className="space-y-3">
                {activityHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                  >
                    <span
                      className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-primary/40"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Personal Interests */}
      <SectionWrapper>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">
            Minat Pribadi
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
            Di luar dunia teknologi, ada beberapa hal yang menjadi bagian dari
            kehidupan dan identitas saya.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Matematika",
              "Calisthenics",
              "Musik",
              "Flute",
              "Personal Development",
              "English Learning",
            ].map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
