-- CreateTable
CREATE TABLE `MensajeChatBot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contenido` VARCHAR(191) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,
    `fecha_y_hora` DATETIME(3) NOT NULL,
    `id_local` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MensajeChatBot` ADD CONSTRAINT `MensajeChatBot_id_local_fkey` FOREIGN KEY (`id_local`) REFERENCES `Local`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
