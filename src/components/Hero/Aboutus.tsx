"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { gsap } from 'gsap';

const words = "We’re the first of a kind creative traditional advertising agency in India and we help brands like yours leverage traditional advertising at its best.";
const words2 = "We connect brands with their audience through INDIA’s biggest festivals. Our job is to make sure your customers enjoy your advertising, remembers your brand while being in the shopping mall and connects emotionally to your brand value. We build marketing and advertising campaigns for B2C & D2C brands during the biggest festivals. We help brands attach with the positivity and happiness of Indians.";

const Aboutus: React.FC = () => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const eyeballSize = 100;
  const eyeSize = 200;
  const eyeballRadius = eyeballSize / 2;
  const eyeRadius = eyeSize / 2;
  const maxMove = eyeRadius - eyeballRadius;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      [leftEyeRef.current, rightEyeRef.current].forEach((eye) => {
        if (eye) {
          const { left, top } = eye.getBoundingClientRect();
          const eyeCenterX = left + eyeRadius;
          const eyeCenterY = top + eyeRadius;

          const deltaX = clientX - eyeCenterX;
          const deltaY = clientY - eyeCenterY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          const maxDistance = Math.min(maxMove, distance);

          const angle = Math.atan2(deltaY, deltaX);
          const moveX = Math.cos(angle) * maxDistance;
          const moveY = Math.sin(angle) * maxDistance;

          const eyeball = eye.querySelector('.eyeball') as HTMLDivElement;
          if (eyeball) {
            gsap.to(eyeball, {
              x: moveX,
              y: moveY,
              ease: "elastic.out(1, 0.3)",
              duration: 0.5
            });

            const eyedot = eyeball.querySelector('.eyedot') as HTMLDivElement;
            const eyedotX = Math.cos(angle) * (eyeballRadius - 5); // Adjust the offset as needed
            const eyedotY = Math.sin(angle) * (eyeballRadius - 5); // Adjust the offset as needed
            if (eyedot) {
              gsap.to(eyedot, {
                x: eyedotX,
                y: eyedotY,
                ease: "elastic.out(1, 0.3)",
                duration: 0.5
              });
            }
          }
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [eyeRadius, maxMove]);

  return (
    <div className="min-h-screen w-full">
      <div className="relative">
        <div className="flex absolute right-20 top-5">

          <div className="w-[26rem] h-[40rem] text-[1.32rem] font-thin bg-cyan-950 absolute -top-1 -right-1 text-white p-8 rounded-xl duration-500 hover:bg-black hover:scale-110 hover:-rotate-2">
            <TextGenerateEffect words={words} />
            <TextGenerateEffect words={words2} />
          </div>

        </div>
        <div className="face absolute top-5 left-52 w-[40rem] h-[40rem] bg-gradient-to-br from-cyan-400 via-cyan-300 to-cyan-100 rounded flex justify-center items-center">
        <div className="face absolute w-[56rem] h-[22.5rem] bg-green-200 rounded-full flex justify-center items-center space-x-10 shadow-xl">
          <Link href="/" passHref>
            <div ref={leftEyeRef} className="eye h-64 w-64 bg-white rounded-full flex justify-center items-center relative cursor-pointer">
              <div className="eyeball h-32 w-32 bg-black rounded-full flex justify-center items-center relative">
                <span className="text-center text-xs uppercase text-white">About</span>
                <div className="eyedot h-5 w-5 bg-white rounded-full absolute"></div>
              </div>
            </div>
          </Link>
          <Link href="/" passHref>
            <div ref={rightEyeRef} className="eye h-64 w-64 bg-white rounded-full flex justify-center items-center relative cursor-pointer">
              <div className="eyeball h-32 w-32 bg-black rounded-full flex justify-center items-center relative">
                <span className="text-center text-xs uppercase text-white">About</span>
                <div className="eyedot h-5 w-5 bg-white rounded-full absolute"></div>
              </div>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
