// components/SectionThree.tsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Home.module.css';

const SectionThree: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: 'linear'
      });
    }
  }, []);

  return (
    <div className={`${styles.section} section`}>
      <div className="space-y-10">
        <div className="h-20 w-50 rounded-2xl text-white bg-gradient-to-br from-cyan-400 via-cyan-300 to-cyan-100 text-4xl text-center flex justify-center items-center font-bold duration-500 hover:scale-110">
          <h1>Lorem, ipsum dolor</h1>
        </div>
        <div className="flex gap-16">
          <div className="h-40 w-40 shadow-xl rotate-45 rounded-s-full bg-gradient-to-r from-sky-400 via-sky-300 to-sky-100 duration-500 hover:scale-110"></div>
          <div className="h-40 w-40 shadow-xl rotate-45 rounded-e-full bg-gradient-to-r from-orange-100 via-orange-300 to-orange-400 duration-500 hover:scale-110"></div>
        </div>
      </div>
      <div className="pl-10">
        <h1 className="text-4xl font-bold">Lorem ipsum dolor sit.</h1>
        <p className="text-xl font-semibold w-[36rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptas iusto recusandae laudantium. Similique, ullam!</p>
      </div>
      <div ref={circleRef}>
      <div className="h-96 w-96 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-sky-100 duration-500 hover:scale-110">
        <div className="h-20 w-20 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-sky-100 duration-500 hover:scale-110"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
