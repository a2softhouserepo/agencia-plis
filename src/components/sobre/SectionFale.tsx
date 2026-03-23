import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { sobreContent } from "@/data/content";

export default function SectionFale() {
  const { fale } = sobreContent;

  return (
    <section className="py-24 bg-white">
      <Container className="text-center">
        <p className="font-archivo text-3xl lg:text-4xl font-bold text-dark leading-tight mb-12">
          {fale.line1}
          <br />
          {fale.line2}
        </p>
        <Button text={fale.cta} href="/contato" />
      </Container>
    </section>
  );
}
