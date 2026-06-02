"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative bg-yellow-light py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-[5%] w-32 h-32 blob-1 bg-purple-vibrant/15 float-slow" />
        <div className="absolute bottom-10 right-[8%] w-40 h-40 blob-3 bg-signal/30 float-med" />
        <div className="absolute top-1/3 right-[10%] w-20 h-20 dot-grid text-purple-vibrant/30 rounded-full" />
      </div>

      <div className="mx-auto max-w-[1100px] px-5 md:px-10">
        <div className="bg-paper squircle p-8 md:p-12 relative overflow-hidden drop-card">
          {/* Tape decoration top corners */}
          <span className="tape -top-2 left-10 -rotate-12" />
          <span className="tape -top-2 right-10 rotate-12" />

          {/* Decoration blob */}
          <div className="absolute -bottom-16 -right-16 w-48 h-48 blob-2 bg-purple-light/60" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 pill bg-purple-light border border-ink mb-5">
                <span className="w-2 h-2 rounded-full bg-purple-vibrant" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
                  Weekly swap
                </span>
              </div>
              <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,4.5vw,3.5rem)] text-ink mb-5">
                One swap, every{" "}
                <span className="relative inline-block scribble-underline">
                  <em className="italic text-purple-vibrant font-medium">
                    Friday.
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
              <p className="font-body text-ink/75 text-[1rem] leading-[1.6] max-w-[36ch]">
                Short, well-researched. One product, one better alternative,
                the why — and where to get it in Bangladesh.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="pill bg-signal/30 text-ink text-[0.78rem] inline-flex items-center gap-1.5">
                  <Check size={14} strokeWidth={2.5} /> No spam
                </span>
                <span className="pill bg-purple-light text-purple-vibrant text-[0.78rem] inline-flex items-center gap-1.5">
                  <Check size={14} strokeWidth={2.5} /> No affiliate noise
                </span>
              </div>
            </div>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
            >
              <label className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink/65">
                Your email
              </label>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@bangladesh.bd"
                  className="w-full bg-yellow-light/50 border-2 border-ink rounded-full px-5 py-3.5 text-ink placeholder:text-ink/40 font-body text-[1rem] outline-none focus:bg-paper focus:border-purple-vibrant transition"
                />
                <button
                  type="submit"
                  className="btn-pill justify-center w-full"
                >
                  {sent ? (
                    <>
                      <Check size={16} strokeWidth={2.5} /> Thanks. See you Friday.
                    </>
                  ) : (
                    <>
                      Subscribe
                      <span className="btn-pill-arrow">
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/50">
                Free · weekly · unsubscribe anytime
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
