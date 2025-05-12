// app/contacto/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ContactoPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await fetch("/api/auth/register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    const resJson = await res.json()
    
    if (res.ok) {
      router.push("/login");
    } else {
      console.log(errors);
    }

  });
  return (
    <div>
      {/* Título */}
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center py-8">
        Contáctenos
      </h1>
    
      {/* Instrucciones */}
      <p className="text-center text-sm text-neutral-600 mb-8">
        Complete el siguiente formulario para realizar pedidos y ver listas de precios.
      </p>
      <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">
      {/* Contenedor del formulario */}
      <form className="border border-neutral-300 p-8 rounded-lg space-y-6" onSubmit={onSubmit}>
        {/* Cliente actual */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="whitespace-nowrap">¿Es actualmente un cliente nuestro?</span>
          <label className="inline-flex items-center space-x-1">
            <input
              type="radio"
              {...register("esCliente", { required: true })}
              value="si"
              className="form-radio"
            />
            <span>Sí</span>
          </label>
          <label className="inline-flex items-center space-x-1">
            <input
              type="radio"
              {...register("esCliente", { required: true })}
              value="no"
              className="form-radio"
            />
            <span>No</span>
          </label>
          <span className="text-red-500">*</span>
        </div>

        {/* Campos de texto */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Nombre de Contacto <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("nombre", { required:{ 
                value: true,
                message: "El campo nombre no puede estar vacío." } })}
            />
              { errors.nombre && typeof errors.nombre.message === 'string' && (
                <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
              )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Nombre de la empresa
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("empresa")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              CUIT
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("cuit")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Domicilio Legal <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("domicilio", { required:{
                value: true,
                message: "El campo domicilio no puede estar vacío." 
              } })}
            />
            { errors.domicilio && typeof errors.domicilio.message === 'string' && (
              <p className="text-red-500 text-xs mt-1">{errors.domicilio.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="011 1234-5678"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("telefono", { required: {
                value: true,
                message: "El campo teléfono no puede estar vacío." 
              } })}
            />
            { errors.telefono && typeof errors.telefono.message === 'string' && (
              <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Celular
            </label>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("celular")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("email", { required: {
                value: true,
                message: "El campo email no puede estar vacío."
              } })}
            />
            { errors.email && typeof errors.email.message === 'string' && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
            <small className="text-xs text-neutral-500">Será su usuario de acceso</small>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Repetir Email <span className="text-red-500">*</span>
            </label>
            <input
              type="confirmEmail"
              name="email2"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
            />
            <small className="text-xs text-neutral-500">Verifique que sea correcto</small>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Localidad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("localidad", { required: {
                value: true,
                message: "El campo localidad no puede estar vacío."
              } })}
            />
            { errors.localidad && typeof errors.localidad.message === 'string' && (
              <p className="text-red-500 text-xs mt-1">{errors.localidad.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Provincia <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("provincia", { required: "Seleccione una provincia" })}
            >
              <option value="">Seleccionar</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Santa Fe">Santa Fe</option>
              {/* …otras provincias… */}
            </select>
            {errors.provincia && typeof errors.provincia.message === 'string' && (
              <p className="text-red-500 text-xs mt-1">{errors.provincia.message}</p>
            )}
          </div>
        </div>

        {/* Horario de contacto */}
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Horario de Contacto
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                className="block border border-gray-300 rounded-md p-2 focus:border-blue-500"
                {...register("horario_desde")}
              />
              <span>y de</span>
              <input
                type="time"
                className="block border border-gray-300 rounded-md p-2 focus:border-blue-500"
                {...register("horario_hasta")}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Comercializa a través de
            </label>
            <select
              className="mt-1 block border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("tipo_comercializacion", {required: "Seleccione una opción"})}
            >
              <option value="">Seleccionar</option>
              <option value="Supermercado">Supermercado</option>
              <option value="Sucursalero">Sucursalero</option>
              <option value="Local Minorista">Local Minorista</option>
              <option value="Local Mayorista">Local Mayorista</option>
              <option value="Viajante">Viajante</option>
              <option value="Revendedor">Revendedor</option>
              <option value="Otros">Otros...</option>
            </select>
            {errors.tipo_comercializacion && typeof errors.tipo_comercializacion.message === 'string' && (
              <p className="text-red-500 text-xs mt-1">{errors.tipo_comercializacion.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Clave <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              minLength={6}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
              {...register("clave", { required: {
                value: true,
                message: "El campo clave no puede estar vacío."
              }, minLength: 6 })}
            />
            { errors.clave && typeof errors.clave.message === 'string' && (
              <p className="text-red-500 text-xs mt-1">{errors.clave.message}</p>
            )}
            <small className="text-xs text-neutral-500">
              (Deberá ser de al menos 6 caracteres)
            </small>
          </div>
        </div>

        {/* Info adicional */}
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-medium text-neutral-700">
            Recibir info adicional de:
          </span>
          <label className="inline-flex items-center space-x-1">
            <input type="checkbox" className="form-checkbox" {...register("ofertas_diarias")} />
            <span>Ofertas diarias</span>
          </label>
          <label className="inline-flex items-center space-x-1">
            <input type="checkbox" className="form-checkbox" {...register("nuevos_embarques")} />
            <span>Nuevos embarques</span>
          </label>
        </div>

        {/* Contacto telefónico */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            ¿Desea ser contactado telefónicamente por un representante?
          </label>
          <select
            className="block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
            {...register("contactar_representante", { required: "Seleccione una opción" })}
          >
            <option value="No">No</option>
            <option value="Si">Sí</option>
          </select>
        </div>

        {/* Comentarios */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Comentarios
          </label>
          <textarea
            rows={4}
            className="block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
            {...register("comentarios")}
          />
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="flex justify-center">
          <div className="w-64 h-16 bg-neutral-200 flex items-center justify-center text-sm text-neutral-500">
            reCAPTCHA aquí
          </div>
        </div>

        {/* Botón Enviar */}
        <div className="flex justify-center">
            <button type="submit" className="inline-flex items-center px-8 py-2 bg-blue-700 text-white font-semibold rounded-full cursor-pointer">
              Enviar
            </button>
        </div>
      </form>
    </div>
    </div>
  );
}
