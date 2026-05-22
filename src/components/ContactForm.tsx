"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useForm } from "react-hook-form";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  cidade: string;
  interesse: string;
  mensagem?: string;
  lgpd: boolean;
}

const interestOptions = [
  "Quero distribuir THE OG",
  "Quero distribuir SESH",
  "Ambas as marcas",
  "Outro",
];

const inputStyles =
  "w-full rounded-xl border border-got-gray/20 bg-got-dark p-4 text-got-muted transition focus:border-got-accent focus:outline-none";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  useGSAP(
    () => {
      if (!formRef.current) return;

      gsap.from(formRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { dependencies: [] }
  );

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <ParallaxSection number="05">
      <div id="contato" className="px-6 py-24 lg:px-16 lg:py-32">
        <SectionLabel label="CONTATO COMERCIAL" className="mb-6" />
        <h2 className="mb-4 text-4xl font-black text-got-pure lg:text-6xl">
          Fale com nosso Comercial
        </h2>
        <p className="mb-12 text-got-light">
          Preencha o formulário abaixo e nossa equipe entrará em contato.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          {/* Nome completo */}
          <div>
            <label className="mb-1 block text-sm text-got-light">
              Nome completo
            </label>
            <input
              type="text"
              className={inputStyles}
              {...register("nome", { required: "Campo obrigatório" })}
            />
            {errors.nome && (
              <span className="mt-1 block text-sm text-red-400">
                {errors.nome.message}
              </span>
            )}
          </div>

          {/* E-mail corporativo */}
          <div>
            <label className="mb-1 block text-sm text-got-light">
              E-mail corporativo
            </label>
            <input
              type="email"
              className={inputStyles}
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido",
                },
              })}
            />
            {errors.email && (
              <span className="mt-1 block text-sm text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Telefone / WhatsApp */}
          <div>
            <label className="mb-1 block text-sm text-got-light">
              Telefone / WhatsApp
            </label>
            <input
              type="tel"
              className={inputStyles}
              {...register("telefone", { required: "Campo obrigatório" })}
            />
            {errors.telefone && (
              <span className="mt-1 block text-sm text-red-400">
                {errors.telefone.message}
              </span>
            )}
          </div>

          {/* Empresa / Loja */}
          <div>
            <label className="mb-1 block text-sm text-got-light">
              Empresa / Loja
            </label>
            <input
              type="text"
              className={inputStyles}
              {...register("empresa", { required: "Campo obrigatório" })}
            />
            {errors.empresa && (
              <span className="mt-1 block text-sm text-red-400">
                {errors.empresa.message}
              </span>
            )}
          </div>

          {/* Cidade / Estado */}
          <div>
            <label className="mb-1 block text-sm text-got-light">
              Cidade / Estado
            </label>
            <input
              type="text"
              className={inputStyles}
              {...register("cidade", { required: "Campo obrigatório" })}
            />
            {errors.cidade && (
              <span className="mt-1 block text-sm text-red-400">
                {errors.cidade.message}
              </span>
            )}
          </div>

          {/* Interesse */}
          <div>
            <label className="mb-1 block text-sm text-got-light">
              Interesse
            </label>
            <select
              className={inputStyles}
              {...register("interesse", { required: "Campo obrigatório" })}
              defaultValue=""
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {interestOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.interesse && (
              <span className="mt-1 block text-sm text-red-400">
                {errors.interesse.message}
              </span>
            )}
          </div>

          {/* Mensagem */}
          <div className="lg:col-span-2">
            <label className="mb-1 block text-sm text-got-light">
              Mensagem
            </label>
            <textarea
              rows={4}
              className={inputStyles}
              {...register("mensagem")}
            />
          </div>

          {/* LGPD */}
          <div className="lg:col-span-2">
            <label className="flex items-start gap-3 text-sm text-got-light">
              <input
                type="checkbox"
                className="mt-1 accent-got-accent"
                {...register("lgpd", {
                  required: "Você precisa aceitar para enviar",
                })}
              />
              <span>
                Ao enviar este formulário, você autoriza o GRUPO GOT a utilizar
                seus dados para contato comercial, conforme nossa Política de
                Privacidade.
              </span>
            </label>
            {errors.lgpd && (
              <span className="mt-1 block text-sm text-red-400">
                {errors.lgpd.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-got-accent px-8 py-4 text-lg font-bold text-got-black transition hover:scale-105"
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </ParallaxSection>
  );
}
