import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/content";

export default function SectionContato() {
  const { contato } = homeContent;

  return (
    <section className="py-24 bg-white">
      <Container className="text-center max-w-3xl mx-auto">
        <h2 className="font-archivo text-4xl lg:text-5xl font-bold text-dark mb-6">
          {contato.title}
        </h2>
        <p className="text-lg text-dark/70 leading-relaxed mb-12">
          {contato.text}
        </p>
        <Button text={contato.cta} href="/contato" />
      </Container>
    </section>
  );
}
