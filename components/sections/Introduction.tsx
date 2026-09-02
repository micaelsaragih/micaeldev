import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function Introduction() {
  return (
    <SectionWrapper id="about">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">
          Tentang Saya
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="leading-relaxed text-text-muted">
              Saya mahasiswa{" "}
              <span className="text-text font-medium">
                Matematika — Program Studi Ilmu Komputer
              </span>{" "}
              di Universitas Negeri Medan, saat ini semester 6. Ketertarikan
              saya terhadap teknologi sudah dimulai sejak kecil — dan terus
              berkembang melalui eksplorasi mandiri, projek akademik, serta
              eksperimen pribadi.
            </p>
            <p className="leading-relaxed text-text-muted">
              Saya menikmati proses membangun sesuatu dari nol, memahami cara
              kerja sistem, dan belajar teknologi baru. Pendekatan saya
              terhadap programming bukan sekadar menulis kode, tetapi memahami
              konsep di baliknya.
            </p>
          </div>

          <div className="space-y-4">
            <p className="leading-relaxed text-text-muted">
              Di luar teknologi, saya aktif di organisasi kampus dan komunitas.
              Pengalaman sebagai panitia acara, MC, dan anggota komunitas
              membantu saya mengembangkan kemampuan komunikasi, adaptasi, dan
              kepemimpinan.
            </p>
            <p className="leading-relaxed text-text-muted">
              Saat ini saya sedang mempelajari{" "}
              <span className="text-text font-medium">React</span> dan{" "}
              <span className="text-text font-medium">Arduino</span>, sambil
              terus meningkatkan kemampuan bahasa Inggris sebagai skill
              internasional yang penting.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
