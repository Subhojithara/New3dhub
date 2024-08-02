"use client";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const LogoCarousel = () => {
    const carouselRef = useRef<HTMLUListElement>(null);
    const controls = useAnimation();

    useEffect(() => {
        if (carouselRef.current) {
            const carousel = carouselRef.current;
            const totalWidth = carousel.scrollWidth / 2; // Since we have duplicated the icons, use half of scrollWidth

            controls.start({
                x: [-totalWidth, 0],
                transition: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 15, // Adjust the duration as needed for the scroll speed
                    ease: 'linear',
                },
            });
        }
    }, [controls]);

    return (
        <div className="relative h-40 flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden">
                        <motion.ul
                            ref={carouselRef}
                            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
                            initial={{ x: 0 }}
                            animate={controls}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                        >
                            {/* Icons */}
                            <li>
                                <Image className="h-10 w-auto" src="/icons/boat.png" alt="boat" width={100} height={40} />
                            </li>
                            <li>
                                <Image className="h-10 w-auto" src="/icons/audi.png" alt="Audi" width={100} height={40} />
                            </li>
                            <li>
                                <Image
                                    className="h-24 w-auto"
                                    src="/icons/Disney+ Hotstar.png"
                                    alt="Disney+ Hotstar"
                                    width={240}
                                    height={40}
                                />
                            </li>
                            <li>
                                <Image
                                    className="h-20 w-auto"
                                    src="/icons/RoyalEnfield.png"
                                    alt="RoyalEnfield"
                                    width={200}
                                    height={40}
                                />
                            </li>
                            <li>
                                <Image className="h-10 w-auto" src="/icons/airbnb.png" alt="Airbnb" width={100} height={40} />
                            </li>
                            {/* Duplicate the icons to create a seamless loop */}
                            <li>
                                <Image className="h-10 w-auto" src="/icons/boat.png" alt="boat" width={100} height={40} />
                            </li>
                            <li>
                                <Image className="h-10 w-auto" src="/icons/audi.png" alt="Audi" width={100} height={40} />
                            </li>
                            <li>
                                <Image
                                    className="h-24 w-auto"
                                    src="/icons/Disney+ Hotstar.png"
                                    alt="Disney+ Hotstar"
                                    width={240}
                                    height={40}
                                />
                            </li>
                            <li>
                                <Image
                                    className="h-20 w-auto"
                                    src="/icons/RoyalEnfield.png"
                                    alt="RoyalEnfield"
                                    width={200}
                                    height={40}
                                />
                            </li>
                            <li>
                                <Image className="h-10 w-auto" src="/icons/airbnb.png" alt="Airbnb" width={100} height={40} />
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
