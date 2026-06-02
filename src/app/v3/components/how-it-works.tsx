import { Eye, Search, Handshake } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Awareness",
    body: "We surface the everyday products quietly costing you more, harming your health, or sending money abroad.",
    color: "bg-green-alt",
    accent: "text-signal-deep",
    blob: "bg-yellow-bright",
    tilt: "tilt-l",
    Icon: Eye,
  },
  {
    n: "02",
    title: "Source",
    body: "We trace the better swap — verified pricing, where to buy it in Bangladesh, and who is using it.",
    color: "bg-yellow-light",
    accent: "text-ink",
    blob: "bg-signal-deep",
    tilt: "tilt-r",
    Icon: Search,
  },
  {
    n: "03",
    title: "Produce",
    body: "Over time, we partner with local makers to bring the best swaps directly to you.",
    color: "bg-signal/30",
    accent: "text-signal-deep",
    blob: "bg-signal-deep",
    tilt: "tilt-l",
    Icon: Handshake,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative bg-paper py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-16 right-[5%] w-28 h-28 blob-1 bg-green-alt/50 float-slow" />
        <div className="absolute bottom-16 left-[3%] w-20 h-20 dot-grid text-yellow-bright/60 rounded-full" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 pill bg-green-alt border border-ink mb-5">
            <span className="w-2 h-2 rounded-full bg-signal-deep" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
              How it works
            </span>
          </div>
          <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,5.5vw,4.2rem)] text-ink max-w-[22ch] mx-auto">
            Three steps, then{" "}
            <span className="relative inline-block scribble-underline">
              <em className="italic text-signal-deep font-medium">
                it's yours.
              </em>
              <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                <path
                  d="M4 9 Q 50 1 100 8 T 196 7"
                  stroke="#fbbf24"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((s, i) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.n}
                className={`${s.color} squircle p-7 md:p-9 relative overflow-hidden drop-card ${s.tilt} hover:rotate-0 transition-transform duration-300`}
              >
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 blob-${(i % 3) + 1} ${s.blob} opacity-50`}
                />
                <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-paper text-ink flex items-center justify-center shadow-[3px_3px_0_var(--ink)]">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <div className="relative">
                  <div className={`font-mono text-[0.7rem] uppercase tracking-[0.22em] ${s.accent} mb-3`}>
                    Step {s.n}
                  </div>
                  <div className="font-display text-[2rem] md:text-[2.4rem] leading-[1.05] tracking-[-0.02em] mb-4 text-ink">
                    {s.title}
                  </div>
                  <p className="font-body text-[0.98rem] leading-[1.6] text-ink/75 max-w-[32ch]">
                    {s.body}
                  </p>

                  {i === 2 && (
                    <span className="mt-5 inline-flex pill bg-paper border border-ink font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink">
                      <span className="w-2 h-2 rounded-full bg-signal mr-2" />
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
