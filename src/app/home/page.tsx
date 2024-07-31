import HeroSection from "@/components/Hero/HeroSection";
import Ripple from "@/components/Hero/Ripple";
import MoreBorder from "@/components/Hero/MoreBorder";
import Image from "next/image";
import LogoCarousel from "@/components/Hero/LogoCarousel";
import ValueProp from "@/components/Hero/ValueProp";
import OurProses from "@/components/Hero/OurProses";
import Footer from "@/components/Footer";
import MarketSize from "@/components/Hero/MarketSize";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <LogoCarousel />
      <MoreBorder />
      <Ripple />
      <MarketSize />
      <ValueProp />
      <OurProses />
    </div>
  );
}
