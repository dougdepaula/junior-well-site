import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTION_IDS = [
  "manifesto",
  "segmentos",
  "metodologia",
  "resultados",
  "programas",
  "faq",
  "consultoria",
];

export function Rail() {
  const railContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const railChildren = railContainer.current?.children;
      if (!railChildren) return;

      const activate = (activeIndex: number) => {
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

      const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);

      sections.forEach((sec, i) => {
        ScrollTrigger.create({
          id: SECTION_IDS[i],
          trigger: sec,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => activate(i),
          onEnterBack: () => activate(i),
        });
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

    }, railContainer);

    return () => ctx.revert();
  }, []);

  return (
    <aside
  ref={railContainer}
  // Mantemos o left-6 original para o Rail ficar bem no canto da tela
  className="fixed left-4 top-1/2 z-[999] hidden -translate-y-1/2 flex-col gap-6 md:flex pointer-events-none"
>
  {SECTION_IDS.map((_, i) => (
    // Mantemos o gap-2 para o número e a barra ficarem unidos
    <div key={i} className="flex items-center gap-2 transition-colors">
      <span className="font-mono-label tabular-nums">{String(i + 1).padStart(2, "0")}</span>
      <span className="rail-tick h-[2px] w-[18px] bg-white/30" />
    </div>
  ))}
</aside>
  );
}