import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Suas imagens
import resultsImg from "@/assets/results-athlete.jpg";
import gymTextureBg from "@/assets/results-athlete.jpg"; // Substitua por uma imagem de textura (anilhas/academia)

gsap.registerPlugin(ScrollTrigger);

const CAROUSEL_DATA = [
  { img: resultsImg, name: "Rafael M.", result: "-12kg", time: "8 meses", desc: "Dor lombar eliminada e autonomia recuperada." },
  { img: resultsImg, name: "Camila S.", result: "+6kg", time: "12 meses", desc: "Ganho de massa magra estrutural." },
  { img: resultsImg, name: "Pedro A.", result: "-18kg", time: "14 meses", desc: "Recondicionamento físico completo." },
  { img: resultsImg, name: "Lucas F.", result: "+8kg", time: "9 meses", desc: "Força e mobilidade de elite." },
  { img: resultsImg, name: "Lucas F.", result: "+8kg", time: "9 meses", desc: "Força e mobilidade de elite." },
];

const METRICS = [
  { value: "184", suffix: "%", label: "Aumento médio de força em 6 meses" },
  { value: "92", suffix: "%", label: "Clientes que reduzem dor crônica" },
  { value: "12", suffix: "kg", label: "Massa magra ganha em programas anuais" },
  { value: "100", suffix: "%", label: "Acompanhamento individual e auditado" },
];

const TESTIMONIALS = [
  { quote: "Em 4 meses voltei a treinar sem dor lombar. O método é cirúrgico...", name: "Rafael M.", role: "Executivo · 41 anos" },
  { quote: "Tentei de tudo. Aqui finalmente entendi meu corpo. Resultado não é sorte, é estrutura.", name: "Camila S.", role: "Médica · 36 anos" },
  { quote: "Performance real, sem dieta absurda, sem treinos heróicos. Inteligência aplicada do início ao fim.", name: "Pedro A.", role: "Empresário · 48 anos" },
];

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
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
        gsap.to(obj, { v: target, duration: 2.5, ease: "power4.out", onUpdate: () => { el.textContent = Math.floor(obj.v).toString(); } });
      },
    });
    return () => trigger.kill();
  }, [value]);

  return (
    <span className="font-display text-[14vw] leading-none sm:text-[10vw] md:text-[7vw] lg:text-[110px] tabular-nums">
      <span ref={ref}>0</span><span className="text-jw-yellow">{suffix}</span>
    </span>
  );
}

// ... (imports e constantes mantidos iguais)

export function Results() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".result-slide",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, stagger: 0.1, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".results-carousel-wrap", start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    /* Ajuste de espaçamento: pt-32 pb-16 para conectar melhor com a seção anterior */
    <section ref={sectionRef} id="resultados" className="scroll-section relative isolate w-full overflow-hidden bg-[#050505] pt-32 pb-16 md:pb-24">

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={gymTextureBg}
          alt="Textura de academia"
          className="h-full w-full object-cover opacity-[0.08] blur-[6px] grayscale mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)]" />
      </div>

      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] md:block">
        <span className="font-mono-label tracking-[0.6em] text-foreground/40">R E S U L T A D O S</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]">

        {/* Nova numeração: 04 */}
        <div className="font-mono-label text-foreground/70">04 — Resultados</div>
        <h2 className="font-display mt-8 max-w-[1100px] text-[10vw] leading-[1] sm:text-[7vw] md:text-[6vw] lg:text-[88px]">
          Resultados <br /> que <span className="text-jw-yellow">não mentem.</span>
        </h2>

        {/* Carrossel */}
        <div className="results-carousel-wrap mt-16 cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            speed={800}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{ 320: { slidesPerView: 1.2 }, 768: { slidesPerView: 2.2 }, 1280: { slidesPerView: 3.5 }, 1500: { slidesPerView: 4 } }}
            className="w-full !overflow-visible"
          >
            {CAROUSEL_DATA.map((item, idx) => (
              <SwiperSlide key={idx} className="result-slide opacity-0">
                <div className="group relative aspect-[4/5] overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-jw-yellow/40 hover:shadow-[0_20px_80px_rgba(255,215,0,0.06)] bg-white/[0.02] backdrop-blur-sm">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="font-display text-4xl text-white">{item.result}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-mono-label text-jw-yellow">{item.time}</span>
                      <span className="h-px w-4 bg-white/20 transition-all duration-500 group-hover:w-8 group-hover:bg-jw-yellow" />
                      <span className="font-mono-label text-xs text-white/50">{item.name}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Métricas */}
        <div className="mt-24 grid gap-12 border-y border-white/10 py-16 md:grid-cols-2 lg:grid-cols-4 relative z-10 backdrop-blur-[2px]">
          {METRICS.map((m) => (
            <div key={m.label} className="space-y-4">
              <Counter value={m.value} suffix={m.suffix} />
              <p className="max-w-[220px] text-sm text-foreground/60">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mt-24 grid gap-10 md:grid-cols-3 relative z-10">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="relative flex flex-col gap-6 border border-white/10 bg-black/40 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-1 hover:border-jw-yellow/40 hover:shadow-[0_20px_80px_rgba(255,215,0,0.04)]">
              <span aria-hidden className="font-display absolute right-5 top-2 text-6xl text-jw-yellow/30">"</span>
              <blockquote className="text-foreground/85 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-auto border-t border-white/10 pt-4 font-mono-label text-foreground/70">
                {t.name}<span className="mt-1 block text-foreground/40">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Rodapé de Navegação Ajustado */}
        {/*<div className="mt-24 flex items-center justify-between font-mono-label text-foreground/50">
          <span className="tabular-nums">04</span>
          <div className="flex items-center gap-2">
            <span className="h-px w-12 bg-white/20" />
            <span className="h-px w-12 bg-white/20" />
            <span className="h-px w-12 bg-white/20" />
            <span className="animate-pulse-rail h-px w-12 bg-jw-yellow" />
          </div>
          <span className="tabular-nums">04</span>
        </div>*/}
      </div>
    </section>
  );
}