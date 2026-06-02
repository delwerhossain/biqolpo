import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-dark-deep text-cream/85">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10 pt-14 md:pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-5">
            <Logo size="lg" invert />
            <p className="mt-5 max-w-[40ch] text-cream/65 leading-[1.6] text-[0.95rem]">
              Bangladesh-focused alternative discovery. Find cheaper, safer,
              healthier, local and free options for everyday products, tools
              and services.
            </p>
            <p className="font-bn mt-3 max-w-[40ch] text-cream/55 leading-[1.6] text-[0.9rem]">
              বাংলাদেশের প্রথম alternative discovery platform।
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cream/45 mb-3">
              Index
            </div>
            <ul className="space-y-2 text-[0.92rem]">
              <li><a href="#categories" className="hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#featured" className="hover:text-primary transition-colors">Trending</a></li>
              <li><a href="#how" className="hover:text-primary transition-colors">How it works</a></li>
              <li><a href="#submit" className="hover:text-primary transition-colors">Submit swap</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cream/45 mb-3">
              Site
            </div>
            <ul className="space-y-2 text-[0.92rem]">
              <li><a href="/" className="hover:text-primary transition-colors">v1 (minimal)</a></li>
              <li><a href="/v2" className="hover:text-primary transition-colors">v2 (purple)</a></li>
              <li><a href="/v3" className="hover:text-primary transition-colors">v3 (editorial)</a></li>
              <li><a href="/v4" className="hover:text-primary transition-colors">v4 (current)</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cream/45 mb-3">
              Contact
            </div>
            <ul className="space-y-2 text-[0.92rem]">
              <li><a href="mailto:hello@biqolpo.com" className="hover:text-primary">hello@biqolpo.com</a></li>
              <li className="text-cream/55">Dhaka, Bangladesh</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href="https://www.youtube.com/@biqolpo" target="_blank" rel="noreferrer noopener" className="v3-badge !bg-cream/10 !text-cream hover:!bg-primary hover:!text-text-deep transition">YT</a>
              <a href="https://www.instagram.com/biqolpo.bd" target="_blank" rel="noreferrer noopener" className="v3-badge !bg-cream/10 !text-cream hover:!bg-accent hover:!text-text-deep transition">IG</a>
              <a href="https://www.facebook.com/biqolpo.bd" target="_blank" rel="noreferrer noopener" className="v3-badge !bg-cream/10 !text-cream hover:!bg-primary hover:!text-text-deep transition">FB</a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/15 pt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cream/45">
          <span>© 2026 Biqolpo · The Alternative Index</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Made in Bangladesh
          </span>
        </div>
      </div>
    </footer>
  );
}
