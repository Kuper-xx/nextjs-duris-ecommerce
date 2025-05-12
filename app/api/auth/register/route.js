import { NextResponse } from 'next/server';
import db from '../../../../libs/db';
import bcrypt from 'bcrypt';


export async function POST(request) {
    try{
        const data = await request.json();
        
        const contactFound = await db.contacto.findUnique({
            where: {
                email: data.email
            }
        })
        if (contactFound) {
            return NextResponse.json({ error: 'El email ya está registrado, por favor ingrese con sus credenciales.' }, { status: 400 });
        }
        const empresaFound = await db.contacto.findUnique({
            where: {
                empresa: data.empresa
            }
        })
        if (empresaFound) {
            return NextResponse.json({ error: 'La empresa ya está registrada, por favor ingrese con sus credenciales.' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(data.clave, 10);
        const newContact = await db.contacto.create({
            data: {
                esCliente: data.esCliente,
                nombre: data.nombre,
                empresa: data.empresa,
                cuit: data.cuit,
                domicilio: data.domicilio,
                telefono: data.telefono,
                celular: data.celular,
                email: data.email,
                localidad: data.localidad,
                provincia: data.provincia,
                horario_desde: data.horario_desde,
                horario_hasta: data.horario_hasta,
                tipo_comercializacion: data.tipo_comercializacion,
                clave: hashedPassword,
                ofertas_diarias: data.ofertas_diarias,
                nuevos_embarques: data.nuevos_embarques,
                contactar_representante: data.contactar_representante,
                comentarios: data.comentarios
            }
        })

        const { clave: _, ...contactWithoutPassword } = newContact;

        return NextResponse.json(contactWithoutPassword);
    }catch(err){
        console.error(err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
    
}