import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NosotrosPage() {
    return (
        <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center py-8">Quienes somos</h1>
        
        <div className="rounded bg-neutral-100 py-8 sm:py-12">
                <p className="text-neutral-600 text-center">
                <b>Si !!</b> Una presencia de 30 años abasteciendo al mercado mayorista nos permiten posicionarnos 
                como una Empresa reconocida por su seriedad, responsabilidad y excelencia en la atención. 
                Asesoramiento personalizado a nuestros Clientes mediante un Staff de Ventas y Administración, 
                suministra las mejores soluciones a sus programas de compras.
                </p>
        </div>
        <div>
        </div>
        <div className="mx-auto grid grid-cols-1 items-center justify-center gap-8 px-8 sm:px-16 md:grid-cols-2">
        <div className="max-w-lg space-y-4">
        <p className="text-neutral-600 text-center m-7">
       <b>
        Oficinas propias en Oriente son visitadas en forma frecuente por representantes locales 
        que nos aseguran estar a la vanguardia de las últimas novedades del mercado y nos permiten 
        ofrecer mercadería de alta rotación y excelente precio. </b></p>
        
        <p className="text-neutral-600 text-center m-7">
            <b>Nuevas tecnologías unen nuestros puntos de venta facilitando su compra, mediante la consolidación de su mercadería adquirida en cualquiera 
        de las sucursales. </b></p>
        <p className="text-neutral-600 text-center m-7">
            <b>Toda nuestra estructura de ventas a su disposición para que pueda efectuar 
        sus mejores compras ahorrando tiempo y dinero.</b>
        </p>
        <div className="flex justify-center mt-10">
        <Button asChild variant="default" className="m-10 inline-flex items-center justify-center rounded-full px-10 py-3 bg-black text-white">
        <Link href="/contacto">Contactanos!</Link>
        </Button>
        </div>
        </div>

        

        <Image
            src="/images/manos.jpg"
            alt="manos"
            width={800}
            height={100}
        />
        </div>
        
        <section className="mt-10">
            {/* título con línea decorativa */}
            <h2 className="relative mb-10 text-center text-2xl font-semibold md:text-3xl">
              <span className="relative z-10 bg-white px-4">
                Puntos de venta al por mayor
              </span>
              <span
                aria-hidden
                className="absolute inset-0 mx-auto h-[2px] w-80 bg-gradient-to-r from-transparent via-neutral-400 to-transparent"
              />
            </h2>

            {/* grid responsive 1-2 columnas */}
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
              {[
                {
                  titulo: "SHOW-ROOM",
                  dir: "Pasteur 322 / 1er piso",
                  tel: "4951-1000 • Int 503",
                },
                {
                  titulo: "VENTA A MAYORISTAS",
                  dir: "Pasteur 322",
                  tel: "4951-1000 • Int 503",
                },
              ].map((p) => (
                <Card
                  key={p.titulo}
                  className="shadow-sm transition hover:shadow-md"
                >
                  <CardHeader className="flex flex-col items-center gap-1 pb-0">
                    <Building2 className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{p.titulo}</CardTitle>
                  </CardHeader>

                  <CardContent className="mt-2 space-y-2 text-center text-sm text-muted-foreground">
                    <p className="inline-flex items-center justify-center gap-1">
                      <MapPin className="h-4 w-4" /> {p.dir}
                    </p>
                    <p className="inline-flex items-center justify-center gap-1">
                      <Phone className="h-4 w-4" /> {p.tel}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
    );
}