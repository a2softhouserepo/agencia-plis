import Container from "@/components/layout/Container";
import { metodoContent } from "@/data/content";

export default function SectionImersao() {
  const { imersao } = metodoContent;

  return (
    <section id="section-imersao" className="py-24 bg-white">
      <Container>
        {/* Título com imagem de background */}
        <div className="relative bg-dark rounded-2xl p-12 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://placehold.co/1200x400/271E55/C2F628?text=Imersao')] bg-cover bg-center opacity-20" />
          <h1 className="relative z-10 font-archivo text-5xl lg:text-6xl font-bold text-white">
            {imersao.title}
          </h1>
        </div>

        {/* Subtítulo — duas linhas */}
        <div className="mb-12">
          {imersao.subtitleLines.map((line, i) => (
            <p
              key={i}
              className="font-archivo text-2xl lg:text-3xl font-semibold text-dark leading-tight"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Texto */}
        <p className="text-lg text-dark/70 leading-relaxed max-w-3xl mb-12">
          {imersao.text}
        </p>

        {/* Linha separadora */}
        <hr className="border-dark/10 mb-12" />

        {/* Texto centralizado — duas linhas */}
        <div className="text-center mb-12">
          {imersao.middleLines.map((line, i) => (
            <p
              key={i}
              className="font-archivo text-xl lg:text-2xl font-semibold text-dark"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Linha separadora */}
        <hr className="border-dark/10 mb-12" />

        {/* Título */}
        <h2 className="font-archivo text-3xl lg:text-4xl font-bold text-dark mb-6">
          {imersao.bottomTitle}
        </h2>

        {/* Texto */}
        <p className="text-lg text-dark/70 leading-relaxed max-w-3xl">
          {imersao.bottomText}
        </p>
      </Container>
    </section>
  );
}
