export function PullQuote() {
  return (
    <section className="rule-b bg-ink text-paper overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-32 grid grid-cols-12 gap-6">
        <div className="hidden md:block col-span-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/50 pt-6">
          § 04 <br /> Manifesto
        </div>
        <blockquote className="col-span-12 md:col-span-10 font-display font-light italic text-[clamp(2rem,6vw,5.6rem)] leading-[1.05] tracking-[-0.025em]">
          <span className="text-signal not-italic font-display">&ldquo;</span>
          Better is not always more.
          <br />
          Sometimes better is <em className="not-italic font-display text-signal">local</em>.
          <br />
          Sometimes <em className="not-italic font-display text-signal">free</em>.
          <br />
          Sometimes the one your neighbour
          <br /> already <em>quietly</em> trusted.
          <span className="text-signal not-italic font-display">&rdquo;</span>
        </blockquote>
        <div className="col-span-12 md:col-start-3 md:col-span-10 font-mono text-[0.74rem] uppercase tracking-[0.22em] text-paper/60 mt-4 flex items-center gap-3">
          <span className="dot-sm" /> Editor&apos;s note · The Alternative Index
        </div>
      </div>
    </section>
  );
}
