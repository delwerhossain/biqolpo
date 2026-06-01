import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { Categories } from "@/components/categories";
import { Featured } from "@/components/featured";
import { PullQuote } from "@/components/pull-quote";
import { HowItWorks } from "@/components/how-it-works";
import { SocialWall } from "@/components/social-wall";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Categories />
        <Featured />
        <PullQuote />
        <HowItWorks />
        <SocialWall />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
