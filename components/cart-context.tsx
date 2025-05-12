"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Producto {
    codigo: string;
    producto: string;
    descripcion: string;
    costo: number;
    foto: string;
}

interface CartItem extends Producto {
    cantidad: number;
    comentario: string;
}

interface CartContextType {
    carrito: CartItem[];
    agregarAlCarrito: (producto: Producto, cantidad: number, comentario?: string) => void;
    quitarDelCarrito: (codigo: string) => void;
    vaciarCarrito: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [carrito, setCarrito] = useState<CartItem[]>([]);
    // Leer Carrito
    useEffect(() => {
        const data = localStorage.getItem("carrito");
        if (data) setCarrito(JSON.parse(data));
    }, []);
    // Cargar Carrito
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);
    const agregarAlCarrito = (producto: Producto, cantidad: number, comentario = "") => {
        setCarrito((prev) => {
            // Si ya existe, suma cantidad
            const existe = prev.find((item) => item.codigo === producto.codigo);
            if (existe) {
                return prev.map((item) =>
                    item.codigo === producto.codigo
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                );
            }
            return [...prev, { ...producto, cantidad, comentario }];
        });
    };

    const quitarDelCarrito = (codigo: string) => {
        setCarrito((prev) => prev.filter((item) => item.codigo !== codigo));
    };
    const vaciarCarrito = () => setCarrito([]);
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart debe usarse dentro de <CartProvider>");
    return context;
}