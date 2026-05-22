"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useForm } from "react-hook-form";
import ParallaxSection from "@/components/ui/ParallaxSection";
import SectionLabel from "@/components/ui/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

interface CareersFormData {
  nome: string;
  email: string;
  telefone: string;
  area: string;
  lgpd: boolean;
}

const areaOptions = ["Criação", "Comercial", "Operações", "Marketing", "Outro"];

const inputStyles =
  "w-full rounded-xl border border-got-gray/20 bg-got-dark p-4 text-got-muted transition focus:border-got-accent focus:outline-none";

export default function CareersForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CareersFormData>();

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

  const onSubmit = (data: CareersFormData) => {
    console.log(data);
    alert("Candidatura enviada com sucesso! Analisaremos seu perfil em breve.");
  };

  return (
    <ParallaxSection number="06" bgColor="bg-got-dark">
      <div id="trabalhe-conosco" className="px-6 py-24 lg:px-16 lg:py-32">
        <SectionLabel label="TRABALHE CONOSCO" className="mb-6" />
        <h2 className="mb-4 text-4xl font-black text-got-pure lg:text-6xl">
          Faça parte do GRUPO GOT
        </h2>
        <p className="mb-12 text-lg italic text-got-light">
          Se você vive cultura, respira criatividade e quer construir algo real,
          queremos conhecer você.
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

          {/* E-mail */}
          <div>
            <label className="mb-1 block text-sm text-got-light">E-mail</label>
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

          {/* Telefone */}
          <div>
            <label className="mb-1 block text-sm text-got-light">
              Telefone
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

          {/* Área de interesse */}
          <div>
            <label className="mb-1 block text-sm text-got-light">
              Área de interesse
            </label>
            <select
              className={inputStyles}
              {...register("area", { required: "Campo obrigatório" })}
              defaultValue=""
            >
              <option value="" disabled>
                Selecione uma área
              </option>
              {areaOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.area && (
              <span className="mt-1 block text-sm text-red-400">
                {errors.area.message}
              </span>
            )}
          </div>

          {/* Currículo upload note */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border-2 border-dashed border-got-gray/30 p-6 text-center">
              <p className="text-sm text-got-light">
                Envie seu currículo para{" "}
                <a
                  href="mailto:rh@grupogot.com.br"
                  className="font-semibold text-got-accent underline"
                >
                  rh@grupogot.com.br
                </a>
              </p>
            </div>
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
              Enviar candidatura
            </button>
          </div>
        </form>
      </div>
    </ParallaxSection>
  );
}
