import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b border-ink/10">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/v2" aria-label="Biqolpo home" className="flex items-center">
          <Logo size="md" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "Home", href: "/v2" },
            { label: "Index", href: "/alternatives" },
            { label: "About", href: "/about" },
            { label: "Join", href: "/v2#join" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="pill text-ink hover:bg-purple-light transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/v2#join"
          className="btn-pill !py-2.5 !px-5 text-[0.8rem]"
        >
          Contact us
          <span className="btn-pill-arrow !w-7 !h-7">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        </Link>
      </div>
    </header>
  );
}
