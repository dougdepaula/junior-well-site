import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { createFileRoute } from '@tanstack/react-router';

// Adicione este bloco para registrar a rota
export const Route = createFileRoute('/termos')({
  component: Terms,
})
export function Terms() {
  return (
    <div className="bg-[#050505] text-foreground min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-20 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl mb-12">Termos de Uso</h1>
        
        <div className="space-y-8 text-foreground/70 font-mono-label leading-relaxed">
          <section>
            <h2 className="text-jw-yellow text-sm mb-4">1. PROPRIEDADE INTELECTUAL</h2>
            <p>Todo o conteúdo, design, métodos e marca "Junior Well" são de propriedade exclusiva do titular e protegidos por leis de direitos autorais.</p>
          </section>

          <section>
            <h2 className="text-jw-yellow text-sm mb-4">2. USO DO SITE</h2>
            <p>É vedada a cópia, reprodução ou distribuição do conteúdo para fins comerciais sem autorização prévia.</p>
          </section>

          <section>
            <h2 className="text-jw-yellow text-sm mb-4">3. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p>O conteúdo fornecido possui fins informativos. A aplicação dos métodos deve ser sempre supervisionada por profissionais qualificados.</p>
          </section>

          <section>
            <h2 className="text-jw-yellow text-sm mb-4">4. ATUALIZAÇÕES</h2>
            <p>Estes termos podem ser atualizados a qualquer momento. A permanência do uso após as alterações implica aceitação automática.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}