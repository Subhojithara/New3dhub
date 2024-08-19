"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingSpheres from '@/components/ui/FloatingSpheres';

const Floating3DImages = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <FloatingSpheres />
      </Canvas>
    </div>
  );
};

export default Floating3DImages;
