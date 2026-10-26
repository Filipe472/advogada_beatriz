import Image from "next/image";
type Props = { size?: number | string; tone?: "gold" | "light" | "muted"; opacity?: number; decorative?: boolean; className?: string; source?: string };
export function BrandMonogram({ size = 220, tone = "gold", opacity = 1, decorative = false, className = "", source = "/brand/bf-monogram-transparent.png" }: Props) {
  const numericSize = typeof size === "number" ? size : 500;
  return <span className={`monogram-frame monogram-${tone} ${className}`} style={{ width: size, opacity }}><Image src={source} alt={decorative ? "" : "Monograma BF"} aria-hidden={decorative} className="monogram" fill sizes={`${numericSize}px`} priority={numericSize >= 350} /></span>;
}
