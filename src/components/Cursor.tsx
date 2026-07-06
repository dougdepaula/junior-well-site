import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIsMobile } from "@/hooks/use-mobile";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.05, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.05, ease: "power2.out" });
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.15, ease: "power2.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.15, ease: "power2.out" });

    const moveCursor = (e: MouseEvent) => {
      if (!visibleRef.current) {
        visibleRef.current = true;
        gsap.to([cursor, ring], { opacity: 1, duration: 0.3 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .btn-jw, [data-cursor]")) {
        gsap.to(ring, { scale: 2, borderColor: "rgba(255, 215, 0, 0.8)", duration: 0.2 });
        gsap.to(cursor, { scale: 1.6, duration: 0.2 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .btn-jw, [data-cursor]")) {
        gsap.to(ring, { scale: 1, borderColor: "rgba(255, 215, 0, 0.5)", duration: 0.2 });
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Ponto central - Glow fixo via CSS */}
      <div
        ref={cursorRef}
        className="fixed left-0 top-0 z-[9999] pointer-events-none w-[3px] h-[3px] bg-[#F7F7F7] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0"
      />
      {/* Anel externo - Glow via CSS otimizado */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 z-[9998] pointer-events-none w-[12px] h-[12px] border border-jw-yellow/50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 shadow-[0_0_8px_rgba(255,215,0,0.08)]"
      />
    </>
  );
}