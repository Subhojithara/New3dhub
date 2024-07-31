import HeroSection from "@/components/Hero/HeroSection";
import Ripple from "@/components/Hero/Ripple";
import MoreBorder from "@/components/Hero/MoreBorder";
import NavbarDemo from "@/components/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <NavbarDemo />
      <HeroSection />
      <MoreBorder />
      <Ripple />
    </div>
  );
}
