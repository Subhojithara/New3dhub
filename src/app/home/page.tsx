import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Dynamic imports for code splitting
const HeroSection = dynamic(() => import('@/components/Hero/HeroSection'));
const Ripple = dynamic(() => import('@/components/Hero/Ripple'));
const MoreBorder = dynamic(() => import('@/components/Hero/MoreBorder'));
const LogoCarousel = dynamic(() => import('@/components/Hero/LogoCarousel'));
const ValueProp = dynamic(() => import('@/components/Hero/ValueProp'));
const Stats = dynamic(() => import('@/components/Hero/Stats'));
const MarketSize = dynamic(() => import('@/components/Hero/MarketSize'));
const OurProses = dynamic(() => import('@/components/Hero/OurProses'));
const Footer = dynamic(() => import('@/components/Footer'));
const SVGMaskAnimation = dynamic(() => import('@/components/Hero/SVGMaskAnimation'));

export default function Home() {
  // Your component logic here

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