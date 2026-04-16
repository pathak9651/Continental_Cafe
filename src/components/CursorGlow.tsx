"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on non-touch devices
    if ("ontouchstart" in window) return;

    let animFrame: number;
    let x = 0, y = 0;
    let tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      // Smooth lerp
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9990] w-[500px] h-[500px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(111,78,55,0.08) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
