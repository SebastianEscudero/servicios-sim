"use client";

import { BlogSection } from "./blog-section";

export const LandingContent = () => {
    return (
        <div className="bg-gray-300">
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
            <div className="my-20 flex justify-center items-center">
                <h2 className="font-cursive text-6xl md:text-8xl text-center">Clientas felices</h2>
            </div>
        </div>
    )
}