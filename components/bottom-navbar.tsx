"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";

export const BotNavbar = () => {
    const pathname = usePathname();
    return (
        <footer className="bg-[#1C1C1E] text-white py-20">
            <div className="flex md:text-left text-center md:space-y-0 space-y-5 md:flex-row flex-col xl:mx-[15%] mx-[10%] text-xl justify-between pb-10 pt-10 md:space-x-4">
                <ul className="space-y-2">
                    <li className="font-semibold mb-2 text-2xl underline">Horario de atención</li>
                    <li>Lunes a Viernes 9:00 a 19:00</li>
                    <li>Sábado cerrado</li>
                    <li>Domingo cerrado</li>
                    <li>Festivos cerrado</li>
                </ul>
                <ul className="space-y-3">
                    <li>
                        <Link
                            className="text-xl hover:underline"
                            href="/about-us"
                        >
                            <Button
                                className='text-xl font-semibold'
                                variant={pathname === "/about-us" ? 'secondary' : 'ghostDark'}
                            >
                                ¿Quienés somos?
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-xl hover:underline"
                            href="/faq"
                        >
                            <Button
                                className='text-xl font-semibold'
                                variant={pathname === "/faq" ? 'secondary' : 'ghostDark'}
                            >
                                Preguntas frecuentes
                            </Button>
                        </Link>
                    </li>
                </ul>
                <div className="flex flex-col justify-start space-y-2 pt-4">
                    <div className="flex flex-row justify-start items-center">
                        <Image
                            src="/logo.png"
                            width={100}
                            height={100}
                            alt="Logo"
                        />
                        <p className="ml-1">

                        </p>
                    </div>
                    <div className="flex flex-col justify-start space-y-2 text-zinc-200">
                        <div className="flex flex-row items-center justify-start">
                            <Mail size={20} className="fill-white text-black" />
                            <p className="ml-3 sm:text-base text-sm">jrebolledo@serviciossim.cl</p>
                        </div>
                        <div className="flex flex-row items-center justify-start">
                            <Phone size={16} className=" fill-white" />
                            <p className="ml-3 sm:text-base text-sm">+56 997460504</p>
                        </div>
                        <p className="sm:text-base text-sm">
                            © 2024. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    )
}