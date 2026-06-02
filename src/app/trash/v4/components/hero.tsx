"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ArrowRight, TrendingUp } from "lucide-react";

const CHIPS = [
  "ChatGPT",
  "Broiler chicken",
  "Canva Pro",
  "Soft drinks",
  "Imported honey",
  "Plastic bag",
  "Netflix",
  "Adobe",
];

export function Hero() {
  const [q, setQ] = useState("");

  return (
    <section className="relative bg-cream pt-10 md:pt-16 pb-14 md:pb-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 v3-badge v3-badge-green mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Bangladesh-first alternative index
          </div>

          <h1 className="font-display font-light tracking-[-0.025em] leading-[1.05] text-[2.15rem] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] text-text-deep">
            Find{" "}
            <span className="scribble-v3 text-primary-dark italic font-medium">
              better
            </span>{" "}
            alternatives in Bangladesh.
          </h1>

          <p className="font-bn mt-5 text-[1rem] md:text-[1.1rem] leading-[1.6] text-muted-2 max-w-[60ch] mx-auto">
            পণ্য, খাবার, app, service — সবকিছুর{" "}
            <span className="text-primary-dark font-semibold">ভালো</span>,{" "}
            <span className="text-primary-dark font-semibold">সস্তা</span>,{" "}
            <span className="text-primary-dark font-semibold">local</span> বা{" "}
            <span className="text-primary-dark font-semibold">free</span>{" "}
            বিকল্প খুঁজুন।
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (q.trim()) {
                window.location.href = `/alternatives?q=${encodeURIComponent(q)}`;
              }
            }}
            className="mt-8 md:mt-10 relative max-w-[640px] mx-auto"
          >
            <Search
              size={18}
              strokeWidth={2.2}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-2 pointer-events-none"
            />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Try ChatGPT, broiler chicken, Canva..."
              className="v3-input pr-[112px]"
              aria-label="Search alternatives"
            />
            <button
              type="submit"
              className="v3-btn absolute right-1.5 top-1/2 -translate-y-1/2 !min-h-[44px] !px-5 text-[0.88rem]"
            >
              Search
              <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </form>

          <div className="mt-6 -mx-5 px-5 overflow-x-auto hide-scrollbar md:overflow-visible md:mx-0 md:px-0">
            <div className="flex items-center gap-2 md:flex-wrap md:justify-center w-max md:w-auto">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-2 shrink-0 mr-1">
                Popular:
              </span>
              {CHIPS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setQ(c)}
                  className="v3-chip shrink-0 text-[0.82rem] !py-1.5 !px-3"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-[560px] mx-auto">
          <div className="text-center mb-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-2">
              <TrendingUp size={12} strokeWidth={2.5} className="text-primary" />
              Trending swap
            </span>
          </div>

          <Link
            href="/alternatives"
            className="v3-card block p-5 md:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="v3-badge v3-badge-green">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                AI & Software
              </span>
              <span className="v3-badge v3-badge-yellow">Editor's pick</span>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="text-left">
                <div className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-2 mb-1">
                  From
                </div>
                <div className="font-display text-[1.2rem] md:text-[1.4rem] leading-tight text-text-deep/60 line-through decoration-2 decoration-accent">
                  ChatGPT Plus
                </div>
                <div className="text-[0.78rem] text-muted-2 mt-0.5">৳2,400 / mo</div>
              </div>

              <ArrowRight size={20} strokeWidth={2.2} className="text-primary" />

              <div className="text-left">
                <div className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-2 mb-1">
                  To
                </div>
                <div className="font-display text-[1.3rem] md:text-[1.55rem] leading-tight text-text-deep">
                  DeepSeek + Gemini
                </div>
                <div className="text-[0.78rem] text-primary-dark font-semibold mt-0.5">
                  Free
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-border-soft flex items-center justify-between">
              <span className="text-[0.82rem] text-muted-2">
                Best for: <span className="text-text-deep font-medium">Free AI use</span>
              </span>
              <span className="text-[0.82rem] text-primary-dark font-semibold inline-flex items-center gap-1">
                View comparison <ArrowRight size={13} strokeWidth={2.5} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
