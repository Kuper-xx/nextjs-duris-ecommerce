import Image from "next/image";

export default function EnviosPage() {
    return (
        // <div className="px-6 py-12">
        <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center py-8">Formas de Envío</h1>

      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-8 mt-16">
        {/* Contenedor relativo para superponer huellas */}
        <div className="flex-1 flex justify-center">
          <div className="relative max-w-md w-full">
            {/* Huellas de fondo */}
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src="/images/huellas.png"
                alt=""
                width={1000}
                height={1000}
                className=""
                priority
              />
            </div>

            {/* Tu “carta” con la lista, en z-10 para quedar arriba */}
            <ul className="relative z-10 bg-white rounded-xl shadow-lg px-8 py-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span className="text-lg text-neutral-800 font-semibold">
                  Los pedidos salen dentro de las 48 horas.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span className="text-lg text-neutral-800 font-semibold">
                  Son preparados con doble control de cantidad y embalaje.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Imagen de envío */}
        <div className="flex-1 flex justify-center mt-8">
          <Image
            src="/images/formasdeenvio.jpg"
            alt="Formas de envío"
            width={400}
            height={300}
            className="rounded-xl object-cover shadow-lg border border-neutral-200"
          />
        </div>
      </div>
    </div>
    );
}