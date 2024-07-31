"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ValuSection/Home.module.css'
import SectionOne from './ValuSection/SectionOne';
import SectionTwo from './ValuSection/SectionTwo';
import SectionThree from './ValuSection/SectionThree';


gsap.registerPlugin(ScrollTrigger);

const ValueProp: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
          end: () => "+=" + scrollContainer.offsetWidth
        }
      });

      gsap.fromTo(sections, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, duration: 1, ease: "power4.out", scrollTrigger: {
            trigger: scrollContainer,
            start: "top 80%",
            end: "top 20%",
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.scrollContainer} ref={scrollContainerRef}>
      <div className={styles.scrollContent}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
};

export default ValueProp;
