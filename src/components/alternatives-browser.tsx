"use client";

import { useMemo, useState } from "react";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { CATEGORIES, SWAPS, type Category } from "@/lib/swaps";

type Filter = "all" | Category;

const TAG_LABEL: Record<string, string> = {
  editor: "Editor's pick",
  health: "Health pick",
  budget: "Budget pick",
  eco: "Eco pick",
  local: "Local pick",
};

export function AlternativesBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return SWAPS.filter((s) => {
      if (filter !== "all" && s.category !== filter) return false;
      if (!needle) return true;
      return (
        s.from.toLowerCase().includes(needle) ||
        s.to.toLowerCase().includes(needle) ||
        s.reason.toLowerCase().includes(needle)
      );
    });
  }, [filter, q]);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10 py-10 md:py-14">
        {/* Sticky search + filter bar */}
        <div className="sticky top-16 md:top-20 z-30 -mx-5 md:-mx-10 px-5 md:px-10 py-4 bg-paper/95 backdrop-blur-md border-b border-ink/10">
          <div className="flex flex-col gap-4">
            {/* Search input */}
            <label className="relative block">
              <Search
                size={18}
                strokeWidth={2.2}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40 pointer-events-none"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search ChatGPT, broiler, plastic…"
                className="w-full bg-paper border border-ink/15 rounded-full pl-11 pr-11 py-3.5 text-[0.95rem] md:text-[1rem] font-body placeholder:text-ink/40 outline-none focus:border-signal-deep focus:shadow-[0_0_0_4px_rgba(7,145,40,0.12)] transition min-h-[48px]"
                aria-label="Search alternatives"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-ink/55 hover:bg-paper-deep hover:text-ink transition-colors"
                >
                  <X size={16} strokeWidth={2.2} />
                </button>
              )}
            </label>

            {/* Filter chips — horizontal scroll on mobile */}
            <div className="-mx-5 md:mx-0 px-5 md:px-0 overflow-x-auto hide-scrollbar md:overflow-visible">
              <div className="flex items-center gap-2 w-max md:w-auto md:flex-wrap">
                <Chip active={filter === "all"} onClick={() => setFilter("all")}>
                  All
                  <span className="ml-1.5 opacity-60">{SWAPS.length}</span>
                </Chip>
                {CATEGORIES.map((c) => {
                  const count = SWAPS.filter((s) => s.category === c.id).length;
                  return (
                    <Chip
                      key={c.id}
                      active={filter === c.id}
                      onClick={() => setFilter(c.id)}
                    >
                      {c.name}
                      <span className="ml-1.5 opacity-60">{count}</span>
                    </Chip>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Result count */}
        <div className="mt-7 md:mt-10 mb-5 md:mb-7 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">
          <span>
            <span className="text-ink font-semibold">{filtered.length}</span>{" "}
            matching {filtered.length === 1 ? "swap" : "swaps"}
          </span>
          <span className="hidden md:inline">
            {filter !== "all"
              ? CATEGORIES.find((c) => c.id === filter)?.name
              : "Sorted · editor pick"}
          </span>
        </div>

        {/* Results grid */}
        {filtered.length === 0 ? (
          <div className="bg-paper-deep border border-ink/10 squircle py-16 px-6 text-center">
            <div className="w-12 h-12 rounded-full bg-signal/15 text-signal-deep mx-auto flex items-center justify-center mb-4">
              <Search size={20} strokeWidth={2} />
            </div>
            <div className="font-display text-[1.5rem] text-ink mb-2">
              No match yet.
            </div>
            <p className="text-ink/65 text-[0.95rem] leading-[1.55] max-w-[40ch] mx-auto">
              Email a swap you wish existed —{" "}
              <a
                href="mailto:hello@biqolpo.com"
                className="text-signal-deep underline underline-offset-4"
              >
                hello@biqolpo.com
              </a>
              . We add submissions weekly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((s) => {
              const catName =
                CATEGORIES.find((c) => c.id === s.category)?.name ?? s.category;
              const isEditor = s.tag === "editor";
              return (
                <article
                  key={s.id}
                  className="bg-paper border border-ink/10 squircle p-5 md:p-6 flex flex-col gap-3 drop-card hover:border-signal-deep/40 transition-colors group"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="pill bg-paper-deep text-ink/70 border border-ink/10 font-mono text-[0.62rem] uppercase tracking-[0.2em] !py-1 !px-2.5">
                      {catName}
                    </span>
                    {s.tag && (
                      <span
                        className={`pill inline-flex items-center gap-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] !py-1 !px-2.5 ${
                          isEditor
                            ? "bg-ink text-paper"
                            : "bg-signal/15 text-signal-deep"
                        }`}
                      >
                        {isEditor && <Sparkles size={10} strokeWidth={2.5} />}
                        {TAG_LABEL[s.tag] ?? s.tag}
                      </span>
                    )}
                  </div>

                  {/* From */}
                  <div>
                    <div className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ink/50 mb-1">
                      From
                    </div>
                    <div className="font-display text-[1.05rem] md:text-[1.15rem] leading-[1.15] text-ink/55 line-through decoration-1 decoration-ink/30">
                      {s.from}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-signal-deep">
                    <ArrowRight size={16} strokeWidth={2.2} />
                    <div className="flex-1 h-px bg-signal-deep/20" />
                  </div>

                  {/* To */}
                  <div>
                    <div className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-signal-deep mb-1">
                      Switch to
                    </div>
                    <div className="font-display text-[1.35rem] md:text-[1.5rem] leading-[1.1] tracking-[-0.015em] text-ink">
                      {s.to}
                    </div>
                  </div>

                  {/* Reason */}
                  <p className="text-[0.92rem] leading-[1.55] text-ink/70 line-clamp-3">
                    {s.reason}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-3 border-t border-ink/10 flex items-center justify-between gap-2">
                    {s.saving ? (
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-signal-deep font-semibold">
                        Save · {s.saving}
                      </span>
                    ) : (
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/45">
                        Better swap
                      </span>
                    )}
                    <span className="w-7 h-7 rounded-full bg-paper-deep text-ink/60 flex items-center justify-center group-hover:bg-signal-deep group-hover:text-paper transition-colors">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        {filtered.length > 0 && (
          <div className="mt-12 md:mt-16 bg-paper-deep border border-ink/10 squircle p-6 md:p-8 text-center drop-card">
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink/55 mb-2">
              Know a better one?
            </div>
            <h3 className="font-display text-[1.5rem] md:text-[1.85rem] leading-[1.15] tracking-[-0.015em] text-ink max-w-[28ch] mx-auto">
              Send us a swap that&apos;s missing from the index.
            </h3>
            <a
              href="mailto:hello@biqolpo.com?subject=Swap%20submission"
              className="btn-pill mt-5 !min-h-[44px] !py-2 !px-5 text-[0.88rem] inline-flex"
            >
              Email a swap
              <span className="btn-pill-arrow">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 inline-flex items-center px-3.5 py-2 rounded-full font-medium text-[0.82rem] border transition-colors min-h-[40px] ${
        active
          ? "bg-ink text-paper border-ink"
          : "bg-paper text-ink border-ink/15 hover:border-signal-deep hover:text-signal-deep"
      }`}
    >
      {children}
    </button>
  );
}
