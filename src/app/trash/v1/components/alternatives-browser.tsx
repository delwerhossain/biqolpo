"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, SWAPS, type Category } from "@/lib/swaps";

type Filter = "all" | Category;

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
    <section className="rule-b">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-10 md:py-14">
        {/* Search + filter bar */}
        <div className="sticky top-16 md:top-20 z-30 -mx-5 md:-mx-10 px-5 md:px-10 py-4 bg-[color:var(--paper)]/90 backdrop-blur-md rule-b">
          <div className="flex flex-col gap-4">
            <label className="relative block">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted">
                Search
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="ChatGPT, broiler, plastic…"
                className="w-full bg-paper border border-ink pl-[5.4rem] pr-12 py-3.5 text-[1rem] md:text-[1.05rem] font-body placeholder:text-muted-soft focus:outline-none focus:border-signal-deep"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full hover:bg-paper-deep transition-colors"
                >
                  ×
                </button>
              )}
            </label>

            <div className="flex flex-wrap gap-2">
              <Chip active={filter === "all"} onClick={() => setFilter("all")}>
                All · {SWAPS.length}
              </Chip>
              {CATEGORIES.map((c) => {
                const count = SWAPS.filter((s) => s.category === c.id).length;
                return (
                  <Chip
                    key={c.id}
                    active={filter === c.id}
                    onClick={() => setFilter(c.id)}
                  >
                    {c.name} · {count}
                  </Chip>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 md:mt-10">
          <div className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted mb-5 md:mb-7 flex items-center justify-between">
            <span>{filtered.length} matching swaps</span>
            <span className="hidden md:inline">Sorted · editor pick</span>
          </div>

          {filtered.length === 0 ? (
            <div className="border border-ink py-16 px-6 text-center">
              <div className="font-display italic text-[1.6rem] mb-2">No match yet.</div>
              <p className="text-muted">
                Email us a swap you wish existed — we add submissions weekly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border border-ink">
              {filtered.map((s) => {
                const catName =
                  CATEGORIES.find((c) => c.id === s.category)?.name ?? s.category;
                return (
                  <article
                    key={s.id}
                    className="bg-paper p-6 md:p-7 flex flex-col gap-4 transition-colors hover:bg-paper-deep"
                  >
                    <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                      <span>{catName}</span>
                      {s.tag && (
                        <span className="px-2 py-0.5 bg-ink text-paper">
                          {s.tag === "editor" ? "★ Pick" : s.tag}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted">From</div>
                      <div className="mt-1 font-display text-[1.3rem] md:text-[1.45rem] leading-[1.05] line-through decoration-1 decoration-muted-soft">
                        {s.from}
                      </div>
                    </div>

                    <div>
                      <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-signal-deep flex items-center gap-1.5">
                        <span className="dot-sm" /> Switch to
                      </div>
                      <div className="mt-1 font-display text-[1.55rem] md:text-[1.8rem] leading-[1] tracking-[-0.01em]">
                        {s.to}
                      </div>
                    </div>

                    <p className="text-[0.96rem] leading-[1.5] text-ink/80">
                      {s.reason}
                    </p>

                    {s.saving && (
                      <div className="mt-auto pt-3 rule-t font-mono text-[0.74rem] uppercase tracking-[0.18em] flex items-center justify-between">
                        <span className="text-muted">Save</span>
                        <span className="text-ink">{s.saving}</span>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
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
      className={`px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] border transition-colors ${
        active
          ? "bg-ink text-paper border-ink"
          : "bg-paper text-ink border-ink/30 hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}
