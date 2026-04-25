import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}