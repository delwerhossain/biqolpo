"use client";

import { useState } from "react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (compact) {
    return (
      <div className="bg-ink text-paper p-6 md:p-8">
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-paper/60 mb-3 flex items-center gap-2">
          <span className="dot-sm" /> Weekly swap
        </div>
        <div className="font-display text-[1.6rem] leading-[1.1] tracking-[-0.01em]">
          One swap, every <em className="italic">Friday.</em>
        </div>
        <p className="mt-3 text-paper/75 text-[0.95rem] leading-[1.5]">
          Short, researched, no affiliate noise.
        </p>
        <form
          className="mt-5 flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setSent(true);
          }}
        >
          <div className="flex gap-0 border border-paper">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@bangladesh.bd"
              className="flex-1 bg-transparent px-3 py-3 text-paper placeholder:text-paper/40 text-[0.95rem] outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-signal text-ink font-mono text-[0.74rem] uppercase tracking-[0.18em] font-semibold hover:bg-paper transition-colors border-l border-paper"
            >
              {sent ? "✓" : "Join"}
            </button>
          </div>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-paper/50">
            {sent ? "Thanks." : "Free · unsubscribe anytime"}
          </p>
        </form>
      </div>
    );
  }

  return (
    <section className="rule-b bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-7">
          <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/60 mb-3 flex items-center gap-2">
            § 07 <span className="text-paper/30">/</span> The weekly swap
          </div>
          <h2 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4.5rem)]">
            One swap, every <em className="italic">Friday.</em>
          </h2>
          <p className="mt-6 text-paper/80 max-w-[44ch] text-[1.02rem] leading-[1.55]">
            A short, well-researched note in your inbox. One product or tool,
            one better alternative, the why — and where to get it in Bangladesh.
            No spam, no affiliate noise.
          </p>
        </div>

        <form
          className="col-span-12 md:col-span-5 flex flex-col gap-3 self-end"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setSent(true);
          }}
        >
          <label className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-paper/60">
            Email
          </label>
          <div className="flex gap-0 border border-paper bg-transparent">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@bangladesh.bd"
              className="flex-1 bg-transparent px-4 py-4 text-paper placeholder:text-paper/40 font-body text-[1rem] outline-none"
            />
            <button
              type="submit"
              className="px-5 md:px-6 bg-signal text-ink font-mono text-[0.78rem] uppercase tracking-[0.18em] font-semibold hover:bg-paper hover:text-ink transition-colors border-l border-paper"
            >
              {sent ? "✓ Done" : "Subscribe →"}
            </button>
          </div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-paper/50 mt-2">
            {sent ? "Thanks. You will hear from us Friday." : "Free · weekly · unsubscribe anytime"}
          </p>
        </form>
      </div>
    </section>
  );
}
