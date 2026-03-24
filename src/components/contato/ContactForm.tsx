"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { contatoContent } from "@/data/content";
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
    <section id="contact-form" className={styles.section}>
      <Container>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldGrid}>
            {/* Coluna esquerda: campos */}
            <div className={styles.fields}>
              <input
                type="text"
                name="name"
                required
                placeholder={form.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                type="text"
                name="company"
                required
                placeholder={form.companyPlaceholder}
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                required
                placeholder={form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder={form.phonePlaceholder}
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            {/* Coluna direita: textarea */}
            <div>
              <label className={styles.messageLabel}>
                {form.messageLabel}
              </label>
              <textarea
                name="message"
                required
                placeholder={form.messagePlaceholder}
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
            <label htmlFor="consent" className={styles.checkboxLabel}>
              {form.checkbox}
            </label>
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
            {form.submit}
          </button>

          {/* Mensagens de status */}
          {status === "success" && (
            <p className={styles.successMsg}>{form.success}</p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>{form.error}</p>
          )}
        </form>
      </Container>
    </section>
  );
}
