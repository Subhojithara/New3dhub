"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function MarketingComparison() {
  useEffect(() => {
    // Text reveal animation
    gsap.utils.toArray(".reveal-text").forEach((section) => {
      gsap.fromTo(
        section as Element,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section as Element,
            start: "top 100%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    });

    // SVG animation with bounce effect
    gsap.fromTo(
      ".marketing-svg",
      { opacity: 0, scale: 0.8, rotation: 10, y: 20 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".marketing-svg",
          start: "top 100%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="main-h-screen pb-10 overflow-hidden">
      <div className="container mx-auto lg:flex lg:flex-wrap">
        {/* Traditional Marketing Section */}
        <div className="flex flex-wrap w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold text-left bg-gradient-to-r from-lime-300 via-cyan-200 to-blue-400 inline-block text-transparent bg-clip-text p-2 bg-white">
              Traditional Marketing
            </h1>
            <div className="mt-8 w-full text-left reveal-text text-neutral-700 font-['Poppins']">
              <h2 className="text-2xl font-bold">Pros of Traditional</h2>
              <ul className="text-xl font-light">
                <li>💸 More cost-effective (if done right)</li>
                <li>🎯 Able to target the entire market + the 61% untapped</li>
                <li>📢 Greater awareness and impact</li>
                <li>⚡ Quicker to implement and gain traction</li>
              </ul>
              <h2 className="text-2xl font-bold mt-4">Cons of Traditional</h2>
              <ul className="text-xl font-light">
                <li>🔍 Doesn&apos;t work for very specific audiences</li>
                <li>⛔ Doesn&apos;t work based on intent triggers</li>
                <li>📉 Difficult to build trackable KPIs</li>
                <li>💪 Requires a lot of physical effort and money to scale</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Digital Marketing Section */}
        <div className="flex flex-wrap w-full lg:w-1/2 lg:flex-row-reverse">
          <div className="flex flex-col items-end">
            <h1 className="text-4xl font-bold text-right bg-gradient-to-r from-lime-300 via-cyan-200 to-blue-400 inline-block text-transparent bg-clip-text p-2 bg-white">
              Digital Marketing
            </h1>
            <div className="mt-8 w-full lg:pl-44 pl-0 reveal-text text-neutral-700 font-['Poppins']">
              <h2 className="text-2xl font-semibold">Pros of Digital</h2>
              <ul className="text-xl font-light">
                <li>🎯 Extremely targeted</li>
                <li>🎯 Based on intent</li>
                <li>💰 Healthy ROI (if done right)</li>
                <li>📈 Scalable once good results are obtained</li>
              </ul>
              <h2 className="text-2xl font-semibold mt-4">Cons of Digital</h2>
              <ul className="text-xl font-light">
                <li>💸 Insanely expensive (if not done right)</li>
                <li>🚫 Can&apos;t target the 61% of the market</li>
                <li>💤 Low awareness due to too many distractions</li>
                <li>⏳ Requires time and money to scale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
