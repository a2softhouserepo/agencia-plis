"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { contatoContent, siteConfig } from "@/data/content";
import { ArrowRight, Loader2 } from "lucide-react";
import styles from "./ContactForm.module.css";

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
      const lines = [
        `*Nome:* ${formData.name}`,
        `*Empresa:* ${formData.company}`,
        `*E-mail:* ${formData.email}`,
        `*Telefone:* ${formData.phone}`,
        "",
        `*Mensagem:*`,
        formData.message,
      ];

      const text = encodeURIComponent(lines.join("\n"));
      const url = `https://wa.me/${siteConfig.whatsapp}?text=${text}`;

      window.open(url, "_blank", "noopener,noreferrer");

      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", message: "", consent: false });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact-form" className={styles.section}>
      <Container>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldGrid}>
            {/* Coluna esquerda: campos */}
            <div className={styles.fields}>
              <div className={styles.fieldWrap}>
                <label htmlFor="name" className={styles.label} dangerouslySetInnerHTML={{ __html: form.nameLabel }} />
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder=""
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.fieldWrap}>
                <label htmlFor="company" className={styles.label} dangerouslySetInnerHTML={{ __html: form.companyLabel }} />
                <input
                  id="company"
                  type="text"
                  name="company"
                  required
                  placeholder=""
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.fieldWrap}>
                <label htmlFor="email" className={styles.label} dangerouslySetInnerHTML={{ __html: form.emailLabel }} />
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.fieldWrap}>
                <label htmlFor="phone" className={styles.label} dangerouslySetInnerHTML={{ __html: form.phoneLabel }} />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder=""
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </div>

            {/* Coluna direita: textarea */}
            <div className={styles.fieldWrap}>
              <label className={styles.messageLabel} dangerouslySetInnerHTML={{ __html: form.messageLabel }} />
              <textarea
                name="message"
                required
                placeholder=""
                value={formData.message}
                onChange={handleChange}
                rows={10}
                className={styles.textarea}
              />
            </div>
          </div>

          {/* Checkbox de aceitação */}
          <div className={styles.checkboxWrap}>
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className={styles.checkbox}
            />
            <label htmlFor="consent" className={styles.checkboxLabel} dangerouslySetInnerHTML={{ __html: form.checkbox }} />
          </div>

          {/* Botão enviar */}
          <button
            type="submit"
            disabled={status === "sending" || !formData.consent}
            className={styles.submitBtn}
          >
            {status === "sending" ? (
              <Loader2 size={18} className={styles.spin} />
            ) : (
              <ArrowRight size={18} />
            )}
            <span dangerouslySetInnerHTML={{ __html: form.submit }} />
          </button>

          {/* Mensagens de status */}
          {status === "success" && (
            <p className={styles.successMsg} dangerouslySetInnerHTML={{ __html: form.success }} />
          )}
          {status === "error" && (
            <p className={styles.errorMsg} dangerouslySetInnerHTML={{ __html: form.error }} />
          )}
        </form>
      </Container>
    </section>
  );
}
