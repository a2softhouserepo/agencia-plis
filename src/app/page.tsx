import HeroBanner from "@/components/home/HeroBanner";
import SectionMetodo from "@/components/home/SectionMetodo";
import LogoBand from "@/components/ui/LogoBand";
import SectionPilares from "@/components/home/SectionPilares";
import SectionSobre from "@/components/home/SectionSobre";
import SectionPorqueGiz from "@/components/home/SectionPorqueGiz";
import SectionFrase from "@/components/home/SectionFrase";
import SectionContato from "@/components/home/SectionContato";

export default function HomePage() {
  return (
    <>
      {/* Sessão 01: Banner Hero */}
      <HeroBanner />

      {/* Sessão 02: Objetivo levar para Nosso Método */}
      <SectionMetodo />

      {/* Sessão entre 02 e 03: repetição do logo */}
      <LogoBand />

      {/* Sessão 03: Objetivo levar para 6 Pilares */}
      <SectionPilares />

      {/* Sessão 04: Breve Sobre */}
      <SectionSobre />

      {/* Sessão 05: Porque a GIZ */}
      <SectionPorqueGiz />

      {/* Sessão 06: Frase de efeito */}
      <SectionFrase />

      {/* Sessão 07: Contato */}
      <SectionContato />
    </>
  );
}
