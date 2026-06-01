import Link from "next/link";
import { Wordmark } from "./wordmark";

const STATS = [
  { k: "240+", v: "Swaps indexed" },
  { k: "08", v: "Categories" },
  { k: "52/yr", v: "Weekly issues" },
  { k: "00", v: "Paid placements" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rule-b">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-[5%] w-32 h-32 shape-blob bg-purple-light/40 -z-10 blur-3xl" />
      <div className="absolute top-20 right-[2%] w-24 h-24 shape-circle bg-yellow-bright/30 -z-10" />
      <div className="absolute bottom-1/3 left-[5%] w-40 h-40 shape-blob bg-purple-soft/50 -z-10 blur-2xl" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-12 md:pt-20 pb-14 md:pb-20 relative z-10">
        {/* Masthead eyebrow */}
        <div className="flex items-center justify-between font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-10 md:mb-16">
          <span className="flex items-center gap-2">
            <span className="dot-sm" /> Vol. 01 · Issue 01
          </span>
          <span className="hidden sm:inline">Dhaka · Est. 2026</span>
          <span>The Alternative Index</span>
        </div>

        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 items-end">
          <h1 className="col-span-12 lg:col-span-10 font-display font-light leading-[0.92] tracking-[-0.035em] text-[clamp(2.8rem,9.2vw,9.5rem)] fade-up">
            <span className="block">Find the</span>
            <span className="block">
              <em className="italic font-light">better</em>{" "}
              <span className="relative inline-block">
                alternative
                <span className="absolute -right-3 md:-right-6 top-0 md:top-2">
                  <span className="dot-sm pulse" />
                </span>
              </span>
            </span>
            <span className="block text-muted">— for Bangladesh.</span>
          </h1>

          <div className="col-span-12 lg:col-span-8 lg:col-start-1 mt-4 lg:mt-10 fade-up" style={{ animationDelay: "0.15s" }}>
            <p className="text-[1.05rem] md:text-[1.22rem] leading-[1.5] text-ink/85 max-w-[44ch]">
              A neutral, Bangladesh-first index of smarter swaps —
              cheaper, safer, healthier, local, free. From AI tools to
              broiler chicken, from imports to the maker down your street.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:-mt-2 fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-3">
              § 01 — Mission
            </div>
            <div className="font-display italic text-[1.4rem] leading-[1.25] text-ink">
              &ldquo;Not every product needs a better version.
              <br />
              <span className="text-signal-deep">But yours might.</span>&rdquo;
            </div>
          </div>

          <div className="col-span-12 mt-8 md:mt-12 flex flex-wrap items-center gap-3 fade-up" style={{ animationDelay: "0.45s" }}>
            <Link href="/alternatives" className="btn-primary">
              Browse the index
              <span className="arrow-glyph">→</span>
            </Link>
            <Link href="/about" className="btn-ghost">
              How we work
            </Link>
            <span className="ml-auto hidden md:flex font-mono text-[0.74rem] uppercase tracking-[0.18em] text-muted items-center gap-2">
              Scroll <span>↓</span>
            </span>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink border border-ink fade-up" style={{ animationDelay: "0.6s" }}>
          {STATS.map((s) => (
            <div key={s.v} className="bg-paper p-5 md:p-7">
              <div className="font-display text-[2rem] md:text-[2.6rem] leading-none tracking-[-0.02em]">
                {s.k}
              </div>
              <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none absolute -right-32 md:-right-20 -bottom-24 md:-bottom-32 opacity-[0.06] select-none">
        <div className="leading-none">
          <Wordmark size="display" />
        </div>
      </div>
    </section>
  );
}
