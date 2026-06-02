import Link from "next/link";
import {
  Sparkles,
  Smartphone,
  Wheat,
  Hammer,
  Leaf,
  Wallet,
  Recycle,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { CATEGORIES, SWAPS } from "@/lib/swaps";

const ICONS = {
  "ai-software": Sparkles,
  "tech-gadgets": Smartphone,
  food: Wheat,
  local: Hammer,
  healthier: Leaf,
  budget: Wallet,
  eco: Recycle,
  services: Wrench,
} as const;

export function Categories() {
  return (
    <section id="categories" className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2 mb-2">
              Browse by category
            </div>
            <h2 className="font-display font-light leading-[1.1] tracking-[-0.02em] text-[1.7rem] md:text-[2.4rem] text-text-deep">
              Popular categories
            </h2>
          </div>
          <Link
            href="/alternatives"
            className="hidden sm:inline-flex items-center gap-1 text-[0.85rem] font-semibold text-primary-dark hover:text-primary"
          >
            See all 8 →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {CATEGORIES.map((c) => {
            const count = SWAPS.filter((s) => s.category === c.id).length;
            const Icon = ICONS[c.id as keyof typeof ICONS];
            return (
              <Link
                key={c.n}
                href="/alternatives"
                className="v3-card group p-4 md:p-5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary-tint text-primary-dark flex items-center justify-center">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.2}
                    className="text-muted-2 group-hover:text-primary-dark transition-colors"
                  />
                </div>

                <div className="font-display text-[1.05rem] md:text-[1.2rem] leading-tight tracking-[-0.01em] text-text-deep">
                  {c.name}
                </div>
                <div className="mt-1 text-[0.82rem] text-muted-2 line-clamp-1">
                  {c.hint}
                </div>

                <div className="mt-4 pt-3 border-t border-border-soft flex items-center justify-between">
                  <span className="text-[0.72rem] text-muted-2">
                    {count} swaps
                  </span>
                  <span className="v3-badge v3-badge-soft !text-[0.65rem] !py-0.5 !px-2">
                    {c.n}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
