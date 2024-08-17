"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingElements from '../ui/RotatingElements';
import ScrollTextAnimation from '../ui/ScrollTextAnimation';

gsap.registerPlugin(ScrollTrigger);

const StretchingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (section && text) {
      gsap.fromTo(
        section,
        { scaleY: 1, background: '#fff' },
        {
          scaleY: 10,
          background: '#040D12',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
          },
        }
      );

      gsap.fromTo(
        text,
        { scaleX: 1, color: '#000' },
        {
          scaleX: 5, // Stretch text horizontally on both sides
          color: '#bbff00',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen flex justify-center items-center overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-4xl sm:text-6xl font-black text-center uppercase w-full sm:w-1/2"
      >
        OH BY THE WAY
      </h1>
    </div>
  );
};

export default StretchingSection;
