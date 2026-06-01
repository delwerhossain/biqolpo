const STEPS = [
  {
    n: "I.",
    title: "Awareness",
    body: "We surface the everyday products and tools quietly costing you more, harming your health, or sending your money abroad.",
  },
  {
    n: "II.",
    title: "Source",
    body: "We trace the better swap — verified pricing, where to buy it in Bangladesh, and who is actually using it.",
  },
  {
    n: "III.",
    title: "Produce",
    body: "Over time, we partner with local makers and producers to bring the best swaps directly to you.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="rule-b">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-3 flex items-center gap-2">
            § 05 <span className="text-ink/30">/</span> How we work
          </div>
          <h2 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4.5rem)] max-w-[20ch]">
            Three steps, then <em className="italic">it&apos;s yours.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`p-6 md:p-9 border border-ink -ml-px -mt-px relative ${
                i === 1 ? "md:bg-paper-deep" : ""
              }`}
            >
              <div className="font-display italic text-signal-deep text-[3.2rem] md:text-[4.5rem] leading-[0.9] mb-6">
                {s.n}
              </div>
              <div className="font-display text-[1.6rem] md:text-[1.9rem] leading-[1.05] tracking-[-0.02em] mb-4">
                {s.title}
              </div>
              <p className="text-[0.98rem] leading-[1.55] text-ink/80 max-w-[34ch]">
                {s.body}
              </p>
              {i === 2 && (
                <span className="absolute top-6 right-6 font-mono text-[0.66rem] uppercase tracking-[0.18em] px-2 py-1 border border-ink bg-signal text-ink">
                  Coming
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
