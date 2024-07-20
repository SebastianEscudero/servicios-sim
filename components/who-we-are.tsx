import { Button } from "./ui/button";
import Link from "next/link";

export const WhoWeAre = () => {
    return (
        <div className="pb-20 drop-shadow-lg">
            <div className="flex flex-col px-10 bg-zinc-100 rounded-md lg:py-10 pb-10 border xl:mx-[10%] mx-[2%] text-[#1c1c1e] p-4">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 lg:pt-0 pt-10">
                        <h2 className="px-8 text-3xl xl:text-4xl text-left font-semibold">
                            Proporcionando soluciones confiables
                        </h2>
                        <h3 className="text-zinc-500 px-8 text-lg xl:text-xl text-left">
                            SIM Servicios Industriales Mineros es líder en 
                            proporcionar soluciones para correas transportadoras 
                            y mantención de equipos en la industria minera.
                        </h3>
                        <h2 className="px-8 text-2xl xl:text-3xl text-left">
                            Nuestros Principios Fundamentales:
                        </h2>
                        <div className="px-8 text-xl xl:text-2xl text-left">
                            Soluciones Personalizadas:
                            <div className="flex flex-col space-y-2 text-zinc-600 justify-start text-sm xl:text-base mt-2">
                                <span>✓ Adaptadas a las necesidades únicas de cada operación.</span>
                                <span>✓ Diseñadas para mejorar la eficiencia y durabilidad.</span>
                            </div>
                        </div>
                        <div className="px-8 text-xl xl:text-2xl text-left">
                            Experiencia en Campo y Soporte Técnico:
                            <div className="flex flex-col space-y-2 text-zinc-600 justify-start text-sm xl:text-base mt-2">
                                <span>✓ Apoyo integral desde la instalación hasta el mantenimiento.</span>
                                <span>✓ Asegurando que los equipos cumplan con especificaciones.</span>
                            </div>
                        </div>
                        <div className="px-8 text-xl xl:text-2xl text-left">
                            Desarrollo de Mejores Prácticas y Colaboración:
                            <div className="flex flex-col space-y-2 text-zinc-600 justify-start text-sm xl:text-base mt-2">
                                <span>✓ Contribución activa al desarrollo de guías de seguridad.</span>
                                <span>✓ Colaboración con clientes y grupos industriales efectiva.</span>
                            </div>
                        </div>
                        <Link href={"/dashboard/"} title="Contáctanos" className="px-8">
                            <Button variant="sim" className="p-6 text-lg w-full md:w-auto lg:mt-0 mt-4">
                                Contáctanos
                            </Button>
                        </Link>
                    </div>
                    <div className="hidden lg:flex justify-center items-center rounded-md w-full lg:w-1/2 px-8 lg:pt-0 pt-5">
                        <img
                            src="/who-we-are.jpg"
                            alt="Mineria"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}