import type React from "react";
import Link from "next/link";
type Props = { children: React.ReactNode; href?: string; variant?: "primary" | "secondary"; type?: "button" | "submit" };
export function Button({ children, href, variant = "primary", type = "button" }: Props) {
  const className = `button button-${variant}`;
  return href ? <Link className={className} href={href}>{children}</Link> : <button className={className} type={type}>{children}</button>;
}
