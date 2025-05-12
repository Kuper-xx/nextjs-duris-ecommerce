/*
  Warnings:

  - Added the required column `comentarios` to the `Contacto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `esCliente` to the `Contacto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contacto" ADD COLUMN     "comentarios" TEXT NOT NULL,
ADD COLUMN     "esCliente" TEXT NOT NULL,
ALTER COLUMN "contactar_representante" SET DATA TYPE TEXT;
