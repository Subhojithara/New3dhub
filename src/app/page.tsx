import HeroSection from "@/components/Hero/HeroSection";
import Ripple from "@/components/Hero/Ripple";
import MoreBorder from "@/components/Hero/MoreBorder";
import LogoCarousel from "@/components/Hero/LogoCarousel";
import ValueProp from "@/components/Hero/ValueProp";
import OurProses from "@/components/Hero/OurProses";
import Footer from "@/components/Footer";
import ProblemandSolution from "@/components/Hero/ProblemandSolution";
import SVGMaskAnimation from "@/components/Hero/SVGMaskAnimation";
import Stats from "@/components/Hero/Stats";
import ItemsStats from "@/components/Hero/ItemsStats";
import StretchingSection from "@/components/Hero/StretchingSection";
import Table from "@/components/Hero/Table";
import CursorAnimation from "@/components/Cursor";
import Aboutus from "@/components/Hero/Aboutus";
import { Chart } from "@/components/Hero/Charts";
import { SplitScreen } from "@/components/Hero/SplitScreen";
import SvgProses from "@/components/Hero/ValuSection/SvgProses";


export default function Home() {
  return (
    <div className="bg-white text-black">
      <CursorAnimation />
      <HeroSection />
      <LogoCarousel />
      <MoreBorder />
      <ItemsStats />
      <SplitScreen />
      <Table />
      <Ripple />
      <ValueProp />
      <Aboutus />
      <SvgProses />
      <OurProses />
      <Footer />
    </div>
  );
}
