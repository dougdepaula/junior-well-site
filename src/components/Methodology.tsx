import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Microscope, ClipboardList, Activity, Trophy } from "lucide-react";
import { SectionRail } from "./SectionRail";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    n: "01",
    icon: <Microscope className="h-5 w-5" />,
    title: "Diagnóstico",
    desc: "Avaliação biomecânica completa, histórico clínico, exames e mapeamento postural. Antes de treinar, entender.",
  },
  {
    n: "02",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Prescrição",
    desc: "Protocolo individualizado. Estímulos calculados, periodização baseada em evidência, nada de templates.",
  },
  {
    n: "03",
    icon: <Activity className="h-5 w-5" />,
    title: "Execução",
    desc: "Acompanhamento ativo, ajuste fino semanal, biofeedback. O método respira junto com seu corpo.",
  },
  {
    n: "04",
    icon: <Trophy className="h-5 w-5" />,
    title: "Resultado",
    desc: "Performance mensurável, longevidade real, autonomia. Você sai do programa sabendo treinar para sempre.",
  },
];

export function Methodology() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {

        // A animação dupla (Blueprint reveal)
        const rows = gsap.utils.toArray<HTMLElement>(".method-row");

        rows.forEach((row) => {
          const num = row.querySelector(".method-num");
          const title = row.querySelector(".method-title-wrap");
          const desc = row.querySelector(".method-desc");
          const line = row.querySelector(".method-line-wrap");

          gsap.fromTo([num, title, desc, line],
            {
              opacity: 0,
              x: (i) => (i === 0 ? -20 : i === 1 ? -10 : 0),
              y: (i) => (i === 2 ? 10 : 0),
              scaleX: (i) => (i === 3 ? 0 : 1),
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scaleX: 1,
              duration: 1.0,
              ease: "power4.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
              }
            }
          );
        });

      }, ref);

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="metodologia"
      className="scroll-section relative isolate w-full overflow-hidden pt-32 pb-16"
      style={{
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,215,0,0.015), transparent 55%)"
      }}
    >
      {/* CSS injetado para a pulsação lenta do rodapé */}
      <style>{`
        @keyframes pulseRail {
          0%, 100% {
            opacity: .8;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.15);
          }
        }
        .animate-pulse-rail {
          animation: pulseRail 3s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block">
        <span className="font-mono-label tracking-[0.6em] text-foreground/40">
          M É T O D O
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]">

        {/* Posicionamento ajustado: SISTEMA */}
        <div className="font-mono-label text-foreground/70">03 — MÉTODO</div>

        {/* Respiro maior: mt-20 */}
        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="font-display max-w-[900px] text-[10vw] leading-[1] sm:text-[7vw] md:text-[6vw] lg:text-[88px]">
            Método <span className="text-jw-yellow">JW</span>
            <br />
            em 4 atos.
          </h2>
          <p className="max-w-sm text-foreground/60 leading-relaxed">
            Um método fechado de alta performance. Cada etapa é mensurável, auditável e
            replicável — porque resultado de elite não é acidente.
          </p>
        </div>

        {/* GRADE TÉCNICA */}
        <div className="method-grid relative mt-24 border-y border-white/[0.03]">

          <div className="absolute -top-[7px] -left-[5px] text-white/20 text-[10px] font-mono leading-none">+</div>
          <div className="absolute -top-[7px] -right-[5px] text-white/20 text-[10px] font-mono leading-none">+</div>
          <div className="absolute -bottom-[7px] -left-[5px] text-white/20 text-[10px] font-mono leading-none">+</div>
          <div className="absolute -bottom-[7px] -right-[5px] text-white/20 text-[10px] font-mono leading-none">+</div>

          {STEPS.map((s) => (
            <article
              key={s.n}
              className="method-row group relative grid grid-cols-1 border-b border-white/[0.03] transition-colors duration-500 hover:bg-[#0A0A0A] last:border-b-0 md:grid-cols-[100px_280px_1fr_100px]"
            >
              {/* Coluna 1: Número */}
              <div className="method-num flex items-center p-6 md:border-r md:border-white/[0.03] md:p-8">
                <span className="font-mono-label tabular-nums text-white/20 transition-colors duration-500 group-hover:text-jw-yellow">
                  {s.n}
                </span>
              </div>

              {/* Coluna 2: Ícone + Título */}
              <div className="method-title-wrap flex items-center gap-5 px-6 pb-6 md:border-r md:border-white/[0.03] md:p-8">
                <span className="text-white/20 transition-colors duration-500 group-hover:text-jw-yellow">
                  {s.icon}
                </span>
                <h3 className="font-display text-2xl tracking-[0.06em] text-white/80 transition-colors duration-500 group-hover:text-white">
                  {s.title}
                </h3>
              </div>

              {/* Coluna 3: Descrição (Agora com max-w-lg) */}
              <div className="method-desc flex items-center px-6 pb-8 md:p-8">
                <p className="max-w-lg text-sm leading-relaxed text-foreground/50 transition-colors duration-500 group-hover:text-foreground/80">
                  {s.desc}
                </p>
              </div>

              {/* Coluna 4: Linha Técnica Direita (Opacity 0.25 -> 1) */}
              <div className="hidden items-center justify-center border-l border-white/[0.03] p-8 md:flex">
                <div className="method-line-wrap origin-left">
                  <span className="block h-px w-8 bg-white/25 transition-all duration-700 ease-out group-hover:w-16 group-hover:bg-jw-yellow group-hover:opacity-100" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Rodapé Editorial Controlado */}
        <SectionRail current={3} />
      </div>
    </section>
  );
}