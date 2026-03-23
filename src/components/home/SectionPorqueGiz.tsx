import Container from "@/components/layout/Container";
import { homeContent } from "@/data/content";

export default function SectionPorqueGiz() {
  const { porqueGiz } = homeContent;

  return (
    <section id="section-porque-giz" className="relative py-24 bg-white overflow-hidden">
      {/* Imagens de background decorativas */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-dark/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna esquerda: titulo e logo */}
          <div>
            <h2 className="font-archivo text-4xl lg:text-5xl font-bold text-dark mb-12">
              {porqueGiz.title}
            </h2>
            <span className="font-archivo text-8xl font-bold text-accent/20 select-none">
              GIZ
            </span>
          </div>

          {/* Coluna direita: lista de 4 tópicos */}
          <div className="space-y-8">
            {porqueGiz.list.map((item, i) => (
              <div key={i} className="border-l-4 border-accent pl-6">
                <h3 className="font-archivo text-xl font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-dark/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
