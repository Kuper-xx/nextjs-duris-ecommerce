import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Phone } from "lucide-react";

export default function PuntosDeVentaPage() {
    return (
        <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center py-8">Puntos de venta</h1>
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
        {/* <div className="rounded bg-neutral-100 py-8 sm:py-12">
                <p className="text-neutral-600 text-center">

                </p>
        </div> */}
        </div>
    );
}