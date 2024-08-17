"use client";

import react from 'react';
import RotatingElements from '../ui/RotatingElements';
import Image from 'next/image';


const CardContainer = () => {


    return (
        <div className="min-h-screen w-screen bg-neutral-950">
            <div className="flex justify-center items-center">
                <div className="w-[80rem]">
                    <div className="card bg-white h-[35rem] sticky border border-gray-300 rounded-2xl top-[10px] flex">
                        <div className="bg-green-500 rounded-2xl h-full w-[42rem]">
                            <h1 className="text-5xl text-white font-extrabold w-[40rem] font-[Montserrat] absolute top-16 left-5 uppercase">
                                There are thousands of digital marketing and advertising consulting firms and experts in India if you need.
                            </h1>
                            <div className="w-[40rem] border border-white absolute top-96 left-4"></div>
                            <button className="border h-14 w-52 text-xl font-semibold text-green-700 rounded-2xl bg-white absolute top-[26rem] left-5 hover:scale-100 duration-100 shadow-lg">
                                Contact Us
                            </button>
                        </div>
                        <div className="absolute top-20 right-8">
                            <Image
                                src="/image/marketing.svg"
                                alt="vignette image"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="card bg-green-500/40 backdrop-blur-md h-[35rem] sticky border border-gray-300 rounded-2xl top-[20px] mt-16 justify-center items-center flex">
                        <h1 className="text-5xl w-[68rem] font-semibold text-white text-center">
                            But agencies and experts who understands how to leverage traditional marketing for modern day brands and their audience, is really really rare and hard to find.
                        </h1>
                    </div>
                    <div className="card bg-green-500 h-[35rem] sticky border text-white border-gray-300 rounded-2xl top-[30px] mt-16 justify-center items-center flex">
                        <h1 className="text-9xl w-[58rem] font-bold absolute leading-[10rem] uppercase right-32">And do you know Why?</h1>
                        <p className="text-lg font-medium">Simply because of the Covid wave everyone thinks Digital is the king. But covid said goodbye, but traditional creatives isn’t.</p>
                    </div>
                    <div className="card bg-black backdrop-blur-md h-[35rem] sticky border border-gray-300 rounded-2xl top-[40px] mt-16 flex">
                        <div className="bg-green-500  rounded-2xl h-full w-[42rem] absolute right-0">
                            <h1 className="text-4xl text-white font-extrabold w-[40rem] font-[Montserrat] absolute top-16 right-0 uppercase">
                                And now is the best time to leverage traditional marketing at it’s best. Why?
                            </h1>
                            <p className="absolute top-60 right-5 w-[38rem] text-2xl font-light text-white">
                                Everyone is focused on digital, making traditional marketing the most cost effective marketing channel specifically for B2C and D2C industry.
                            </p>
                            <div className="w-[40rem] border border-white absolute top-96 left-4"></div>
                            <button className="border h-14 w-52 text-xl font-semibold text-green-700 rounded-2xl bg-white absolute top-[26rem] right-[26rem] hover:scale-100 duration-100 shadow-lg">
                                Contact Us
                            </button>
                        </div>
                        <div className="absolute top-20 left-8 drop-shadow-white-xl shadow-white">
                            <Image
                                src="/image/marketing2.svg"
                                alt="vignette image"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="card bg-green-500 h-[35rem] sticky border text-white border-gray-300 rounded-2xl top-[40px] mt-16 justify-center items-center flex">
                        <h1 className="text-5xl font-bold w-[40rem] absolute top-40 left-8">
                            BUT TRADITIONAL ISN’T SIMPLE ANYMORE.
                        </h1>
                        <div className="border border-white absolute top-96 w-full"></div>
                        <p className="text-center w-full p-8 text-xl font-light absolute  bottom-5">
                            With the rise of digital and creative marketing at it’s best, you can’t just put up a banner on the highways and expect your business to grow. Understanding the market, and building a marketing workflow that gets in customers with creativity and right strategy is the only key to <span className="font-black text-2xl">SUCCESS.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
