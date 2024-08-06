"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


gsap.registerPlugin(ScrollTrigger);

const SvgProses = () => {
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="container mx-auto p-8 min-h-screen flex flex-col items-center justify-center">
      <div className="space-y-2 pb-10 text-center">
        {[
          "Understanding your brand, goal and your best ICP",
          "Understanding your current market and giving suggestions",
          "Working on crafting your creative campaign",
          "Help you choose the best spot in the best time and in the best way",
          "Helping you spend less than the market value",
          "Helping you with network and vendors",
          "Helping you measure your campaign performance",
          "Helping you with contracts, legalities and daily updates",
          "Helping your brand grow on social media via our media partnerships",
        ].map((text, index) => (
          <div
            key={index}
            className="text-xl opacity-0 flex flex-col items-center"
            ref={(el) => {
              if (el) textRefs.current[index] = el;
            }}
          >
            <span>{text}</span>
            <MdKeyboardDoubleArrowDown className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SvgProses;
