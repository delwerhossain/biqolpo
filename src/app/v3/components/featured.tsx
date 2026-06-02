"use client";

import { Award, Heart, Tag } from "lucide-react";

type Pick = {
  tag: string;
  from: string;
  fromImage: string;
  to: string;
  toImage: string;
  reason: string;
  price: string;
  badge: string;
  meta: string;
  color: "purple" | "yellow" | "green";
};

const PICKS: Pick[] = [
  {
    tag: "AI & Software",
    from: "ChatGPT Plus",
    fromImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    to: "DeepSeek + Gemini",
    toImage:
      "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/deepseek-color.png",
    reason:
      "Two free frontier models cover ~92% of paid-tier use cases. Use DeepSeek for code, Gemini for long context.",
    price: "৳2,400/mo  →  Free",
    badge: "Editor's pick",
    meta: "Tested · 11 days ago",
    color: "purple",
  },
  {
    tag: "Food",
    from: "Broiler Chicken",
    fromImage:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&q=80",
    to: "Sonali / Deshi",
    toImage:
      "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=400&q=80",
    reason:
      "Lower antibiotic residue, better flavour, supports small Bangladeshi farms. Modest price premium worth it for weekly use.",
    price: "৳200/kg  →  ৳320/kg",
    badge: "Health pick",
    meta: "Verified · 4 days ago",
    color: "yellow",
  },
  {
    tag: "Tools",
    from: "Canva Pro",
    fromImage: "https://www.canva.com/favicon.ico",
    to: "Penpot",
    toImage: "https://penpot.app/images/favicon.png",
    reason:
      "Open-source, self-hostable, plays well with Figma exports. The Pro features you actually use are free here.",
    price: "৳1,500/mo  →  Free",
    badge: "Budget pick",
    meta: "Community · 2 days ago",
    color: "green",
  },
];

const COLOR: Record<
  Pick["color"],
  { card: string; badge: string; accent: string; blob: string; line: string }
> = {
  purple: {
    card: "bg-green-alt",
    badge: "bg-signal-deep text-paper",
    accent: "text-signal-deep",
    blob: "bg-signal-deep/20",
    line: "#079128",
  },
  yellow: {
    card: "bg-yellow-light",
    badge: "bg-yellow-bright text-ink",
    accent: "text-ink",
    blob: "bg-yellow-bright/40",
    line: "#fbbf24",
  },
  green: {
    card: "bg-signal/20",
    badge: "bg-signal text-ink",
    accent: "text-signal-deep",
    blob: "bg-signal/40",
    line: "#079128",
  },
};

export function Featured() {
  return (
    <section id="featured" className="relative bg-paper py-20 md:py-28 overflow-hidden">
      {/* Floating decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-[6%] w-24 h-24 blob-1 bg-green-alt/60 float-slow" />
        <div className="absolute bottom-20 right-[5%] w-32 h-32 blob-3 bg-yellow-light/70 float-med" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 pill bg-yellow-light border border-ink mb-5">
              <span className="w-2 h-2 rounded-full bg-signal-deep" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
                This week
              </span>
            </div>
            <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,5.5vw,4.2rem)] text-ink">
              The alternatives,{" "}
              <span className="relative inline-block scribble-underline">
                <em className="italic text-signal-deep font-medium">
                  handpicked.
                </em>
                <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                  <path
                    d="M4 9 Q 50 1 100 8 T 196 7"
                    stroke="#079128"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <a
            href="/alternatives"
            className="btn-pill-ghost text-[0.85rem]"
          >
            See all swaps →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {PICKS.map((p, i) => {
            const c = COLOR[p.color];
            const tilt = i % 2 === 0 ? "md:tilt-l" : "md:tilt-r";
            return (
              <article
                key={i}
                className={`${c.card} squircle p-7 md:p-8 relative overflow-hidden drop-card transition-transform duration-300 hover:-translate-y-2 ${tilt} hover:rotate-0`}
              >
                {/* Blob decoration */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 blob-2 ${c.blob}`}
                />
                <div className="absolute top-6 right-6 w-12 h-12 dot-grid text-ink/20 rounded-full" />

                {/* Header — tag + badge */}
                <div className="relative flex items-center justify-between mb-6">
                  <span className={`font-mono text-[0.7rem] uppercase tracking-[0.2em] ${c.accent}`}>
                    {p.tag}
                  </span>
                  <span className={`pill ${c.badge} text-[0.7rem] uppercase tracking-[0.14em] font-mono py-1 px-3 border border-ink/20 inline-flex items-center gap-1.5`}>
                    {p.badge === "Editor's pick" && <Award size={12} strokeWidth={2.5} />}
                    {p.badge === "Health pick" && <Heart size={12} strokeWidth={2.5} />}
                    {p.badge === "Budget pick" && <Tag size={12} strokeWidth={2.5} />}
                    {p.badge}
                  </span>
                </div>

                {/* FROM */}
                <div className="relative mb-3">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink/55 mb-2">
                    From
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-paper border-2 border-ink/20 flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={p.fromImage}
                        alt={p.from}
                        className="w-9 h-9 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div className="font-display text-[1.25rem] leading-tight line-through decoration-2 decoration-warn text-ink/50">
                      {p.from}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="relative my-4 flex items-center justify-center">
                  <svg
                    className="w-20 h-10"
                    viewBox="0 0 100 50"
                    fill="none"
                  >
                    <path
                      d="M 10 10 Q 50 50 90 15"
                      stroke={c.line}
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 82 8 L 90 15 L 84 25"
                      stroke={c.line}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* TO */}
                <div className="relative mb-5">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink/55 mb-2">
                    To
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-paper border-2 border-ink flex items-center justify-center overflow-hidden shrink-0 shadow-[3px_3px_0_var(--ink)]">
                      <img
                        src={p.toImage}
                        alt={p.to}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div className="font-display text-[1.55rem] md:text-[1.75rem] leading-tight tracking-[-0.02em] text-ink">
                      {p.to}
                    </div>
                  </div>
                </div>

                {/* Reason */}
                <p className="relative font-body text-[0.94rem] leading-[1.5] text-ink/75 mb-5">
                  {p.reason}
                </p>

                {/* Footer */}
                <div className="relative pt-4 border-t border-ink/15 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.16em]">
                  <span className="text-ink/70 font-semibold">{p.price}</span>
                  <span className="text-ink/45">{p.meta}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
