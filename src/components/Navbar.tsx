"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={cn(
                "fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300",
                isVisible ? "translate-y-0" : "-translate-y-40",
                className
            )}
        >
            <Menu setActive={setActive}>
                <Link href={"/home"}>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>
                <Link href={"/about"}>
                    <MenuItem setActive={setActive} active={active} item="About" />
                </Link>
                <Link href={"/festivals"}>
                    <MenuItem setActive={setActive} active={active} item="Festival" />
                </Link>
                <Link href={"/service"}>
                    <MenuItem setActive={setActive} active={active} item="Services" />
                </Link>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us" />
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar;