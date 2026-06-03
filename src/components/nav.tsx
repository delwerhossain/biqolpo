"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Index", href: "/alternatives" },
  { label: "About", href: "/about" },
  { label: "Join", href: "/#join" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false; // anchor links never "active"
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b border-ink/10">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between gap-3">
        <Link href="/" aria-label="Biqolpo home" className="flex items-center shrink-0">
          <Logo size="md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`pill transition-colors ${
                  active
                    ? "bg-signal/30 text-ink font-semibold"
                    : "text-ink hover:bg-signal/25"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Contact CTA — compact on mobile */}
          <Link
            href="/#join"
            className="btn-pill !py-2 !px-3.5 text-[0.72rem] md:!py-2.5 md:!px-5 md:text-[0.8rem]"
          >
            Contact<span className="hidden sm:inline">&nbsp;us</span>
            <span className="btn-pill-arrow !w-6 !h-6 md:!w-7 md:!h-7 !ml-1.5">
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </span>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/15 text-ink active:scale-95 transition-transform"
          >
            {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-30 origin-top transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="mx-3 rounded-2xl border border-ink/10 bg-paper shadow-[0_12px_32px_-16px_rgba(10,10,10,0.35)] p-2">
          {LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[1.05rem] font-medium transition-colors ${
                  active
                    ? "bg-signal/25 text-ink font-semibold"
                    : "text-ink/80 hover:bg-paper-deep"
                }`}
              >
                {l.label}
                {active && <span className="dot-sm" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Backdrop */}
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 top-16 z-20 bg-ink/20 backdrop-blur-[2px]"
        />
      )}
    </header>
  );
}
