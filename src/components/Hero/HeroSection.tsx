"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { BackgroundBeams } from '../ui/background-beams';

const HeroSection = () => {
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
    <div className="min-h-screen">
      <BackgroundBeams />
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:min-h-screen">
        <div className="mt-20 lg:mt-48 px-20 text-center lg:text-left">
          <div className="pb-2">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-black inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>
          <h1 className="w-full lg:w-[42rem] text-4xl lg:text-6xl font-semibold">Make Your Brand Remembered, Traditional Marketing Done Right 🚀</h1>
          <p className="pt-4 w-full lg:w-[40rem]">We help Brands leverage traditional advertising through the biggest festivals of India, using modern-day creative strategies that impact and drive customer loyalty.</p>
          <div className="pt-4 flex justify-center lg:justify-start space-x-6">
            <button className="border h-14 w-52 text-xl font-semibold text-white  rounded-full bg-green-600">
              Contact Us
            </button>
          </div>
        </div>
        <div className="mt-16 lg:mt-5 flex justify-center lg:absolute lg:top-5 lg:right-0">
          <div className="face w-60 h-60 lg:w-[40rem] lg:h-[40rem] bg-gradient-to-br rounded-s-full from-cyan-400 via-cyan-300 to-cyan-100 flex justify-center items-center">
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

export default HeroSection;
