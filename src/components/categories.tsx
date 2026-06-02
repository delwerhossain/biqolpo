import Link from "next/link";
import { CATEGORIES, SWAPS } from "@/lib/swaps";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -mx-px -my-px">
          {CATEGORIES.map((c) => {
            const count = SWAPS.filter((s) => s.category === c.id).length;
            return (
              <Link
                key={c.n}
                href="/alternatives"
                className="cat-card aspect-[5/4] p-5 md:p-7 flex flex-col justify-between -ml-px -mt-px group"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.74rem] uppercase tracking-[0.22em]">{c.n}</span>
                  <span className="cat-arrow font-display italic text-[1.6rem] leading-none">→</span>
                </div>
                <div>
                  <div className="font-display text-[1.7rem] md:text-[2rem] leading-[1.02] tracking-[-0.02em]">
                    {c.name}
                  </div>
                  <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] opacity-70">
                    {c.hint}
                  </div>
                  <div className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.18em] flex items-center gap-2 opacity-80">
                    <span className="dot-sm" /> {count} swaps
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
