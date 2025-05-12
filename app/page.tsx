import Image from "next/image";
import styles from "./page.module.css";
import products from "./data/products.json";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/carousel";
import Link from "next/link";

export default async function Home() {
  const list = products.slice(0, 5);
  console.log(list);
  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Bienvenido a nuestra tienda</h2>
            <p className="text-neutral-600">
              Aquí encontrarás una selección de nuestros productos más populares.
            </p>
          
            <Button asChild variant="default" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white">
              <Link href="/productos" className="inline-flex items-center justify-center rounded-full px-6 py-3">Mostrar todos los productos</Link>
            </Button>
          </div>
            <Image 
              src={products[0].foto}
              className="rounded"
              width={450}
              height={450} alt={""}/>
          
          </div>
          </section>
          <section className="py-8">
            <Carousel />
          </section>

      
    </div>
  );
}
