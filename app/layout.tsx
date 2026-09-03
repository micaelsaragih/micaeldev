import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://micaeldev.vercel.app"),
  title: {
    default: "Micael Zecsen Saragih | micaeldev",
    template: "%s | micaeldev",
  },
  description:
    "Portofolio Micael Zecsen Saragih (micaeldev). Mahasiswa Matematika — Ilmu Komputer di Universitas Negeri Medan dengan minat pada Web Development, AI/ML, Cybersecurity, dan Data.",
  authors: [{ name: "Micael Zecsen Saragih", url: "https://micaeldev.vercel.app" }],
  creator: "Micael Zecsen Saragih",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://micaeldev.vercel.app",
    title: "Micael Zecsen Saragih | micaeldev",
    description:
      "Portofolio Micael Zecsen Saragih (micaeldev). Mahasiswa Matematika — Ilmu Komputer di Universitas Negeri Medan dengan minat pada Web Development, AI/ML, Cybersecurity, dan Data.",
    siteName: "micaeldev",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={inter.variable}>
      <body className={`${inter.className} bg-bg text-text`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
