import type { Metadata } from "next";
import HeroContato from "@/components/contato/HeroContato";
import ContactForm from "@/components/contato/ContactForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Agência GIZ. Preencha o formulário e nossa equipe retornará em breve.",
};

export default function ContatoPage() {
  return (
    <>
      {/* Sessão 01: Banner Hero */}
      <HeroContato />

      {/* Sessão 02: Formulário */}
      <ContactForm />

      {/* Sessão 03: Rodapé com links */}
      <Footer />
    </>
  );
}
