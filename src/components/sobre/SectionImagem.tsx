import Image from "next/image";

export default function SectionImagem() {
  return (
    <section id="section-imagem" className="w-full">
      <Image
        src="https://placehold.co/1920x600/271E55/C2F628?text=Sobre+a+GIZ"
        alt="Sobre a GIZ"
        width={1920}
        height={600}
        className="w-full h-[60vh] object-cover"
        priority
      />
    </section>
  );
}
