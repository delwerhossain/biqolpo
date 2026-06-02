"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="v3-card bg-cream p-6 md:p-10 max-w-[860px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2 mb-2 inline-flex items-center gap-1.5">
                <Mail size={12} strokeWidth={2.5} className="text-primary" />
                Friday Swap
              </div>
              <h2 className="font-display font-light leading-[1.1] tracking-[-0.02em] text-[1.7rem] md:text-[2.3rem] text-text-deep">
                One swap, every{" "}
                <span className="scribble-v3 text-primary-dark italic font-medium">
                  Friday.
                </span>
              </h2>
              <p className="mt-3 text-[0.95rem] text-muted-2 leading-[1.6] max-w-[36ch]">
                Short, researched. One product, one better alternative, and
                where to buy it in Bangladesh.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="v3-badge v3-badge-green inline-flex items-center gap-1.5">
                  <Check size={11} strokeWidth={2.5} /> No spam
                </span>
                <span className="v3-badge v3-badge-yellow inline-flex items-center gap-1.5">
                  <Check size={11} strokeWidth={2.5} /> No affiliate links
                </span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
              className="space-y-3"
            >
              <label className="block text-[0.72rem] uppercase tracking-[0.15em] text-muted-2">
                Your email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@bangladesh.bd"
                className="v3-input !pl-4"
              />
              <button type="submit" className="v3-btn w-full">
                {sent ? (
                  <>
                    <Check size={16} strokeWidth={2.5} /> See you Friday
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight size={15} strokeWidth={2.5} />
                  </>
                )}
              </button>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-2 text-center">
                Free · weekly · unsubscribe anytime
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
