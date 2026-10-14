import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vittahigienizacao.com.br"),
  title: "Vitta Higienização & Proteção | Higienização de estofados em Brasília",
  description: "Higienização profissional de sofás, poltronas e colchões em Brasília e todo o Distrito Federal. Solicite seu orçamento pelo WhatsApp.",
  keywords: ["higienização de estofados Brasília", "higienização de sofá Brasília", "limpeza de sofá Brasília", "higienização de colchões DF"],
  alternates: { canonical: "/" },
  openGraph: { title: "Vitta Higienização & Proteção", description: "Sua casa merece uma higienização profissional.", url: "/", locale: "pt_BR", type: "website" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
