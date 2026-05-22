import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | GRUPO GOT",
};

export default function TermosPage() {
  return (
    <main className="bg-got-black text-got-muted min-h-screen">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <Link
          href="/"
          className="inline-block text-got-accent hover:underline text-sm mb-12"
        >
          ← Voltar ao site
        </Link>

        <h1 className="text-4xl font-bold text-got-pure mb-8">
          Termos de Uso
        </h1>

        <h2 className="text-2xl font-bold text-got-pure mt-8 mb-4">
          1. Aceitação dos Termos
        </h2>
        <p className="text-got-light mb-4">
          Ao acessar e utilizar o site do GRUPO GOT (Tog Brasil LTDA), você
          concorda com estes Termos de Uso em sua totalidade. Caso não concorde
          com qualquer disposição aqui apresentada, solicitamos que não utilize
          nosso site. Reservamo-nos o direito de atualizar estes termos a
          qualquer momento, sendo sua responsabilidade revisá-los
          periodicamente.
        </p>

        <h2 className="text-2xl font-bold text-got-pure mt-8 mb-4">
          2. Uso do Site
        </h2>
        <p className="text-got-light mb-4">
          Este site é destinado exclusivamente a maiores de 18 anos. Todo o
          conteúdo disponibilizado — incluindo textos, imagens, logotipos,
          vídeos e design — é de propriedade intelectual do GRUPO GOT ou de
          seus licenciadores e está protegido pelas leis brasileiras de direitos
          autorais e propriedade industrial. É proibida a reprodução, cópia,
          distribuição ou qualquer forma de uso não autorizado do conteúdo deste
          site.
        </p>

        <h2 className="text-2xl font-bold text-got-pure mt-8 mb-4">
          3. Limitação de Responsabilidade
        </h2>
        <p className="text-got-light mb-4">
          O GRUPO GOT não se responsabiliza por eventuais danos diretos ou
          indiretos decorrentes do uso ou da impossibilidade de uso deste site,
          incluindo, mas não se limitando a, falhas técnicas, indisponibilidade
          temporária ou perda de dados. As informações apresentadas neste site
          têm caráter informativo e podem ser alteradas sem aviso prévio.
        </p>

        <h2 className="text-2xl font-bold text-got-pure mt-8 mb-4">
          4. Legislação Aplicável
        </h2>
        <p className="text-got-light mb-4">
          Estes Termos de Uso são regidos pela legislação brasileira. Quaisquer
          disputas ou controvérsias decorrentes destes termos serão submetidas
          ao foro da Comarca do Rio de Janeiro, Estado do Rio de Janeiro, com
          renúncia expressa a qualquer outro, por mais privilegiado que seja.
          Para dúvidas, entre em contato pelo e-mail{" "}
          <span className="text-got-accent">comercial@grupogot.com.br</span>.
        </p>
      </div>
    </main>
  );
}
