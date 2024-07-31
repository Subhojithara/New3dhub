"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const MarketSize: React.FC = () => {
  const [isAfter, setIsAfter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonBeforeRef = useRef<HTMLDivElement>(null);
  const buttonAfterRef = useRef<HTMLDivElement>(null);

  const beforeImageUrl = 'https://images.unsplash.com/photo-1578589318274-02854f68813e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const afterImageUrl = 'https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  useEffect(() => {
    const card = cardRef.current;
    const text = textRef.current;

    if (card) {
      gsap.fromTo(
        card,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 100%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    }

    if (text) {
      gsap.fromTo(
        text,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "circ.out",
          scrollTrigger: {
            trigger: text,
            start: 'top 100%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  const handleButtonClick = (isAfter: boolean) => {
    setIsAfter(isAfter);
    const card = cardRef.current;
    const text = textRef.current;

    if (card && text) {
      gsap.to(card, {
        opacity: 0, scale: 0.5, duration: 0.5, onComplete: () => {
          gsap.to(card, { opacity: 1, scale: 1, duration: 0.5 });
        }
      });

      gsap.to(text, {
        opacity: 0, y: -10, duration: 0.5, onComplete: () => {
          gsap.to(text, { opacity: 1, y: 0, duration: 0.5 });
        }
      });
    }
  };

  return (
    <div className="h-screen flex relative overflow-hidden">
      <div className="absolute top-1/2 lg:-right-52 -right-40 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4">
        <div
          ref={cardRef}
          className="border-white border rounded-md shadow-lg lg:w-[28rem] lg:h-[28rem] w-96 h-96 text-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${isAfter ? afterImageUrl : beforeImageUrl})` }}
        >
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 flex">
            <div
              ref={buttonBeforeRef}
              className={`py-2 px-4 rounded-l-full border cursor-pointer transform transition-transform ${!isAfter ? 'border-2 bg-black text-white duration-200 hover:scale-110' : 'bg-white/5  text-gray-500 duration-200 hover:scale-110'}`}
              onClick={() => handleButtonClick(false)}
            >
              Before
            </div>
            <div
              ref={buttonAfterRef}
              className={`py-2 px-4 rounded-r-full border cursor-pointer transform transition-transform ${isAfter ? 'border-2 bg-black text-white duration-200 hover:scale-110' : 'bg-white/5  text-gray-500 duration-200 hover:scale-110'}`}
              onClick={() => handleButtonClick(true)}
            >
              After
            </div>
          </div>
        </div>
      </div>
      <div ref={textRef} className="absolute lg:text-start text-center items-center lg:top-72 lg:left-8 space-y-4 lg:p-0 p-5 lg:w-[30rem]">
        <h1 className="text-5xl font-bold">{isAfter ? 'Discover the After Experience' : 'Welcome to Our Service'}</h1>
        <p>
          {isAfter
            ? 'After content: Discover a new way to experience our service.'
            : 'Before content: Experience the best service with us.'}
        </p>
        <div className="relative inline-block text-lg group">
          <div className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <div className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></div>
            <div className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></div>
            <div className="relative">Contact Us!</div>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default MarketSize;
