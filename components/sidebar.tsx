import { useSession } from "next-auth/react";
import Link from "next/link";

const categorias = [
  "NUEVO! LIBRERÍA - ESCOLAR",
  "AUDIO",
  "RODADOS ACCESORIOS",
  "ELECTRO HOGAR",
  "BAZAR",
  "ESPEJOS",
  "SALUD Y CUIDADO PERSONAL",
  "GRIFERÍA",
  "FERRETERÍA",
  "PILAS Y BATERÍAS",
  "ENCENDEDOR",
  "ILUMINACIÓN",
  "ILUMINACIÓN - DECO",
  "TECNOLOGÍA - COMPUTACIÓN",
  "CABLES",
  "TELEFONÍA",
  "JUGUETERÍA",
  "RELOJERÍA",
  "ÁLBUM FOTOGRÁFICO",
  "PORTARRETRATOS",
  "VARIOS",
  "REPUESTOS Y ACCESORIOS",
  "ARTÍCULOS EN PROMOCIÓN",
  "COMBOS!! HASTA 50% OFF",
  "ÚLTIMAS UNIDADES",
];

export const Sidebar = () => {
  const { data: session, status } = useSession();
  return (
    <aside
      className="
        fixed left-0 top-0 h-full z-30 w-14 bg-white shadow-lg border-r border-border flex flex-col items-center
        md:static md:w-full md:max-w-xs md:mx-auto md:mb-8 md:p-4 md:h-auto md:rounded-xl md:shadow-lg md:border md:border-border
        transition-all
      "
    >
      <div className="flex-1 flex flex-col items-center justify-start w-full overflow-y-auto mt-4 md:mt-0">
        <h2 className="hidden md:block text-lg font-bold text-primary mb-2 text-center">Búsqueda por Rubro</h2>
        <ul className="space-y-2 w-full flex flex-col items-center">
          {categorias.map((cat, i) => (
            <li key={cat} className="w-full flex justify-center">
              <Link
                href={`/productos?categoria=${encodeURIComponent(cat)}`}
                className="
                  flex items-center justify-center w-10 h-10 rounded-lg text-[10px] font-medium text-neutral-700
                  hover:bg-primary/10 hover:text-primary transition text-center
                  md:w-full md:h-auto md:px-3 md:py-2 md:text-sm md:rounded-lg
                "
                title={cat}
              >
                <span className="truncate hidden md:inline">{cat}</span>
                <span className="md:hidden">{i+1}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 mt-4 w-full items-center md:gap-3 md:mt-6">
        {session && session.user && (
          <Link href="/checkout" className="hidden md:block w-full md:min-w-[180px] bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 rounded-lg shadow hover:from-red-600 hover:to-red-800 transition text-center">
          Realizar Pedido
          </Link>
        )
        }
        {!session && status === "unauthenticated" && (
          <Link href="/login" className="hidden md:block w-full md:min-w-[180px] bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 rounded-lg shadow hover:from-red-600 hover:to-red-800 transition text-center">
          Realizar Pedido
        </Link>
        )}
        
        <Link href="#" className="hidden md:flex items-center gap-2 text-primary text-sm hover:underline">
          <span>⭐</span> Agregar a Favoritos
        </Link>
        {!session && status === "unauthenticated" && (
          <Link href="/contacto" className="hidden md:flex items-center gap-2 text-blue-600 text-sm hover:underline">
          <span>⭐</span> Regístrese y reciba ofertas
          </Link>
        )}
        
      </div>
    </aside>
  );
}