import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | GRUPO GOT",
};

export default function PrivacidadePage() {
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
          Política de Privacidade
        </h1>

        <h2 className="text-2xl font-bold text-got-pure mt-8 mb-4">
          1. Coleta de Dados
        </h2>
        <p className="text-got-light mb-4">
          O GRUPO GOT (Tog Brasil LTDA) coleta dados pessoais fornecidos
          voluntariamente por você ao preencher formulários em nosso site, como
          nome, e-mail, telefone e informações profissionais. Também podemos
          coletar dados de navegação automaticamente, como endereço IP, tipo de
          navegador e páginas acessadas, por meio de cookies e tecnologias
          similares, em conformidade com a Lei Geral de Proteção de Dados (LGPD
          — Lei 13.709/2018).
        </p>

        <h2 className="text-2xl font-bold text-got-pure mt-8 mb-4">
          2. Uso dos Dados
        </h2>
        <p className="text-got-light mb-4">
          Os dados coletados são utilizados para responder às suas solicitações
          comerciais, processar candidaturas a vagas de trabalho, melhorar a
          experiência de navegação em nosso site e enviar comunicações
          relevantes sobre nossos produtos e serviços, sempre com base legítima
          ou mediante seu consentimento. Não compartilhamos seus dados pessoais
          com terceiros, exceto quando necessário para o cumprimento de
          obrigações legais ou para a execução de serviços contratados.
        </p>

        <h2 className="text-2xl font-bold text-got-pure mt-8 mb-4">
          3. Seus Direitos
        </h2>
        <p className="text-got-light mb-4">
          Conforme a LGPD, você tem o direito de acessar, corrigir, eliminar ou
          solicitar a portabilidade de seus dados pessoais. Você também pode
          revogar seu consentimento a qualquer momento e solicitar informações
          sobre o compartilhamento de seus dados. Para exercer qualquer um
          desses direitos, entre em contato conosco pelos canais indicados
          abaixo.
        </p>

        <h2 className="text-2xl font-bold text-got-pure mt-8 mb-4">
          4. Contato
        </h2>
        <p className="text-got-light mb-4">
          Para dúvidas, solicitações ou reclamações relacionadas ao tratamento
          de seus dados pessoais, entre em contato com nosso Encarregado de
          Proteção de Dados (DPO) pelo e-mail{" "}
          <span className="text-got-accent">comercial@grupogot.com.br</span>.
          Responderemos à sua solicitação no prazo previsto pela legislação
          vigente.
        </p>
      </div>
    </main>
  );
}
