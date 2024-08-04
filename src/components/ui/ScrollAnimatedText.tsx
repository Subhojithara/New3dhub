import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
}

const ScrollAnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const refs = useRef<HTMLSpanElement[]>([]);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createAnimation();
  }, []);

  const createAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 0.75,
      }
    });

    tl.to(refs.current, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
    });
  };

  const splitWords = (phrase: string) => {
    return phrase.split(' ').map((word, i) => (
      <p key={`${word}_${i}`} style={{ display: 'inline-block', margin: '0 1.5vw 0 0', }}>
        {splitLetters(word)}
      </p>
    ));
  };

  const splitLetters = (word: string) => {
    return word.split('').map((letter, i) => (
      <span key={`${letter}_${i}`} ref={(el) => { if (el) refs.current.push(el); }} style={{ opacity: 0.2 }}>
        {letter}
      </span>
    ));
  };

  return (
    <div ref={container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        {splitWords(text)}
      </div>
    </div>
  );
};

export default ScrollAnimatedText;
