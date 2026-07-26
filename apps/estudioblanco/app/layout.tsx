import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./header.css";
import "./visual-review.css";
import "./refinement.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Estudio Blanco — Diseño, software e investigación",
  description:
    "Laboratorio independiente de diseño, software, inteligencia artificial e investigación en General Madariaga.",
  openGraph: {
    title: "Estudio Blanco",
    description: "Diseñamos sistemas simples para resolver problemas complejos.",
    type: "website",
    locale: "es_AR",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "64x64" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
