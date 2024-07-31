"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function LoadingHero() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (button) {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        gsap.to(button, {
          x,
          y,
          duration: 0.3,
          ease: 'power3.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    const text = textRef.current;
    const form = formRef.current;
    const circle = circleRef.current;

    if (text && form && circle) {
      const tl = gsap.timeline();

      tl.to(text, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      })
        .to(form, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out'
        }, "-=0.3")
        .to(circle, {
          scale: 100,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          onComplete: () => {
            gsap.to(circle, {
              opacity: 0,
              duration: 0.5,
              ease: 'power3.in'
            });
          }
        });
    }
  };

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

  useEffect(() => {
    const text = textRef.current;
    const form = formRef.current;

    if (text) {
      gsap.fromTo(text, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 });
    }

    if (form) {
      gsap.fromTo(form, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1 });
    }
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (videoRef.current) {
      videoRef.current.muted = soundEnabled;
    }
  };

  return (
    <div className="relative h-screen w-full">
      <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted={!soundEnabled}>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute lg:bottom-12 bottom-40 left-5 m-4 text-white lg:w-96 md:w-3/4 sm:w-2/3" ref={textRef}>
        <p>We help Brands leverage traditional advertising through the biggest festivals of India, using modern-day creative strategies that impact and drive customer loyalty</p>
      </div>
      <form
        ref={formRef}
        className="absolute bottom-20 left-0 right-0 mx-auto lg:w-1/3 md:w-1/2 w-96 p-4 rounded-full shadow-md flex items-center bg-white bg-opacity-20 backdrop-blur-md"
        style={{ transform: 'translateY(20px)', opacity: 0, zIndex: 10 }}
        onSubmit={handleSubscribe}
      >
        <input type="email" placeholder="Enter your email" className="flex-1 p-2 rounded-l bg-transparent placeholder-white text-white focus:outline-none" required />
        <button type="submit" className="bg-black rounded-full text-white p-2 pl-4 pr-4">
          Subscribe
        </button>
      </form>
      <div className="absolute inset-0 flex items-center justify-center">
        <Link href="/home" passHref>
          <button
            ref={buttonRef}
            onClick={handleClick}
            className="px-6 py-3 text-white bg-white/10 backdrop-blur-md rounded-full relative z-10"
          >
            Click to Enter
          </button>
        </Link>
        <div
          ref={circleRef}
          className="absolute inset-0 bg-white rounded-full"
          style={{
            transform: 'scale(0)',
            opacity: 100,
            width: '2rem',
            height: '2rem',
            left: '50%',
            top: '50%',
            transformOrigin: 'center',
            zIndex: 5,
          }}
        ></div>
      </div>
      <button
        onClick={toggleSound}
        className="absolute bottom-5 right-5 bg-black text-white p-3 rounded-full focus:outline-none"
      >
        {soundEnabled ? <FaVolumeUp size={24} /> : <FaVolumeMute size={24} />}
      </button>
      
    </div>
  );
}
