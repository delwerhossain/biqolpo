const ITEMS = [
  ["ChatGPT Plus", "DeepSeek / Gemini"],
  ["Broiler Chicken", "Sonali / Deshi"],
  ["Canva Pro", "Penpot"],
  ["Imported Honey", "Sundarban Mou"],
  ["Soft Drinks", "Daab / Lebu pani"],
  ["Notion Paid", "AppFlowy"],
  ["Daraz Premium", "Local Maker"],
  ["Adobe XD", "Figma Free"],
  ["Plastic Bag", "Pat / Bamboo"],
  ["Premium Hosting", "Hostinger BD"],
  ["Imported Rice", "Kalijira / Chinigura"],
  ["Photoshop", "GIMP / Photopea"],
];

export function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section className="marquee rule-b bg-ink text-paper overflow-hidden py-3 md:py-4">
      <div className="marquee-track flex gap-10 whitespace-nowrap will-change-transform">
        {doubled.map(([from, to], i) => (
          <span key={i} className="flex items-center gap-3 font-mono text-[0.82rem] uppercase tracking-[0.18em] shrink-0">
            <span className="text-paper/70">{from}</span>
            <span className="text-signal arrow-glyph not-italic text-[1.05rem]">→</span>
            <span className="font-semibold">{to}</span>
            <span className="text-paper/30">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
