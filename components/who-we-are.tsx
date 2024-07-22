import { Button } from "./ui/button";
import Link from "next/link";

export const WhoWeAre = () => {
    return (
        <div className="pb-20 drop-shadow-lg">
            <div className="text-left flex flex-col px-10 bg-zinc-100 rounded-md lg:py-10 pb-10 border xl:mx-[10%] mx-[2%] text-[#1c1c1e] p-4">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 lg:pt-0 pt-10">
                        <h2 className="text-3xl xl:text-4xl font-semibold">
                            Proporcionando soluciones confiables
                        </h2>
                        <h3 className="text-zinc-500 text-xl">
                            Servicios SIM es una empresa especializada en la mantención, 
                            montaje, reparación y empalmes de cintas o correas transportadoras, 
                            principalmente para los sectores industrial y minero.
                        </h3>
                        <h2 className="text-3xl font-semibold">
                            Nuestros Servicios Principales:
                        </h2>
                        <div className="text-2xl">
                            Correas Transportadoras:
                            <div className="flex flex-col space-y-2 text-zinc-600 justify-start text-base mt-2">
                                <span>✓ Mantención y montaje de correas transportadoras</span>
                                <span>✓ Reparación y empalmes de correas transportadoras</span>
                            </div>
                        </div>
                        <div className="text-2xl">
                            Soluciones Especializadas:
                            <div className="flex flex-col space-y-2 text-zinc-600 justify-start text-base mt-2">
                                <span>✓ Revestimientos en frío para protección de superficies</span>
                                <span>✓ Fabricación de correas electroimán personalizadas</span>
                            </div>
                        </div>
                        <div className="text-2xl">
                            Asesoría Técnica:
                            <div className="flex flex-col space-y-2 text-zinc-600 justify-start text-base mt-2">
                                <span>✓ Optimización del uso y mantenimiento de correas transportadoras</span>
                                <span>✓ Mejora de la eficiencia operativa y reducción de costos</span>
                            </div>
                        </div>
                        <Link href={"/dashboard/"} title="Contáctanos">
                            <Button 
                                variant="sim" 
                                className="p-6 text-lg w-full md:w-auto lg:mt-0 mt-4"
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
                        </Link>
                    </div>
                    <div className="hidden lg:flex justify-center items-center rounded-md w-full lg:w-1/2 lg:pt-0 pt-5">
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