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
    const isMobile = window.innerWidth < 768;

    if (section && text) {
      gsap.fromTo(
        section,
        { scaleY: 1, background: '#fff' },
        {
          scaleY: isMobile ? 4 : 10, // Smaller scale on mobile
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
          scaleX: isMobile ? 2.5 : 5, // Smaller stretch on mobile
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
      className="h-screen flex justify-center items-center overflow-hidden px-4 sm:px-8"
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
