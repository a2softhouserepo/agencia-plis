import Container from "@/components/layout/Container";
import { homeContent } from "@/data/content";
import Image from "next/image";

export default function SectionSobre() {
  const { sobre } = homeContent;

  return (
    <section id="section-sobre" className="py-24 bg-dark/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna esquerda: titulo maior e imagem */}
          <div>
            <h2 className="font-archivo text-6xl lg:text-8xl font-bold text-dark mb-12">
              {sobre.titleLarge}
            </h2>
            <Image
              src="https://placehold.co/600x400/271E55/C2F628?text=Sobre+GIZ"
              alt="Sobre a GIZ"
              width={600}
              height={400}
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Coluna direita: titulo e texto */}
          <div className="lg:pt-12">
            <h3 className="font-archivo text-3xl font-bold text-dark mb-6">
              {sobre.titleRight}
            </h3>
            <p className="text-lg text-dark/70 leading-relaxed">
              {sobre.text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
