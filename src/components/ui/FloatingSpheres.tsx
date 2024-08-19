"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingSpheres = () => {
  const sphereRef1 = useRef<THREE.Mesh>(null);
  const sphereRef2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (sphereRef1.current) {
      sphereRef1.current.position.y = Math.sin(elapsedTime * 1.5) * 1.5;
      sphereRef1.current.rotation.y += 0.01;
    }
    if (sphereRef2.current) {
      sphereRef2.current.position.y = Math.cos(elapsedTime * 1.5) * 1.5;
      sphereRef2.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <Sphere ref={sphereRef1} position={[-2, 0, -5]} args={[1, 32, 32]}>
        <MeshWobbleMaterial attach="material" color="orange" speed={1} factor={0.6} />
      </Sphere>
      <Sphere ref={sphereRef2} position={[2, 0, -5]} args={[1, 32, 32]}>
        <MeshWobbleMaterial attach="material" color="blue" speed={1} factor={0.6} />
      </Sphere>
    </>
  );
};

export default FloatingSpheres;
