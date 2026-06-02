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

type Variant = "default" | "feature" | "dark";

const STYLES: Record<
  string,
  { variant: Variant; Icon: typeof Sparkles }
> = {
  "ai-software": { variant: "feature", Icon: Sparkles },
  "tech-gadgets": { variant: "default", Icon: Smartphone },
  food: { variant: "default", Icon: Wheat },
  local: { variant: "default", Icon: Hammer },
  healthier: { variant: "default", Icon: Leaf },
  budget: { variant: "default", Icon: Wallet },
  eco: { variant: "default", Icon: Recycle },
  services: { variant: "dark", Icon: Wrench },
};

const CARD: Record<
  Variant,
  {
    card: string;
    title: string;
    hint: string;
    iconWrap: string;
    iconColor: string;
    divider: string;
    metaText: string;
    arrow: string;
  }
> = {
  default: {
    card: "bg-paper border border-ink/10 hover:border-signal-deep/40",
    title: "text-ink",
    hint: "text-ink/55",
    iconWrap: "bg-signal/15",
    iconColor: "text-signal-deep",
    divider: "border-ink/10",
    metaText: "text-ink/55",
    arrow: "bg-paper-deep text-ink/60 group-hover:bg-signal-deep group-hover:text-paper",
  },
  feature: {
    card: "bg-signal-deep border border-signal-deep hover:bg-ink hover:border-ink",
    title: "text-paper",
    hint: "text-paper/70",
    iconWrap: "bg-paper/15",
    iconColor: "text-paper",
    divider: "border-paper/15",
    metaText: "text-paper/65",
    arrow: "bg-paper text-ink",
  },
  dark: {
    card: "bg-ink border border-ink hover:bg-signal-deep hover:border-signal-deep",
    title: "text-paper",
    hint: "text-paper/65",
    iconWrap: "bg-signal/20",
    iconColor: "text-signal",
    divider: "border-paper/15",
    metaText: "text-paper/55",
    arrow: "bg-signal text-ink",
  },
};

export function Categories() {
  return (
    <section
      id="categories"
      className="bg-paper-deep py-20 md:py-28 border-t border-b border-ink/5"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper border border-ink/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-deep" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/70">
              Eight categories
            </span>
          </div>
          <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,5vw,3.8rem)] text-ink max-w-[22ch] mx-auto">
            Every category has a{" "}
            <span className="relative inline-block">
              <em className="italic text-signal-deep font-medium">better</em>
              <svg
                viewBox="0 0 200 16"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 w-full h-3"
              >
                <path
                  d="M4 9 Q 50 1 100 8 T 196 7"
                  stroke="#079128"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            version.
          </h2>
          <p className="mt-6 font-body text-ink/60 max-w-[52ch] mx-auto text-[1rem] leading-[1.55]">
            From AI tools to broiler chicken — verified Bangladesh-first
            alternatives, indexed by section.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {CATEGORIES.map((c) => {
            const count = SWAPS.filter((s) => s.category === c.id).length;
            const s = STYLES[c.id];
            const v = CARD[s.variant];
            const Icon = s.Icon;
            return (
              <Link
                key={c.n}
                href="/alternatives"
                className={`group rounded-2xl p-5 md:p-6 flex flex-col transition-all duration-200 hover:-translate-y-1 ${v.card}`}
              >
                <div className="flex items-center justify-between mb-8 md:mb-10">
                  <span
                    className={`w-11 h-11 rounded-full flex items-center justify-center ${v.iconWrap} ${v.iconColor}`}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span
                    className={`font-mono text-[0.65rem] uppercase tracking-[0.2em] ${v.metaText}`}
                  >
                    {c.n}
                  </span>
                </div>

                <div className={`font-display text-[1.4rem] md:text-[1.6rem] leading-[1.05] tracking-[-0.02em] mb-1.5 ${v.title}`}>
                  {c.name}
                </div>
                <div className={`text-[0.88rem] leading-[1.45] ${v.hint} line-clamp-2`}>
                  {c.hint}
                </div>

                <div
                  className={`mt-5 pt-4 border-t ${v.divider} flex items-center justify-between`}
                >
                  <span
                    className={`font-mono text-[0.7rem] uppercase tracking-[0.16em] ${v.metaText}`}
                  >
                    {count} swaps
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${v.arrow}`}
                  >
                    <ArrowUpRight size={14} strokeWidth={2.5} />
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
