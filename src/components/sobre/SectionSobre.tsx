import Container from "@/components/layout/Container";
import { sobreContent } from "@/data/content";

export default function SectionSobre() {
  const { sobreGiz } = sobreContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna esquerda: título com imagem de background */}
          <div className="relative">
            <div className="relative bg-dark rounded-2xl p-12 min-h-75 flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://placehold.co/600x400/271E55/C2F628?text=BG')] bg-cover bg-center opacity-20" />
              <h2 className="relative z-10 font-archivo text-4xl lg:text-5xl font-bold text-white">
                {sobreGiz.title}
              </h2>
            </div>
          </div>

          {/* Coluna direita: quatro parágrafos */}
          <div className="space-y-6">
            {sobreGiz.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-dark/70 text-lg leading-relaxed text-left">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
