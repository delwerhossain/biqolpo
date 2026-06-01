import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AlternativesBrowser } from "@/components/alternatives-browser";
import { SWAPS } from "@/lib/swaps";

export const metadata = {
  title: "All Alternatives · Biqolpo",
  description:
    "Browse every alternative swap in the Biqolpo index — filter by category, search by name, find your better version.",
};

export default function AlternativesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="rule-b">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-12 md:pt-20 pb-10 md:pb-14">
            <div className="flex items-center justify-between font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-8 md:mb-12">
              <span className="flex items-center gap-2">
                <span className="dot-sm" /> The Index
              </span>
              <span>{SWAPS.length} swaps · updated weekly</span>
            </div>
            <h1 className="font-display font-light leading-[0.95] tracking-[-0.035em] text-[clamp(2.6rem,8vw,7.5rem)] fade-up">
              The whole <em className="italic">index</em>,<br />
              <span className="text-muted">one scroll.</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-[52ch] text-[1.05rem] md:text-[1.18rem] leading-[1.55] text-ink/85 fade-up" style={{ animationDelay: "0.15s" }}>
              Every entry is a swap we&apos;d actually make ourselves — cheaper,
              healthier, more local, more open. Filter by category. Search by
              name. Pick the swap that fits this week.
            </p>
          </div>
        </section>
        <AlternativesBrowser />
      </main>
      <Footer />
    </>
  );
}
