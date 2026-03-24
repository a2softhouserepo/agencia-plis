import type { Metadata } from "next";
import SectionImagem from "@/components/sobre/SectionImagem";
import SectionSobre from "@/components/sobre/SectionSobre";
import SectionPrincipios from "@/components/sobre/SectionPrincipios";
import SectionFale from "@/components/sobre/SectionFale";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sobre a GIZ",
  description:
    "Conheça a Agência GIZ — uma agência de crescimento que combina estratégia, criatividade e execução para sua marca.",
};

export default function SobrePage() {
  return (
    <main id="page-sobre" className="page-sobre">
      {/* Sessão 01: Imagem */}
      <SectionImagem />

      {/* Sessão 02: Sobre a GIZ */}
      <SectionSobre />

      {/* Sessão 03: Nossos princípios */}
      <SectionPrincipios />

      {/* Sessão 04: Fale com nosso time */}
      <SectionFale />

      {/* Sessão 05: Rodapé */}
      <Footer />
    </main>
  );
}
