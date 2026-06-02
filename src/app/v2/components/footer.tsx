import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-ink text-paper relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
        <div className="absolute -top-20 -left-10 w-72 h-72 blob-1 bg-purple-vibrant float-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 blob-2 bg-yellow-bright float-med" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 dot-grid text-signal/30 rounded-full" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10 pt-20 pb-10 relative">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <div className="mb-5">
              <Logo size="lg" invert />
            </div>
            <p className="max-w-[42ch] text-paper/70 leading-[1.6] text-[1rem]">
              Bangladesh-focused alternative discovery — helping you find{" "}
              <span className="font-hand text-yellow-bright text-[1.15rem]">
                smarter, cheaper, safer
              </span>{" "}
              options for everyday products, tools and services.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href="https://www.youtube.com/@biqolpo"
                target="_blank"
                rel="noreferrer noopener"
                className="pill bg-paper/10 text-paper border border-paper/20 hover:bg-purple-vibrant hover:border-purple-vibrant transition"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/biqolpo.bd"
                target="_blank"
                rel="noreferrer noopener"
                className="pill bg-paper/10 text-paper border border-paper/20 hover:bg-yellow-bright hover:text-ink hover:border-yellow-bright transition"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/biqolpo.bd"
                target="_blank"
                rel="noreferrer noopener"
                className="pill bg-paper/10 text-paper border border-paper/20 hover:bg-signal hover:text-ink hover:border-signal transition"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper/50 mb-4">
              Index
            </div>
            <ul className="space-y-3 text-[0.98rem]">
              <li><a href="#categories" className="hover:text-signal transition-colors">Categories</a></li>
              <li><a href="#featured" className="hover:text-signal transition-colors">This week</a></li>
              <li><a href="#how" className="hover:text-signal transition-colors">How it works</a></li>
              <li><a href="#join" className="hover:text-signal transition-colors">Community</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper/50 mb-4">
              Site
            </div>
            <ul className="space-y-3 text-[0.98rem]">
              <li><a href="/" className="hover:text-signal transition-colors">v1 (minimal)</a></li>
              <li><a href="/v2" className="hover:text-signal transition-colors">v2 (current)</a></li>
              <li><a href="/about" className="hover:text-signal transition-colors">About</a></li>
              <li><a href="/alternatives" className="hover:text-signal transition-colors">All swaps</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper/50 mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-[0.98rem]">
              <li><a href="mailto:hello@biqolpo.com" className="hover:text-signal">hello@biqolpo.com</a></li>
              <li className="text-paper/55">Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-20 border-t border-paper/15 pt-10 pb-4 overflow-hidden text-center">
          <div className="font-display italic text-[clamp(4rem,18vw,16rem)] leading-[0.85] tracking-[-0.04em] text-paper/15 select-none">
            biqolpo.
          </div>
        </div>

        <div className="border-t border-paper/15 pt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper/50">
          <span>© 2026 Biqolpo · The Alternative Index</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal" />
            Made in Bangladesh
          </span>
        </div>
      </div>
    </footer>
  );
}
