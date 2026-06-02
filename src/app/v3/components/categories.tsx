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

type CatStyle = {
  bg: string;
  text: string;
  blob: string;
  Icon: typeof Sparkles;
  tilt: string;
};

const STYLES: Record<string, CatStyle> = {
  "ai-software": {
    bg: "bg-signal-deep",
    text: "text-paper",
    blob: "bg-yellow-bright",
    Icon: Sparkles,
    tilt: "tilt-l",
  },
  "tech-gadgets": {
    bg: "bg-yellow-light",
    text: "text-ink",
    blob: "bg-signal-deep",
    Icon: Smartphone,
    tilt: "tilt-r",
  },
  food: {
    bg: "bg-signal/30",
    text: "text-ink",
    blob: "bg-yellow-bright",
    Icon: Wheat,
    tilt: "tilt-l",
  },
  local: {
    bg: "bg-paper",
    text: "text-ink",
    blob: "bg-signal/40",
    Icon: Hammer,
    tilt: "tilt-r",
  },
  healthier: {
    bg: "bg-yellow-light",
    text: "text-ink",
    blob: "bg-signal-deep",
    Icon: Leaf,
    tilt: "tilt-l",
  },
  budget: {
    bg: "bg-yellow-bright",
    text: "text-ink",
    blob: "bg-ink",
    Icon: Wallet,
    tilt: "tilt-r",
  },
  eco: {
    bg: "bg-signal/20",
    text: "text-ink",
    blob: "bg-yellow-bright",
    Icon: Recycle,
    tilt: "tilt-l",
  },
  services: {
    bg: "bg-ink",
    text: "text-paper",
    blob: "bg-signal",
    Icon: Wrench,
    tilt: "tilt-r",
  },
};

export function Categories() {
  return (
    <section id="categories" className="bg-paper-deep py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 pill bg-paper border border-ink mb-6">
            <span className="w-2 h-2 rounded-full bg-signal" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
              Eight categories
            </span>
          </div>
          <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,5.5vw,4.2rem)] text-ink max-w-[20ch] mx-auto">
            Every category has a{" "}
            <span className="relative inline-block scribble-underline">
              <em className="italic text-signal-deep font-medium">
                better
              </em>
              <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                <path
                  d="M4 9 Q 50 1 100 8 T 196 7"
                  stroke="#fbbf24"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            version.
          </h2>
          <p className="mt-6 font-body text-ink/70 max-w-[52ch] mx-auto text-[1.02rem] leading-[1.55]">
            From AI tools to broiler chicken — every section indexed,
            verified, and Bangladesh-first.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((c, i) => {
            const count = SWAPS.filter((s) => s.category === c.id).length;
            const s = STYLES[c.id];
            const Icon = s.Icon;
            return (
              <Link
                key={c.n}
                href="/alternatives"
                className={`${s.bg} ${s.text} squircle p-6 md:p-7 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 drop-card border border-ink/8`}
              >
                <div className="flex items-center justify-between mb-10 md:mb-14">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] opacity-70">
                    {c.n}
                  </span>
                  <span className={`w-11 h-11 rounded-full bg-paper text-ink flex items-center justify-center shadow-[3px_3px_0_var(--ink)]`}>
                    <Icon size={20} strokeWidth={2} />
                  </span>
                </div>

                <div>
                  <div className="font-display text-[1.55rem] md:text-[1.8rem] leading-[1.05] tracking-[-0.02em] mb-2">
                    {c.name}
                  </div>
                  <div className="font-hand text-[1.15rem] opacity-80 mb-5">
                    {c.hint}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-current/20">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                      {count} swaps
                    </span>
                    <span className="w-7 h-7 rounded-full bg-paper text-ink flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
