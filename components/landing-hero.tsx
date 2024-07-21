"use client";

import { ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const LandingHero = () => {
    return (
        <div className="text-white h-[90vh] flex flex-col xl:px-[15%] lg:px-[10%] md:px-[8%] px-[5%] items-center md:text-left text-center">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    src="/hero-image.jpg"
                    alt="Hero"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="brightness-75 z-[-1]"
                />
            </div>
            <div className="text-center lg:text-left space-y-5 text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl md:mb-0 mb-5 w-full h-full items-center lg:items-start justify-center flex flex-col z-[1]">
                <h1 className="font-semibold w-full lg:w-[35vw]">
                    Expertos en Correas Transportadoras y Mantención de Equipos Mineros
                </h1>
                <p className="text-xl text-zinc-100 w-full lg:w-[35vw]">
                    Optimizamos la productividad de su operación minera con servicios especializados de corredoras y mantención de equipos. Descubre cómo podemos impulsar la eficiencia de su proyecto.
                </p>
                <Button
                    variant="sim"
                    className="lg:w-40 sm:w-1/2 w-full text-xl py-6"
                    onClick={(e) => {
                        e.preventDefault();
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    Contáctanos
                </Button>
            </div>
            <div className="mt-auto w-full hidden md:flex flex-row justify-between z-[1] pb-8 border-t pt-3 border-zinc-300">
                <div className="flex items-start space-x-2">
                    <ChevronRightCircle size={24} className="text-white fill-[#F16F0F] flex-shrink-0 mt-1" />
                    <div className="flex flex-col">
                        <span className="text-sm md:text-base font-semibold">Servicios de Corredoras</span>
                        <span className="text-sm md:text-base text-gray-300">Optimización y mantenimiento de sistemas de transporte minero</span>
                    </div>
                </div>
                <div className="flex items-start space-x-2">
                    <ChevronRightCircle size={24} className="text-white fill-[#F16F0F] flex-shrink-0 mt-1" />
                    <div className="flex flex-col">
                        <span className="text-sm md:text-base font-semibold">Mantención de Equipos</span>
                        <span className="text-sm md:text-base text-gray-300">Servicio integral para maquinaria y equipos mineros</span>
                    </div>
                </div>
                <div className="flex items-start space-x-2">
                    <ChevronRightCircle size={24} className="text-white fill-[#F16F0F] flex-shrink-0 mt-1" />
                    <div className="flex flex-col">
                        <span className="text-sm md:text-base font-semibold">Soluciones Personalizadas</span>
                        <span className="text-sm md:text-base text-gray-300">Adaptamos nuestros servicios a las necesidades específicas de su operación</span>
                    </div>
                </div>
            </div>
        </div>
    )
}