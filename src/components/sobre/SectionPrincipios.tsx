import Container from "@/components/layout/Container";
import { sobreContent } from "@/data/content";

export default function SectionPrincipios() {
  const { principios } = sobreContent;

  return (
    <section id="section-principios" className="py-24 bg-dark/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna esquerda: título ao topo */}
          <div>
            <h2 className="font-archivo text-4xl lg:text-5xl font-bold text-dark">
              {principios.title}
            </h2>
          </div>

          {/* Coluna direita: lista com quatro tópicos */}
          <div className="space-y-8">
            {principios.list.map((item, i) => (
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
