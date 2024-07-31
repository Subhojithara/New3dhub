"use client";
import Image from 'next/image';

const LogoCarousel = () => {


    return (
        <div className="relative h-40 flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            <li><Image className="h-10 w-auto" src="/icons/boat.png" alt="boat" width={100} height={40} /></li>
                            <li><Image className="h-10 w-auto" src="/icons/audi.png" alt="Audi" width={100} height={40} /></li>
                            <li><Image className="h-24 w-auto" src="/icons/Disney+ Hotstar.png" alt="Disney+ Hotstar" width={240} height={40} /></li>
                            <li><Image className="h-20 w-auto" src="/icons/RoyalEnfield.png" alt="RoyalEnfield" width={200} height={40} /></li>
                            <li><Image className="h-10 w-auto" src="/icons/airbnb.png" alt="Airbnb" width={100} height={40} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
