import Container from "@/components/layout/Container";
import { metodoContent } from "@/data/content";
import { Layers } from "lucide-react";
import Image from "next/image";

export default function SectionPilares() {
  const { pilares } = metodoContent;

  return (
    <section id="pilares" className="py-24 bg-dark/5 scroll-mt-20">
      <Container>
        {/* Título — duas linhas com ícone à esquerda */}
        <div className="flex items-start gap-4 mb-8">
          <Layers size={48} className="text-accent shrink-0 mt-1" />
          <div>
            {pilares.titleLines.map((line, i) => (
              <h2
                key={i}
                className="font-archivo text-4xl lg:text-5xl font-bold text-dark leading-tight"
              >
                {line}
              </h2>
            ))}
          </div>
        </div>

        {/* Texto — dois parágrafos */}
        <div className="max-w-3xl mb-16 space-y-4">
          {pilares.paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-dark/70 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Grid de 6 cards — 3 por linha */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilares.cards.map((card, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Imagem topo */}
              <Image
                src={`https://placehold.co/400x240/271E55/C2F628?text=Pilar+${i + 1}`}
                alt={card.title}
                width={400}
                height={240}
                className="w-full h-48 object-cover"
              />

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="font-archivo text-xl font-bold text-dark mb-4">
                  {card.title}
                </h3>
                {card.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-dark/70 leading-relaxed mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
