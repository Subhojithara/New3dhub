"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';

export default function LoadingHero() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

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
      document.body.style.overflow = ''; // Re-enable scrolling when the component unmounts
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
    <div className="h-screen w-full overflow-hidden">
      <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted={!soundEnabled}>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute lg:bottom-12 bottom-40 left-5 m-4 text-white lg:w-96 md:w-3/4 sm:w-2/3" ref={textRef}>
        <p>We help Brands leverage traditional advertising through the biggest festivals of India, using modern-day creative strategies that impact and drive customer loyalty</p>
      </div>
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
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
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
