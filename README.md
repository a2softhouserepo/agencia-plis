# Agência GIZ — Site Institucional

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-%23000?logo=cssmodules)
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
- [Estilização](#-estilização)
- [API](#-api)

---

## 🛠 Stack Tecnológica

| Tecnologia       | Versão | Uso                                     |
| ---------------- | ------ | --------------------------------------- |
| Next.js          | 15.x   | Framework React (App Router)            |
| TypeScript       | 5.7    | Tipagem estática                        |
| CSS Modules      | —      | Estilização por componente              |
| CSS Custom Props | —      | Design tokens globais (`:root`)         |
| Lucide React     | 0.474  | Ícones SVG                              |
| NodeMailer       | 6.x    | Envio de e-mail via SMTP/Gmail          |
| Vercel           | —      | Hospedagem e deploy                     |

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx              # Layout raiz (Navbar, fontes, metadata)
│   ├── page.tsx                # Home (7 seções)
│   ├── globals.css             # Reset + design tokens (:root) + .container-giz
│   ├── sobre/
│   │   └── page.tsx            # Sobre a GIZ (5 seções)
│   ├── nosso-metodo/
│   │   └── page.tsx            # Nosso Método (3 seções + LogoBand)
│   ├── contato/
│   │   └── page.tsx            # Contato (hero + formulário)
│   └── api/
│       └── contact/
│           └── route.ts        # API endpoint — envio de e-mail
├── assets/                     # Imagens estáticas (importação via next/image)
│   ├── banner-hero-bg.jpg
│   └── contato-falante.png
├── components/
│   ├── layout/
│   │   ├── Container.tsx       # Wrapper centralizado (max-width: 1860px)
│   │   ├── Navbar.tsx          # Menu fixo no topo com animação de scroll
│   │   ├── Footer.tsx          # Rodapé horizontal com links
│   │   └── FooterVertical.tsx  # Lista vertical de links (seção Frase)
│   ├── ui/
│   │   ├── Button.tsx          # Botão com ícone (primary/outline)
│   │   ├── Button.module.css
│   │   ├── LogoBand.tsx        # Faixa animada full-width com logo GIZ
│   │   └── LogoBand.module.css
│   ├── home/
│   │   ├── HeroBanner.tsx / .module.css      # S01: Banner hero full-screen
│   │   ├── SectionMetodo.tsx / .module.css   # S02: Preview do método
│   │   ├── SectionPilares.tsx / .module.css  # S03: Preview dos 6 pilares
│   │   ├── SectionSobre.tsx / .module.css    # S04: Breve sobre a GIZ
│   │   ├── SectionPorqueGiz.tsx / .module.css# S05: Por que a GIZ?
│   │   ├── SectionFrase.tsx / .module.css    # S06: Frase de efeito
│   │   └── SectionContato.tsx / .module.css  # S07: CTA de contato
│   ├── sobre/
│   │   ├── SectionImagem.tsx / .module.css   # S01: Imagem full-width
│   │   ├── SectionSobre.tsx / .module.css    # S02: Sobre a GIZ (2 colunas)
│   │   ├── SectionPrincipios.tsx / .module.css# S03: Nossos princípios
│   │   └── SectionFale.tsx / .module.css     # S04: Fale com nosso time
│   ├── metodo/
│   │   ├── SectionImersao.tsx / .module.css  # S01: Imersão GIZ
│   │   ├── SectionPilares.tsx / .module.css  # S02: Os 6 Pilares (cards)
│   │   └── SectionEntrega.tsx / .module.css  # S03: Entrega
│   └── contato/
│       ├── HeroContato.tsx / .module.css     # S01: Hero do contato
│       └── ContactForm.tsx / .module.css     # S02: Formulário de contato
├── data/
│   └── content.ts              # Conteúdo textual centralizado (única fonte)
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

1. Importar repositório no [Vercel Dashboard](https://vercel.com/new)
2. Adicionar as variáveis de ambiente em **Settings > Environment Variables**
3. Deploy automático a cada push na branch `main`

---

## 📄 Páginas

| Rota             | Página          | Seções | Rodapé |
| ---------------- | --------------- | ------ | ------ |
| `/`              | Home            | 7      | ❌     |
| `/sobre`         | Sobre a GIZ     | 5      | ✅     |
| `/nosso-metodo`  | Nosso Método    | 3+band | ❌     |
| `/contato`       | Contato         | 2      | ✅     |

- **Footer** não está no `layout.tsx` — é adicionado manualmente em cada página que precisa
- **`<LogoBand />`** aparece entre as seções 02 e 03 nas páginas Home e Nosso Método
- **`/contato`** usa a classe `page-contato` no body (bg `#ECECE2`)

---

## 🧩 Componentes

### Layout
- **Container** — Wrapper centralizado com `max-width: 1860px` (classe `.container-giz`)
- **Navbar** — Menu fixo no topo (`position: fixed`, `z-index: 50`). Altura padrão 208px, diminui para 120px com animação suave ao rolar a página. Logo SVG também diminui proporcionalmente via CSS transition
- **Footer** — Rodapé horizontal com links (telefone, e-mail, localização, Instagram)
- **FooterVertical** — Mesma lista do Footer em formato vertical (usado na seção Frase)

### UI
- **Button** — Botão com ícone (ArrowRight). Variantes: `primary` | `outline`
- **LogoBand** — Faixa animada full-width com repetição do logo GIZ

### Formulário de Contato
- Checkbox de aceitação customizado com `appearance: none` — fundo `--color-dark-light`, checkmark `--color-accent`
- Campos de input com borda `--color-dark-ultra-light`, hover `--color-dark-lightest`, foco `--color-dark`

---

## 🎨 Estilização

O projeto utiliza **CSS Modules** (`.module.css`) para estilização por componente e **CSS Custom Properties** como design tokens. **Não há Tailwind CSS**.

### Design Tokens (definidos em `:root` no `globals.css`)

| Variável CSS              | Valor     | Uso                                  |
| ------------------------- | --------- | ------------------------------------ |
| `--color-dark`            | `#271E55` | Navbar, backgrounds escuros          |
| `--color-dark-light`      | `#3a2f6e` | Checkbox bg, elementos sutis         |
| `--color-dark-lightest`   | `#602E9E` | Hover em bordas de input             |
| `--color-dark-ultra-light`| `#8948D9` | Bordas padrão de input               |
| `--color-accent`          | `#C2F628` | Ícones, destaques, checkmark         |
| `--color-button`          | `#B3DB3C` | Botões                               |
| `--font-sora`             | Sora      | Textos e botões                      |
| `--font-archivo`          | Archivo   | Títulos e menu (font-stretch: expanded) |

### Regras de estilização
- Um `.module.css` por componente — importar como `import styles from "./Component.module.css"`
- Usar `var(--color-dark)`, `var(--color-accent)`, etc. — nunca hex direto nos CSS Modules
- Usar `var(--font-sora)`, `var(--font-archivo)` para `font-family`
- Estilos globais (reset, focus, container) ficam apenas no `globals.css`

### Conteúdo textual
- Todo texto do site está em `src/data/content.ts` — nunca hardcode em componentes
- HTML inline (`<br>`, `<span>`) é suportado — renderizado via `dangerouslySetInnerHTML`

### Imagens
- Armazenadas em `src/assets/` e importadas diretamente nos componentes (Next.js otimiza automaticamente)
- Usar sempre `next/image` (`<Image>`) — nunca colocar imagens em `public/`

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

**Segurança:**
- Todos os campos são validados (required, regex de e-mail, limite de 500 chars por campo, 5000 para mensagem)
- Inputs são escapados contra HTML injection antes de inserir no corpo do e-mail

---

## 📝 Licença

Projeto privado — Agência GIZ. Todos os direitos reservados.
