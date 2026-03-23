import Container from "@/components/layout/Container";
import { contatoContent } from "@/data/content";
import Image from "next/image";

export default function HeroContato() {
  const { hero } = contatoContent;

  return (
    <section id="hero-contato" className="py-24 bg-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna esquerda: título e textos */}
          <div>
            <h1 className="font-archivo text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {hero.title}
            </h1>
            {hero.texts.map((text, i) => (
              <p
                key={i}
                className="text-lg text-white/70 leading-relaxed mb-4 last:mb-0"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Coluna direita: imagem */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://placehold.co/500x500/C2F628/271E55?text=Contato"
              alt="Entre em contato"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
