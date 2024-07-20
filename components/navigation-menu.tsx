"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export function NavigationMenuLanding() {

    const pathname = usePathname();

    return (
        <NavigationMenu className="hidden lg:flex lg:flex-col">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        href={"/about-us"}
                    >
                        <Button
                            className='justify-start my-[3px] text-[16px] mr-2'
                            variant={pathname === "/about-us" ? 'default' : 'ghost'}
                        >
                            Inicios
                        </Button>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                        href={"/faq"}
                    >
                        <Button
                            className='justify-start my-[3px] text-[16px]'
                            variant={pathname === "/faq" ? 'default' : 'ghost'}
                        >
                            Nosotros
                        </Button>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                        href={"/faq"}
                    >
                        <Button
                            className='justify-start my-[3px] text-[16px]'
                            variant={pathname === "/faq" ? 'default' : 'ghost'}
                        >
                            Contacto
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}