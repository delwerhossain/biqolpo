import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-[6%] w-20 h-20 blob-1 bg-purple-light/60 float-slow" />
        <div className="absolute top-32 right-[8%] w-28 h-28 blob-2 bg-yellow-light/70 float-med" />
        <div className="absolute bottom-24 left-[12%] w-32 h-32 blob-3 bg-purple-soft/50 float-med" />
        <div className="absolute bottom-32 right-[6%] w-16 h-16 rounded-full bg-yellow-bright/40 float-slow" />
        <div className="absolute top-[40%] left-[3%] w-16 h-16 dot-grid text-purple-vibrant/30 rounded-full" />
        <div className="absolute top-[55%] right-[4%] w-20 h-20 dot-grid text-yellow-bright/40 rounded-full" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10 pt-8 md:pt-12 pb-20 md:pb-28 relative">
        {/* Meta strip */}
        <div className="flex items-center justify-end mb-10 md:mb-14">
          <div className="hidden md:flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            <MapPin size={12} strokeWidth={2} className="text-purple-vibrant" />
            Dhaka · Vol. 01 · Issue 01 · 2026
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-center">
          {/* Left: circular image */}
          <div className="col-span-12 md:col-span-3 lg:col-span-3 flex md:block justify-center order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 blob-1 bg-purple-light -z-10 float-slow" />
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-[3px] border-ink shadow-[6px_6px_0_var(--ink)]">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
                  alt="Local Bangladeshi market"
                  className="w-full h-full object-cover"
                />
              </div>
              <svg
                className="absolute -bottom-10 -right-6 w-24 h-24 text-purple-vibrant tilt-r"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M10 20 Q 40 10 60 40 Q 75 60 70 80"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M62 75 L 70 80 L 78 72"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Center: Headline */}
          <div className="col-span-12 md:col-span-9 lg:col-span-7 order-1 md:order-2 text-center md:text-left">
            <h1 className="font-display font-light leading-[1.02] tracking-[-0.03em] text-[clamp(2.4rem,7vw,5.6rem)] text-ink">
              <span className="block">Find the</span>
              <span className="block">
                <span className="relative inline-block scribble-underline">
                  <em className="italic text-purple-vibrant font-medium">
                    smarter
                  </em>
                  <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                    <path
                      d="M4 10 Q 50 0 100 9 T 196 6"
                      stroke="#7c3aed"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>{" "}
                <span className="text-ink">alternative</span>
              </span>
              <span className="block">
                for{" "}
                <span className="relative inline-block scribble-underline">
                  <em className="italic text-ink font-medium">Bangladesh</em>
                  <svg viewBox="0 0 200 16" preserveAspectRatio="none">
                    <path
                      d="M4 8 Q 50 16 100 7 T 196 9"
                      stroke="#fbbf24"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </div>

          {/* Right: spinning badge */}
          <div className="col-span-12 md:col-span-3 lg:col-span-2 order-3 flex justify-center md:justify-end">
            <div className="relative w-32 h-32 md:w-36 md:h-36">
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
                <div className="w-12 h-12 rounded-full bg-signal flex items-center justify-center border-2 border-ink">
                  <span className="w-2.5 h-2.5 rounded-full bg-ink" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle + CTA */}
        <div className="mt-12 md:mt-16 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <p className="font-body text-[1.05rem] md:text-[1.15rem] leading-[1.55] text-ink/75 mb-8">
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

          {/* Hashtag pills */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="pill bg-purple-light text-purple-vibrant tilt-l">
              #cheaper
            </span>
            <span className="pill bg-yellow-light text-ink tilt-r">
              #healthier
            </span>
            <span className="pill bg-signal/30 text-ink tilt-l-strong">
              #local
            </span>
            <span className="pill bg-purple-vibrant text-paper tilt-r">
              #free
            </span>
            <span className="pill bg-ink text-paper tilt-l">#safer</span>
          </div>
        </div>
      </div>

      <div className="relative h-px bg-ink/10" />
    </section>
  );
}
