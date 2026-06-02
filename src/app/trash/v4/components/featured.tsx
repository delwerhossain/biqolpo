"use client";

import { ArrowRight, Award, Heart, Tag, TrendingUp } from "lucide-react";

type Pick = {
  category: string;
  from: string;
  fromImage: string;
  fromPrice: string;
  to: string;
  toImage: string;
  toPrice: string;
  bestFor: string;
  type: "Free" | "Cheaper" | "Healthier" | "Local";
  badge: "Editor" | "Health" | "Budget";
};

const PICKS: Pick[] = [
  {
    category: "AI & Software",
    from: "ChatGPT Plus",
    fromImage: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    fromPrice: "৳2,400 / mo",
    to: "DeepSeek + Gemini",
    toImage: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/deepseek-color.png",
    toPrice: "Free",
    bestFor: "Free AI use",
    type: "Free",
    badge: "Editor",
  },
  {
    category: "Food",
    from: "Broiler chicken",
    fromImage: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=200&q=80",
    fromPrice: "৳200 / kg",
    to: "Sonali / Deshi",
    toImage: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=200&q=80",
    toPrice: "৳320 / kg",
    bestFor: "Family weekly meal",
    type: "Healthier",
    badge: "Health",
  },
  {
    category: "Tools",
    from: "Canva Pro",
    fromImage: "https://www.canva.com/favicon.ico",
    fromPrice: "৳1,500 / mo",
    to: "Penpot",
    toImage: "https://penpot.app/images/favicon.png",
    toPrice: "Free",
    bestFor: "Open-source design",
    type: "Free",
    badge: "Budget",
  },
  {
    category: "Local",
    from: "Imported honey",
    fromImage: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&q=80",
    fromPrice: "৳1,200 / 500g",
    to: "Sundarban Mou",
    toImage: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&q=80",
    toPrice: "৳800 / 500g",
    bestFor: "Single-origin honey",
    type: "Local",
    badge: "Editor",
  },
  {
    category: "Healthier",
    from: "Soft drinks",
    fromImage: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&q=80",
    fromPrice: "৳35 / can",
    to: "Daab / lebu pani",
    toImage: "https://images.unsplash.com/photo-1610170796253-bc1d20415a02?w=200&q=80",
    toPrice: "৳40 / piece",
    bestFor: "Daily hydration",
    type: "Healthier",
    badge: "Health",
  },
  {
    category: "Budget",
    from: "Netflix Premium",
    fromImage: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    fromPrice: "৳800 / mo",
    to: "MUBI / library",
    toImage: "https://upload.wikimedia.org/wikipedia/commons/5/56/MUBI_logo.png",
    toPrice: "৳150 / mo",
    bestFor: "Curated cinema",
    type: "Cheaper",
    badge: "Budget",
  },
];

const TYPE_STYLE: Record<Pick["type"], string> = {
  Free: "v3-badge-green",
  Cheaper: "v3-badge-yellow",
  Healthier: "v3-badge-green",
  Local: "v3-badge-yellow",
};

const BADGE_ICON: Record<Pick["badge"], typeof Award> = {
  Editor: Award,
  Health: Heart,
  Budget: Tag,
};

export function Featured() {
  return (
    <section id="featured" className="bg-surface-soft py-14 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2 mb-2 inline-flex items-center gap-1.5">
              <TrendingUp size={12} strokeWidth={2.5} className="text-primary" />
              This week
            </div>
            <h2 className="font-display font-light leading-[1.1] tracking-[-0.02em] text-[1.7rem] md:text-[2.4rem] text-text-deep">
              Trending alternatives
            </h2>
          </div>
          <a
            href="/alternatives"
            className="hidden sm:inline-flex items-center gap-1 text-[0.85rem] font-semibold text-primary-dark hover:text-primary"
          >
            See all swaps →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PICKS.map((p, i) => {
            const BadgeIcon = BADGE_ICON[p.badge];
            return (
              <article key={i} className="v3-card p-5 md:p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="v3-badge v3-badge-soft">
                    {p.category}
                  </span>
                  <span className={`v3-badge ${TYPE_STYLE[p.type]} inline-flex items-center gap-1`}>
                    <BadgeIcon size={11} strokeWidth={2.5} />
                    {p.type}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-2 mb-1.5">
                      From
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-cream-deep border border-border-soft flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={p.fromImage}
                          alt=""
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                      <div>
                        <div className="font-display text-[1rem] leading-tight text-text-deep/55 line-through decoration-2 decoration-accent">
                          {p.from}
                        </div>
                        <div className="text-[0.74rem] text-muted-2">{p.fromPrice}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight size={18} strokeWidth={2.2} className="text-primary" />
                  </div>

                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-2 mb-1.5">
                      To
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-primary-tint border border-primary/30 flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={p.toImage}
                          alt=""
                          className="w-7 h-7 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                      <div>
                        <div className="font-display text-[1.18rem] leading-tight text-text-deep">
                          {p.to}
                        </div>
                        <div className="text-[0.78rem] text-primary-dark font-semibold">
                          {p.toPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-border-soft">
                  <div className="text-[0.78rem] text-muted-2 mb-3">
                    Best for:{" "}
                    <span className="text-text-deep font-medium">{p.bestFor}</span>
                  </div>
                  <a
                    href="/alternatives"
                    className="v3-btn-ghost !min-h-[40px] !text-[0.84rem] w-full"
                  >
                    View comparison
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
