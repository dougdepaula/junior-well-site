// components/Cursor.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Latência zero com quickTo
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isBtn = target.closest("button") || target.closest(".btn-jw");
      
      gsap.to(cursor, {
        width: isBtn ? 36 : 22,
        height: isBtn ? 36 : 22,
        backgroundColor: isBtn ? "rgba(255,215,0,.08)" : "transparent",
        borderColor: "rgba(255,215,0,1)",
        duration: 0.3
      });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, {
        width: 18,
        height: 18,
        backgroundColor: "transparent",
        borderColor: "rgba(255,215,0,.5)",
        duration: 0.3
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
    // Adiciona listener para todos os links e botões
    const interactables = document.querySelectorAll("a, button");
    interactables.forEach(el => {
      el.addEventListener("mouseenter", handleHoverEnter as EventListener);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", handleHoverEnter as EventListener);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed left-0 top-0 z-[9999] pointer-events-none rounded-full border border-jw-yellow/50 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      style={{ width: "18px", height: "18px" }}
    />
  );
}