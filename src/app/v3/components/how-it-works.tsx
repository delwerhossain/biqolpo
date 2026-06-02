import { Eye, Search, Handshake } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Awareness",
    body: "We surface everyday products quietly costing you more, harming your health, or sending money abroad.",
    Icon: Eye,
  },
  {
    n: "02",
    title: "Source",
    body: "We trace the better swap — verified pricing, where to buy it in Bangladesh, and who is using it.",
    Icon: Search,
  },
  {
    n: "03",
    title: "Produce",
    body: "Over time, we partner with local makers to bring the best swaps directly to you.",
    Icon: Handshake,
    soon: true,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 pill bg-paper border border-ink/15 mb-5">
            <span className="w-2 h-2 rounded-full bg-signal-deep" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
              How it works
            </span>
          </div>
          <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,5.5vw,4rem)] text-ink max-w-[22ch] mx-auto">
            Three steps, then{" "}
            <span className="relative inline-block scribble-underline">
              <em className="italic text-signal-deep font-medium">
                it&apos;s yours.
              </em>
              <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                <path
                  d="M4 9 Q 50 1 100 8 T 196 7"
                  stroke="#079128"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {STEPS.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.n}
                className="bg-paper border border-ink/10 squircle p-6 md:p-7 drop-card hover:border-signal-deep/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-11 h-11 rounded-full bg-signal/15 text-signal-deep flex items-center justify-center">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink/55">
                    Step {s.n}
                  </span>
                </div>

                <div className="font-display text-[1.7rem] md:text-[2rem] leading-[1.05] tracking-[-0.02em] text-ink mb-3">
                  {s.title}
                </div>
                <p className="font-body text-[0.95rem] leading-[1.6] text-ink/70 max-w-[32ch]">
                  {s.body}
                </p>

                {s.soon && (
                  <span className="mt-5 inline-flex pill bg-yellow-light text-ink border border-ink/15 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
                    <span className="w-2 h-2 rounded-full bg-yellow-bright mr-2" />
                    Coming soon
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
