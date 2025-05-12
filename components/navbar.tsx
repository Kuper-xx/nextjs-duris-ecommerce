"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { useCart } from "@/components/cart-context";


export const Navbar = () => {
    const { carrito } = useCart();
    const cantidadUnica = carrito.length;
    const { data: session, status } = useSession();
    console.log("Sesión actual:", session, "Status:", status);
    const [open, setOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-white shadow">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" className="mr-8 hover:text-blue-600">
                    <Image
                        src="/images/logo.gif"
                        alt="Logo"
                        width={100}
                        height={50}
                        className="h-10 w-auto"
                    />
                </Link>
                {/* Botón hamburguesa visible solo en mobile */}
                <div className="flex items-center gap-x-2 md:hidden">
                {session && session.user && (
                    <Link href="/checkout" className="relative mr-4 w-5 h-5 text-black">
                        <ShoppingCartIcon/>
                        {cantidadUnica > 0 && (
                                    <span
                                    className="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow"
                                    style={{ fontSize: "0.75rem" }}
                                    >
                                    {cantidadUnica}
                                    </span>
                        )}    
                    </Link>
                )}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
                </div>
                {/* Menú desktop */}
                <div className="hidden md:flex flex-1 items-center justify-between">
                    <div className="flex space-x-6">
                        <Link href="/nosotros" className="hover:text-blue-600">Quienes somos</Link>
                        <Link href="/formasdepago" className="hover:text-blue-600">Formas de pago</Link>
                        <Link href="/envios" className="hover:text-blue-600">Formas de envío</Link>
                        <Link href="/contacto" className="hover:text-blue-600">Contáctenos</Link>
                        <Link href="/puntosdeventa" className="hover:text-blue-600">Puntos de venta</Link>
                    </div>
                    {!session && status === "unauthenticated" && (
                        <div className="flex space-x-4 items-center">
                        <Link href="/login" className="px-4 py-2 rounded hover:bg-blue-50 transition-colors">Ingresar</Link>
                        <Link href="/contacto" className="px-4 py-2 rounded bg-black text-white hover:bg-neutral-800 transition-colors">Registro</Link>
                        </div>
                    )
                    }
                    {session && session.user && (
                        <div className="flex space-x-4 items-center">
                            <Link href="/checkout" className="relative mr-8 w-5 h-5 text-black">
                                <ShoppingCartIcon/>
                                {cantidadUnica > 0 && (
                                    <span
                                    className="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow"
                                    style={{ fontSize: "0.75rem" }}
                                    >
                                    {cantidadUnica}
                                    </span>
                                )}
                            </Link>
                            <Button onClick={() => signOut({callbackUrl: "/login"})} className="px-4 py-2 transition-colors rounded-full bg-black text-white cursor-pointer">Cerrar sesión</Button>
                        </div>
                    )
                    }
                    
                </div>
            </div>
            {/* Menú mobile */}
            {open && (
                <div className="md:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)}></div>
            )}
            <div className={`md:hidden fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    className="absolute top-4 right-4 text-2xl"
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar menú"
                >
                    ×
                </button>
                <nav className="flex flex-col mt-20 space-y-6 px-6">
                    <Link href="/nosotros" className="hover:text-blue-600" onClick={() => setOpen(false)}>Quienes somos</Link>
                    <Link href="/formasdepago" className="hover:text-blue-600" onClick={() => setOpen(false)}>Formas de pago</Link>
                    <Link href="/envios" className="hover:text-blue-600" onClick={() => setOpen(false)}>Formas de envío</Link>
                    <Link href="/contacto" className="hover:text-blue-600" onClick={() => setOpen(false)}>Contáctenos</Link>
                    <Link href="/puntosdeventa" className="hover:text-blue-600" onClick={() => setOpen(false)}>Puntos de venta</Link>
                    <hr className="my-2" />
                    {!session && status === "unauthenticated" && (
                    <><Link href="/login" className="px-4 py-2 rounded hover:bg-blue-50 transition-colors text-center w-full" onClick={() => setOpen(false)}>Ingresar</Link><Link href="/contacto" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center w-full" onClick={() => setOpen(false)}>Registro</Link></>
                    )}
                    {session && session.user && (
                        <div className="flex flex-col space-y-4">
                            <Link href="/checkout" className="px-4 py-2 rounded bg-blue-600 text-white text-center w-full hover:bg-blue-700 transition-colors" onClick={() => setOpen(false)}>Carrito</Link>
                            <Button onClick={() => signOut({callbackUrl: "/login"})} className="px-4 py-2 rounded transition-colors cursor-pointer">Cerrar sesión</Button>
                        </div>
                    )
                    }
                </nav>
            </div>
        </nav>
    );
}