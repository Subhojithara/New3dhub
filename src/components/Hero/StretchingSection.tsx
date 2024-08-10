"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingElements from '../ui/RotatingElements';

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
          scaleY: 5,
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
        { color: '#000' },
        {
          color: '#fff',
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
    <div ref={sectionRef} className="h-screen flex justify-center overflow-hidden items-center">
      <h1 ref={textRef} className="text-6xl font-black text-center justify-center items-center uppercase font-['Montserrat'] w-1/2"></h1>
    </div>
  );
};

export default StretchingSection;
