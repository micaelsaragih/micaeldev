export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  file: string;
  category: "kepanitiaan" | "kursus";
  certificateNumber?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Anggota Bidang Acara — Matematika Fair 2026",
    issuer:
      "Himpunan Mahasiswa Jurusan Matematika, FMIPA, Universitas Negeri Medan",
    date: "13 April 2026",
    description:
      "Sertifikat kepanitiaan sebagai anggota bidang acara pada kegiatan Matematika Fair 2026 dengan tema \"ChronoMath: Journey of Numbers Through Time\".",
    file: "/certificates/sertifikat_bidangacara.pdf",
    category: "kepanitiaan",
    certificateNumber: "No.43A/PP-MF/V/2026",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "IBM SkillsBuild",
    date: "12 Mei 2026",
    description:
      "Sertifikat penyelesaian kursus Introduction to Large Language Models melalui platform IBM SkillsBuild.",
    file: "/certificates/sertifikatibm.pdf",
    category: "kursus",
  },
];
