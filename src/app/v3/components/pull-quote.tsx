import { Quote } from "lucide-react";

export function PullQuote() {
  return (
    <section className="bg-signal-deep text-paper py-16 md:py-24">
      <div className="mx-auto max-w-[860px] px-5 md:px-10 text-center">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-paper/10 border border-paper/20 text-paper mb-6">
          <Quote size={18} strokeWidth={2.2} />
        </span>

        <blockquote className="font-display font-light leading-[1.15] tracking-[-0.02em] text-[clamp(1.6rem,4.5vw,3.4rem)] max-w-[26ch] mx-auto">
          Not every product needs a{" "}
          <em className="italic text-yellow-bright font-medium">better</em>{" "}
          version. But yours{" "}
          <em className="italic text-paper">might.</em>
        </blockquote>

        <div className="mt-7 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper/10 border border-paper/20 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-paper/80">
          Editor&apos;s note · The Alternative Index
        </div>
      </div>
    </section>
  );
}
