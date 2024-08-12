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
import { SplitScreen } from "@/components/Hero/SplitScreen";
import SvgProses from "@/components/Hero/ValuSection/SvgProses";
import OurGoal from "@/components/Hero/OurGoal";
import Compair from "@/components/Hero/Compair";
import CardContainer from "@/components/Hero/CardContainer";


export default function Home() {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <LogoCarousel />
      <MoreBorder />
      <ItemsStats />
      <SplitScreen />
      <Compair />
      <StretchingSection />
      <CardContainer />
      <ValueProp />
      <Aboutus />
      <OurGoal />
      <SvgProses />
      <OurProses />
      <Footer />
    </div>
  );
}
