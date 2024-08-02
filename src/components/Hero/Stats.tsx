"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimatedText from '../ui/AnimatedText';
import Image from 'next/image';

type StatItemProps = {
  src: string;
  alt: string;
  text: string;
};

const StatItem: React.FC<StatItemProps> = ({ src, alt, text }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 30,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 2,
      });
    }
  }, [src]);

  return (
    <div className="flex justify-center items-center text-center space-x-48 mt-10">
      <Image
        ref={imageRef}
        className="h-64 w-auto"
        src={src}
        alt={alt}
        width={256}
        height={500}
      />
      <div className="text-start text-3xl w-[45rem]">
        <AnimatedText text={text} />
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const statsData: StatItemProps[] = [
    {
      src: '/stats/shoping.svg',
      alt: 'shopping',
      text: 'India has the third-largest digital shopping base (600 million internet users and 185 million online shoppers)',
    },
    {
      src: '/stats/market.svg',
      alt: 'market',
      text: 'India is home to 600+ D2C brands with an estimated market size of over $66 billion in 2023',
    },
  ];

  return (
    <div className="h-mini-screen w-full">
      {statsData.map((stat, index) => (
        <React.Fragment key={index}>
          <StatItem {...stat} />
          {index !== statsData.length - 1 && (
            <div className="justify-center items-center flex">
              <div className="w-[86rem] border border-black/30 mt-10 rounded-full"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stats;
