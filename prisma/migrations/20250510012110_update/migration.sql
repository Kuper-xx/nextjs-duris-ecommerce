/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Contacto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "cuit" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "horario_desde" TEXT NOT NULL,
    "horario_hasta" TEXT NOT NULL,
    "tipo_comercializacion" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "ofertas_diarias" BOOLEAN NOT NULL,
    "nuevos_embarques" BOOLEAN NOT NULL,
    "contactar_representante" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contacto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contacto_empresa_key" ON "Contacto"("empresa");

-- CreateIndex
CREATE UNIQUE INDEX "Contacto_email_key" ON "Contacto"("email");
