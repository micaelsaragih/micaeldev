export interface Project {
  title: string;
  description: string;
  tags: string[];
  status?: string;
}

export const projects: Project[] = [
  {
    title: "SmartQBank",
    description:
      "Sistem manajemen antrian bank berbasis web menggunakan QR code dengan pemantauan jarak jauh melalui website.",
    tags: ["Web Development", "QR Code", "Realtime Monitoring"],
    status: "Prototipe — dalam pengembangan",
  },
  {
    title: "Scientific Article Analyzer",
    description:
      "Aplikasi web untuk menganalisis kelengkapan struktur dan isi artikel ilmiah menggunakan AI API.",
    tags: ["AI Integration", "Web Development"],
  },
  {
    title: "Sorting Algorithm Simulator",
    description:
      "Simulasi dan visualisasi berbagai algoritma sorting berbasis web.",
    tags: ["Algorithms", "Visualization", "Web Development"],
  },
  {
    title: "Website HMJ Matematika UNIMED",
    description:
      "Projek website untuk HMJ Matematika di Universitas Negeri Medan.",
    tags: ["Web Development"],
  },
  {
    title: "Website Absensi Gereja",
    description:
      "Sistem absensi berbasis web yang dibuat sebagai bagian dari projek mata kuliah.",
    tags: ["Web Development"],
  },
];
