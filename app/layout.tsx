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
  title: "micaeldev",
  description: "Personal website of Micael Zecsen Saragih",
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
