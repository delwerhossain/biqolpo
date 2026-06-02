import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowUpRight, Trash2 } from "lucide-react";

const ARCHIVE = [
  {
    href: "/trash/v1",
    label: "v1 — minimalist editorial",
    note: "First pass. Black-and-signal newsstand layout.",
  },
  {
    href: "/trash/v2",
    label: "v2 — purple playful",
    note: "WonderKids-inspired squircle cards with purple accents.",
  },
  {
    href: "/trash/v4",
    label: "v4 — search-first directory",
    note: "Cream + Inter UI with search bar hero and tabs.",
  },
];

export const metadata = {
  title: "Archive · Biqolpo",
  description: "Earlier design iterations of Biqolpo.",
};

export default function TrashPage() {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 md:px-10">
            <div className="inline-flex items-center gap-2 pill bg-paper border border-ink/15 mb-5">
              <Trash2 size={14} strokeWidth={2} className="text-ink/60" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em]">
                Archive
              </span>
            </div>

            <h1 className="font-display font-light leading-[1.05] tracking-[-0.025em] text-[clamp(2rem,5.5vw,4rem)] text-ink max-w-[18ch]">
              Old designs, kept for reference.
            </h1>
            <p className="mt-5 max-w-[60ch] text-ink/65 leading-[1.6]">
              Iterations that lost the brief. Live so you can compare against the
              current site.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {ARCHIVE.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="bg-paper border border-ink/10 squircle p-6 drop-card hover:border-signal-deep/40 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="w-10 h-10 rounded-full bg-signal/15 text-signal-deep flex items-center justify-center">
                      <Trash2 size={16} strokeWidth={2} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2.2}
                      className="text-ink/40 group-hover:text-signal-deep transition-colors"
                    />
                  </div>
                  <div className="font-display text-[1.35rem] leading-tight text-ink mb-2">
                    {a.label}
                  </div>
                  <p className="text-[0.92rem] text-ink/65 leading-[1.5]">
                    {a.note}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
