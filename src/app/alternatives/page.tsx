import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AlternativesBrowser } from "@/components/alternatives-browser";
import { SWAPS } from "@/lib/swaps";

export const metadata = {
  title: "All Alternatives · Biqolpo",
  description:
    "Browse every alternative in the Biqolpo index — filter by category, search by name.",
};

export default function AlternativesPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        <section className="py-12 md:py-20 border-b border-ink/10">
          <div className="mx-auto max-w-[1180px] px-5 md:px-10">
            <div className="inline-flex items-center gap-2 pill bg-paper border border-ink/15 mb-5">
              <span className="w-2 h-2 rounded-full bg-signal-deep" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
                The Index · {SWAPS.length} swaps
              </span>
            </div>
            <h1 className="font-display font-light leading-[1.04] tracking-[-0.03em] text-[clamp(2.2rem,6vw,4.8rem)] text-ink">
              The whole{" "}
              <span className="relative inline-block scribble-underline">
                <em className="italic text-signal-deep font-medium">index</em>
                <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                  <path
                    d="M4 10 Q 50 0 100 9 T 196 6"
                    stroke="#079128"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              , one scroll.
            </h1>
            <p className="mt-6 max-w-[58ch] text-[1rem] md:text-[1.1rem] leading-[1.6] text-ink/70">
              Every entry is a swap we&apos;d actually make ourselves — cheaper,
              healthier, more local, more open. Filter by category. Search by
              name.
            </p>
          </div>
        </section>
        <AlternativesBrowser />
      </main>
      <Footer />
    </>
  );
}
