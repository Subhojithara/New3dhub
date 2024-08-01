"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimatedText from '../ui/AnimatedText';

function Stats() {
  const shoping = "India has the third-largest digital shopping base (600 million internet users and 185 million online shoppers)";
  const market = "India is home to 600+ D2C brands with an estimated market size of over $66 billion in 2023";
  const investment = "In 2021, about 105 deals were invested worth $2.14B in D2C brands in India";
  const growth = "The Indian D2C market is speculated to grow at a CAGR of 34.5% during the forecast period of 2022-2027";
  const consumerEngagement = "Consumer obsessed brands will experience highest engagement in the next upcoming years if their marketing, advertising and product-market fit goes all right";

  const shopingImageRef = useRef<HTMLImageElement>(null);
  const marketImageRef = useRef<HTMLImageElement>(null);
  const investmentImageRef = useRef<HTMLImageElement>(null);
  const growthImageRef = useRef<HTMLImageElement>(null);
  const consumerEngagementImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const animateImage = (imageRef: React.RefObject<HTMLImageElement>) => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: 30,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 2
        });
      }
    };

    animateImage(shopingImageRef);
    animateImage(marketImageRef);
    animateImage(investmentImageRef);
    animateImage(growthImageRef);
    animateImage(consumerEngagementImageRef);
  }, []);

  return (
    <>
      <div className="h-mini-screen w-full">
        <div className="flex justify-center items-center text-center space-x-48 mt-10">
          <img 
            ref={shopingImageRef} 
            className="h-64 w-auto" 
            src="/stats/shoping.png" 
            alt="shopping" 
          />
          <div className="text-start text-3xl w-[45rem]">
            <AnimatedText text={shoping} />
          </div>
        </div>
        <div className="justify-center items-center flex">
          <div className="w-[86rem] border border-black/30 mt-10 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center text-center space-x-48 mt-10">
          <img 
            ref={marketImageRef} 
            className="h-64 w-auto" 
            src="/stats/market.png" 
            alt="market" 
          />
          <div className="text-start text-3xl w-[45rem]">
            <AnimatedText text={market} />
          </div>
        </div>
        <div className="justify-center items-center flex">
          <div className="w-[86rem] border border-black/30 mt-10 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center text-center space-x-48 mt-10">
          <img 
            ref={investmentImageRef} 
            className="h-64 w-auto" 
            src="/stats/mony.png" 
            alt="investment" 
          />
          <div className="text-start text-3xl w-[45rem]">
            <AnimatedText text={investment} />
          </div>
        </div>
        <div className="justify-center items-center flex">
          <div className="w-[86rem] border border-black/30 mt-10 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center text-center space-x-48 mt-10">
          <img 
            ref={growthImageRef} 
            className="h-64 w-auto" 
            src="/stats/groth.png" 
            alt="growth" 
          />
          <div className="text-start text-3xl w-[45rem]">
            <AnimatedText text={growth} />
          </div>
        </div>
        <div className="justify-center items-center flex">
          <div className="w-[86rem] border border-black/30 mt-10 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center text-center space-x-48 mt-10">
          <img 
            ref={consumerEngagementImageRef} 
            className="h-64 w-auto" 
            src="/stats/marketing.png" 
            alt="consumer engagement" 
          />
          <div className="text-start text-3xl w-[45rem]">
            <AnimatedText text={consumerEngagement} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
