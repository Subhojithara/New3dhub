"use client";

import React, { useEffect } from 'react';
import { FaDigitalOcean, FaBullhorn } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Compair = () => {
  useEffect(() => {
    // Text reveal animation from left and right
    gsap.fromTo(
      ".reveal-left",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".reveal-container",
          start: "top 110%",
          end: "bottom 80%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".reveal-right",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".reveal-container",
          start: "top 110%",
          end: "bottom 80%",
          scrub: 1,
        },
      }
    );

    gsap.to(".arrow", {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
    });

    // Hover animations
    document.querySelectorAll('.icon-container').forEach((container) => {
      container.addEventListener('mouseenter', () => {
        gsap.to(container.querySelector('h2'), {
          scale: 1.1,
          color: "#333",
          duration: 0.3,
        });
        gsap.to(container.querySelector('svg'), {
          scale: 1.1,
          rotate: 10,
          duration: 0.3,
        });
      });
      container.addEventListener('mouseleave', () => {
        gsap.to(container.querySelector('h2'), {
          scale: 1,
          color: "#000",
          duration: 0.3,
        });
        gsap.to(container.querySelector('svg'), {
          scale: 1,
          rotate: 0,
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      {/* Titles with Icons */}
      <div className="sticky top-0 z-10 flex flex-col md:flex-row justify-center items-center md:space-x-60 bg-white/25 backdrop-blur-lg py-6 px-10 w-full">
        <div className="flex flex-col items-center space-y-4 icon-container hover:cursor-pointer">
          <FaDigitalOcean size={50} className="text-blue-600 h-14 shadow-lg w-14 p-2 rounded-full border-2" />
          <h2 className="text-2xl font-black uppercase">Digital Marketing</h2>
        </div>
        <div className="flex flex-col items-center space-y-4 icon-container hover:cursor-pointer mt-4 md:mt-0">
          <FaBullhorn size={50} className="text-red-600 h-14 shadow-lg w-14 p-2 rounded-full border-2" />
          <h2 className="text-2xl font-black uppercase">Traditional Marketing</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-start w-4/5 reveal-container mt-2 rounded-xl hover:scale-110 duration-1000  bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 ">
        {/* Digital Marketing */}
        <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-black reveal-left text-white">Pros of Digital:</h3>
            <ul className="list-disc pl-5 space-y-2 reveal-left">
              <li>Extremely targeted</li>
              <li>Intent based</li>
              <li>Healthy ROI (if done all right)</li>
              <li>Scalable once gets good results</li>
            </ul>

            <h3 className="text-xl font-black reveal-left text-white">Cons of Digital:</h3>
            <ul className="list-disc pl-5 space-y-2 reveal-left">
              <li>Insanely expensive (if not done right)</li>
              <li>Can’t target 61% of the market</li>
              <li>Poor awareness due to too many distractions</li>
              <li>Takes time and money both to scale</li>
            </ul>
          </div>
        </div>

        {/* Traditional Marketing */}
        <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-black reveal-right text-white">Pros of Traditional:</h3>
            <ul className="list-disc pl-5 space-y-2 reveal-right">
              <li>Most cost effective (if done right)</li>
              <li>Able to target the whole market + the untapped 61%</li>
              <li>Highest awareness and impact</li>
              <li>Fastest to implement and get traction</li>
            </ul>

            <h3 className="text-xl font-black reveal-right text-white">Cons of Traditional:</h3>
            <ul className="list-disc pl-5 space-y-2 reveal-right">
              <li>Doesn’t work for highly targeted audience</li>
              <li>Doesn’t work based on intent triggers</li>
              <li>Hard to build trackable KPIs</li>
              <li>Takes lots of physical efforts and money to scale</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compair;
