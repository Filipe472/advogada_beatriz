"use client";
import type React from "react";
import { useEffect, useRef } from "react";
export function Reveal({ children, className = "", repeat = false }: { children: React.ReactNode; className?: string; repeat?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const el = ref.current; if (!el) return; const io = new IntersectionObserver(([entry]) => { if (repeat) { el.classList.toggle("is-visible", entry.isIntersecting); } else if (entry.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: .12 }); io.observe(el); return () => io.disconnect(); }, [repeat]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
