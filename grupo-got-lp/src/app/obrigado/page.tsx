import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado | GRUPO GOT",
};

export default function ObrigadoPage() {
  return (
    <main className="bg-got-black text-got-muted min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-got-accent font-black text-5xl lg:text-7xl mb-8 select-none">
          GOT
        </p>

        <h1 className="text-3xl lg:text-4xl font-bold text-got-pure mb-4">
          Obrigado pelo contato!
        </h1>

        <p className="text-got-light text-lg mb-10">
          Recebemos suas informações e nossa equipe comercial entrará em contato
          em breve.
        </p>

        <Link
          href="/"
          className="inline-block bg-got-accent text-got-black font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Voltar ao site
        </Link>
      </div>
    </main>
  );
}
