const TILES = [
  {
    platform: "YouTube",
    handle: "@biqolpo",
    href: "https://www.youtube.com/@biqolpo",
    blurb: "Long-form swaps, breakdowns, real-product reviews.",
    cta: "Subscribe",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    handle: "@biqolpo.bd",
    href: "https://www.instagram.com/biqolpo.bd",
    blurb: "Reels, carousels, daily alternatives in 30 seconds.",
    cta: "Follow",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    platform: "Facebook",
    handle: "@biqolpo.bd",
    href: "https://www.facebook.com/biqolpo.bd",
    blurb: "Community, comparisons, your-question-answered posts.",
    cta: "Like the page",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function SocialWall() {
  return (
    <section id="join" className="bg-paper-deep py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 pill bg-paper border border-ink/15 mb-5">
            <span className="w-2 h-2 rounded-full bg-signal-deep" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
              Join the movement
            </span>
          </div>
          <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,5.5vw,4rem)] text-ink max-w-[22ch] mx-auto">
            Where the{" "}
            <span className="relative inline-block scribble-underline">
              <em className="italic text-signal-deep font-medium">swaps</em>
              <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                <path
                  d="M4 9 Q 50 1 100 8 T 196 7"
                  stroke="#079128"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            <em className="italic">live.</em>
          </h2>
          <p className="mt-5 font-body text-ink/65 max-w-[52ch] mx-auto text-[1rem] leading-[1.55]">
            Quick reels, real comparisons, and the occasional rant about overpriced imports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((t) => (
            <a
              key={t.platform}
              href={t.href}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-paper border border-ink/10 squircle p-6 md:p-7 drop-card hover:border-signal-deep/40 transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-signal/15 flex items-center justify-center text-signal-deep">
                  {t.icon}
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/55 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                  Live
                </span>
              </div>

              <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink/55 mb-2">
                {t.platform}
              </div>
              <div className="font-display text-[1.7rem] md:text-[2rem] leading-[1.02] tracking-[-0.02em] mb-3 text-ink">
                {t.handle}
              </div>
              <p className="font-body text-[0.94rem] leading-[1.55] text-ink/70 mb-5">
                {t.blurb}
              </p>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] font-semibold text-ink">
                  {t.cta}
                </span>
                <span className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-signal-deep transition-colors">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
