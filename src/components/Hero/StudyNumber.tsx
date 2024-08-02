"use client";

import React from 'react'
import AnimatedText from '../ui/AnimatedText';

function StudyNumber () {

    const phrase = "70%";

  return (
    <>
    <div className="h-mini-screen">
    <div className="flex justify-center items-center text-center">
        <h1 className="text-[40rem] font-black text-blue-600">
            <AnimatedText text={phrase} />
        </h1>
    </div>
    </div>
    </>
  )
}

export default StudyNumber