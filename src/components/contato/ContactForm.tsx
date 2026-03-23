"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { contatoContent } from "@/data/content";
import { ArrowRight, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

export default function ContactForm() {
  const { form } = contatoContent;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.consent) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", message: "", consent: false });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 bg-white">
      <Container>
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Coluna esquerda: campos */}
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                required
                placeholder={form.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border border-dark/20 bg-white text-dark placeholder:text-dark/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
              <input
                type="text"
                name="company"
                required
                placeholder={form.companyPlaceholder}
                value={formData.company}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border border-dark/20 bg-white text-dark placeholder:text-dark/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border border-dark/20 bg-white text-dark placeholder:text-dark/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder={form.phonePlaceholder}
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border border-dark/20 bg-white text-dark placeholder:text-dark/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
            </div>

            {/* Coluna direita: textarea */}
            <div>
              <label className="block font-archivo font-semibold text-dark mb-2">
                {form.messageLabel}
              </label>
              <textarea
                name="message"
                required
                placeholder={form.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                rows={10}
                className="w-full px-6 py-4 rounded-xl border border-dark/20 bg-white text-dark placeholder:text-dark/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none h-full min-h-62.5"
              />
            </div>
          </div>

          {/* Checkbox de aceitação */}
          <div className="flex items-start gap-3 mb-8">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 h-5 w-5 rounded border-dark/20 text-accent focus:ring-accent accent-accent"
            />
            <label htmlFor="consent" className="text-dark/70 text-sm cursor-pointer">
              {form.checkbox}
            </label>
          </div>

          {/* Botão enviar */}
          <button
            type="submit"
            disabled={status === "sending" || !formData.consent}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-dark font-sora font-semibold text-sm tracking-wide transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <ArrowRight size={18} />
            )}
            {form.submit}
          </button>

          {/* Mensagens de status */}
          {status === "success" && (
            <p className="mt-6 text-green-600 font-medium">{form.success}</p>
          )}
          {status === "error" && (
            <p className="mt-6 text-red-600 font-medium">{form.error}</p>
          )}
        </form>
      </Container>
    </section>
  );
}
