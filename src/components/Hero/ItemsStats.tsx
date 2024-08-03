"use client";

import React from 'react';
import { HoverEffect } from '../ui/card-hover-effect';
import { FaShoppingCart } from 'react-icons/fa';
import { TbReceiptRupee } from "react-icons/tb";
import { AiFillSignal } from "react-icons/ai";
import { LuBarChartBig } from "react-icons/lu";
import { PiHandsClappingFill } from "react-icons/pi";

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
];

function ItemsStats() {
  return (
    <div className="h-mini-screen">
      <div className="flex justify-center items-center">
      <div className=" h-10 border border-black/40"></div>
      </div>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}

export default ItemsStats;
