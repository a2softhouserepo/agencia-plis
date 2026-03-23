import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

interface ContactBody {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, company, email, phone, message } = body;

    // Validate required fields
    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (
      name.length > MAX_FIELD_LENGTH ||
      company.length > MAX_FIELD_LENGTH ||
      email.length > MAX_FIELD_LENGTH ||
      phone.length > MAX_FIELD_LENGTH
    ) {
      return NextResponse.json(
        { error: "Campo excede o tamanho máximo permitido." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "Mensagem excede o tamanho máximo permitido." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, company, email, phone, message });

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erro interno ao enviar mensagem." },
      { status: 500 }
    );
  }
}
