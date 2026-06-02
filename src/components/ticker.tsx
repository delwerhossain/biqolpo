const ITEMS = [
  ["ChatGPT Plus", "DeepSeek"],
  ["Broiler", "Sonali"],
  ["Canva Pro", "Penpot"],
  ["Imported Honey", "Sundarban Mou"],
  ["Soft Drinks", "Daab"],
  ["Notion Paid", "AppFlowy"],
  ["Adobe XD", "Figma Free"],
  ["Plastic Bag", "Pat / Bamboo"],
  ["Imported Rice", "Kalijira"],
  ["Photoshop", "Photopea"],
];

export function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section className="marquee bg-ink text-paper overflow-hidden py-4 md:py-5">
      <div className="marquee-track flex gap-6 whitespace-nowrap will-change-transform">
        {doubled.map(([from, to], i) => (
          <span
            key={i}
            className="flex items-center gap-3 shrink-0"
          >
            <span className="font-mono text-[0.78rem] uppercase tracking-[0.2em] text-paper/60 line-through decoration-warn">
              {from}
            </span>
            <span className="font-display italic text-signal text-[1.2rem]">→</span>
            <span className="font-display text-[1.1rem] tracking-[-0.01em] text-paper">
              {to}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-signal mx-3" />
          </span>
        ))}
      </div>
    </section>
  );
}
