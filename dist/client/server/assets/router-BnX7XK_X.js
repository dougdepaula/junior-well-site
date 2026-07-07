import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, useLocation, useNavigate, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageSquare } from "lucide-react";
const faviconDark = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Camada_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%2047.52%2045.37'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2030.6.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.4%20Build%20109)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20%23fff;%20}%20.st1%20{%20fill:%20none;%20}%20.st2%20{%20fill:%20%23fae92a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st1'%20d='M25.84,44.94c-.66.85-2.02.38-2.02-.7v-10.3c0-1.25-1.01-2.26-2.26-2.26,0,0,0,0,0,0h-11.38c-.92,0-1.46-1.04-.92-1.79l7.48-10.47c1.07-1.5,0-3.58-1.84-3.58H1.13c-.92,0-1.46-1.04-.92-1.79L9.91.47c.21-.3.56-.47.92-.47h28.89c.92,0,1.46,1.04.92,1.79l-7.48,10.47c-1.07,1.5,0,3.58,1.84,3.58h11.38c.94,0,1.47,1.09.89,1.83l-21.43,27.27h0Z'/%3e%3cg%3e%3cpath%20class='st2'%20d='M45.5,20.89h-1.65v-2.73c0-.75-.61-1.36-1.36-1.36s-1.36.61-1.36,1.36v8.18c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36v-2.73h1.65c.75,0,1.36-.61,1.36-1.36s-.61-1.36-1.36-1.36h0Z'/%3e%3cpath%20class='st2'%20d='M38.58,15.58c-.75,0-1.36.61-1.36,1.36v4.33c-2.55.61-4.85,1.92-6.67,3.82l-1.65,1.72-2.74-2.81c-.52-.54-1.38-.55-1.92-.02-.54.52-.55,1.38-.02,1.92l3.72,3.81c.26.26.61.41.97.41h0c.37,0,.72-.15.97-.42l2.62-2.73c1.31-1.36,2.93-2.34,4.72-2.88v3.48c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36v-10.63c0-.75-.61-1.36-1.36-1.36Z'/%3e%3cpath%20class='st0'%20d='M5.61,16.8c-.75,0-1.36.61-1.36,1.36v2.73h-1.65c-.75,0-1.36.61-1.36,1.36s.61,1.36,1.36,1.36h1.65v2.73c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36v-8.18c0-.75-.61-1.36-1.36-1.36h0Z'/%3e%3cpath%20class='st0'%20d='M25.06,15.72c-.67-.33-1.49-.06-1.82.61l-4.89,9.83-1.73-2.33c-1.34-1.81-3.48-2.9-5.73-2.94v-3.96c0-.75-.61-1.36-1.36-1.36s-1.36.61-1.36,1.36v10.63c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36v-3.95c1.4.04,2.72.72,3.55,1.84l3.05,4.11c.26.35.66.55,1.09.55.04,0,.08,0,.12,0,.47-.04.89-.33,1.1-.75l5.87-11.82c.33-.67.06-1.49-.61-1.82h0Z'/%3e%3c/g%3e%3c/svg%3e";
const faviconLight = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Camada_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%2047.52%2045.37'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2030.6.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.4%20Build%20109)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23fae92a;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20class='st0'%20d='M25.84,44.94c-.66.85-2.02.38-2.02-.7v-10.3c0-1.25-1.01-2.26-2.26-2.26,0,0,0,0,0,0h-11.38c-.92,0-1.46-1.04-.92-1.79l7.48-10.47c1.07-1.5,0-3.58-1.84-3.58H1.13c-.92,0-1.46-1.04-.92-1.79L9.91.47c.21-.3.56-.47.92-.47h28.89c.92,0,1.46,1.04.92,1.79l-7.48,10.47c-1.07,1.5,0,3.58,1.84,3.58h11.38c.94,0,1.47,1.09.89,1.83l-21.43,27.27h0Z'/%3e%3cg%3e%3cpath%20class='st1'%20d='M45.5,20.89h-1.65v-2.73c0-.75-.61-1.36-1.36-1.36s-1.36.61-1.36,1.36v8.18c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36v-2.73h1.65c.75,0,1.36-.61,1.36-1.36s-.61-1.36-1.36-1.36h0Z'/%3e%3cpath%20class='st1'%20d='M38.58,15.58c-.75,0-1.36.61-1.36,1.36v4.33c-2.55.61-4.85,1.92-6.67,3.82l-1.65,1.72-2.74-2.81c-.52-.54-1.38-.55-1.92-.02-.54.52-.55,1.38-.02,1.92l3.72,3.81c.26.26.61.41.97.41h0c.37,0,.72-.15.97-.42l2.62-2.73c1.31-1.36,2.93-2.34,4.72-2.88v3.48c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36v-10.63c0-.75-.61-1.36-1.36-1.36Z'/%3e%3cpath%20d='M5.61,16.8c-.75,0-1.36.61-1.36,1.36v2.73h-1.65c-.75,0-1.36.61-1.36,1.36s.61,1.36,1.36,1.36h1.65v2.73c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36v-8.18c0-.75-.61-1.36-1.36-1.36h0Z'/%3e%3cpath%20d='M25.06,15.72c-.67-.33-1.49-.06-1.82.61l-4.89,9.83-1.73-2.33c-1.34-1.81-3.48-2.9-5.73-2.94v-3.96c0-.75-.61-1.36-1.36-1.36s-1.36.61-1.36,1.36v10.63c0,.75.61,1.36,1.36,1.36s1.36-.61,1.36-1.36v-3.95c1.4.04,2.72.72,3.55,1.84l3.05,4.11c.26.35.66.55,1.09.55.04,0,.08,0,.12,0,.47-.04.89-.33,1.1-.75l5.87-11.82c.33-.67.06-1.49-.61-1.82h0Z'/%3e%3c/g%3e%3c/svg%3e";
const appCss = "/assets/styles-BJBPtB_P.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página não encontrada." }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "A página que você procura não existe." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Voltar para a página inicial"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "A página que você procura não existe." }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Algo deu errado. Tente novamente mais tarde." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Tentar novamente"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Voltar para a página inicial"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Junior Well | Ciência, Reabilitação & Performance" },
      { name: "description", content: "Consultoria de alta performance com foco em biomecânica e resultados reais. Redefina seus limites com o método Junior Well." },
      { name: "author", content: "Douglas de Paula" },
      { property: "og:title", content: "Junior Well | Performance e Longevidade" },
      { property: "og:description", content: "Treino de elite baseado em ciência aplicada ao corpo real." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      // Ícone para modo escuro (Dark Theme)
      {
        rel: "icon",
        href: faviconDark,
        media: "(prefers-color-scheme: dark)"
      },
      // Ícone para modo claro (Light Theme)
      {
        rel: "icon",
        href: faviconLight,
        media: "(prefers-color-scheme: light)"
      },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Caveat:wght@500;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Toaster, { position: "bottom-right", theme: "dark", richColors: true }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const Logo$1 = "/assets/logo-LbFPcejd.svg";
const heroBarbell = "/assets/hero-barbell-CIygg_CW.jpg";
const links = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Método", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Programas", href: "#programas" },
  { label: "Dúvidas", href: "#faq" }
];
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      if (href === "#" || href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050505]/95 border-b border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] py-2" : "bg-transparent border-b border-transparent py-5"}`, children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1440px] w-full px-6 md:px-10 xl:px-16", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleNavClick("#"),
          className: "relative z-[60] flex items-center shrink-0 cursor-pointer",
          children: /* @__PURE__ */ jsx("img", { src: Logo$1, alt: "Junior Well", className: "h-6 sm:h-6 lg:h-8 w-auto" })
        }
      ),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-5", children: links.map((l) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleNavClick(l.href),
          className: "text-[11px] tracking-[0.18em] uppercase font-mono-label text-foreground/70 hover:text-jw-yellow transition-colors",
          children: l.label
        },
        l.label
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("#consultoria"), className: "hidden md:inline-flex btn-jw btn-jw-ghost border-jw-yellow text-jw-yellow text-[11px] tracking-[0.18em] uppercase py-2 px-4", children: "Consultoria" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setMenuOpen(true),
            "aria-label": "Abrir menu",
            className: "relative z-[60] grid place-items-center h-10 w-10 shrink-0 rounded-sm border border-white/10 bg-white/[0.015] hover:border-jw-yellow/40 hover:bg-white/[0.03] text-foreground transition-all duration-300 hover:scale-[1.05]",
            children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: `fixed inset-0 z-50 bg-[#050505] transition-all duration-500 flex flex-col justify-center ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-5 right-6 md:right-10 xl:right-16 max-w-[1440px] w-full flex justify-end inset-x-0 mx-auto py-1", children: /* @__PURE__ */ jsx("button", { onClick: () => setMenuOpen(false), className: "relative z-[60] grid h-9 w-9 lg:h-10 lg:w-10 place-items-center rounded-sm border border-white/10 bg-white/[0.015] hover:border-jw-yellow/40 hover:bg-white/[0.03] text-foreground transition-all duration-300 hover:scale-[1.05]", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-jw-yellow" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1440px] w-full px-6 md:px-20 grid xl:grid-cols-[1fr_420px] gap-12 xl:gap-24 items-center", children: [
        /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-6", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono-label text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2 block", children: "Navegação Geral" }),
          links.map((l, idx) => /* @__PURE__ */ jsxs("button", { onClick: () => handleNavClick(l.href), className: `group flex items-center font-display text-4xl md:text-6xl text-foreground hover:text-jw-yellow transition-all duration-500 transform ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}`, children: [
            /* @__PURE__ */ jsx("span", { className: "hidden md:block h-px w-0 bg-jw-yellow transition-all duration-300 group-hover:w-12 group-hover:mr-4" }),
            /* @__PURE__ */ jsx("span", { className: "transition-transform duration-300 group-hover:translate-x-1", children: l.label })
          ] }, l.label))
        ] }),
        /* @__PURE__ */ jsx("div", { className: `hidden xl:flex justify-center items-center transition-all duration-700 delay-200 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`, children: /* @__PURE__ */ jsxs("div", { className: "relative w-[420px] aspect-[3/4] overflow-hidden border border-white/5 grayscale opacity-90 transition-all duration-500", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url(${heroBarbell})` } }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(5,5,5,0.6))] pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono-label text-[9px] tracking-[0.4em] uppercase text-white/40 block mb-1", children: "JUNIOR WELL" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-white tracking-wide", children: "Performance Inteligente" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-16 left-6 right-6 md:left-20 md:right-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" })
    ] })
  ] });
}
const Logo = "/assets/logo-vertical-Cvwyk6sW.svg";
function Footer() {
  const navigate = useNavigate();
  const handleNavClick = (href) => {
    if (href === "#") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate({ to: "/" });
      }
      return;
    }
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (window.location.pathname !== "/") {
        navigate({ to: "/" }).then(() => {
          setTimeout(() => {
            const el = document.querySelector(href);
            el?.scrollIntoView({ behavior: "smooth" });
          }, 500);
        });
      } else {
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate({ to: href });
    }
  };
  return /* @__PURE__ */ jsx("footer", { className: "bg-jw-black py-20 px-6 md:px-20 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1500px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start gap-12 mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("#"), className: "group inline-block", children: /* @__PURE__ */ jsx("img", { src: Logo, alt: "Junior Well", className: "h-16 w-auto" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-mono-label text-jw-yellow text-sm", children: "MENU" }),
          [
            { label: "Manifesto", id: "#manifesto" },
            { label: "Método", id: "#metodologia" },
            { label: "Programas", id: "#programas" },
            // Ajustado para 'programas'
            { label: "Consultoria", id: "#consultoria" }
          ].map((item) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleNavClick(item.id),
              className: "text-foreground/70 hover:text-white transition-colors text-left",
              children: item.label
            },
            item.label
          ))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-mono-label text-jw-yellow text-sm", children: "SOCIAL" }),
          /* @__PURE__ */ jsxs("a", { href: "https://www.instagram.com/treinadorjuniorwell/", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-foreground/70 hover:text-jw-yellow transition-colors", children: [
            /* @__PURE__ */ jsx(Instagram, { size: 18 }),
            " Instagram"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "https://wa.me/5579998081384?text=Olá, gostaria de obter um treino personalizado utilizando o Método JW.", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-foreground/70 hover:text-jw-yellow transition-colors", children: [
            /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
            " WhatsApp"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6", children: [
      /* @__PURE__ */ jsx("p", { className: "font-mono-label text-foreground/30 text-[11px] tracking-[0.1em]", children: "© 2026 JUNIOR WELL. TODOS OS DIREITOS RESERVADOS." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-8 font-mono-label text-[13px] text-white/55", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/privacidade"), className: "hover:text-white transition-opacity duration-300", children: "Privacidade" }),
        /* @__PURE__ */ jsx("button", { onClick: () => handleNavClick("/termos"), className: "hover:text-white transition-opacity duration-300", children: "Termos" })
      ] })
    ] })
  ] }) });
}
const Route$2 = createFileRoute("/termos")({
  component: Terms
});
function Terms() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#050505] text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-32 pb-20 px-6 md:px-20 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl mb-12", children: "Termos de Uso" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 text-foreground/70 font-mono-label leading-relaxed", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-jw-yellow text-sm mb-4", children: "1. PROPRIEDADE INTELECTUAL" }),
          /* @__PURE__ */ jsx("p", { children: 'Todo o conteúdo, design, métodos e marca "Junior Well" são de propriedade exclusiva do titular e protegidos por leis de direitos autorais.' })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-jw-yellow text-sm mb-4", children: "2. USO DO SITE" }),
          /* @__PURE__ */ jsx("p", { children: "É vedada a cópia, reprodução ou distribuição do conteúdo para fins comerciais sem autorização prévia." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-jw-yellow text-sm mb-4", children: "3. LIMITAÇÃO DE RESPONSABILIDADE" }),
          /* @__PURE__ */ jsx("p", { children: "O conteúdo fornecido possui fins informativos. A aplicação dos métodos deve ser sempre supervisionada por profissionais qualificados." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-jw-yellow text-sm mb-4", children: "4. ATUALIZAÇÕES" }),
          /* @__PURE__ */ jsx("p", { children: "Estes termos podem ser atualizados a qualquer momento. A permanência do uso após as alterações implica aceitação automática." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Route$1 = createFileRoute("/privacidade")({
  component: Privacy
});
function Privacy() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#050505] text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-32 pb-20 px-6 md:px-20 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl md:text-6xl mb-12", children: "Privacidade" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 text-foreground/70 font-mono-label leading-relaxed", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-jw-yellow text-sm mb-4", children: "1. COLETA DE DADOS" }),
          /* @__PURE__ */ jsx("p", { children: "Coletamos informações fornecidas voluntariamente através do formulário de contato e WhatsApp, incluindo nome, e-mail e telefone, para viabilizar o agendamento de consultorias." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-jw-yellow text-sm mb-4", children: "2. FINALIDADE" }),
          /* @__PURE__ */ jsx("p", { children: "Seus dados são utilizados exclusivamente para o retorno de solicitações, melhoria da experiência do usuário e gestão de agendamentos." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-jw-yellow text-sm mb-4", children: "3. COOKIES E TERCEIROS" }),
          /* @__PURE__ */ jsx("p", { children: "Utilizamos ferramentas de análise (Google Analytics) para entender o comportamento de navegação. Nenhum dado sensível é compartilhado com terceiros sem consentimento." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-jw-yellow text-sm mb-4", children: "4. CONTATO" }),
          /* @__PURE__ */ jsx("p", { children: "Para exercer seus direitos sob a LGPD, entre em contato através dos canais disponibilizados neste site." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter = () => import("./index-BDly63bh.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Junior Well — Ciência, Reabilitação & Performance"
    }, {
      name: "description",
      content: "Método baseado em biomecânica e fisiologia para alta performance, reabilitação de dores e grupos especiais. Transforme sua saúde com segurança."
    }, {
      property: "og:title",
      content: "Junior Well — Ciência Aplicada ao Corpo Real"
    }, {
      property: "og:description",
      content: "Treino de elite com foco em segurança, longevidade e resultados reais para o seu momento de vida."
    }]
  })
});
const TermosRoute = Route$2.update({
  id: "/termos",
  path: "/termos",
  getParentRoute: () => Route$3
});
const PrivacidadeRoute = Route$1.update({
  id: "/privacidade",
  path: "/privacidade",
  getParentRoute: () => Route$3
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  PrivacidadeRoute,
  TermosRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Footer as F,
  Navbar as N,
  heroBarbell as h,
  router as r
};
