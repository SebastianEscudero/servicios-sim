"use client";

import Image from "next/image";
import Link from "next/link";
import { NavigationMenuLanding } from "./navigation-menu";
import { MobileSidebar } from "./mobile-sidebar";
import { Mail, Phone } from "lucide-react";

export const LandingNavbar = () => {
    return (
        <nav className="py-3 bg-white shadow-custom-1 sticky top-0 z-50 h-[71px] border">
            <div className="flex items-center justify-between xl:mx-[10%] lg:mx-[7%] md:mx-[5%] mx-[5%] h-[40px]">
                <div className="flex items-center">
                    {/* <MobileSidebar /> */}
                    <Link href="/" className="flex items-center mr-2 ml-2">
                        <div className="mr-4 h-full w-full">
                            <Image
                                height={40}
                                width={120}
                                alt="Logo"
                                src="/logo.png"
                                loading="lazy"
                                objectFit="contain"
                            />
                        </div>
                    </Link>
                    <NavigationMenuLanding />
                </div>
                <div className="flex sm:flex-row flex-col items-center space-x-8">
                    <div className="flex flex-row items-center justify-center">
                        <Mail size={20} className="text-white fill-[#565656]" />
                        <p className="ml-3 sm:text-base text-sm text-[#565656]">jrebolledo@serviciossim.cl</p>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <Phone size={16} className="text-[#565656] fill-[#565656]" />
                        <p className="ml-3 sm:text-base text-sm text-[#565656]">+56 997460504</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}