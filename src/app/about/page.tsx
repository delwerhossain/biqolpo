import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Newsletter } from "@/components/newsletter";

export const metadata = {
  title: "About · Biqolpo",
  description:
    "Why Biqolpo exists — a Bangladesh-first index of smarter, cheaper, safer, healthier and more local alternatives.",
};

const PRINCIPLES = [
  {
    n: "i",
    title: "Local first, not local only.",
    body: "If a Bangla-made version stands on its own merit, we lead with it. If an imported one is genuinely better, we say so.",
  },
  {
    n: "ii",
    title: "Receipts over rhetoric.",
    body: "Every swap names a real reason — a price, a study, an ingredient list, a repair story. No vibes-based recommendations.",
  },
  {
    n: "iii",
    title: "Cheaper isn't always better.",
    body: "Sometimes the better alternative costs more — and lasts ten years. We index value, not just price.",
  },
  {
    n: "iv",
    title: "No paid placements. Ever.",
    body: "Brands cannot pay to enter the index. If we ever take sponsorship, it will be disclosed in a banner you cannot miss.",
  },
];

const TIMELINE = [
  { year: "2025", title: "The annoyance", body: "Founder buys a ৳3,200 imported honey that tastes like syrup. Asks: what is the local one I should have bought?" },
  { year: "2026 · Q1", title: "First 100 swaps", body: "Spreadsheet becomes a public list. Friends start sending corrections and additions." },
  { year: "2026 · Q2", title: "Biqolpo.com launches", body: "8 categories. 200+ swaps. Newsletter starts shipping weekly picks." },
  { year: "2026+", title: "Community index", body: "Submissions, verification badges, Bangla translation. A real public utility." },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Editorial hero */}
        <section className="rule-b">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24">
            <div className="flex items-center justify-between font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-10 md:mb-14">
              <span className="flex items-center gap-2"><span className="dot-sm" /> Colophon</span>
              <span>An editor&apos;s note · 2026</span>
            </div>

            <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-8 items-start">
              <h1 className="col-span-12 lg:col-span-9 font-display font-light leading-[0.94] tracking-[-0.035em] text-[clamp(2.5rem,7.6vw,7.2rem)] fade-up">
                We were tired of buying the <em className="italic">wrong</em> thing.
              </h1>

              <div className="col-span-12 lg:col-span-9 mt-2 lg:mt-4 fade-up" style={{ animationDelay: "0.15s" }}>
                <p className="text-[1.1rem] md:text-[1.28rem] leading-[1.55] text-ink/85 max-w-[58ch]">
                  Biqolpo (বিকল্প — &ldquo;alternative&rdquo;) is a Bangladesh-first
                  index of swaps that someone, somewhere, wishes they had
                  known about a year ago. A cheaper AI. A healthier oil. A
                  jute bag instead of a plastic one. A neighbour&apos;s honey
                  instead of an imported jar of sugar water.
                </p>
                <p className="mt-5 text-[1.05rem] md:text-[1.15rem] leading-[1.55] text-ink/75 max-w-[58ch]">
                  We are not an affiliate site. We are a magazine of better
                  choices — written by people who live here, buy here, cook
                  here, build here.
                </p>
              </div>

              <aside className="col-span-12 lg:col-span-3 lg:col-start-10 lg:row-start-2 mt-4 lg:mt-2 fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="border border-ink p-5 md:p-6">
                  <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted mb-3">
                    The index · today
                  </div>
                  <ul className="space-y-3 font-display">
                    <li className="flex items-baseline justify-between border-b border-ink/15 pb-2">
                      <span className="text-muted text-[0.85rem]">Categories</span>
                      <span className="text-[1.6rem] leading-none">8</span>
                    </li>
                    <li className="flex items-baseline justify-between border-b border-ink/15 pb-2">
                      <span className="text-muted text-[0.85rem]">Swaps</span>
                      <span className="text-[1.6rem] leading-none">240+</span>
                    </li>
                    <li className="flex items-baseline justify-between border-b border-ink/15 pb-2">
                      <span className="text-muted text-[0.85rem]">Issues / yr</span>
                      <span className="text-[1.6rem] leading-none">52</span>
                    </li>
                    <li className="flex items-baseline justify-between">
                      <span className="text-muted text-[0.85rem]">Paid ads</span>
                      <span className="text-[1.6rem] leading-none">0</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Big pull quote */}
        <section className="bg-ink text-paper rule-b">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-32">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-soft mb-5">
              § Manifesto
            </div>
            <p className="font-display italic font-light leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,5.6vw,4.6rem)] max-w-[24ch]">
              Every shelf in Bangladesh has a better answer.
              <span className="text-signal"> We just have to know its name.</span>
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="rule-b">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-4">
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-3">
                  § 02 — How we work
                </div>
                <h2 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.6vw,3.6rem)] max-w-[14ch]">
                  Four <em className="italic">rules</em> we don&apos;t break.
                </h2>
                <p className="mt-5 text-ink/75 leading-[1.55] max-w-[36ch]">
                  Editorial honesty matters more than reach. These are the
                  guardrails that keep the index trustworthy.
                </p>
              </div>

              <ol className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink border border-ink">
                {PRINCIPLES.map((p) => (
                  <li key={p.n} className="bg-paper p-6 md:p-8">
                    <div className="font-display italic text-signal-deep text-[2rem] leading-none mb-3">
                      {p.n}.
                    </div>
                    <h3 className="font-display text-[1.35rem] md:text-[1.55rem] leading-[1.1] tracking-[-0.01em]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-[1.55] text-ink/75">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="rule-b">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-3">
              § 03 — A short history
            </div>
            <h2 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,4.6vw,3.6rem)] mb-10 md:mb-14 max-w-[18ch]">
              From <em className="italic">spreadsheet</em> to public index.
            </h2>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink border border-ink">
              {TIMELINE.map((t, i) => (
                <li key={t.year} className="bg-paper p-6 md:p-7 relative">
                  <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-4 font-display text-[1.85rem] md:text-[2.2rem] leading-none tracking-[-0.02em]">
                    {t.year}
                  </div>
                  <h3 className="mt-3 font-display text-[1.18rem] md:text-[1.28rem] leading-[1.2]">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-[1.5] text-ink/75">
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Submit / get in touch */}
        <section className="rule-b">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 lg:col-span-7">
                <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-3">
                  § 04 — Send us a swap
                </div>
                <h2 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5vw,4rem)] max-w-[16ch]">
                  You know an alternative we don&apos;t.
                </h2>
                <p className="mt-5 max-w-[52ch] text-[1.05rem] leading-[1.55] text-ink/80">
                  Most of the best entries in the index came from one
                  reader emailing us a name. A grandmother&apos;s soap maker. A
                  software your team migrated to. A village honey co-op.
                  Tell us — we read every reply.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="mailto:hello@biqolpo.com?subject=Swap%20submission" className="btn-primary">
                    Email a swap <span className="arrow-glyph">→</span>
                  </a>
                  <a href="/alternatives" className="btn-ghost">
                    Browse the index
                  </a>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <Newsletter compact />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
