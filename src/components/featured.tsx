type Pick = {
  tag: string;
  from: string;
  to: string;
  reason: string;
  price: string;
  badge: string;
  meta: string;
};

const PICKS: Pick[] = [
  {
    tag: "§ AI & Software",
    from: "ChatGPT Plus",
    to: "DeepSeek + Gemini",
    reason:
      "Two free frontier models cover ~92% of paid-tier use cases. Use DeepSeek for code, Gemini for long context.",
    price: "৳2,400/mo  →  Free",
    badge: "Editor’s pick",
    meta: "Tested by editors · 11 days ago",
  },
  {
    tag: "§ Food",
    from: "Broiler Chicken",
    to: "Sonali / Deshi",
    reason:
      "Lower antibiotic residue, better flavour, supports small Bangladeshi farms. Modest price premium worth it for weekly use.",
    price: "৳200/kg  →  ৳320/kg",
    badge: "Health pick",
    meta: "Verified source · 4 days ago",
  },
  {
    tag: "§ Tools",
    from: "Canva Pro",
    to: "Penpot",
    reason:
      "Open-source, self-hostable, plays well with Figma exports. The Pro features you actually use are free here.",
    price: "৳1,500/mo  →  Free",
    badge: "Budget pick",
    meta: "Community rated · 2 days ago",
  },
];

export function Featured() {
  return (
    <section id="featured" className="rule-b bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-3 flex items-center gap-2">
              § 03 <span className="text-ink/30">/</span> This week
            </div>
            <h2 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4.5rem)]">
              The alternatives,
              <br />
              <em className="italic">handpicked.</em>
            </h2>
          </div>
          <a href="/alternatives" className="font-mono text-[0.78rem] uppercase tracking-[0.18em] underline underline-offset-8 decoration-1 hover:text-signal-deep transition-colors">
            See all swaps →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {PICKS.map((p, i) => (
            <article key={i} className="feat-card p-6 md:p-8 flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted">{p.tag}</span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] px-2 py-1 bg-signal text-ink border border-ink">
                  {p.badge}
                </span>
              </div>

              <div className="flex-1">
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted mb-1.5">From</div>
                <div className="font-display text-[1.45rem] leading-[1.05] line-through decoration-warn decoration-[2px] text-ink/65">
                  {p.from}
                </div>
                <div className="my-3 flex items-center gap-3">
                  <span className="arrow-glyph italic text-[1.6rem] text-signal-deep">↘</span>
                  <span className="h-px flex-1 bg-ink/30" />
                </div>
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted mb-1.5">To</div>
                <div className="font-display text-[1.85rem] md:text-[2.1rem] leading-[1.02] tracking-[-0.02em]">
                  {p.to}
                </div>
              </div>

              <p className="text-[0.96rem] leading-[1.55] text-ink/80">{p.reason}</p>

              <div className="rule-t pt-4 flex items-center justify-between font-mono text-[0.72rem] uppercase tracking-[0.16em]">
                <span className="text-ink">{p.price}</span>
                <span className="text-muted">{p.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
