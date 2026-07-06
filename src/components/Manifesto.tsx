import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlaskConical, Triangle, Puzzle } from "lucide-react";
import athleteImg from "@/assets/athlete-manifesto.jpg";
import Logo from "@/assets/simbolo.svg";

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
  { t: "movimento.", k: "normal" },
] as const;

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".kinetic-word");
      gsap.set(words, { color: "rgba(255,255,255,0.08)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".kinetic-headline",
          start: "top 75%",
          end: "bottom 30%",
          scrub: 0.8,
        }
      });

      words.forEach((word) => {
        const isAccent = word.dataset.kind === "accent";
        tl.to(word, {
          color: isAccent ? "#FFD700" : "rgba(245,245,245,0.98)",
          textShadow: isAccent ? "0 0 24px rgba(255,215,0,0.35)" : "none",
          duration: 0.1,
        }, ">-0.05");
      });

      gsap.from(".manifesto-meta", {
        opacity: 0,
        x: 40,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".manifesto-meta-wrap", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative isolate min-h-screen w-full overflow-hidden bg-jw-graphite"
    >
      {/* Image with B&W -> color mask */}
      <div className="absolute inset-0 -z-10">
        <img
          src={athleteImg}
          alt="Atleta em estado de foco no ginásio"
          className="media-mask h-full w-full object-cover object-right opacity-36"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.85)_45%,rgba(5,5,5,0.2)_100%)]" />
      </div>

      {/* Left side vertical label */}
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 md:block">
        <span className="font-mono-label tracking-[0.6em] text-foreground/50">M A N I F E S T O</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 pt-24 xl:px-28 isolate [contain:layout]">
        <div className="font-mono-label text-foreground/70">01 — Manifesto</div>

        <h2 className="kinetic-headline font-display mt-12 max-w-[1100px] text-[10vw] leading-[1.02] sm:text-[8vw] md:text-[7.4vw] lg:text-[110px]">
          {HEADLINE.map((w, i) => (
            <span key={i} data-kind={w.k} className="kinetic-word">
              {w.t}
            </span>
          ))}
        </h2>

        <div className="mt-20 grid gap-12 md:grid-cols-[1fr_320px]">
          <div className="max-w-xl space-y-2 text-foreground/80">
          <p>Você não terá apenas uma planilha genérica de treinos.</p>
          <p>Terá um Treinador comprometido com a sua longevidade, mitigação de riscos e evolução real.</p>
          

            <div className="mt-10 flex items-center gap-5">
              <img src={Logo} alt="Logo Junior Well" className="h-6 w-auto" />
              <span className="h-8 w-px bg-white/20" />
              <div className="font-mono-label leading-tight text-foreground/70">
                Treinador
                <br />
                <span className="text-foreground/40">Junior Well</span>
              </div>
            </div>
          </div>

          <div className="manifesto-meta-wrap space-y-8 md:pl-8 md:border-l md:border-white/10">
            <MetaItem
              icon={<FlaskConical className="h-5 w-5" />}
              title="Ciência"
              desc="Aplicada ao corpo real."
            />
            <MetaItem
              icon={<Triangle className="h-5 w-5" />}
              title="Método"
              desc="Estratégia baseada em evidências."
            />
            <MetaItem
              icon={<Puzzle className="h-5 w-5" />}
              title="Resultado"
              desc="Performance com longevidade."
            />
          </div>
        </div>

        
      </div>
    </section>
  );
}

function MetaItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="manifesto-meta">
      <div className="mb-3 grid h-9 w-9 place-items-center border border-jw-yellow/50 text-jw-yellow">
        {icon}
      </div>
      <div className="font-display text-lg tracking-[0.18em]">{title}</div>
      <p className="mt-1 max-w-[200px] text-sm text-foreground/60">{desc}</p>
      <div className="mt-4 h-px w-16 bg-white/15" />
    </div>
  );
}