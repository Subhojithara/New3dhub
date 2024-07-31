"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        videoRef.current?.play();
        setIsPlaying(true);
      } else {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 20;
      const rotateX = (0.5 - y) * 20;

      gsap.to(card, { rotateY, rotateX, duration: 0.2, ease: 'power1.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.2, ease: 'power1.out' });
    };

    card?.addEventListener('mousemove', handleMouseMove);
    card?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card?.removeEventListener('mousemove', handleMouseMove);
      card?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    gsap.to(card, { opacity: isPlaying ? 1 : 0, scale: isPlaying ? 1 : 0.8, duration: 1, ease: 'elastic.out(1, 0.3)' });
  }, [isPlaying]);

  return (
    <div className="flex justify-center items-center h-[40rem] w-full max-w-[80rem] mx-auto my-20 px-4">
      <div ref={cardRef} className="relative h-full w-full border-5 shadow-2xl rounded-3xl overflow-hidden transition-opacity duration-500">
        <video
          ref={videoRef}
          src="/videos/video.mp4"
          className="absolute h-full w-full object-cover shadow-2xl rounded-3xl"
          muted
          playsInline
          loop
        />
      </div>
    </div>
  );
};

export default VideoSection;
