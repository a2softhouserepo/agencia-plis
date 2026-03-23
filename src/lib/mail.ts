import nodemailer from "nodemailer";

interface ContactData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT) || 587,
  secure: Number(process.env.NODEMAILER_PORT) === 465,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export async function sendContactEmail(data: ContactData) {
  const { name, company, email, phone, message } = data;

  const htmlBody = `
    <h2>Novo contato via site — Agência GIZ</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;font-weight:bold;">Nome:</td><td style="padding:8px;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;">Empresa:</td><td style="padding:8px;">${escapeHtml(company)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;">E-mail:</td><td style="padding:8px;">${escapeHtml(email)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;">Telefone:</td><td style="padding:8px;">${escapeHtml(phone)}</td></tr>
    </table>
    <h3>Mensagem:</h3>
    <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
  `;

  await transporter.sendMail({
    from: `"Site GIZ" <${process.env.NODEMAILER_USER}>`,
    to: process.env.NOTIFICATION_NODEMAILER,
    replyTo: email,
    subject: `Novo contato: ${name} — ${company}`,
    html: htmlBody,
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
