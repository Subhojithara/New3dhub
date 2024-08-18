"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/components/Hero/ValuSection/Home.module.css';

gsap.registerPlugin(ScrollTrigger);

const ValueProp: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.section');
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollContainer.offsetWidth,
        },
      });

      gsap.fromTo(sections,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power4.out", scrollTrigger: {
            trigger: scrollContainer,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }

    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: 'linear',
      });
    }

    const rotatingElements = document.querySelectorAll('.rotating-element');
    rotatingElements.forEach((element) => {
      gsap.fromTo(
        element,
        { rotation: 0, scale: 0.8 },
        {
          rotation: 360,
          scale: 1,
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

    const textElements = scrollContainer?.querySelectorAll('.reveal-text');
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
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.scrollContainer} ref={scrollContainerRef}>
      <div className={styles.scrollContent}>
        {/* Section One */}
        <div className={`${styles.section} section`}>
          <div className="lg:pr-40 lg:pt-20">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="space-y-1">
              <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-orange-100 border-r-[50px] border-r-transparent rotating-element"></div>
              <div className="w-96 h-14 bg-gradient-to-r text-white from-yellow-500 via-yellow-300 to-yellow-100 -rotate-4 flex text-center justify-center text-4xl items-center font-['Bebas_Neue'] rounded-xl shadow-xl hover-element">
                <h1 className="text-4xl">BUT TRADITIONAL</h1>
              </div>
              <div className="w-96 h-14 bg-gradient-to-r text-white from-orange-500 via-orange-300 to-orange-100 -rotate-2 flex text-center justify-center text-4xl items-center font-['Bebas_Neue'] rounded-xl shadow-xl hover-element">
                <h1>ISN’T SIMPLE ANYMORE</h1>
              </div>
              <p className="pt-10 lg:w-[36rem] w-96 lg:text-2xl text-base font-semibold hover-element reveal-text">
                With the rise of digital and creative marketing at its best, you can’t just put up a banner on the highways and expect your business to grow. Understanding the market, and building a marketing workflow that gets in customers with creativity and the right strategy is the only key to SUCCESS.
              </p>
            </div>
            <div className="h-96 w-96 rounded-full bg-gradient-to-r from-orange-500 via-orange-300 to-orange-100 rotating-element">
              <div className="h-20 w-20 rounded-full bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-100"></div>
            </div>
            <div className="w-0 h-0 border-l-[80px] border-l-transparent border-t-[125px] border-t-yellow-300 border-r-[80px] border-r-transparent rotating-element"></div>
          </div>
          <div className="w-0 h-0 border-l-[80px] border-l-transparent border-t-[125px] border-t-orange-500 border-r-[80px] border-r-transparent rotating-element"></div>
          </div>
        </div>

        {/* Section Two */}
        <div className={`${styles.section} section`}>
          <div className="flex flex-col items-center lg:pl-44">
            <div>
              <div className="p-6 text-center flex justify-center items-center rounded-2xl bg-gradient-to-r from-green-500 via-yellow-100 to-green-50 shadow-2xl hover-element">
                <h1 className="lg:text-5xl text-2xl uppercase font-black reveal-text text-slate-800">To win at traditional, you must have the:</h1>
              </div>
              <div className="flex flex-wrap lg:justify-center mt-5 lg:space-x-10">
                <ul className="lg:text-xl text-sm mt-5 font-semibold font-sans w-[28] lg:w-[40rem]">
                  <li>💸 More cost-effective (if done right)</li>
                  <li>🎯 Able to target the entire market + the 61% untapped</li>
                  <li>📢 Greater awareness and impact</li>
                  <li>⚡ Quicker to implement and gain traction</li>
                  <li>💗 Understanding how to win hearts</li>
                  <li>🧠 Understanding how to hit the bullseye and make your business remembered</li>
                </ul>
                <ul className="lg:text-xl text-sm mt-5 font-semibold font-sans w-[28] lg:w-[40rem]">
                  <li>㊙️ Understand the secret sauce behind emotions and correct timing</li>
                  <li>📢 Understanding how to make your marketing not feel like marketing</li>
                  <li>👁 Understanding the right way to advertise and capture attention</li>
                  <li>💲 Understanding how to lower your marketing budget and increase ROAS</li>
                  <li>🌍 Understanding every location deeply to find the sweet spots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Three */}
        <div className={`${styles.section} section`}>  
          <div className="text-center">
            <h1 className="text-4xl font-bold">THE BIG PROBLEMS:</h1>
            <p className="text-base font-semibold w-80 lg:w-[30rem] mx-auto">
              No one wants to see your boring ads between television, driving on the highway, waiting on the traffic signal, or when someone makes them hold a flyer.
            </p>
          </div>
          <div ref={circleRef} className="flex justify-center mt-10">
            <div className="h-96 w-96 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-sky-100">
              <div className="h-20 w-20 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-sky-100"></div>
            </div>
          </div>
          <div className="pl-10 mt-10 text-center md:text-left">
            <h1 className="text-4xl font-bold">THE BIG SOLUTION:</h1>
            <div className="space-y-4 text-base font-semibold w-80 lg:w-[30rem] mx-auto md:mx-0">
              <p>
                If you’re thinking then what’s the revolutionary solution to all these problems, then I must admit there’s no revolutionary solution.
              </p>
              <p>
                The only solution is making marketing not feel like marketing, and selling your brand’s products so cleverly that your ads feel like a necessity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProp;
