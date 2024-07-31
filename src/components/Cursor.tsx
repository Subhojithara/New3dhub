"use client";

import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circles = document.querySelectorAll<HTMLElement>(".circle");

    circles.forEach(function (circle, index) {
      (circle as any).x = 0;
      (circle as any).y = 0;
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        (circle as any).x = x;
        (circle as any).y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += ((nextCircle as any).x - x) * 0.3;
        y += ((nextCircle as any).y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    const elementsToHover = document.querySelectorAll('button, a, span, Link');

    elementsToHover.forEach(element => {
      element.addEventListener('mouseover', () => {
        circles.forEach(circle => {
          circle.classList.add('circle-hover');
        });
      });

      element.addEventListener('mouseout', () => {
        circles.forEach(circle => {
          circle.classList.remove('circle-hover');
        });
      });
    });

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      {[...Array(20)].map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
};

export default Cursor;
