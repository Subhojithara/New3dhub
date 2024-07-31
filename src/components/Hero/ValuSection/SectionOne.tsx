// components/SectionOne.tsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Home.module.css';

gsap.registerPlugin(ScrollTrigger);

const SectionOne: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Rotating elements
    const rotatingElements = document.querySelectorAll('.rotating-element');
    rotatingElements.forEach((element) => {
      gsap.fromTo(
        element,
        { rotation: 0 },
        {
          rotation: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    // Text revealing animation
    const textElements = sectionRef.current?.querySelectorAll('.reveal-text');
    textElements?.forEach((text) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 85%', // Start animation when the text is near the viewport
            end: 'bottom top', // End animation when the text is completely in the viewport
            toggleActions: 'play none none reverse', // Re-play animation on scroll up
          },
        }
      );
    });
  }, []);

  return (
    <div className={`${styles.section} section`} ref={sectionRef}>
      <div className="flex">
        <div className="space-y-1">
          <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-orange-100 border-r-[50px] border-r-transparent rotating-element duration-500 hover:scale-110"></div>
          <div className="w-96 h-14 bg-gradient-to-r text-white from-yellow-500 via-yellow-300 to-yellow-100 -rotate-4 flex text-center justify-center text-4xl items-center font-['Bebas_Neue'] rounded-xl shadow-xl hover-element duration-500 hover:scale-110">
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          <div className="w-96 h-14 bg-gradient-to-r text-white from-orange-500 via-orange-300 to-orange-100 -rotate-2 flex text-center justify-center text-4xl items-center font-['Bebas_Neue'] rounded-xl shadow-xl hover-element duration-500 hover:scale-110">
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
          <p className="pt-10 w-[40rem] text-4xl font-semibold hover-element duration-500 hover:scale-110 reveal-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, quam error exercitationem aliquam illo nihil.</p>
        </div>
        <div className="h-96 w-96 rounded-full bg-gradient-to-r from-orange-500 via-orange-300 to-orange-100 rotating-element">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-100"></div>
        </div>
        <div className="w-0 h-0 border-l-[80px] border-l-transparent border-t-[125px] border-t-yellow-300 border-r-[80px] border-r-transparent rotating-element duration-500 hover:scale-110"></div>
      </div>
      <div className="w-0 h-0 border-l-[80px] border-l-transparent border-t-[125px] border-t-orange-500 border-r-[80px] border-r-transparent rotating-element duration-500 hover:scale-110"></div>
    </div>
  );
};

export default SectionOne;
