import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRUPO GOT | Cultura, Originalidade e Expressao",
  description:
    "O GRUPO GOT e o ecossistema por tras das marcas THE OG e SESH. Cultura urbana, lifestyle e experiencia autentica. Mais de 5 anos, mais de 5.000 pontos de venda em todo o Brasil.",
  keywords: [
    "GRUPO GOT",
    "THE OG",
    "SESH",
    "lifestyle urbano",
    "cultura urbana",
    "streetwear",
    "distribuidor",
  ],
  authors: [{ name: "GRUPO GOT - Tog Brasil LTDA" }],
  openGraph: {
    title: "GRUPO GOT | Cultura, Originalidade e Expressao",
    description:
      "Ecossistema de marcas autenticas que representam a cultura urbana brasileira.",
    url: "https://grupogot.com.br",
    siteName: "GRUPO GOT",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
