import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Newsletter } from "@/components/newsletter";
import { Mail, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About · Biqolpo",
  description:
    "Why Biqolpo exists — a Bangladesh-first index of smarter, cheaper, safer, healthier and more local alternatives.",
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Local first, not local only.",
    body: "If a Bangla-made version stands on its own merit, we lead with it. If an imported one is genuinely better, we say so.",
  },
  {
    n: "02",
    title: "Receipts over rhetoric.",
    body: "Every swap names a real reason — a price, a study, an ingredient list. No vibes-based recommendations.",
  },
  {
    n: "03",
    title: "Cheaper isn't always better.",
    body: "Sometimes the better alternative costs more — and lasts ten years. We index value, not just price.",
  },
  {
    n: "04",
    title: "No paid placements. Ever.",
    body: "Brands cannot pay to enter the index. Sponsorships, if any, get disclosed in a banner you can't miss.",
  },
];

const TIMELINE = [
  { year: "2025", title: "The annoyance", body: "Founder buys ৳3,200 imported honey that tastes like syrup. Asks: what's the local one?" },
  { year: "2026 Q1", title: "First 100 swaps", body: "Spreadsheet becomes a public list. Friends start sending corrections and additions." },
  { year: "2026 Q2", title: "Biqolpo.com launches", body: "8 categories. 32 verified swaps. Newsletter ships weekly picks." },
  { year: "2026+", title: "Community index", body: "Submissions, verification badges, Bangla translation. A public utility." },
];

const STATS = [
  ["Categories", "8"],
  ["Swaps", "32+"],
  ["Issues / yr", "52"],
  ["Paid ads", "0"],
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        {/* Hero */}
        <section className="py-16 md:py-24 border-b border-ink/10">
          <div className="mx-auto max-w-[1180px] px-5 md:px-10">
            <div className="inline-flex items-center gap-2 pill bg-paper border border-ink/15 mb-5">
              <span className="w-2 h-2 rounded-full bg-signal-deep" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
                Colophon
              </span>
            </div>

            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 lg:col-span-8">
                <h1 className="font-display font-light leading-[1.04] tracking-[-0.03em] text-[clamp(2.2rem,6vw,4.8rem)] text-ink">
                  We were tired of buying the{" "}
                  <span className="relative inline-block scribble-underline">
                    <em className="italic text-signal-deep font-medium">
                      wrong
                    </em>
                    <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                      <path
                        d="M4 10 Q 50 0 100 9 T 196 6"
                        stroke="#079128"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </span>{" "}
                  thing.
                </h1>
                <p className="mt-6 text-[1.05rem] md:text-[1.15rem] leading-[1.6] text-ink/75 max-w-[60ch]">
                  Biqolpo (বিকল্প — &ldquo;alternative&rdquo;) is a
                  Bangladesh-first index of swaps someone wishes they had known
                  about a year ago. A cheaper AI. A healthier oil. A jute bag
                  instead of a plastic one. A neighbour&apos;s honey instead of
                  imported sugar water.
                </p>
                <p className="mt-5 text-[1rem] leading-[1.6] text-ink/65 max-w-[60ch]">
                  Not an affiliate site. A magazine of better choices — written
                  by people who live, buy, cook and build here.
                </p>
              </div>

              <aside className="col-span-12 lg:col-span-4">
                <div className="bg-paper border border-ink/15 squircle p-6 drop-card">
                  <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink/55 mb-4">
                    The index · today
                  </div>
                  <ul className="space-y-3">
                    {STATS.map(([k, v]) => (
                      <li
                        key={k}
                        className="flex items-baseline justify-between border-b border-ink/10 pb-2 last:border-0"
                      >
                        <span className="text-ink/60 text-[0.9rem]">{k}</span>
                        <span className="font-display text-[1.65rem] leading-none text-ink">
                          {v}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="bg-signal-deep text-paper py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 md:px-10">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper/60 mb-4">
              Manifesto
            </div>
            <p className="font-display font-light leading-[1.1] tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.8rem)] max-w-[24ch]">
              Every shelf in Bangladesh has a better answer.{" "}
              <span className="text-yellow-bright italic">
                We just have to know its name.
              </span>
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 md:py-24 border-b border-ink/10">
          <div className="mx-auto max-w-[1180px] px-5 md:px-10">
            <div className="grid grid-cols-12 gap-8 mb-10 md:mb-12">
              <div className="col-span-12 lg:col-span-5">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/55 mb-3">
                  How we work
                </div>
                <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(1.85rem,4.5vw,3.2rem)] text-ink max-w-[14ch]">
                  Four <em className="italic text-signal-deep">rules</em> we don&apos;t break.
                </h2>
              </div>
              <p className="col-span-12 lg:col-span-6 lg:col-start-7 text-ink/70 leading-[1.6] max-w-[44ch] self-end">
                Editorial honesty matters more than reach. These keep the index
                trustworthy.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.n}
                  className="bg-paper border border-ink/10 squircle p-6 md:p-7 drop-card hover:border-signal-deep/40 transition-colors"
                >
                  <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-signal-deep mb-3">
                    Rule {p.n}
                  </div>
                  <h3 className="font-display text-[1.35rem] md:text-[1.55rem] leading-[1.1] tracking-[-0.01em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-[1.6] text-ink/70">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 border-b border-ink/10 bg-paper-deep">
          <div className="mx-auto max-w-[1180px] px-5 md:px-10">
            <div className="text-center mb-10 md:mb-14">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/55 mb-3">
                A short history
              </div>
              <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(1.85rem,4.5vw,3.2rem)] text-ink max-w-[18ch] mx-auto">
                From <em className="italic text-signal-deep">spreadsheet</em> to public index.
              </h2>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {TIMELINE.map((t, i) => (
                <li
                  key={t.year}
                  className="bg-paper border border-ink/10 squircle p-5 md:p-6 drop-card"
                >
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink/55">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-3 font-display text-[1.7rem] md:text-[1.9rem] leading-none tracking-[-0.02em] text-signal-deep">
                    {t.year}
                  </div>
                  <h3 className="mt-3 font-display text-[1.1rem] md:text-[1.18rem] leading-[1.25] text-ink">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-[1.55] text-ink/65">
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Submit */}
        <section className="py-16 md:py-24 border-b border-ink/10">
          <div className="mx-auto max-w-[1180px] px-5 md:px-10">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-7">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/55 mb-3">
                  Send us a swap
                </div>
                <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(1.85rem,4.5vw,3.4rem)] text-ink max-w-[16ch]">
                  You know an alternative we don&apos;t.
                </h2>
                <p className="mt-5 max-w-[52ch] text-[1rem] leading-[1.6] text-ink/70">
                  Most best entries came from a reader emailing us a name. A
                  grandmother&apos;s soap maker. A software you migrated to. A
                  village honey co-op. Tell us — we read every reply.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@biqolpo.com?subject=Swap%20submission"
                    className="btn-pill"
                  >
                    <Mail size={15} strokeWidth={2.2} />
                    Email a swap
                    <span className="btn-pill-arrow">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </span>
                  </a>
                  <a href="/alternatives" className="btn-pill-ghost">
                    Browse the index
                  </a>
                </div>
              </div>

              <aside className="col-span-12 lg:col-span-5">
                <div className="bg-paper-deep border border-ink/10 squircle p-6 drop-card">
                  <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink/55 mb-2">
                    Weekly swap
                  </div>
                  <div className="font-display text-[1.5rem] leading-[1.1] text-ink mb-2">
                    One swap, every <em className="italic text-signal-deep">Friday.</em>
                  </div>
                  <p className="text-[0.92rem] text-ink/65 leading-[1.55] mb-4">
                    Short. Researched. No spam.
                  </p>
                  <a href="/#join" className="btn-pill !min-h-[44px] !py-2 !px-5 text-[0.85rem] w-full justify-center">
                    Subscribe
                    <span className="btn-pill-arrow">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
