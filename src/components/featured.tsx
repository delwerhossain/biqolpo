type Pick = {
  tag: string;
  from: string;
  to: string;
  reason: string;
  price: string;
  badge: string;
  meta: string;
  color: "purple" | "yellow" | "green";
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
    color: "purple",
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
    color: "yellow",
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
    color: "green",
  },
];

const colorMap = {
  purple: {
    bg: "bg-purple-light",
    text: "text-purple-vibrant",
    badge: "bg-purple-vibrant text-paper",
  },
  yellow: {
    bg: "bg-yellow-light",
    text: "text-ink",
    badge: "bg-yellow-bright text-ink",
  },
  green: {
    bg: "bg-green-alt/20",
    text: "text-green-alt",
    badge: "bg-signal text-ink",
  },
};

export function Featured() {
  return (
    <section id="featured" className="rule-b bg-paper relative py-16 md:py-24">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-5% w-28 h-28 shape-blob bg-purple-soft/30 -z-10 blur-3xl" />
      <div className="absolute bottom-10 right-10% w-32 h-32 shape-blob bg-yellow-light/40 -z-10 blur-2xl" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-10 relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
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
          {PICKS.map((p, i) => {
            const color = colorMap[p.color];
            return (
              <article
                key={i}
                className={`${color.bg} shape-rounded p-7 md:p-9 flex flex-col gap-6 transition-transform hover:scale-105 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between">
                  <span className={`font-mono text-[0.72rem] uppercase tracking-[0.2em] ${color.text}`}>
                    {p.tag}
                  </span>
                  <span className={`font-mono text-[0.68rem] uppercase tracking-[0.16em] px-3 py-1.5 ${color.badge} rounded-full border border-current`}>
                    {p.badge}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-ink/60 mb-2">
                    From
                  </div>
                  <div className="font-display text-[1.35rem] leading-[1.05] line-through decoration-warn decoration-[2px] text-ink/50">
                    {p.from}
                  </div>
                  <div className="my-4 flex items-center gap-3">
                    <span className="arrow-glyph italic text-[1.8rem] text-ink/40">↘</span>
                  </div>
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-ink/60 mb-2">
                    To
                  </div>
                  <div className="font-display text-[1.75rem] md:text-[2rem] leading-[1.05] tracking-[-0.02em] text-ink">
                    {p.to}
                  </div>
                </div>

                <p className="text-[0.95rem] leading-[1.5] text-ink/75">{p.reason}</p>

                <div className="pt-4 border-t border-ink/10 flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.16em]">
                  <span className="text-ink/70">{p.price}</span>
                  <span className="text-ink/50">{p.meta}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
