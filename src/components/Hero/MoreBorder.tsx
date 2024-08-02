"use client";

import React from 'react'
import AnimatedText from '@/components/ui/AnimatedText';


function MoreBorder () {

  const phrase = "2025 and forward is all set to bring in more revolution for the B2C & D2C Brands. The growth is as it’s peak!";
  
  return (
    <div className="mt-10 mb-10">
      <div className="flex justify-center items-center text-center">
        <div className="w-[28rem] border border-black/45 rounded-full"></div>
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="h-[10rem] border border-black/45 rounded-full"></div>
      </div>
      <div className="flex justify-center items-center text-center text-2xl mt-10">
        <div className="w-[44rem]">
        <AnimatedText text={phrase} />
        </div>
      </div>
    </div>
  )
}

export default MoreBorder