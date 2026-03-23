import Container from "@/components/layout/Container";
import { metodoContent } from "@/data/content";
import { Package, CheckCircle } from "lucide-react";

export default function SectionEntrega() {
  const { entrega } = metodoContent;

  return (
    <section className="py-24 bg-dark">
      <Container className="text-center">
        {/* Ícone e texto — um abaixo do outro */}
        <Package size={48} className="text-accent mx-auto mb-6" />
        <h2 className="font-archivo text-4xl lg:text-5xl font-bold text-white mb-4">
          {entrega.title}
        </h2>
        <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-16">
          {entrega.text}
        </p>

        {/* Lista centralizada com cinco tópicos */}
        <ul className="flex flex-col items-center gap-6 max-w-xl mx-auto">
          {entrega.list.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-4 text-white text-lg"
            >
              <CheckCircle size={24} className="text-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
