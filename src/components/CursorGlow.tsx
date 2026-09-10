"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const wrap = wrapRef.current;
      const glow = glowRef.current;
      if (!wrap || !glow) return;

      const rect = wrap.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (inside) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        glow.style.opacity = "1";
      } else {
        glow.style.opacity = "0";
      }
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={glowRef}
        aria-hidden
        className="absolute h-96 w-96 rounded-full bg-white/8 opacity-0 blur-[100px] transition-opacity duration-500"
      />
    </div>
  );
}
