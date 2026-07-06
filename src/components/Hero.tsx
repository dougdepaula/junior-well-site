import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBarbell from "@/assets/hero-barbell.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  // Lógica de navegação centralizada para evitar conflitos e manter a URL limpa
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Uso do scrollIntoView para uma navegação nativa, leve e sem conflito de plugins
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".hero-bg-container", { opacity: 1, duration: 0.1 }, 0);

      tl.fromTo(".hero-image",
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
        0.2
      );

      tl.fromTo(".hero-eyebrow",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        0.35
      );

      tl.fromTo(".hero-word",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", stagger: 0.1 },
        0.45
      );

      tl.fromTo(".hero-text",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        0.65
      );

      tl.fromTo(".hero-btn",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.15 },
        0.75
      );

      gsap.to(".hero-image", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(headlineRef.current, {
        scale: 0.95,
        opacity: 0.4,
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-section relative isolate min-h-[100svh] w-full overflow-hidden bg-[#050505] pt-24"
    >
      <div className="hero-bg-container pointer-events-none absolute inset-y-0 right-0 -z-10 w-full md:w-[66%] overflow-hidden opacity-0">
        <img
          src={heroBarbell}
          alt="Treinador Junior Well"
          className="hero-image h-full w-full object-cover object-[54%_center] sm:object-[58%_center] md:object-[68%_center] scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.98)_12%,rgba(5,5,5,.85)_25%,rgba(5,5,5,.40)_40%,transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,#050505)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]">

        <div ref={headlineRef} className="pt-8 md:pt-12 max-w-3xl transform-origin-left">
          <p className="hero-eyebrow font-eyebrow text-jw-yellow flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Ciência Aplicada</span>
            <span className="text-jw-yellow/50">•</span>
            <span>Máxima Performance</span>
          </p>

          <h1 className="font-display mt-7 text-[11.5vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[100px] xl:text-[120px] text-foreground/95 tracking-[-0.045em] leading-[0.86] flex flex-wrap overflow-hidden">
            <span className="hero-word mr-[0.2em]">Performance</span>
            <span className="hero-word">Inteligente</span>
          </h1>

          <div className="hero-text mt-8 max-w-[280px] sm:max-w-md font-mono-label leading-[2] text-foreground/80">
            <p>Um método baseado em biomecânica e fisiologia aplicado ao corpo real. Da alta performance esportiva à reabilitação.</p>
          </div>

          <div className="mt-10 -mx-3 px-3 py-3 flex flex-wrap items-center gap-4">
            <button 
              onClick={() => handleNavClick("#consultoria")}
              className="hero-btn btn-jw btn-jw-primary py-4 sm:py-[18px] tracking-[0.18em]"
            >
              Agende sua Consultoria
            </button>
            <button 
              onClick={() => handleNavClick("#manifesto")}
              className="hero-btn btn-jw btn-jw-ghost py-4 sm:py-[18px] tracking-[0.18em]"
            >
              Ver Diferenciais
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-end justify-between">
          <div className="flex flex-col items-end gap-2 font-mono-label text-foreground/70">
            <span>Role para explorar</span>
            <span className="h-px w-16 bg-jw-yellow" />
          </div>
        </div>
      </div>
    </section>
  );
}