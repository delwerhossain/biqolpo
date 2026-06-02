import { Wordmark } from "./wordmark";

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <Wordmark size="lg" />
            <p className="mt-5 max-w-[40ch] text-ink/75 leading-[1.55]">
              Biqolpo is a Bangladesh-focused alternative discovery platform —
              helping you find smarter, cheaper, safer and local options for
              everyday products, tools and services.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-4">Index</div>
            <ul className="space-y-2.5 text-[0.96rem]">
              <li><a href="#categories" className="hover:text-signal-deep transition-colors">Categories</a></li>
              <li><a href="#featured" className="hover:text-signal-deep transition-colors">This week</a></li>
              <li><a href="#how" className="hover:text-signal-deep transition-colors">How we work</a></li>
              <li><a href="#join" className="hover:text-signal-deep transition-colors">Community</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-4">Social</div>
            <ul className="space-y-2.5 text-[0.96rem]">
              <li><a href="https://www.youtube.com/@biqolpo" target="_blank" rel="noreferrer noopener" className="hover:text-signal-deep">YouTube</a></li>
              <li><a href="https://www.instagram.com/biqolpo.bd" target="_blank" rel="noreferrer noopener" className="hover:text-signal-deep">Instagram</a></li>
              <li><a href="https://www.facebook.com/biqolpo.bd" target="_blank" rel="noreferrer noopener" className="hover:text-signal-deep">Facebook</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-4">Contact</div>
            <ul className="space-y-2.5 text-[0.96rem]">
              <li><a href="mailto:hello@biqolpo.com" className="hover:text-signal-deep">hello@biqolpo.com</a></li>
              <li className="text-muted">Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Giant footer wordmark */}
        <div className="mt-16 md:mt-24 rule-t pt-8 pb-2 overflow-hidden">
          <div className="text-center select-none">
            <div className="leading-none">
              <Wordmark size="display" />
            </div>
          </div>
        </div>

        <div className="rule-t pt-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted">
          <span>© 2026 Biqolpo · The Alternative Index</span>
          <span className="flex items-center gap-2">
            <span className="dot-sm" /> Made in Bangladesh
          </span>
        </div>
      </div>
    </footer>
  );
}
