import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/content";
import Image from "next/image";

export default function SectionMetodo() {
  const { metodo } = homeContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Titulo à esquerda */}
        <h2 className="font-archivo text-4xl lg:text-5xl font-bold text-dark mb-12 text-left">
          {metodo.title}
        </h2>

        {/* Imagem centralizada */}
        <div className="flex justify-center mb-12">
          <Image
            src="https://placehold.co/800x400/271E55/C2F628?text=Metodo+GIZ"
            alt="Método GIZ"
            width={800}
            height={400}
            className="rounded-2xl"
          />
        </div>

        {/* Texto parágrafo */}
        <p className="text-lg text-dark/70 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {metodo.paragraph}
        </p>

        {/* Lista — três textos centralizados */}
        <ul className="flex flex-col items-center gap-4 mb-12">
          {metodo.list.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-dark font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Botão centralizado */}
        <div className="flex justify-center">
          <Button text={metodo.cta} href="/nosso-metodo" />
        </div>
      </Container>
    </section>
  );
}
