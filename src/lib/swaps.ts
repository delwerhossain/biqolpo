export type Category =
  | "ai-software"
  | "tech-gadgets"
  | "food"
  | "local"
  | "healthier"
  | "budget"
  | "eco"
  | "services";

export const CATEGORIES: { id: Category; name: string; n: string; hint: string }[] = [
  { id: "ai-software", n: "01", name: "AI & Software", hint: "Paid AI → free tier" },
  { id: "tech-gadgets", n: "02", name: "Tech & Gadgets", hint: "Flagship → smart budget" },
  { id: "food", n: "03", name: "Food", hint: "Broiler → organic" },
  { id: "local", n: "04", name: "Local Product", hint: "Imported → Bangladeshi" },
  { id: "healthier", n: "05", name: "Healthier", hint: "Sugary → fresh" },
  { id: "budget", n: "06", name: "Budget", hint: "Premium → open-source" },
  { id: "eco", n: "07", name: "Eco-friendly", hint: "Plastic → jute / bamboo" },
  { id: "services", n: "08", name: "Services", hint: "Costly → reliable cheap" },
];

export type Swap = {
  id: string;
  category: Category;
  from: string;
  to: string;
  reason: string;
  saving?: string;
  tag?: "editor" | "health" | "budget" | "eco" | "local";
};

export const SWAPS: Swap[] = [
  // AI & Software
  { id: "chatgpt-deepseek", category: "ai-software", from: "ChatGPT Plus", to: "DeepSeek / Qwen", reason: "Comparable reasoning, free tier, no card needed.", saving: "৳2,400/mo", tag: "budget" },
  { id: "canva-penpot", category: "ai-software", from: "Canva Pro", to: "Penpot", reason: "Open-source design, self-hostable, real teams.", saving: "৳1,400/mo", tag: "editor" },
  { id: "notion-anytype", category: "ai-software", from: "Notion", to: "Anytype", reason: "Local-first, encrypted, no vendor lock-in.", saving: "৳1,200/mo", tag: "editor" },
  { id: "office-libre", category: "ai-software", from: "MS Office 365", to: "LibreOffice / OnlyOffice", reason: "Same .docx / .xlsx, zero subscription.", saving: "৳8,900/yr", tag: "budget" },
  { id: "photoshop-photopea", category: "ai-software", from: "Adobe Photoshop", to: "Photopea", reason: "Runs in browser, opens .psd, free.", saving: "৳2,900/mo", tag: "budget" },
  { id: "midjourney-flux", category: "ai-software", from: "Midjourney", to: "Flux / SDXL local", reason: "Run on your GPU, no monthly fee.", saving: "৳1,200/mo", tag: "budget" },

  // Tech & Gadgets
  { id: "iphone-pixel", category: "tech-gadgets", from: "iPhone 16 Pro", to: "Pixel 9 / Nothing Phone 3", reason: "Clean Android, half the price, equal camera.", saving: "৳80,000", tag: "editor" },
  { id: "macbook-framework", category: "tech-gadgets", from: "MacBook Pro M4", to: "Framework Laptop 13", reason: "Repairable, upgradeable, Linux-ready.", saving: "৳60,000", tag: "eco" },
  { id: "airpods-soundcore", category: "tech-gadgets", from: "AirPods Pro 2", to: "Soundcore Liberty 4 NC", reason: "Active noise cancel, 1/3 the price.", saving: "৳18,000", tag: "budget" },
  { id: "kindle-koreader", category: "tech-gadgets", from: "Kindle", to: "Kobo / KOReader", reason: "Open .epub, sideload, no Amazon DRM.", saving: "৳3,000", tag: "editor" },

  // Food
  { id: "broiler-sonali", category: "food", from: "Broiler chicken", to: "Sonali / Deshi murgi", reason: "Slower-grown, less feed-residue, real flavor.", saving: "Health gain", tag: "health" },
  { id: "imported-honey", category: "food", from: "Imported honey", to: "Sundarban mou", reason: "Single-origin, traceable beekeeper.", tag: "local" },
  { id: "soybean-mustard", category: "food", from: "Soybean oil", to: "Cold-press mustard / rice bran", reason: "No solvent extraction, traditional Bangla.", tag: "health" },
  { id: "white-bread-atta", category: "food", from: "White bread", to: "Whole-wheat atta ruti", reason: "More fiber, glycemic-friendly.", tag: "health" },
  { id: "instant-noodle", category: "food", from: "Instant noodles", to: "Chitoi / bhapa pitha", reason: "Real grain, no MSG palm-oil block.", tag: "health" },

  // Local Product
  { id: "zara-aarong", category: "local", from: "Zara / H&M kurta", to: "Aarong / Jatra", reason: "Handloom, Bangla designers, fair wage.", tag: "local" },
  { id: "ikea-hatil", category: "local", from: "IKEA furniture", to: "Hatil / Otobi", reason: "Sourced shorea wood, lifetime service.", tag: "local" },
  { id: "lush-mayer", category: "local", from: "Lush soap", to: "Mayer Sona / Bengal Soap", reason: "Coconut + neem, cottage-made.", tag: "local" },
  { id: "starbucks-northend", category: "local", from: "Starbucks beans", to: "North End / Crimson Cup BD", reason: "Roasted in Dhaka, fresher arrival.", saving: "৳600/250g", tag: "local" },

  // Healthier
  { id: "soda-tok-doi", category: "healthier", from: "Soft drinks", to: "Tok doi / lassi (no sugar)", reason: "Probiotic, low sugar, real cooling.", tag: "health" },
  { id: "white-rice-red", category: "healthier", from: "White polished rice", to: "Kalijira / red rice", reason: "Lower GI, more zinc and B-vitamins.", tag: "health" },
  { id: "frypan-clay", category: "healthier", from: "Non-stick teflon pan", to: "Clay / cast-iron", reason: "No PFAS coating, iron supplementation.", tag: "health" },
  { id: "energy-drink", category: "healthier", from: "Energy drink", to: "Daab / lemon-salt water", reason: "Real electrolytes, zero taurine.", tag: "health" },

  // Budget
  { id: "uber-pathao", category: "budget", from: "Uber rides", to: "Pathao bike / public bus", reason: "1/4 the fare for short distance.", saving: "70% per ride", tag: "budget" },
  { id: "netflix-mubi", category: "budget", from: "Netflix Premium", to: "MUBI / public library", reason: "Curated cinema, lower monthly.", saving: "৳700/mo", tag: "budget" },
  { id: "gym-bodyweight", category: "budget", from: "Gym membership", to: "Bodyweight + park", reason: "Same results in 12 weeks, ৳0.", saving: "৳3,000/mo", tag: "budget" },

  // Eco
  { id: "plastic-jute", category: "eco", from: "Plastic bag", to: "Jute / cloth bag", reason: "Bangladesh-made, decomposes, banned-list safe.", tag: "eco" },
  { id: "tissue-gamcha", category: "eco", from: "Paper tissue", to: "Gamcha / cotton napkin", reason: "Reusable, ancestral, washes hot.", tag: "eco" },
  { id: "plastic-bottle", category: "eco", from: "Bottled water", to: "Filter pitcher + steel bottle", reason: "Cuts 200 bottles/year per person.", saving: "৳4,500/yr", tag: "eco" },

  // Services
  { id: "school-tuition", category: "services", from: "Costly coaching", to: "Khan Academy + 10 Min School", reason: "Same syllabus, taught in Bangla, free.", saving: "৳5,000/mo", tag: "budget" },
  { id: "vpn-mullvad", category: "services", from: "NordVPN", to: "Mullvad / Proton", reason: "No logs, anonymous account, flat ৳5/day.", saving: "৳700/mo", tag: "budget" },
  { id: "shop-darazlocal", category: "services", from: "AliExpress import", to: "Daraz BD / local FB seller", reason: "Faster, returnable, supports SME.", tag: "local" },
];

export function swapsByCategory(cat: Category) {
  return SWAPS.filter((s) => s.category === cat);
}
