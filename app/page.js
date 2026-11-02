import Image from "next/image";

const imageAlt =
  "Ilustração: uma inteligência artificial humanoide recebe catequese de uma catequista católica em uma sala de formação, com luz de vitral e crucifixo ao fundo.";

export default function Home() {
  return (
    <div className="wrap">
      <header>
        <h1 className="brand">
          aznews<span className="brandAccent">.ai</span>
        </h1>
        <p className="subtitle">
          Inteligência artificial em diálogo com a fé — a catequese como
          encontro, não como programação.
        </p>
      </header>

      <main>
        <figure className="figure">
          <Image
            className="figureImage"
            src="/assets/ia-catequese-catolica.jpg"
            alt={imageAlt}
            width={1280}
            height={720}
            priority
          />
          <figcaption className="figcaption">
            A I.A. aprende o caminho — catequese católica como acolhida da
            razão e da revelação.
          </figcaption>
        </figure>
      </main>

      <footer className="footer">
        <p>Projeto aznews.ai · Curso Dev</p>
      </footer>
    </div>
  );
}
