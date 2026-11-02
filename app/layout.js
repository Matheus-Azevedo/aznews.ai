import { Crimson_Pro, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
});

export const metadata = {
  title: "aznews.ai — Catequese",
  description:
    "Inteligência artificial em diálogo com a fé — a catequese como encontro, não como programação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${crimson.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
