import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Ticker } from "./components/ticker";
import { Categories } from "./components/categories";
import { Featured } from "./components/featured";
import { Tabs } from "./components/tabs";
import { HowItWorks } from "./components/how-it-works";
import { PullQuote } from "./components/pull-quote";
import { Submit } from "./components/submit";
import { SocialWall } from "./components/social-wall";
import { Newsletter } from "./components/newsletter";
import { Footer } from "./components/footer";

export default function V3HomePage() {
  return (
    <div className="theme-v3 bg-cream min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Categories />
        <Featured />
        <Tabs />
        <HowItWorks />
        <PullQuote />
        <Submit />
        <SocialWall />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
