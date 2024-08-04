"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const points = {
  digital: {
    pros: [
      "Extremely targeted",
      "Intent based",
      "Healthy ROI (if done all right)",
      "Scalable once gets good results"
    ],
    cons: [
      "Insanely expensive (if not done right)",
      "Can’t target 61% of the market",
      "Poor awareness due to too many distractions",
      "Takes time and money both to scale"
    ]
  },
  traditional: {
    pros: [
      "Most cost effective (if done right)",
      "Able to target the whole market + the untapped 61%",
      "Highest awareness and impact",
      "Fastest to implement and get traction"
    ],
    cons: [
      "Doesn’t work for highly targeted audience",
      "Doesn’t work based on intent triggers",
      "Hard to build trackable KPIs",
      "Takes lots of physical effort and money to scale"
    ]
  }
};

const Table = () => {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = tableRef.current!.querySelectorAll('.row');

    rows.forEach((row, i) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const renderList = (items: string[]) => (
    <ul className="list-disc pl-6 mt-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div ref={tableRef} className="container mx-auto p-6">
      <div className="table w-full">
        <div className="row flex rounded-full bg-gray-200 text-lg">
          <div className="cell w-1/2 p-6 font-semibold text-center text-2xl uppercase">Digital Marketing</div>
          <div className="cell w-1/2 p-6 font-semibold text-center text-2xl uppercase">Traditional Marketing</div>
        </div>
        <div className="row flex border-b">
          <div className="cell w-1/2 p-6">
            <strong>Pros</strong>
            {renderList(points.digital.pros)}
          </div>
          <div className="cell w-1/2 p-6">
            <strong>Pros</strong>
            {renderList(points.traditional.pros)}
          </div>
        </div>
        <div className="row flex">
          <div className="cell w-1/2 p-6">
            <strong>Cons</strong>
            {renderList(points.digital.cons)}
          </div>
          <div className="cell w-1/2 p-6">
            <strong>Cons</strong>
            {renderList(points.traditional.cons)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;


