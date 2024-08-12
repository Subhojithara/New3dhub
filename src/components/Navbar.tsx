"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap, Expo, ScrollTrigger } from "gsap/all";
import Link from 'next/link';
import "./navbar.scss";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const bigScreenNavbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showAnim = gsap.from(bigScreenNavbarRef.current, {
      yPercent: -200,
      paused: true,
      duration: 0.5,
      ease: "power2.out",
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const getVpdr = () => {
    const vph = Math.pow(document.documentElement.offsetHeight, 2);
    const vpw = Math.pow(document.documentElement.offsetWidth, 2);
    const vpd = Math.sqrt(vph + vpw);
    return (vpd * 2) / (circleRef.current?.clientWidth || 1);
  };

  const openNavbar = () => {
    const openTimeline = gsap.timeline();
    openTimeline.set(navbarRef.current, { display: "flex" });
    openTimeline.to(circleRef.current, {
      scale: getVpdr(),
      ease: Expo.easeInOut,
      duration: 1.5,
    });
    openTimeline.fromTo(
      ".navbar-item",
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
      1
    );
  };

  const closeNavbar = () => {
    const closeTimeline = gsap.timeline();
    closeTimeline.fromTo(
      ".navbar-item",
      { y: 0, opacity: 1 },
      { y: 25, opacity: 0, stagger: -0.1, duration: 0.5 }
    );
    closeTimeline.to(circleRef.current, {
      scale: 0,
      ease: Expo.easeInOut,
      duration: 1,
    });
    closeTimeline.set(navbarRef.current, { display: "none" });
  };

  const toggleNavbar = () => {
    if (isOpen) {
      closeNavbar();
    } else {
      openNavbar();
    }
    setIsOpen(!isOpen);
  };

  const isClose = () => {
    if (isOpen) {
      closeNavbar();
      setIsOpen(false);
    }
  };

  return (
    <div
      className="fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300 flex items-center justify-center bg-white"
      onClick={isClose}
    >
      {/* Navbar for larger screens */}
      <div
        ref={bigScreenNavbarRef}
        className="main-tool-bar navbar big-screen hidden lg:flex text-black font-normal space-x-10 fixed top-8 bg-white/10 border-black/40 border pt-6 pb-6 pl-20 pr-20 rounded-full backdrop-blur"
      >
        <ul className="flex space-x-14 list-none">
          {[
            { text: "Home", href: "/" },
            { text: "About", href: "/about" },
            { text: "Projects", href: "/projects" },
            { text: "Contact", href: "/contact" },
          ].map((item, index) => (
            <li key={index} className="navbar-item">
              <Link href={item.href}>
                <span
                  data-text={index + 1}
                  className="transition-all duration-500 ease-in-out hover:tracking-wider hover:text-slate-700"
                >
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className="lg:hidden">
        <button
          id="menu-toggle"
          onClick={(e) => {
            e.stopPropagation();
            toggleNavbar();
          }}
          className={`navmenu btn-toggle fixed top-4 right-4 z-20 ${isOpen ? "open" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>

      {/* Background circle animation */}
      <div
        ref={circleRef}
        id="bg-circle"
        className="fixed top-4 right-4 z-10 w-20 h-20 bg-blue-500 rounded-full transform scale-0"
      />

      {/* Navbar for smaller screens */}
      <div
        ref={navbarRef}
        className="navbar fixed inset-0 z-20 items-center justify-center hidden lg:hidden"
      >
        <ul className="flex flex-col items-center space-y-8 list-none">
          {[
            { text: "Home", href: "/" },
            { text: "Our Team", href: "/our-team" },
            { text: "Projects", href: "/projects" },
            { text: "Contact", href: "/contact" },
          ].map((item, index) => (
            <li key={index} className="navbar-item opacity-0">
              <Link href={item.href}>
                <span
                  data-text={index + 1}
                  className="text-white text-2xl font-bold uppercase relative block px-6 py-4 transition-all duration-500 ease-in-out hover:tracking-wider"
                >
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
