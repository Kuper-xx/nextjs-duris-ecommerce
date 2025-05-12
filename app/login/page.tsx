"use client";

import { set, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import { useState } from "react";


export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        const res = await signIn('credentials', {
            email: data.email,
            clave: data.clave,
            redirect: false,
        });
        if (res?.error) {
            setError(res?.error);
        } else {
            router.push("/");
        }
        console.log(res);
    });
    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-3xl font-bold  mb-2">Ingresar</h1>
                    <p className="text-neutral-600 text-sm text-center">Acceda a su cuenta para ver precios y realizar pedidos.</p>
                </div>
                <form className="space-y-6" onSubmit={onSubmit}>
                    {error && (
                        // <div className="mb-4 text-center text-red-600 font-semibold">
                        <div>
                           <p  className="bg-red-500 text-lg text-white p-3 rounded">{error}</p> 
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-neutral-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
                            {...register("email", { required: "El email es obligatorio" })}
                        />
                        {errors.email && typeof errors.email.message === 'string' && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-700">Clave</label>
                        <input
                            type="password"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500"
                            {...register("clave", { required: "La clave es obligatoria" })}
                        />
                        {errors.clave && typeof errors.clave.message === 'string' && (
                            <p className="text-red-500 text-xs mt-1">{errors.clave.message}</p>
                        )}
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-full cursor-pointer hover:bg-blue-800 transition-colors">Ingresar</button>
                </form>
                <div className="text-center mt-4">
                    <span className="text-sm text-neutral-600">¿No tiene cuenta?</span>
                    <a href="/contacto" className="ml-2 text-blue-700 hover:underline font-medium">Regístrese aquí</a>
                </div>
            </div>
        </div>
    );
}