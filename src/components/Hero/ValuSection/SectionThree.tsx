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
      <div className="">
        <h1 className="text-4xl font-bold">THE BIG PROBLEMS:</h1>
        <p className="text-base font-semibold w-[30rem]">
          No one wants to see your boring ads between television, driving on the highway, waiting on the traffic signal or when someone makes them hold a flyer.
        </p>
      </div>
      <div ref={circleRef}>
        <div className="h-96 w-96 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-sky-100 duration-500 hover:scale-110">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-sky-100 duration-500 hover:scale-110"></div>
        </div>
      </div>
      <div className="pl-10">
        <h1 className="text-4xl font-bold">THE BIG SOLUTION:</h1>
        <div className="space-y-4 text-base font-semibold w-[30rem]">
        <p className="">
        If you’re thinking then what’s the revolutionary solution to all these problems, then I must admit there’s no revolutionary solutions.
        </p>
        <p>
        The only solution is to have expertise along with creativity, because again traditional marketing isn’t a gimmick. It’s the only way to quickly scale your brand awareness without burning insane cash.
        </p>
        <p>
        You need to understand what to do, how to do and most importantly, when to do.
        </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
