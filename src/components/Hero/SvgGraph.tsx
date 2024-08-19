"use client";

import React, { useEffect } from 'react';
import { gsap, MotionPathPlugin, ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon } from 'react-icons/fa';
import { SiSamsung } from "react-icons/si";

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const SvgGraph: React.FC = () => {
    useEffect(() => {
        // Initialize SplitType for the text reveal animation
        const splitTitle = new SplitType('.title', { types: 'words' });
        const splitDescription = new SplitType('.description', { types: 'words' });

        // Scroll-triggered line animation
        gsap.fromTo(
            '#line',
            { strokeDasharray: 1725.5, strokeDashoffset: 1725.5 },
            {
                strokeDashoffset: 0,
                duration: 2.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: '#line',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true,
                },
            }
        );

        // Animate the gradient background with a glowing effect
        gsap.fromTo(
            '#gradientPath',
            { opacity: 0, filter: 'blur(4px)' },
            { opacity: 1, duration: 2.5, ease: 'power2.inOut', filter: 'blur(0)', stroke: '#AFA4E6' }
        );

        // Permanent glowing effect behind the graph
        gsap.to('#gradientPath', {
            filter: 'drop-shadow(0px 0px 20px #8FFFFC)',
            repeat: -1,
            yoyo: true,
            duration: 3
        });

        // Animate the circles with scaling effect
        gsap.fromTo(
            '.circle',
            { scale: 0, transformOrigin: 'center', filter: 'blur(4px)' },
            { scale: 1, duration: 1.5, ease: 'back.out(1.7)', stagger: 0.2, filter: 'blur(0)', stroke: '#AFA4E6' }
        );

        // Animate floating logos with glowing effect
        gsap.fromTo(
            '.floating-logo',
            { y: 0, x: 0, filter: 'drop-shadow(0px 0px 10px #8FFFFC)', rotate: 0, },
            {

                x: 20,
                y: -30,
                duration: 2,
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true,
                filter: 'drop-shadow(0px 0px 20px #8FFFFC)',
            }
        );

        // Title and Description Animation
        gsap.fromTo(
            splitTitle.words,
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: 1.5, ease: 'power2.out', stagger: { amount: 1.5 } }
        );

        gsap.fromTo(
            splitDescription.words,
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: 1.5, ease: 'power2.out', stagger: { amount: 1.5 } }
        );


        // Additional animations for extra circles
        gsap.fromTo(
            '.extra-circle',
            { scale: 0, transformOrigin: 'center', filter: 'blur(4px)' },
            { scale: 1, duration: 1.5, ease: 'back.out(1.7)', stagger: 0.2, filter: 'blur(0)', stroke: '#8FFFFC' }
        );

    }, []);

    return (
        <div className="h-screen flex items-center justify-center relative px-4">
            <div className="absolute left-10 top-1/4 text-white max-w-[90%] lg:max-w-none">
                <h1 className="title text-3xl lg:text-4xl font-bold mb-4">Tech Giants Overview</h1>
                <p className="description text-base lg:text-xl">This graph visualizes the trajectory and influence of major technology companies over time.</p>
            </div>
            <svg className="w-full max-w-[1726px] h-auto" viewBox="0 0 1726 703" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="line" d="M967 393C649.5 357.5 477.833 588.333 414 689.5H1721V80C1453.15 102.315 1284.5 428.5 967 393Z" stroke="url(#paint0_linear_1_10)" strokeWidth="4" />
                <circle cx="677.5" cy="440.5" r="13.5" fill="white" />
                <circle cx="413.5" cy="689.5" r="13.5" fill="white" />
                <circle cx="1118.5" cy="381.5" r="13.5" fill="white" />
                <circle cx="1531.5" cy="143.5" r="13.5" fill="white" />
                <path id="line" d="M1530 118V45.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <path d="M1497.32 34V6.16H1493.48V0.399998H1504.04V34H1497.32ZM1517.73 14.272V14.512C1522.11 15.888 1524.3 18.88 1524.3 23.488C1524.3 25.824 1523.68 27.92 1522.43 29.776C1521.22 31.632 1519.86 33.04 1518.35 34H1507.41V28.432H1515.66C1516.05 28.08 1516.48 27.376 1516.96 26.32C1517.44 25.264 1517.68 24.192 1517.68 23.104C1517.68 21.088 1516.96 19.6 1515.52 18.64H1511.63V13.408L1517.44 6.688L1517.2 6.16H1507.6V0.399998H1519.17C1521.89 1.552 1523.25 3.376 1523.25 5.872C1523.25 7.792 1522.37 9.632 1520.61 11.392L1517.73 14.272ZM1542.74 34H1533.58C1531.43 31.856 1529.88 29.328 1528.92 26.416C1527.99 23.504 1527.53 20.592 1527.53 17.68C1527.53 10.224 1529.54 4.464 1533.58 0.399998H1542.74C1544.86 2.544 1546.39 5.072 1547.35 7.984C1548.31 10.864 1548.79 13.744 1548.79 16.624C1548.79 24.176 1546.78 29.968 1542.74 34ZM1540.25 6.16H1536.12C1534.71 9.04 1534.01 12.704 1534.01 17.152C1534.01 21.6 1534.7 25.36 1536.07 28.432H1540.3C1541.67 24.912 1542.36 21.04 1542.36 16.816C1542.36 12.592 1541.66 9.04 1540.25 6.16ZM1561.57 20.608H1554.56C1551.84 17.856 1550.48 14.592 1550.48 10.816C1550.48 6.4 1551.84 2.928 1554.56 0.399998H1561.57C1564.29 2.928 1565.65 6.4 1565.65 10.816C1565.65 14.592 1564.29 17.856 1561.57 20.608ZM1557.01 5.008C1556.14 6.48 1555.71 8.336 1555.71 10.576C1555.71 12.784 1556.14 14.624 1557.01 16.096H1559.12C1559.98 14.528 1560.42 12.688 1560.42 10.576C1560.42 8.432 1559.98 6.576 1559.12 5.008H1557.01ZM1582.69 34H1575.68C1572.96 31.248 1571.6 27.984 1571.6 24.208C1571.6 19.792 1572.96 16.32 1575.68 13.792H1582.69C1585.41 16.32 1586.77 19.792 1586.77 24.208C1586.77 27.984 1585.41 31.248 1582.69 34ZM1578.13 18.4C1577.26 19.872 1576.83 21.728 1576.83 23.968C1576.83 26.176 1577.26 28.016 1578.13 29.488H1580.24C1581.1 27.92 1581.54 26.08 1581.54 23.968C1581.54 21.824 1581.1 19.968 1580.24 18.4H1578.13ZM1560.61 34L1571.26 0.399998H1576.69L1565.84 34H1560.61Z" fill="white" />
                <path d="M0 689.5H1725.5" stroke="white" strokeWidth="4" />
                <rect width="8" height="615" transform="translate(1718 77)" fill="#040D12" />
                <path id="line" d="M415 669V596.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <path d="M387.96 582.2L397.512 559.496L397.368 559.16H388.968V553.4H399.336C402.12 554.584 403.512 556.472 403.512 559.064C403.512 560.472 403.16 562.072 402.456 563.864C402.264 564.408 402.104 564.856 401.976 565.208C401.848 565.56 401.64 566.072 401.352 566.744C401.064 567.384 400.856 567.864 400.728 568.184C400.184 569.432 399.672 570.584 399.192 571.64L394.872 581.432H403.272V587H387.96V582.2ZM421.041 587H411.873C409.729 584.856 408.177 582.328 407.217 579.416C406.289 576.504 405.825 573.592 405.825 570.68C405.825 563.224 407.841 557.464 411.873 553.4H421.041C423.153 555.544 424.689 558.072 425.649 560.984C426.609 563.864 427.089 566.744 427.089 569.624C427.089 577.176 425.073 582.968 421.041 587ZM418.545 559.16H414.417C413.009 562.04 412.305 565.704 412.305 570.152C412.305 574.6 412.993 578.36 414.369 581.432H418.593C419.969 577.912 420.657 574.04 420.657 569.816C420.657 565.592 419.953 562.04 418.545 559.16ZM439.865 573.608H432.857C430.137 570.856 428.777 567.592 428.777 563.816C428.777 559.4 430.137 555.928 432.857 553.4H439.865C442.585 555.928 443.945 559.4 443.945 563.816C443.945 567.592 442.585 570.856 439.865 573.608ZM435.305 558.008C434.441 559.48 434.009 561.336 434.009 563.576C434.009 565.784 434.441 567.624 435.305 569.096H437.417C438.281 567.528 438.713 565.688 438.713 563.576C438.713 561.432 438.281 559.576 437.417 558.008H435.305ZM460.985 587H453.977C451.257 584.248 449.897 580.984 449.897 577.208C449.897 572.792 451.257 569.32 453.977 566.792H460.985C463.705 569.32 465.065 572.792 465.065 577.208C465.065 580.984 463.705 584.248 460.985 587ZM456.425 571.4C455.561 572.872 455.129 574.728 455.129 576.968C455.129 579.176 455.561 581.016 456.425 582.488H458.537C459.401 580.92 459.833 579.08 459.833 576.968C459.833 574.824 459.401 572.968 458.537 571.4H456.425ZM438.905 587L449.561 553.4H454.985L444.137 587H438.905Z" fill="white" />
                <defs>
                    <linearGradient id="paint0_linear_1_10" x1="1721" y1="80" x2="414" y2="690" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8FFFFC" />
                        <stop offset="0.493729" stopColor="#BAC7F6" />
                        <stop offset="1" stopColor="#AFA4E6" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="absolute bottom-[8.8rem] right-[20.5rem]">
                <svg width="60" height="31" viewBox="0 0 90 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01163 13C0.907077 12.9936 0.00645566 13.8838 3.38554e-05 14.9884C-0.00638795 16.0929 0.883821 16.9935 1.98837 17L2.01163 13ZM89.406 16.9224C90.1915 16.1459 90.1989 14.8796 89.4224 14.094L76.7687 1.29233C75.9922 0.506751 74.7259 0.499389 73.9403 1.27588C73.1547 2.05238 73.1474 3.31869 73.9239 4.10426L85.1716 15.4836L73.7923 26.7313C73.0068 27.5078 72.9994 28.7741 73.7759 29.5597C74.5524 30.3453 75.8187 30.3526 76.6043 29.5761L89.406 16.9224ZM1.98837 17L87.9884 17.5L88.0116 13.5L2.01163 13L1.98837 17Z" fill="white" />
                </svg>
            </div>
            <div className="absolute bottom-36 right-20">
                <p className="w-60 text-white">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="absolute right-60 top-36 lg:right-60 lg:top-36">
                <FaApple className="floating-logo bg-white p-2 rounded-full text-black" size={60} />
            </div>
            <div className="absolute right-20 top-16 lg:right-10 lg:top-12">
                <SiSamsung className="floating-logo bg-white p-2 rounded-full text-black" size={60} />
            </div>
            <div className="absolute right-96 top-60 lg:right-96 lg:top-60">
                <FaGoogle className="floating-logo bg-white p-2 rounded-full text-black" size={60} />
            </div>
            <div className="absolute right-[36rem] top-80 lg:right-[35rem] lg:top-[19.6rem]">
                <FaMicrosoft className="floating-logo bg-white p-2 rounded-full text-black" size={60} />
            </div>
            <div className="absolute right-1/2 transform -translate-x-1/2">
                <FaAmazon className="floating-logo bg-white p-2 rounded-full text-black" size={60} />
            </div>
        </div>
    );
};

export default SvgGraph;
