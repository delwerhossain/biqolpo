import { Eye, Search, Handshake } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Awareness",
    body: "We surface products quietly costing you more, harming your health, or sending money abroad.",
    Icon: Eye,
  },
  {
    n: "02",
    title: "Source",
    body: "We verify the better swap — pricing, where to buy in Bangladesh, and who's using it.",
    Icon: Search,
  },
  {
    n: "03",
    title: "Produce",
    body: "Over time we partner with local makers to bring the best swaps directly to you.",
    Icon: Handshake,
    soon: true,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2 mb-2">
            How Biqolpo works
          </div>
          <h2 className="font-display font-light leading-[1.1] tracking-[-0.02em] text-[1.7rem] md:text-[2.4rem] text-text-deep">
            Three steps, then it&apos;s yours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {STEPS.map((s) => {
            const Icon = s.Icon;
            return (
              <div key={s.n} className="v3-card p-5 md:p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-full bg-primary-tint text-primary-dark flex items-center justify-center">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted-2">
                    Step {s.n}
                  </span>
                </div>

                <div className="font-display text-[1.35rem] md:text-[1.5rem] leading-tight tracking-[-0.01em] text-text-deep mb-2">
                  {s.title}
                </div>
                <p className="text-[0.95rem] leading-[1.55] text-muted-2">
                  {s.body}
                </p>

                {s.soon && (
                  <span className="mt-4 inline-flex v3-badge v3-badge-yellow">
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
