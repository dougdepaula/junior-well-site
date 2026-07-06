import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SmoothScroll } from "../components/SmoothScroll";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Manifesto } from "../components/Manifesto";
import { Segmentos } from "../components/Segmentos";
import { Methodology } from "../components/Methodology";
import { Results } from "../components/Results";
import { Plans } from "../components/Plans";
import { Faq } from "../components/Faq";
import { Apply } from "../components/Apply";
import { Footer } from "../components/Footer";
import { Cursor } from "../components/Cursor"; // Importado
import { Rail } from "../components/Rail";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Junior Well — Ciência, Reabilitação & Performance" },
      {
        name: "description",
        content:
          "Método baseado em biomecânica e fisiologia para alta performance, reabilitação de dores e grupos especiais. Transforme sua saúde com segurança.",
      },
      { property: "og:title", content: "Junior Well — Ciência Aplicada ao Corpo Real" },
      {
        property: "og:description",
        content: "Treino de elite com foco em segurança, longevidade e resultados reais para o seu momento de vida.",
      },
    ],
  }),
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  // Garante que os scripts utilitários (Cursor, Scroll, Rail) arranquem no Client-Side
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative bg-[#050505] text-foreground">

      {/* Utilitários globais de luxo */}
      {loaded && (
        <>
          <Cursor />
          <SmoothScroll />
          <Rail />
        </>
      )}

      <Navbar />

      <main>
        <section className="scroll-section">
          <Hero />
        </section>

        <section className="scroll-section">
          <Manifesto />
        </section>

        <section className="scroll-section">
          <Segmentos />
        </section>

        <section className="scroll-section">
          <Methodology />
        </section>

        <section className="scroll-section">
          <Results />
        </section>

        <section className="scroll-section">
          <Plans />
        </section>

        <section className="scroll-section">
          <Faq />
        </section>

        <section className="scroll-section">
          <Apply />
        </section>

        <Footer />
      </main>
    </div>
  );
}