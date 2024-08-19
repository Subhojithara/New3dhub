"use client";

import React from 'react';
import { HoverEffect } from '../ui/card-hover-effect';
import { FaShoppingCart } from 'react-icons/fa';
import { TbReceiptRupee } from "react-icons/tb";
import { AiFillSignal } from "react-icons/ai";
import { LuBarChartBig } from "react-icons/lu";
import { PiHandsClappingFill } from "react-icons/pi";
import ScrollAnimatedText from '../ui/ScrollAnimatedText';
import ScrollTextAnimation from '../ui/ScrollTextAnimation';

const projects = [
  {
    icon: FaShoppingCart,
    description: "India has the third-largest digital shopping base (600 million internet users and 185 million online shoppers)",
    link: "https://stripe.com",
  },
  {
    icon: AiFillSignal,
    description: "India is home to 600+ D2C brands with an estimated market size of over $66 billion in 2023",
    link: "https://netflix.com",
  },
  {
    icon: TbReceiptRupee,
    description: "In 2021, about 105 deals were invested worth $2.14B in D2C brands in India",
    link: "https://google.com",
  },
  {
    icon: LuBarChartBig,
    description: "The Indian D2C market is speculated to grow at a CAGR of 34.5% during the forecast period of 2022-2027",
    link: "https://meta.com",
  },
  {
    icon: PiHandsClappingFill,
    description: "Consumer obsessed brands will experience highest engagement in the next upcoming years if their marketing, advertising and product-market fit goes all right",
    link: "https://amazon.com",
  },
  {
    icon: FaShoppingCart,
    description: "India has the third-largest digital shopping base (600 million internet users and 185 million online shoppers)",
    link: "https://stripe.com",
  },
];

const Line = "“Over 70% of purchases are influenced via well physical brand awareness and digital interactions from brands, consumers already know about.”"
const Line2 = "Overall advertising impact is at high if the advertising starts with traditional & physical marketing and nudges the customers further via digital advertising."
const Head = "STUDY TIME"

function ItemsStats() {
  return (
    <div className="h-mini-screen">
      <div className="flex justify-center items-center">
        <div className=" h-10 border border-black/40"></div>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className="justify-center items-center font-black text-center lg:text-7xl text-2xl">
        <ScrollTextAnimation text={Head} />
      </div>
      <div className="flex justify-center items-center text-center lg:text-4xl text-xl font-normal lg:font-medium p-2 text-black">
        <div className="w-[80rem]">
        <h1> As per Emarketer and <span className="font-['Merriweather'] lg:text-6xl text-2xl font-normal p-3 text-white bg-black hover:scale-95 duration-100">Forbes</span></h1>
          <ScrollAnimatedText text={Line} />
          <ScrollAnimatedText text={Line2} />
        </div>
      </div>
    </div>
  );
}


export default ItemsStats;