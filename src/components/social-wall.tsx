const TILES = [
  {
    platform: "YouTube",
    handle: "@biqolpo",
    href: "https://www.youtube.com/@biqolpo",
    blurb: "Long-form swaps, breakdowns, real-product reviews.",
    cta: "Subscribe",
  },
  {
    platform: "Instagram",
    handle: "@biqolpo.bd",
    href: "https://www.instagram.com/biqolpo.bd",
    blurb: "Reels, carousels, daily alternatives in 30 seconds.",
    cta: "Follow",
  },
  {
    platform: "Facebook",
    handle: "@biqolpo.bd",
    href: "https://www.facebook.com/biqolpo.bd",
    blurb: "Community, comparisons, your-question-answered posts.",
    cta: "Like the page",
  },
];

export function SocialWall() {
  return (
    <section id="join" className="rule-b bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-3 flex items-center gap-2">
              § 06 <span className="text-ink/30">/</span> Join the movement
            </div>
            <h2 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4.5rem)]">
              Where the <em className="italic">swaps</em> live.
            </h2>
          </div>
          <p className="font-body text-ink/75 max-w-[38ch] text-[1rem] md:text-[1.08rem] leading-[1.55]">
            Most days you will find us on social — quick reels, real
            comparisons, and the occasional rant about overpriced imports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {TILES.map((t) => (
            <a
              key={t.platform}
              href={t.href}
              target="_blank"
              rel="noreferrer noopener"
              className="feat-card p-6 md:p-8 flex flex-col gap-6 min-h-[260px]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted">
                  {t.platform}
                </span>
                <span className="dot-sm pulse" />
              </div>
              <div className="font-display text-[2rem] md:text-[2.4rem] leading-[1.02] tracking-[-0.02em]">
                {t.handle}
              </div>
              <p className="text-[0.96rem] leading-[1.55] text-ink/80">
                {t.blurb}
              </p>
              <div className="rule-t pt-4 font-mono text-[0.74rem] uppercase tracking-[0.18em] flex items-center justify-between">
                <span>{t.cta}</span>
                <span className="arrow-glyph italic text-[1.2rem]">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
