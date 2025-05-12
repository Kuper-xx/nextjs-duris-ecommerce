"use client";

import { useCart } from "@/components/cart-context";

export default function CheckoutPage() {
  // Simulación de productos en el carrito (puedes reemplazar esto por el estado real luego)
  // const carrito = [
  //   { ...products[0], cantidad: 1, comentario: "" },
  //   { ...products[1], cantidad: 1, comentario: "" },
  //   { ...products[2], cantidad: 1, comentario: "" },
  // ];
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCart();
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center py-8 ">
        SISTEMA DE PEDIDOS EN LÍNEA DE DURI'S
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 mb-8">
        <p className="mb-2 text-neutral-700 text-sm">
          Si usted ya es un <span className="font-bold">usuario registrado</span> en Duris Importaciones haga <a href="/login" className="text-blue-700 underline">click aquí</a> o vaya a la página principal e ingrese su usuario y su clave y realice su pedido.
        </p>
        <p className="mb-2 text-neutral-700 text-sm">
          Si usted aún <span className="font-bold">no es un usuario registrado</span>, haga <a href="/contacto" className="text-blue-700 underline">click aquí</a> completando sus datos y podrá comenzar a disfrutar de las increíbles ofertas que tenemos para ofrecerle.
        </p>
        <p className="mb-4 text-neutral-700 text-sm">
          <span className="font-bold">¿Cómo realizar su pedido?</span><br />
          Es muy simple y seguro! Una vez que ingrese el mail y clave con los que se haya registrado, seleccione sus rubros de interés y elija las cantidades que desee de cada producto que tenemos para ofrecerle. Una vez que finalice su orden de compra, uno de nuestros vendedores se contactará con usted para confirmarle el importe de su compra y organizar el envío de la mercadería por su transporte de preferencia.
        </p>
      </div>
      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 border">Cod.</th>
              <th className="p-2 border">Descripción</th>
              <th className="p-2 border">Tipo de Unidad</th>
              <th className="p-2 border">Cant. Unid.</th>
            </tr>
          </thead>
          <tbody>
            
            {carrito.map((item) => (
              <tr key={item.codigo} className="align-top">
                <td className="p-2 border text-center">
                  <img src={item.foto} alt={item.producto} width={60} height={60} className="mx-auto rounded" />
                  <div className="text-blue-700 underline text-xs mt-1 cursor-pointer">{item.codigo}</div>
                </td>
                <td className="p-2 border">
                  <div className="font-semibold mb-1">{item.producto}</div>
                  <div className="text-xs text-neutral-700 mb-1">{item.descripcion}</div>
                  <div className="flex items-center gap-2 text-xs">
                    Comentario: <input type="text" className="border rounded px-1 py-0.5 text-xs w-40" value={item.comentario} readOnly />
                  </div>
                </td>
                <td className="p-2 border text-center">C/U</td>
                <td className="p-2 border text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">{item.cantidad}</span>
                    <button onClick={() => quitarDelCarrito(item.codigo)} className="text-xs text-blue-700 underline cursor-pointer">quitar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm">Guardar cambios</button>
          <button onClick={vaciarCarrito} className="cursor-pointer px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm">Vaciar carrito</button>
          <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 text-sm font-semibold">Confirmar datos y enviar</button>
          <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">Imprimir Pedido</button>
        </div>
      </div>
    </section>
  );
}