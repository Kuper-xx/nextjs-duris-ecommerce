import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '../../../../libs/db';
import bcrypt from 'bcrypt';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                clave: { label: "Clave", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const contactoFound = await db.contacto.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if(!contactoFound) throw new Error('El email no está registrado, por favor registre su cuenta.');
                
                
                const matchPassword = await bcrypt.compare(credentials.clave, contactoFound.clave);
                if (!matchPassword) {
                    throw new Error('La clave es incorrecta, por favor intente nuevamente.');
                }else{
                    const { clave: _, ...contactWithoutPassword } = contactoFound;
                    return contactWithoutPassword;
                    
                }
                
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };