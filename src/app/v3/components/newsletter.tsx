"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10">
        <div className="bg-yellow-light border border-ink/15 squircle p-8 md:p-12 drop-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 pill bg-paper border border-ink/15 mb-4">
                <span className="w-2 h-2 rounded-full bg-signal-deep" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
                  Weekly swap
                </span>
              </div>
              <h2 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(1.85rem,4.5vw,3.2rem)] text-ink mb-4">
                One swap, every{" "}
                <span className="relative inline-block scribble-underline">
                  <em className="italic text-signal-deep font-medium">
                    Friday.
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
              <p className="font-body text-ink/70 text-[0.98rem] leading-[1.6] max-w-[36ch]">
                Short, researched. One product, one better alternative, and where to get it in Bangladesh.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="pill bg-paper text-ink border border-ink/15 text-[0.78rem] inline-flex items-center gap-1.5">
                  <Check size={13} strokeWidth={2.5} className="text-signal-deep" /> No spam
                </span>
                <span className="pill bg-paper text-ink border border-ink/15 text-[0.78rem] inline-flex items-center gap-1.5">
                  <Check size={13} strokeWidth={2.5} className="text-signal-deep" /> No affiliate noise
                </span>
              </div>
            </div>

            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
            >
              <label className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ink/60">
                Your email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@bangladesh.bd"
                className="w-full bg-paper border border-ink/20 rounded-full px-5 py-3.5 text-ink placeholder:text-ink/40 font-body text-[1rem] outline-none focus:border-signal-deep focus:shadow-[0_0_0_4px_var(--primary-tint)] transition min-h-[52px]"
              />
              <button
                type="submit"
                className="btn-pill justify-center w-full !min-h-[52px]"
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
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink/50 text-center">
                Free · weekly · unsubscribe anytime
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
