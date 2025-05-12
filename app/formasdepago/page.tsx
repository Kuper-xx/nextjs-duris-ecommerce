// app/formas-de-pago/page.tsx
import Image from "next/image";

export default function FormasDePagoPage() {
  return (
    // <div className="mx-auto max-w-4xl px-6 py-12">
    <div>
      {/* Título */}
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center py-8">
        Formas de pago
      </h1>
    
      {/* Subtítulo */}
            <p className="text-center text-sm text-neutral-600 mb-8">
                Usted elige formas de pago para su comodidad
            </p>
            <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Contenedor principal: lista + torre */}
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* === LISTA === */}
        <ul className="relative z-10 bg-white rounded-xl shadow-lg px-8 py-6 space-y-5 text-lg text-neutral-800">
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span className="text-lg text-neutral-800 font-semibold">
                    Efectivo
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span className="text-lg text-neutral-800 font-semibold">
                  Transferencias
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span className="text-lg text-neutral-800 font-semibold">
                  Cheques
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span className="text-lg text-neutral-800 font-semibold">
                  Tarjetas de Crédito
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span className="text-lg text-neutral-800 font-semibold">
                  Tarjetas de Débito
                </span>
              </li>
            </ul>
            

        {/* === TORRE DE LOGOS SIN ESPACIO VERTICAL === */}
        <div className="flex-1 flex flex-col ml-16">
          {/* 1: desplazado a la derecha */}
          <div className="self-center">
            <Image
              src="/images/logo_bbva_banco_frances.jpg"
              alt="BBVA Banco Francés"
              width={150}
              height={100}
              className="object-contain shadow-md"
            />
            
          </div>
          {/* 2: centrado */}
          <div className="self-end">
            <Image
              src="/images/banconacion.jpg"
              alt="Banco Nación"
              width={150}
              height={80}
              className="object-contain shadow-sm"
            />
          </div>
          {/* 3: a la izquierda */}
          <div className="self-center">
            <Image
              src="/images/bancosantanderrio.jpg"
              alt="Santander Río"
              width={150}
              height={80}
              className="object-contain shadow-sm"
            />
          </div>
          {/* 4: centrado */}
          <div className="self-end">
            <Image
              src="/images/bancocredicoop.jpg"
              alt="Banco Credicoop"
              width={150}
              height={80}
              className="object-contain shadow-sm"
            />
          </div>
          {/* 5: a la derecha */}
          <div className="self-center">
            <Image
              src="/images/bancobanelco.jpg"
              alt="Red Banelco"
              width={120}
              height={50}
              className="object-contain shadow-sm"
            />
          </div>
          {/* 6: centrado */}
          <div className="self-end">
            <Image
              src="/images/bancolink.jpg"
              alt="Red Link"
              width={120}
              height={20}
              className="object-contain shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* BLOQUE AZUL ABAJO */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-2 text-white font-semibold">
          <span className="text-xl">🏦</span>
          <span>Bancos con los que operamos y Redes para transferencias</span>
        </div>
      </div>
    </div>
    </div>
  );
}
