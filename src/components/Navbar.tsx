import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import Logo from "@/assets/logo.svg";
import AthleteBg from "@/assets/hero-barbell.jpg";

const links = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Método", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Programas", href: "#programas" },
  { label: "Dúvidas", href: "#faq" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    if (location.pathname === '/') {
      // Se href é "#" ou vazio, sobe para o topo
      if (href === "#" || href === "/") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se não está na home, redireciona e depois sobe para o topo
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      });
    }
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050505]/95 border-b border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] py-2" : "bg-transparent border-b border-transparent py-5"}`}>
        <div className="mx-auto max-w-[1440px] w-full px-6 md:px-10 xl:px-16">
          <div className="flex items-center justify-between w-full">

            {/* Logo: Agora com navegação inteligente para o Hero (topo) */}
            <button
              onClick={() => handleNavClick("#")}
              className="relative z-[60] flex items-center shrink-0 cursor-pointer"
            >
              <img src={Logo} alt="Junior Well" className="h-6 sm:h-6 lg:h-8 w-auto" />
            </button>

            <nav className="hidden lg:flex items-center gap-5">
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => handleNavClick(l.href)}
                  className="text-[11px] tracking-[0.18em] uppercase font-mono-label text-foreground/70 hover:text-jw-yellow transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => handleNavClick("#consultoria")} className="hidden md:inline-flex btn-jw btn-jw-ghost border-jw-yellow text-jw-yellow text-[11px] tracking-[0.18em] uppercase py-2 px-4">
                Consultoria
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu"
                className="relative z-[60] grid place-items-center h-10 w-10 shrink-0 rounded-sm border border-white/10 bg-white/[0.015] hover:border-jw-yellow/40 hover:bg-white/[0.03] text-foreground transition-all duration-300 hover:scale-[1.05]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-[#050505] transition-all duration-500 flex flex-col justify-center ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute top-5 right-6 md:right-10 xl:right-16 max-w-[1440px] w-full flex justify-end inset-x-0 mx-auto py-1">
          <button onClick={() => setMenuOpen(false)} className="relative z-[60] grid h-9 w-9 lg:h-10 lg:w-10 place-items-center rounded-sm border border-white/10 bg-white/[0.015] hover:border-jw-yellow/40 hover:bg-white/[0.03] text-foreground transition-all duration-300 hover:scale-[1.05]">
            <X className="h-5 w-5 text-jw-yellow" />
          </button>
        </div>

        <div className="mx-auto max-w-[1440px] w-full px-6 md:px-20 grid xl:grid-cols-[1fr_420px] gap-12 xl:gap-24 items-center">
          <nav className="flex flex-col space-y-6">
            <span className="font-mono-label text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2 block">Navegação Geral</span>
            {links.map((l, idx) => (
              <button key={l.label} onClick={() => handleNavClick(l.href)} className={`group flex items-center font-display text-4xl md:text-6xl text-foreground hover:text-jw-yellow transition-all duration-500 transform ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`}>
                <span className="hidden md:block h-px w-0 bg-jw-yellow transition-all duration-300 group-hover:w-12 group-hover:mr-4" />
                <span className="transition-transform duration-300 group-hover:translate-x-1">{l.label}</span>
              </button>
            ))}
          </nav>

          <div className={`hidden xl:flex justify-center items-center transition-all duration-700 delay-200 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="relative w-[420px] aspect-[3/4] overflow-hidden border border-white/5 grayscale opacity-90 transition-all duration-500">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${AthleteBg})` }} />
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(5,5,5,0.6))] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono-label text-[9px] tracking-[0.4em] uppercase text-white/40 block mb-1">JUNIOR WELL</span>
                <p className="font-display text-lg text-white tracking-wide">Performance Inteligente</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 left-6 right-6 md:left-20 md:right-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </>
  );
}