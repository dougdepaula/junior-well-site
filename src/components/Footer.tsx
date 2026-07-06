import { Instagram, MessageSquare } from "lucide-react";
import Logo from "@/assets/logo-vertical.svg";
import { useNavigate, useLocation } from "@tanstack/react-router"; // Importar hooks

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      });
    }
  };

  return (
    <footer className="bg-jw-black py-20 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Coluna do Logo */}
          <div className="flex flex-col gap-6">
            <a href="/#" className="group inline-block">
              <img 
                src={Logo} 
                alt="Junior Well" 
                className="h-16 w-auto transition-transform duration-500 group-hover:scale-105" 
              />
            </a>  
            <p className="font-mono-label text-foreground/40 max-w-[300px]">
              Performance de elite para corpos reais. O método que redefine o limite.
            </p>
          </div>

          {/* Colunas de Navegação */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono-label text-jw-yellow text-sm">MENU</h4>
              <a href="#manifesto" className="text-foreground/70 hover:text-white transition-colors">Manifesto</a>
              <a href="#metodologia" className="text-foreground/70 hover:text-white transition-colors">Método</a>
              <a href="#programas" className="text-foreground/70 hover:text-white transition-colors">Programas</a>
              <a href="#consultoria" className="text-foreground/70 hover:text-white transition-colors">Consultoria</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-mono-label text-jw-yellow text-sm">SOCIAL</h4>
              <a href="https://www.instagram.com/treinadorjuniorwell/" className="flex items-center gap-2 text-foreground/70 hover:text-jw-yellow transition-colors">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://wa.me/5579998081384?text=Olá, gostaria de obter um treino personalizado utilizando o Método JW." className="flex items-center gap-2 text-foreground/70 hover:text-jw-yellow transition-colors">
                <MessageSquare size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior refinado - Estilo Apple/Premium */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono-label text-foreground/30 text-[11px] tracking-[0.1em]">
            © 2026 JUNIOR WELL. TODOS OS DIREITOS RESERVADOS.
          </p>
          
          <div className="flex gap-8 font-mono-label text-[13px] text-white/55">
            <a href="/privacidade" className="hover:text-white transition-opacity duration-300">Privacidade</a>
            <a href="/termos" className="hover:text-white transition-opacity duration-300">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}