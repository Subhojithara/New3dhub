"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/StickyScroll";
import Image from "next/image";

const content = [
  {
    title: "THE BIG PROBLEM 💢",
    description:
      "Though the growth for both B2C & D2C is at it’s peak, the competition is too at a peak. Every other day there’s a new brand raising funds and rolling forward. Until unless you stand out and be a leader - someday, someone, will occupy your market cap.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-black">
        <Image
          src="/image/editing.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="THE BIG PROBLEM 💢"
        />
      </div>
    ),
  },
  {
    title: "THE SOLUTION",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-black">
        <Image
          src="/image/changes.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="THE SOLUTION"
        />
      </div>
    ),
  },
];

export function SplitScreen() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
