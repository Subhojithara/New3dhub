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
    <div className="min-h-screen w-full p-4 md:p-8">
      <div className="relative flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-[26rem] md:h-[40rem] text-[1.32rem] font-thin bg-cyan-950 text-white absolute top-0 right-0 p-8 rounded-xl duration-500 hover:bg-black hover:scale-110 hover:-rotate-2">
            {words}
            {words2}
          </div>
        </div>
        <div className="lg:mt-0 mt-[44rem] lg:absolute lg:top-0 lg:left-40">
          <div className="face w-60 h-60 lg:w-[40rem] lg:h-[40rem] bg-gradient-to-br lg:rounded rounded-full from-cyan-400 via-cyan-300 to-cyan-100 flex justify-center items-center">
            <div className="face absolute w-80 h-40 lg:w-[56rem] lg:h-[22.5rem] bg-green-200 rounded-full flex justify-center items-center space-x-10 shadow-xl">
              <Link href="/" passHref>
                <div ref={leftEyeRef} className="eye h-24 w-24 lg:h-64 lg:w-64 bg-white rounded-full flex justify-center items-center relative cursor-pointer">
                  <div className="eyeball h-12 w-12 lg:h-32 lg:w-32 bg-black rounded-full flex justify-center items-center relative">
                    <div className="eyedot h-2 w-2 lg:h-5 lg:w-5 bg-white rounded-full absolute"></div>
                  </div>
                </div>
              </Link>
              <Link href="/" passHref>
                <div ref={rightEyeRef} className="eye h-24 w-24 lg:h-64 lg:w-64 bg-white rounded-full flex justify-center items-center relative cursor-pointer">
                  <div className="eyeball h-12 w-12 lg:h-32 lg:w-32 bg-black rounded-full flex justify-center items-center relative">
                    <div className="eyedot h-2 w-2 lg:h-5 lg:w-5 bg-white rounded-full absolute"></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
