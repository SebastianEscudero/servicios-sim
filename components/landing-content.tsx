"use client";

import Image from "next/image";
import { WhoWeAre } from "./who-we-are";
import SolutionsSection from "./solutions-section";
import ContactForm from "./contact-form";

export const LandingContent = () => {
    return (
        <div className="md:py-14 lg:py-16 py-10">
            <WhoWeAre />
            <SolutionsSection />
            <div className="text-white h-[80vh] flex flex-col xl:px-[15%] lg:px-[10%] md:px-[8%] px-[5%] items-center text-center">
                <div className="absolute w-full h-full">
                    <Image
                        src="/bottom-hero-image.jpg"
                        alt="Hero"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="brightness-50 z-[-1]"
                    />
                </div>
                <div id="contact" className="text-center space-y-5 text-5xl xl:text-5xl 2xl:text-6xl w-full h-full items-center justify-center flex flex-col z-[1]">
                    <p className="text-3xl text-zinc-100 w-full lg:w-[35vw]">
                        Trabajemos Juntos
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}