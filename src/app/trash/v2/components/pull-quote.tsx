import { Quote } from "lucide-react";

export function PullQuote() {
  return (
    <section className="relative bg-purple-vibrant text-paper overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-10 -left-10 w-72 h-72 blob-1 bg-purple-light/20" />
        <div className="absolute top-20 right-10 w-32 h-32 blob-2 bg-yellow-bright/30 float-slow" />
        <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-signal/30 float-med" />
        <div className="absolute bottom-20 right-1/4 w-20 h-20 dot-grid text-paper/20 rounded-full" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10 relative">
        {/* Sun badge */}
        <div className="flex justify-center mb-10">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 spin-slow">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                {[...Array(12)].map((_, i) => (
                  <rect
                    key={i}
                    x="30"
                    y="2"
                    width="4"
                    height="8"
                    fill="#fbbf24"
                    rx="2"
                    transform={`rotate(${i * 30} 32 32)`}
                  />
                ))}
              </svg>
            </div>
            <div className="absolute inset-3 rounded-full bg-yellow-bright flex items-center justify-center">
              <Quote size={20} strokeWidth={2.5} className="text-ink" />
            </div>
          </div>
        </div>

        <blockquote className="text-center font-display font-light leading-[1.1] tracking-[-0.025em] text-[clamp(1.75rem,5vw,4rem)] max-w-[26ch] mx-auto">
          Not every product needs a{" "}
          <span className="relative inline-block scribble-underline">
            <em className="italic text-yellow-bright font-medium">better</em>
            <svg viewBox="0 0 200 16" preserveAspectRatio="none">
              <path
                d="M4 9 Q 50 1 100 8 T 196 7"
                stroke="#fbbf24"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>{" "}
          version. But yours{" "}
          <em className="italic text-signal">might.</em>
        </blockquote>

        <div className="mt-10 flex justify-center">
          <span className="pill bg-paper/10 text-paper border border-paper/30 font-mono text-[0.7rem] uppercase tracking-[0.2em]">
            Editor's note · The Alternative Index
          </span>
        </div>
      </div>
    </section>
  );
}
