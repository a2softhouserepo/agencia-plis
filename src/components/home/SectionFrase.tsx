import Container from "@/components/layout/Container";
import FooterVertical from "@/components/layout/FooterVertical";
import { homeContent } from "@/data/content";

export default function SectionFrase() {
  const { frase } = homeContent;

  return (
    <section className="py-24 bg-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna esquerda: frase e links verticais do footer */}
          <div>
            <p className="font-archivo text-3xl lg:text-4xl font-bold text-white leading-tight mb-12">
              {frase.line1}
              <br />
              <span className="text-accent">{frase.line2}</span>
            </p>
            <FooterVertical />
          </div>

          {/* Coluna direita: logo GIZ */}
          <div className="flex items-center justify-center lg:justify-end">
            <span className="font-archivo text-[10rem] lg:text-[14rem] font-bold text-accent/20 select-none leading-none">
              GIZ
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
