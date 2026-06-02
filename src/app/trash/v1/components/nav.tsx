import Link from "next/link";
import { Wordmark } from "./wordmark";

const SOCIAL = [
  { label: "IG", href: "https://www.instagram.com/biqolpo.bd" },
  { label: "FB", href: "https://www.facebook.com/biqolpo.bd" },
  { label: "YT", href: "https://www.youtube.com/@biqolpo" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--paper)]/85 rule-b">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Biqolpo home">
          <Wordmark size="md" />
        </Link>

        <nav className="hidden md:flex items-center gap-9 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-ink">
          <Link href="/alternatives" className="hover:text-signal-deep transition-colors">Index</Link>
          <Link href="/about" className="hover:text-signal-deep transition-colors">About</Link>
          <Link href="/#how" className="hover:text-signal-deep transition-colors">How</Link>
          <Link href="/#join" className="hover:text-signal-deep transition-colors">Join</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            {SOCIAL.map((s, i) => (
              <span key={s.label} className="flex items-center gap-1">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-ink transition-colors"
                >
                  {s.label}
                </a>
                {i < SOCIAL.length - 1 && <span className="text-muted-soft">·</span>}
              </span>
            ))}
          </div>
          <Link href="/#join" className="btn-primary !py-2.5 !px-4 text-[0.78rem] uppercase tracking-[0.16em]">
            Join <span className="dot-sm pulse" />
          </Link>
        </div>
      </div>
    </header>
  );
}
