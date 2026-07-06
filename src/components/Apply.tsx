import { ArrowUpRight } from "lucide-react";

export function Apply() {
  const whatsappUrl = "https://wa.me/5579998081384?text=Olá, gostaria de obter um treino personalizado utilizando o Método JW.";

  return (
    <section
      id="consultoria"
      className="relative isolate w-full bg-[#050505] py-32"
    >
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1600px] flex-col justify-between px-6 pb-10 md:px-20 xl:px-28 isolate [contain:layout]">

        {/* Etiqueta de Seção */}
        <div className="font-mono-label text-foreground/70">07 — Consultoria</div>

        {/* Headline de Impacto */}
        <div className="mt-12">
          <h2 className="font-display text-[10vw] leading-[0.9] sm:text-[7vw] md:text-[6vw] lg:text-[88px]">
            A excelência <br />
            <span className="text-jw-yellow">não aceita improviso.</span>
          </h2>
        </div>

        {/* Manifesto + Ação (Ritmo Quebrado) */}
        <div className="mt-20 grid gap-10 border-t border-white/10 pt-16 md:grid-cols-[1.2fr_.8fr]">

          {/* Lado Esquerdo: Manifesto */}
          <div className="space-y-8 max-w-xl">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              A performance começa antes do treino. O Método JW é desenhado para quem busca resultados de alta performance e valoriza o comprometimento de longo prazo.
            </p>
            <p className="text-foreground/50">
              Cada aplicação é analisada individualmente. Não buscamos quantidade. Buscamos a adesão total ao protocolo que será desenhado exclusivamente para o seu nível de exigência.
            </p>
          </div>

          {/* Lado Direito: Ação */}
          <div className="flex flex-col justify-start md:items-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-jw btn-jw-primary text-lg px-8 py-6 w-full md:w-auto justify-center"
            >
              Iniciar qualificação
              <ArrowUpRight className="h-5 w-5" />
            </a>

            {/* Rodapé Editorial - Refinamento Técnico */}
            <div className="mt-8 space-y-2 font-mono-label text-[11px] tracking-[0.28em] uppercase text-white/35 flex flex-col md:items-end">
              <span>Resposta em até 24 horas</span>
              <span>Análise individual</span>
              <span>Vagas limitadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}