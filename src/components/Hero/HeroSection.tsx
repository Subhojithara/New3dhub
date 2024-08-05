"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `We help Brands leverage traditional advertising through the biggest festivals of India, using modern-day creative strategies that impact and drive customer loyalty`;

const HeroSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMountRef = mountRef.current;

    const vertexShader = `
      precision mediump float;

      uniform float uTime;

      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;
        float dist = distance(uv, vec2(0.5, 0.5));
        pos.z += sin(uv.x * 10.0 + uTime) * 0.5;
        pos.z += sin(uv.y * 10.0 + uTime) * 0.5;
        pos.z += (1.0 - dist) * 2.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;

      uniform float uTime;

      varying vec2 vUv;

      void main() {
        vec3 color = vec3(0.95);
        float x = vUv.x + uTime * 0.1;
        float y = vUv.y + uTime * 0.1;

        color.r = sin(x * 10.0) * 0.5 + 0.5;
        color.g = sin(y * 10.0) * 0.5 + 0.5;
        color.b = sin((x + y) * 10.0) * 0.5 + 0.5;

        gl_FragColor = vec4(color * 0.8 + 0.2, 1.0);
      }
    `;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xf9f9f9, 1);
    if (currentMountRef) {
      currentMountRef.appendChild(renderer.domElement);
    }

    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      side: THREE.DoubleSide,
      transparent: true,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const animate = () => {
      material.uniforms.uTime.value += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (currentMountRef) {
        currentMountRef.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative flex justify-center items-center lg:min-h-screen h-[40rem] mx-auto w-screen bg-white">
      <div ref={mountRef} className="absolute top-0 left-0 w-full h-full blur-3xl"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center p-4">
        <h1 className="lg:text-8xl text-4xl font-bold leading-tight text-white">
          Bringing Your
          <div className="flex flex-wrap space-x-6 justify-center">
            <span>Dream Into</span>
            <span className="text-green-400"> Reality</span>
          </div>
        </h1>
        <div className="lg:w-[50rem] lg:text-xl lg:font-extralight w-96 text-xs font-semibold text-white">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;