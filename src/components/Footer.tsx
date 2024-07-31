"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Using GSAP for continuous wave animation
    const tl = gsap.timeline({ repeat: -1, defaults: { duration: 3, ease: "power1.inOut" } });
    tl.to(".wave", { x: "-60", repeat: 1, yoyo: true });

    // Animate other elements
    gsap.to(".ball", {
      y: "20%",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      delay: 0.3
    });

    gsap.fromTo(".drop",
      { y: "80%", scale: 1, opacity: 0.6 },
      { y: "0%", scale: 1.5, opacity: 0, duration: 5, repeat: -1, ease: "none", stagger: { each: 0.5, repeat: -1 } }
    );

    // Animate the text reveal with scroll trigger
    gsap.utils.toArray(".text-reveal").forEach((element) => {
      gsap.fromTo(element as Element,
        { x: "-100%", opacity: 0, yoyo: true },
        {
          x: "0%", opacity: 1, duration: 2, ease: "power2.out", scrollTrigger: {
            trigger: element as Element,
            start: "top 100%",
            end: "top 60%",
            scrub: true
          }
        }
      );
    });

  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white">
      <svg viewBox="0 0 120 28" className="w-full text-blue-500">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 13 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="5" fill="#0055ff" />
          </pattern>
        </defs>
        <g filter="url(#goo)">
          <circle className="drop drop1" cx="20" cy="2" r="1.8" fill="#0055ff" />
          <circle className="drop drop2" cx="25" cy="2.5" r="1.5" fill="#0055ff" />
          <circle className="drop drop3" cx="16" cy="2.8" r="1.2" fill="#0055ff" />
          <path className="wave" fill="#0055ff" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
        </g>
        {/* Red circle button with icon */}
        <a href="#top" onClick={scrollToTop} className="ball-container">
          <circle className="ball" cx="110" cy="8" r="4" fill="red" />
          {/* Icon inside the circle */}
          <text className="icon" x="110" y="10" textAnchor="middle" fill="white" fontSize="5">
            &#8593;
          </text>
        </a>
      </svg>
      <div className="bg-[#0055ff] flex flex-col items-center p-5 md:flex-row md:pl-20 md:py-20">
        
        <div className="flex-1">
          <h1 className="text-4xl text-white md:text-8xl lg:w-[65rem] font-black font-['Josefin Sans'] pb-10 text-center md:text-left text-reveal">
            Don&apos;t be a stranger, talk to us?
          </h1>
          <div className="relative inline-block text-lg group">
          <div className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <div className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></div>
            <div className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#0c1f40] group-hover:-rotate-180 ease"></div>
            <div className="relative">Contact Us!</div>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></div>
        </div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0">
          <div className="flex space-x-4 text-3xl text-white text-reveal">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="bg-[#216bff] w-full py-5 flex flex-col items-center">
        <hr className="w-11/12 md:w-9/12 mb-5 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between w-11/12 md:w-9/12 text-center md:text-left text-sm text-gray-100">
          <div className="mb-2 md:mb-0">
            <a href="/terms" className="hover:text-gray-200">Terms and Conditions</a>
            {' | '}
            <a href="/privacy" className="hover:text-gray-200">Privacy Policy</a>
          </div>
          <div className="text-gray-200 mt-2 md:mt-0">
            &copy; 2024 Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
