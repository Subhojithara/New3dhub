"use client";

import react from 'react';

const CardContainer = () => {


    return (
        <div className="min-h-screen w-screen bg-neutral-950 pb-20">
            <div className="flex justify-center items-center">
            <div className="w-[80rem]">
                <div className="card bg-white h-[35rem] sticky border border-gray-300 rounded-2xl top-[10px]">
                </div>
                <div className="card bg-white h-[35rem] sticky border border-gray-300 rounded-2xl top-[20px] mt-16">
                </div>
                <div className="card bg-white h-[35rem] sticky border border-gray-300 rounded-2xl top-[30px] mt-16">
                </div>
                <div className="card bg-white h-[35rem] sticky border border-gray-300 rounded-2xl top-[40px] mt-16">
                </div>
                <div className="card bg-white h-[35rem] sticky top-[40px] mt-16">
                </div>
            </div>
            </div>
        </div>
    );
};

export default CardContainer;
