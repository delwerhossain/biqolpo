import Link from "next/link";
import { CATEGORIES, SWAPS } from "@/lib/swaps";

const categoryColors = {
  "ai-software": { bg: "bg-purple-light", text: "text-purple-vibrant" },
  "tech-gadgets": { bg: "bg-purple-soft", text: "text-purple-vibrant" },
  "food": { bg: "bg-yellow-light", text: "text-ink" },
  "local": { bg: "bg-green-alt/20", text: "text-green-alt" },
  "healthier": { bg: "bg-pink-soft", text: "text-ink" },
  "budget": { bg: "bg-yellow-light", text: "text-ink" },
  "eco": { bg: "bg-green-alt/20", text: "text-green-alt" },
  "services": { bg: "bg-purple-soft", text: "text-purple-vibrant" },
};

export function Categories() {
  return (
    <section id="categories" className="rule-b">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-3 flex items-center gap-2">
              § 02 <span className="text-ink/30">/</span> Eight ways to swap
            </div>
            <h2 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4.5rem)] max-w-[18ch]">
              Every category <em className="italic">has a</em>
              <br />
              better version.
            </h2>
          </div>
          <p className="font-body text-ink/75 max-w-[36ch] text-[1rem] md:text-[1.08rem] leading-[1.55]">
            We index alternatives the way a magazine indexes stories — by
            section, by tag, by editor&apos;s pick. Pick a section to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {CATEGORIES.map((c) => {
            const count = SWAPS.filter((s) => s.category === c.id).length;
            const colors = categoryColors[c.id as keyof typeof categoryColors] || { bg: "bg-paper-deep", text: "text-ink" };
            return (
              <Link
                key={c.n}
                href="/alternatives"
                className={`${colors.bg} shape-rounded p-6 md:p-8 flex flex-col justify-between transition-transform hover:scale-105 hover:-translate-y-1 duration-300`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`font-mono text-[0.72rem] uppercase tracking-[0.22em] ${colors.text}`}>{c.n}</span>
                  <span className={`${colors.text} font-display italic text-[1.8rem] leading-none transition-transform duration-300 group-hover:translate-x-1`}>→</span>
                </div>
                <div>
                  <div className={`font-display text-[1.8rem] md:text-[2.1rem] leading-[1.05] tracking-[-0.02em] ${colors.text}`}>
                    {c.name}
                  </div>
                  <div className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink/60">
                    {c.hint}
                  </div>
                  <div className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] flex items-center gap-2 text-ink/70">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink/40" /> {count} swaps
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
