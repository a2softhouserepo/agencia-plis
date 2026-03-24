import type { Metadata } from "next";
import SectionImersao from "@/components/metodo/SectionImersao";
import SectionPilares from "@/components/metodo/SectionPilares";
import LogoBand from "@/components/ui/LogoBand";
import SectionEntrega from "@/components/metodo/SectionEntrega";

export const metadata: Metadata = {
  title: "Nosso Método — Imersão GIZ",
  description:
    "Conheça o método exclusivo da Agência GIZ: diagnóstico, estratégia e execução sob medida para o crescimento da sua marca.",
};

export default function NossoMetodoPage() {
  return (
    <main id="page-nosso-metodo" className="page-nosso-metodo">
      {/* Sessão 01: Imersão */}
      <SectionImersao />

      {/* Sessão 02: Os 6 Pilares */}
      <SectionPilares />

      {/* Sessão entre 2 e 3: repetição logo */}
      <LogoBand />

      {/* Sessão 03: Entrega */}
      <SectionEntrega />
    </main>
  );
}
