import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeartPulse, Stethoscope, Activity } from "lucide-react";
import { SectionRail } from "./SectionRail";

gsap.registerPlugin(ScrollTrigger);

export function Segmentos() {
  const sectionRef = useRef<HTMLElement>(null);

  const SEGMENTS = [
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Grupos Especiais",
      desc: "Protocolos seguros para hipertensos, diabéticos e condições específicas, com acompanhamento minucioso.",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Dores Crônicas",
      desc: "Trabalho de reabilitação focado em mitigar riscos, restaurar mobilidade e eliminar dores limitantes.",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Longevidade",
      desc: "Treinamento inteligente para quem busca manter a autonomia e a qualidade de vida ao longo dos anos.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(".segmento-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".segmento-grid",
              start: "top 88%",
              toggleActions: "play none none none"
            },
          }
        );
      }, sectionRef);

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="segmentos"
      className="scroll-section relative isolate min-h-screen w-full overflow-hidden py-20"
      style={{
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(circle at 70% 20%, rgba(255,215,0,0.025), transparent 55%)"
      }}
    >
      {/* Vertical Label */}
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block">
        <span className="font-mono-label tracking-[0.6em] text-foreground/50">S E G M E N T O S</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 pt-5 xl:px-28 isolate [contain:layout]">

        <div className="font-mono-label text-foreground/70">02 — Segmentos</div>

        <h2 className="font-display mt-8 max-w-[1100px] text-[8vw] leading-[1.02] md:text-[6vw]">
          Resultados específicos <br /> para <span className="text-jw-yellow">cada corpo.</span>
        </h2>

        {/* Grid de Cards */}
        <div className="segmento-grid mt-16 grid gap-6 md:grid-cols-3">
          {SEGMENTS.map((item, idx) => (
            <div
              key={idx}
              style={{ opacity: 0 }}
              className="segmento-card group border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-jw-yellow/50"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-jw-yellow/20 text-jw-yellow transition-colors group-hover:bg-jw-yellow group-hover:text-jw-black">
                {item.icon}
              </div>
              <h3 className="font-display text-lg tracking-[0.1em] text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Rodapé Editorial Controlado */}
        <SectionRail current={2} />
      </div>
    </section >
  );
}