export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "SIMPAI — Sistem Pembimbing Artikel Ilmiah",
    description:
      "Aplikasi web untuk menganalisis draf artikel ilmiah. Sistem ini membantu mengevaluasi kelengkapan struktur artikel, kesesuaian template jurnal, serta memberikan evaluasi dan rekomendasi berbasis AI. Pengguna dapat menyediakan template jurnal agar draf dievaluasi berdasarkan struktur dan format yang lebih konkret.",
    image: "/images/simpai.png",
    tags: ["Web Development", "AI Integration", "Document Analysis"],
    status: "Dalam Pengembangan",
    liveUrl: "https://simpai-drab.vercel.app/",
    featured: true,
  },
  {
    title: "SmartQBank — Sistem Antrean Bank Digital",
    description:
      "Sistem antrean bank digital yang dirancang untuk mengubah proses antrean konvensional menjadi alur kerja digital yang lebih efisien. Mencakup konsep akses antrean berbasis QR Code, verifikasi identitas, pemilihan layanan, dan pemantauan antrean secara real-time.",
    image: "/images/smartqbank.png",
    tags: ["Web Development", "QR Code", "Realtime Monitoring"],
    status: "Dalam Pengembangan",
    liveUrl: "https://smartqbank.vercel.app/",
  },
  {
    title: "Website HMJ Matematika UNIMED",
    description:
      "Website yang dikembangkan untuk HMJ Matematika Universitas Negeri Medan. Mencakup informasi organisasi, divisi, visi misi, pengumuman, dan informasi terkait HMJ lainnya. Merupakan projek pengembangan independen.",
    image: "/images/hmj.png",
    tags: ["Web Development"],
    status: "Dalam Pengembangan",
    liveUrl: "https://sistem-hmj-matematika-unimed.vercel.app/",
  },
  {
    title: "Sorting Visualizer",
    description:
      "Simulasi web edukatif yang memvisualisasikan cara kerja algoritma sorting. Data direpresentasikan sebagai diagram batang bergerak yang menunjukkan perilaku sorting sesuai algoritma yang dipilih.",
    image: "/images/sorting.png",
    tags: ["Algorithms", "Visualization", "Web Development"],
    status: "Projek Akademik",
    liveUrl: "https://sorting-visualizer-lime-six.vercel.app/",
  },
];
