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
    <section className="marquee bg-text-deep text-cream overflow-hidden py-3">
      <div className="marquee-track flex gap-6 whitespace-nowrap will-change-transform">
        {doubled.map(([from, to], i) => (
          <span key={i} className="flex items-center gap-2 shrink-0">
            <span className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-cream/55 line-through decoration-accent">
              {from}
            </span>
            <span className="text-primary text-[1.05rem]">→</span>
            <span className="font-display text-[1rem] tracking-[-0.01em] text-cream">
              {to}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary mx-3" />
          </span>
        ))}
      </div>
    </section>
  );
}
