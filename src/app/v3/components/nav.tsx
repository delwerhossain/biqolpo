"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Logo } from "./logo";

const LINKS = [
  { label: "Categories", href: "/v3#categories" },
  { label: "Trending", href: "/v3#featured" },
  { label: "How", href: "/v3#how" },
  { label: "Submit", href: "/v3#submit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-border-soft">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/v3" aria-label="Biqolpo home" className="flex items-center">
          <Logo size="md" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-3 py-2 text-[0.9rem] font-medium text-text-deep hover:text-primary-dark transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/alternatives"
            className="hidden sm:inline-flex v3-btn-ghost !min-h-[40px] !px-4 text-[0.85rem]"
            aria-label="Search"
          >
            <Search size={15} strokeWidth={2.2} />
            Search
          </Link>
          <Link
            href="/v3#submit"
            className="v3-btn !min-h-[40px] !px-4 text-[0.85rem]"
          >
            Submit swap
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-full bg-surface border border-border-soft flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border-soft bg-surface">
          <div className="px-5 py-4 space-y-1">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-[0.95rem] font-medium text-text-deep hover:bg-cream rounded-lg"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
