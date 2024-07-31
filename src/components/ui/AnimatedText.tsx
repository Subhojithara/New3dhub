"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const refs = useRef<HTMLSpanElement[]>([]);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.fromTo(
      refs.current,
      { opacity: 0.2 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 100%',
          end: `+=${window.innerHeight / 1.5}`,
        },
        ease: 'none',
        stagger: 0.1,
      }
    );
  };

  const splitWords = (phrase: string) => {
    return phrase.split(' ').map((word, i) => (
      <p key={`${word}_${i}`} style={{ display: 'inline-block', margin: '0 1.5vw 0 0', fontWeight: 700 }}>
        {splitLetters(word)}
      </p>
    ));
  };

  const splitLetters = (word: string) => {
    return word.split('').map((letter, i) => (
      <span key={`${letter}_${i}`} ref={(el) => { if (el) refs.current.push(el); }} style={{ opacity: 0.2, transition: 'opacity 0.3s ease-in-out' }}>
        {letter}
      </span>
    ));
  };

  return (
    <div ref={container}>
      {splitWords(text)}
    </div>
  );
};

export default AnimatedText;
