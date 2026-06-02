import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 pt-8 md:pt-14 pb-16 md:pb-24 relative">
        {/* Meta strip */}
        <div className="flex items-center justify-end mb-8 md:mb-14">
          <div className="hidden md:flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">
            {/* <MapPin size={12} strokeWidth={2} className="text-signal-deep" />
            Dhaka · Vol. 01 · Issue 01 · 2026 */}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-y-10 items-center">
          {/* Left: circular image */}
          <div className="col-span-12 md:col-span-3 lg:col-span-3 flex md:block justify-center order-2 md:order-1">
            <div className="relative">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-[3px] border-ink shadow-[5px_5px_0_var(--ink)]">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
                  alt="Local Bangladeshi market"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Center: Headline */}
          <div className="col-span-12 md:col-span-9 lg:col-span-7 order-1 md:order-2 text-center md:text-left">
            <h1 className="font-display font-light leading-[1.04] tracking-[-0.03em] text-[clamp(2.2rem,7vw,5.2rem)] text-ink">
              <span className="block">Find the</span>
              <span className="block mb-4">
                <span className="relative inline-block scribble-underline">
                  <em className="italic text-signal-deep font-medium">
                    smarter
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
                <span className="text-ink">alternative</span>
              </span>
              <span className="block">
                for <em className="italic text-ink font-medium">Bangladesh.</em>
              </span>
            </h1>
          </div>

          {/* Right: spinning badge */}
          <div className="col-span-12 md:col-span-3 lg:col-span-2 order-3 hidden md:flex justify-center md:justify-end">
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <div className="absolute inset-0 spin-slow">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <defs>
                    <path
                      id="badge-circle"
                      d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                      fill="none"
                    />
                  </defs>
                  <text
                    fontSize="11"
                    letterSpacing="3"
                    fill="var(--ink)"
                    fontFamily="var(--f-mono), monospace"
                    fontWeight="600"
                  >
                    <textPath href="#badge-circle">
                      BIQOLPO · ALTERNATIVE INDEX · BIQOLPO ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-signal-deep flex items-center justify-center border-2 border-ink">
                  <span className="w-2 h-2 rounded-full bg-paper" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle + CTA */}
        <div className="mt-10 md:mt-14 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <p className="font-body text-[1rem] md:text-[1.15rem] leading-[1.6] text-ink/70 mb-7">
            Cheaper. Safer. Healthier. Local. Free. We index the better
            everyday products, tools and services for Bangladesh — verified,
            neutral, no paid placements.
          </p>
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
            <Link href="/alternatives" className="btn-pill">
              Browse the index
              <span className="btn-pill-arrow">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
            <Link href="/about" className="btn-pill-ghost">
              How it works
            </Link>
          </div>

          {/* Hashtag pills — unified palette */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
            {["#cheaper", "#healthier", "#local", "#free", "#safer"].map((t) => (
              <span
                key={t}
                className="pill bg-paper border border-ink/15 text-ink/75 hover:border-signal-deep hover:text-signal-deep transition-colors text-[0.82rem] !py-1.5 !px-3"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-px bg-ink/10" />
    </section>
  );
}
