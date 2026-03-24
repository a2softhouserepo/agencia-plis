import type { Metadata } from "next";
import { Sora, Archivo } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: {
    default: "Agência GIZ — Crescimento de Marca",
    template: "%s | Agência GIZ",
  },
  description:
    "A GIZ é uma agência de crescimento que combina estratégia, criatividade e execução para fazer sua marca sair do lugar e ocupar o espaço que merece.",
  keywords: [
    "agência",
    "marketing",
    "branding",
    "crescimento",
    "estratégia",
    "marca",
    "GIZ",
  ],
  openGraph: {
    title: "Agência GIZ — Crescimento de Marca",
    description:
      "Estratégia, criatividade e execução para fazer sua marca crescer.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${archivo.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
