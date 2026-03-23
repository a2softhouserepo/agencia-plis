import Image from "next/image";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/content";
import bannerBg from "@/assets/banner-hero-bg.jpg";

export default function HeroBanner() {
  const { hero } = homeContent;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Background image */}
      <Image
        src={bannerBg}
        alt=""
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-b from-dark/80 via-dark/60 to-dark/90 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Titulo — duas linhas com tamanhos diferentes */}
        <h1 className="mb-8">
          <span className="block font-archivo text-6xl lg:text-7xl font-bold text-white leading-tight">
            {hero.titleLine1}
          </span>
          <span className="block font-archivo text-3xl lg:text-4xl font-semibold text-accent mt-2">
            {hero.titleLine2}
          </span>
        </h1>

        {/* Subtítulo — três linhas */}
        <div className="mb-12">
          {hero.subtitleLines.map((line, i) => (
            <p key={i} className="text-lg lg:text-xl text-white/80 leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        {/* Botão CTA */}
        <Button text={hero.cta} href="/contato" />
      </div>
    </section>
  );
}
