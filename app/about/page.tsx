import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Card } from "@/components/ui/Card";
import {
  organizations,
  communities,
  activityHighlights,
} from "@/data/community";

export const metadata: Metadata = {
  title: "About | micaeldev",
  description:
    "Mengenal lebih dekat Micael Zecsen Saragih: perjalanan belajar, fokus teknologi, hingga minat di luar kode.",
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. Introduction */}
      <SectionWrapper className="pt-12 pb-16 md:pt-20">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Tentang Saya
          </h1>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              Halo! Saya{" "}
              <span className="font-medium text-text">
                Micael Zecsen Saragih
              </span>
              , mahasiswa program studi{" "}
              <span className="font-medium text-text">Ilmu Komputer</span> di{" "}
              <span className="font-medium text-text">
                Universitas Negeri Medan
              </span>{" "}
              (Semester 6).
            </p>
            <p>
              Saya menaruh minat besar pada ranah Software Engineering, dengan
              fokus mengeksplorasi Web Development, AI/ML, Cybersecurity, dan
              Data. Saya menikmati proses membangun sistem dari nol, memahami
              fundamental di balik sebuah teknologi, dan terus mengasah diri
              melalui pembelajaran mandiri.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 2. My journey into technology */}
      <SectionWrapper className="bg-surface">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Perjalanan Teknologi
          </h2>
          <div className="mt-8 grid gap-8 text-base leading-relaxed text-text-muted md:grid-cols-2">
            <div className="space-y-5">
              <p>
                Rasa ingin tahu saya terhadap teknologi sudah muncul sejak kecil.
                Saat itu, keterbatasan akses tidak menghalangi saya untuk
                belajar. Sebuah handphone menjadi perangkat utama saya untuk
                mulai mengeksplorasi dunia digital, membaca berbagai informasi,
                dan memahami bagaimana teknologi bekerja secara konsep.
              </p>
              <p>
                Tekad tersebut membawa saya belajar dengan giat hingga akhirnya
                saya diterima di program studi Ilmu Komputer Universitas Negeri
                Medan melalui jalur SNBT. Di kampus inilah ruang eksplorasi saya
                menjadi jauh lebih luas.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Saya mulai memanfaatkan fasilitas teknologi yang ada di kampus
                untuk belajar lebih dalam. Seiring berjalannya waktu, saya
                berhasil mengumpulkan dana untuk membeli sebuah laptop
                bekas—sebuah langkah penting yang memungkinkan saya berlatih
                coding secara konsisten dan mulai membangun projek-projek
                personal.
              </p>
              <p>
                Perjalanan ini mengajarkan saya bahwa persistensi adalah modal
                utama. Kini, saya terus mengembangkan diri, bereksperimen dengan
                kode, dan mempersiapkan diri menjadi seorang praktisi teknologi
                yang adaptif.
              </p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. What I am learning */}
      <SectionWrapper>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Fokus Pembelajaran
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-text-muted">
            <p>
              Sebagai pembelajar mandiri, saya selalu berusaha menyeimbangkan
              antara teori akademis dan praktik langsung. Ketertarikan saya
              mencakup berbagai area, mulai dari Web Development, pemanfaatan
              AI/ML, konsep Cybersecurity, hingga pengolahan Data.
            </p>
            <p>
              Saat ini, fokus utama saya adalah mendalami ekosistem{" "}
              <span className="font-medium text-text">React</span> untuk
              pengembangan antarmuka web modern, serta mengeksplorasi{" "}
              <span className="font-medium text-text">Arduino</span> untuk
              memahami interaksi perangkat keras dan lunak. Di samping
              keterampilan teknis, saya juga secara aktif berupaya meningkatkan
              kemampuan bahasa Inggris saya, menyadari pentingnya bahasa ini
              sebagai pintu gerbang ilmu di dunia teknologi global.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Community & activities */}
      <SectionWrapper className="bg-surface">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Komunitas &amp; Aktivitas
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
            Bagi saya, keterampilan komunikasi, kerja sama tim, dan kepemimpinan
            sama pentingnya dengan menulis kode. Oleh karena itu, saya aktif
            mengambil peran di berbagai ruang interaksi.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Organisasi &amp; Komunitas
              </h3>
              <div className="space-y-4">
                {[...organizations, ...communities].map((org) => (
                  <Card key={org.name} className="p-5" hover={false}>
                    <h4 className="font-medium text-text">{org.name}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                      {org.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Pengalaman Peran
              </h3>
              <ul className="space-y-4 rounded-[var(--radius-md)] border border-border bg-bg p-5 shadow-sm">
                {activityHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                  >
                    <span
                      className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-primary/60"
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

      {/* 5. Beyond Code */}
      <SectionWrapper>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Di Luar Kode
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted">
            Dunia tidak selamanya tentang layar dan sintaks. Di luar aktivitas
            teknologi, saya memiliki ketertarikan pada musik dan menikmati waktu
            dengan bermain seruling (flute). Aktivitas ini menjadi ruang yang
            tepat bagi saya untuk mengekspresikan diri, menjaga keseimbangan,
            dan sekadar menikmati momen di luar rutinitas teknis.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-md)] border border-border shadow-sm sm:col-span-2">
              <Image
                src="/images/seruling3.png"
                alt="Micael bermain flute bersama ensemble musik"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-cols-1 md:col-span-1 md:grid-cols-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-md)] border border-border shadow-sm">
                <Image
                  src="/images/seruling1.png"
                  alt="Micael bermain flute secara individu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-md)] border border-border shadow-sm">
                <Image
                  src="/images/seruling2.png"
                  alt="Micael berpose memegang flute"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
