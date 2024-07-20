"use client";

import Image from "next/image";
import { BlogSection } from "./blog-section";
import { Button } from "./ui/button";

export const LandingContent = () => {
    return (
        <div>
            <div id="about" className="md:py-14 lg:py-16 py-10">
                <BlogSection
                    title="Diseño, Impresiones y Estampados, lo que tú necesites."
                />
            </div>
            <BlogSection
                title="Estampados"
                text="Estampados de Productos para Regalos de todo tipo. Tazones, Mug térmicos, Llaveros, Tazones Lanyard , Morrales y más. Cada producto se realiza de forma personalizada con las imagenes, diseños o fotos que necesites."
                img="/hero-image.jpg"
                side="right"
            />
            <BlogSection
                title="Diseño"
                text="Diseño desde el logo de tu emprendimiemto hasta las piezas gráficas para tú contenido en Redes sociales. Desarrollo y asesoría en todo el proceso, trabajo de forma personalizada de acuerdo a cada emprendedora y sus requerimientos."
                img="/hero-image.jpg"
                side="right"
            />
            <BlogSection
                title="Impresiones"
                text="Impresiones de todo tipo. Para emprendedoras y clientas que necesiten impresiones de calidad. Tarjetas, Stickers, Etiquetas, Flyers , Cuadros QR, Gift Card, Tags, Etiquetas adhesivas, Etiquetas para colgar, Imanes. Para Souvenirs y Recuerdos Babyshower, Bautizos, primera comunión Matrimonios , cumpleaños y aniversarios."
                img="/hero-image.jpg"
                side="right"
            />
            <BlogSection
                title="Para cotizar impresiones"
                text="Para cotizaciones de impresiones porfavor enviar las medidas del alto y del ancho. Y las cantidades para poder ayudarte."
            />
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
                <div className="text-center space-y-5 text-5xl xl:text-5xl 2xl:text-6xl w-full h-full items-center justify-center flex flex-col z-[1]">
                    <p className="text-3xl text-zinc-100 w-full lg:w-[35vw]">
                        Trabajemos Juntos
                    </p>
                    <h1 className="font-semibold text-5xl w-full lg:w-[35vw]">
                        Construyendo un futuro confiable y seguro
                    </h1>
                    <p className="text-lg text-zinc-100 w-full font-semibold lg:w-[35vw]">
                        En SIM, nos especializamos en optimizar las operaciones mineras a través de nuestra experiencia en correas transportadoras y mantención de equipos. Confíe en nosotros para mantener sus correas transportadoras y equipos mineros funcionando al máximo rendimiento.
                    </p>
                    <Button
                        variant="sim"
                        className="lg:w-40 sm:w-1/2 w-full text-xl py-6"
                    >
                        Contáctanos
                    </Button>
                </div>
            </div>
        </div>
    )
}