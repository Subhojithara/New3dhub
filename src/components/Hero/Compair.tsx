"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MarketingComparison() {
  useEffect(() => {
    // Text reveal animation - alternative animation
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
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Traditional Marketing Section */}
      <div className="flex flex-wrap">
        <div className="flex flex-col items-start mb-20 w-full md:w-1/2">
          <h1 className="text-6xl font-bold text-left sticky top-0 z-50 bg-orange-100 rounded-2xl shadow-sm p-5">
            Traditional Marketing
          </h1>
          <div className="mt-8 w-full text-left reveal-text">
            <h2 className="text-2xl font-semibold">Pros of Traditional</h2>
            <ul>
              <li>More cost-effective (if done right)</li>
              <li>Able to target the entire market + the 61% untapped</li>
              <li>Greater awareness and impact</li>
              <li>Quicker to implement and gain traction</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-4">Cons of Traditional</h2>
            <ul>
              <li>Doesn&apos;t work for very specific audiences</li>
              <li>Doesn&apos;t work based on intent triggers</li>
              <li>Difficult to build trackable KPIs</li>
              <li>Requires a lot of physical effort and money to scale</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/marketing.svg"
            alt="Traditional Marketing"
            width={500}
            height={500}
            className="w-3/4"
          />
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="flex flex-wrap flex-row-reverse">
        <div className="flex flex-col items-end mb-20 w-full md:w-1/2">
          <h1 className="text-6xl font-bold text-right sticky top-0 z-50 bg-orange-100 rounded-2xl shadow-sm p-5">
            Digital Marketing
          </h1>
          <div className="mt-8 w-full text-right reveal-text">
            <h2 className="text-2xl font-semibold">Pros of Digital</h2>
            <ul>
              <li>Extremely targeted</li>
              <li>Based on intent</li>
              <li>Healthy ROI (if done right)</li>
              <li>Scalable once good results are obtained</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-4">Cons of Digital</h2>
            <ul>
              <li>Insanely expensive (if not done right)</li>
              <li>Can&apos;t target the 61% of the market</li>
              <li>Low awareness due to too many distractions</li>
              <li>Requires time and money to scale</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/marketing.svg"
            alt="Digital Marketing"
            width={500}
            height={500}
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
}
