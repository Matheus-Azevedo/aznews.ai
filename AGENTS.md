# Instruções do projeto (aznews.ai)

## Sobre o projeto

**aznews.ai** é um projeto do **Curso Dev**. Tema: inteligência artificial em diálogo com a fé católica; catequese como encontro, não como programação (ver copy em `app/page.js` e `metadata` em `app/layout.js`).

Escopo atual: **uma landing page** com imagem em `public/assets/ia-catequese-catolica.jpg`.

## Stack (estado atual do repositório)

| Camada | Escolha |
|--------|---------|
| Framework | Next.js 16 — App Router |
| UI | React 19 |
| Linguagem | JavaScript (`.js`) |
| Estilos | `app/globals.css` com variáveis `:root` e `prefers-color-scheme` |
| Fontes | `next/font/google`: Crimson Pro, Source Sans 3 |
| Imagens | `next/image`, arquivos em `public/` |

Versões: `package.json`. Dev usa Turbopack (`next dev`, padrão do Next 16).

## Estrutura

```
app/
  layout.js
  page.js
  globals.css
public/
  assets/
```

Ignorados no git: `node_modules`, `.next`, `out` (`.gitignore`).

## Comandos

```bash
npm install
npm run dev
npm run build
npm run start
```

Desenvolvimento local: `http://localhost:3000` (`README.md`).
