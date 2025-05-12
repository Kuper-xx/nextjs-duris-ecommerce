"use client";

import Image from "next/image";
import products from "../data/products.json";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";
import { CategoriaSubNavbar } from "@/components/categoriasubnavbar";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { useCart } from "@/components/cart-context";


interface Producto {
  codigo: string;
  producto: string;
  descripcion: string;
  costo: number;
  foto: string;
}

function ProductCard({ producto }: { producto: Producto }) {
  const [cantidad, setCantidad] = useState(0);

  const { data: session, status } = useSession();


  const sumar = () => setCantidad((c) => Math.min(c + 1, 99));
  const restar = () => setCantidad((c) => Math.max(c - 1, 0));
  const { agregarAlCarrito } = useCart();
  const agregar = () => {
  let cantidadFinal = cantidad;
  if (cantidadFinal <= 0) {
    cantidadFinal = 1;
    setCantidad(1); // Opcional: mostrar el 1 en el input
  }
  agregarAlCarrito(producto, cantidadFinal);
  setCantidad(0); // Resetea el input después de agregar
};

  return (
    <article className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="flex items-center justify-center p-4 min-h-[180px]">
        <Image
          src={producto.foto}
          alt={producto.producto}
          width={180}
          height={180}
          className="object-contain rounded-lg max-h-40"
          unoptimized
        />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h2 className="font-semibold text-lg mb-1 text-center">{producto.producto}</h2>
        <p className="text-sm text-muted-foreground mb-2 text-center line-clamp-3 overflow-hidden">{producto.descripcion}</p>
        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={restar}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-lg font-bold bg-neutral-100 hover:bg-neutral-200 transition"
              aria-label="Restar"
              type="button"
            >-</button>
            <span className="w-8 text-center font-semibold">{cantidad}</span>
            <button
              onClick={sumar}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-lg font-bold bg-neutral-100 hover:bg-neutral-200 transition"
              aria-label="Sumar"
              type="button"
            >+</button>
          </div>
          <div className="flex flex-col gap-2 mt-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-bold text-xl text-primary text-center sm:text-left w-full sm:w-auto">${producto.costo}</span>
            {session && session.user && (
              <Button
              variant="default"
              className="cursor-pointer rounded-full min-w-[140px] px-5 py-2 bg-black text-white hover:bg-primary transition w-full sm:w-[140px] mt-2 sm:mt-0 text-center"
              type="button"
              onClick={agregar}
            >
              Agregar al carrito
            </Button>
            )}
            {!session && status === "unauthenticated" && (
              <Button
              variant="default"
              className="cursor-pointer rounded-full min-w-[140px] px-5 py-2 bg-black text-white hover:bg-primary transition w-full sm:w-[140px] mt-2 sm:mt-0 text-center"
              type="button"
            >
              <Link href="/login">Agregar al carrito</Link>
            </Button>
            )}
          </div>
        </div>
      </div>
    </article >
  );
}

export default function ProductosPage() {
  const list = products.slice(0, 5);
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center py-8">
        Nuestros Productos
      </h1>
       <CategoriaSubNavbar />
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="hidden md:block md:w-1/3 lg:w-1/4">
            <Sidebar />
          </div>
          {/* Productos */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {list.map((p) => (
                <ProductCard key={p.codigo} producto={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
