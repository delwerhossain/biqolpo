"use client";

import { useState } from "react";
import { ArrowRight, Gift, PiggyBank, MapPin, Leaf } from "lucide-react";
import { SWAPS } from "@/lib/swaps";

type TabKey = "free" | "cheap" | "local" | "healthier";

const TABS: { key: TabKey; label: string; Icon: typeof Gift; color: string }[] = [
  { key: "free", label: "Free", Icon: Gift, color: "v3-badge-green" },
  { key: "cheap", label: "Cheaper", Icon: PiggyBank, color: "v3-badge-yellow" },
  { key: "local", label: "Local", Icon: MapPin, color: "v3-badge-green" },
  { key: "healthier", label: "Healthier", Icon: Leaf, color: "v3-badge-green" },
];

const FILTERS: Record<TabKey, (tag?: string, saving?: string) => boolean> = {
  free: (_, s) => (s ?? "").toLowerCase().includes("free"),
  cheap: (tag) => tag === "budget",
  local: (tag) => tag === "local",
  healthier: (tag) => tag === "health",
};

export function Tabs() {
  const [active, setActive] = useState<TabKey>("free");
  const list = SWAPS.filter((s) =>
    FILTERS[active](s.tag, s.saving),
  ).slice(0, 6);

  return (
    <section className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="text-center mb-8 md:mb-10">
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2 mb-2">
            By type
          </div>
          <h2 className="font-display font-light leading-[1.1] tracking-[-0.02em] text-[1.7rem] md:text-[2.4rem] text-text-deep">
            Find the kind of swap you need
          </h2>
        </div>

        <div className="-mx-5 px-5 overflow-x-auto hide-scrollbar md:overflow-visible md:mx-0 md:px-0 mb-7">
          <div className="flex items-center gap-2 md:justify-center w-max md:w-auto md:flex-wrap">
            {TABS.map((t) => {
              const Icon = t.Icon;
              const on = active === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  className={`v3-chip shrink-0 ${on ? "v3-chip-active" : ""}`}
                >
                  <Icon size={14} strokeWidth={2.2} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {list.length === 0 ? (
            <div className="col-span-full text-center text-muted-2 py-10">
              No swaps yet in this slice — check back soon.
            </div>
          ) : (
            list.map((s) => (
              <a
                key={s.id}
                href="/alternatives"
                className="v3-card p-4 md:p-5 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-2">
                    {s.from}
                  </span>
                  <ArrowRight size={14} strokeWidth={2.2} className="text-primary" />
                </div>
                <div className="font-display text-[1.2rem] leading-tight text-text-deep mb-2">
                  {s.to}
                </div>
                <div className="text-[0.85rem] text-muted-2 line-clamp-2 mb-3">
                  {s.reason}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border-soft">
                  {s.saving ? (
                    <span className="v3-badge v3-badge-green !text-[0.7rem]">
                      Save {s.saving}
                    </span>
                  ) : (
                    <span className="v3-badge v3-badge-soft !text-[0.7rem]">
                      Better swap
                    </span>
                  )}
                  <span className="text-[0.78rem] text-primary-dark font-semibold group-hover:underline">
                    View →
                  </span>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
