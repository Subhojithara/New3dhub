import HeroSection from "@/components/Hero/HeroSection";
import Ripple from "@/components/Hero/Ripple";
import MoreBorder from "@/components/Hero/MoreBorder";
import NavbarDemo from "@/components/Navbar";

import Image from "next/image";
import LogoCarousel from "@/components/Hero/LogoCarousel";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <NavbarDemo />
      <HeroSection />
      <LogoCarousel />
      <MoreBorder />
      <Ripple />
    </div>
  );
}
