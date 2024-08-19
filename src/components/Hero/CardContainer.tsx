"use client";

import React from "react";
import Image from "next/image";

const CardContainer = () => {
    return (
        <div className="min-h-screen w-full bg-neutral-950">
            <div className="flex justify-center items-center px-4 sm:px-8 md:px-16 pb-10">
                <div className="w-full lg:w-[80rem]">
                    <div className="card bg-white h-[35rem] lg:h-[30rem] xl:h-[35rem] sticky border border-gray-300 rounded-2xl top-[10px] flex flex-col md:flex-row">
                        <div className="bg-green-500 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none h-full w-full md:w-[42rem] p-5 relative">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold font-[Montserrat] uppercase">
                                There are thousands of digital marketing and advertising consulting firms and experts in India if you need.
                            </h1>
                            <div className="w-full md:w-[40rem] border border-white mt-6 md:absolute md:top-96 md:left-4"></div>
                            <button className="border h-12 sm:h-14 w-full sm:w-52 text-sm sm:text-xl font-semibold text-green-700 rounded-2xl bg-white mt-6 md:absolute md:top-[26rem] md:left-5 hover:scale-100 duration-100 shadow-lg">
                                Contact Us
                            </button>
                        </div>
                        <div className="relative mt-8 md:mt-0 md:ml-4 md:mr-8 lg:absolute lg:top-20 lg:right-8">
                            <Image
                                src="/image/marketing.svg"
                                alt="vignette image"
                                width={500}
                                height={500}
                                className="mx-auto md:mx-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
                            />
                        </div>
                    </div>

                    <div className="card bg-green-500/40 backdrop-blur-md h-[35rem] lg:h-[30rem] xl:h-[35rem] sticky border border-gray-300 rounded-2xl top-[20px] mt-16 flex justify-center items-center px-4">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white text-center">
                            But agencies and experts who understand how to leverage traditional marketing for modern-day brands and their audience, is really rare and hard to find.
                        </h1>
                    </div>

                    <div className="card bg-green-500/50 backdrop-blur-lg h-[35rem] sticky border text-white border-gray-300 rounded-2xl top-[30px] mt-16 justify-center items-center lg:flex">
                        <div className="lg:space-y-0 space-y-10 lg:flex justify-center items-center mt-10">
                        <h1 className="lg:text-9xl text-5xl lg:w-[58rem] text-center font-bold lg:absolute lg:leading-[10rem] leading-[4rem] uppercase lg:right-32">
                            And do you know Why?
                        </h1>
                        <p className="lg:text-lg text-xl font-medium text-center">
                            Simply because of the Covid wave everyone thinks Digital is the king. But covid said goodbye, but traditional creatives isn’t.
                        </p>
                        </div>
                    </div>

                    <div className="card bg-white backdrop-blur-md h-[40rem] lg:h-[30rem] xl:h-[35rem] sticky border border-gray-300 rounded-2xl top-[40px] mt-16 flex flex-col md:flex-row-reverse">
                        <div className="bg-green-500 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none h-full w-full  md:w-[42rem] p-5 relative">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold lg:pt-4 font-[Montserrat] uppercase text-center lg:text-right">
                                And now is the best time to leverage traditional marketing at its best. Why?
                            </h1>
                            <p className="text-xl font-light text-white mt-6 lg:pt-4 md:absolute md:top-60 md:right-5 w-full md:w-[38rem] text-right">
                                Everyone is focused on digital, making traditional marketing the most cost-effective marketing channel specifically for B2C and D2C industry.
                            </p>
                            <div className="w-full md:w-[40rem] border border-white mt-6 md:absolute md:top-96 md:left-4"></div>
                            <button className="border h-12 sm:h-14 w-full sm:w-52 text-sm sm:text-xl font-semibold text-green-700 rounded-2xl bg-white mt-6 md:absolute md:top-[26rem] md:right-[26rem] hover:scale-100 duration-100 shadow-lg">
                                Contact Us
                            </button>
                        </div>
                        <div className="relative mt-8 md:mt-0 md:ml-4 md:mr-8 lg:absolute lg:top-20 lg:left-8 drop-shadow-white-xl shadow-white">
                            <Image
                                src="/image/marketing2.svg"
                                alt="vignette image"
                                width={500}
                                height={500}
                                className="mx-auto md:mx-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
                            />
                        </div>
                    </div>

                    <div className="card bg-green-500 h-[35rem] lg:h-[30rem] xl:h-[35rem] sticky border text-white border-gray-300 rounded-2xl top-[40px] mt-16 flex flex-col justify-center items-center px-4">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl lg:text-left font-bold text-center lg:w-[40rem] absolute lg:absolute lg:left-10 top-20 lg:top-32">
                            BUT TRADITIONAL ISN’T SIMPLE ANYMORE.
                        </h1>
                        <div className="border border-white w-full mt-8 lg:mt-60"></div>
                        <p className="text-center w-full p-4 sm:p-8 text-lg sm:text-xl font-light absolute bottom-5">
                            With the rise of digital and creative marketing at its best, you can’t just put up a banner on the highways and expect your business to grow. Understanding the market and building a marketing workflow that gets in customers with creativity and the right strategy is the only key to <span className="font-black text-2xl">SUCCESS.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
