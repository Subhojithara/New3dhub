import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RotatingElements: React.FC = () => {
  const cerealBoxRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createScrollAnimation();
  }, []);

  const createScrollAnimation = () => {
    gsap.fromTo(
      [cerealBoxRef.current, flowerRef.current],
      { rotation: 0, y: 0, scale: 1, background: 'linear-gradient(to bottom, #b7d4f7, ##e1edfc)' },
      {
        rotation: 360,
        y: -200,
        scale: 1.2,
        background: 'linear-gradient(to bottom, #ccd4ff, #d9dffc)',
        scrollTrigger: {
          trigger: flowerRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      sunRef.current,
      { rotation: 0, y: 0, scale: 1, background: 'linear-gradient(to bottom, #ff9a9e, #fad0c4)' },
      {
        rotation: -360,
        y: -200,
        scale: 1.3,
        background: 'linear-gradient(to bottom, #a18cd1, #fbc2eb)',
        scrollTrigger: {
          trigger: sunRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );
  };

  return (
    <div className="rotating-elements flex justify-between items-center">
      <div
        ref={cerealBoxRef}
        className="cereal-box w-32 h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full glossy"
      >
      </div>
      <div
        ref={flowerRef}
        className="flower w-80 h-60 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full glossy"
      >
        <div className="h-40 w-40 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 rounded-full shadow-lg"></div>
      </div>
      <div
        ref={sunRef}
        className="sun w-40 h-40 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 flex justify-center items-center rounded-full"
      >
      </div>
    </div>
  );
};

export default RotatingElements;
