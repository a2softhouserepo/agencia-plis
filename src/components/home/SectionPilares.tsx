import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/content";
import Image from "next/image";

export default function SectionPilares() {
  const { pilares } = homeContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Titulo à esquerda */}
        <h2 className="font-archivo text-4xl lg:text-5xl font-bold text-dark mb-6 text-left">
          {pilares.title}
        </h2>

        {/* Texto à esquerda */}
        <p className="text-lg text-dark/70 max-w-2xl mb-12 leading-relaxed">
          {pilares.text}
        </p>

        {/* Lista com 6 tópicos */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {pilares.list.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-dark font-medium bg-dark/5 rounded-xl px-6 py-4"
            >
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-dark font-bold text-sm shrink-0">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Botão com ícone */}
        <div className="mb-16">
          <Button text={pilares.cta} href="/nosso-metodo#pilares" />
        </div>
      </Container>

      {/* Imagem full-width */}
      <div className="w-full">
        <Image
          src="https://placehold.co/1920x500/271E55/C2F628?text=Pilares+GIZ"
          alt="Os 6 Pilares GIZ"
          width={1920}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
