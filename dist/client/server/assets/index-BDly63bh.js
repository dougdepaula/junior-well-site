import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { h as heroBarbell, N as Navbar, F as Footer } from "./router-BnX7XK_X.js";
import { FlaskConical, Triangle, Puzzle, HeartPulse, Stethoscope, Activity, Microscope, ClipboardList, Trophy, Check, ArrowUpRight, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "@tanstack/react-router";
import "@tanstack/react-query";
import "sonner";
const lenis = new Lenis({
  duration: 1.25,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.4
});
window.lenis = lenis;
gsap.registerPlugin(ScrollTrigger);
function SmoothScroll() {
  useEffect(() => {
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => {
      lenis.raf(time * 1e3);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".hero-bg-container", { opacity: 1, duration: 0.1 }, 0);
      tl.fromTo(
        ".hero-image",
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
        0.2
      );
      tl.fromTo(
        ".hero-eyebrow",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        0.35
      );
      tl.fromTo(
        ".hero-word",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", stagger: 0.1 },
        0.45
      );
      tl.fromTo(
        ".hero-text",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        0.65
      );
      tl.fromTo(
        ".hero-btn",
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
          scrub: true
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
          scrub: true
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "scroll-section relative isolate min-h-[100svh] w-full overflow-hidden bg-[#050505] pt-24",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-bg-container pointer-events-none absolute inset-y-0 right-0 -z-10 w-full md:w-[66%] overflow-hidden opacity-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: heroBarbell,
              alt: "Treinador Junior Well",
              className: "hero-image h-full w-full object-cover object-[54%_center] sm:object-[58%_center] md:object-[68%_center] scale-[1.04]"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/10 mix-blend-overlay" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grain" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.98)_12%,rgba(5,5,5,.85)_25%,rgba(5,5,5,.40)_40%,transparent_55%)]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,#050505)]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]", children: [
          /* @__PURE__ */ jsxs("div", { ref: headlineRef, className: "pt-8 md:pt-12 max-w-3xl transform-origin-left", children: [
            /* @__PURE__ */ jsxs("p", { className: "hero-eyebrow font-eyebrow text-jw-yellow flex flex-wrap items-center gap-x-4 gap-y-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Ciência Aplicada" }),
              /* @__PURE__ */ jsx("span", { className: "text-jw-yellow/50", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Máxima Performance" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "font-display mt-7 text-[11.5vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[100px] xl:text-[120px] text-foreground/95 tracking-[-0.045em] leading-[0.86] flex flex-wrap overflow-hidden", children: [
              /* @__PURE__ */ jsx("span", { className: "hero-word mr-[0.2em]", children: "Performance" }),
              /* @__PURE__ */ jsx("span", { className: "hero-word", children: "Inteligente" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "hero-text mt-8 max-w-[280px] sm:max-w-md font-mono-label leading-[2] text-foreground/80", children: /* @__PURE__ */ jsx("p", { children: "Um método baseado em biomecânica e fisiologia aplicado ao corpo real. Da alta performance esportiva à reabilitação." }) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 -mx-3 px-3 py-3 flex flex-wrap items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleNavClick("#consultoria"),
                  className: "hero-btn btn-jw btn-jw-primary py-4 sm:py-[18px] tracking-[0.18em]",
                  children: "Agende sua Consultoria"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleNavClick("#manifesto"),
                  className: "hero-btn btn-jw btn-jw-ghost py-4 sm:py-[18px] tracking-[0.18em]",
                  children: "Ver Diferenciais"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 flex items-end justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-2 font-mono-label text-foreground/70", children: [
            /* @__PURE__ */ jsx("span", { children: "Role para explorar" }),
            /* @__PURE__ */ jsx("span", { className: "h-px w-16 bg-jw-yellow" })
          ] }) })
        ] })
      ]
    }
  );
}
const athleteImg = "/assets/athlete-manifesto-Bavwuqf7.jpg";
const Logo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Camada_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%20139.45%2044.45'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2030.6.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.4%20Build%20109)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23fff;%20}%20.st1%20{%20fill:%20%23fae92a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st1'%20d='M135.3,16.26h-5.05V7.91c0-2.29-1.86-4.15-4.15-4.15s-4.15,1.86-4.15,4.15v25.02c0,2.29,1.86,4.15,4.15,4.15s4.15-1.86,4.15-4.15v-8.36h5.05c2.29,0,4.15-1.86,4.15-4.15s-1.86-4.15-4.15-4.15h0Z'/%3e%3cpath%20class='st1'%20d='M114.13.01c-2.29,0-4.15,1.86-4.15,4.15v13.24c-7.8,1.86-14.82,5.86-20.4,11.67l-5.05,5.25-8.37-8.58c-1.6-1.64-4.23-1.67-5.88-.07-1.64,1.6-1.67,4.23-.07,5.88l11.37,11.65c.78.8,1.85,1.25,2.97,1.25h.01c1.12,0,2.2-.46,2.98-1.27l8.02-8.34c4.01-4.16,8.95-7.15,14.42-8.81v10.63c0,2.29,1.86,4.15,4.15,4.15s4.15-1.86,4.15-4.15V4.16C118.28,1.87,116.42.01,114.13.01Z'/%3e%3cpath%20class='st0'%20d='M13.35,3.75c-2.29,0-4.15,1.86-4.15,4.15v8.35h-5.05c-2.29,0-4.15,1.86-4.15,4.15s1.86,4.15,4.15,4.15h5.05v8.36c0,2.29,1.86,4.15,4.15,4.15s4.15-1.86,4.15-4.15V7.89c0-2.29-1.86-4.15-4.15-4.15h0Z'/%3e%3cpath%20class='st0'%20d='M72.79.44c-2.06-1.02-4.55-.18-5.57,1.87l-14.94,30.06-5.28-7.11c-4.11-5.54-10.64-8.87-17.52-9V4.15c0-2.29-1.86-4.15-4.15-4.15s-4.15,1.86-4.15,4.15v32.5c0,2.29,1.86,4.15,4.15,4.15s4.15-1.86,4.15-4.15v-12.07c4.27.12,8.3,2.2,10.85,5.63l9.33,12.55c.79,1.06,2.03,1.68,3.33,1.68.12,0,.25,0,.37-.02,1.44-.13,2.71-1,3.35-2.29L74.66,6c1.02-2.05.18-4.55-1.87-5.57h0Z'/%3e%3c/svg%3e";
gsap.registerPlugin(ScrollTrigger);
const HEADLINE = [
  { t: "Muitos", k: "normal" },
  { t: "acompanham", k: "normal" },
  { t: "o", k: "normal" },
  { t: "seu", k: "normal" },
  { t: "exercício.", k: "normal" },
  { t: "Poucos", k: "accent" },
  { t: "dominam", k: "accent" },
  { t: "a", k: "accent" },
  { t: "ciência", k: "accent" },
  { t: "por", k: "normal" },
  { t: "trás", k: "normal" },
  { t: "do", k: "normal" },
  { t: "movimento.", k: "normal" }
];
function Manifesto() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".kinetic-word");
      gsap.set(words, { color: "rgba(255,255,255,0.08)" });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".kinetic-headline",
          start: "top 75%",
          end: "bottom 30%",
          scrub: 0.8
        }
      });
      words.forEach((word) => {
        const isAccent = word.dataset.kind === "accent";
        tl.to(word, {
          color: isAccent ? "#FFD700" : "rgba(245,245,245,0.98)",
          textShadow: isAccent ? "0 0 24px rgba(255,215,0,0.35)" : "none",
          duration: 0.1
        }, ">-0.05");
      });
      gsap.from(".manifesto-meta", {
        opacity: 0,
        x: 40,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".manifesto-meta-wrap", start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      id: "manifesto",
      className: "relative isolate min-h-screen w-full overflow-hidden bg-jw-graphite",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: athleteImg,
              alt: "Atleta em estado de foco no ginásio",
              className: "media-mask h-full w-full object-cover object-right opacity-36",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.85)_45%,rgba(5,5,5,0.2)_100%)]" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block", children: /* @__PURE__ */ jsx("span", { className: "font-mono-label tracking-[0.6em] text-foreground/50", children: "M A N I F E S T O" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 pt-24 xl:px-28 isolate [contain:layout]", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/70", children: "01 — Manifesto" }),
          /* @__PURE__ */ jsx("h2", { className: "kinetic-headline font-display mt-12 max-w-[1100px] text-[10vw] leading-[1.02] sm:text-[8vw] md:text-[7.4vw] lg:text-[110px]", children: HEADLINE.map((w, i) => /* @__PURE__ */ jsx("span", { "data-kind": w.k, className: "kinetic-word", children: w.t }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-20 grid gap-12 md:grid-cols-[1fr_320px]", children: [
            /* @__PURE__ */ jsxs("div", { className: "max-w-xl space-y-2 text-foreground/80", children: [
              /* @__PURE__ */ jsx("p", { children: "Você não terá apenas uma planilha genérica de treinos." }),
              /* @__PURE__ */ jsx("p", { children: "Terá um Treinador comprometido com a sua longevidade, mitigação de riscos e evolução real." }),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-5", children: [
                /* @__PURE__ */ jsx("img", { src: Logo, alt: "Logo Junior Well", className: "h-6 w-auto" }),
                /* @__PURE__ */ jsx("span", { className: "h-8 w-px bg-white/20" }),
                /* @__PURE__ */ jsxs("div", { className: "font-mono-label leading-tight text-foreground/70", children: [
                  "Treinador",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-foreground/40", children: "Junior Well" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "manifesto-meta-wrap space-y-8 md:pl-8 md:border-l md:border-white/10", children: [
              /* @__PURE__ */ jsx(
                MetaItem,
                {
                  icon: /* @__PURE__ */ jsx(FlaskConical, { className: "h-5 w-5" }),
                  title: "Ciência",
                  desc: "Aplicada ao corpo real."
                }
              ),
              /* @__PURE__ */ jsx(
                MetaItem,
                {
                  icon: /* @__PURE__ */ jsx(Triangle, { className: "h-5 w-5" }),
                  title: "Método",
                  desc: "Estratégia baseada em evidências."
                }
              ),
              /* @__PURE__ */ jsx(
                MetaItem,
                {
                  icon: /* @__PURE__ */ jsx(Puzzle, { className: "h-5 w-5" }),
                  title: "Resultado",
                  desc: "Performance com longevidade."
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function MetaItem({
  icon,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxs("div", { className: "manifesto-meta", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-3 grid h-9 w-9 place-items-center border border-jw-yellow/50 text-jw-yellow", children: icon }),
    /* @__PURE__ */ jsx("div", { className: "font-display text-lg tracking-[0.18em]", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-[200px] text-sm text-foreground/60", children: desc }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 h-px w-16 bg-white/15" })
  ] });
}
function SectionRail({ current, total = 7, label }) {
  const formatNum = (num) => String(num).padStart(2, "0");
  return (
    /* Adicionado: mx-auto para centralizar e max-w-[1340px] (ou o valor que preferir) para encurtar */
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-20 flex max-w-[1340px] items-center justify-between font-mono-label text-[11px] tracking-[0.2em] text-foreground/40 border-t border-white/[0.03] pt-8 w-full", children: [
      /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: formatNum(current) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5", children: Array.from({ length: total }).map((_, idx) => {
        const isCurrent = idx + 1 === current;
        const barWidth = isCurrent ? "w-16 bg-jw-yellow opacity-100" : "w-8 bg-white/15";
        return /* @__PURE__ */ jsx(
          "span",
          {
            className: `h-[1px] transition-all duration-500 ${barWidth}`
          },
          idx
        );
      }) }),
      /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: label ? label : formatNum(Math.min(current + 1, total)) })
    ] })
  );
}
gsap.registerPlugin(ScrollTrigger);
function Segmentos() {
  const sectionRef = useRef(null);
  const SEGMENTS = [
    {
      icon: /* @__PURE__ */ jsx(HeartPulse, { className: "h-6 w-6" }),
      title: "Grupos Especiais",
      desc: "Protocolos seguros para hipertensos, diabéticos e condições específicas, com acompanhamento minucioso."
    },
    {
      icon: /* @__PURE__ */ jsx(Stethoscope, { className: "h-6 w-6" }),
      title: "Dores Crônicas",
      desc: "Trabalho de reabilitação focado em mitigar riscos, restaurar mobilidade e eliminar dores limitantes."
    },
    {
      icon: /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6" }),
      title: "Longevidade",
      desc: "Treinamento inteligente para quem busca manter a autonomia e a qualidade de vida ao longo dos anos."
    }
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.context(() => {
        gsap.fromTo(
          ".segmento-card",
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
            }
          }
        );
      }, sectionRef);
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      id: "segmentos",
      className: "scroll-section relative isolate min-h-screen w-full overflow-hidden py-20",
      style: {
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(circle at 70% 20%, rgba(255,215,0,0.025), transparent 55%)"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block", children: /* @__PURE__ */ jsx("span", { className: "font-mono-label tracking-[0.6em] text-foreground/50", children: "S E G M E N T O S" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 pt-5 xl:px-28 isolate [contain:layout]", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/70", children: "02 — Segmentos" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display mt-8 max-w-[1100px] text-[8vw] leading-[1.02] md:text-[6vw]", children: [
            "Resultados específicos ",
            /* @__PURE__ */ jsx("br", {}),
            " para ",
            /* @__PURE__ */ jsx("span", { className: "text-jw-yellow", children: "cada corpo." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "segmento-grid mt-16 grid gap-6 md:grid-cols-3", children: SEGMENTS.map((item, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              style: { opacity: 0 },
              className: "segmento-card group border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-jw-yellow/50",
              children: [
                /* @__PURE__ */ jsx("div", { className: "mb-6 inline-flex h-12 w-12 items-center justify-center border border-jw-yellow/20 text-jw-yellow transition-colors group-hover:bg-jw-yellow group-hover:text-jw-black", children: item.icon }),
                /* @__PURE__ */ jsx("h3", { className: "font-display text-lg tracking-[0.1em] text-white", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-foreground/60", children: item.desc })
              ]
            },
            idx
          )) }),
          /* @__PURE__ */ jsx(SectionRail, { current: 2 })
        ] })
      ]
    }
  );
}
gsap.registerPlugin(ScrollTrigger);
const STEPS = [
  {
    n: "01",
    icon: /* @__PURE__ */ jsx(Microscope, { className: "h-5 w-5" }),
    title: "Diagnóstico",
    desc: "Avaliação biomecânica completa, histórico clínico, exames e mapeamento postural. Antes de treinar, entender."
  },
  {
    n: "02",
    icon: /* @__PURE__ */ jsx(ClipboardList, { className: "h-5 w-5" }),
    title: "Prescrição",
    desc: "Protocolo individualizado. Estímulos calculados, periodização baseada em evidência, nada de templates."
  },
  {
    n: "03",
    icon: /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5" }),
    title: "Execução",
    desc: "Acompanhamento ativo, ajuste fino semanal, biofeedback. O método respira junto com seu corpo."
  },
  {
    n: "04",
    icon: /* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5" }),
    title: "Resultado",
    desc: "Performance mensurável, longevidade real, autonomia. Você sai do programa sabendo treinar para sempre."
  }
];
function Methodology() {
  const ref = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.context(() => {
        const rows = gsap.utils.toArray(".method-row");
        rows.forEach((row) => {
          const num = row.querySelector(".method-num");
          const title = row.querySelector(".method-title-wrap");
          const desc = row.querySelector(".method-desc");
          const line = row.querySelector(".method-line-wrap");
          gsap.fromTo(
            [num, title, desc, line],
            {
              opacity: 0,
              x: (i) => i === 0 ? -20 : i === 1 ? -10 : 0,
              y: (i) => i === 2 ? 10 : 0,
              scaleX: (i) => i === 3 ? 0 : 1
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scaleX: 1,
              duration: 1,
              ease: "power4.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: row,
                start: "top 85%"
              }
            }
          );
        });
      }, ref);
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      id: "metodologia",
      className: "scroll-section relative isolate w-full overflow-hidden pt-32 pb-16",
      style: {
        backgroundColor: "#050505",
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,215,0,0.015), transparent 55%)"
      },
      children: [
        /* @__PURE__ */ jsx("style", { children: `
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
      ` }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block", children: /* @__PURE__ */ jsx("span", { className: "font-mono-label tracking-[0.6em] text-foreground/40", children: "M É T O D O" }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/70", children: "03 — MÉTODO" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-20 grid gap-10 md:grid-cols-[1fr_auto] md:items-end", children: [
            /* @__PURE__ */ jsxs("h2", { className: "font-display max-w-[900px] text-[10vw] leading-[1] sm:text-[7vw] md:text-[6vw] lg:text-[88px]", children: [
              "Método ",
              /* @__PURE__ */ jsx("span", { className: "text-jw-yellow", children: "JW" }),
              /* @__PURE__ */ jsx("br", {}),
              "em 4 atos."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "max-w-sm text-foreground/60 leading-relaxed", children: "Um método fechado de alta performance. Cada etapa é mensurável, auditável e replicável — porque resultado de elite não é acidente." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "method-grid relative mt-24 border-y border-white/[0.03]", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-[7px] -left-[5px] text-white/20 text-[10px] font-mono leading-none", children: "+" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-[7px] -right-[5px] text-white/20 text-[10px] font-mono leading-none", children: "+" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[7px] -left-[5px] text-white/20 text-[10px] font-mono leading-none", children: "+" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[7px] -right-[5px] text-white/20 text-[10px] font-mono leading-none", children: "+" }),
            STEPS.map((s) => /* @__PURE__ */ jsxs(
              "article",
              {
                className: "method-row group relative grid grid-cols-1 border-b border-white/[0.03] transition-colors duration-500 hover:bg-[#0A0A0A] last:border-b-0 md:grid-cols-[100px_280px_1fr_100px]",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "method-num flex items-center p-6 md:border-r md:border-white/[0.03] md:p-8", children: /* @__PURE__ */ jsx("span", { className: "font-mono-label tabular-nums text-white/20 transition-colors duration-500 group-hover:text-jw-yellow", children: s.n }) }),
                  /* @__PURE__ */ jsxs("div", { className: "method-title-wrap flex items-center gap-5 px-6 pb-6 md:border-r md:border-white/[0.03] md:p-8", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white/20 transition-colors duration-500 group-hover:text-jw-yellow", children: s.icon }),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl tracking-[0.06em] text-white/80 transition-colors duration-500 group-hover:text-white", children: s.title })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "method-desc flex items-center px-6 pb-8 md:p-8", children: /* @__PURE__ */ jsx("p", { className: "max-w-lg text-sm leading-relaxed text-foreground/50 transition-colors duration-500 group-hover:text-foreground/80", children: s.desc }) }),
                  /* @__PURE__ */ jsx("div", { className: "hidden items-center justify-center border-l border-white/[0.03] p-8 md:flex", children: /* @__PURE__ */ jsx("div", { className: "method-line-wrap origin-left", children: /* @__PURE__ */ jsx("span", { className: "block h-px w-8 bg-white/25 transition-all duration-700 ease-out group-hover:w-16 group-hover:bg-jw-yellow group-hover:opacity-100" }) }) })
                ]
              },
              s.n
            ))
          ] }),
          /* @__PURE__ */ jsx(SectionRail, { current: 3 })
        ] })
      ]
    }
  );
}
const gymTextureBg = "/assets/results-athlete-B45KYgYy.jpg";
gsap.registerPlugin(ScrollTrigger);
const CAROUSEL_DATA = [
  { img: gymTextureBg, name: "Rafael M.", result: "-12kg", time: "8 meses", desc: "Dor lombar eliminada e autonomia recuperada." },
  { img: gymTextureBg, name: "Camila S.", result: "+6kg", time: "12 meses", desc: "Ganho de massa magra estrutural." },
  { img: gymTextureBg, name: "Pedro A.", result: "-18kg", time: "14 meses", desc: "Recondicionamento físico completo." },
  { img: gymTextureBg, name: "Lucas F.", result: "+8kg", time: "9 meses", desc: "Força e mobilidade de elite." },
  { img: gymTextureBg, name: "Lucas F.", result: "+8kg", time: "9 meses", desc: "Força e mobilidade de elite." }
];
const METRICS = [
  { value: "184", suffix: "%", label: "Aumento médio de força em 6 meses" },
  { value: "92", suffix: "%", label: "Clientes que reduzem dor crônica" },
  { value: "12", suffix: "kg", label: "Massa magra ganha em programas anuais" },
  { value: "100", suffix: "%", label: "Acompanhamento individual e auditado" }
];
const TESTIMONIALS = [
  { quote: "Em 4 meses voltei a treinar sem dor lombar. O método é cirúrgico...", name: "Rafael M.", role: "Executivo · 41 anos" },
  { quote: "Tentei de tudo. Aqui finalmente entendi meu corpo. Resultado não é sorte, é estrutura.", name: "Camila S.", role: "Médica · 36 anos" },
  { quote: "Performance real, sem dieta absurda, sem treinos heróicos. Inteligência aplicada do início ao fim.", name: "Pedro A.", role: "Empresário · 48 anos" }
];
function Counter({ value, suffix }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = parseInt(value, 10);
    const obj = { v: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el.parentElement,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, { v: target, duration: 2.5, ease: "power4.out", onUpdate: () => {
          el.textContent = Math.floor(obj.v).toString();
        } });
      }
    });
    return () => trigger.kill();
  }, [value]);
  return /* @__PURE__ */ jsxs("span", { className: "font-display text-[14vw] leading-none sm:text-[10vw] md:text-[7vw] lg:text-[110px] tabular-nums", children: [
    /* @__PURE__ */ jsx("span", { ref, children: "0" }),
    /* @__PURE__ */ jsx("span", { className: "text-jw-yellow", children: suffix })
  ] });
}
function Results() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".result-slide",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".results-carousel-wrap", start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    /* Ajuste de espaçamento: pt-32 pb-16 para conectar melhor com a seção anterior */
    /* @__PURE__ */ jsxs("section", { ref: sectionRef, id: "resultados", className: "scroll-section relative isolate w-full overflow-hidden bg-[#050505] pt-32 pb-16 md:pb-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10 pointer-events-none", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: gymTextureBg,
            alt: "Textura de academia",
            className: "h-full w-full object-cover opacity-[0.08] blur-[6px] grayscale mix-blend-lighten"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)]" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] md:block", children: /* @__PURE__ */ jsx("span", { className: "font-mono-label tracking-[0.6em] text-foreground/40", children: "R E S U L T A D O S" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/70", children: "04 — Resultados" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display mt-8 max-w-[1100px] text-[10vw] leading-[1] sm:text-[7vw] md:text-[6vw] lg:text-[88px]", children: [
          "Resultados ",
          /* @__PURE__ */ jsx("br", {}),
          " que ",
          /* @__PURE__ */ jsx("span", { className: "text-jw-yellow", children: "não mentem." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "results-carousel-wrap mt-16 cursor-grab active:cursor-grabbing", children: /* @__PURE__ */ jsx(
          Swiper,
          {
            modules: [Autoplay],
            slidesPerView: 3,
            spaceBetween: 24,
            loop: true,
            speed: 800,
            autoplay: { delay: 3500, disableOnInteraction: false },
            breakpoints: { 320: { slidesPerView: 1.2 }, 768: { slidesPerView: 2.2 }, 1280: { slidesPerView: 3.5 }, 1500: { slidesPerView: 4 } },
            className: "w-full !overflow-visible",
            children: CAROUSEL_DATA.map((item, idx) => /* @__PURE__ */ jsx(SwiperSlide, { className: "result-slide opacity-0", children: /* @__PURE__ */ jsxs("div", { className: "group relative aspect-[4/5] overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-jw-yellow/40 hover:shadow-[0_20px_80px_rgba(255,215,0,0.06)] bg-white/[0.02] backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx("img", { src: item.img, alt: item.name, className: "h-full w-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100", loading: "lazy" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0", children: [
                /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-white", children: item.result }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-mono-label text-jw-yellow", children: item.time }),
                  /* @__PURE__ */ jsx("span", { className: "h-px w-4 bg-white/20 transition-all duration-500 group-hover:w-8 group-hover:bg-jw-yellow" }),
                  /* @__PURE__ */ jsx("span", { className: "font-mono-label text-xs text-white/50", children: item.name })
                ] })
              ] })
            ] }) }, idx))
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "mt-24 grid gap-12 border-y border-white/10 py-16 md:grid-cols-2 lg:grid-cols-4 relative z-10 backdrop-blur-[2px]", children: METRICS.map((m) => /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(Counter, { value: m.value, suffix: m.suffix }),
          /* @__PURE__ */ jsx("p", { className: "max-w-[220px] text-sm text-foreground/60", children: m.label })
        ] }, m.label)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-24 grid gap-10 md:grid-cols-3 relative z-10", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxs("figure", { className: "relative flex flex-col gap-6 border border-white/10 bg-black/40 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-1 hover:border-jw-yellow/40 hover:shadow-[0_20px_80px_rgba(255,215,0,0.04)]", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "font-display absolute right-5 top-2 text-6xl text-jw-yellow/30", children: '"' }),
          /* @__PURE__ */ jsx("blockquote", { className: "text-foreground/85 leading-relaxed", children: t.quote }),
          /* @__PURE__ */ jsxs("figcaption", { className: "mt-auto border-t border-white/10 pt-4 font-mono-label text-foreground/70", children: [
            t.name,
            /* @__PURE__ */ jsx("span", { className: "mt-1 block text-foreground/40", children: t.role })
          ] })
        ] }, t.name)) })
      ] })
    ] })
  );
}
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
    accent: false
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
    accent: true
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
    accent: false
  }
];
function Plans() {
  const navigate = useNavigate();
  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      if (window.location.pathname === "/") {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate({ to: "/" }).then(() => {
          setTimeout(() => {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: "smooth" });
          }, 500);
        });
      }
    } else {
      navigate({ to: href });
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "programas", className: "relative w-full bg-[#050505] py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block", children: /* @__PURE__ */ jsx("span", { className: "font-mono-label tracking-[0.6em] text-foreground/40", children: "P R O G R A M A S" }) }),
      /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/70", children: "05 — Programas" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-[10vw] leading-[1] sm:text-[7vw] md:text-[6vw] lg:text-[88px]", children: [
          "Resultados são ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-jw-yellow", children: "consequência do sistema." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-sm text-foreground/70", children: "Aceitamos um número fechado de novos clientes por trimestre. Cada vaga é uma decisão estratégica — sua e nossa." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 grid gap-6 lg:grid-cols-3", children: PROGRAMS.map((p) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: `group relative flex flex-col p-8 transition-all duration-500 border border-white/5 bg-white/[0.015] hover:border-jw-yellow/30 hover:-translate-y-2 ${p.accent ? "lg:-translate-y-8 lg:scale-[1.03] border-jw-yellow/40 shadow-[0_0_0_1px_rgba(255,215,0,0.08),0_18px_70px_rgba(255,215,0,0.06)]" : "hover:shadow-[0_18px_60px_rgba(255,215,0,0.04)]"}`,
          children: [
            p.accent && p.tag && /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-8 bg-jw-yellow px-3 py-1 font-mono-label text-jw-black text-[10px] uppercase tracking-widest", children: p.tag }),
            /* @__PURE__ */ jsxs("header", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-mono-label text-jw-yellow text-xs tracking-[0.2em]", children: p.code }),
              /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/40 text-[10px] mt-2 tracking-widest", children: p.level }),
              /* @__PURE__ */ jsx("h3", { className: "font-display mt-2 text-[30px] tracking-[-0.02em] leading-none", children: p.name })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-foreground/70 text-sm leading-relaxed min-h-[40px]", children: p.desc }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-baseline gap-2 border-b border-white/10 pb-8", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-display text-5xl", children: [
                "R$",
                p.price
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-mono-label text-foreground/50 text-sm uppercase", children: "mensal" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-4 text-sm text-foreground/80 flex-grow", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Check, { className: `h-4 w-4 shrink-0 ${p.accent ? "text-jw-yellow" : "text-foreground/60"}` }),
              /* @__PURE__ */ jsx("span", { children: f })
            ] }, f)) }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleNavClick("#consultoria"),
                className: `mt-10 flex items-center justify-start gap-2 ${p.accent ? "btn-jw btn-jw-primary" : "btn-jw btn-jw-ghost"}`,
                children: [
                  "Solicitar análise ",
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
                ]
              }
            )
          ]
        },
        p.name
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-32 border-t border-white/10 pt-16", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono-label text-jw-yellow text-xs tracking-[0.2em]", children: "CONS · 04" }),
          /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/40 text-[10px] mt-2 tracking-[0.45em] uppercase opacity-45", children: "Exclusivo" }),
          /* @__PURE__ */ jsxs("h3", { className: "font-display text-4xl text-jw-yellow mt-2", children: [
            "Acompanhamento",
            /* @__PURE__ */ jsx("br", {}),
            "Presencial"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
          /* @__PURE__ */ jsx("p", { className: "text-foreground/60 max-w-2xl leading-relaxed", children: 'Perfil exclusivo para quem busca a execução técnica perfeita sob meu olhar clínico. Não vendemos "hora", vendemos a sua consistência mensal através do sistema.' }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline border-b border-white/10 pb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-xl", children: "2x / semana" }),
              /* @__PURE__ */ jsx("span", { className: "font-display text-2xl text-jw-yellow", children: "R$ 500,00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline border-b border-white/10 pb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-xl", children: "3x / semana" }),
              /* @__PURE__ */ jsx("span", { className: "font-display text-2xl text-jw-yellow", children: "R$ 750,00" })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(SectionRail, { current: 5 })
  ] });
}
const QUESTIONS = [
  {
    q: "Como funciona a avaliação inicial?",
    a: "Realizamos uma anamnese completa com mapeamento postural e histórico clínico. O objetivo é desenhar um protocolo seguro e preciso, garantindo que o Método JW seja aplicado perfeitamente ao seu perfil."
  },
  {
    q: "O acompanhamento presencial inclui a consultoria online?",
    a: "Sim. O método presencial é integrado. Você recebe o acompanhamento direto nos treinos e a gestão dos seus dados via plataforma online, garantindo uma visão 360º da sua evolução."
  },
  {
    q: "O que acontece se eu não conseguir treinar algum dia?",
    a: "A disciplina é o pilar do sistema. Imprevistos ocorrem, e ajustamos a periodização conforme a sua realidade desde que haja comunicação prévia. Nosso foco é a sua consistência de longo prazo."
  },
  {
    q: "Existe garantia de resultados?",
    a: "Resultados são a consequência inevitável da adesão ao protocolo. Minha responsabilidade é entregar o método de alta performance; a sua é a execução técnica. Quando os dois lados se alinham, o resultado é uma questão de tempo."
  }
];
function Faq() {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "relative w-full overflow-hidden bg-[#050505] py-32", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]", children: [
    /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/70", children: "06 — Dúvidas" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-[10vw] leading-[1] sm:text-[7vw] md:text-[6vw] lg:text-[88px]", children: [
        "Perguntas ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-jw-yellow", children: "fundamentais." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-sm text-foreground/70", children: "Questões recorrentes sobre o método, a logística do sistema e as expectativas de alta performance." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block", children: /* @__PURE__ */ jsx("span", { className: "font-mono-label tracking-[0.6em] text-foreground/50", children: "D Ú V I D A S" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-20 max-w-[1100px] border-t border-white/10", children: QUESTIONS.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "border-b border-white/10", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setOpen(open === idx ? null : idx),
          className: "group flex w-full items-center justify-between py-8 text-left transition-colors",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl transition-all duration-500 group-hover:translate-x-2 group-hover:text-white", children: item.q }),
            /* @__PURE__ */ jsx(
              Plus,
              {
                className: `h-6 w-6 text-jw-yellow transition-transform duration-500 ${open === idx ? "rotate-[135deg]" : "rotate-0"}`
              }
            )
          ]
        }
      ),
      open === idx && /* @__PURE__ */ jsx("div", { className: "pb-8 text-foreground/60 leading-relaxed text-lg max-w-2xl animate-in fade-in slide-in-from-top-2", children: item.a })
    ] }, idx)) })
  ] }) });
}
function Apply() {
  const whatsappUrl = "https://wa.me/5579998081384?text=Olá, gostaria de obter um treino personalizado utilizando o Método JW.";
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "consultoria",
      className: "relative isolate w-full bg-[#050505] py-32",
      children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono-label text-foreground/70", children: "07 — Consultoria" }),
        /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxs("h2", { className: "font-display text-[10vw] leading-[0.9] sm:text-[7vw] md:text-[6vw] lg:text-[88px]", children: [
          "A excelência ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-jw-yellow", children: "não aceita improviso." })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20 grid gap-10 border-t border-white/10 pt-16 md:grid-cols-[1.2fr_.8fr]", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8 max-w-xl", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-foreground/80 leading-relaxed", children: "A performance começa antes do treino. O Método JW é desenhado para quem busca resultados de alta performance e valoriza o comprometimento de longo prazo." }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground/50", children: "Cada aplicação é analisada individualmente. Não buscamos quantidade. Buscamos a adesão total ao protocolo que será desenhado exclusivamente para o seu nível de exigência." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-start md:items-end", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 btn-jw btn-jw-primary text-lg px-8 py-6 w-full md:w-auto justify-center",
                children: [
                  "Iniciar qualificação",
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-2 font-mono-label text-[11px] tracking-[0.28em] uppercase text-white/35 flex flex-col md:items-end", children: [
              /* @__PURE__ */ jsx("span", { children: "Resposta em até 24 horas" }),
              /* @__PURE__ */ jsx("span", { children: "Análise individual" }),
              /* @__PURE__ */ jsx("span", { children: "Vagas limitadas" })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const visibleRef = useRef(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (isMobile) return;
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "power2.out" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.15, ease: "power2.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.15, ease: "power2.out" });
    const moveCursor = (e) => {
      if (!visibleRef.current) {
        visibleRef.current = true;
        gsap.to([cursor, ring], { opacity: 1, duration: 0.3 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest("a, button, .btn-jw, [data-cursor]")) {
        gsap.to(ring, { scale: 2, borderColor: "rgba(255, 215, 0, 0.8)", duration: 0.2 });
        gsap.to(cursor, { scale: 1.6, duration: 0.2 });
      }
    };
    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.closest("a, button, .btn-jw, [data-cursor]")) {
        gsap.to(ring, { scale: 1, borderColor: "rgba(255, 215, 0, 0.5)", duration: 0.2 });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      }
    };
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);
  if (isMobile) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: cursorRef,
        className: "fixed left-0 top-0 z-[9999] pointer-events-none w-[3px] h-[3px] bg-[#F7F7F7] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: ringRef,
        className: "fixed left-0 top-0 z-[9998] pointer-events-none w-[12px] h-[12px] border border-jw-yellow/50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 shadow-[0_0_8px_rgba(255,215,0,0.08)]"
      }
    )
  ] });
}
gsap.registerPlugin(ScrollTrigger);
const SECTION_IDS = [
  "manifesto",
  "segmentos",
  "metodologia",
  "resultados",
  "programas",
  "faq",
  "consultoria"
];
function Rail() {
  const railContainer = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const railChildren = railContainer.current?.children;
      if (!railChildren) return;
      const activate = (activeIndex) => {
        Array.from(railChildren).forEach((child, i) => {
          const tick = child.querySelector(".rail-tick");
          if (i === activeIndex) {
            gsap.to(child, { color: "#FFD700", scale: 1.08, duration: 0.3, ease: "power2.out" });
            gsap.to(tick, { width: 32, backgroundColor: "#FFD700", duration: 0.3, ease: "power2.out" });
          } else if (i < activeIndex) {
            gsap.to(child, { color: "rgba(255,255,255,0.7)", scale: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(tick, { width: 32, backgroundColor: "rgba(255,255,255,0.7)", duration: 0.3, ease: "power2.out" });
          } else {
            gsap.to(child, { color: "rgba(255,255,255,0.3)", scale: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(tick, { width: 18, backgroundColor: "rgba(255,255,255,0.3)", duration: 0.3, ease: "power2.out" });
          }
        });
      };
      const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
      sections.forEach((sec, i) => {
        ScrollTrigger.create({
          id: SECTION_IDS[i],
          trigger: sec,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => activate(i),
          onEnterBack: () => activate(i)
        });
      });
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, railContainer);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsx(
    "aside",
    {
      ref: railContainer,
      className: "fixed left-4 top-1/2 z-[999] hidden -translate-y-1/2 flex-col gap-6 md:flex pointer-events-none",
      children: SECTION_IDS.map((_, i) => (
        // Mantemos o gap-2 para o número e a barra ficarem unidos
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 transition-colors", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono-label tabular-nums", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("span", { className: "rail-tick h-[2px] w-[18px] bg-white/30" })
        ] }, i)
      ))
    }
  );
}
function Index() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative bg-[#050505] text-foreground", children: [
    loaded && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Cursor, {}),
      /* @__PURE__ */ jsx(SmoothScroll, {}),
      /* @__PURE__ */ jsx(Rail, {})
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "scroll-section", children: /* @__PURE__ */ jsx(Hero, {}) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-section", children: /* @__PURE__ */ jsx(Manifesto, {}) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-section", children: /* @__PURE__ */ jsx(Segmentos, {}) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-section", children: /* @__PURE__ */ jsx(Methodology, {}) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-section", children: /* @__PURE__ */ jsx(Results, {}) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-section", children: /* @__PURE__ */ jsx(Plans, {}) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-section", children: /* @__PURE__ */ jsx(Faq, {}) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-section", children: /* @__PURE__ */ jsx(Apply, {}) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
export {
  Index as component
};
