/*
  Warnings:

  - You are about to drop the column `cantidad_disponible` on the `producto` table. All the data in the column will be lost.
  - You are about to drop the column `cantidad_total` on the `producto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `contrato_producto` ADD COLUMN `precio_unitario` DOUBLE NULL;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `cantidad_disponible`,
    DROP COLUMN `cantidad_total`;

-- CreateTable
CREATE TABLE `Inventario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad_total` INTEGER NOT NULL,
    `cantidad_disponible` INTEGER NOT NULL,
    `cantidad_ocupada` INTEGER NOT NULL,
    `id_local` INTEGER NOT NULL,
    `id_producto` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inventario` ADD CONSTRAINT `Inventario_id_local_fkey` FOREIGN KEY (`id_local`) REFERENCES `Local`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventario` ADD CONSTRAINT `Inventario_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `Producto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
