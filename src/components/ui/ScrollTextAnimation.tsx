'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextAnimationClientProps {
  text: string;
}

const ScrollTextAnimation: React.FC<ScrollTextAnimationClientProps> = ({ text }) => {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'center center',
        end: '+=150%',
        pin: true,
        scrub: 0.75,
      },
    });

    tl.fromTo(
      textRef.current,
      { scale: 1, opacity: 0 },
      {
        scale: 3,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
      }
    ).to(textRef.current, {
      scale: 1,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={container} className="w-full h-full flex items-center justify-center">
      <div ref={textRef} className="">
        {text}
      </div>
    </div>
  );
};

export default ScrollTextAnimation;
