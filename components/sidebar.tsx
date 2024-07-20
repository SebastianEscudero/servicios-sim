import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { SheetClose } from "./ui/sheet";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Sidebar = ({
}) => {
    
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#FFF] overflow-y-auto">
            <div className="py-2 flex-1">
                <div className="flex items-center pl-8">
                    <div className="mr-4">
                        <Image
                            width={100}
                            height={100}
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className="text-2xl font-cursive font-bold">
                        
                    </h1>
                </div>
                <div className="space-y-1 mt-2">
                    <div className="flex flex-col w-full border-b">
                        <SheetClose asChild>
                            <Link
                                className="my-2 text-lg hover:underline px-5"
                                href="/about-us"
                            >
                                <Button
                                    className='w-full justify-start gap-1 text-lg font-semibold'
                                    variant={pathname === "/about-us" ? 'default' : 'ghost'}
                                >
                                    ¿Quiénes somos?
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                    <div className="flex flex-col w-full border-b">
                        <SheetClose asChild>
                            <Link
                                className="my-2 text-lg hover:underline px-5"
                                href="/faq"
                            >
                                <Button
                                    className='w-full justify-start gap-1 text-lg font-semibold'
                                    variant={pathname === "/faq" ? 'default' : 'ghost'}
                                >
                                    Preguntas frecuentes
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </div>
            </div>
            <div className="pb-4 px-2">
                <Button variant="sim" className="md:text-lg p-4 md:p-6 w-full">
                    Contáctanos
                </Button>
            </div>
        </div>
    );
}

export default Sidebar;