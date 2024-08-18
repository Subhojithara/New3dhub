"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurGoal = () => {
  const oldWayRef = useRef<HTMLDivElement>(null);
  const newWayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const oldWay = oldWayRef.current;
    const newWay = newWayRef.current;

    const animateElement = (
      element: HTMLElement | null,
      from: gsap.TweenVars,
      to: gsap.TweenVars
    ) => {
      if (element) {
        gsap.fromTo(
          element,
          from,
          {
            ...to,
            scrollTrigger: {
              trigger: element,
              start: "top 130%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }
    };

    animateElement(oldWay, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
    animateElement(newWay, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });

    document.querySelectorAll<HTMLElement>('.text-line').forEach((line) => {
      animateElement(line, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    });
  }, []);

  const oldWayPoints: string[] = [
    "Brands blindly putting ads via multiple traditional channels",
    "Running the same boring ads over time",
    "No solid way of tracking or understanding campaign performance",
    "Being blind without proper data",
    "Dealing with sky-high marketing budgets and burning cash",
    "No creativity, just being traditional as per the name",
    "Feels just like another advertisement in their life",
    "No value, and only ending up being salesy!",
  ];

  const newWayPoints: string[] = [
    "Understanding and segmenting the top tier customer persona",
    "Making campaigns more results-oriented",
    "Building ways to track campaign performance",
    "Making data-driven decisions",
    "Increasing more ROI with a lot less budget spent",
    "Leverage creativity to build genuine connections with the audience",
    "Doesn’t feel like another boring ad in their life!",
    "Leveraging lead magnets and leading with value",
  ];

  const renderList = (points: string[]) =>
    points.map((text, index) => <li key={index} className="text-line">{text}</li>);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-around p-8 space-y-8 overflow-hidden">
      <div className="text-center p-4 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold">OUR GOAL</h1>
        <p className="pt-2 md:pt-4 text-sm md:text-lg leading-relaxed">
          We’re a very simple team with a very simple goal. We’re deploying everything we’ve learned from working with some of the biggest brands in India and in the most challenging B2B niches.
          Over the last 2 years, we’ve been studying the market, its patterns, and the biggest gaps to fill. We target the gaps no one is even noticing.
          We likely know one or more things about implementing traditional marketing with festivals to create a sacred impact for your brand!
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
        <div ref={oldWayRef} className="relative w-full max-w-xl p-4 md:p-8 border border-black bg-white shadow-lg rounded-lg transform">
          <h2 className="text-xl md:text-2xl font-bold mb-4">The Old Way:</h2>
          <ul className="list-disc pl-4 space-y-2 text-sm md:text-lg">
            {renderList(oldWayPoints)}
          </ul>
        </div>
        <div ref={newWayRef} className="relative w-full max-w-xl p-4 md:p-8 border border-black bg-white shadow-lg rounded-lg transform">
          <h2 className="text-xl md:text-2xl font-bold mb-4">The New Way:</h2>
          <ul className="list-disc pl-4 space-y-2 text-sm md:text-lg">
            {renderList(newWayPoints)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
