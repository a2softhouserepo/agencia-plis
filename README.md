# Agência GIZ — Site Institucional

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/license-private-red)

Site institucional da **Agência GIZ** — uma agência de crescimento que combina estratégia, criatividade e execução para fazer marcas saírem do lugar.

---

## 📋 Índice

- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Desenvolvimento](#-desenvolvimento)
- [Build e Deploy](#-build-e-deploy)
- [Páginas](#-páginas)
- [Componentes](#-componentes)
- [API](#-api)

---

## 🛠 Stack Tecnológica

| Tecnologia       | Versão | Uso                            |
| ---------------- | ------ | ------------------------------ |
| Next.js          | 15.x   | Framework React (App Router)   |
| TypeScript       | 5.7    | Tipagem estática               |
| Tailwind CSS     | 4.x    | Estilização utility-first      |
| Lucide React     | 0.474  | Ícones SVG                     |
| NodeMailer       | 6.x    | Envio de e-mail via SMTP/Gmail |
| Vercel           | —      | Hospedagem e deploy            |

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx              # Layout raiz (Navbar, fontes, metadata)
│   ├── page.tsx                # Home (7 seções)
│   ├── globals.css             # Tailwind + variáveis CSS
│   ├── sobre/
│   │   └── page.tsx            # Sobre a GIZ (5 seções)
│   ├── nosso-metodo/
│   │   └── page.tsx            # Nosso Método (3 seções + LogoBand)
│   ├── contato/
│   │   └── page.tsx            # Contato (3 seções + formulário)
│   └── api/
│       └── contact/
│           └── route.ts        # API endpoint — envio de e-mail
├── components/
│   ├── layout/
│   │   ├── Container.tsx       # Wrapper 1644px centralizado
│   │   ├── Navbar.tsx          # Menu fixo no topo
│   │   ├── Footer.tsx          # Rodapé horizontal com links
│   │   └── FooterVertical.tsx  # Lista vertical de links (seção Frase)
│   ├── ui/
│   │   ├── Button.tsx          # Botão com ícone (primary/outline)
│   │   └── LogoBand.tsx        # Faixa de logo repetido full-width
│   ├── home/
│   │   ├── HeroBanner.tsx      # S01: Banner hero full-screen
│   │   ├── SectionMetodo.tsx   # S02: Preview do método
│   │   ├── SectionPilares.tsx  # S03: Preview dos 6 pilares
│   │   ├── SectionSobre.tsx    # S04: Breve sobre a GIZ
│   │   ├── SectionPorqueGiz.tsx# S05: Por que a GIZ?
│   │   ├── SectionFrase.tsx    # S06: Frase de efeito
│   │   └── SectionContato.tsx  # S07: CTA de contato
│   ├── sobre/
│   │   ├── SectionImagem.tsx   # S01: Imagem full-width
│   │   ├── SectionSobre.tsx    # S02: Sobre a GIZ (2 colunas)
│   │   ├── SectionPrincipios.tsx# S03: Nossos princípios
│   │   └── SectionFale.tsx     # S04: Fale com nosso time
│   ├── metodo/
│   │   ├── SectionImersao.tsx  # S01: Imersão GIZ
│   │   ├── SectionPilares.tsx  # S02: Os 6 Pilares (cards)
│   │   └── SectionEntrega.tsx  # S03: Entrega
│   └── contato/
│       ├── HeroContato.tsx     # S01: Hero do contato
│       └── ContactForm.tsx     # S02: Formulário
├── data/
│   └── content.ts              # Conteúdo textual centralizado
└── lib/
    └── mail.ts                 # Configuração NodeMailer
```

---

## ✅ Pré-requisitos

- **Node.js** >= 18.17
- **npm** >= 9
- Conta Gmail com [App Password](https://support.google.com/accounts/answer/185833) para o envio de formulários

---

## 🚀 Instalação

```bash
# Clonar repositório
git clone <url-do-repo> agencia-giz
cd agencia-giz

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas credenciais
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (use `.env.example` como referência):

| Variável                 | Descrição                           | Exemplo                |
| ------------------------ | ----------------------------------- | ---------------------- |
| `NODEMAILER_HOST`        | Servidor SMTP                       | `smtp.gmail.com`       |
| `NODEMAILER_PORT`        | Porta SMTP                          | `587`                  |
| `NODEMAILER_USER`        | E-mail de envio (remetente)         | `giz@gmail.com`        |
| `NODEMAILER_PASS`        | App Password do Gmail               | `xxxx xxxx xxxx xxxx`  |
| `NOTIFICATION_NODEMAILER`| E-mail de destino (notificações)    | `contato@giz.online`   |

> **Segurança:** Nunca commite o arquivo `.env`. Ele já está incluído no `.gitignore`.

---

## 💻 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acessar no navegador
open http://localhost:3000
```

---

## 🏗 Build e Deploy

### Build local

```bash
npm run build
npm start
```

### Deploy na Vercel

O projeto está configurado para deploy automático via Vercel:

| Branch    | Ambiente      | URL                    |
| --------- | ------------- | ---------------------- |
| `main`    | Produção      | `agenciagiz.vercel.app`|
| `staging` | Staging/QA    | `staging-agenciagiz.vercel.app` |

**Configuração na Vercel:**
1. Importar repositório no [Vercel Dashboard](https://vercel.com/new)
2. Adicionar as variáveis de ambiente em **Settings > Environment Variables**
3. Selecionar branches `main` (Production) e `staging` (Preview)

---

## 📄 Páginas

| Rota             | Página          | Seções | Rodapé |
| ---------------- | --------------- | ------ | ------ |
| `/`              | Home            | 7      | ❌     |
| `/sobre`         | Sobre a GIZ     | 5      | ✅     |
| `/nosso-metodo`  | Nosso Método    | 3+band | ❌     |
| `/contato`       | Contato         | 3      | ✅     |

---

## 🧩 Componentes

### Layout
- **Container** — Wrapper centralizado com `max-width: 1644px`
- **Navbar** — Menu fixo top, full-width, bg `#271E55`. Logo à direita, links à esquerda
- **Footer** — Rodapé horizontal com links (telefone, e-mail, localização, Instagram)
- **FooterVertical** — Mesma lista do Footer em formato vertical (usado na seção Frase)

### UI
- **Button** — Botão com ícone (ArrowRight). Variantes: `primary` | `outline`
- **LogoBand** — Faixa animada full-width com repetição do logo GIZ

---

## 🔌 API

### `POST /api/contact`

Recebe dados do formulário de contato e envia e-mail via NodeMailer/Gmail.

**Request body:**
```json
{
  "name": "João Silva",
  "company": "Empresa X",
  "email": "joao@empresa.com",
  "phone": "(11) 99999-9999",
  "message": "Gostaria de saber mais..."
}
```

**Responses:**
| Status | Descrição                   |
| ------ | --------------------------- |
| `200`  | Mensagem enviada com sucesso|
| `400`  | Campos inválidos/ausentes   |
| `500`  | Erro interno no envio       |

---

## 🎨 Design Tokens

| Token       | Valor     | Uso                              |
| ----------- | --------- | -------------------------------- |
| Dark        | `#271E55` | Menu, backgrounds, rodapé        |
| Accent      | `#C2F628` | Botões, ícones, destaques        |
| White       | `#FFFFFF` | Background geral                 |
| Sora        | Google Fonts | Textos e botões               |
| Archivo     | Google Fonts | Títulos e menu (font-stretch: expanded) |
| Container   | `1644px`  | Largura máxima do conteúdo       |

---

## 📝 Licença

Projeto privado — Agência GIZ. Todos os direitos reservados.
