import { useState } from "react";
import { SectionRail } from "./SectionRail";
import { gsap } from "gsap";
import { Plus } from "lucide-react"; // Usamos apenas o Plus e rotacionamos

const QUESTIONS = [
  {
    q: "Como funciona a avaliação inicial?",
    a: "Realizamos uma anamnese completa com mapeamento postural e histórico clínico. O objetivo é desenhar um protocolo seguro e preciso, garantindo que o Método JW seja aplicado perfeitamente ao seu perfil.",
  },
  {
    q: "O acompanhamento presencial inclui a consultoria online?",
    a: "Sim. O método presencial é integrado. Você recebe o acompanhamento direto nos treinos e a gestão dos seus dados via plataforma online, garantindo uma visão 360º da sua evolução.",
  },
  {
    q: "O que acontece se eu não conseguir treinar algum dia?",
    a: "A disciplina é o pilar do sistema. Imprevistos ocorrem, e ajustamos a periodização conforme a sua realidade desde que haja comunicação prévia. Nosso foco é a sua consistência de longo prazo.",
  },
  {
    q: "Existe garantia de resultados?",
    a: "Resultados são a consequência inevitável da adesão ao protocolo. Minha responsabilidade é entregar o método de alta performance; a sua é a execução técnica. Quando os dois lados se alinham, o resultado é uma questão de tempo.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-[#050505] py-32">
            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]">

        <div className="font-mono-label text-foreground/70">06 — Dúvidas</div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="font-display text-[10vw] leading-[1] sm:text-[7vw] md:text-[6vw] lg:text-[88px]">
            Perguntas <br />
            <span className="text-jw-yellow">fundamentais.</span>
          </h2>
          <p className="max-w-sm text-foreground/70">
            Questões recorrentes sobre o método, a logística do sistema e as expectativas de alta performance.
          </p>
        </div>

        {/* Left side vertical label */}
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block">
          <span className="font-mono-label tracking-[0.6em] text-foreground/50">D Ú V I D A S</span>
        </div>

        {/* Largura ajustada para 1100px */}
        <div className="mt-20 max-w-[1100px] border-t border-white/10">
          {QUESTIONS.map((item, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="group flex w-full items-center justify-between py-8 text-left transition-colors"
              >
                <h3 className="font-display text-2xl md:text-3xl transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">
                  {item.q}
                </h3>
                {/* Rotação elegante do ícone */}
                <Plus
                  className={`h-6 w-6 text-jw-yellow transition-transform duration-500 ${open === idx ? "rotate-[135deg]" : "rotate-0"}`}
                />
              </button>

              {open === idx && (
                <div className="pb-8 text-foreground/60 leading-relaxed text-lg max-w-2xl animate-in fade-in slide-in-from-top-2">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}