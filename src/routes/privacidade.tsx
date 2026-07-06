import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Adicione este bloco para registrar a rota
export const Route = createFileRoute('/privacidade')({
  component: Privacy,
})

export function Privacy() {
  return (
    <div className="bg-[#050505] text-foreground min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-20 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl mb-12">Privacidade</h1>
        
        <div className="space-y-8 text-foreground/70 font-mono-label leading-relaxed">
          <section>
            <h2 className="text-jw-yellow text-sm mb-4">1. COLETA DE DADOS</h2>
            <p>Coletamos informações fornecidas voluntariamente através do formulário de contato e WhatsApp, incluindo nome, e-mail e telefone, para viabilizar o agendamento de consultorias.</p>
          </section>

          <section>
            <h2 className="text-jw-yellow text-sm mb-4">2. FINALIDADE</h2>
            <p>Seus dados são utilizados exclusivamente para o retorno de solicitações, melhoria da experiência do usuário e gestão de agendamentos.</p>
          </section>

          <section>
            <h2 className="text-jw-yellow text-sm mb-4">3. COOKIES E TERCEIROS</h2>
            <p>Utilizamos ferramentas de análise (Google Analytics) para entender o comportamento de navegação. Nenhum dado sensível é compartilhado com terceiros sem consentimento.</p>
          </section>

          <section>
            <h2 className="text-jw-yellow text-sm mb-4">4. CONTATO</h2>
            <p>Para exercer seus direitos sob a LGPD, entre em contato através dos canais disponibilizados neste site.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}