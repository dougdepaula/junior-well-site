import { Instagram, MessageSquare } from "lucide-react";
import Logo from "@/assets/logo-vertical.svg";
import { useNavigate } from "@tanstack/react-router";

export function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    // Tratamento do Logo
    if (href === "#") {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate({ to: '/' });
      }
      return;
    }

    // Tratamento de seções (Âncoras)
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      
      if (window.location.pathname !== '/') {
        navigate({ to: '/' }).then(() => {
          setTimeout(() => {
            const el = document.querySelector(href);
            el?.scrollIntoView({ behavior: 'smooth' });
          }, 500); // Aumentado para 500ms para garantir carregamento total
        });
      } else {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate({ to: href });
    }
  };

  return (
    <footer className="bg-jw-black py-20 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <button onClick={() => handleNavClick("#")} className="group inline-block">
              <img src={Logo} alt="Junior Well" className="h-16 w-auto" />
            </button>  
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono-label text-jw-yellow text-sm">MENU</h4>
              {[
                { label: "Manifesto", id: "#manifesto" },
                { label: "Método", id: "#metodologia" },
                { label: "Programas", id: "#programas" }, // Ajustado para 'programas'
                { label: "Consultoria", id: "#consultoria" }
              ].map((item) => (
                <button 
                  key={item.label}
                  onClick={() => handleNavClick(item.id)} 
                  className="text-foreground/70 hover:text-white transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-mono-label text-jw-yellow text-sm">SOCIAL</h4>
              <a href="https://www.instagram.com/treinadorjuniorwell/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-jw-yellow transition-colors">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://wa.me/5579998081384?text=Olá, gostaria de obter um treino personalizado utilizando o Método JW." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-jw-yellow transition-colors">
                <MessageSquare size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono-label text-foreground/30 text-[11px] tracking-[0.1em]">
            © 2026 JUNIOR WELL. TODOS OS DIREITOS RESERVADOS.
          </p>
          
          <div className="flex gap-8 font-mono-label text-[13px] text-white/55">
            <button onClick={() => handleNavClick("/privacidade")} className="hover:text-white transition-opacity duration-300">Privacidade</button>
            <button onClick={() => handleNavClick("/termos")} className="hover:text-white transition-opacity duration-300">Termos</button>
          </div>
        </div>
      </div>
    </footer>
  );
}