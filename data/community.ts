export interface CommunityItem {
  name: string;
  description: string;
}

export const organizations: CommunityItem[] = [
  {
    name: "HMJ Matematika",
    description:
      "Aktif sebagai anggota dan terlibat dalam kepanitiaan acara, termasuk Matematika Fair.",
  },
  {
    name: "UKMKP",
    description: "Anggota Unit Kegiatan Mahasiswa Kerohanian Protestan.",
  },
  {
    name: "IKBKM",
    description: "Anggota organisasi kemahasiswaan.",
  },
];

export const communities: CommunityItem[] = [
  {
    name: "Calisthenics Medan",
    description: "Komunitas olahraga calisthenics di Medan.",
  },
  {
    name: "Kefas",
    description: "Komunitas rohani dan persekutuan.",
  },
];

export const activityHighlights: string[] = [
  "Panitia divisi acara — Matematika Fair (HMJ)",
  "MC di Matematika Fair",
  "MC di pertunjukan tari anak",
  "Pemain flute",
];
