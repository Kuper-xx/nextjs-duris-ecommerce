// Puedes poner esto arriba del grid de productos en ProductosPage

import { useState } from "react";
import { Dialog } from "@headlessui/react";

// Lista de categorías de ejemplo
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

export const CategoriaSubNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Subnavbar tipo select solo visible en móvil */}
      <div className="block md:hidden w-full px-2 mb-4">
        <button
          className="flex items-center w-full px-4 py-2 border rounded-lg bg-white shadow text-left text-gray-700"
          onClick={() => setOpen(true)}
        >
          <span className="flex-1">Categoría</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Modal de categorías */}
      <Dialog open={open} onClose={() => setOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black/40" />
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto flex">
            {/* Pestaña lateral */}
            <div className="w-28 bg-gray-100 rounded-l-lg flex flex-col items-center py-6">
              <span className="font-semibold text-blue-600 mb-2">Categorías</span>
            </div>
            {/* Listado de categorías */}
            <div className="flex-1 p-6">
              <button
                className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
              >
                ×
              </button>
              <h2 className="text-lg font-bold mb-4">Selecciona una categoría</h2>
              <ul className="space-y-3">
                {categorias.map((cat) => (
                  <li key={cat}>
                    <button
                      className="w-full text-left px-3 py-2 rounded hover:bg-blue-50 transition"
                      onClick={() => setOpen(false)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}