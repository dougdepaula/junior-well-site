import Lenis from "lenis";

export const lenis = new Lenis({
  duration: 1.25,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.4,
});

// Adicione isso para forçar o tipo se necessário:
(window as any).lenis = lenis;