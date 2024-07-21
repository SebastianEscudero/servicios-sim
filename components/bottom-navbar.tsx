"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export const BotNavbar = () => {
    return (
        <footer className="bg-[#1C1C1E] text-white py-20">
            <div className="flex md:text-left text-center md:space-y-0 space-y-5 md:flex-row flex-col xl:mx-[15%] mx-[10%] text-xl justify-between pb-10 pt-10 md:space-x-4">
                <div className="flex flex-col space-y-4">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={200}
                        alt="Logo"
                    />
                    <p className="sm:text-base text-sm font-semibold">
                        Servicios Industriales Mineros
                    </p>
                    <p className="sm:text-base text-sm">
                        © 2024. Todos los derechos reservados.
                    </p>
                </div>
                <div className="flex flex-col justify-start space-y-2 pt-4">
                    <div className="flex flex-col justify-start space-y-2 text-zinc-200">
                        <h2 className="text-lg font-semibold">Contacto</h2>
                        <div className="flex flex-row items-center justify-start">
                            <Mail size={20} className="fill-white text-black" />
                            <p className="ml-3 sm:text-base text-sm">jrebolledo@serviciossim.cl</p>
                        </div>
                        <div className="flex flex-row items-center justify-start">
                            <Phone size={16} className=" fill-white" />
                            <p className="ml-3 sm:text-base text-sm">+56 997460504</p>
                        </div>
                        <div className="flex flex-row items-center justify-start">
                            <Phone size={16} className=" fill-white" />
                            <p className="ml-3 sm:text-base text-sm">+56 229549700</p>
                        </div>
                        <div className="flex flex-row items-center justify-start">
                            <MapPin size={16} className=" fill-white" />
                            <p className="ml-3 sm:text-base text-sm">Camino Santa Esther, Los Parrales Parcela 9, Colina Santiago.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}