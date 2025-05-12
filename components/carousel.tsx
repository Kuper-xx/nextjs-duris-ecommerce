/* app/components/Carousel.tsx */
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import productsData from '../app/data/products.json';        // mock local


type Product = typeof productsData[number];

export default function Carousel() {
  const products: Product[] = productsData.slice(0, 5);

  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % products.length),
      3000
    );
    return () => clearInterval(id);
  }, [products.length]);

  const p = products[current];

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
      {p.foto && (
        <div className="relative h-100 w-full">
          <Image
            src={p.foto}
            alt={p.producto}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}

      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {p.producto}
        </CardTitle>

        <p className="text-xl text-white">
          ${p.costo.toLocaleString('es-AR')}
        </p>
      </CardContent>
    </Card>
  );
}
