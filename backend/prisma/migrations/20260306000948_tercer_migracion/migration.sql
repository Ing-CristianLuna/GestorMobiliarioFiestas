/*
  Warnings:

  - You are about to drop the column `id_tipo_producto` on the `producto` table. All the data in the column will be lost.
  - You are about to drop the `tipo_producto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `producto` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `producto` DROP FOREIGN KEY `Producto_id_tipo_producto_fkey`;

-- DropIndex
DROP INDEX `Producto_id_tipo_producto_fkey` ON `producto`;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `id_tipo_producto`,
    ADD COLUMN `producto` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `tipo_producto`;
