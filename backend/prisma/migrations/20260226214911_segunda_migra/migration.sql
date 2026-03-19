-- AlterTable
ALTER TABLE `local` MODIFY `telefono` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Empleado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido_p` VARCHAR(191) NOT NULL,
    `apellido_m` VARCHAR(191) NOT NULL,
    `edad` INTEGER NOT NULL,
    `puesto` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `id_local` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contrato` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_renta` DATETIME(3) NOT NULL,
    `fecha_entrega` DATETIME(3) NULL,
    `telefono_referencia` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `pago_total` DOUBLE NOT NULL,
    `direccion_entrega` VARCHAR(191) NOT NULL,
    `id_cliente` INTEGER NOT NULL,
    `id_local` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido_p` VARCHAR(191) NOT NULL DEFAULT '',
    `apellido_m` VARCHAR(191) NOT NULL DEFAULT '',
    `direccion_cliente` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contrato_Producto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_contrato` INTEGER NOT NULL,
    `id_producto` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Producto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_tipo_producto` INTEGER NOT NULL,
    `cantidad_total` INTEGER NULL,
    `cantidad_disponible` INTEGER NULL,
    `descripcion` VARCHAR(191) NOT NULL DEFAULT '',
    `precio_unitario` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tipo_Producto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_producto` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Empleado` ADD CONSTRAINT `Empleado_id_local_fkey` FOREIGN KEY (`id_local`) REFERENCES `Local`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_id_local_fkey` FOREIGN KEY (`id_local`) REFERENCES `Local`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato_Producto` ADD CONSTRAINT `Contrato_Producto_id_contrato_fkey` FOREIGN KEY (`id_contrato`) REFERENCES `Contrato`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato_Producto` ADD CONSTRAINT `Contrato_Producto_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `Producto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_id_tipo_producto_fkey` FOREIGN KEY (`id_tipo_producto`) REFERENCES `Tipo_Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
