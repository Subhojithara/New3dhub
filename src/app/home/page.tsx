import HeroSection from "@/components/Hero/HeroSection";
import Ripple from "@/components/Hero/Ripple";
import MoreBorder from "@/components/Hero/MoreBorder";
import LogoCarousel from "@/components/Hero/LogoCarousel";
import ValueProp from "@/components/Hero/ValueProp";
import OurProses from "@/components/Hero/OurProses";
import Footer from "@/components/Footer";
import MarketSize from "@/components/Hero/MarketSize";
import SVGMaskAnimation from "@/components/Hero/SVGMaskAnimation";
import Stats from "@/components/Hero/Stats";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <LogoCarousel />
      <MoreBorder />
      <Ripple />
      <SVGMaskAnimation />
      <ValueProp />
      <Stats />
      <MarketSize />
      <OurProses />
      <Footer />
    </div>
  );
}
