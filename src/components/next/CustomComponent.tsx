"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomComponent: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const initScrollTrigger = () => {
      // Kill all existing ScrollTriggers before initializing new ones
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const isMobile = window.innerWidth <= 768;
      const windowHeight = window.innerHeight + (isMobile ? 300 : 550);
      const sections = document.querySelectorAll(".tabsLetContent");
      const videos = document.querySelectorAll(".tabsVideo");

      // Pin the introWrapper to enable the sticky scroll effect
      ScrollTrigger.create({
        trigger: ".introWrapper",
        start: "top top",
        end: () => "+=" + windowHeight * sections.length,
        pin: ".introWrapper",
        pinSpacing: false,
        invalidateOnRefresh: true, // Ensure it recalculates on refresh
      });

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: () => "top top+=" + index * windowHeight,
          end: () => "+=" + windowHeight,
          onEnter: () => {
            section.classList.add("opacity-100");
            videos[index].classList.add("opacity-100");
          },
          onEnterBack: () => {
            section.classList.add("opacity-100");
            videos[index].classList.add("opacity-100");
          },
          onLeave: () => {
            section.classList.remove("opacity-100");
            videos[index].classList.remove("opacity-100");
          },
          onLeaveBack: () => {
            section.classList.remove("opacity-100");
            videos[index].classList.remove("opacity-100");
          },
          invalidateOnRefresh: true, // Recalculate on refresh for better mobile handling
        });
      });
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        initScrollTrigger();
        observerRef.current?.disconnect(); // Stop observing once initialized
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1, // Trigger when 10% of the component is visible
    });

    if (componentRef.current) {
      observerRef.current.observe(componentRef.current);
    }

    window.addEventListener("resize", initScrollTrigger);

    return () => {
      window.removeEventListener("resize", initScrollTrigger);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div ref={componentRef}>
      <section className="relative z-50 bg-gray-800 lg:rounded-t-[2.6rem]">
        <div className="pt-10 pb-28 relative">
          <div className="lg:h-[550vh]">
            <div className="h-screen sticky top-0">
              <div className="max-w-screen-xl mx-auto">
                <div className="grid h-[90vh] grid-cols-1 md:grid-cols-[0.4fr_1fr] px-4 gap-y-8">
                  <div className="bg-gray-700 rounded-lg flex flex-col justify-end p-6 rounded-l-2xl">
                    <div className="relative h-full">
                      <div className="absolute inset-0 flex flex-col justify-around items-center opacity-0 transition-opacity duration-500 tabsLetContent">
                        <h2 className="text-2xl font-medium leading-tight tracking-tight text-gray-100 text-center md:text-left">
                          Reinventing micro-mobility with{" "}
                          <span className="text-green-500">Award winning</span>{" "}
                          design
                        </h2>
                        <div className="w-full h-px bg-gray-400"></div>
                        <p className="text-sm text-gray-400 text-center md:text-left">
                          Our mission is to close the gap between a scooter and
                          a bike. Yoda is the lightest vehicle of its category,
                          designed to be agile and fun for everyone to ride.
                        </p>
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-around items-center opacity-0 transition-opacity duration-500 tabsLetContent">
                        <h2 className="text-2xl font-medium leading-tight tracking-tight text-gray-100 text-center md:text-left">
                          Best in class energy management for{" "}
                          <span className="text-green-500">optimal autonomy</span>
                        </h2>
                        <div className="w-full h-px bg-gray-400"></div>
                        <p className="text-sm text-gray-400 text-center md:text-left">
                          3 riding modes: 🌱 eco, ⚡️ normal & 🚀 boost - that offer
                          up to 80 km range on one single charge with a swappable
                          battery.
                        </p>
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-around items-center opacity-0 transition-opacity duration-500 tabsLetContent">
                        <h2 className="text-2xl font-medium leading-tight tracking-tight text-gray-100 text-center md:text-left">
                          Durable and effortless,{" "}
                          <span className="text-green-500">all the way</span>
                        </h2>
                        <div className="w-full h-px bg-gray-400"></div>
                        <p className="text-sm text-gray-400 text-center md:text-left">
                          We spent years crafting Yoda, stripping away unnecessary
                          components to deliver a <strong>simple</strong> and{" "}
                          <strong>efficient</strong> mobility experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center md:justify-start">
                      <div className="flex justify-center items-center bg-green-500 text-gray-900 border border-gray-800 text-sm font-semibold py-2 px-4 cursor-pointer transition-all rounded-full">
                        <div className="relative z-10">Order today</div>
                        <div className="relative flex justify-center items-center w-5 h-5 rounded-full overflow-hidden">
                          <div className="absolute w-4 h-4 flex justify-center items-center">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.66699 11.3332L11.3337 4.6665"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M4.66699 4.6665H11.3337V11.3332"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="absolute w-4 h-4 flex justify-center items-center">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.66699 11.3332L11.3337 4.6665"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M4.66699 4.6665H11.3337V11.3332"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 tabsVideo">
                      <video id="video-1" autoPlay loop muted playsInline>
                        <source src="https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.mp4" />
                        <source src="https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.webm" />
                      </video>
                      <img
                        src="https://assets-global.website-files.com/65ae37af356fab4845432048/65b0dc37d226a551affbf2ea_GDA24_HO_WINNER_MC_RGB.webp"
                        alt="German design award winner 2024 logo."
                        className="w-20 mt-8 mr-8 object-cover z-10"
                      />
                    </div>
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 tabsVideo">
                      <video id="video-2" autoPlay loop muted playsInline>
                        <source src="https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.mp4" />
                        <source src="https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.webm" />
                      </video>
                    </div>
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 tabsVideo">
                      <video id="video-3" autoPlay loop muted playsInline>
                        <source src="https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.mp4" />
                        <source src="https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.webm" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[40vh]"></section>
    </div>
  );
};

export default CustomComponent;
