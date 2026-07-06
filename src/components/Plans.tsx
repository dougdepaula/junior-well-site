import { Check, ArrowUpRight } from "lucide-react";
import { SectionRail } from "./SectionRail";

const PROGRAMS = [
  {
    code: "CONS · 01",
    level: "NÍVEL 01",
    name: "Essencial",
    tag: null,
    price: "180",
    cadence: "mensal",
    desc: "A base técnica do sistema para quem busca segurança e consistência.",
    features: ["Treino personalizado", "Suporte via WhatsApp", "2 ajustes mensais", "Avaliação física inicial"],
    accent: false,
  },
  {
    code: "CONS · 02",
    level: "NÍVEL 02",
    name: "Avançado",
    tag: "SISTEMA RECOMENDADO",
    price: "250",
    cadence: "mensal",
    desc: "Foco em progressão acelerada com ajuste fino quinzenal e orientação básica.",
    features: ["Treino personalizado", "Suporte via WhatsApp", "Reavaliação trimestral", "Orientação de nutrição"],
    accent: true,
  },
  {
    code: "CONS · 03",
    level: "NÍVEL 03",
    name: "Elite",
    tag: null,
    price: "350",
    cadence: "mensal",
    desc: "A experiência máxima: acompanhamento semanal e contato direto comigo.",
    features: ["Treino personalizado", "Suporte via WhatsApp", "Reavaliação mensal", "Videochamada mensal"],
    accent: false,
  },
];

export function Plans() {
  return (
    <section id="programas" className="relative w-full bg-[#050505] py-32">
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]">
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block">
          <span className="font-mono-label tracking-[0.6em] text-foreground/40">
            P R O G R A M A S
          </span>
        </div>
        <div className="font-mono-label text-foreground/70">05 — Programas</div>

        {/* Headline Afirmativa de Impacto */}
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="font-display text-[10vw] leading-[1] sm:text-[7vw] md:text-[6vw] lg:text-[88px]">
            Resultados são <br />
            <span className="text-jw-yellow">consequência do sistema.</span>
          </h2>
          <p className="max-w-sm text-foreground/70">
            Aceitamos um número fechado de novos clientes por trimestre. Cada vaga é uma decisão estratégica — sua e nossa.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.name}
              className={`group relative flex flex-col p-8 transition-all duration-500 border border-white/5 bg-white/[0.015] hover:border-jw-yellow/30 hover:-translate-y-2 ${p.accent
                ? "lg:-translate-y-8 lg:scale-[1.03] border-jw-yellow/40 shadow-[0_0_0_1px_rgba(255,215,0,0.08),0_18px_70px_rgba(255,215,0,0.06)]"
                : "hover:shadow-[0_18px_60px_rgba(255,215,0,0.04)]"
                }`}
            >
              {p.accent && p.tag && (
                <span className="absolute -top-3 left-8 bg-jw-yellow px-3 py-1 font-mono-label text-jw-black text-[10px] uppercase tracking-widest">
                  {p.tag}
                </span>
              )}

              <header>
                <div className="font-mono-label text-jw-yellow text-xs tracking-[0.2em]">{p.code}</div>
                <div className="font-mono-label text-foreground/40 text-[10px] mt-2 tracking-widest">{p.level}</div>
                <h3 className="font-display mt-2 text-[30px] tracking-[-0.02em] leading-none">{p.name}</h3>
              </header>

              <p className="mt-6 text-foreground/70 text-sm leading-relaxed min-h-[40px]">{p.desc}</p>

              <div className="mt-8 flex items-baseline gap-2 border-b border-white/10 pb-8">
                <span className="font-display text-5xl">R${p.price}</span>
                <span className="font-mono-label text-foreground/50 text-sm uppercase">mensal</span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-foreground/80 flex-grow">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className={`h-4 w-4 shrink-0 ${p.accent ? "text-jw-yellow" : "text-foreground/60"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#consultoria" className={`mt-10 ${p.accent ? "btn-jw btn-jw-primary" : "btn-jw btn-jw-ghost"}`}>
                Solicitar análise <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        {/* Bloco Presencial - Escala Tipográfica Corrigida */}
        <div className="mt-32 border-t border-white/10 pt-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <div className="font-mono-label text-jw-yellow text-xs tracking-[0.2em]">CONS · 04</div>
              <div className="font-mono-label text-foreground/40 text-[10px] mt-2 tracking-[0.45em] uppercase opacity-45">Exclusivo</div>
              <h3 className="font-display text-4xl text-jw-yellow mt-2">Acompanhamento<br />Presencial</h3>
            </div>
            <div className="space-y-12">
              <p className="text-foreground/60 max-w-2xl leading-relaxed">
                Perfil exclusivo para quem busca a execução técnica perfeita sob meu olhar clínico.
                Não vendemos "hora", vendemos a sua consistência mensal através do sistema.
              </p>
              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <span className="font-display text-xl">2x / semana</span>
                  <span className="font-display text-2xl text-jw-yellow">R$ 500,00</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <span className="font-display text-xl">3x / semana</span>
                  <span className="font-display text-2xl text-jw-yellow">R$ 750,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rodapé Editorial Controlado */}
      <SectionRail current={5} />
    </section>
  );
}