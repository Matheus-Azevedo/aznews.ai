# Instruções do projeto (aznews.ai)

## Sobre o projeto

**aznews.ai** é um projeto do **Curso Dev**. Tema: inteligência artificial em diálogo com a fé católica; catequese como encontro, não como programação (ver copy em `src/app/app.html` e metadados em `src/index.html`).

Escopo atual: **uma landing page** com imagem em `public/assets/ia-catequese-catolica.jpg`.

## Stack (estado atual do repositório)

| Camada | Escolha |
|--------|---------|
| Framework | Angular 21 (LTS) |
| Linguagem | TypeScript |
| Estilos | `src/styles.css` com variáveis `:root` e `prefers-color-scheme` |
| Fontes | Google Fonts: Crimson Pro 600, Crimson Pro 400 itálico, Source Sans 3 400 |
| Imagens | arquivo em `public/assets/`, servido como asset estático |

Versões: `package.json`.

## Estrutura

```
src/
  index.html
  styles.css
  main.ts
  app/
    app.ts
    app.html
    app.css
    app.config.ts
public/
  assets/
```

Ignorados no git: `node_modules`, `dist`, `.angular/cache` (`.gitignore`).

## Comandos

```bash
npm install
npm start
npm run build
```

Desenvolvimento local: `http://localhost:4200` (`README.md`). O build de produção gera `dist/aznews/browser`.
